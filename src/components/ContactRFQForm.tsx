'use client';

import React, { useState } from 'react';

const SCRIPT_PATTERN = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>|<[^>]+>|javascript:|data:\s*text\/html|on\w+\s*=/i;

export default function ContactRFQForm() {
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    phone: '',
    inquiry_type: 'Request Commercial Pricing',
    product_code: '',
    message: '',
    _anti_bot_trap: '',
  });

  const [errorMessage, setErrorMessage] = useState('');
  const [charCount, setCharCount] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const MAX_MESSAGE_LENGTH = 1500;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    // Clear error message when user starts typing
    if (errorMessage) setErrorMessage('');

    if (name === 'message') {
      if (value.length > MAX_MESSAGE_LENGTH) return;
      setCharCount(value.length);
    }

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // 1. Bot Honeypot Check
    if (formData._anti_bot_trap) {
      e.preventDefault();
      // Silently discard bot submission
      setIsSuccess(true);
      return;
    }

    // 2. Anti-Script & XSS Protection
    const fieldsToScan = [
      formData.name,
      formData.organization,
      formData.email,
      formData.phone,
      formData.product_code,
      formData.message,
    ];

    for (const val of fieldsToScan) {
      if (SCRIPT_PATTERN.test(val)) {
        e.preventDefault();
        setErrorMessage('Security Alert: HTML tags, scripts, or executable code are strictly blocked.');
        return;
      }
    }

    // 3. Payload Length Check
    if (formData.message.length > MAX_MESSAGE_LENGTH) {
      e.preventDefault();
      setErrorMessage(`Message payload too large. Maximum ${MAX_MESSAGE_LENGTH} characters allowed.`);
      return;
    }

    // Allow default form submission to Formspree
    setIsSubmitting(true);
  };

  if (isSuccess) {
    return (
      <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 text-center">
        <i className="fa-solid fa-circle-check text-3xl text-emerald-600 mb-2"></i>
        <h4 className="text-lg font-bold text-emerald-900 mb-1">Inquiry Received</h4>
        <p className="text-xs text-emerald-700">
          Our scientific team in Bangalore will evaluate your requirement and respond with CoA &amp; pricing within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 sm:p-7 rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden flex flex-col justify-between">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-indigo-600"></div>
      <div>
        <div className="mb-4">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-bold text-blue-600 uppercase tracking-wider block">
              B2B RFQ Form
            </span>
          <span className="text-[11px] font-medium text-slate-500">
            🔒 256-Bit SSL Protected
          </span>
        </div>
        <h2 className="text-lg sm:text-xl font-bold text-slate-900 mt-0.5">
          Send Us an Inquiry or Sample Request
        </h2>
        <p className="text-xs text-slate-600 mt-0.5">
          All technical and pricing requests receive a guaranteed response with CoA documentation within 24 hours.
        </p>
      </div>

      {errorMessage && (
        <div className="mb-3.5 p-3 rounded-lg bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
          <i className="fa-solid fa-triangle-exclamation shrink-0 text-sm"></i>
          <span>{errorMessage}</span>
        </div>
      )}

      <form 
        action="https://formspree.io/f/mqakvjrp" 
        method="POST" 
        onSubmit={handleSubmit}
        className="space-y-3"
      >
        {/* Anti-Bot Honeypot Field (Hidden from real users) */}
        <input 
          type="text" 
          name="_anti_bot_trap" 
          value={formData._anti_bot_trap} 
          onChange={handleChange}
          tabIndex={-1} 
          autoComplete="off" 
          className="hidden" 
          aria-hidden="true"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label className="block text-[11px] font-semibold text-slate-700 mb-1">
              Your Name *
            </label>
            <input 
              type="text" 
              name="name" 
              value={formData.name}
              onChange={handleChange}
              placeholder="Dr. / Mr. / Ms. Name" 
              required 
              maxLength={70}
              className="w-full px-3 py-1.5 bg-slate-50 border border-slate-300 rounded-lg text-xs text-slate-800 focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all"
            />
          </div>
          <div>
            <label className="block text-[11px] font-semibold text-slate-700 mb-1">
              Organization / Kit Manufacturer *
            </label>
            <input 
              type="text" 
              name="organization" 
              value={formData.organization}
              onChange={handleChange}
              placeholder="Company or Lab Name" 
              required 
              maxLength={100}
              className="w-full px-3 py-1.5 bg-slate-50 border border-slate-300 rounded-lg text-xs text-slate-800 focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label className="block text-[11px] font-semibold text-slate-700 mb-1">
              Work Email *
            </label>
            <input 
              type="email" 
              name="email" 
              value={formData.email}
              onChange={handleChange}
              placeholder="procurement@company.com" 
              required 
              maxLength={100}
              className="w-full px-3 py-1.5 bg-slate-50 border border-slate-300 rounded-lg text-xs text-slate-800 focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all"
            />
          </div>
          <div>
            <label className="block text-[11px] font-semibold text-slate-700 mb-1">
              Phone / WhatsApp *
            </label>
            <input 
              type="tel" 
              name="phone" 
              value={formData.phone}
              onChange={handleChange}
              placeholder="+91-XXXXX XXXXX" 
              required 
              maxLength={20}
              className="w-full px-3 py-1.5 bg-slate-50 border border-slate-300 rounded-lg text-xs text-slate-800 focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label className="block text-[11px] font-semibold text-slate-700 mb-1">
              Inquiry Purpose
            </label>
            <select 
              name="inquiry_type" 
              value={formData.inquiry_type}
              onChange={handleChange}
              className="w-full px-3 py-1.5 bg-slate-50 border border-slate-300 rounded-lg text-xs text-slate-800 focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all"
            >
              <option value="Request Commercial Pricing">Request Commercial Pricing</option>
              <option value="Evaluation Sample Request">Evaluation Sample Request (50µg - 1mg)</option>
              <option value="Bulk Purchase (Grams)">Bulk Commercial Order (Grams+)</option>
              <option value="Custom Contract Service">Custom Hybridoma / Expression CDMO</option>
              <option value="OEM Kit Manufacturing Partnership">OEM Kit Partnership</option>
            </select>
          </div>
          <div>
            <label className="block text-[11px] font-semibold text-slate-700 mb-1">
              Product / Reagent Code
            </label>
            <input 
              type="text" 
              name="product_code" 
              value={formData.product_code}
              onChange={handleChange}
              placeholder="e.g. PVBSP105 (HIV p24)" 
              maxLength={50}
              className="w-full px-3 py-1.5 bg-slate-50 border border-slate-300 rounded-lg text-xs text-slate-800 focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all"
            />
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between mb-1">
            <label className="block text-[11px] font-semibold text-slate-700">
              Project Details / Volume Required
            </label>
            <span className={`text-[10px] ${charCount >= 1400 ? 'text-red-500 font-bold' : 'text-slate-400'}`}>
              {charCount} / {MAX_MESSAGE_LENGTH}
            </span>
          </div>
          <textarea 
            name="message" 
            value={formData.message}
            onChange={handleChange}
            rows={3} 
            maxLength={MAX_MESSAGE_LENGTH}
            placeholder="Specify target analyte, required quantity (mg/grams/liters), buffer preferences, and assay platform (Lateral flow, ELISA, CLIA)..."
            className="w-full px-3 py-1.5 bg-slate-50 border border-slate-300 rounded-lg text-xs text-slate-800 focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all resize-none"
          ></textarea>
        </div>

        <button 
          type="submit" 
          disabled={isSubmitting}
          className="w-full py-2.5 px-6 rounded-lg bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold text-xs transition-colors shadow-sm flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
        >
          {isSubmitting ? (
            <>
              <i className="fa-solid fa-spinner fa-spin text-xs"></i> Processing Inquiry...
            </>
          ) : (
            <>
              <i className="fa-solid fa-paper-plane text-xs"></i> Submit Official RFQ Request
            </>
          )}
        </button>
      </form>
      </div>
    </div>
  );
}
