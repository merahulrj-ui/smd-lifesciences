import { Metadata } from 'next';
import Link from 'next/link';
import { BIOTECH_PRODUCTS } from '@/data/products';

export const metadata: Metadata = {
  title: 'Buy IVD Raw Materials & Reagents India | Batch CoA Guaranteed | SMD Life Sciences',
  description: 'India\'s premier B2B manufacturer and bulk supplier of IVD raw materials. High-purity recombinant antigens, matched monoclonal antibodies, and colloidal gold conjugates for lateral flow, ELISA, and CLIA kits from Bangalore.',
  keywords: [
    'buy IVD raw materials India',
    'diagnostic raw material supplier Bangalore',
    'lateral flow raw materials India bulk',
    'rapid test kit raw materials bulk',
    'recombinant antigens manufacturer India',
    'IVD assay components supplier'
  ],
  alternates: {
    canonical: 'https://lifesciences.smdmedicare.in/ivd-raw-materials',
  },
  openGraph: {
    title: 'Buy IVD Raw Materials & Reagents India | SMD Life Sciences',
    description: 'B2B diagnostic raw materials supplier in Bangalore. High-purity recombinant antigens, monoclonal antibodies, and colloidal gold conjugates for IVD manufacturers.',
    url: 'https://lifesciences.smdmedicare.in/ivd-raw-materials',
    siteName: 'SMD Life Sciences',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: 'https://lifesciences.smdmedicare.in/images/biotech_lateral_flow.webp',
        width: 1200,
        height: 630,
        alt: 'IVD Raw Materials and Lateral Flow Test Strip Development',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Buy IVD Raw Materials & Reagents India | SMD Life Sciences',
    description: 'High-purity recombinant antigens, monoclonal antibodies, and colloidal gold conjugates for IVD manufacturers.',
    images: ['https://lifesciences.smdmedicare.in/images/biotech_lateral_flow.webp'],
  },
};

const pillarFaqs = [
  {
    question: 'Why should diagnostic manufacturers source IVD raw materials domestically in India?',
    answer: 'Sourcing IVD biological reagents from SMD Life Sciences in Bangalore eliminates international customs clearance delays, reduces procurement costs by 30-45%, guarantees batch-to-batch consistency with lot-specific Certificate of Analysis (CoA), and enables dispatch within 2-4 business days.'
  },
  {
    question: 'What types of IVD biological raw materials does SMD Life Sciences provide?',
    answer: 'We supply high-purity recombinant antigens (>95% SDS-PAGE), paired monoclonal and polyclonal antibodies, high-affinity colloidal gold nanoparticle conjugates (40nm), and custom buffer formulations for rapid lateral flow, ELISA, and chemiluminescence (CLIA) platforms.'
  },
  {
    question: 'Can we order evaluation samples before bulk procurement?',
    answer: 'Yes, we provide 1mg to 5mg evaluation test samples with comprehensive analytical datasheets, SDS-PAGE purity profiles, and recommended application protocols so R&D scientists can validate sensitivity and specificity before ordering commercial bulk lots.'
  },
  {
    question: 'Are the reagents validated on clinical patient samples?',
    answer: 'Yes, all our IVD raw materials are cross-validated against confirmed positive and negative clinical sera in collaboration with Pentavalent Bio Sciences, Bangalore, to prevent false positives and non-specific binding.'
  },
];

const ivdSchemaGraph = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://lifesciences.smdmedicare.in/ivd-raw-materials#webpage',
      url: 'https://lifesciences.smdmedicare.in/ivd-raw-materials',
      name: 'IVD Raw Materials Manufacturer & Supplier in India',
      isPartOf: {
        '@id': 'https://lifesciences.smdmedicare.in/#website',
      },
      about: {
        '@id': 'https://lifesciences.smdmedicare.in/#organization',
      },
      description: 'High-purity recombinant antigens, monoclonal antibodies, and colloidal gold conjugates for IVD kit manufacturers in India and worldwide.',
      inLanguage: 'en-IN',
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://lifesciences.smdmedicare.in/ivd-raw-materials#breadcrumbs',
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
          name: 'IVD Raw Materials India',
          item: 'https://lifesciences.smdmedicare.in/ivd-raw-materials',
        },
      ],
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://lifesciences.smdmedicare.in/ivd-raw-materials#faq',
      mainEntity: pillarFaqs.map((faq) => ({
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

export default function IvdRawMaterialsPage() {
  const featuredReagents = BIOTECH_PRODUCTS.slice(0, 12);

  return (
    <div className="bg-slate-50 min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ivdSchemaGraph) }}
      />

      {/* Top Breadcrumb & Status */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between text-xs">
          <div className="flex items-center space-x-2 text-slate-500">
            <Link href="/" className="hover:text-orange-600 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-slate-900 font-semibold">IVD Raw Materials India</span>
          </div>
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-orange-50 text-orange-700 border border-orange-200/80">
            Bulk Reagents &amp; Evaluation Samples
          </span>
        </div>
      </div>

      {/* Hero Section (Modern High-Contrast Clean Slate) */}
      <section className="bg-gradient-to-b from-slate-50 via-white to-white text-slate-900 py-16 sm:py-20 border-b border-slate-200/80 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200/80 text-orange-700 text-xs font-bold uppercase tracking-wider mb-6">
              <i className="fas fa-microscope text-orange-600"></i>
              B2B Diagnostic Sourcing Hub &bull; Bangalore, India
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight mb-6">
              IVD Raw Materials Manufacturer &amp; Supplier in <span className="text-orange-600">India</span>
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8">
              High-purity biological raw materials engineered specifically for In Vitro Diagnostic (IVD) test kit manufacturers. From recombinant antigens and matched monoclonal antibodies to 40nm colloidal gold conjugates, we deliver dependable batch consistency with full Certificate of Analysis (CoA) verification.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <Link
                href="/products"
                className="px-6 py-3.5 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-sm transition-all shadow-md hover:shadow-lg"
              >
                Browse Full Reagents Catalog
              </Link>
              <a
                href="https://wa.me/919555422455?text=Hello%20SMD%20Medicare,%20inquiry%20for%20bulk%20IVD%20raw%20materials%20in%20India."
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm transition-colors shadow-sm flex items-center gap-2"
              >
                <i className="fab fa-whatsapp text-emerald-400"></i> WhatsApp Technical Desk
              </a>
            </div>
            <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-slate-200/80 text-xs text-slate-600">
              <div className="flex items-center gap-2 font-medium">
                <i className="fas fa-circle-check text-orange-600"></i> Batch-to-Batch Consistency Guaranteed
              </div>
              <div className="flex items-center gap-2 font-medium">
                <i className="fas fa-circle-check text-orange-600"></i> Bangalore Dispatch in 2–4 Days
              </div>
              <div className="flex items-center gap-2 font-medium">
                <i className="fas fa-circle-check text-orange-600"></i> Validated on Clinical Sera
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Advantages Section */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-orange-600">The Domestic Advantage</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-2">
              Why Global &amp; Indian IVD Manufacturers Choose SMD Life Sciences
            </h2>
            <p className="text-sm text-slate-600 mt-3">
              Resolving critical diagnostic supply chain vulnerabilities with high-purity biological production in technical partnership with Pentavalent Bio Sciences, Bangalore.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 rounded-xl bg-slate-50 border border-slate-200 hover:border-orange-300 transition-all">
              <div className="w-12 h-12 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center text-xl mb-4">
                <i className="fas fa-truck-fast"></i>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Zero Customs Holdups &bull; Fast Dispatch</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Domestic dispatch across India within 2 to 4 business days. Temperature-controlled packaging protects cold-chain integrity from Bangalore directly to your production cleanrooms.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-slate-50 border border-slate-200 hover:border-orange-300 transition-all">
              <div className="w-12 h-12 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center text-xl mb-4">
                <i className="fas fa-certificate"></i>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Purity &gt; 95% &bull; Validated CoA</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Each batch is verified by SDS-PAGE, SEC-HPLC, and clinical reactivity. Every lot comes with a comprehensive Certificate of Analysis (CoA) and Material Safety Data Sheet (MSDS).
              </p>
            </div>

            <div className="p-6 rounded-xl bg-slate-50 border border-slate-200 hover:border-orange-300 transition-all">
              <div className="w-12 h-12 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center text-xl mb-4">
                <i className="fas fa-hand-holding-dollar"></i>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">30-45% Cost Reduction</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Eliminate expensive overseas import tariffs, high broker freight margins, and foreign exchange fluctuations with transparent, factory-direct Indian Rupee (INR) B2B pricing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured IVD Reagents Showcase */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-orange-600">Reagents Portfolio</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1">
                Validated IVD Biological Raw Materials
              </h2>
              <p className="text-sm text-slate-500 mt-1">
                Sample selection from our validated reagents. 1mg–5mg evaluation samples ready for bench testing.
              </p>
            </div>
            <Link
              href="/products"
              className="mt-4 sm:mt-0 inline-flex items-center text-sm font-semibold text-orange-600 hover:text-orange-700 gap-1.5"
            >
              View Full Catalog &rarr;
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredReagents.map((product) => (
              <div
                key={product.code}
                className="relative bg-white border border-slate-200 rounded-xl p-5 hover:border-orange-400 hover:shadow-lg transition-all flex flex-col justify-between group cursor-pointer"
              >
                {/* Full-box Clickable Overlay Link */}
                <Link
                  href={`/products/${product.code}`}
                  className="absolute inset-0 z-10 rounded-xl"
                  aria-label={`View ${product.name} (${product.code}) datasheet`}
                />

                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono font-bold text-orange-700 bg-orange-50 border border-orange-200/80 px-2 py-0.5 rounded">
                      {product.code}
                    </span>
                    <span className="text-xs font-medium text-slate-500">
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
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-bold text-orange-600 group-hover:text-orange-700 flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                    View Datasheet &rarr;
                  </span>
                  <a
                    href={`https://wa.me/919555422455?text=Hello%20SMD%20Medicare,%20inquiry%20for%20IVD%20Reagent%20${product.code}%20(${encodeURIComponent(product.name)})`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative z-20 text-xs font-bold text-slate-600 hover:text-orange-600 transition-colors"
                  >
                    Request CoA
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white border-t border-slate-200 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-orange-600">Procurement &amp; QC FAQ</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1">
              Frequently Asked Questions About Sourcing IVD Raw Materials
            </h2>
          </div>

          <div className="space-y-4">
            {pillarFaqs.map((faq, idx) => (
              <details
                key={idx}
                className="group bg-slate-50 rounded-xl border border-slate-200 p-5 shadow-xs transition-all [&_summary::-webkit-details-marker]:hidden"
                {...(idx === 0 ? { open: true } : {})}
              >
                <summary className="flex cursor-pointer items-center justify-between gap-4 font-semibold text-slate-900 text-sm sm:text-base select-none">
                  <span>{faq.question}</span>
                  <span className="shrink-0 text-slate-400 group-open:rotate-180 transition-transform">
                    <i className="fas fa-chevron-down text-xs"></i>
                  </span>
                </summary>
                <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed pt-2 border-t border-slate-200/60">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Commercial Inquiry CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-r from-slate-900 via-slate-950 to-indigo-950 rounded-2xl p-8 sm:p-12 text-white text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-8 shadow-xl border border-slate-800">
          <div className="max-w-2xl">
            <span className="inline-block px-3 py-1 rounded-full bg-orange-500/20 text-orange-300 text-xs font-semibold uppercase tracking-wider mb-4 border border-orange-500/30">
              Direct Technical &amp; Commercial Desk
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold mb-3">
              Need Bulk Supply Quotes or Evaluation Samples?
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              Contact our Bangalore scientific coordination desk. Milestone quotes, Certificate of Analysis (CoA) verification, and 1mg–5mg evaluation samples dispatched promptly.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto shrink-0">
            <a
              href="https://wa.me/919555422455?text=Hello%20SMD%20Medicare,%20inquiry%20for%20bulk%20IVD%20raw%20materials."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-sm transition-all gap-2 shadow-md hover:shadow-lg"
            >
              💬 WhatsApp Desk
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold text-sm transition-colors gap-2"
            >
              Request Price Quotation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
