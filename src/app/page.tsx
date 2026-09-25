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
  twitter: {
    card: 'summary_large_image',
    title: 'SMD Life Sciences & Diagnostic Solutions | Custom Antibodies & IVD Raw Materials',
    description: 'B2B diagnostic raw materials supplier & custom CDMO services in India. Recombinant antigens, monoclonal antibodies, and colloidal gold conjugates.',
    images: ['https://lifesciences.smdmedicare.in/icon-512.png'],
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

      {/* Hero Section (Lonza Clean Editorial Style with Deep Bio-Emerald) */}
      <section className="bg-gradient-to-b from-[#f8fafc] via-white to-white border-b border-slate-200/80 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Content (7 Cols) */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/80 text-[#064e3b] text-xs font-bold uppercase tracking-wider mb-5">
                <i className="fas fa-dna text-[#059669]"></i>
                Technical Association with Pentavalent Bio Sciences, Bangalore
              </div>
              
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#064e3b] leading-[1.15] mb-5">
                High-Purity Biological Raw Materials &amp; Custom CDMO for <span className="text-slate-900 underline decoration-emerald-500/50 decoration-4 underline-offset-4">IVD Manufacturers</span>
              </h1>
              
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-7 max-w-2xl">
                Indigenous Indian manufacturer and bulk supplier of high-affinity Monoclonal Antibodies, Recombinant Antigens, and 40nm Colloidal Gold Conjugates. Supported by state-of-the-art Bangalore biomanufacturing facilities and BIRAC, Dept. of Biotechnology, Govt. of India.
              </p>

              <div className="flex flex-wrap gap-3.5 mb-8">
                <Link 
                  href="/services" 
                  className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg bg-[#064e3b] hover:bg-[#043327] text-white font-semibold text-sm shadow-sm hover:shadow-md transition-all gap-2"
                >
                  <i className="fas fa-flask"></i>
                  Custom Development Services
                  <i className="fas fa-arrow-right text-xs"></i>
                </Link>
                <Link 
                  href="/products" 
                  className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 font-semibold text-sm transition-all shadow-xs gap-2"
                >
                  <i className="fas fa-layer-group text-[#064e3b]"></i>
                  Browse 64+ Catalog Reagents
                </Link>
              </div>

              {/* Trust Micro-Metrics */}
              <div className="pt-6 border-t border-slate-200/80 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-600 font-medium">
                <span className="flex items-center gap-1.5"><i className="fas fa-check-circle text-emerald-600"></i> Lot-Specific CoA &amp; MSDS</span>
                <span className="flex items-center gap-1.5"><i className="fas fa-check-circle text-emerald-600"></i> &gt;95% SDS-PAGE &amp; HPLC Purity</span>
                <span className="flex items-center gap-1.5"><i className="fas fa-check-circle text-emerald-600"></i> 24–48h Cold-Chain Express</span>
              </div>
            </div>

            {/* Right High-Impact Cleanroom Visual (5 Cols) */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200/80 group bg-slate-100">
                <img 
                  src="/images/biotech_cleanroom_hero.jpg" 
                  alt="SMD Life Sciences Bangalore Biomanufacturing Cleanroom" 
                  className="w-full h-[360px] sm:h-[420px] object-cover group-hover:scale-102 transition-transform duration-500"
                />
                
                {/* Floating Chip 1: Top-Left */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-xl shadow-md border border-slate-200/80 text-xs font-bold text-[#064e3b] flex items-center gap-2">
                  <i className="fas fa-microscope text-[#059669]"></i>
                  Bangalore Bio-Cluster R&amp;D Hub
                </div>

                {/* Floating Chip 2: Bottom-Right */}
                <div className="absolute bottom-4 right-4 bg-[#064e3b]/95 backdrop-blur-md text-white px-3.5 py-2 rounded-xl shadow-lg text-xs font-semibold flex items-center gap-2">
                  <i className="fas fa-shield-halved text-emerald-300"></i>
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
              <div className="text-2xl font-bold text-[#064e3b]">64+</div>
              <div className="text-xs text-slate-500 mt-1">Cataloged Reagents</div>
            </div>
            <div className="border-r border-slate-100 last:border-0">
              <div className="text-2xl font-bold text-emerald-600">&gt; 95%</div>
              <div className="text-xs text-slate-500 mt-1">SDS-PAGE &amp; HPLC Purity</div>
            </div>
            <div className="border-r border-slate-100 last:border-0">
              <div className="text-2xl font-bold text-[#064e3b]">Lot CoA</div>
              <div className="text-xs text-slate-500 mt-1">Batch Quality Assured</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-slate-900">24–48h</div>
              <div className="text-xs text-slate-500 mt-1">Cold-Chain Express Dispatch</div>
            </div>
          </div>
        </div>
      </section>

      {/* Two Core Pillars Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-[#064e3b] bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200/80">
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
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#064e3b] rounded-t-xl"></div>
            <div>
              <div className="w-12 h-12 rounded-lg bg-emerald-50 text-[#064e3b] border border-emerald-200/60 flex items-center justify-center mb-6 text-xl">
                <i className="fas fa-flask"></i>
              </div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#064e3b] mb-1">
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
                  <i className="fas fa-check-circle text-emerald-600 mt-1 shrink-0 text-xs"></i>
                  <span><strong>4-Phase Hybridoma Pipeline:</strong> Immunization to Roller Bottle Scale-up</span>
                </li>
                <li className="flex items-start gap-2">
                  <i className="fas fa-check-circle text-emerald-600 mt-1 shrink-0 text-xs"></i>
                  <span><strong>Recombinant Expression:</strong> <em>E. coli</em>, Pichia &amp; CHO/HEK293 systems</span>
                </li>
                <li className="flex items-start gap-2">
                  <i className="fas fa-check-circle text-emerald-600 mt-1 shrink-0 text-xs"></i>
                  <span><strong>Assay Pairing:</strong> Sandwich screening &amp; gold bioconjugation optimization</span>
                </li>
                <li className="flex items-start gap-2">
                  <i className="fas fa-check-circle text-emerald-600 mt-1 shrink-0 text-xs"></i>
                  <span><strong>IP Security:</strong> Client owns exclusive clone rights upon milestone completion</span>
                </li>
              </ul>
            </div>
            <Link 
              href="/services"
              className="inline-flex items-center justify-center w-full py-3 rounded-lg bg-[#064e3b] hover:bg-[#043327] text-white font-semibold text-sm transition-colors gap-2 shadow-xs"
            >
              Explore Custom Services Details
              <i className="fas fa-arrow-right text-xs"></i>
            </Link>
          </div>

          {/* Pillar 2: 64+ Catalog Reagents */}
          <div className="bg-white rounded-xl border border-slate-200 p-8 shadow-sm hover:shadow-md transition-shadow relative flex flex-col justify-between">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-slate-800 rounded-t-xl"></div>
            <div>
              <div className="w-12 h-12 rounded-lg bg-slate-100 text-slate-800 flex items-center justify-center mb-6 text-xl">
                <i className="fas fa-layer-group"></i>
              </div>
              <div className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
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
                  <i className="fas fa-check-circle text-emerald-600 mt-1 shrink-0 text-xs"></i>
                  <span><strong>Infectious Targets:</strong> Dengue NS1/IgG/IgM, Malaria Pf/Pv, HIV-1/2, HBsAg, HCV</span>
                </li>
                <li className="flex items-start gap-2">
                  <i className="fas fa-check-circle text-emerald-600 mt-1 shrink-0 text-xs"></i>
                  <span><strong>Cardiac Biomarkers:</strong> High-sensitivity Troponin I, CK-MB, Myoglobin</span>
                </li>
                <li className="flex items-start gap-2">
                  <i className="fas fa-check-circle text-emerald-600 mt-1 shrink-0 text-xs"></i>
                  <span><strong>Conjugates &amp; Controls:</strong> Colloidal gold 40nm, Goat anti-Mouse IgG</span>
                </li>
                <li className="flex items-start gap-2">
                  <i className="fas fa-check-circle text-emerald-600 mt-1 shrink-0 text-xs"></i>
                  <span><strong>Documentation:</strong> Batch-specific Certificate of Analysis (CoA) &amp; MSDS</span>
                </li>
              </ul>
            </div>
            <Link 
              href="/products"
              className="inline-flex items-center justify-center w-full py-3 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm transition-colors gap-2 shadow-xs"
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
              <span className="text-xs font-bold uppercase tracking-wider text-[#064e3b]">
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
              className="mt-4 sm:mt-0 inline-flex items-center text-sm font-semibold text-[#064e3b] hover:text-[#043327] gap-1.5"
            >
              View Full 64+ Catalog
              <i className="fas fa-arrow-right text-xs"></i>
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sampleProducts.map((product) => (
              <div 
                key={product.code}
                className="bg-slate-50 border border-slate-200 rounded-xl p-5 hover:border-[#065f46] hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono font-bold text-[#064e3b] bg-emerald-50 border border-emerald-200/80 px-2 py-0.5 rounded">
                      {product.code}
                    </span>
                    <span className="text-xs font-medium text-emerald-700">
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
                    className="text-xs font-semibold text-[#064e3b] hover:text-[#043327]"
                  >
                    View Datasheet ➔
                  </Link>
                  <a 
                    href={`https://wa.me/919555422455?text=Hello%20SMD%20Medicare,%20inquiry%20for%20IVD%20Reagent%20${product.code}%20(${encodeURIComponent(product.name)})`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-emerald-700 hover:text-emerald-800"
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
            <span className="text-xs font-bold uppercase tracking-wider text-[#064e3b] bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200/80">
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
                className="group bg-white rounded-xl border border-slate-200 p-5 shadow-xs hover:border-emerald-300 transition-colors [&_summary::-webkit-details-marker]:hidden"
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

      {/* Direct RFQ / WhatsApp CTA Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-r from-[#064e3b] via-[#065f46] to-[#043327] rounded-2xl p-8 sm:p-12 text-white text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-8 shadow-xl">
          <div className="max-w-2xl">
            <span className="inline-block px-3 py-1 rounded-full bg-emerald-400/20 text-emerald-200 text-xs font-semibold uppercase tracking-wider mb-4 border border-emerald-400/30">
              Direct Technical &amp; Commercial Desk
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold mb-3">
              Need Custom Assay Development or Bulk Evaluation Samples?
            </h2>
            <p className="text-slate-200 text-sm leading-relaxed">
              Connect directly with our Bangalore scientific coordination desk. Milestone quotes, Certificate of Analysis (CoA) verification, and 1mg–5mg evaluation samples dispatched within 24 hours.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto shrink-0">
            <a 
              href="https://wa.me/919555422455?text=Hello%20SMD%20Medicare,%20I%20am%20interested%20in%20custom%20biotech%20services%20/%20IVD%20raw%20materials." 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-white font-semibold text-sm transition-colors gap-2 shadow-lg"
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
