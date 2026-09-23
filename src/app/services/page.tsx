import { Metadata } from 'next';
import Link from 'next/link';
import CustomServiceRFQForm from '@/components/CustomServiceRFQForm';

export const metadata: Metadata = {
  title: 'Custom Monoclonal Antibody Development & Protein Expression India | SMD Life Sciences',
  description: 'Specialized contract research & CDMO for IVD manufacturers. 4-Phase custom hybridoma monoclonal antibody development, recombinant protein expression, and lateral flow conjugation from Bangalore.',
  keywords: [
    'custom monoclonal antibody development service india',
    'hybridoma development service india',
    'recombinant protein expression services india',
    'colloidal gold conjugation service',
    'matched antibody pair screening',
    'IVD CDMO contract manufacturing India'
  ],
  alternates: {
    canonical: 'https://lifesciences.smdmedicare.in/services',
  },
  openGraph: {
    title: 'Custom Monoclonal Antibody Development & Protein Expression | SMD Life Sciences',
    description: 'Milestone-based custom hybridoma development, recombinant protein expression, and assay optimization for IVD rapid test manufacturers.',
    url: 'https://lifesciences.smdmedicare.in/services',
    siteName: 'SMD Life Sciences',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Custom Monoclonal Antibody Development & Protein Expression India | SMD Life Sciences',
    description: 'Specialized contract research & CDMO for IVD manufacturers. 4-Phase custom hybridoma development, protein expression, and assay optimization.',
    images: ['https://lifesciences.smdmedicare.in/icon-512.png'],
  },
};

const servicesSchemaGraph = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': 'https://lifesciences.smdmedicare.in/services#service',
      name: 'IVD Diagnostic CDMO & Custom Reagent Development',
      serviceType: 'Contract Development and Manufacturing (CDMO)',
      provider: {
        '@id': 'https://lifesciences.smdmedicare.in/#organization',
      },
      description: 'Specialized contract research & CDMO for IVD manufacturers. 4-Phase custom hybridoma monoclonal antibody development, recombinant protein expression, and lateral flow conjugation from Bangalore.',
      areaServed: ['IN', 'US', 'GB', 'AE', 'DE', 'FR', 'JP'],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Biotechnology & Diagnostic CDMO Services',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Custom Hybridoma Monoclonal Antibody Development',
              description: '4-Phase milestone-based murine hybridoma generation with ELISA, Western Blot, and clinical serum screening.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Recombinant Protein & Antigen Expression',
              description: 'Codon-optimized gene synthesis, prokaryotic and eukaryotic protein expression, and chromatography purification.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Matched Antibody Pair Screening & Validation',
              description: 'Sandwich ELISA and lateral flow matched pair screening to guarantee zero cross-reactivity and high analytical sensitivity.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Colloidal Gold & Fluorescent Conjugation',
              description: 'Custom nanoparticle conjugation for lateral flow rapid diagnostic test strips and cassettes.',
            },
          },
        ],
      },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://lifesciences.smdmedicare.in/services#breadcrumbs',
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
          name: 'Custom Biotech Services & CDMO',
          item: 'https://lifesciences.smdmedicare.in/services',
        },
      ],
    },
  ],
};

export default function BiotechServicesPage() {
  return (
    <div className="bg-slate-50 min-h-screen text-slate-900 selection:bg-orange-500 selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchemaGraph) }}
      />
      {/* Breadcrumb Header */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between text-xs">
          <div className="flex items-center space-x-2 text-slate-500 font-medium">
            <Link href="/" className="hover:text-blue-600 transition-colors flex items-center gap-1.5">
              <i className="fas fa-home text-slate-400 text-[11px]"></i> Home
            </Link>
            <span className="text-slate-300">/</span>
            <span className="text-slate-900 font-bold">Custom Biotech Services &amp; CDMO</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-orange-700 bg-orange-50 border border-orange-200 px-2.5 py-0.5 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse"></span>
              Bangalore R&amp;D Facility
            </span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-white py-16 sm:py-20 overflow-hidden">
        {/* Ambient Glows */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-orange-300 text-xs font-bold tracking-wide uppercase mb-6 shadow-sm">
              <i className="fas fa-flask text-orange-400"></i>
              Contract Research &amp; CDMO Solutions
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15] mb-5">
              Custom Antibody Development &amp;{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-teal-300">
                Recombinant Expression
              </span>
            </h1>
            
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8 font-normal">
              Specialized bioprocess engineering for IVD test manufacturers and diagnostic assembly plants. Milestone-based custom hybridoma monoclonal antibody generation, high-yield ÄKTA FPLC protein purification, and matched pairing optimized for lateral flow membranes.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a 
                href="#rfq-form"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white font-bold text-sm shadow-[0_10px_25px_rgba(234,88,12,0.35)] hover:shadow-[0_12px_30px_rgba(234,88,12,0.45)] hover:-translate-y-0.5 transition-all gap-2.5"
              >
                <i className="fas fa-file-signature text-sm"></i>
                Request Project Consultation
              </a>
              <a 
                href="https://wa.me/919555422455?text=Hello%20SMD%20Medicare,%20inquiry%20regarding%20Custom%20Antibody%20/%20Biotech%20Services."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-sm font-semibold text-sm transition-all gap-2.5 hover:-translate-y-0.5"
              >
                <i className="fab fa-whatsapp text-emerald-400 text-base"></i>
                WhatsApp Technical Desk
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Value Proposition Bar */}
      <section className="bg-white border-b border-slate-200 py-6 relative z-20 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-3 rounded-xl border-r border-slate-100 last:border-0">
              <div className="flex items-center justify-center gap-2 mb-1">
                <i className="fas fa-hand-holding-usd text-teal-600 text-base"></i>
                <span className="font-bold text-slate-900 text-sm">Milestone-Based Billing</span>
              </div>
              <div className="text-slate-500 text-xs font-medium">Pay as deliverables pass testing</div>
            </div>

            <div className="p-3 rounded-xl border-r border-slate-100 last:border-0">
              <div className="flex items-center justify-center gap-2 mb-1">
                <i className="fas fa-file-contract text-blue-600 text-base"></i>
                <span className="font-bold text-slate-900 text-sm">100% Client IP Ownership</span>
              </div>
              <div className="text-slate-500 text-xs font-medium">Exclusive clone rights transferred</div>
            </div>

            <div className="p-3 rounded-xl border-r border-slate-100 last:border-0">
              <div className="flex items-center justify-center gap-2 mb-1">
                <i className="fas fa-vial-circle-check text-emerald-600 text-base"></i>
                <span className="font-bold text-slate-900 text-sm">ELISA &amp; LFA Validated</span>
              </div>
              <div className="text-slate-500 text-xs font-medium">Tested on actual test membranes</div>
            </div>

            <div className="p-3 rounded-xl">
              <div className="flex items-center justify-center gap-2 mb-1">
                <i className="fas fa-microscope text-orange-600 text-base"></i>
                <span className="font-bold text-slate-900 text-sm">Bangalore Bio-Cluster</span>
              </div>
              <div className="text-slate-500 text-xs font-medium">Pentavalent Bio Sciences R&amp;D</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Service Lines */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        
        {/* Service 1: Custom Monoclonal Antibodies */}
        <div className="bg-white rounded-3xl border border-slate-200/90 p-8 sm:p-10 shadow-lg shadow-slate-200/50 relative overflow-hidden transition-all hover:shadow-xl">
          {/* Top Gradient Accent */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600"></div>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider mb-2">
                <i className="fas fa-dna text-xs"></i>
                Service Line 01 • High-Affinity Hybridoma Discovery
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Custom Monoclonal Antibody (mAb) Discovery Pipeline
              </h2>
            </div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-100 text-slate-700 text-xs font-semibold self-start md:self-auto">
              <i className="fas fa-clock text-blue-600"></i> Turnaround: 14–16 Weeks
            </span>
          </div>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-8 max-w-4xl">
            Traditional hybridoma engineering tailored specifically for diagnostic applications. Unlike academic antibodies that only work in Western Blots, our clones are screened to bind robustly on nitrocellulose lateral flow membranes and in high-stringency chemiluminescent (CLIA) and ELISA assays.
          </p>

          {/* Stepper Pipeline */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {/* Phase 1 */}
            <div className="bg-gradient-to-br from-blue-50/60 to-white border border-blue-200/80 p-5 rounded-2xl relative shadow-sm hover:border-blue-300 transition-all">
              <div className="flex items-center justify-between mb-3">
                <span className="w-8 h-8 rounded-full bg-blue-600 text-white font-extrabold text-xs flex items-center justify-center shadow-sm">
                  01
                </span>
                <span className="text-[10px] font-mono font-bold text-blue-700 bg-blue-100/80 px-2 py-0.5 rounded-full">
                  Weeks 1–6
                </span>
              </div>
              <h3 className="font-bold text-slate-900 text-sm mb-1.5">Target Immunization</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                BALB/c mice cohort immunized with optimized adjuvant formulations. Serum titer kinetics verified via indirect ELISA.
              </p>
              <div className="mt-3 pt-3 border-t border-blue-100/80 flex items-center gap-1 text-[11px] font-semibold text-blue-800">
                <i className="fas fa-check-circle text-blue-600 text-[10px]"></i> Titer &gt; 1:100,000 Gate
              </div>
            </div>

            {/* Phase 2 */}
            <div className="bg-gradient-to-br from-indigo-50/60 to-white border border-indigo-200/80 p-5 rounded-2xl relative shadow-sm hover:border-indigo-300 transition-all">
              <div className="flex items-center justify-between mb-3">
                <span className="w-8 h-8 rounded-full bg-indigo-600 text-white font-extrabold text-xs flex items-center justify-center shadow-sm">
                  02
                </span>
                <span className="text-[10px] font-mono font-bold text-indigo-700 bg-indigo-100/80 px-2 py-0.5 rounded-full">
                  Weeks 7–10
                </span>
              </div>
              <h3 className="font-bold text-slate-900 text-sm mb-1.5">Fusion &amp; Subcloning</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                PEG-mediated myeloma fusion with Sp2/0 cells, HAT selective media growth, and limiting dilution monoclonality assurance.
              </p>
              <div className="mt-3 pt-3 border-t border-indigo-100/80 flex items-center gap-1 text-[11px] font-semibold text-indigo-800">
                <i className="fas fa-check-circle text-indigo-600 text-[10px]"></i> &gt;99% Monoclonal Clones
              </div>
            </div>

            {/* Phase 3 */}
            <div className="bg-gradient-to-br from-purple-50/60 to-white border border-purple-200/80 p-5 rounded-2xl relative shadow-sm hover:border-purple-300 transition-all">
              <div className="flex items-center justify-between mb-3">
                <span className="w-8 h-8 rounded-full bg-purple-600 text-white font-extrabold text-xs flex items-center justify-center shadow-sm">
                  03
                </span>
                <span className="text-[10px] font-mono font-bold text-purple-700 bg-purple-100/80 px-2 py-0.5 rounded-full">
                  Weeks 11–13
                </span>
              </div>
              <h3 className="font-bold text-slate-900 text-sm mb-1.5">Epitope Pairing</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Cross-reactivity screening, sandwich capture-detection pairing, and immunoglobulin isotyping (IgG1, IgG2a, IgG2b).
              </p>
              <div className="mt-3 pt-3 border-t border-purple-100/80 flex items-center gap-1 text-[11px] font-semibold text-purple-800">
                <i className="fas fa-check-circle text-purple-600 text-[10px]"></i> Sandwich LFA Match
              </div>
            </div>

            {/* Phase 4 */}
            <div className="bg-gradient-to-br from-emerald-50/60 to-white border border-emerald-200/80 p-5 rounded-2xl relative shadow-sm hover:border-emerald-300 transition-all">
              <div className="flex items-center justify-between mb-3">
                <span className="w-8 h-8 rounded-full bg-emerald-600 text-white font-extrabold text-xs flex items-center justify-center shadow-sm">
                  04
                </span>
                <span className="text-[10px] font-mono font-bold text-emerald-700 bg-emerald-100/80 px-2 py-0.5 rounded-full">
                  Weeks 14+
                </span>
              </div>
              <h3 className="font-bold text-slate-900 text-sm mb-1.5">Bioreactor Scale-up</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Roller bottle high-density culture, Protein A/G affinity chromatography yielding &gt;95% SDS-PAGE purity in gram lots.
              </p>
              <div className="mt-3 pt-3 border-t border-emerald-100/80 flex items-center gap-1 text-[11px] font-semibold text-emerald-800">
                <i className="fas fa-check-circle text-emerald-600 text-[10px]"></i> &gt;95% Densitometric Purity
              </div>
            </div>
          </div>

          {/* Deliverables Banner */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                <i className="fas fa-certificate text-base"></i>
              </div>
              <div>
                <strong className="block text-slate-900 text-xs sm:text-sm font-bold">Standard Deliverable:</strong>
                <span className="text-slate-600 text-xs">Purified IgG mAb + 2 cryopreserved master hybridoma vials in liquid N2 with comprehensive batch CoA.</span>
              </div>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto shrink-0">
              <a 
                href="#rfq-form"
                className="w-full sm:w-auto px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition-colors text-center shadow-sm"
              >
                Inquire Hybridoma Project ➔
              </a>
            </div>
          </div>
        </div>

        {/* Service 2: Recombinant Protein Expression */}
        <div className="bg-white rounded-3xl border border-slate-200/90 p-8 sm:p-10 shadow-lg shadow-slate-200/50 relative overflow-hidden transition-all hover:shadow-xl">
          {/* Top Gradient Accent */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500"></div>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-2">
                <i className="fas fa-microchip text-xs"></i>
                Service Line 02 • High-Yield Expression &amp; Chromatography
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Recombinant Protein Expression &amp; FPLC Purification
              </h2>
            </div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-100 text-slate-700 text-xs font-semibold self-start md:self-auto">
              <i className="fas fa-shield-alt text-emerald-600"></i> &gt;95% HPLC Purity Guaranteed
            </span>
          </div>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-8 max-w-4xl">
            Gene-to-protein custom manufacturing in prokaryotic (<em>E. coli</em>) and eukaryotic (<em>Pichia pastoris</em>, CHO) expression platforms. Optimized specifically for diagnostic coating antigens, clinical calibrators, and control proteins.
          </p>

          <div className="grid sm:grid-cols-3 gap-6 mb-8">
            <div className="p-6 bg-gradient-to-br from-emerald-50/40 to-white rounded-2xl border border-emerald-100 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-4">
                <i className="fas fa-bacterium text-lg"></i>
              </div>
              <h3 className="font-bold text-slate-900 text-base mb-2">Expression Systems</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                Bacterial (<em>E. coli</em> BL21, Rosetta), Yeast (<em>Pichia</em>), and mammalian suspension systems for proper post-translational disulfide folding.
              </p>
              <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                Prokaryotic &amp; Eukaryotic Hosts
              </span>
            </div>

            <div className="p-6 bg-gradient-to-br from-teal-50/40 to-white rounded-2xl border border-teal-100 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center mb-4">
                <i className="fas fa-filter text-lg"></i>
              </div>
              <h3 className="font-bold text-slate-900 text-base mb-2">ÄKTA FPLC Chromatography</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                Affinity (His-tag, GST, Protein A/G), Ion-Exchange (IEX), and Size Exclusion (SEC) polishing to guarantee monomeric conformational integrity.
              </p>
              <span className="inline-flex items-center gap-1 text-[11px] font-bold text-teal-700 bg-teal-50 px-2 py-0.5 rounded">
                SEC Monomer Verification
              </span>
            </div>

            <div className="p-6 bg-gradient-to-br from-cyan-50/40 to-white rounded-2xl border border-cyan-100 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-cyan-100 text-cyan-700 flex items-center justify-center mb-4">
                <i className="fas fa-check-double text-lg"></i>
              </div>
              <h3 className="font-bold text-slate-900 text-base mb-2">Quality Assurance (QA)</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                Purity &gt;95% verified by SDS-PAGE densitometry and analytical RP-HPLC. Endotoxin levels verified &lt;0.1 EU/µg upon request.
              </p>
              <span className="inline-flex items-center gap-1 text-[11px] font-bold text-cyan-700 bg-cyan-50 px-2 py-0.5 rounded">
                Analytical RP-HPLC Profile
              </span>
            </div>
          </div>

          {/* Deliverables Banner */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                <i className="fas fa-file-invoice text-base"></i>
              </div>
              <div>
                <strong className="block text-slate-900 text-xs sm:text-sm font-bold">Standard Deliverable:</strong>
                <span className="text-slate-600 text-xs">Purified recombinant antigen in target buffer with full batch CoA and analytical HPLC chromatogram trace.</span>
              </div>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto shrink-0">
              <a 
                href="#rfq-form"
                className="w-full sm:w-auto px-5 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-colors text-center shadow-sm"
              >
                Inquire Protein Expression ➔
              </a>
            </div>
          </div>
        </div>

        {/* Service 3: Bioconjugation & Assay Optimization */}
        <div className="bg-white rounded-3xl border border-slate-200/90 p-8 sm:p-10 shadow-lg shadow-slate-200/50 relative overflow-hidden transition-all hover:shadow-xl">
          {/* Top Gradient Accent */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500"></div>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-orange-700 text-xs font-bold uppercase tracking-wider mb-2">
                <i className="fas fa-atom text-xs"></i>
                Service Line 03 • Lateral Flow Optimization
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Colloidal Gold Bioconjugation &amp; Strip Optimization
              </h2>
            </div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-100 text-slate-700 text-xs font-semibold self-start md:self-auto">
              <i className="fas fa-magic text-orange-600"></i> Zero Ghost Lines Guaranteed
            </span>
          </div>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-8 max-w-4xl">
            Stop suffering from ghost lines, high background noise, or aggregated gold particles. Our bioconjugation scientists determine the exact isoelectric point (pI), pH titration curve, and optimum blocking buffer formulation for your antibody.
          </p>

          <div className="grid sm:grid-cols-3 gap-6 mb-8">
            <div className="p-6 bg-gradient-to-br from-orange-50/40 to-white rounded-2xl border border-orange-100 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-700 flex items-center justify-center mb-4">
                <i className="fas fa-circle-dot text-lg"></i>
              </div>
              <h3 className="font-bold text-slate-900 text-base mb-2">Monodisperse Gold (40nm)</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                High-sphericity colloidal gold nanoparticles yielding intense, razor-sharp test and control line signals on nitrocellulose membranes.
              </p>
              <span className="inline-flex items-center gap-1 text-[11px] font-bold text-orange-700 bg-orange-50 px-2 py-0.5 rounded">
                Uniform 40nm Sphericity
              </span>
            </div>

            <div className="p-6 bg-gradient-to-br from-amber-50/40 to-white rounded-2xl border border-amber-100 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center mb-4">
                <i className="fas fa-vial text-lg"></i>
              </div>
              <h3 className="font-bold text-slate-900 text-base mb-2">Buffer &amp; Blocker Chemistry</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                Custom formulations using BSA, Casein, and non-ionic surfactants (Tween-20) to eliminate non-specific binding and false positives completely.
              </p>
              <span className="inline-flex items-center gap-1 text-[11px] font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded">
                Non-Specific Binding Suppressed
              </span>
            </div>

            <div className="p-6 bg-gradient-to-br from-yellow-50/40 to-white rounded-2xl border border-yellow-100 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-yellow-100 text-yellow-800 flex items-center justify-center mb-4">
                <i className="fas fa-cubes-stacked text-lg"></i>
              </div>
              <h3 className="font-bold text-slate-900 text-base mb-2">Enzyme &amp; Fluorophores</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                High-activity Horseradish Peroxidase (HRP) and Alkaline Phosphatase (AP) coupling for ELISA and automated chemiluminescent microplates.
              </p>
              <span className="inline-flex items-center gap-1 text-[11px] font-bold text-amber-800 bg-yellow-50 px-2 py-0.5 rounded">
                HRP &amp; AP Coupling
              </span>
            </div>
          </div>

          {/* Deliverables Banner */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-700 flex items-center justify-center shrink-0">
                <i className="fas fa-chart-line text-base"></i>
              </div>
              <div>
                <strong className="block text-slate-900 text-xs sm:text-sm font-bold">Standard Deliverable:</strong>
                <span className="text-slate-600 text-xs">Stable concentrated bioconjugate with spectrophotometric OD absorbance profile (Peak OD 520–540nm).</span>
              </div>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto shrink-0">
              <a 
                href="#rfq-form"
                className="w-full sm:w-auto px-5 py-2.5 rounded-lg bg-orange-600 hover:bg-orange-700 text-white text-xs font-bold transition-colors text-center shadow-sm"
              >
                Inquire Conjugation Service ➔
              </a>
            </div>
          </div>
        </div>

      </section>

      {/* Project Feasibility Consultation RFQ Section (Evaluation Terminal) */}
      <section id="rfq-form" className="relative bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white py-16 sm:py-20 overflow-hidden border-t border-slate-800">
        {/* Ambient Glows */}
        <div className="absolute top-1/3 left-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-500/20 border border-orange-400/30 text-orange-300 text-xs font-bold uppercase tracking-wider mb-3">
              <i className="fas fa-lock text-orange-400 text-xs"></i>
              Confidential Project Evaluation Terminal
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight mt-1 mb-3">
              Request a Custom Development Proposal
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Submit your target sequence or diagnostic assay requirements. Our Bangalore R&amp;D scientists evaluate feasibility and issue a formal milestone-based quote within 48 hours.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Scientific Pillars & Facility Info */}
            <div className="lg:col-span-4 space-y-4">
              
              <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-5 space-y-4">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 border-b border-white/10 pb-2">
                  Client Guarantees &amp; Security
                </h3>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-teal-500/20 text-teal-400 flex items-center justify-center shrink-0 mt-0.5">
                    <i className="fas fa-shield-halved text-sm"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-xs text-white">Mutual NDA Protection</h4>
                    <p className="text-[11px] text-slate-400 leading-relaxed">
                      We execute your standard Non-Disclosure Agreement before any sequence or target disclosure.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-orange-500/20 text-orange-400 flex items-center justify-center shrink-0 mt-0.5">
                    <i className="fas fa-stopwatch text-sm"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-xs text-white">48-Hour Technical Turnaround</h4>
                    <p className="text-[11px] text-slate-400 leading-relaxed">
                      Detailed feasibility assessment, epitope evaluation, and milestone timeline within 2 business days.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0 mt-0.5">
                    <i className="fas fa-coins text-sm"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-xs text-white">Risk-Free Milestone Billing</h4>
                    <p className="text-[11px] text-slate-400 leading-relaxed">
                      Payment tranches released strictly when each phase deliverable passes defined QA specifications.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-purple-500/20 text-purple-400 flex items-center justify-center shrink-0 mt-0.5">
                    <i className="fas fa-snowflake text-sm"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-xs text-white">Cold-Chain Sample Logistics</h4>
                    <p className="text-[11px] text-slate-400 leading-relaxed">
                      Validated dry ice and gel pack shipping across India, USA, Europe &amp; APAC.
                    </p>
                  </div>
                </div>
              </div>

              {/* Facility Card */}
              <div className="bg-gradient-to-br from-slate-900 to-indigo-950 border border-indigo-900/60 rounded-2xl p-5 text-xs text-slate-300">
                <div className="flex items-center gap-2 text-indigo-400 font-bold mb-2">
                  <i className="fas fa-building-columns"></i>
                  Bangalore R&amp;D Bio-Cluster
                </div>
                <p className="leading-relaxed text-[11px] text-slate-400 mb-3">
                  Pentavalent Bio Sciences R&amp;D Laboratory, GKVK Campus Road, Bangalore, Karnataka 560065. Supported by BIRAC &amp; C-CAMP.
                </p>
                <a 
                  href="https://wa.me/919555422455?text=Hello%20SMD%20Medicare,%20direct%20scientific%20inquiry." 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-400 hover:text-emerald-300 transition-colors"
                >
                  <i className="fab fa-whatsapp"></i> Chat with Head of R&amp;D Desk ➔
                </a>
              </div>

            </div>

            {/* Right Column: Custom RFQ Form */}
            <div className="lg:col-span-8">
              <CustomServiceRFQForm />
            </div>

          </div>

        </div>
      </section>
    </div>
  );
}
