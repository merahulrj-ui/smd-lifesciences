import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy & Confidentiality Protocol | SMD Life Sciences',
  description: 'Data protection policies, non-disclosure compliance, proprietary sequence security, and client confidentiality protocols at SMD Life Sciences.',
  alternates: {
    canonical: 'https://lifesciences.smdmedicare.in/privacy-policy',
  },
  openGraph: {
    title: 'Privacy Policy & Confidentiality | SMD Life Sciences',
    description: 'Learn how SMD Life Sciences safeguards customer R&D data, custom hybridoma clones, and proprietary target sequences.',
    url: 'https://lifesciences.smdmedicare.in/privacy-policy',
    siteName: 'SMD Life Sciences',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 pt-28 pb-20 font-sans">
      <div className="max-w-4xl mx-auto px-5 sm:px-8">
        
        {/* Header Breadcrumb */}
        <div className="mb-6 flex items-center gap-2 text-xs text-slate-500">
          <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
          <span>/</span>
          <span className="text-slate-800 font-medium">Privacy Policy</span>
        </div>

        {/* Title Card */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/80 shadow-xs mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-semibold mb-4">
            <i className="fas fa-user-shield text-indigo-500"></i> Client Data Protection &amp; NDA Protocol
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Privacy Policy &amp; Scientific Confidentiality
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            SMD Life Sciences understands that biotechnology R&amp;D, custom antibody project parameters, and proprietary target sequences represent highly sensitive intellectual assets. We are strictly committed to safeguarding your proprietary information, experimental designs, and corporate data.
          </p>
        </div>

        {/* Content Sections */}
        <div className="space-y-6">

          {/* Section 1: Information Collection */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-xs">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-3 flex items-center gap-2.5">
              <span className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center text-sm font-bold">1</span>
              Technical Data Collected for Inquiries &amp; CDMO Projects
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed mb-3">
              When you submit a sample evaluation request, technical RFQ, or custom antibody inquiry, we collect only necessary operational information, including:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-sm text-slate-600">
              <li><strong>Contact Information:</strong> Name, professional corporate email, phone number, and institutional affiliation.</li>
              <li><strong>Project Specifications:</strong> Target antigen name, accession number, desired antibody format, and screening applications.</li>
              <li><strong>Technical Notes:</strong> Evaluation criteria and timeline requirements.</li>
            </ul>
          </div>

          {/* Section 2: Non-Disclosure & IP Protection */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-xs">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-3 flex items-center gap-2.5">
              <span className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center text-sm font-bold">2</span>
              Strict Non-Disclosure &amp; Intellectual Property Security
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed mb-3">
              All discussions, sequence files, and custom antibody proposals are treated as strictly confidential under our standard institutional non-disclosure protocol:
            </p>
            <div className="space-y-3 text-xs sm:text-sm text-slate-600">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/60">
                <strong className="text-slate-900 block mb-1">Mutual NDA Execution:</strong>
                We execute formal bilateral Non-Disclosure Agreements (NDAs) prior to receiving proprietary antigens, hybridoma cell lines, or confidential sequence data.
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/60">
                <strong className="text-slate-900 block mb-1">100% Client Ownership:</strong>
                All custom monoclonal antibody hybridoma clones, expressed recombinant proteins, and derived biological assets belong exclusively to the client upon milestone payment.
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/60">
                <strong className="text-slate-900 block mb-1">Zero Commercial Cross-Contamination:</strong>
                Client-commissioned target designs and antibodies are never cataloged, commercialized, or shared with third parties.
              </div>
            </div>
          </div>

          {/* Section 3: Data Security */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-xs">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-3 flex items-center gap-2.5">
              <span className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center text-sm font-bold">3</span>
              Data Protection &amp; Encryption Standards
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Our web infrastructure utilizes end-to-end 256-bit TLS/SSL encryption. Project files and correspondence are maintained on secure internal database clusters with role-based access restrictions restricted exclusively to the assigned R&amp;D project team in Bangalore.
            </p>
          </div>

          {/* Section 4: Privacy Contact */}
          <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="font-bold text-base mb-1">Data Protection &amp; Compliance Office</h3>
              <p className="text-xs text-slate-400">Electronic City, Bangalore, Karnataka &ndash; 560100</p>
            </div>
            <a href="mailto:info@smdmedicare.in" className="px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs transition-colors">
              <i className="fas fa-envelope mr-1.5"></i> info@smdmedicare.in
            </a>
          </div>

        </div>

      </div>
    </main>
  );
}
