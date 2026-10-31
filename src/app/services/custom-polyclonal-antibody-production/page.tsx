import { Metadata } from 'next';
import Link from 'next/link';
import CustomServiceRFQForm from '@/components/CustomServiceRFQForm';

export const metadata: Metadata = {
  title: 'Custom Polyclonal Antibody Production Service India | SMD Life Sciences',
  description: 'High-titer custom polyclonal antibody production in rabbits and mice for diagnostic assay developers and research labs. Standard 70-day and express 45-day protocols, antigen-affinity purification, ELISA titer >= 1:128,000 guarantee.',
  keywords: [
    'custom polyclonal antibody production india',
    'rabbit polyclonal antibody production service',
    'polyclonal antibody manufacturer bangalore',
    'custom antibody purification service',
    'antigen affinity purified antibody',
    'lateral flow control line antibody',
    'goat anti mouse polyclonal antibody'
  ],
  alternates: {
    canonical: 'https://lifesciences.smdmedicare.in/services/custom-polyclonal-antibody-production',
  },
  openGraph: {
    title: 'Custom Polyclonal Antibody Production Service | SMD Life Sciences',
    description: 'Guaranteed ELISA titer (>= 1:128,000) rabbit and mouse polyclonal antibody production with protein A and antigen-affinity purification in Bangalore.',
    url: 'https://lifesciences.smdmedicare.in/services/custom-polyclonal-antibody-production',
    siteName: 'SMD Life Sciences',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: 'https://lifesciences.smdmedicare.in/images/biotech_chromatography.webp',
        width: 1200,
        height: 630,
        alt: 'Polyclonal Antibody Purification and Chromatography Desk',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Custom Polyclonal Antibody Production Service India | SMD Life Sciences',
    description: 'High-yield rabbit polyclonal production, peptide conjugation, and affinity chromatography in Bangalore.',
    images: ['https://lifesciences.smdmedicare.in/images/biotech_chromatography.webp'],
  },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': 'https://lifesciences.smdmedicare.in/services/custom-polyclonal-antibody-production#service',
      name: 'Custom Polyclonal Antibody Production Service',
      serviceType: 'Contract Research & Reagent Manufacturing (CRO/CDMO)',
      provider: {
        '@id': 'https://lifesciences.smdmedicare.in/#organization',
      },
      description: 'Custom rabbit and rodent polyclonal antibody generation, carrier protein conjugation (KLH/BSA), and antigen-affinity chromatography purification from Bangalore.',
      areaServed: ['IN', 'US', 'GB', 'AE', 'DE', 'FR', 'JP', 'SG'],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Polyclonal Antibody Packages',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Express 45-Day Rabbit Polyclonal Protocol',
              description: 'Accelerated 4-injection schedule with interim bleed titer check for rapid prototype assay screening.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Standard 70-Day Comprehensive Rabbit Protocol',
              description: 'Full affinity maturation protocol with 2 production bleeds + terminal bleed yielding 20-50 mL antiserum or 10-50 mg affinity-purified IgG.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Antigen-Affinity Chromatography Purification',
              description: 'High-specificity matrix purification using column immobilized antigen for zero cross-reactivity.',
            },
          },
        ],
      },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://lifesciences.smdmedicare.in/services/custom-polyclonal-antibody-production#breadcrumbs',
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
          name: 'Custom Polyclonal Antibody Production',
          item: 'https://lifesciences.smdmedicare.in/services/custom-polyclonal-antibody-production',
        },
      ],
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://lifesciences.smdmedicare.in/services/custom-polyclonal-antibody-production#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'When should I choose polyclonal antibodies over monoclonal antibodies?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Polyclonal antibodies recognize multiple epitopes on a single antigen, giving them superior avidity and higher signal amplification. They are ideal for lateral flow control lines (e.g. Goat anti-Mouse IgG), Sandwich ELISA capture, Western blotting, and when detecting targets with moderate genetic polymorphism.',
          },
        },
        {
          '@type': 'Question',
          name: 'What host species do you offer for custom polyclonal antibody generation?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'We primarily utilize New Zealand White (NZW) Rabbits due to their robust immune response and high yield (yielding 20–50 mL antiserum per animal). We also support mouse cohorts and goat/sheep production upon request.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the difference between Protein A purification and Antigen-Affinity purification?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Protein A/G purification isolates all IgG molecules from the serum (including non-specific baseline antibodies). Antigen-affinity purification couples your specific antigen to an agarose resin, ensuring only antibodies that specifically recognize your target are eluted. This eliminates non-specific background.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do you help with peptide design and KLH conjugation?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Our scientific team assists with antigenicity prediction, secondary structure hydrophobicity modeling, and cysteine-linker peptide design. We provide Sulfo-SMCC coupling to KLH (Keyhole Limpet Hemocyanin) or BSA carrier proteins.',
          },
        },
      ],
    },
  ],
};

const PROTOCOLS = [
  {
    name: 'Express 45-Day Rabbit Protocol',
    badge: 'Rapid Assay Prototyping',
    timeline: '45 Days',
    idealFor: 'Proof-of-concept lateral flow strip testing and fast screening of candidate targets.',
    injections: '4 Boosters (Days 0, 14, 21, 28)',
    deliverables: 'Pre-immune serum (2 mL), 15–25 mL high-titer antiserum, ELISA titer report (>= 1:64,000 to 1:128,000)'
  },
  {
    name: 'Standard 70-Day Comprehensive Protocol',
    badge: 'Industry Benchmark & Highest Yield',
    timeline: '70 Days',
    idealFor: 'Commercial IVD test manufacturing, high-sensitivity ELISA kits, and validated diagnostic control lines.',
    injections: '5 Boosters (Days 0, 14, 28, 42, 56)',
    deliverables: 'Pre-immune serum (5 mL), 2 production bleeds + terminal bleed (25–50 mL antiserum), or 10–50 mg affinity-purified IgG'
  }
];

const PURIFICATION_OPTIONS = [
  {
    title: 'Crude Clarified Antiserum',
    yieldDesc: '25 – 50 mL per rabbit',
    purity: 'Total Serum Fraction',
    description: 'Delipidated, sterile filtered (0.22 μm), preserved with 0.05% ProClin300 or sodium azide. Excellent for standard ELISA titrations and routine Western blot applications.',
    tag: 'Cost-Effective'
  },
  {
    title: 'Protein A / Protein G Affinity Purification',
    yieldDesc: '20 – 60 mg Total IgG',
    purity: '> 90% IgG by SDS-PAGE',
    description: 'Binds the Fc region of rabbit IgG molecules. Buffer exchanged into sterile 1x PBS (pH 7.4). Removes albumin and serum transferrin, leaving pure antibody immunoglobulin.',
    tag: 'Standard Diagnostic Grade'
  },
  {
    title: 'Antigen-Specific Affinity Purification',
    yieldDesc: '10 – 35 mg Monospecific IgG',
    purity: '> 95% Target-Specific IgG',
    description: 'Recombinant antigen or peptide conjugated to NHS-activated Sepharose column. Only antibodies recognizing your target are captured and acid-eluted with instant neutralization.',
    tag: 'Highest Specificity / Ultra-Low Background'
  }
];

export default function CustomPolyclonalServicePage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950 text-white py-16 sm:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="flex items-center space-x-2 text-xs text-slate-400 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-white transition-colors">Services</Link>
            <span>/</span>
            <span className="text-emerald-400">Custom Polyclonal Antibody</span>
          </div>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold mb-6">
              <i className="fa-solid fa-dna"></i>
              <span>Rabbit &amp; Rodent Host Protocols &bull; ELISA Titer &ge; 1:128,000</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-6 leading-tight">
              Custom Polyclonal Antibody <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
                Production &amp; Purification Services
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8">
              Reliable, high-affinity polyclonal antibodies for lateral flow control lines, ELISA capture/detection, and immunohistochemistry. Manufactured in Bangalore under rigorous animal welfare and quality assurance protocols.
            </p>

            <div className="flex flex-wrap gap-4 items-center">
              <a 
                href="#rfq-section"
                className="px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-lg shadow-emerald-600/30 transition-all flex items-center gap-2"
              >
                <span>Request Project Proposal</span>
                <i className="fa-solid fa-arrow-down text-xs"></i>
              </a>
              <a 
                href="https://wa.me/919555422455?text=Hello%20SMD%20Medicare,%20we%20are%20interested%20in%20Custom%20Polyclonal%20Antibody%20Production%20service.%20Please%20connect%20us%20with%20your%20technical%20team."
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
              <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400">45 – 70 Days</div>
              <div className="text-xs text-slate-400 mt-1">Express &amp; Standard protocols</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-white">&ge; 1:128,000</div>
              <div className="text-xs text-slate-400 mt-1">Guaranteed ELISA serum titer</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400">20 – 50 mL</div>
              <div className="text-xs text-slate-400 mt-1">High antiserum volume per rabbit</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-white">&gt; 95% Pure</div>
              <div className="text-xs text-slate-400 mt-1">Antigen-affinity chromatography</div>
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
                <i className="fa-solid fa-vial text-emerald-600"></i>
                High-Yield Polyclonal Antibody Generation
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                Polyclonal antibodies offer broad epitope coverage and robust signal strength, making them indispensable reagents for rapid diagnostic kit development. Whether you need Goat anti-Mouse IgG or Rabbit anti-Goat IgG for lateral flow Control Lines (C-Line), or antigen-affinity purified rabbit antibodies for ELISA capture, SMD Life Sciences delivers consistent, high-titer batches from our Bangalore research laboratory.
              </p>
              <div className="grid sm:grid-cols-3 gap-4 text-xs mt-6">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="font-bold text-slate-900 mb-1 flex items-center gap-1.5">
                    <i className="fa-solid fa-check text-emerald-600"></i>
                    Lateral Flow C-Line
                  </div>
                  <p className="text-slate-600">
                    High avidity for mouse or goat IgG, producing sharp, intense procedural control bands.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="font-bold text-slate-900 mb-1 flex items-center gap-1.5">
                    <i className="fa-solid fa-check text-emerald-600"></i>
                    Peptide Antigens
                  </div>
                  <p className="text-slate-600">
                    Turnkey peptide synthesis and KLH / BSA carrier conjugation for targeted epitope development.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="font-bold text-slate-900 mb-1 flex items-center gap-1.5">
                    <i className="fa-solid fa-check text-emerald-600"></i>
                    Affinity Purification
                  </div>
                  <p className="text-slate-600">
                    Target-specific chromatography to strip non-specific baseline immunoglobulins.
                  </p>
                </div>
              </div>
            </div>

            {/* Protocol Comparison */}
            <div>
              <div className="mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">Immunization Workflows</span>
                <h2 className="text-2xl font-bold text-slate-900 mt-1">
                  Choose Your Polyclonal Immunization Protocol
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  Select between fast-turnaround screening or deep affinity maturation based on your assay development timeline.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                {PROTOCOLS.map((proto) => (
                  <div key={proto.name} className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-md">
                          {proto.badge}
                        </span>
                        <span className="text-xs font-semibold text-slate-500">
                          ⏱️ {proto.timeline}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 mb-2">
                        {proto.name}
                      </h3>
                      <p className="text-xs text-slate-600 mb-4 leading-relaxed">
                        {proto.idealFor}
                      </p>
                      
                      <div className="space-y-2 mb-6 text-xs text-slate-700">
                        <div className="flex items-start gap-2">
                          <i className="fa-solid fa-syringe text-emerald-600 mt-0.5"></i>
                          <span><strong>Injections:</strong> {proto.injections}</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-slate-50 border border-slate-200 rounded-xl p-3.5 text-xs">
                      <span className="font-bold text-slate-900 block mb-0.5">📦 Expected Output:</span>
                      <span className="text-slate-600">{proto.deliverables}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Purification Modes */}
            <div>
              <div className="mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">Downstream Downstream Processing</span>
                <h2 className="text-2xl font-bold text-slate-900 mt-1">
                  Antibody Purification &amp; Quality Grades
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  Tailored purification tiers to match your specific assay budget and analytical sensitivity requirements.
                </p>
              </div>

              <div className="space-y-4">
                {PURIFICATION_OPTIONS.map((pur) => (
                  <div key={pur.title} className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <h3 className="text-base font-bold text-slate-900">
                        {pur.title}
                      </h3>
                      <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
                        {pur.tag}
                      </span>
                    </div>
                    
                    <div className="flex gap-4 text-xs text-slate-500 mb-3">
                      <span><strong>Yield:</strong> {pur.yieldDesc}</span>
                      <span>&bull;</span>
                      <span><strong>Purity:</strong> {pur.purity}</span>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      {pur.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical FAQ Accordion */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
              <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <i className="fa-solid fa-circle-question text-emerald-600"></i>
                Frequently Asked Technical Questions
              </h2>
              
              <div className="space-y-3">
                <details className="group bg-slate-50 rounded-xl border border-slate-200 p-4" open>
                  <summary className="flex cursor-pointer items-center justify-between font-bold text-slate-900 text-xs sm:text-sm">
                    <span>When should I choose polyclonal antibodies over monoclonal antibodies?</span>
                    <i className="fa-solid fa-chevron-down text-slate-400 group-open:rotate-180 transition-transform"></i>
                  </summary>
                  <p className="mt-2 text-xs text-slate-600 leading-relaxed pt-2 border-t border-slate-200">
                    Polyclonal antibodies recognize multiple epitopes on a single antigen, giving them superior avidity and higher signal amplification. They are ideal for lateral flow control lines (e.g. Goat anti-Mouse IgG), Sandwich ELISA capture, Western blotting, and when detecting targets with moderate genetic polymorphism.
                  </p>
                </details>

                <details className="group bg-slate-50 rounded-xl border border-slate-200 p-4">
                  <summary className="flex cursor-pointer items-center justify-between font-bold text-slate-900 text-xs sm:text-sm">
                    <span>What host species do you offer for custom polyclonal antibody generation?</span>
                    <i className="fa-solid fa-chevron-down text-slate-400 group-open:rotate-180 transition-transform"></i>
                  </summary>
                  <p className="mt-2 text-xs text-slate-600 leading-relaxed pt-2 border-t border-slate-200">
                    We primarily utilize New Zealand White (NZW) Rabbits due to their robust immune response and high yield (yielding 20–50 mL antiserum per animal). We also support mouse cohorts and goat/sheep production upon request.
                  </p>
                </details>

                <details className="group bg-slate-50 rounded-xl border border-slate-200 p-4">
                  <summary className="flex cursor-pointer items-center justify-between font-bold text-slate-900 text-xs sm:text-sm">
                    <span>What is the difference between Protein A purification and Antigen-Affinity purification?</span>
                    <i className="fa-solid fa-chevron-down text-slate-400 group-open:rotate-180 transition-transform"></i>
                  </summary>
                  <p className="mt-2 text-xs text-slate-600 leading-relaxed pt-2 border-t border-slate-200">
                    Protein A/G purification isolates all IgG molecules from the serum (including non-specific baseline antibodies). Antigen-affinity purification couples your specific antigen to an agarose resin, ensuring only antibodies that specifically recognize your target are eluted. This eliminates non-specific background.
                  </p>
                </details>

                <details className="group bg-slate-50 rounded-xl border border-slate-200 p-4">
                  <summary className="flex cursor-pointer items-center justify-between font-bold text-slate-900 text-xs sm:text-sm">
                    <span>Do you help with peptide design and KLH conjugation?</span>
                    <i className="fa-solid fa-chevron-down text-slate-400 group-open:rotate-180 transition-transform"></i>
                  </summary>
                  <p className="mt-2 text-xs text-slate-600 leading-relaxed pt-2 border-t border-slate-200">
                    Yes. Our scientific team assists with antigenicity prediction, secondary structure hydrophobicity modeling, and cysteine-linker peptide design. We provide Sulfo-SMCC coupling to KLH (Keyhole Limpet Hemocyanin) or BSA carrier proteins.
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
                <div className="w-10 h-10 rounded-xl bg-emerald-600/20 text-emerald-400 flex items-center justify-center text-lg font-bold">
                  📍
                </div>
                <div>
                  <h4 className="font-bold text-sm text-white">Bangalore R&amp;D Facility</h4>
                  <p className="text-xs text-slate-400">Electronic City Phase 1, Bangalore</p>
                </div>
              </div>

              <div className="space-y-3 text-xs text-slate-300 pt-3 border-t border-slate-800">
                <div className="flex items-center gap-2">
                  <i className="fa-solid fa-phone text-emerald-400"></i>
                  <span>Direct Desk: +91 95554 22455</span>
                </div>
                <div className="flex items-center gap-2">
                  <i className="fa-solid fa-envelope text-emerald-400"></i>
                  <span>Email: info@smdmedicare.in</span>
                </div>
                <div className="flex items-center gap-2">
                  <i className="fa-solid fa-shield-halved text-emerald-400"></i>
                  <span>Quality Assured Batch Certificate of Analysis</span>
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
                  href="/services/custom-monoclonal-antibody-development" 
                  className="block p-3 rounded-xl bg-slate-50 hover:bg-emerald-50 hover:text-emerald-700 transition-colors font-medium text-slate-800 border border-slate-200/60"
                >
                  &bull; Custom Monoclonal Antibody Development (Hybridoma) &rarr;
                </Link>
                <Link 
                  href="/diagnostic-cdmo" 
                  className="block p-3 rounded-xl bg-slate-50 hover:bg-emerald-50 hover:text-emerald-700 transition-colors font-medium text-slate-800 border border-slate-200/60"
                >
                  &bull; Diagnostic Lateral Flow CDMO &amp; Assembly &rarr;
                </Link>
                <Link 
                  href="/recombinant-antigens" 
                  className="block p-3 rounded-xl bg-slate-50 hover:bg-emerald-50 hover:text-emerald-700 transition-colors font-medium text-slate-800 border border-slate-200/60"
                >
                  &bull; Recombinant Antigen Expression &rarr;
                </Link>
                <Link 
                  href="/products" 
                  className="block p-3 rounded-xl bg-slate-50 hover:bg-emerald-50 hover:text-emerald-700 transition-colors font-medium text-slate-800 border border-slate-200/60"
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
