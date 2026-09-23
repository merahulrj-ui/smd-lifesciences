import { Metadata } from 'next';
import Link from 'next/link';
import { BIOTECH_PRODUCTS } from '@/data/products';

export const metadata: Metadata = {
  title: 'SMD Life Sciences & Diagnostic Solutions | Custom Antibodies & IVD Raw Materials',
  description: 'B2B diagnostic raw materials supplier & custom CDMO services in India. High-purity recombinant antigens, monoclonal antibodies, and colloidal gold conjugates for IVD manufacturers.',
  keywords: [
    'IVD raw material supplier India',
    'custom monoclonal antibody development',
    'lateral flow raw materials',
    'recombinant antigen manufacturer Bangalore',
    'colloidal gold conjugate supplier',
    'rapid test raw materials B2B'
  ],
  alternates: {
    canonical: 'https://lifesciences.smdmedicare.in',
  },
  openGraph: {
    title: 'SMD Life Sciences & Diagnostic Solutions | IVD Raw Materials & Custom CDMO',
    description: 'High-purity recombinant antigens, monoclonal antibodies, and contract development for rapid test card manufacturers.',
    url: 'https://lifesciences.smdmedicare.in',
    siteName: 'SMD Life Sciences',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function BiotechHomePage() {
  const sampleProducts = BIOTECH_PRODUCTS.slice(0, 6);

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Top Breadcrumb & Status Bar */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between text-xs">
          <div className="flex items-center space-x-2 text-slate-500">
            <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-slate-900 font-semibold">Life Sciences &amp; Diagnostic Solutions</span>
          </div>
          <div className="hidden sm:flex items-center space-x-2">
            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800">
              Institutional Manufacturer Division
            </span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white py-16 lg:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:24px_24px] opacity-20 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-semibold uppercase tracking-wider mb-6">
              <i className="fas fa-dna text-blue-400"></i>
              Technical Association with Pentavalent Bio Sciences (Bangalore)
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight mb-6">
              High-Purity Biological Raw Materials &amp; Custom Services for <span className="text-blue-400">IVD Manufacturers</span>
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8">
              Indigenous Indian source for high-affinity Monoclonal Antibodies, Recombinant Antigens, and Colloidal Gold Conjugates. Backed by state-of-the-art Bangalore biotechnology facilities supported by BIRAC, Dept. of Biotechnology, Govt. of India.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link 
                href="/services" 
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg bg-orange-600 hover:bg-orange-700 text-white font-semibold text-sm shadow-lg shadow-orange-900/30 transition-all gap-2"
              >
                <i className="fas fa-flask"></i>
                Custom Development Services
                <i className="fas fa-arrow-right text-xs"></i>
              </Link>
              <Link 
                href="/products" 
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold text-sm transition-all gap-2 backdrop-blur-sm"
              >
                <i className="fas fa-layer-group"></i>
                Browse 64+ Reagents Catalog
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Spec Bar */}
      <section className="bg-white border-b border-slate-200 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="border-r border-slate-100 last:border-0">
              <div className="text-2xl font-bold text-slate-900">64+</div>
              <div className="text-xs text-slate-500 mt-1">Cataloged Reagents</div>
            </div>
            <div className="border-r border-slate-100 last:border-0">
              <div className="text-2xl font-bold text-blue-600">&gt; 95%</div>
              <div className="text-xs text-slate-500 mt-1">SDS-PAGE &amp; HPLC Purity</div>
            </div>
            <div className="border-r border-slate-100 last:border-0">
              <div className="text-2xl font-bold text-emerald-600">Lot CoA</div>
              <div className="text-xs text-slate-500 mt-1">Batch Quality Assured</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-orange-600">24–48h</div>
              <div className="text-xs text-slate-500 mt-1">Cold-Chain Express Dispatch</div>
            </div>
          </div>
        </div>
      </section>

      {/* Two Core Pillars Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
            Our Business Capabilities
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-3">
            Two Core Pillars for Diagnostic Excellence
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            Whether you need custom assay design from scratch or bulk batch supply of proven antibodies, our Bangalore facility delivers milestone-guaranteed results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Pillar 1: Custom Services */}
          <div className="bg-white rounded-xl border border-slate-200 p-8 shadow-sm hover:shadow-md transition-shadow relative flex flex-col justify-between">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-orange-500 to-amber-500 rounded-t-xl"></div>
            <div>
              <div className="w-12 h-12 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center mb-6 text-xl">
                <i className="fas fa-flask"></i>
              </div>
              <div className="text-xs font-bold uppercase tracking-wider text-orange-600 mb-1">
                High-Ticket Contract Research
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Custom Antibody &amp; Protein Development
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                End-to-end development of custom murine monoclonal antibodies (mAbs), high-yield recombinant protein expression in bacterial/mammalian hosts, and matched antibody pairing to eliminate false positives in lateral flow cassettes.
              </p>
              <ul className="space-y-2.5 text-sm text-slate-700 mb-8">
                <li className="flex items-start gap-2">
                  <i className="fas fa-check-circle text-emerald-500 mt-1 shrink-0 text-xs"></i>
                  <span><strong>4-Phase Hybridoma Pipeline:</strong> Immunization to Roller Bottle Scale-up</span>
                </li>
                <li className="flex items-start gap-2">
                  <i className="fas fa-check-circle text-emerald-500 mt-1 shrink-0 text-xs"></i>
                  <span><strong>Recombinant Expression:</strong> <em>E. coli</em>, Pichia &amp; CHO/HEK293 systems</span>
                </li>
                <li className="flex items-start gap-2">
                  <i className="fas fa-check-circle text-emerald-500 mt-1 shrink-0 text-xs"></i>
                  <span><strong>Assay Pairing:</strong> Sandwich screening &amp; gold bioconjugation optimization</span>
                </li>
                <li className="flex items-start gap-2">
                  <i className="fas fa-check-circle text-emerald-500 mt-1 shrink-0 text-xs"></i>
                  <span><strong>IP Security:</strong> Client owns exclusive clone rights upon milestone completion</span>
                </li>
              </ul>
            </div>
            <Link 
              href="/services"
              className="inline-flex items-center justify-center w-full py-3 rounded-lg bg-orange-50 hover:bg-orange-100 text-orange-700 font-semibold text-sm transition-colors gap-2"
            >
              Explore Custom Services Details
              <i className="fas fa-arrow-right text-xs"></i>
            </Link>
          </div>

          {/* Pillar 2: 64+ Catalog Reagents */}
          <div className="bg-white rounded-xl border border-slate-200 p-8 shadow-sm hover:shadow-md transition-shadow relative flex flex-col justify-between">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-t-xl"></div>
            <div>
              <div className="w-12 h-12 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center mb-6 text-xl">
                <i className="fas fa-layer-group"></i>
              </div>
              <div className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-1">
                Off-the-Shelf Bulk Supply
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Bulk IVD Raw Material Reagents
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                Ready-to-ship biological reagents formulated specifically for lateral flow rapid test strips, ELISA microplates, and CLIA analyzers. Stop waiting 4 weeks for Chinese shipments—get direct domestic GST billing.
              </p>
              <ul className="space-y-2.5 text-sm text-slate-700 mb-8">
                <li className="flex items-start gap-2">
                  <i className="fas fa-check-circle text-emerald-500 mt-1 shrink-0 text-xs"></i>
                  <span><strong>Infectious Targets:</strong> Dengue NS1/IgG/IgM, Malaria Pf/Pv, HIV-1/2, HBsAg, HCV</span>
                </li>
                <li className="flex items-start gap-2">
                  <i className="fas fa-check-circle text-emerald-500 mt-1 shrink-0 text-xs"></i>
                  <span><strong>Cardiac Biomarkers:</strong> High-sensitivity Troponin I, CK-MB, Myoglobin</span>
                </li>
                <li className="flex items-start gap-2">
                  <i className="fas fa-check-circle text-emerald-500 mt-1 shrink-0 text-xs"></i>
                  <span><strong>Conjugates &amp; Controls:</strong> Colloidal gold 40nm, Goat anti-Mouse IgG</span>
                </li>
                <li className="flex items-start gap-2">
                  <i className="fas fa-check-circle text-emerald-500 mt-1 shrink-0 text-xs"></i>
                  <span><strong>Documentation:</strong> Batch-specific Certificate of Analysis (CoA) &amp; MSDS</span>
                </li>
              </ul>
            </div>
            <Link 
              href="/products"
              className="inline-flex items-center justify-center w-full py-3 rounded-lg bg-blue-50 hover:bg-blue-100 text-blue-700 font-semibold text-sm transition-colors gap-2"
            >
              Browse 64+ Catalog Reagents
              <i className="fas fa-arrow-right text-xs"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Reagents Grid */}
      <section className="bg-white border-y border-slate-200 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                Biological Catalog
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1">
                Featured IVD Raw Materials
              </h2>
              <p className="text-sm text-slate-500 mt-1">
                Sample selection from our 64+ validated reagents. Batch samples available for R&amp;D evaluation.
              </p>
            </div>
            <Link 
              href="/products" 
              className="mt-4 sm:mt-0 inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-700 gap-1.5"
            >
              View Full 64+ Catalog
              <i className="fas fa-arrow-right text-xs"></i>
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sampleProducts.map((product) => (
              <div 
                key={product.code}
                className="bg-slate-50 border border-slate-200 rounded-lg p-5 hover:border-blue-400 hover:shadow-sm transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono font-bold text-blue-700 bg-blue-100/60 px-2 py-0.5 rounded">
                      {product.code}
                    </span>
                    <span className="text-xs font-medium text-slate-500">
                      {product.purity}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 leading-snug mb-2">
                    {product.name}
                  </h3>
                  <div className="space-y-1 text-xs text-slate-600 mb-4">
                    <div><span className="text-slate-400">Target:</span> {product.target}</div>
                    <div><span className="text-slate-400">Host / Type:</span> {product.host} ({product.type})</div>
                    <div><span className="text-slate-400">Format:</span> {product.format}</div>
                  </div>
                </div>
                <div className="pt-3 border-t border-slate-200 flex items-center justify-between">
                  <Link 
                    href={`/products/${product.code}`}
                    className="text-xs font-semibold text-blue-600 hover:text-blue-800"
                  >
                    View Datasheet ➔
                  </Link>
                  <a 
                    href={`https://wa.me/919555422455?text=Hello%20SMD%20Medicare,%20inquiry%20for%20IVD%20Reagent%20${product.code}%20(${encodeURIComponent(product.name)})`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-emerald-600 hover:text-emerald-700"
                  >
                    Request CoA
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Direct RFQ / WhatsApp CTA Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-r from-blue-900 to-slate-900 rounded-2xl p-8 sm:p-12 text-white text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-8 shadow-xl">
          <div className="max-w-2xl">
            <span className="inline-block px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-4">
              Direct Technical &amp; Commercial Desk
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold mb-3">
              Need Custom Assay Development or Bulk Evaluation Samples?
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              Connect directly with our Bangalore scientific coordination desk. Milestone quotes, Certificate of Analysis (CoA) verification, and 1mg–5mg evaluation samples dispatched within 24 hours.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto shrink-0">
            <a 
              href="https://wa.me/919555422455?text=Hello%20SMD%20Medicare,%20I%20am%20interested%20in%20custom%20biotech%20services%20/%20IVD%20raw%20materials." 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm transition-colors gap-2 shadow-lg"
            >
              💬 WhatsApp Technical Desk
            </a>
            <Link 
              href="/services"
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold text-sm transition-colors gap-2"
            >
              <i className="fas fa-paper-plane text-xs"></i>
              Submit Project RFQ
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
