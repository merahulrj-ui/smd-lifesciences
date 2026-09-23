'use client';

import React, { useState, useRef } from 'react';

const SCRIPT_PATTERN = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>|<[^>]+>|javascript:|data:\s*text\/html|on\w+\s*=/i;

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [country, setCountry] = useState('United States');
  const [serviceType, setServiceType] = useState('Custom Monoclonal Antibody Generation');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [antiBot, setAntiBot] = useState('');

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<'success' | 'error' | 'security_error' | ''>('');
  const [errorMessage, setErrorMessage] = useState('');
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // 1. Honeypot check
    if (antiBot) {
      setStatus('success');
      return;
    }

    // 2. Anti-Script & XSS Protection
    const fieldsToScan = [name, email, phone, country, serviceType, message];
    for (const val of fieldsToScan) {
      if (SCRIPT_PATTERN.test(val)) {
        setStatus('security_error');
        setErrorMessage('Security Alert: HTML tags, scripts, or executable code are strictly blocked.');
        return;
      }
    }

    // 3. Payload length check
    if (message.length > 1500) {
      setStatus('security_error');
      setErrorMessage('Message payload too large. Maximum 1500 characters allowed.');
      return;
    }

    setLoading(true);
    setStatus('');
    setErrorMessage('');

    try {
      const res = await fetch('https://formspree.io/f/mqakvjrp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          country_region: country,
          inquiry_type: serviceType,
          phone,
          message,
        }),
      });

      if (res.ok) {
        setStatus('success');
        setName('');
        setEmail('');
        setPhone('');
        setMessage('');
        setCountry('United States');
        setServiceType('Custom Monoclonal Antibody Generation');
        if (formRef.current) formRef.current.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-3 flex-grow justify-between">
      {/* Honeypot hidden input */}
      <input 
        type="text" 
        name="_anti_bot_trap" 
        value={antiBot} 
        onChange={(e) => setAntiBot(e.target.value)} 
        tabIndex={-1} 
        autoComplete="off" 
        className="hidden" 
        aria-hidden="true" 
      />

      <div className="flex flex-col gap-1">
        <label className="text-xs sm:text-sm font-bold text-slate-700 ml-1">
          Full Name <span className="text-red-500">*</span>
        </label>
        <input 
          type="text" 
          name="name" 
          required 
          maxLength={80}
          value={name}
          onChange={(e) => {
            if (status) setStatus('');
            setName(e.target.value);
          }}
          placeholder="E.g., John Doe" 
          className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all placeholder-slate-400 font-medium"
        />
      </div>
      
      <div className="flex flex-col gap-1">
        <label className="text-xs sm:text-sm font-bold text-slate-700 ml-1">
          Email Address <span className="text-red-500">*</span>
        </label>
        <input 
          type="email" 
          name="email" 
          required 
          maxLength={100}
          value={email}
          onChange={(e) => {
            if (status) setStatus('');
            setEmail(e.target.value);
          }}
          placeholder="E.g., john@example.com" 
          className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all placeholder-slate-400 font-medium"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div className="flex flex-col gap-1">
          <label className="text-xs sm:text-sm font-bold text-slate-700 ml-1">
            Country / Region <span className="text-red-500">*</span>
          </label>
          <select
            name="country"
            value={country}
            onChange={(e) => {
              if (status) setStatus('');
              setCountry(e.target.value);
            }}
            className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all font-medium"
          >
            <optgroup label="Top Global Biotech & IVD Markets">
              <option value="United States">🇺🇸 United States (+1)</option>
              <option value="Germany">🇩🇪 Germany (+49)</option>
              <option value="United Kingdom">🇬🇧 United Kingdom (+44)</option>
              <option value="Switzerland">🇨🇭 Switzerland (+41)</option>
              <option value="Japan">🇯🇵 Japan (+81)</option>
              <option value="South Korea">🇰🇷 South Korea (+82)</option>
              <option value="Singapore">🇸🇬 Singapore (+65)</option>
              <option value="India">🇮🇳 India (+91)</option>
            </optgroup>
            <optgroup label="Middle East & APAC">
              <option value="United Arab Emirates">🇦🇪 United Arab Emirates (+971)</option>
              <option value="Saudi Arabia">🇸🇦 Saudi Arabia (+966)</option>
              <option value="Australia">🇦🇺 Australia (+61)</option>
              <option value="Vietnam">🇻🇳 Vietnam (+84)</option>
              <option value="Thailand">🇹🇭 Thailand (+66)</option>
            </optgroup>
            <optgroup label="Europe & Americas">
              <option value="Canada">🇨🇦 Canada (+1)</option>
              <option value="France">🇫🇷 France (+33)</option>
              <option value="Netherlands">🇳🇱 Netherlands (+31)</option>
              <option value="Italy">🇮🇹 Italy (+39)</option>
              <option value="Spain">🇪🇸 Spain (+34)</option>
              <option value="Brazil">🇧🇷 Brazil (+55)</option>
              <option value="Other International">🌍 Other International</option>
            </optgroup>
          </select>
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-xs sm:text-sm font-bold text-slate-700 ml-1">
            Inquiry / Service Type <span className="text-red-500">*</span>
          </label>
          <select
            name="serviceType"
            value={serviceType}
            onChange={(e) => {
              if (status) setStatus('');
              setServiceType(e.target.value);
            }}
            className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all font-medium"
          >
            <option value="Custom Monoclonal Antibody Generation">Custom Monoclonal Antibody Generation (Hybridoma / Recombinant)</option>
            <option value="Recombinant Antigen Sourcing & Bulk Supply">Recombinant Antigen Sourcing & Bulk Scaling</option>
            <option value="Diagnostic CDMO (Lateral Flow / ELISA)">Diagnostic CDMO (Lateral Flow & ELISA Assay Development)</option>
            <option value="Bulk IVD Raw Materials & Conjugates">Bulk IVD Raw Materials (Gold/Latex Conjugates)</option>
            <option value="Evaluation Sample & CoA Request">Evaluation Sample & Lot CoA Request</option>
          </select>
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-xs sm:text-sm font-bold text-slate-700 ml-1">
          Phone / WhatsApp (with Country Code) <span className="text-red-500">*</span>
        </label>
        <input 
          type="tel" 
          name="phone" 
          required 
          maxLength={25}
          value={phone}
          onChange={(e) => {
            if (status) setStatus('');
            setPhone(e.target.value);
          }}
          placeholder="E.g., +1 (555) 019-2834 or +44 20 7946 0912 or +91 98765 43210" 
          className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all placeholder-slate-400 font-medium"
        />
      </div>
      
      <div className="flex flex-col gap-1">
        <div className="flex items-center justify-between ml-1">
          <label className="text-xs sm:text-sm font-bold text-slate-700">
            Message / Requirements <span className="text-red-500">*</span>
          </label>
          <span className={`text-[10px] ${message.length >= 1400 ? 'text-red-500 font-bold' : 'text-slate-400'}`}>
            {message.length} / 1500
          </span>
        </div>
        <textarea 
          name="message" 
          rows={3} 
          required 
          maxLength={1500}
          value={message}
          onChange={(e) => {
            if (status) setStatus('');
            setMessage(e.target.value);
          }}
          placeholder="Specify target reagent (antigen/antibody), required volume (mg/grams/liters), or custom CDMO service details..."
          className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all placeholder-slate-400 font-medium resize-none"
        ></textarea>
      </div>

      <button 
        type="submit" 
        disabled={loading}
        className="w-full bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white font-bold py-3 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 text-sm sm:text-base disabled:opacity-70 disabled:pointer-events-none cursor-pointer mt-1"
      >
        {loading ? (
          <><i className="fas fa-spinner fa-spin"></i> Submitting...</>
        ) : (
          <><i className="fas fa-paper-plane"></i> Send Technical RFQ</>
        )}
      </button>

      {status === 'success' && (
        <div className="mt-2 p-4 bg-emerald-50 border border-emerald-100 rounded-xl flex items-start gap-3">
          <div className="text-emerald-500 mt-0.5"><i className="fas fa-check-circle text-lg"></i></div>
          <p className="text-sm font-medium text-emerald-800">Message sent successfully! Our procurement team will get back to you shortly.</p>
        </div>
      )}

      {status === 'security_error' && (
        <div className="mt-2 p-4 bg-red-50 border border-red-200 rounded-xl flex items-start gap-3">
          <div className="text-red-500 mt-0.5"><i className="fas fa-triangle-exclamation text-lg"></i></div>
          <p className="text-sm font-medium text-red-800">{errorMessage}</p>
        </div>
      )}
      
      {status === 'error' && (
        <div className="mt-2 p-4 bg-red-50 border border-red-100 rounded-xl flex items-start gap-3">
          <div className="text-red-500 mt-0.5"><i className="fas fa-exclamation-circle text-lg"></i></div>
          <p className="text-sm font-medium text-red-800">Failed to send message. Please try again or contact us directly on WhatsApp.</p>
        </div>
      )}
    </form>
  );
}
