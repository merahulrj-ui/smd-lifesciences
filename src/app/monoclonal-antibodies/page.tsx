import { Metadata } from 'next';
import Link from 'next/link';
import { BIOTECH_PRODUCTS } from '@/data/products';
import ProductsAutoCrawlHub from '@/components/ProductsAutoCrawlHub';

export const metadata: Metadata = {
  title: 'Diagnostic Monoclonal Antibodies Supplier India (Matched Pairs & Bulk CoA) | SMD Life Sciences',
  description: 'Direct B2B diagnostic monoclonal antibody supplier in India (Bangalore). High-affinity matched antibody pairs for Lateral Flow rapid tests and ELISA (Troponin I, Dengue NS1, Malaria Pf/Pv, HIV, HCG, Syphilis). Request 1mg–5mg evaluation samples with lot-specific CoA.',
  keywords: [
    'monoclonal antibody supplier india',
    'diagnostic antibody supplier india',
    'matched antibody pair supplier',
    'recombinant antibody supplier india',
    'dengue ns1 antibody supplier india',
    'ctni monoclonal antibody supplier',
    'buy monoclonal antibodies bulk india',
    'lateral flow antibody manufacturer bangalore',
    'elisa antibody matched pairs india',
    'bulk antibody production service bangalore',
    'anti-mouse igg control line antibody'
  ],
  alternates: {
    canonical: 'https://lifesciences.smdmedicare.in/monoclonal-antibodies',
  },
  openGraph: {
    title: 'Diagnostic Monoclonal Antibodies Supplier India | SMD Life Sciences',
    description: 'High-affinity matched monoclonal antibody pairs for Lateral Flow and ELISA diagnostic kit manufacturers in India. 1mg–5mg evaluation samples ready.',
    url: 'https://lifesciences.smdmedicare.in/monoclonal-antibodies',
    siteName: 'SMD Life Sciences',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: 'https://lifesciences.smdmedicare.in/images/biotech_lateral_flow.webp',
        width: 1200,
        height: 630,
        alt: 'Diagnostic Monoclonal Antibodies Supplier India — SMD Life Sciences Bangalore',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Diagnostic Monoclonal Antibodies Supplier India | SMD Life Sciences',
    description: 'High-affinity matched monoclonal antibody pairs for Lateral Flow & ELISA diagnostic manufacturers with Lot CoA.',
    images: ['https://lifesciences.smdmedicare.in/images/biotech_lateral_flow.webp'],
  },
};

const antibodyFaqs = [
  {
    question: 'Why choose SMD Life Sciences as your diagnostic monoclonal antibody supplier in India?',
    answer: 'Manufactured and validated at our Bangalore bio-cluster facility, our diagnostic monoclonal antibodies eliminate international import duties, cold-chain customs clearance delays, and lot-to-lot affinity variations. We offer guaranteed matched capture-detector pairs with analytical Certificate of Analysis (CoA) and 24–48 hour dispatch.'
  },
  {
    question: 'How are matched antibody pairs validated for lateral flow and ELISA assays?',
    answer: 'Every antibody clone undergoes pair-matching screening using surface plasmon resonance (SPR) for kinetic Ka/Kd binding constants, sandwich ELISA checkerboard titrations, and rapid colloidal gold lateral flow dipstick runs to verify zero self-quenching and high analytical sensitivity.'
  },
  {
    question: 'What disease targets and clinical panels are available in your antibody catalog?',
    answer: 'Our portfolio covers critical diagnostic panels: Infectious Diseases (Dengue NS1/Envelope, Malaria Pf-HRP2/Pan-pLDH, HIV-1/2, Syphilis, Typhoid), Cardiac Markers (High-Sensitivity Troponin I cTnI, CK-MB, D-Dimer, Myoglobin), and Hormone/Fertility (beta-hCG, LH, TSH).'
  },
  {
    question: 'Can you provide carrier-free formulation for custom colloidal gold or latex conjugation?',
    answer: 'Yes. All our diagnostic antibodies are available in carrier-free format (100% BSA-free, glycerol-free, sodium azide-free) to ensure maximum conjugation efficiency with 40nm colloidal gold nanoparticles, magnetic beads, or fluorescent europium microspheres.'
  },
  {
    question: 'What is the minimum order quantity (MOQ) and sample evaluation policy?',
    answer: 'We provide 1mg to 5mg evaluation sample vials for IVD R&D and assay optimization. Upon successful validation, commercial production scales from 50mg up to multi-gram bulk bioreactor batches with batch reservation.'
  },
];

const antibodySchemaGraph = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://lifesciences.smdmedicare.in/monoclonal-antibodies#webpage',
      url: 'https://lifesciences.smdmedicare.in/monoclonal-antibodies',
      name: 'Diagnostic Monoclonal Antibodies Supplier India',
      isPartOf: {
        '@id': 'https://lifesciences.smdmedicare.in/#website',
      },
      about: {
        '@id': 'https://lifesciences.smdmedicare.in/#organization',
      },
      description: 'B2B bulk supplier of matched diagnostic monoclonal antibodies and lateral flow paired clones in Bangalore, India.',
      inLanguage: 'en-IN',
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://lifesciences.smdmedicare.in/monoclonal-antibodies#breadcrumbs',
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
          name: 'Monoclonal Antibodies',
          item: 'https://lifesciences.smdmedicare.in/monoclonal-antibodies',
        },
      ],
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://lifesciences.smdmedicare.in/monoclonal-antibodies#faq',
      mainEntity: antibodyFaqs.map((faq) => ({
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

export default function MonoclonalAntibodiesPage() {
  const antibodyProducts = BIOTECH_PRODUCTS.filter(
    (p) => p.type.toLowerCase().includes('antibody') || p.category.toLowerCase().includes('antibody') || p.name.toLowerCase().includes('antibody')
  );

  return (
    <div className="bg-slate-50 min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(antibodySchemaGraph) }}
      />

      {/* Hero Header */}
      <section className="bg-slate-900 text-white py-14 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <i className="fas fa-certificate text-orange-400"></i> B2B Diagnostic Antibodies &bull; Bangalore Hub
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight max-w-4xl leading-tight">
            Diagnostic Monoclonal Antibodies Supplier in India
          </h1>
          <p className="mt-4 text-slate-300 text-base sm:text-lg max-w-3xl leading-relaxed">
            High-affinity matched monoclonal antibody pairs engineered for Lateral Flow rapid test strips, ELISA, and CLIA platforms. Manufactured in Electronic City, Bangalore with carrier-free formulations, &gt;95% Protein A purity, and batch-reserved Lot Certificate of Analysis (CoA).
          </p>

          {/* Key Value Badges */}
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl">
            <div className="bg-slate-800/60 border border-slate-700/60 rounded-xl p-3.5">
              <span className="text-xs text-slate-400 block font-medium">Affinity (Kd)</span>
              <span className="text-sm sm:text-base font-bold text-white">&lt; 10⁻⁹ M (Sub-nM)</span>
            </div>
            <div className="bg-slate-800/60 border border-slate-700/60 rounded-xl p-3.5">
              <span className="text-xs text-slate-400 block font-medium">Purity (Protein A)</span>
              <span className="text-sm sm:text-base font-bold text-white">&gt; 95% SDS-PAGE</span>
            </div>
            <div className="bg-slate-800/60 border border-slate-700/60 rounded-xl p-3.5">
              <span className="text-xs text-slate-400 block font-medium">Evaluation Vials</span>
              <span className="text-sm sm:text-base font-bold text-orange-400">1mg – 5mg In Stock</span>
            </div>
            <div className="bg-slate-800/60 border border-slate-700/60 rounded-xl p-3.5">
              <span className="text-xs text-slate-400 block font-medium">Cold-Chain Express</span>
              <span className="text-sm sm:text-base font-bold text-white">24–48h PAN-India</span>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-4 items-center">
            <Link
              href="/contact"
              className="bg-orange-600 hover:bg-orange-700 text-white font-bold px-6 py-3 rounded-xl transition-all shadow-lg hover:shadow-orange-600/30 text-sm flex items-center gap-2"
            >
              <i className="fas fa-file-contract"></i> Request Matched Pair Samples &amp; Bulk CoA
            </Link>
            <a
              href="https://wa.me/919555422455?text=Hello%20SMD%20Life%20Sciences,%20we%20need%20bulk%20quote%20for%20diagnostic%20monoclonal%20antibodies."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-6 py-3 rounded-xl transition-all text-sm flex items-center gap-2 shadow-lg hover:shadow-emerald-600/30"
            >
              <i className="fab fa-whatsapp"></i> WhatsApp Technical Desk
            </a>
          </div>
        </div>
      </section>

      {/* Main Catalog View */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-200 gap-4">
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight flex items-center gap-2">
              <i className="fas fa-dna text-orange-600 text-lg"></i>
              Validated Monoclonal Antibody Catalog ({antibodyProducts.length} Reagents)
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Select validated capture, detector, or matched pair clones. Lot CoA and evaluation vials ready for dispatch.
            </p>
          </div>
          <Link
            href="/contact"
            className="text-xs sm:text-sm font-bold text-orange-600 hover:text-orange-700 bg-orange-50 px-4 py-2 rounded-lg border border-orange-200 transition-colors shrink-0 self-start sm:self-auto"
          >
            Bulk Inquiry &amp; Custom Sourcing &rarr;
          </Link>
        </div>

        {/* Product Grid */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {antibodyProducts.map((p) => (
            <div
              key={p.code}
              className="bg-white border border-slate-200 hover:border-orange-500/60 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-mono font-bold bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md border border-slate-200">
                    {p.code}
                  </span>
                  <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full">
                    {p.purity || '>95% Protein A'}
                  </span>
                </div>

                <Link href={`/products/${p.code}`} className="block">
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-orange-600 transition-colors leading-snug">
                    {p.name}
                  </h3>
                </Link>

                <div className="mt-3 space-y-1.5 text-xs text-slate-600">
                  <p className="flex items-center justify-between">
                    <span className="text-slate-400">Target / Analyte:</span>
                    <span className="font-semibold text-slate-800">{p.target}</span>
                  </p>
                  <p className="flex items-center justify-between">
                    <span className="text-slate-400">Application:</span>
                    <span className="font-semibold text-slate-800">{p.applications}</span>
                  </p>
                  <p className="flex items-center justify-between">
                    <span className="text-slate-400">Clonality:</span>
                    <span className="font-semibold text-slate-800">{p.type}</span>
                  </p>
                </div>
              </div>

              <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                <Link
                  href={`/products/${p.code}`}
                  className="text-xs font-bold text-slate-700 hover:text-orange-600 transition-colors"
                >
                  View CoA &amp; Specs &rarr;
                </Link>
                <Link
                  href={`/contact?sku=${p.code}&name=${encodeURIComponent(p.name)}`}
                  className="text-xs font-bold bg-orange-600 hover:bg-orange-700 text-white px-3.5 py-2 rounded-lg transition-colors shadow-sm"
                >
                  Request 1mg Sample
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Commercial FAQ Section for SEO */}
      <section className="bg-white border-t border-slate-200 py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Commercial &amp; Technical Procurement FAQs
            </h2>
            <p className="text-slate-500 text-sm mt-2">
              Common questions from IVD kit manufacturers regarding bulk antibody supply, evaluation vials, and lot reservation.
            </p>
          </div>

          <div className="space-y-4">
            {antibodyFaqs.map((faq, idx) => (
              <div key={idx} className="border border-slate-200 rounded-xl p-5 bg-slate-50/50">
                <h3 className="text-base font-bold text-slate-900 mb-2 flex items-start gap-2.5">
                  <span className="text-orange-600 font-mono text-sm">Q{idx + 1}.</span>
                  {faq.question}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed pl-6">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Auto Crawl Hub */}
      <ProductsAutoCrawlHub />
    </div>
  );
}
