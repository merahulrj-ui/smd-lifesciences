import { Metadata } from 'next';
import Link from 'next/link';
import { BIOTECH_PRODUCTS } from '@/data/products';

export const metadata: Metadata = {
  title: 'Recombinant & Native Antigens Supplier India (Bangalore) | >95% Purity | SMD Life Sciences',
  description: 'Leading B2B recombinant and native antigens supplier in India (Electronic City, Bangalore). High-purity viral, bacterial, parasitic & cardiac antigens (>95% SEC-HPLC) for lateral flow, ELISA, and CLIA diagnostic kits.',
  keywords: [
    'native antigens supplier India',
    'recombinant and native antigens supplier India',
    'buy native antigens India',
    'buy recombinant antigens India',
    'recombinant antigens manufacturer Bangalore',
    'bulk diagnostic antigens supplier',
    'infectious disease recombinant antigens',
    'cardiac marker recombinant antigens',
    'malaria recombinant antigen bulk price',
    'dengue ns1 recombinant antigen supplier'
  ],
  alternates: {
    canonical: 'https://www.smdlifesciences.com/recombinant-antigens',
  },
  openGraph: {
    title: 'Recombinant & Native Antigens Supplier India (Bangalore) | SMD Life Sciences',
    description: 'High-purity recombinant and native-grade diagnostic antigens manufactured in Electronic City, Bangalore for lateral flow, ELISA, and CLIA test kits.',
    url: 'https://www.smdlifesciences.com/recombinant-antigens',
    siteName: 'SMD Life Sciences',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: 'https://www.smdlifesciences.com/images/biotech_chromatography.webp',
        width: 1200,
        height: 630,
        alt: 'Recombinant & Native Antigens Supplier India — ÄKTA Chromatography Purification',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Recombinant & Native Antigens Supplier India (Bangalore) | SMD Life Sciences',
    description: 'High-purity recombinant and native-conformation antigens manufactured in Electronic City, Bangalore for lateral flow and ELISA test kits.',
    images: ['https://www.smdlifesciences.com/images/biotech_chromatography.webp'],
  },
};

const antigenFaqs = [
  {
    question: 'Why choose SMD Life Sciences as your recombinant and native antigens supplier in India?',
    answer: 'As an indigenous recombinant and native antigens supplier in India (Electronic City, Bangalore), we eliminate international cold-chain delays and provide biohazard-free, native-conformation viral, bacterial, and parasitic proteins with >95% SEC-HPLC purity and 24–48 hour dispatch.'
  },
  {
    question: 'What expression systems are used for recombinant and native-conformation antigen production?',
    answer: 'We utilize Escherichia coli for non-glycosylated viral and bacterial antigens, Pichia pastoris (yeast) for disulfide-rich virus-like particles (VLPs), and HEK293/CHO mammalian cells for complex glycosylated native-conformation antigens requiring authentic human post-translational modifications.'
  },
  {
    question: 'How is the purity and activity of diagnostic antigens verified?',
    answer: 'Every antigen lot undergoes rigorous purity verification by SDS-PAGE (>95% purity) and size-exclusion chromatography (SEC-HPLC). Biological activity and immunoreactivity are validated using both ELISA titration curves and rapid lateral flow dipstick tests.'
  },
  {
    question: 'Can you customize expression tags or buffer formulations for our assays?',
    answer: 'Yes. We offer tag-free, His-tag, or GST-tag versions, and can dialyze or lyophilize recombinant and native proteins into your proprietary assay running buffer, including specific pH, salt, and stabilizer requirements.'
  },
  {
    question: 'What disease targets are covered in your antigen supplier catalog in India?',
    answer: 'Our portfolio covers infectious diseases (HIV 1/2, Hepatitis B, Hepatitis C, Dengue NS1/Envelope, Malaria Pf/Pv, Syphilis, Typhoid), cardiac markers (Troponin I, CK-MB, Myoglobin, D-Dimer), and hormone/fertility targets (hCG, LH, TSH, T3/T4-BSA).'
  },
];

const antigenSchemaGraph = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://lifesciences.smdmedicare.in/recombinant-antigens#webpage',
      url: 'https://lifesciences.smdmedicare.in/recombinant-antigens',
      name: 'Recombinant Antigens Manufacturer in Bangalore, India',
      isPartOf: {
        '@id': 'https://lifesciences.smdmedicare.in/#website',
      },
      about: {
        '@id': 'https://lifesciences.smdmedicare.in/#organization',
      },
      description: 'High-purity recombinant antigens manufactured in Electronic City, Bangalore for IVD kit manufacturers.',
      inLanguage: 'en-IN',
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://lifesciences.smdmedicare.in/recombinant-antigens#breadcrumbs',
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
          name: 'Recombinant Antigens Bangalore',
          item: 'https://lifesciences.smdmedicare.in/recombinant-antigens',
        },
      ],
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://lifesciences.smdmedicare.in/recombinant-antigens#faq',
      mainEntity: antigenFaqs.map((faq) => ({
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

export default function RecombinantAntigensPage() {
  const recombinantAntigens = BIOTECH_PRODUCTS.filter((p) =>
    p.type.toLowerCase().includes('recombinant') || p.format.toLowerCase().includes('coating')
  ).slice(0, 12);

  return (
    <div className="bg-slate-50 min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(antigenSchemaGraph) }}
      />

      {/* Top Breadcrumb */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between text-xs">
          <div className="flex items-center space-x-2 text-slate-500">
            <Link href="/" className="hover:text-orange-600 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-slate-900 font-semibold">Recombinant Antigens Bangalore</span>
          </div>
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-orange-50 text-orange-700 border border-orange-200/80">
            Electronic City Biomanufacturing
          </span>
        </div>
      </div>

      {/* Hero Section (Modern High-Contrast Clean Slate) */}
      <section className="bg-gradient-to-b from-slate-50 via-white to-white text-slate-900 py-16 sm:py-20 border-b border-slate-200/80 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200/80 text-orange-700 text-xs font-bold uppercase tracking-wider mb-6">
              <i className="fas fa-dna text-orange-600"></i>
              Synthetic Biology &bull; High-Density Fermentation &bull; Bangalore
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight mb-6">
              Recombinant &amp; Native Antigens Supplier in <span className="text-orange-600">India (Bangalore)</span>
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8">
              Engineered for maximum epitope accessibility and solid-phase coating efficiency. As a trusted <strong>recombinant and native antigens supplier in India</strong>, SMD Life Sciences manufactures pharmaceutical-grade diagnostic proteins for lateral flow rapid test strips, ELISA microplates, and chemiluminescent (CLIA) analyzers in Electronic City, Bangalore.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <Link
                href="/products"
                className="px-6 py-3.5 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-sm transition-all shadow-md hover:shadow-lg"
              >
                Explore Antigens Catalog
              </Link>
              <a
                href="https://wa.me/919555422455?text=Hello%20SMD%20Medicare,%20inquiry%20for%20recombinant%20antigens%20in%20Bangalore."
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm transition-colors shadow-sm flex items-center gap-2"
              >
                <i className="fab fa-whatsapp text-emerald-400"></i> WhatsApp Technical Desk
              </a>
            </div>
            <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-slate-200/80 text-xs text-slate-600">
              <div className="flex items-center gap-2 font-medium">
                <i className="fas fa-circle-check text-orange-600"></i> &gt;95% Monomeric Purity (SEC-HPLC)
              </div>
              <div className="flex items-center gap-2 font-medium">
                <i className="fas fa-circle-check text-orange-600"></i> Clinical Reactivity Validated
              </div>
              <div className="flex items-center gap-2 font-medium">
                <i className="fas fa-circle-check text-orange-600"></i> Gram-Scale Biomanufacturing
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Production Platforms & Specifications */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-orange-600">Production Standards</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-2">
              Expression Platforms Engineered for Diagnostic Precision
            </h2>
            <p className="text-sm text-slate-600 mt-3">
              Standardized bioprocessing pipelines ensuring batch-to-batch repeatability and prolonged shelf-life.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 rounded-xl bg-slate-50 border border-slate-200 hover:border-orange-300 transition-all">
              <div className="w-12 h-12 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center text-xl mb-4">
                <i className="fas fa-vial"></i>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Bacterial &bull; E. coli Systems</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                High-yield expression for non-glycosylated viral core proteins and bacterial surface antigens. Optimized inclusion body refolding with &gt;95% monomeric purity.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-slate-50 border border-slate-200 hover:border-orange-300 transition-all">
              <div className="w-12 h-12 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center text-xl mb-4">
                <i className="fas fa-layer-group"></i>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Yeast &bull; Pichia pastoris</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Secretory expression for disulfide-rich proteins and multi-epitope chimeric antigens. Retains authentic conformation and epitope binding affinity.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-slate-50 border border-slate-200 hover:border-orange-300 transition-all">
              <div className="w-12 h-12 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center text-xl mb-4">
                <i className="fas fa-check-double"></i>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Mammalian &bull; HEK293 / CHO</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Native glycosylation for complex viral envelope glycoprotein antigens (e.g. Dengue NS1, Hepatitis C E2). Minimizes false reactivity against patient serum antibodies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Antigens Grid */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-orange-600">Recombinant Portfolio</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1">
                Validated Recombinant Diagnostic Antigens
              </h2>
              <p className="text-sm text-slate-500 mt-1">
                Manufactured in Bangalore. 1mg to 5mg evaluation test samples ready for immediate dispatch.
              </p>
            </div>
            <Link
              href="/products"
              className="mt-4 sm:mt-0 inline-flex items-center text-sm font-semibold text-orange-600 hover:text-orange-700 gap-1.5"
            >
              Browse All Reagents &rarr;
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {recombinantAntigens.map((product) => (
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
                    <div><span className="text-slate-400">Host:</span> {product.host}</div>
                    <div><span className="text-slate-400">Applications:</span> {product.applications}</div>
                  </div>
                </div>
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-bold text-orange-600 group-hover:text-orange-700 flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                    View Datasheet &rarr;
                  </span>
                  <a
                    href={`https://wa.me/919555422455?text=Hello%20SMD%20Medicare,%20inquiry%20for%20Recombinant%20Antigen%20${product.code}%20(${encodeURIComponent(product.name)})`}
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
            <span className="text-xs font-bold uppercase tracking-wider text-orange-600">Technical FAQ</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1">
              Frequently Asked Questions About Our Recombinant Antigens
            </h2>
          </div>

          <div className="space-y-4">
            {antigenFaqs.map((faq, idx) => (
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

      {/* Direct CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-r from-slate-900 via-slate-950 to-indigo-950 rounded-2xl p-8 sm:p-12 text-white text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-8 shadow-xl border border-slate-800">
          <div className="max-w-2xl">
            <span className="inline-block px-3 py-1 rounded-full bg-orange-500/20 text-orange-300 text-xs font-semibold uppercase tracking-wider mb-4 border border-orange-500/30">
              Bangalore Production Facility
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold mb-3">
              Need Custom Antigen Expression or Bulk Lots?
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              Connect with our protein engineering scientists in Electronic City, Bangalore. Custom sequence design, codon optimization, and gram-scale biomanufacturing.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto shrink-0">
            <a
              href="https://wa.me/919555422455?text=Hello%20SMD%20Medicare,%20inquiry%20for%20custom%20recombinant%20antigen%20expression."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-sm transition-all gap-2 shadow-md hover:shadow-lg"
            >
              💬 WhatsApp Scientists
            </a>
            <Link
              href="/services"
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold text-sm transition-colors gap-2"
            >
              Custom Expression RFQ
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
