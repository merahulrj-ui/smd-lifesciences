import { Metadata } from 'next';
import Link from 'next/link';
import CustomServiceRFQForm from '@/components/CustomServiceRFQForm';

export const metadata: Metadata = {
  title: 'Diagnostic Development CDMO for IVD Companies India | SMD Life Sciences',
  description: 'Specialized Contract Development and Manufacturing Organization (CDMO) in Bangalore for IVD companies. End-to-end rapid lateral flow and ELISA assay development, antibody pairing, and commercial scale-up.',
  keywords: [
    'CDMO diagnostic development',
    'IVD CDMO services India',
    'lateral flow contract manufacturing Bangalore',
    'custom assay development CDMO',
    'hybridoma development service India',
    'rapid test development contract research'
  ],
  alternates: {
    canonical: 'https://lifesciences.smdmedicare.in/diagnostic-cdmo',
  },
  openGraph: {
    title: 'Diagnostic Development CDMO for IVD Companies India | SMD Life Sciences',
    description: 'Milestone-based contract development for IVD test kit manufacturers in Bangalore. Hybridoma generation, antigen expression, and rapid test assembly.',
    url: 'https://lifesciences.smdmedicare.in/diagnostic-cdmo',
    siteName: 'SMD Life Sciences',
    locale: 'en_IN',
    type: 'website',
    images: ['https://lifesciences.smdmedicare.in/icon-512.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Diagnostic Development CDMO for IVD Companies India | SMD Life Sciences',
    description: 'Contract development for IVD test kit manufacturers in Bangalore. Hybridoma generation, antigen expression, and rapid test assembly.',
    images: ['https://lifesciences.smdmedicare.in/icon-512.png'],
  },
};

const cdmoFaqs = [
  {
    question: 'What is the end-to-end timeline for developing a custom lateral flow rapid test?',
    answer: 'A standard custom lateral flow assay project progresses through 4 distinct milestones: Phase 1 (Reagent Generation / Screening: 4-6 weeks), Phase 2 (Assay Formulation & Membrane Optimization: 3-4 weeks), Phase 3 (Analytical Sensitivity & Specificity Validation: 3-4 weeks), and Phase 4 (Pilot Batch Assembly & Stability Studies: 4 weeks). Total typical turnaround is 12 to 16 weeks.'
  },
  {
    question: 'How do you structure intellectual property (IP) and data ownership?',
    answer: 'All intellectual property, proprietary antibody sequences, cell line master banks, and assay formulations generated under contract belong 100% exclusively to the client upon completion of agreed milestone payments. Comprehensive Non-Disclosure Agreements (NDAs) are executed prior to project kickoff.'
  },
  {
    question: 'Can you develop matched antibody pairs if only a target antigen is provided?',
    answer: 'Yes. Our Bangalore hybridoma platform immunizes mice with your target protein or synthetic peptide, screens hundreds of fusion clones, and isolates high-affinity matched pairs specifically evaluated for sandwich lateral flow or ELISA configurations.'
  },
  {
    question: 'Do you support regulatory dossier preparation and transfer to production?',
    answer: 'Yes. We provide complete Design History File (DHF) documentation, Standard Operating Procedures (SOPs), Bill of Materials (BOM), stability testing datasets, and transfer assistance for CDSCO, CE-IVD, or FDA 510(k) filings.'
  },
];

const cdmoSchemaGraph = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': 'https://lifesciences.smdmedicare.in/diagnostic-cdmo#service',
      name: 'Diagnostic Development CDMO Services',
      serviceType: 'Contract Development and Manufacturing (CDMO)',
      provider: {
        '@id': 'https://lifesciences.smdmedicare.in/#organization',
      },
      description: 'End-to-end Contract Development and Manufacturing Organization (CDMO) in Bangalore for IVD companies. Concept to commercial rapid test card development, antibody pairing, and assay optimization.',
      areaServed: ['IN', 'US', 'GB', 'AE', 'DE', 'FR', 'JP'],
    },
    {
      '@type': 'WebPage',
      '@id': 'https://lifesciences.smdmedicare.in/diagnostic-cdmo#webpage',
      url: 'https://lifesciences.smdmedicare.in/diagnostic-cdmo',
      name: 'Diagnostic Development CDMO for IVD Companies India',
      isPartOf: {
        '@id': 'https://lifesciences.smdmedicare.in/#website',
      },
      about: {
        '@id': 'https://lifesciences.smdmedicare.in/#organization',
      },
      inLanguage: 'en-IN',
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://lifesciences.smdmedicare.in/diagnostic-cdmo#breadcrumbs',
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
          name: 'Diagnostic CDMO Services',
          item: 'https://lifesciences.smdmedicare.in/diagnostic-cdmo',
        },
      ],
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://lifesciences.smdmedicare.in/diagnostic-cdmo#faq',
      mainEntity: cdmoFaqs.map((faq) => ({
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

export default function DiagnosticCdmoPage() {
  return (
    <div className="bg-slate-50 min-h-screen text-slate-900 selection:bg-orange-500 selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(cdmoSchemaGraph) }}
      />

      {/* Top Breadcrumb */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between text-xs">
          <div className="flex items-center space-x-2 text-slate-500">
            <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-slate-900 font-semibold">Diagnostic CDMO Development</span>
          </div>
          <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800">
            Bangalore R&amp;D Cleanrooms
          </span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-orange-300 text-xs font-bold tracking-wide uppercase mb-6">
              <i className="fas fa-flask text-orange-400"></i>
              Milestone-Based Diagnostic CDMO &bull; Bangalore
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight mb-6">
              Diagnostic Development CDMO for <span className="text-orange-400">IVD Companies</span>
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8">
              Accelerate your diagnostic pipeline from molecular concept to market-ready rapid lateral flow cards and ELISA kits. In technical partnership with Pentavalent Bio Sciences, we provide milestone-guaranteed development, matched antibody pair discovery, and pilot-scale manufacturing.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#rfq-form"
                className="px-6 py-3.5 rounded-lg bg-orange-500 hover:bg-orange-600 text-white font-semibold text-sm transition-colors shadow-lg"
              >
                Submit Project RFQ
              </a>
              <a
                href="https://wa.me/919555422455?text=Hello%20SMD%20Medicare,%20inquiry%20for%20diagnostic%20CDMO%20development%20in%20Bangalore."
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm transition-colors shadow-lg"
              >
                💬 Discuss with Lead Scientist
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 4-Phase CDMO Workflow Section */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-orange-600">The 4-Phase Workflow</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-2">
              Structured Milestone-Based CDMO Delivery Model
            </h2>
            <p className="text-sm text-slate-600 mt-3">
              Clear deliverables, gated go/no-go validation criteria, and transparent milestone invoicing.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="p-6 rounded-xl bg-slate-50 border border-slate-200 relative">
              <div className="w-10 h-10 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center text-sm mb-4">
                01
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">Target &amp; Antigen Expression</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Recombinant antigen design, codon optimization, bacterial/mammalian expression, and affinity purification.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-slate-50 border border-slate-200 relative">
              <div className="w-10 h-10 rounded-full bg-emerald-600 text-white font-bold flex items-center justify-center text-sm mb-4">
                02
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">Monoclonal Antibody Discovery</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Hybridoma generation, high-throughput screening, and matched sandwich pair affinity validation.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-slate-50 border border-slate-200 relative">
              <div className="w-10 h-10 rounded-full bg-orange-600 text-white font-bold flex items-center justify-center text-sm mb-4">
                03
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">Assay Formulation &amp; Strip Assembly</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Nitrocellulose membrane selection, colloidal gold conjugation, running buffer optimization, and LOD determination.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-slate-50 border border-slate-200 relative">
              <div className="w-10 h-10 rounded-full bg-purple-600 text-white font-bold flex items-center justify-center text-sm mb-4">
                04
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">Pilot Batch &amp; Stability Verification</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Accelerated thermal stability testing, clinical serum specificity panel, and tech-transfer documentation package.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* RFQ Form Integration */}
      <section id="rfq-form" className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600">Confidential Project Scoping</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1">
              Request a CDMO Technical Feasibility Assessment
            </h2>
            <p className="text-sm text-slate-500 mt-2">
              Share your target analyte, preferred platform (Rapid Test or ELISA), and project timeline under standard mutual NDA.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
            <CustomServiceRFQForm />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white border-t border-slate-200 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600">CDMO Engagement FAQ</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1">
              Frequently Asked Questions About Our Diagnostic CDMO
            </h2>
          </div>

          <div className="space-y-4">
            {cdmoFaqs.map((faq, idx) => (
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
    </div>
  );
}
