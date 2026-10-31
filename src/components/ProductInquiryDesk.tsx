'use client';

import React, { useState } from 'react';

interface ProductInquiryDeskProps {
  product: {
    code: string;
    name: string;
    category: string;
    target: string;
    purity: string;
    applications: string;
  };
  matchedPair?: {
    matchedPairCode: string;
    matchedPairName: string;
    recommendedRole: string;
  };
}

export default function ProductInquiryDesk({ product, matchedPair }: ProductInquiryDeskProps) {
  const [modalType, setModalType] = useState<'sample' | 'coa' | 'bundle' | null>(null);
  const [sampleSize, setSampleSize] = useState('1mg');
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    application: 'Lateral Flow Rapid Test',
    notes: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const openModal = (type: 'sample' | 'coa' | 'bundle') => {
    setModalType(type);
    setIsSuccess(false);
    setErrorMessage('');
  };

  const closeModal = () => {
    setModalType(null);
    setIsSuccess(false);
    setErrorMessage('');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    try {
      let inquiryType = 'Evaluation Sample Request';
      let messageContent = '';

      if (modalType === 'sample') {
        inquiryType = `Evaluation Sample (${sampleSize})`;
        messageContent = `Requested Vial Size: ${sampleSize} | Target Platform: ${formData.application} | Notes: ${formData.notes || 'None'}`;
      } else if (modalType === 'coa') {
        inquiryType = 'Lot Certificate of Analysis (CoA) Request';
        messageContent = `Requesting official Lot CoA & Batch Testing scan for ${product.code}. Notes: ${formData.notes || 'None'}`;
      } else if (modalType === 'bundle') {
        inquiryType = 'Matched Pair Bundle Evaluation Sample';
        messageContent = `Requesting Matched Reagent Pair [Coat: ${product.code} + Conjugate: ${matchedPair?.matchedPairCode} (${matchedPair?.matchedPairName})] | Platform: ${formData.application} | Notes: ${formData.notes || 'None'}`;
      }

      const payload = {
        name: formData.name,
        company: formData.company,
        email: formData.email,
        phone: formData.phone,
        inquiry_type: inquiryType,
        product_code: product.code,
        product_name: product.name,
        message: messageContent,
      };

      const res = await fetch('/api/inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.error || 'Failed to submit request. Please try again.');
      }

      setIsSuccess(true);
    } catch (err: any) {
      setErrorMessage(err.message || 'Error submitting request. Please contact info@smdmedicare.in directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const encodedWhatsAppMsg = encodeURIComponent(
    `Hello SMD Life Sciences,\n\nI would like to inquire about Reagent:\nCode: ${product.code}\nName: ${product.name}\nTarget: ${product.target}\n\nPlease share commercial bulk pricing, 1mg-5mg sample availability, and lot CoA.`
  );

  return (
    <>
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[11px] font-bold uppercase tracking-wider text-orange-600 bg-orange-50 border border-orange-200/60 px-2 py-0.5 rounded-md">
            Direct Lab Sourcing &bull; Bangalore
          </span>
          <span className="text-[11px] font-semibold text-emerald-700 flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            In Stock
          </span>
        </div>

        <h3 className="text-lg font-bold text-slate-900 mb-1">
          B2B Evaluation Samples &amp; Bulk PO
        </h3>
        <p className="text-xs text-slate-500 mb-5 leading-relaxed">
          Order 1mg – 5mg test vials for rapid assay optimization or request bulk commercial lot reservations with full Certificate of Analysis.
        </p>

        {/* Action Buttons */}
        <div className="space-y-2.5 mb-6">
          <button
            onClick={() => openModal('sample')}
            className="w-full py-3.5 px-4 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-md hover:shadow-lg cursor-pointer"
          >
            <i className="fa-solid fa-vial text-sm"></i>
            <span>Request 1mg – 5mg Evaluation Sample</span>
          </button>

          <button
            onClick={() => openModal('coa')}
            className="w-full py-3 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs flex items-center justify-center gap-2 transition-colors shadow-sm cursor-pointer"
          >
            <i className="fa-solid fa-file-shield text-xs text-orange-400"></i>
            <span>Request Lot CoA (Certificate of Analysis)</span>
          </button>

          {matchedPair?.matchedPairCode && (
            <button
              onClick={() => openModal('bundle')}
              className="w-full py-3 px-4 rounded-xl bg-indigo-50 hover:bg-indigo-100 text-indigo-900 border border-indigo-200 font-bold text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer"
            >
              <i className="fa-solid fa-diagram-project text-xs text-indigo-600"></i>
              <span>Order Matched Pair Bundle ({product.code} + {matchedPair.matchedPairCode})</span>
            </button>
          )}

          <a
            href={`https://wa.me/919555422455?text=${encodedWhatsAppMsg}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3 px-4 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-300 font-bold text-xs flex items-center justify-center gap-2 transition-colors"
          >
            <i className="fab fa-whatsapp text-emerald-600 text-sm"></i>
            <span>Inquire on WhatsApp (+91 95554 22455)</span>
          </a>
        </div>

        {/* Bangalore Express Logistics Badge & Trust Badges */}
        <div className="space-y-3 pt-5 border-t border-slate-100 text-xs text-slate-600">
          <div className="p-3 bg-amber-50/70 border border-amber-200/80 rounded-xl flex items-start gap-2.5">
            <i className="fa-solid fa-truck-fast text-orange-600 mt-0.5 text-sm shrink-0"></i>
            <div>
              <span className="font-bold text-amber-950 block">Bangalore Bio-Cluster 24–48h Dispatch</span>
              <span className="text-[11px] text-amber-800 leading-tight block mt-0.5">
                Shipped under calibrated cold chain (-20°C dry ice / 2–8°C gel pack) with continuous temperature indicators.
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 text-slate-600">
            <i className="fa-solid fa-file-invoice-dollar text-slate-400 shrink-0 text-xs"></i>
            <span>GST Tax Invoice with Input Tax Credit (ITC)</span>
          </div>
          <div className="flex items-center gap-2 text-slate-600">
            <i className="fa-solid fa-certificate text-slate-400 shrink-0 text-xs"></i>
            <span>Lot-specific SDS-PAGE, ELISA &amp; Protein A280 CoA</span>
          </div>
          <div className="flex items-center gap-2 text-slate-600">
            <i className="fa-solid fa-boxes-stacked text-slate-400 shrink-0 text-xs"></i>
            <span>Commercial Lot Reservation for IVD Kit Assembly</span>
          </div>
        </div>
      </div>

      {/* Modal Popup for Fast RFQ / Sample Request */}
      {modalType && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 backdrop-blur-xs p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-7 shadow-2xl border border-slate-200 relative my-8 animate-in fade-in duration-200">
            
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 w-8 h-8 rounded-full flex items-center justify-center hover:bg-slate-100 transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <i className="fa-solid fa-xmark text-lg"></i>
            </button>

            {isSuccess ? (
              <div className="text-center py-6">
                <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                  <i className="fa-solid fa-check"></i>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Request Successfully Submitted</h3>
                <p className="text-xs sm:text-sm text-slate-600 mb-4 max-w-sm mx-auto leading-relaxed">
                  Thank you! Our technical desk in Bangalore has received your inquiry for <strong>{product.code}</strong>. We will share the Certificate of Analysis and dispatch details within 24 hours.
                </p>
                <button
                  onClick={closeModal}
                  className="px-6 py-2.5 rounded-xl bg-orange-600 text-white font-bold text-xs hover:bg-orange-700 transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
            ) : (
              <div>
                <div className="mb-4">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-orange-600">
                    {modalType === 'sample' && 'Sample Dispatch Request'}
                    {modalType === 'coa' && 'Batch CoA Documentation Request'}
                    {modalType === 'bundle' && 'Matched Pair Bundle Sourcing'}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 mt-0.5">
                    {modalType === 'sample' && `Request Evaluation Sample: ${product.code}`}
                    {modalType === 'coa' && `Download Lot CoA: ${product.code}`}
                    {modalType === 'bundle' && `Matched Pair Bundle: ${product.code} + ${matchedPair?.matchedPairCode}`}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    {product.name} ({product.target}) &bull; Fast domestic dispatch from Bangalore
                  </p>
                </div>

                {errorMessage && (
                  <div className="mb-4 p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
                    <i className="fa-solid fa-triangle-exclamation shrink-0"></i>
                    <span>{errorMessage}</span>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-3.5">
                  {modalType === 'sample' && (
                    <div>
                      <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                        Select Sample Vial Volume *
                      </label>
                      <div className="grid grid-cols-4 gap-2">
                        {['1mg', '2mg', '5mg', 'Custom'].map((vol) => (
                          <button
                            type="button"
                            key={vol}
                            onClick={() => setSampleSize(vol)}
                            className={`py-2 text-xs font-bold rounded-lg border transition-all cursor-pointer ${
                              sampleSize === vol
                                ? 'bg-orange-600 text-white border-orange-600 shadow-sm'
                                : 'bg-slate-50 text-slate-700 border-slate-300 hover:bg-slate-100'
                            }`}
                          >
                            {vol}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="Dr. / Mr. / Ms."
                        className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-xs text-slate-900 focus:bg-white focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                        Organization / Lab Name *
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        required
                        placeholder="Kit Manufacturer / Diagnostic Lab"
                        className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-xs text-slate-900 focus:bg-white focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                        Business Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="name@company.com"
                        className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-xs text-slate-900 focus:bg-white focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none"
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
                        onChange={handleInputChange}
                        required
                        placeholder="+91 98765 43210"
                        className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-xs text-slate-900 focus:bg-white focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                      Target Diagnostic Platform
                    </label>
                    <select
                      name="application"
                      value={formData.application}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-xs text-slate-900 focus:bg-white focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none"
                    >
                      <option value="Lateral Flow Rapid Test (Colloidal Gold)">Lateral Flow Rapid Test (Colloidal Gold)</option>
                      <option value="Sandwich ELISA Kit">Sandwich ELISA Kit</option>
                      <option value="Chemiluminescence Immunoassay (CLIA)">Chemiluminescence Immunoassay (CLIA)</option>
                      <option value="Turbidimetry / Latex Enhanced">Turbidimetry / Latex Enhanced</option>
                      <option value="Western Blot / Analytical R&D">Western Blot / Analytical R&amp;D</option>
                      <option value="Other">Other Diagnostic Application</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                      Project Notes / Specific Buffer / Delivery Timeline
                    </label>
                    <textarea
                      name="notes"
                      value={formData.notes}
                      onChange={handleInputChange}
                      rows={2}
                      placeholder="e.g. Need azide-free buffer, urgent dispatch to Delhi/Hyderabad, or custom 100mg batch quote..."
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-xs text-slate-900 focus:bg-white focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none"
                    ></textarea>
                  </div>

                  <div className="pt-2 flex items-center justify-end gap-3">
                    <button
                      type="button"
                      onClick={closeModal}
                      className="px-4 py-2.5 rounded-xl border border-slate-300 text-slate-600 text-xs font-semibold hover:bg-slate-50 transition-colors cursor-pointer"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-6 py-2.5 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-bold text-xs shadow-md transition-all flex items-center gap-2 cursor-pointer disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <>
                          <i className="fa-solid fa-spinner fa-spin text-xs"></i>
                          <span>Submitting...</span>
                        </>
                      ) : (
                        <>
                          <span>Submit Request</span>
                          <i className="fa-solid fa-arrow-right text-xs"></i>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
