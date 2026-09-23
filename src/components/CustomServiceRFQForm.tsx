'use client';

import React, { useState } from 'react';

const SCRIPT_PATTERN = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>|<[^>]+>|javascript:|data:\s*text\/html|on\w+\s*=/i;

export default function CustomServiceRFQForm() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service_type: 'Custom Monoclonal Antibody (Hybridoma)',
    target_and_volume: '',
    project_notes: '',
    _anti_bot_trap: '',
  });

  const [errorMessage, setErrorMessage] = useState('');
  const [charCount, setCharCount] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const MAX_NOTES_LENGTH = 1500;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (errorMessage) setErrorMessage('');

    if (name === 'project_notes') {
      if (value.length > MAX_NOTES_LENGTH) return;
      setCharCount(value.length);
    }

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // 1. Honeypot check
    if (formData._anti_bot_trap) {
      e.preventDefault();
      setIsSuccess(true);
      return;
    }

    // 2. Anti-Script & XSS Protection
    const fieldsToScan = [
      formData.name,
      formData.company,
      formData.email,
      formData.phone,
      formData.target_and_volume,
      formData.project_notes,
    ];

    for (const val of fieldsToScan) {
      if (SCRIPT_PATTERN.test(val)) {
        e.preventDefault();
        setErrorMessage('Security Alert: HTML tags, scripts, or executable code are strictly blocked.');
        return;
      }
    }

    // 3. Payload length check
    if (formData.project_notes.length > MAX_NOTES_LENGTH) {
      e.preventDefault();
      setErrorMessage(`Payload too large. Maximum ${MAX_NOTES_LENGTH} characters allowed.`);
      return;
    }

    setIsSubmitting(true);
  };

  if (isSuccess) {
    return (
      <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-3xl p-8 sm:p-12 text-center text-white backdrop-blur-md">
        <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center text-2xl mb-4 border border-emerald-500/40">
          <i className="fa-solid fa-check"></i>
        </div>
        <h4 className="text-xl font-bold text-white mb-2">Proposal Request Received</h4>
        <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto leading-relaxed mb-4">
          Our scientific R&amp;D team in Bangalore will evaluate your requirements and contact you within 48 hours.
        </p>
        <span className="text-[11px] text-emerald-400">
          🔒 Covered under mutual NDA protocol
        </span>
      </div>
    );
  }

  return (
    <div className="bg-white text-slate-900 rounded-3xl p-6 sm:p-9 shadow-xl border border-slate-200/80">
      
      {/* Title */}
      <div className="mb-6 pb-4 border-b border-slate-100 flex items-center justify-between">
        <div>
          <h3 className="font-bold text-slate-900 text-lg sm:text-xl">Project Inquiry Form</h3>
          <p className="text-xs text-slate-500 mt-0.5">Tell us about your diagnostic or R&amp;D requirements</p>
        </div>
        <span className="text-xs font-semibold text-orange-600 bg-orange-50 border border-orange-200/60 px-2.5 py-1 rounded-full">
          Fast Evaluation
        </span>
      </div>

      {errorMessage && (
        <div className="mb-5 p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
          <i className="fa-solid fa-triangle-exclamation shrink-0"></i>
          <span>{errorMessage}</span>
        </div>
      )}

      <form 
        action="https://formsubmit.co/info@smdmedicare.in" 
        method="POST"
        onSubmit={handleSubmit}
        className="space-y-5"
      >
        <input type="hidden" name="_subject" value="New B2B Biotech Custom Service RFQ" />
        <input type="hidden" name="_captcha" value="false" />

        {/* Honeypot */}
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

        {/* Row 1: Name & Company */}
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1.5">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input 
              type="text" 
              name="name" 
              value={formData.name}
              onChange={handleChange}
              required 
              maxLength={70}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 focus:outline-none transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1.5">
              Company / Institution <span className="text-red-500">*</span>
            </label>
            <input 
              type="text" 
              name="company" 
              value={formData.company}
              onChange={handleChange}
              required 
              maxLength={100}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 focus:outline-none transition-colors"
            />
          </div>
        </div>

        {/* Row 2: Email & Phone */}
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1.5">
              Work Email <span className="text-red-500">*</span>
            </label>
            <input 
              type="email" 
              name="email" 
              value={formData.email}
              onChange={handleChange}
              required 
              maxLength={100}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 focus:outline-none transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1.5">
              WhatsApp / Phone <span className="text-red-500">*</span>
            </label>
            <input 
              type="tel" 
              name="phone" 
              value={formData.phone}
              onChange={handleChange}
              required 
              maxLength={20}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 focus:outline-none transition-colors"
            />
          </div>
        </div>

        {/* Row 3: Service Type & Target */}
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1.5">
              Service Required <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <select 
                name="service_type" 
                value={formData.service_type}
                onChange={handleChange}
                required
                className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 focus:outline-none bg-white transition-colors appearance-none cursor-pointer"
              >
                <option value="Custom Monoclonal Antibody (Hybridoma)">Custom Monoclonal Antibody (Hybridoma)</option>
                <option value="Recombinant Protein Expression & Purification">Recombinant Protein Expression &amp; Purification</option>
                <option value="Colloidal Gold Bioconjugation">Colloidal Gold Bioconjugation</option>
                <option value="Matched Pair Lateral Flow Optimization">Matched Pair Lateral Flow Optimization</option>
                <option value="Bulk Reagent Batch Reservation">Bulk Reagent Batch Reservation</option>
              </select>
              <span className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none text-slate-400 text-xs">
                <i className="fas fa-chevron-down"></i>
              </span>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1.5">
              Target Analyte / Scale <span className="text-slate-400 font-normal">(Optional)</span>
            </label>
            <input 
              type="text" 
              name="target_and_volume" 
              value={formData.target_and_volume}
              onChange={handleChange}
              maxLength={60}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 focus:outline-none transition-colors"
            />
          </div>
        </div>

        {/* Row 4: Notes */}
        <div>
          <div className="flex items-center justify-between mb-1.5">
            <label className="block text-xs font-semibold text-slate-700">
              Project Details &amp; Requirements
            </label>
            <span className={`text-[10px] font-mono ${charCount >= 1400 ? 'text-red-500 font-bold' : 'text-slate-400'}`}>
              {charCount} / {MAX_NOTES_LENGTH}
            </span>
          </div>
          <textarea 
            name="project_notes" 
            value={formData.project_notes}
            onChange={handleChange}
            rows={3}
            maxLength={MAX_NOTES_LENGTH}
            className="w-full p-4 rounded-xl border border-slate-300 text-sm focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 focus:outline-none resize-none transition-colors"
          ></textarea>
        </div>

        {/* Footer */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <i className="fas fa-lock text-slate-400"></i>
            <span>NDA protected · Strictly confidential</span>
          </div>

          <button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full sm:w-auto px-7 py-3 bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white font-bold text-sm rounded-xl transition-all shadow-md shadow-orange-900/20 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
          >
            {isSubmitting ? (
              <>
                <i className="fa-solid fa-spinner fa-spin text-xs"></i> Submitting...
              </>
            ) : (
              <>
                <i className="fa-solid fa-paper-plane text-xs"></i> Submit Project RFQ
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
