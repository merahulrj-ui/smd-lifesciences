import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Biological Reagent Replacement & Quality Guarantee Policy | SMD Life Sciences',
  description: 'Quality assurance guarantee, lot-to-lot Certificate of Analysis (CoA) compliance, defective cold-chain reporting window, and replacement terms for diagnostic antibodies and recombinant antigens.',
  alternates: {
    canonical: 'https://lifesciences.smdmedicare.in/return-policy',
  },
  openGraph: {
    title: 'Biological Reagent Quality & Replacement Policy | SMD Life Sciences',
    description: 'Learn about our 100% CoA compliance guarantee, 7-day inspection window, and cold-chain replacement protocols for biological raw materials.',
    url: 'https://lifesciences.smdmedicare.in/return-policy',
    siteName: 'SMD Life Sciences',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function ReturnPolicyPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 pt-28 pb-20 font-sans">
      <div className="max-w-4xl mx-auto px-5 sm:px-8">
        
        {/* Header Breadcrumb */}
        <div className="mb-6 flex items-center gap-2 text-xs text-slate-500">
          <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
          <span>/</span>
          <span className="text-slate-800 font-medium">Reagent Replacement Policy</span>
        </div>

        {/* Title Card */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/80 shadow-xs mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold mb-4">
            <i className="fas fa-certificate text-emerald-500"></i> Quality Assurance &amp; Replacement Terms
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Biological Reagents Quality &amp; Replacement Policy
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Due to the temperature-sensitive nature and biosafety regulations governing biological raw materials (recombinant antigens, antibodies, cytokines, and enzymes), physical returns of unsealed reagents cannot be accepted. However, we back every shipment with an uncompromising quality guarantee and rapid batch replacement policy.
          </p>
        </div>

        {/* Content Sections */}
        <div className="space-y-6">

          {/* Section 1: Quality Guarantee */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-xs">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-3 flex items-center gap-2.5">
              <span className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center text-sm font-bold">1</span>
              Batch Certificate of Analysis (CoA) Specification Guarantee
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed mb-4">
              Every commercial lot and evaluation vial dispatched from our Bangalore facility is accompanied by an authentic lot-specific Certificate of Analysis verifying:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-600">
              <li className="p-3 rounded-xl bg-slate-50 border border-slate-200/60 flex items-start gap-2">
                <i className="fas fa-check text-emerald-500 mt-0.5"></i>
                <span><strong>Purity Level:</strong> &ge; 95% confirmed via SDS-PAGE &amp; SEC-HPLC.</span>
              </li>
              <li className="p-3 rounded-xl bg-slate-50 border border-slate-200/60 flex items-start gap-2">
                <i className="fas fa-check text-emerald-500 mt-0.5"></i>
                <span><strong>Endotoxin Clearance:</strong> &lt; 0.1 EU/&mu;g for cell culture and clinical grades.</span>
              </li>
              <li className="p-3 rounded-xl bg-slate-50 border border-slate-200/60 flex items-start gap-2">
                <i className="fas fa-check text-emerald-500 mt-0.5"></i>
                <span><strong>Bio-Affinity &amp; Titer:</strong> Benchmarked via ELISA / Lateral Flow paired strip testing.</span>
              </li>
              <li className="p-3 rounded-xl bg-slate-50 border border-slate-200/60 flex items-start gap-2">
                <i className="fas fa-check text-emerald-500 mt-0.5"></i>
                <span><strong>Microbial Sterility:</strong> Confirmed negative for bacterial and mycoplasma contaminants.</span>
              </li>
            </ul>
          </div>

          {/* Section 2: 7-Day Inspection Window */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-xs">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-3 flex items-center gap-2.5">
              <span className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center text-sm font-bold">2</span>
              7-Day Technical Inspection &amp; Replacement Window
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed mb-3">
              Customers are provided a strict <strong>7-business-day evaluation window</strong> from the verified carrier delivery timestamp to inspect the shipment and notify our quality assurance department of any of the following issues:
            </p>
            <ul className="space-y-2 text-sm text-slate-600 list-disc pl-5">
              <li><strong>Compromised Cold-Chain:</strong> Complete thawing of dry ice or melting of cooling gel packs upon arrival due to carrier transit delays.</li>
              <li><strong>Physical Container Damage:</strong> Cracked cryovials, compromised septum seals, or leaking reagent bottles during transit.</li>
              <li><strong>Specification Mismatch:</strong> Discrepancies between the received lot number/documentation and the purchase order specifications.</li>
            </ul>
            <div className="mt-4 p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900">
              <strong>Reporting Requirement:</strong> To initiate a replacement claim, email your lot number, high-resolution photographs of the container/temperature indicator, and a brief description of the issue to <strong>info@smdmedicare.in</strong> within 7 calendar days of delivery.
            </div>
          </div>

          {/* Section 3: Replacement Execution */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-xs">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-3 flex items-center gap-2.5">
              <span className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center text-sm font-bold">3</span>
              Immediate Replacement Dispatch
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Upon technical validation by our quality assurance desk, replacement vials from the same or an approved equivalent lot will be prepared and dispatched via priority air cold-chain within <strong>24 to 48 hours at zero cost to the client</strong>. Clients will be guided on the safe biohazard autoclaving/disposal of the compromised material in accordance with local environmental guidelines.
            </p>
          </div>

          {/* Section 4: Contact QA Desk */}
          <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="font-bold text-base mb-1">Quality Assurance &amp; Replacement Desk</h3>
              <p className="text-xs text-slate-400">Available Monday &ndash; Saturday (9:00 AM &ndash; 7:00 PM IST)</p>
            </div>
            <div className="flex items-center gap-3">
              <a href="mailto:info@smdmedicare.in" className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs transition-colors">
                <i className="fas fa-envelope mr-1.5"></i> Submit QA Ticket
              </a>
              <a href="https://wa.me/919555422455" target="_blank" rel="noopener noreferrer" className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs border border-slate-700 transition-colors">
                <i className="fab fa-whatsapp text-emerald-400 mr-1.5"></i> WhatsApp QA
              </a>
            </div>
          </div>

        </div>

      </div>
    </main>
  );
}
