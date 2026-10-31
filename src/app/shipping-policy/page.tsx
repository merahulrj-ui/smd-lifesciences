import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Cold-Chain Logistics & Biological Reagent Shipping Policy | SMD Life Sciences',
  description: 'Express 24-48h domestic and international cold-chain logistics for biological reagents, recombinant antigens, and monoclonal antibodies from our Bangalore bio-cluster facility. Validated temperature packaging (-20°C Dry Ice, 2-8°C Blue Ice).',
  alternates: {
    canonical: 'https://lifesciences.smdmedicare.in/shipping-policy',
  },
  openGraph: {
    title: 'Cold-Chain Shipping Policy | SMD Life Sciences',
    description: 'Validated biological reagent cold-chain logistics, express 24-48h dispatch from Bangalore, and international export clearance protocols.',
    url: 'https://lifesciences.smdmedicare.in/shipping-policy',
    siteName: 'SMD Life Sciences',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function ShippingPolicyPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 pt-28 pb-20 font-sans">
      <div className="max-w-4xl mx-auto px-5 sm:px-8">
        
        {/* Header Breadcrumb */}
        <div className="mb-6 flex items-center gap-2 text-xs text-slate-500">
          <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
          <span>/</span>
          <span className="text-slate-800 font-medium">Cold-Chain Shipping Policy</span>
        </div>

        {/* Title Card */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/80 shadow-xs mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold mb-4">
            <i className="fas fa-snowflake text-blue-500"></i> Validated Cold-Chain Logistics Protocol
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Biological Reagents &amp; Cold-Chain Shipping Policy
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            SMD Life Sciences operates strict, validated cold-chain logistics to safeguard the tertiary protein structure, immunological reactivity, and biological titer of all recombinant antigens, monoclonal antibodies, and enzymes from our Bangalore Bio-Cluster R&amp;D facility to your manufacturing plant.
          </p>
        </div>

        {/* Policy Content Sections */}
        <div className="space-y-6">

          {/* Section 1: Temperature Zones */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-xs">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-3 flex items-center gap-2.5">
              <span className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center text-sm font-bold">1</span>
              Temperature Regimes &amp; Validated Packaging
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed mb-4">
              Depending on the physicochemical stability profile of the specific biological reagent, shipments are classified into three strict temperature containment zones:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
              <div className="p-4 rounded-xl bg-blue-50/60 border border-blue-100">
                <div className="font-bold text-blue-900 text-sm mb-1 flex items-center gap-1.5">
                  <i className="fas fa-icicles text-blue-600"></i> Deep Frozen (-20°C to -80°C)
                </div>
                <p className="text-slate-600">Packed in high-density EPS insulated containers with industrial dry ice pellets (solid CO₂). Optimized for labile recombinant enzymes, antibody conjugates, and cytokines.</p>
              </div>
              <div className="p-4 rounded-xl bg-cyan-50/60 border border-cyan-100">
                <div className="font-bold text-cyan-900 text-sm mb-1 flex items-center gap-1.5">
                  <i className="fas fa-temperature-low text-cyan-600"></i> Chilled (2°C to 8°C)
                </div>
                <p className="text-slate-600">Shipped with calibrated phase-change gel refrigerant packs (Blue Ice) with insulation barriers to avoid freezing injury for liquid-format monoclonal antibodies.</p>
              </div>
              <div className="p-4 rounded-xl bg-emerald-50/60 border border-emerald-100">
                <div className="font-bold text-emerald-900 text-sm mb-1 flex items-center gap-1.5">
                  <i className="fas fa-box text-emerald-600"></i> Lyophilized / Ambient
                </div>
                <p className="text-slate-600">Freeze-dried antigens sealed under inert nitrogen purge. Shipped under ambient conditions with desiccant protection for reconstitutable rapid test reagents.</p>
              </div>
            </div>
          </div>

          {/* Section 2: Dispatch Timelines */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-xs">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-3 flex items-center gap-2.5">
              <span className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center text-sm font-bold">2</span>
              Domestic India &amp; Global Dispatch Timelines
            </h2>
            <ul className="space-y-3 text-sm text-slate-600">
              <li className="flex items-start gap-2.5">
                <i className="fas fa-check-circle text-emerald-500 mt-1 shrink-0"></i>
                <span><strong>Domestic India (24–48 Hours):</strong> In-stock catalog reagents and evaluation sample vials (1mg–5mg) are dispatched Monday through Thursday via priority express air cargo directly from Bangalore to avoid weekend transit hold-ups.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <i className="fas fa-check-circle text-emerald-500 mt-1 shrink-0"></i>
                <span><strong>International Shipments (3–5 Business Days):</strong> Shipped via specialized courier partners (FedEx Priority / DHL Express Medical) accompanied by commercial invoice, material safety data sheets (MSDS), non-hazardous biological declaration, and Certificate of Origin.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <i className="fas fa-check-circle text-emerald-500 mt-1 shrink-0"></i>
                <span><strong>Custom CDMO Pilot Batches:</strong> Dispatched immediately upon quality control release (SDS-PAGE &gt;95%, SEC-HPLC, and ELISA titer verification) along with full analytical batch dossier.</span>
              </li>
            </ul>
          </div>

          {/* Section 3: Receipt & Inspection */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-xs">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-3 flex items-center gap-2.5">
              <span className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center text-sm font-bold">3</span>
              Consignee Receipt &amp; Immediate Handling Protocol
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed mb-3">
              Upon physical receipt at your facility, quality assurance teams are instructed to immediately perform the following handling steps:
            </p>
            <ol className="list-decimal pl-5 space-y-2 text-sm text-slate-600">
              <li>Inspect the outer insulated shipping box and check if the dry ice or ice pack cooling medium is intact.</li>
              <li>Briefly centrifuge liquid reagent vials at low speed (1,000–2,000 rpm for 30 seconds) to pull down any droplet condensation trapped on the cap or wall during transit.</li>
              <li>Immediately transfer the vials to the target storage temperature (-20°C or 2–8°C) indicated on the product label and batch Certificate of Analysis (CoA).</li>
              <li>Prepare single-use working aliquots to avoid detrimental repetitive freeze-thaw cycles.</li>
            </ol>
          </div>

          {/* Section 4: Support Contact */}
          <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8">
            <h3 className="font-bold text-base sm:text-lg mb-2">Need Cold-Chain Logistics Support or Tracking Assistance?</h3>
            <p className="text-xs sm:text-sm text-slate-300 mb-4">
              Our scientific logistics desk in Bangalore actively monitors all temperature-sensitive dispatches with real-time waypoint tracking.
            </p>
            <div className="flex flex-wrap items-center gap-4 text-xs">
              <a href="mailto:info@smdmedicare.in" className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-colors">
                <i className="fas fa-envelope"></i> info@smdmedicare.in
              </a>
              <a href="https://wa.me/919555422455" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold border border-slate-700 transition-colors">
                <i className="fab fa-whatsapp text-emerald-400"></i> +91 95554 22455 (Dispatch Desk)
              </a>
            </div>
          </div>

        </div>

      </div>
    </main>
  );
}
