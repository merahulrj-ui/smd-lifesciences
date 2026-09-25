import { Metadata } from 'next';
import Link from 'next/link';
import { BIOTECH_PRODUCTS } from '@/data/products';

export const metadata: Metadata = {
  title: 'Buy IVD Raw Materials & Reagents Online | Recombinant Antigens & Antibodies India | SMD Life Sciences',
  description: 'Direct manufacturer of validated IVD biological raw materials in Bangalore, India. High-affinity monoclonal antibodies, recombinant antigens & colloidal gold conjugates. Free CoA, 1mg-5mg evaluation samples, express dispatch.',
  keywords: [
    'buy IVD raw materials India',
    'IVD raw material supplier Bangalore',
    'custom monoclonal antibody development',
    'lateral flow raw materials bulk price',
    'recombinant antigen manufacturer Bangalore',
    'colloidal gold conjugate supplier',
    'rapid test raw materials B2B',
    'Dengue NS1 antigen bulk supplier',
    'Malaria antigen manufacturer India'
  ],
  alternates: {
    canonical: 'https://lifesciences.smdmedicare.in',
  },
  openGraph: {
    title: 'Buy IVD Raw Materials & Reagents Online | SMD Life Sciences',
    description: 'High-purity recombinant antigens, matched monoclonal antibodies, and custom CDMO services for IVD manufacturers with lot CoA.',
    url: 'https://lifesciences.smdmedicare.in',
    siteName: 'SMD Life Sciences',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: 'https://lifesciences.smdmedicare.in/images/biotech_cleanroom_hero.webp',
        width: 1200,
        height: 630,
        alt: 'SMD Life Sciences Cleanroom Biomanufacturing Facility Bangalore',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Buy IVD Raw Materials & Reagents Online | SMD Life Sciences',
    description: 'High-purity recombinant antigens, matched monoclonal antibodies, and custom CDMO services for IVD manufacturers with lot CoA.',
    images: ['https://lifesciences.smdmedicare.in/images/biotech_cleanroom_hero.webp'],
  },
};

const homeFaqs = [
  {
    question: "What biological raw materials does SMD Life Sciences manufacture and supply?",
    answer: "SMD Life Sciences specializes in high-purity recombinant antigens, monoclonal and polyclonal antibodies, colloidal gold conjugates, and lateral flow reagents for diagnostic test card and ELISA kit manufacturers.",
  },
  {
    question: "Can IVD manufacturers request evaluation samples before bulk procurement?",
    answer: "Yes, we provide 1mg to 5mg evaluation test samples along with lot-specific Certificate of Analysis (CoA), SDS, and purity validation reports to ensure compatibility with your diagnostic platform.",
  },
  {
    question: "Where are your biomanufacturing and R&D facilities located?",
    answer: "Our research and biomanufacturing operations are located in Electronic City, Bangalore, Karnataka, conducted in technical collaboration with Pentavalent Bio Sciences.",
  },
  {
    question: "Do you offer custom CDMO and diagnostic assay development?",
    answer: "Yes, we provide milestone-based CDMO services including hybridoma monoclonal development, recombinant protein expression, antibody pair screening, and lateral flow rapid test development from concept to batch validation.",
  },
  {
    question: "What are the dispatch timelines for domestic and international orders?",
    answer: "Domestic orders across India are dispatched within 2 to 4 business days directly from Bangalore with end-to-end cold-chain packaging. International shipments are coordinated with certified export documentation.",
  },
];

const pageSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://lifesciences.smdmedicare.in/#webpage',
      url: 'https://lifesciences.smdmedicare.in',
      name: 'SMD Life Sciences & Diagnostic Solutions | Custom Antibodies & IVD Raw Materials',
      isPartOf: {
        '@id': 'https://lifesciences.smdmedicare.in/#website',
      },
      about: {
        '@id': 'https://lifesciences.smdmedicare.in/#organization',
      },
      description: 'B2B diagnostic raw materials supplier & custom CDMO services in India. High-purity recombinant antigens, monoclonal antibodies, and colloidal gold conjugates for IVD manufacturers.',
      inLanguage: 'en-IN',
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://lifesciences.smdmedicare.in/#faq',
      mainEntity: homeFaqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      })),
    },
  ],
};

export default function BiotechHomePage() {
  const sampleProducts = BIOTECH_PRODUCTS.slice(0, 6);

  return (
    <div className="bg-white min-h-screen text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />
      {/* Top Breadcrumb & Status Bar */}
      <div className="bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between text-xs">
          <div className="flex items-center space-x-2 text-slate-500">
            <Link href="/" className="hover:text-[#064e3b] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-slate-900 font-semibold">Life Sciences &amp; Diagnostic Solutions</span>
          </div>
          <div className="hidden sm:flex items-center space-x-2">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-[#064e3b] border border-emerald-200/80">
              Institutional Manufacturer Division
            </span>
          </div>
        </div>
      </div>

      {/* Hero Section (Modern Swiss Biotech with Midnight Slate + Electric Orange) */}
      <section className="bg-gradient-to-b from-slate-50 via-white to-slate-50 border-b border-slate-200/80 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Content (7 Cols) */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200/80 text-orange-700 text-xs font-bold uppercase tracking-wider mb-5">
                <i className="fas fa-dna text-orange-600"></i>
                Technical Association with Pentavalent Bio Sciences, Bangalore
              </div>
              
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.15] mb-5">
                High-Purity Biological Raw Materials &amp; Custom CDMO for <span className="text-orange-600 underline decoration-orange-400/50 decoration-4 underline-offset-4">IVD Manufacturers</span>
              </h1>
              
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-7 max-w-2xl">
                Indigenous Indian manufacturer and bulk supplier of high-affinity Monoclonal Antibodies, Recombinant Antigens, and 40nm Colloidal Gold Conjugates. Supported by state-of-the-art Bangalore biomanufacturing facilities and BIRAC, Dept. of Biotechnology, Govt. of India.
              </p>

              <div className="flex flex-wrap gap-3.5 mb-8">
                <Link 
                  href="/services" 
                  className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-sm shadow-md shadow-orange-950/20 transition-all gap-2"
                >
                  <i className="fas fa-flask"></i>
                  Custom Development Services
                  <i className="fas fa-arrow-right text-xs"></i>
                </Link>
                <Link 
                  href="/products" 
                  className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 font-semibold text-sm transition-all shadow-xs gap-2"
                >
                  <i className="fas fa-layer-group text-orange-600"></i>
                  Browse Catalog Reagents
                </Link>
              </div>

              {/* Trust Micro-Metrics */}
              <div className="pt-6 border-t border-slate-200/80 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-600 font-medium">
                <span className="flex items-center gap-1.5"><i className="fas fa-check-circle text-orange-600"></i> Lot-Specific CoA &amp; MSDS</span>
                <span className="flex items-center gap-1.5"><i className="fas fa-check-circle text-orange-600"></i> &gt;95% SDS-PAGE &amp; HPLC Purity</span>
                <span className="flex items-center gap-1.5"><i className="fas fa-check-circle text-orange-600"></i> 24–48h Cold-Chain Express</span>
              </div>
            </div>

            {/* Right High-Impact Cleanroom Visual (5 Cols) */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200/80 group bg-slate-100">
                <img 
                  src="/images/biotech_cleanroom_hero.webp" 
                  alt="SMD Life Sciences Bangalore Biomanufacturing Cleanroom" 
                  className="w-full h-[360px] sm:h-[420px] object-cover group-hover:scale-102 transition-transform duration-500"
                />
                
                {/* Floating Chip 1: Top-Left */}
                <div className="absolute top-4 left-4 bg-slate-900/90 backdrop-blur-md px-3.5 py-2 rounded-xl shadow-md border border-slate-700 text-xs font-bold text-white flex items-center gap-2">
                  <i className="fas fa-microscope text-orange-400"></i>
                  Bangalore Bio-Cluster R&amp;D Hub
                </div>

                {/* Floating Chip 2: Bottom-Right */}
                <div className="absolute bottom-4 right-4 bg-orange-600/95 backdrop-blur-md text-white px-3.5 py-2 rounded-xl shadow-lg text-xs font-semibold flex items-center gap-2">
                  <i className="fas fa-shield-halved text-white"></i>
                  Validated on Clinical Sera Panels
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Trust & Spec Bar */}
      <section className="bg-white border-b border-slate-200 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="border-r border-slate-100 last:border-0">
              <div className="text-2xl font-extrabold text-slate-900">In-Stock</div>
              <div className="text-xs text-slate-500 mt-1">Diagnostic Reagents</div>
            </div>
            <div className="border-r border-slate-100 last:border-0">
              <div className="text-2xl font-extrabold text-orange-600">&gt; 95%</div>
              <div className="text-xs text-slate-500 mt-1">SDS-PAGE &amp; HPLC Purity</div>
            </div>
            <div className="border-r border-slate-100 last:border-0">
              <div className="text-2xl font-extrabold text-slate-900">Lot CoA</div>
              <div className="text-xs text-slate-500 mt-1">Batch Quality Assured</div>
            </div>
            <div>
              <div className="text-2xl font-extrabold text-slate-900">24–48h</div>
              <div className="text-xs text-slate-500 mt-1">Cold-Chain Express Dispatch</div>
            </div>
          </div>
        </div>
      </section>

      {/* Editorial Showcase 1: Recombinant Antigens & Protein Purification */}
      <section className="py-20 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left: Real High-Res Photography */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200/80 group">
                <img
                  src="/images/biotech_chromatography.webp"
                  alt="ÄKTA Avant FPLC Preparative Chromatography System at Bangalore Biomanufacturing Facility"
                  className="w-full h-[400px] sm:h-[460px] object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none"></div>
                
                {/* Floating Chips */}
                <div className="absolute top-4 left-4 bg-slate-900/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-slate-700 shadow-sm flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
                  <span className="text-[11px] font-bold text-white tracking-wide uppercase">
                    ÄKTA Avant FPLC System &bull; Class 10k Cleanroom
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4 bg-slate-900/90 backdrop-blur-md p-4 rounded-xl border border-white/10 text-white">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-orange-400">Purity Guarantee: &gt;95% SEC-HPLC</span>
                    <span className="text-slate-300">Endotoxin &lt;0.1 EU/&mu;g</span>
                  </div>
                  <p className="text-[11px] text-slate-300 mt-1">
                    Multi-stage affinity, ion-exchange &amp; size exclusion chromatography for IVD raw materials.
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Editorial Narrative */}
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 text-orange-700 border border-orange-200/80 text-xs font-bold uppercase tracking-wider mb-4">
                <i className="fas fa-dna text-orange-600"></i> Core Capability 01 &bull; Protein Engineering
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-[1.2] mb-5">
                Clinical-Grade Recombinant Antigens &amp;{' '}
                <span className="text-orange-600">Monoclonal Antibodies</span>
              </h2>
              <p className="text-base text-slate-600 leading-relaxed mb-6">
                Engineered specifically for solid-phase diagnostic coating in lateral flow nitrocellulose strips, ELISA microplates, and CLIA analyzers. Produced in Bangalore in technical partnership with Pentavalent Bio Sciences, guaranteeing authentic native conformation and zero batch variations.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-8">
                <div className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-50 border border-slate-100">
                  <i className="fas fa-check-circle text-orange-600 mt-0.5 text-sm shrink-0"></i>
                  <div>
                    <strong className="block text-xs font-bold text-slate-900">Validated Epitope Accessibility</strong>
                    <span className="text-[11px] text-slate-600">Cross-verified on clinical positive/negative patient sera.</span>
                  </div>
                </div>
                <div className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-50 border border-slate-100">
                  <i className="fas fa-check-circle text-orange-600 mt-0.5 text-sm shrink-0"></i>
                  <div>
                    <strong className="block text-xs font-bold text-slate-900">Lot-to-Lot CV &lt; 5%</strong>
                    <span className="text-[11px] text-slate-600">Standardized fermentation protocols ensure repeatability.</span>
                  </div>
                </div>
                <div className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-50 border border-slate-100">
                  <i className="fas fa-check-circle text-orange-600 mt-0.5 text-sm shrink-0"></i>
                  <div>
                    <strong className="block text-xs font-bold text-slate-900">Zero Customs Holdups</strong>
                    <span className="text-[11px] text-slate-600">Dispatched from Bangalore within 2-4 business days across India.</span>
                  </div>
                </div>
                <div className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-50 border border-slate-100">
                  <i className="fas fa-check-circle text-orange-600 mt-0.5 text-sm shrink-0"></i>
                  <div>
                    <strong className="block text-xs font-bold text-slate-900">Lot-Specific CoA Included</strong>
                    <span className="text-[11px] text-slate-600">Complete SDS-PAGE and SEC-HPLC profiles with every shipment.</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3.5">
                <Link
                  href="/products"
                  className="px-6 py-3.5 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-sm transition-all shadow-md shadow-orange-950/20 inline-flex items-center gap-2"
                >
                  <i className="fas fa-vial text-xs"></i> Browse Catalog Reagents
                </Link>
                <Link
                  href="/ivd-raw-materials"
                  className="px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-semibold text-sm border border-slate-300 transition-all inline-flex items-center gap-2 shadow-xs"
                >
                  Explore IVD Sourcing Desk &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Editorial Showcase 2: Lateral Flow Formulation & Diagnostic CDMO (Alternating) */}
      <section className="py-20 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left: Editorial Narrative */}
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 text-orange-700 border border-orange-200/80 text-xs font-bold uppercase tracking-wider mb-4">
                <i className="fas fa-flask text-orange-600"></i> Core Capability 02 &bull; Diagnostic CDMO
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-[1.2] mb-5">
                Rapid Test Assay Formulation &amp;{' '}
                <span className="text-orange-600">40nm Gold Conjugation</span>
              </h2>
              <p className="text-base text-slate-600 leading-relaxed mb-6">
                Overcome assay sensitivity limits and background haze. We offer milestone-based contract development for IVD kit manufacturers—from high-affinity hybridoma clone screening to colloidal gold bioconjugation, nitrocellulose membrane blocking, and pilot-batch stability profiling.
              </p>

              <div className="space-y-3 mb-8">
                <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-xs flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-slate-900 text-orange-400 flex items-center justify-center font-bold text-xs shrink-0">
                    01
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Matched Antibody Sandwich Pair Discovery</h4>
                    <p className="text-xs text-slate-600 mt-0.5">High-throughput ELISA pairing to maximize binding affinity and prevent sterical hindrance on strip test lines.</p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-xs flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-slate-900 text-orange-400 flex items-center justify-center font-bold text-xs shrink-0">
                    02
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">40nm Monodisperse Colloidal Gold Bioconjugation</h4>
                    <p className="text-xs text-slate-600 mt-0.5">Stable passive and covalent antibody conjugation with optimized buffer matrices for high optical density and clear test lines.</p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-xs flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-slate-900 text-orange-400 flex items-center justify-center font-bold text-xs shrink-0">
                    03
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">100% Client IP Ownership &amp; Tech-Transfer</h4>
                    <p className="text-xs text-slate-600 mt-0.5">Complete ownership of master hybridoma cell banks, SOP formulations, and strip assembly parameters upon project delivery.</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3.5">
                <Link
                  href="/services"
                  className="px-6 py-3.5 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-sm transition-all shadow-md shadow-orange-950/20 inline-flex items-center gap-2"
                >
                  <i className="fas fa-file-signature text-xs"></i> Request CDMO Consultation
                </Link>
                <Link
                  href="/diagnostic-cdmo"
                  className="px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-semibold text-sm border border-slate-300 transition-all inline-flex items-center gap-2 shadow-xs"
                >
                  View 4-Phase CDMO Workflow &rarr;
                </Link>
              </div>
            </div>

            {/* Right: Real Macro Photography */}
            <div className="lg:col-span-6 order-1 lg:order-2 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200/80 group">
                <img
                  src="/images/biotech_lateral_flow.webp"
                  alt="Rapid Diagnostic Lateral Flow Test Cassette Quality Inspection and Dispensing at Bangalore R&D Facility"
                  className="w-full h-[400px] sm:h-[460px] object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none"></div>

                {/* Floating Chips */}
                <div className="absolute top-4 right-4 bg-slate-900/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-slate-700 shadow-sm flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
                  <span className="text-[11px] font-bold text-white tracking-wide uppercase">
                    Lateral Flow Quality Validation
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4 bg-slate-900/90 backdrop-blur-md p-4 rounded-xl border border-white/10 text-white">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-orange-400">Nitrocellulose Optimization</span>
                    <span className="text-slate-300">40nm Colloidal Gold</span>
                  </div>
                  <p className="text-[11px] text-slate-300 mt-1">
                    Precision dispensing, conjugate pad drying protocols, and thermal accelerated shelf-life verification.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Brand New Visual Section: Bangalore Biomanufacturing Facility Tour (3 High-Res Cards) */}
      <section className="py-20 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-orange-700 bg-orange-50 px-3 py-1 rounded-full border border-orange-200/80">
              Infrastructure &bull; Electronic City Bangalore
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
              Inside Our Allied Biomanufacturing &amp; R&amp;D Hub
            </h2>
            <p className="text-base text-slate-600 mt-3">
              Operating in technical partnership with Pentavalent Bio Sciences, our Bangalore facilities house specialized suites for synthetic biology, fermentation, hybridoma screening, and cleanroom filling.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1: Bioreactor & Fermentation */}
            <div className="relative bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-lg hover:border-orange-300 transition-all flex flex-col group cursor-pointer">
              <Link 
                href="/recombinant-antigens" 
                className="absolute inset-0 z-10 rounded-2xl" 
                aria-label="Explore Fermentation Bioprocessing Suites" 
              />
              <div className="relative h-56 w-full overflow-hidden bg-slate-100">
                <img
                  src="/images/biotech_bioreactors.webp"
                  alt="High-density microbial and yeast fermentation bioreactor facility in Class 10k cleanroom"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 bg-slate-900/90 backdrop-blur-md text-orange-400 text-[11px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider border border-slate-700">
                  Bioprocessing Suites
                </span>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-orange-600 transition-colors">
                    High-Density Fermentation Bioreactors
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    Submerged aerobic bacterial (E. coli) and yeast (Pichia pastoris) fermentation vessels supporting gram-to-kilogram batch yields under ISO Class 10,000 cleanroom controls.
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-medium">
                  <span>10L–200L Scale-up</span>
                  <span className="text-orange-600 font-semibold group-hover:translate-x-0.5 transition-transform">Explore Platform &rarr;</span>
                </div>
              </div>
            </div>

            {/* Card 2: Hybridoma & Screening */}
            <div className="relative bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-lg hover:border-orange-300 transition-all flex flex-col group cursor-pointer">
              <Link 
                href="/diagnostic-cdmo" 
                className="absolute inset-0 z-10 rounded-2xl" 
                aria-label="Explore Hybridoma Discovery & ELISA Screening" 
              />
              <div className="relative h-56 w-full overflow-hidden bg-slate-100">
                <img
                  src="/images/biotech_microplate_assay.webp"
                  alt="Scientist in biosafety cabinet conducting microplate ELISA screening and hybridoma cloning"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 bg-slate-900/90 backdrop-blur-md text-orange-400 text-[11px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider border border-slate-700">
                  Discovery &amp; Screening
                </span>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-orange-600 transition-colors">
                    Hybridoma Discovery &amp; ELISA Screening
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    BSL-2 laminar airflow biosafety suites for murine hybridoma fusion, single-cell limiting dilution cloning, and high-throughput sandwich pairing verification.
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-medium">
                  <span>96-Well Microplate Titration</span>
                  <span className="text-orange-600 font-semibold group-hover:translate-x-0.5 transition-transform">Explore CDMO &rarr;</span>
                </div>
              </div>
            </div>

            {/* Card 3: Downstream Chromatography */}
            <div className="relative bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-lg hover:border-orange-300 transition-all flex flex-col group cursor-pointer">
              <Link 
                href="/ivd-raw-materials" 
                className="absolute inset-0 z-10 rounded-2xl" 
                aria-label="Explore Sterile Filling & Cold-Chain Logistical Hub" 
              />
              <div className="relative h-56 w-full overflow-hidden bg-slate-100">
                <img
                  src="/images/biotech_cleanroom_hero.webp"
                  alt="Pharmaceutical cleanroom testing and diagnostic reagent quality control laboratory"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 bg-slate-900/90 backdrop-blur-md text-orange-400 text-[11px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider border border-slate-700">
                  Quality Assurance
                </span>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-orange-600 transition-colors">
                    Sterile Filling &amp; Cold-Chain Logistical Hub
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    Class 100 laminar flow filling stations with automated crimping, liquid nitrogen vapor cell banking, and -20°C / 2-8°C temperature telemetry dispatch.
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-medium">
                  <span>Grade C / Class 10,000</span>
                  <span className="text-orange-600 font-semibold group-hover:translate-x-0.5 transition-transform">Explore Supply &rarr;</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Featured Reagents Grid */}
      <section className="bg-white border-y border-slate-200 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-orange-600">
                Biological Catalog
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1">
                Featured IVD Raw Materials
              </h2>
              <p className="text-sm text-slate-500 mt-1">
                Sample selection from our validated reagents. Batch samples available for R&amp;D evaluation.
              </p>
            </div>
            <Link 
              href="/products" 
              className="mt-4 sm:mt-0 inline-flex items-center text-sm font-semibold text-orange-600 hover:text-orange-700 gap-1.5"
            >
              View Full Catalog
              <i className="fas fa-arrow-right text-xs"></i>
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sampleProducts.map((product) => (
              <div 
                key={product.code}
                className="relative bg-slate-50 border border-slate-200 rounded-xl p-5 hover:border-orange-400 hover:shadow-lg transition-all flex flex-col justify-between group cursor-pointer"
              >
                {/* Full-box Clickable Overlay Link */}
                <Link
                  href={`/products/${product.code}`}
                  className="absolute inset-0 z-10 rounded-xl"
                  aria-label={`View ${product.name} (${product.code}) datasheet`}
                />

                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono font-bold text-orange-700 bg-orange-50 border border-orange-200 px-2 py-0.5 rounded">
                      {product.code}
                    </span>
                    <span className="text-xs font-medium text-slate-700">
                      {product.purity}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 leading-snug mb-2 group-hover:text-orange-600 transition-colors">
                    {product.name}
                  </h3>
                  <div className="space-y-1 text-xs text-slate-600 mb-4">
                    <div><span className="text-slate-400">Target:</span> {product.target}</div>
                    <div><span className="text-slate-400">Host / Type:</span> {product.host} ({product.type})</div>
                    <div><span className="text-slate-400">Format:</span> {product.format}</div>
                  </div>
                </div>
                <div className="pt-3 border-t border-slate-200 flex items-center justify-between">
                  <span className="text-xs font-bold text-orange-600 group-hover:text-orange-700 flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                    View Datasheet ➔
                  </span>
                  <a 
                    href={`https://wa.me/919555422455?text=Hello%20SMD%20Medicare,%20inquiry%20for%20IVD%20Reagent%20${product.code}%20(${encodeURIComponent(product.name)})`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative z-20 text-xs font-semibold text-slate-600 hover:text-orange-600 transition-colors"
                  >
                    Request CoA
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions (FAQ) Section */}
      <section className="bg-slate-50 border-b border-slate-200 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-orange-700 bg-orange-50 px-3 py-1 rounded-full border border-orange-200/80">
              Technical &amp; Procurement FAQ
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-2">
              Frequently Asked Questions
            </h2>
            <p className="text-sm text-slate-500 mt-2">
              Common questions from IVD diagnostic kit manufacturers, scientists, and procurement teams.
            </p>
          </div>

          <div className="space-y-4">
            {homeFaqs.map((faq, idx) => (
              <details
                key={idx}
                className="group bg-white rounded-xl border border-slate-200 p-5 shadow-xs hover:border-orange-300 transition-colors [&_summary::-webkit-details-marker]:hidden"
                {...(idx === 0 ? { open: true } : {})}
              >
                <summary className="flex cursor-pointer items-center justify-between gap-4 font-semibold text-slate-900 text-sm sm:text-base select-none">
                  <span>{faq.question}</span>
                  <span className="shrink-0 text-slate-400 group-open:rotate-180 transition-transform">
                    <i className="fas fa-chevron-down text-xs"></i>
                  </span>
                </summary>
                <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed pt-2 border-t border-slate-100">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Direct RFQ / WhatsApp CTA Banner (Modern Midnight Slate + Electric Orange) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-r from-slate-900 via-slate-950 to-indigo-950 rounded-3xl p-8 sm:p-12 text-white text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-8 shadow-xl border border-slate-800">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-wider mb-4 border border-orange-500/30">
              <i className="fas fa-flask"></i> Direct Technical &amp; Commercial Desk
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold mb-3 text-white">
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
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20b858] text-white font-bold text-sm transition-colors gap-2 shadow-md"
            >
              <i className="fab fa-whatsapp text-lg"></i> WhatsApp Technical Desk
            </a>
            <Link 
              href="/services" 
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-sm transition-all shadow-md shadow-orange-950/20 gap-2"
            >
              <i className="fas fa-paper-plane text-xs"></i>
              Submit Project RFQ ➔
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
