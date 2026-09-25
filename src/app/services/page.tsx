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
    images: [
      {
        url: 'https://lifesciences.smdmedicare.in/images/biotech_microplate_assay.webp',
        width: 1200,
        height: 630,
        alt: 'Custom Monoclonal Antibody Development and ELISA Screening Lab',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Custom Monoclonal Antibody Development & Protein Expression India | SMD Life Sciences',
    description: 'Specialized contract research & CDMO for IVD manufacturers. 4-Phase custom hybridoma development, protein expression, and assay optimization.',
    images: ['https://lifesciences.smdmedicare.in/images/biotech_microplate_assay.webp'],
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
    <div className="bg-white min-h-screen text-slate-900 selection:bg-emerald-500 selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchemaGraph) }}
      />
      {/* Breadcrumb Header */}
      <div className="bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between text-xs">
          <div className="flex items-center space-x-2 text-slate-500 font-medium">
            <Link href="/" className="hover:text-[#064e3b] transition-colors flex items-center gap-1.5">
              <i className="fas fa-home text-slate-400 text-[11px]"></i> Home
            </Link>
            <span className="text-slate-300">/</span>
            <span className="text-slate-900 font-bold">Custom Biotech Services &amp; CDMO</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-orange-700 bg-orange-50 border border-orange-200/80 px-2.5 py-0.5 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse"></span>
              Bangalore R&amp;D Facility
            </span>
          </div>
        </div>
      </div>

      {/* Hero Section (Modern Swiss Biotech with Midnight Slate + Electric Orange) */}
      <section className="relative bg-gradient-to-b from-slate-50 via-white to-slate-50 text-slate-900 py-12 sm:py-16 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200/80 text-orange-700 text-xs font-bold uppercase tracking-wider mb-5">
                <i className="fas fa-flask text-orange-600"></i>
                Contract Research &amp; CDMO Solutions &bull; Bangalore
              </div>
              
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.15] mb-5">
                Custom Antibody Discovery &amp;{' '}
                <span className="text-orange-600 underline decoration-orange-400/50 decoration-4 underline-offset-4">
                  Recombinant Expression
                </span>
              </h1>
              
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-7 max-w-2xl">
                Specialized bioprocess engineering for IVD test kit manufacturers and diagnostic assembly plants. Milestone-based custom hybridoma monoclonal antibody generation, high-yield ÄKTA FPLC protein purification, and matched pairing optimized for lateral flow membranes.
              </p>

              <div className="flex flex-wrap items-center gap-3.5 mb-8">
                <a 
                  href="#rfq-form"
                  className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-sm shadow-md shadow-orange-950/20 transition-all gap-2"
                >
                  <i className="fas fa-file-signature text-xs"></i>
                  Request Project Consultation
                </a>
                <a 
                  href="https://wa.me/919555422455?text=Hello%20SMD%20Medicare,%20inquiry%20regarding%20Custom%20Antibody%20/%20Biotech%20Services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20b858] text-white font-bold text-sm transition-all gap-2 shadow-sm"
                >
                  <i className="fab fa-whatsapp text-white text-base"></i>
                  <span>WhatsApp Scientific Desk</span>
                </a>
              </div>

              {/* Trust Micro-Badges */}
              <div className="pt-6 border-t border-slate-200/80 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-600 font-medium">
                <span className="flex items-center gap-1.5"><i className="fas fa-shield-alt text-orange-600"></i> Strict Confidentiality (Mutual NDA)</span>
                <span className="flex items-center gap-1.5"><i className="fas fa-clock text-orange-600"></i> Milestone-Gated Deliverables</span>
                <span className="flex items-center gap-1.5"><i className="fas fa-check-circle text-orange-600"></i> 100% Client IP Ownership</span>
              </div>
            </div>

            {/* Right Side Visual Showcase */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200/80 group bg-slate-100">
                <img 
                  src="/images/biotech_cleanroom_hero.webp" 
                  alt="SMD Life Sciences Custom CDMO Lab" 
                  className="w-full h-[360px] sm:h-[400px] object-cover group-hover:scale-102 transition-transform duration-500"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-slate-900/95 backdrop-blur-md p-4 rounded-xl shadow-lg border border-slate-700 text-white">
                  <div className="text-xs font-bold text-orange-400 flex items-center justify-between mb-1">
                    <span>CDMO Phase Validation Pipeline</span>
                    <span className="text-white font-mono bg-orange-600 px-2 py-0.5 rounded text-[10px]">Phase 1 &rarr; 4</span>
                  </div>
                  <p className="text-[11px] text-slate-300">
                    From antigen synthesis &amp; mouse immunization to roller bottle bioreactor scale-up and clinical sera cross-matching.
                  </p>
                </div>
              </div>
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
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#064e3b]"></div>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/80 text-[#064e3b] text-xs font-bold uppercase tracking-wider mb-2">
                <i className="fas fa-dna text-[#059669]"></i>
                Service Line 01 &bull; High-Affinity Hybridoma Discovery
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Custom Monoclonal Antibody (mAb) Discovery Pipeline
              </h2>
            </div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-emerald-50 text-[#064e3b] border border-emerald-200/60 text-xs font-semibold self-start md:self-auto">
              <i className="fas fa-clock text-emerald-600"></i> Turnaround: 14–16 Weeks
            </span>
          </div>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-8 max-w-4xl">
            Traditional hybridoma engineering tailored specifically for diagnostic applications. Unlike academic antibodies that only work in Western Blots, our clones are screened to bind robustly on nitrocellulose lateral flow membranes and in high-stringency chemiluminescent (CLIA) and ELISA assays.
          </p>

          {/* Visual Showcase for Hybridoma Screening */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8 items-center bg-slate-50 p-5 sm:p-6 rounded-2xl border border-slate-200">
            <div className="lg:col-span-5 rounded-xl overflow-hidden shadow-sm">
              <img
                src="/images/biotech_microplate_assay.webp"
                alt="Scientist conducting hybridoma microplate ELISA screening in biosafety cabinet"
                className="w-full h-44 sm:h-48 object-cover"
              />
            </div>
            <div className="lg:col-span-7 space-y-2">
              <span className="text-[11px] font-bold text-[#064e3b] uppercase tracking-wider block">
                Screening Technology &bull; BSL-2 Biosafety Suites
              </span>
              <h4 className="text-base font-bold text-slate-900">
                96-Well Microplate Single-Cell Cloning &amp; Titer Screening
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Every fusion is screened directly against clinical patient sera to guarantee that positive clones distinguish between true target epitopes and background matrix interferences.
              </p>
            </div>
          </div>

          {/* Stepper Pipeline */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {/* Phase 1 */}
            <div className="bg-gradient-to-br from-emerald-50/40 to-white border border-emerald-200/80 p-5 rounded-2xl relative shadow-sm hover:border-emerald-300 transition-all">
              <div className="flex items-center justify-between mb-3">
                <span className="w-8 h-8 rounded-full bg-[#064e3b] text-white font-extrabold text-xs flex items-center justify-center shadow-sm">
                  01
                </span>
                <span className="text-[10px] font-mono font-bold text-[#064e3b] bg-emerald-50 border border-emerald-100 px-2 py-0.5 rounded-full">
                  Weeks 1–6
                </span>
              </div>
              <h3 className="font-bold text-slate-900 text-sm mb-1.5">Target Immunization</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                BALB/c mice cohort immunized with optimized adjuvant formulations. Serum titer kinetics verified via indirect ELISA.
              </p>
              <div className="mt-3 pt-3 border-t border-emerald-100 flex items-center gap-1 text-[11px] font-semibold text-[#064e3b]">
                <i className="fas fa-check-circle text-emerald-600 text-[10px]"></i> Titer &gt; 1:100,000 Gate
              </div>
            </div>

            {/* Phase 2 */}
            <div className="bg-gradient-to-br from-emerald-50/40 to-white border border-emerald-200/80 p-5 rounded-2xl relative shadow-sm hover:border-emerald-300 transition-all">
              <div className="flex items-center justify-between mb-3">
                <span className="w-8 h-8 rounded-full bg-emerald-600 text-white font-extrabold text-xs flex items-center justify-center shadow-sm">
                  02
                </span>
                <span className="text-[10px] font-mono font-bold text-emerald-800 bg-emerald-50 border border-emerald-100 px-2 py-0.5 rounded-full">
                  Weeks 7–10
                </span>
              </div>
              <h3 className="font-bold text-slate-900 text-sm mb-1.5">Fusion &amp; Subcloning</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                PEG-mediated myeloma fusion with Sp2/0 cells, HAT selective media growth, and limiting dilution monoclonality assurance.
              </p>
              <div className="mt-3 pt-3 border-t border-emerald-100 flex items-center gap-1 text-[11px] font-semibold text-[#064e3b]">
                <i className="fas fa-check-circle text-emerald-600 text-[10px]"></i> &gt;99% Monoclonal Clones
              </div>
            </div>

            {/* Phase 3 */}
            <div className="bg-gradient-to-br from-teal-50/40 to-white border border-teal-200/80 p-5 rounded-2xl relative shadow-sm hover:border-teal-300 transition-all">
              <div className="flex items-center justify-between mb-3">
                <span className="w-8 h-8 rounded-full bg-teal-700 text-white font-extrabold text-xs flex items-center justify-center shadow-sm">
                  03
                </span>
                <span className="text-[10px] font-mono font-bold text-teal-800 bg-teal-50 border border-teal-100 px-2 py-0.5 rounded-full">
                  Weeks 11–13
                </span>
              </div>
              <h3 className="font-bold text-slate-900 text-sm mb-1.5">Epitope Pairing</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Cross-reactivity screening, sandwich capture-detection pairing, and immunoglobulin isotyping (IgG1, IgG2a, IgG2b).
              </p>
              <div className="mt-3 pt-3 border-t border-teal-100 flex items-center gap-1 text-[11px] font-semibold text-teal-800">
                <i className="fas fa-check-circle text-teal-600 text-[10px]"></i> Sandwich LFA Match
              </div>
            </div>

            {/* Phase 4 */}
            <div className="bg-gradient-to-br from-slate-50 to-white border border-slate-200/80 p-5 rounded-2xl relative shadow-sm hover:border-slate-300 transition-all">
              <div className="flex items-center justify-between mb-3">
                <span className="w-8 h-8 rounded-full bg-slate-800 text-white font-extrabold text-xs flex items-center justify-center shadow-sm">
                  04
                </span>
                <span className="text-[10px] font-mono font-bold text-slate-800 bg-slate-100 px-2 py-0.5 rounded-full">
                  Weeks 14+
                </span>
              </div>
              <h3 className="font-bold text-slate-900 text-sm mb-1.5">Bioreactor Scale-up</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Roller bottle high-density culture, Protein A/G affinity chromatography yielding &gt;95% SDS-PAGE purity in gram lots.
              </p>
              <div className="mt-3 pt-3 border-t border-slate-100 flex items-center gap-1 text-[11px] font-semibold text-slate-800">
                <i className="fas fa-check-circle text-emerald-600 text-[10px]"></i> &gt;95% Densitometric Purity
              </div>
            </div>
          </div>

          {/* Deliverables Banner */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#064e3b] flex items-center justify-center shrink-0">
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
                className="w-full sm:w-auto px-5 py-2.5 rounded-lg bg-[#064e3b] hover:bg-[#043327] text-white text-xs font-bold transition-colors text-center shadow-sm"
              >
                Inquire Hybridoma Project ➔
              </a>
            </div>
          </div>
        </div>

        {/* Service 2: Recombinant Protein Expression */}
        <div className="bg-white rounded-3xl border border-slate-200/90 p-8 sm:p-10 shadow-lg shadow-slate-200/50 relative overflow-hidden transition-all hover:shadow-xl">
          {/* Top Gradient Accent */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#064e3b]"></div>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/80 text-[#064e3b] text-xs font-bold uppercase tracking-wider mb-2">
                <i className="fas fa-microchip text-[#059669]"></i>
                Service Line 02 &bull; High-Yield Expression &amp; Chromatography
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Recombinant Protein Expression &amp; FPLC Purification
              </h2>
            </div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-emerald-50 text-[#064e3b] border border-emerald-200/60 text-xs font-semibold self-start md:self-auto">
              <i className="fas fa-shield-alt text-emerald-600"></i> &gt;95% HPLC Purity Guaranteed
            </span>
          </div>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-8 max-w-4xl">
            Gene-to-protein custom manufacturing in prokaryotic (<em>E. coli</em>) and eukaryotic (<em>Pichia pastoris</em>, CHO) expression platforms. Optimized specifically for diagnostic coating antigens, clinical calibrators, and control proteins.
          </p>

          {/* Visual Showcase for Protein Expression & FPLC */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8 items-center bg-slate-50 p-5 sm:p-6 rounded-2xl border border-slate-200">
            <div className="lg:col-span-5 rounded-xl overflow-hidden shadow-sm">
              <img
                src="/images/biotech_chromatography.webp"
                alt="ÄKTA Avant FPLC Preparative Chromatography System"
                className="w-full h-44 sm:h-48 object-cover"
              />
            </div>
            <div className="lg:col-span-7 space-y-2">
              <span className="text-[11px] font-bold text-[#064e3b] uppercase tracking-wider block">
                Chromatography Purification &bull; ÄKTA Avant Pipeline
              </span>
              <h4 className="text-base font-bold text-slate-900">
                Multi-Stage Affinity &amp; Size-Exclusion Fractionation
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Automated multi-wavelength UV monitoring and fraction collection ensure that only peak monomeric antigens with native tertiary structure are harvested for commercial lot release.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 mb-8">
            <div className="p-6 bg-gradient-to-br from-emerald-50/40 to-white rounded-2xl border border-emerald-100 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-[#064e3b] flex items-center justify-center mb-4">
                <i className="fas fa-bacterium text-lg"></i>
              </div>
              <h3 className="font-bold text-slate-900 text-base mb-2">Expression Systems</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                Bacterial (<em>E. coli</em> BL21, Rosetta), Yeast (<em>Pichia</em>), and mammalian suspension systems for proper post-translational disulfide folding.
              </p>
              <span className="inline-flex items-center gap-1 text-[11px] font-bold text-[#064e3b] bg-emerald-50 px-2 py-0.5 rounded">
                Prokaryotic &amp; Eukaryotic Hosts
              </span>
            </div>

            <div className="p-6 bg-gradient-to-br from-emerald-50/40 to-white rounded-2xl border border-emerald-100 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-[#064e3b] flex items-center justify-center mb-4">
                <i className="fas fa-filter text-lg"></i>
              </div>
              <h3 className="font-bold text-slate-900 text-base mb-2">ÄKTA FPLC Chromatography</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                Affinity (His-tag, GST, Protein A/G), Ion-Exchange (IEX), and Size Exclusion (SEC) polishing to guarantee monomeric conformational integrity.
              </p>
              <span className="inline-flex items-center gap-1 text-[11px] font-bold text-[#064e3b] bg-emerald-50 px-2 py-0.5 rounded">
                SEC Monomer Verification
              </span>
            </div>

            <div className="p-6 bg-gradient-to-br from-emerald-50/40 to-white rounded-2xl border border-emerald-100 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-[#064e3b] flex items-center justify-center mb-4">
                <i className="fas fa-check-double text-lg"></i>
              </div>
              <h3 className="font-bold text-slate-900 text-base mb-2">Quality Assurance (QA)</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                Purity &gt;95% verified by SDS-PAGE densitometry and analytical RP-HPLC. Endotoxin levels verified &lt;0.1 EU/&mu;g upon request.
              </p>
              <span className="inline-flex items-center gap-1 text-[11px] font-bold text-[#064e3b] bg-emerald-50 px-2 py-0.5 rounded">
                Analytical RP-HPLC Profile
              </span>
            </div>
          </div>

          {/* Deliverables Banner */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#064e3b] flex items-center justify-center shrink-0">
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
                className="w-full sm:w-auto px-5 py-2.5 rounded-lg bg-[#064e3b] hover:bg-[#043327] text-white text-xs font-bold transition-colors text-center shadow-sm"
              >
                Inquire Protein Expression ➔
              </a>
            </div>
          </div>
        </div>

        {/* Service 3: Bioconjugation & Assay Optimization */}
        <div className="bg-white rounded-3xl border border-slate-200/90 p-8 sm:p-10 shadow-lg shadow-slate-200/50 relative overflow-hidden transition-all hover:shadow-xl">
          {/* Top Gradient Accent */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#064e3b]"></div>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/80 text-[#064e3b] text-xs font-bold uppercase tracking-wider mb-2">
                <i className="fas fa-atom text-[#059669]"></i>
                Service Line 03 &bull; Lateral Flow Optimization
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Colloidal Gold Bioconjugation &amp; Strip Optimization
              </h2>
            </div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-emerald-50 text-[#064e3b] border border-emerald-200/60 text-xs font-semibold self-start md:self-auto">
              <i className="fas fa-magic text-emerald-600"></i> Zero Ghost Lines Guaranteed
            </span>
          </div>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-8 max-w-4xl">
            Stop suffering from ghost lines, high background noise, or aggregated gold particles. Our bioconjugation scientists determine the exact isoelectric point (pI), pH titration curve, and optimum blocking buffer formulation for your antibody.
          </p>

          {/* Visual Showcase for Lateral Flow */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8 items-center bg-slate-50 p-5 sm:p-6 rounded-2xl border border-slate-200">
            <div className="lg:col-span-5 rounded-xl overflow-hidden shadow-sm">
              <img
                src="/images/biotech_lateral_flow.webp"
                alt="Lateral flow test cassette dispensing and colloidal gold conjugation validation"
                className="w-full h-44 sm:h-48 object-cover"
              />
            </div>
            <div className="lg:col-span-7 space-y-2">
              <span className="text-[11px] font-bold text-[#064e3b] uppercase tracking-wider block">
                Formulation &bull; Rapid Test Cassette Optimization
              </span>
              <h4 className="text-base font-bold text-slate-900">
                Membrane Flow-Rate &amp; Signal-to-Noise Ratio Calibration
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Overcome ghost lines and false positives with custom blocking buffer matrices, optimized antibody-to-gold ratios, and accelerated thermal stability validation (37°C / 45°C).
              </p>
            </div>
          </div>

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
