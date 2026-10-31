import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Service & Commercial Supply Agreements | SMD Life Sciences',
  description: 'Terms of service, reagent evaluation sample conditions, commercial manufacturing supply terms, and CDMO milestone agreements at SMD Life Sciences.',
  alternates: {
    canonical: 'https://lifesciences.smdmedicare.in/terms',
  },
  openGraph: {
    title: 'Terms of Service | SMD Life Sciences',
    description: 'Commercial supply terms, research-use only (RUO) and IVD manufacturing grade definitions, and milestone-based CDMO agreements.',
    url: 'https://lifesciences.smdmedicare.in/terms',
    siteName: 'SMD Life Sciences',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 pt-28 pb-20 font-sans">
      <div className="max-w-4xl mx-auto px-5 sm:px-8">
        
        {/* Header Breadcrumb */}
        <div className="mb-6 flex items-center gap-2 text-xs text-slate-500">
          <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
          <span>/</span>
          <span className="text-slate-800 font-medium">Terms of Service</span>
        </div>

        {/* Title Card */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/80 shadow-xs mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-semibold mb-4">
            <i className="fas fa-file-contract text-slate-600"></i> Commercial &amp; Scientific Terms
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Terms of Service &amp; Supply Agreements
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            These terms govern the procurement of biological raw materials (recombinant antigens, monoclonal antibodies, secondary conjugates, cytokines, and enzymes) as well as custom CDMO research contracts provided by SMD Life Sciences.
          </p>
        </div>

        {/* Content Sections */}
        <div className="space-y-6">

          {/* Section 1: Intended Use */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-xs">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-3 flex items-center gap-2.5">
              <span className="w-8 h-8 rounded-lg bg-slate-100 text-slate-700 flex items-center justify-center text-sm font-bold">1</span>
              Intended Use &amp; Regulatory Classification
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed mb-3">
              Unless explicitly certified in writing, biological reagents manufactured and distributed by SMD Life Sciences are supplied as <strong>raw materials for In Vitro Diagnostic (IVD) test kit manufacturing</strong> or for <strong>Research Use Only (RUO)</strong>:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-sm text-slate-600">
              <li>Reagents are not intended for direct in vivo therapeutic administration, clinical human ingestion, or direct patient diagnosis without downstream validated assay assembly and regulatory registration.</li>
              <li>Diagnostic kit manufacturers assume full statutory responsibility for their end-product analytical and clinical validations, regulatory approvals (CDSCO, CE-IVD, FDA 510(k)), and batch release testing.</li>
            </ul>
          </div>

          {/* Section 2: Sample Evaluation Terms */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-xs">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-3 flex items-center gap-2.5">
              <span className="w-8 h-8 rounded-lg bg-slate-100 text-slate-700 flex items-center justify-center text-sm font-bold">2</span>
              Evaluation Sample Vials (1mg &ndash; 5mg)
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed mb-2">
              Evaluation samples are provided to validated diagnostic manufacturers and academic institutions to assess solid-phase binding affinity, analytical sensitivity, and pairing compatibility with their specific assay platform.
            </p>
            <p className="text-sm text-slate-600 leading-relaxed">
              Samples are dispatched with batch CoA documentation. Resale or reverse-engineering of evaluation samples is strictly prohibited.
            </p>
          </div>

          {/* Section 3: CDMO Milestones */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-xs">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-3 flex items-center gap-2.5">
              <span className="w-8 h-8 rounded-lg bg-slate-100 text-slate-700 flex items-center justify-center text-sm font-bold">3</span>
              Custom CDMO &amp; Hybridoma Service Milestones
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed mb-3">
              Custom monoclonal and polyclonal antibody development contracts are governed by milestone-based execution:
            </p>
            <ol className="list-decimal pl-5 space-y-2 text-sm text-slate-600">
              <li><strong>Phase I Acceptance:</strong> Immunization proceeds until serum antibody titers reach agreed specifications (&ge; 1:128,000 for ELISA).</li>
              <li><strong>Phase II Screening:</strong> Hybridoma fusions are screened with client-supplied test matrices or standard ELISA/WB.</li>
              <li><strong>Deliverables Release:</strong> Final purified antibodies and cryopreserved clones are shipped upon final milestone sign-off.</li>
            </ol>
          </div>

          {/* Section 4: Governing Law */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-xs">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-3 flex items-center gap-2.5">
              <span className="w-8 h-8 rounded-lg bg-slate-100 text-slate-700 flex items-center justify-center text-sm font-bold">4</span>
              Governing Jurisdiction
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              All commercial agreements and supply orders are governed by the laws of India. Any legal disputes arising in connection with sales or contract research are subject exclusively to the courts of Bangalore, Karnataka, India.
            </p>
          </div>

          {/* Section 5: Legal Contact */}
          <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="font-bold text-base mb-1">Corporate &amp; Commercial Contracts Desk</h3>
              <p className="text-xs text-slate-400">SMD MEDICARE &ndash; Life Sciences Division</p>
            </div>
            <a href="mailto:info@smdmedicare.in" className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs border border-slate-700 transition-colors">
              <i className="fas fa-envelope mr-1.5"></i> Contact Commercial Desk
            </a>
          </div>

        </div>

      </div>
    </main>
  );
}
