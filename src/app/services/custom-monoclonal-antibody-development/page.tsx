import { Metadata } from 'next';
import Link from 'next/link';
import CustomServiceRFQForm from '@/components/CustomServiceRFQForm';

export const metadata: Metadata = {
  title: 'Custom Monoclonal Antibody Development Service India | SMD Life Sciences',
  description: 'Turnkey custom monoclonal antibody development (hybridoma & recombinant mAb) for IVD rapid test manufacturers, ELISA developers, and biopharma. 4-phase milestone workflow, Balb/c mice immunization, titer guarantee >= 1:128,000, 100% client IP ownership.',
  keywords: [
    'custom monoclonal antibody development india',
    'custom monoclonal antibody production service',
    'hybridoma development service bangalore',
    'IVD monoclonal antibody manufacturer',
    'matched antibody pair development',
    'monoclonal antibody contract research',
    'custom mAb production india',
    'lateral flow antibody pairing service'
  ],
  alternates: {
    canonical: 'https://lifesciences.smdmedicare.in/services/custom-monoclonal-antibody-development',
  },
  openGraph: {
    title: 'Custom Monoclonal Antibody Development Service | SMD Life Sciences',
    description: '4-Phase milestone-based murine hybridoma monoclonal antibody generation with guaranteed titer (>= 1:128,000), 2-5 validated clones, and 100% client IP assignment.',
    url: 'https://lifesciences.smdmedicare.in/services/custom-monoclonal-antibody-development',
    siteName: 'SMD Life Sciences',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: 'https://lifesciences.smdmedicare.in/images/biotech_microplate_assay.webp',
        width: 1200,
        height: 630,
        alt: 'Custom Monoclonal Antibody Development Laboratory Bangalore',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Custom Monoclonal Antibody Development Service India | SMD Life Sciences',
    description: 'Milestone-based hybridoma generation, matched pair screening for lateral flow & ELISA, and Protein A purification in Bangalore.',
    images: ['https://lifesciences.smdmedicare.in/images/biotech_microplate_assay.webp'],
  },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': 'https://lifesciences.smdmedicare.in/services/custom-monoclonal-antibody-development#service',
      name: 'Custom Monoclonal Antibody Development Service',
      serviceType: 'Contract Research & Development (CRO/CDMO)',
      provider: {
        '@id': 'https://lifesciences.smdmedicare.in/#organization',
      },
      description: 'Phased milestone-based custom monoclonal antibody development using murine hybridoma technology for IVD kit manufacturers, diagnostic assay developers, and biotech researchers.',
      areaServed: ['IN', 'US', 'GB', 'AE', 'DE', 'FR', 'JP', 'SG'],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Monoclonal Antibody Development Deliverables',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Phase 1: Antigen Immunization & Titer Verification',
              description: 'Balb/c mouse immunization with guaranteed ELISA titer >= 1:128,000 before proceeding to fusion.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Phase 2: Hybridoma Cell Fusion & High-Throughput Screening',
              description: 'Sp2/0 myeloma fusion, HAT selection, and multi-parameter screening (ELISA, Western Blot, Cross-Reactivity testing).',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Phase 3: Subcloning & Master Cell Banking',
              description: 'Single-cell cloning by limiting dilution (>99% monoclonality) and liquid nitrogen cryopreservation.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Phase 4: Pilot Production & Protein A/G Purification',
              description: 'Purification of 2-10 mg validated mAb with >95% SDS-PAGE purity, endotoxin testing, and full Certificate of Analysis.',
            },
          },
        ],
      },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://lifesciences.smdmedicare.in/services/custom-monoclonal-antibody-development#breadcrumbs',
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
          name: 'Services',
          item: 'https://lifesciences.smdmedicare.in/services',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Custom Monoclonal Antibody Development',
          item: 'https://lifesciences.smdmedicare.in/services/custom-monoclonal-antibody-development',
        },
      ],
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://lifesciences.smdmedicare.in/services/custom-monoclonal-antibody-development#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is the typical turnaround time for custom monoclonal antibody development?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The complete 4-phase hybridoma monoclonal antibody development protocol typically takes 12 to 16 weeks. Fast-track express immunization protocols can yield primary fusion candidates in as early as 9 to 10 weeks.',
          },
        },
        {
          '@type': 'Question',
          name: 'Who owns the intellectual property (IP) and hybridoma clones?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '100% of the intellectual property, parental hybridoma cell lines, sequence data, and generated antibodies belong exclusively to the client. SMD Life Sciences operates on a fee-for-service model with zero reach-through royalties.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can you develop matched antibody pairs for lateral flow rapid tests and sandwich ELISA?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. We specialize in matched antibody pair development specifically designed for IVD assay platforms. Clones are cross-screened simultaneously as capture antibodies (solid phase) and detection antibodies (colloidal gold/HRP/fluorescent conjugate) to ensure zero epitope competition and high analytical sensitivity.',
          },
        },
        {
          '@type': 'Question',
          name: 'What happens if the mouse serum titer is insufficient at Phase 1?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'We guarantee an ELISA titer of at least 1:128,000 against the target antigen before proceeding to cell fusion. If the titer does not meet benchmark criteria, booster regimens are extended or the project is halted with zero financial liability for subsequent unperformed phases.',
          },
        },
      ],
    },
  ],
};

const PHASES = [
  {
    phase: 'Phase 01',
    title: 'Antigen Preparation & Immunization',
    timeline: 'Weeks 1 – 6',
    deliverables: 'Pre-immune serum, post-booster titration curve, and ELISA titer certificate (>= 1:128,000)',
    steps: [
      'Antigen design, peptide synthesis with KLH carrier coupling, or recombinant antigen validation',
      'Immunization cohort of 5 Balb/c mice using optimized adjuvant formulations',
      'Multi-point booster injections (days 0, 14, 28, and 35)',
      'Serum titer screening via indirect ELISA against target antigen and negative controls',
      'Selection of top 2 high-responding mice for splenic harvest and myeloma fusion'
    ]
  },
  {
    phase: 'Phase 02',
    title: 'Splenic Fusion & High-Throughput Screening',
    timeline: 'Weeks 7 – 9',
    deliverables: 'Primary screening data, competitive ELISA inhibition data, and positive fusion master wells',
    steps: [
      'Electrofusion / PEG-mediated fusion of splenocytes with Sp2/0-Ag14 non-secreting myeloma cells',
      'Selective HAT (Hypoxanthine-Aminopterin-Thymidine) culture in 96-well microplates',
      'Primary high-throughput screening by indirect ELISA to detect antigen-specific antibodies',
      'Secondary counter-screening against structurally homologous proteins to eliminate cross-reactivity',
      'Functional validation in target application (Sandwich ELISA, Lateral Flow, or Western Blot)'
    ]
  },
  {
    phase: 'Phase 03',
    title: 'Single-Cell Subcloning & Master Banking',
    timeline: 'Weeks 10 – 12',
    deliverables: '2–5 stable monoclonal hybridoma clones, cryovials stored in liquid nitrogen, mycoplasma certificate',
    steps: [
      'Serial limiting dilution (2–3 rounds) to establish >99.9% clonal purity',
      'Antibody isotype identification (IgG1, IgG2a, IgG2b, IgM, kappa/lambda light chain)',
      'Subclone stability testing across minimum 30 cellular doublings',
      'Liquid nitrogen cryopreservation: 3 vials per clone deposited into master working cell bank',
      'Comprehensive PCR-based mycoplasma contamination screening'
    ]
  },
  {
    phase: 'Phase 04',
    title: 'Pilot In-Vitro Production & Protein A/G Purification',
    timeline: 'Weeks 13 – 15',
    deliverables: '2 to 10 mg purified mAb, SDS-PAGE purity report (>95%), and final project technical dossier',
    steps: [
      'In-vitro suspension culture in serum-free / low-IgG media (roller bottles or bioreactors)',
      'Supernatant clarification and Protein A or Protein G affinity chromatography',
      'Ultrafiltration buffer exchange into sterile 1x PBS (pH 7.4, 0.05% ProClin300 / Azide-free)',
      'Protein quantification via UV A280 (extinction coefficient) and BCA colorimetric assay',
      'Quality testing: Reducing & Non-Reducing SDS-PAGE purity (>95%), Endotoxin testing (<1 EU/mg)'
    ]
  }
];

const COMPARISONS = [
  {
    feature: 'Intellectual Property & Clone Ownership',
    smd: '100% Client Ownership (Zero reach-through royalties, full commercial freedom)',
    others: 'Often retain partial rights or demand licensing fees for commercial diagnostic use',
  },
  {
    feature: 'Serum Titer Milestone Guarantee',
    smd: 'Guaranteed ELISA titer >= 1:128,000 before proceeding to fusion stage',
    others: 'Proceed blindly to fusion regardless of immune response quality',
  },
  {
    feature: 'IVD Matched Pair Screening Capability',
    smd: 'Simultaneous pairing matrix on Lateral Flow strips and 96-well Sandwich ELISA plates',
    others: 'Only perform standard indirect ELISA, leaving pair optimization to the client',
  },
  {
    feature: 'Facility & Cold-Chain Logistics',
    smd: 'Bangalore Cleanroom Lab & 24–48h dry ice express shipping across India',
    others: 'Overseas shipments vulnerable to customs holds, dry ice sublimation, and degradation',
  },
  {
    feature: 'Technical Consultation & Customization',
    smd: 'Direct one-on-one scientific milestone review meetings with project immunologists',
    others: 'Impersonal ticketing systems with standard non-negotiable protocols',
  },
];

export default function CustomMonoclonalServicePage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-white py-16 sm:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="flex items-center space-x-2 text-xs text-slate-400 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-white transition-colors">Services</Link>
            <span>/</span>
            <span className="text-orange-400">Custom Monoclonal Antibody</span>
          </div>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-semibold mb-6">
              <i className="fa-solid fa-flask-vial"></i>
              <span>Milestone-Based Hybridoma Development &bull; 100% Client IP</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-6 leading-tight">
              Custom Monoclonal Antibody <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-yellow-400">
                Development &amp; Scale-Up Services
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8">
              From antigen design and mouse immunization to high-throughput hybridoma screening and bioreactor scale-up. Engineered specifically for IVD rapid test manufacturers, high-sensitivity ELISA developers, and biopharma researchers.
            </p>

            <div className="flex flex-wrap gap-4 items-center">
              <a 
                href="#rfq-section"
                className="px-6 py-3.5 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-bold text-sm shadow-lg shadow-orange-600/30 transition-all flex items-center gap-2"
              >
                <span>Request Project Proposal</span>
                <i className="fa-solid fa-arrow-down text-xs"></i>
              </a>
              <a 
                href="https://wa.me/919555422455?text=Hello%20SMD%20Medicare,%20we%20are%20interested%20in%20Custom%20Monoclonal%20Antibody%20Development%20service.%20Please%20connect%20us%20with%20your%20technical%20team."
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700 text-white font-semibold text-sm transition-all flex items-center gap-2"
              >
                <i className="fab fa-whatsapp text-emerald-400"></i>
                <span>Speak with Technical Lead</span>
              </a>
            </div>
          </div>

          {/* Quick Metrics Banner */}
          <div className="mt-14 pt-8 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-orange-400">4 Phases</div>
              <div className="text-xs text-slate-400 mt-1">Milestone payment structure</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-white">&ge; 1:128,000</div>
              <div className="text-xs text-slate-400 mt-1">Guaranteed ELISA serum titer</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-orange-400">2 – 5 Clones</div>
              <div className="text-xs text-slate-400 mt-1">Stable single-cell subclones</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-white">100% IP</div>
              <div className="text-xs text-slate-400 mt-1">Full commercial ownership &amp; transfer</div>
            </div>
          </div>

        </div>
      </section>

      {/* Main Content Area */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* Main 2 Columns */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Overview Section */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <i className="fa-solid fa-microscope text-orange-600"></i>
                Precision Monoclonal Antibody Development
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                SMD Life Sciences offers high-affinity murine monoclonal antibody development designed from the ground up for diagnostic and therapeutic diagnostic applications. Whether you require antibodies for a novel infectious biomarker, a steroid hormone, or a critical cardiac protein, our hybridoma platform delivers stable, high-affinity clones with validated sensitivity and lot-to-lot reproducibility.
              </p>
              <div className="grid sm:grid-cols-2 gap-4 text-xs mt-6">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="font-bold text-slate-900 mb-1 flex items-center gap-1.5">
                    <i className="fa-solid fa-check-circle text-emerald-600"></i>
                    Diagnostic Assays (IVD)
                  </div>
                  <p className="text-slate-600">
                    High analytical sensitivity and stability across diverse sample matrices (whole blood, serum, plasma, urine).
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="font-bold text-slate-900 mb-1 flex items-center gap-1.5">
                    <i className="fa-solid fa-check-circle text-emerald-600"></i>
                    Matched Pair Screening
                  </div>
                  <p className="text-slate-600">
                    Simultaneous validation of capture and detection antibody pairs on colloidal gold rapid test strips and ELISA plates.
                  </p>
                </div>
              </div>
            </div>

            {/* 4-Phase Milestone Workflow */}
            <div>
              <div className="mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-orange-600">Structured Development</span>
                <h2 className="text-2xl font-bold text-slate-900 mt-1">
                  4-Phase Milestone Development Architecture
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  You only pay for milestones as deliverables are verified and approved by your scientific team.
                </p>
              </div>

              <div className="space-y-6">
                {PHASES.map((phase) => (
                  <div key={phase.phase} className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 shadow-sm transition-all hover:border-slate-300">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-4 pb-3 border-b border-slate-100">
                      <div className="flex items-center gap-3">
                        <span className="px-2.5 py-1 rounded-md bg-orange-100 text-orange-800 text-xs font-bold">
                          {phase.phase}
                        </span>
                        <h3 className="text-lg font-bold text-slate-900">
                          {phase.title}
                        </h3>
                      </div>
                      <span className="text-xs font-medium text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                        ⏱️ {phase.timeline}
                      </span>
                    </div>

                    <div className="space-y-2 mb-5">
                      {phase.steps.map((step, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                          <i className="fa-solid fa-circle-check text-emerald-500 mt-0.5 shrink-0"></i>
                          <span>{step}</span>
                        </div>
                      ))}
                    </div>

                    <div className="bg-orange-50/70 border border-orange-200/60 rounded-xl p-3.5 text-xs">
                      <span className="font-bold text-orange-950 block mb-0.5">📦 Phase Deliverables:</span>
                      <span className="text-orange-900">{phase.deliverables}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Matched Pair Screening Focus */}
            <div className="bg-gradient-to-br from-indigo-950 to-slate-900 text-white rounded-2xl p-6 sm:p-8 shadow-md">
              <span className="text-xs font-bold uppercase tracking-wider text-orange-400 block mb-2">
                Specialized IVD Capability
              </span>
              <h2 className="text-xl sm:text-2xl font-bold mb-3">
                Matched Antibody Pair Development for Rapid Tests &amp; ELISA
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                Unlike academic hybridoma services that deliver antibodies binding random epitopes, we evaluate clones in matrix pairs directly on your chosen detection platform. We identify non-competing epitope pairs where one antibody acts as the solid-phase capture agent (membrane coat) and the second acts as the reporter conjugate (colloidal gold, latex, or fluorescent nanoparticles).
              </p>

              <div className="grid sm:grid-cols-3 gap-4 text-xs">
                <div className="p-3.5 bg-white/10 rounded-xl border border-white/10">
                  <div className="font-bold text-amber-300 mb-1">Zero Epitope Overlap</div>
                  <p className="text-slate-300">Rigorous competitive cross-blocking assay confirms both antibodies bind simultaneously.</p>
                </div>
                <div className="p-3.5 bg-white/10 rounded-xl border border-white/10">
                  <div className="font-bold text-amber-300 mb-1">Colloidal Gold Stability</div>
                  <p className="text-slate-300">Screening for high conjugation stability at 40nm gold pH 8.0–9.0 without passive precipitation.</p>
                </div>
                <div className="p-3.5 bg-white/10 rounded-xl border border-white/10">
                  <div className="font-bold text-amber-300 mb-1">Serum Matrix Robustness</div>
                  <p className="text-slate-300">Elimination of heterophilic antibody interference and human anti-mouse antibody (HAMA) cross-binding.</p>
                </div>
              </div>
            </div>

            {/* Comparison Table */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
              <h2 className="text-xl font-bold text-slate-900 mb-2">
                Why Choose SMD Life Sciences for Custom mAbs?
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mb-6">
                Compare our domestic Bangalore facility advantages against overseas vendors and academic labs.
              </p>

              <div className="overflow-x-auto">
                <table className="w-full text-xs text-left">
                  <thead>
                    <tr className="border-b border-slate-200 bg-slate-50 text-slate-700">
                      <th className="py-3 px-4 font-bold">Evaluation Parameter</th>
                      <th className="py-3 px-4 font-bold text-orange-700 bg-orange-50/60">SMD Life Sciences</th>
                      <th className="py-3 px-4 font-bold text-slate-500">Overseas / Traditional Vendors</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {COMPARISONS.map((row, idx) => (
                      <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                        <td className="py-3 px-4 font-semibold text-slate-800">{row.feature}</td>
                        <td className="py-3 px-4 font-medium text-emerald-700 bg-orange-50/30">{row.smd}</td>
                        <td className="py-3 px-4 text-slate-500">{row.others}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Technical FAQ Accordion */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
              <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <i className="fa-solid fa-circle-question text-orange-600"></i>
                Frequently Asked Technical Questions
              </h2>
              
              <div className="space-y-3">
                <details className="group bg-slate-50 rounded-xl border border-slate-200 p-4" open>
                  <summary className="flex cursor-pointer items-center justify-between font-bold text-slate-900 text-xs sm:text-sm">
                    <span>What is the typical turnaround time for custom monoclonal antibody development?</span>
                    <i className="fa-solid fa-chevron-down text-slate-400 group-open:rotate-180 transition-transform"></i>
                  </summary>
                  <p className="mt-2 text-xs text-slate-600 leading-relaxed pt-2 border-t border-slate-200">
                    The complete 4-phase hybridoma monoclonal antibody development protocol typically takes 12 to 16 weeks. Fast-track express immunization protocols can yield primary fusion candidates in as early as 9 to 10 weeks.
                  </p>
                </details>

                <details className="group bg-slate-50 rounded-xl border border-slate-200 p-4">
                  <summary className="flex cursor-pointer items-center justify-between font-bold text-slate-900 text-xs sm:text-sm">
                    <span>Who owns the intellectual property (IP) and hybridoma clones?</span>
                    <i className="fa-solid fa-chevron-down text-slate-400 group-open:rotate-180 transition-transform"></i>
                  </summary>
                  <p className="mt-2 text-xs text-slate-600 leading-relaxed pt-2 border-t border-slate-200">
                    100% of the intellectual property, parental hybridoma cell lines, sequence data, and generated antibodies belong exclusively to the client. SMD Life Sciences operates on a fee-for-service model with zero reach-through royalties.
                  </p>
                </details>

                <details className="group bg-slate-50 rounded-xl border border-slate-200 p-4">
                  <summary className="flex cursor-pointer items-center justify-between font-bold text-slate-900 text-xs sm:text-sm">
                    <span>Can you develop matched antibody pairs for lateral flow rapid tests and sandwich ELISA?</span>
                    <i className="fa-solid fa-chevron-down text-slate-400 group-open:rotate-180 transition-transform"></i>
                  </summary>
                  <p className="mt-2 text-xs text-slate-600 leading-relaxed pt-2 border-t border-slate-200">
                    Yes. We specialize in matched antibody pair development specifically designed for IVD assay platforms. Clones are cross-screened simultaneously as capture antibodies (solid phase) and detection antibodies (colloidal gold/HRP/fluorescent conjugate) to ensure zero epitope competition and high analytical sensitivity.
                  </p>
                </details>

                <details className="group bg-slate-50 rounded-xl border border-slate-200 p-4">
                  <summary className="flex cursor-pointer items-center justify-between font-bold text-slate-900 text-xs sm:text-sm">
                    <span>What happens if the mouse serum titer is insufficient at Phase 1?</span>
                    <i className="fa-solid fa-chevron-down text-slate-400 group-open:rotate-180 transition-transform"></i>
                  </summary>
                  <p className="mt-2 text-xs text-slate-600 leading-relaxed pt-2 border-t border-slate-200">
                    We guarantee an ELISA titer of at least 1:128,000 against the target antigen before proceeding to cell fusion. If the titer does not meet benchmark criteria, booster regimens are extended or the project is halted with zero financial liability for subsequent unperformed phases.
                  </p>
                </details>
              </div>
            </div>

          </div>

          {/* Sidebar / Proposal Form Column */}
          <div className="space-y-6" id="rfq-section">
            
            {/* Embedded RFQ Form */}
            <CustomServiceRFQForm />

            {/* Bangalore Facility & Quick Contact Card */}
            <div className="bg-slate-900 text-white rounded-3xl p-6 border border-slate-800 shadow-md">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-orange-600/20 text-orange-400 flex items-center justify-center text-lg font-bold">
                  📍
                </div>
                <div>
                  <h4 className="font-bold text-sm text-white">Bangalore R&amp;D Facility</h4>
                  <p className="text-xs text-slate-400">Electronic City Phase 1, Bangalore</p>
                </div>
              </div>

              <div className="space-y-3 text-xs text-slate-300 pt-3 border-t border-slate-800">
                <div className="flex items-center gap-2">
                  <i className="fa-solid fa-phone text-orange-400"></i>
                  <span>Direct Desk: +91 95554 22455</span>
                </div>
                <div className="flex items-center gap-2">
                  <i className="fa-solid fa-envelope text-orange-400"></i>
                  <span>Email: info@smdmedicare.in</span>
                </div>
                <div className="flex items-center gap-2">
                  <i className="fa-solid fa-shield-halved text-emerald-400"></i>
                  <span>Mutual NDA executed prior to sequence sharing</span>
                </div>
              </div>
            </div>

            {/* Related Service Links */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
              <h4 className="font-bold text-xs uppercase tracking-wider text-slate-500 mb-3">
                Other Custom Biotech Capabilities
              </h4>
              <div className="space-y-2 text-xs">
                <Link 
                  href="/services/custom-polyclonal-antibody-production" 
                  className="block p-3 rounded-xl bg-slate-50 hover:bg-orange-50 hover:text-orange-700 transition-colors font-medium text-slate-800 border border-slate-200/60"
                >
                  &bull; Custom Polyclonal Antibody Production (Rabbit/Mouse) &rarr;
                </Link>
                <Link 
                  href="/diagnostic-cdmo" 
                  className="block p-3 rounded-xl bg-slate-50 hover:bg-orange-50 hover:text-orange-700 transition-colors font-medium text-slate-800 border border-slate-200/60"
                >
                  &bull; Diagnostic Lateral Flow CDMO &amp; Assembly &rarr;
                </Link>
                <Link 
                  href="/recombinant-antigens" 
                  className="block p-3 rounded-xl bg-slate-50 hover:bg-orange-50 hover:text-orange-700 transition-colors font-medium text-slate-800 border border-slate-200/60"
                >
                  &bull; Custom Recombinant Antigen Expression &rarr;
                </Link>
                <Link 
                  href="/products" 
                  className="block p-3 rounded-xl bg-slate-50 hover:bg-orange-50 hover:text-orange-700 transition-colors font-medium text-slate-800 border border-slate-200/60"
                >
                  &bull; Browse 70+ Ready In-Stock IVD Reagents &rarr;
                </Link>
              </div>
            </div>

          </div>

        </div>
      </section>
    </div>
  );
}
