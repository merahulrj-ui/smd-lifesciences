import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Us | SMD Life Sciences - SMD Medicare',
  description: 'Discover SMD Life Sciences, the dedicated diagnostic division of SMD Medicare, in technical collaboration with Pentavalent Bio Sciences, Bangalore.',
  alternates: {
    canonical: 'https://lifesciences.smdmedicare.in/about',
  },
  openGraph: {
    title: 'About Us | SMD Life Sciences - SMD Medicare',
    description: 'B2B diagnostic raw materials supplier & custom CDMO in technical collaboration with Pentavalent Bio Sciences, Bangalore.',
    url: 'https://lifesciences.smdmedicare.in/about',
    siteName: 'SMD Life Sciences',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Us | SMD Life Sciences - SMD Medicare',
    description: 'B2B diagnostic raw materials supplier & custom CDMO in technical collaboration with Pentavalent Bio Sciences, Bangalore.',
    images: ['https://lifesciences.smdmedicare.in/icon-512.png'],
  },
};

const aboutSchemaGraph = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'AboutPage',
      '@id': 'https://lifesciences.smdmedicare.in/about#webpage',
      url: 'https://lifesciences.smdmedicare.in/about',
      name: 'About SMD Life Sciences',
      isPartOf: {
        '@id': 'https://lifesciences.smdmedicare.in/#website',
      },
      about: {
        '@id': 'https://lifesciences.smdmedicare.in/#organization',
      },
      description: 'SMD Life Sciences is the dedicated diagnostic division of SMD Medicare, in technical collaboration with Pentavalent Bio Sciences, Electronic City, Bangalore.',
      inLanguage: 'en-IN',
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://lifesciences.smdmedicare.in/about#breadcrumbs',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://lifesciences.smdmedicare.in',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'About Us',
          item: 'https://lifesciences.smdmedicare.in/about',
        },
      ],
    },
  ],
};

export default function AboutPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchemaGraph) }}
      />
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-[#f8fafc] via-white to-white border-b border-slate-200 py-10 sm:py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-[#064e3b] border border-emerald-200/80 text-xs font-semibold mb-3">
            <i className="fa-solid fa-building text-[10px] text-[#059669]"></i> Corporate &amp; Scientific Overview
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#064e3b] tracking-tight mb-3">
            About SMD Life Sciences
          </h1>
          <p className="text-sm sm:text-base text-slate-600 max-w-3xl leading-relaxed">
            SMD Life Sciences is the dedicated biotechnology and diagnostic raw materials division of SMD Medicare, established to resolve critical IVD testing dependencies in technical collaboration with Pentavalent Bio Sciences, Electronic City, Bangalore.
          </p>
        </div>
      </section>

      {/* Strategic Vision & Company Narrative */}
      <section className="py-10 sm:py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* Left Narrative */}
            <div className="lg:col-span-7">
              <span className="text-xs font-bold text-[#064e3b] uppercase tracking-wider mb-2 block">
                Our Strategic Vision
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-5 leading-tight">
                Empowering Global Diagnostics with Biological Precision
              </h2>
              <p className="text-slate-600 text-base leading-relaxed mb-4">
                Historically, diagnostic kit manufacturers across India and emerging markets have relied on expensive imports from North America and Europe for core biological raw materials: recombinant antigens, paired monoclonal antibodies, and colloidal gold conjugates. Supply chain bottlenecks or customs clearance delays directly threatened diagnostic testing capacity.
              </p>
              <p className="text-slate-600 text-base leading-relaxed mb-8">
                <strong className="text-slate-900">SMD Life Sciences</strong>, in technical partnership with <strong className="text-[#064e3b]">Pentavalent Bio Sciences</strong>, is proudly leading the way to supply diagnostic kit manufacturers worldwide with indigenous, high-purity biological reagents matching global benchmarks. Utilizing synthetic biology, high-density fermentation, and hybridoma technology, we ensure seamless supply security.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-slate-50 p-5 rounded-xl border-l-4 border-emerald-500 border border-slate-200/60">
                  <h4 className="font-bold text-slate-900 text-base mb-1">Indigenous Supply Security</h4>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    Domestic supply chain with fast 3-4 day dispatch, free from customs clearance holdups.
                  </p>
                </div>
                <div className="bg-slate-50 p-5 rounded-xl border-l-4 border-[#064e3b] border border-slate-200/60">
                  <h4 className="font-bold text-slate-900 text-base mb-1">Global IVD Standards</h4>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    Validated against real patient clinical sera across lateral flow, ELISA, and CLIA analyzers.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Facility Card with Real Photo */}
            <div className="lg:col-span-5 bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-lg flex flex-col">
              <div className="relative h-56 w-full overflow-hidden bg-slate-100">
                <img
                  src="/images/biotech_bioreactors.jpg"
                  alt="Bangalore Electronic City Biomanufacturing Suites"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-3 left-4 right-4 text-white">
                  <span className="text-[10px] font-bold text-emerald-300 uppercase tracking-wider block">
                    Bangalore Biomanufacturing Hub
                  </span>
                  <h3 className="text-lg font-bold text-white leading-tight">
                    Electronic City R&amp;D Center
                  </h3>
                  <span className="text-[11px] text-slate-300">In Technical Collaboration with Pentavalent Bio Sciences</span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Located within the KSSIDC Complex in Electronic City Phase 1, Bangalore, our allied biomanufacturing facility integrates:
                </p>

                <ul className="space-y-2.5 text-xs text-slate-700 mb-6">
                  <li className="flex items-start gap-2">
                    <i className="fa-solid fa-check text-emerald-600 mt-0.5 text-xs"></i>
                    <span>Grade C / Class 10,000 cleanrooms for sterile filling</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <i className="fa-solid fa-check text-emerald-600 mt-0.5 text-xs"></i>
                    <span>Automated ÄKTA FPLC &amp; analytical HPLC chromatography</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <i className="fa-solid fa-check text-emerald-600 mt-0.5 text-xs"></i>
                    <span>BSL-2 tissue culture &amp; hybridoma fusion suites</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <i className="fa-solid fa-check text-emerald-600 mt-0.5 text-xs"></i>
                    <span>Liquid nitrogen vapor-phase master cell banking</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <i className="fa-solid fa-check text-emerald-600 mt-0.5 text-xs"></i>
                    <span>Temperature telemetry (-20°C / 2-8°C cold chain)</span>
                  </li>
                </ul>

                <Link 
                  href="/contact" 
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs sm:text-sm transition-all shadow-md shadow-orange-950/20"
                >
                  <i className="fa-solid fa-location-dot"></i> Schedule a Facility Visit
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guiding Values */}
      <section className="py-10 sm:py-12 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <span className="text-xs font-bold text-[#064e3b] uppercase tracking-wider mb-1.5 block">
              Guiding Values
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">
              Why Diagnostic Manufacturers Choose SMD Life Sciences
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm">
              We understand the engineering challenges of diagnostic kit manufacturing: background haze, low sensitivity, and lot variations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs hover:border-emerald-300 transition-all">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-[#064e3b] flex items-center justify-center text-xl mb-4">
                <i className="fa-solid fa-flask-vial"></i>
              </div>
              <h4 className="text-base font-bold text-slate-900 mb-2">Precision Chemistry</h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Every epitope and clone is selected specifically for low non-specific binding and superior analytical sensitivity in lateral flow nitrocellulose membranes.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs hover:border-emerald-300 transition-all">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-[#064e3b] flex items-center justify-center text-xl mb-4">
                <i className="fa-solid fa-scale-balanced"></i>
              </div>
              <h4 className="text-base font-bold text-slate-900 mb-2">Transparent B2B Pricing</h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                No hidden fees or exorbitant international markups. We provide clear, itemized quotations for research vials up to multi-gram commercial quantities.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs hover:border-emerald-300 transition-all">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-[#064e3b] flex items-center justify-center text-xl mb-4">
                <i className="fa-solid fa-handshake-angle"></i>
              </div>
              <h4 className="text-base font-bold text-slate-900 mb-2">On-Site SOP Support</h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                If your kit manufacturing team encounters assembly or flow challenges, our technical scientists can provide troubleshooting and on-site SOP optimization.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs hover:border-emerald-300 transition-all">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-[#064e3b] flex items-center justify-center text-xl mb-4">
                <i className="fa-solid fa-truck-ramp-box"></i>
              </div>
              <h4 className="text-base font-bold text-slate-900 mb-2">Cold-Chain Dispatch</h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                All biological materials are dispatched with gel ice packs or dry ice under strict temperature control, backed by rapid 3-4 day express courier delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA Card (Contained & Compact - Midnight Slate + Orange) */}
      <section className="py-10 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="bg-gradient-to-r from-slate-900 to-indigo-950 text-white rounded-3xl py-8 px-6 sm:px-10 text-center shadow-xl border border-slate-800">
            <h2 className="text-xl sm:text-2xl font-bold mb-2 text-white">Ready to evaluate our reagents?</h2>
            <p className="text-slate-300 text-xs sm:text-sm max-w-lg mx-auto mb-5 leading-relaxed">
              Contact our Bangalore technical team for lot-specific CoAs, evaluation samples, or custom hybridoma discussions.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link 
                href="/products" 
                className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white font-bold px-5 py-2.5 rounded-xl text-xs sm:text-sm transition-all shadow-md shadow-orange-950/20"
              >
                <i className="fa-solid fa-vial text-xs"></i> View 64+ Reagents
              </Link>
              <Link 
                href="/contact" 
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-5 py-2.5 rounded-xl text-xs sm:text-sm transition-colors border border-white/20"
              >
                <i className="fa-solid fa-envelope text-xs"></i> Contact Technical Sales
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
