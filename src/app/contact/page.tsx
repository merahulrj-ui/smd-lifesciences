import Link from 'next/link';
import ContactForm from '@/components/ContactForm';

export const metadata = {
  title: 'Global Technical Sales & CDMO Inquiries | SMD Life Sciences',
  description: 'Connect with SMD Life Sciences. Global supply of recombinant antigens, monoclonal antibodies, and diagnostic CDMO services for IVD manufacturers across North America, Europe, APAC, and India.',
  openGraph: {
    title: 'Global Technical Sales & CDMO Inquiries | SMD Life Sciences',
    description: 'Connect with SMD Life Sciences. Global supply of recombinant antigens, monoclonal antibodies, and diagnostic CDMO services for IVD manufacturers across North America, Europe, APAC, and India.',
    url: 'https://lifesciences.smdmedicare.in/contact',
    siteName: 'SMD Life Sciences',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Global Technical Sales & CDMO Inquiries | SMD Life Sciences',
    description: 'Connect with SMD Life Sciences. Global supply of recombinant antigens, monoclonal antibodies, and diagnostic CDMO services for IVD manufacturers across North America, Europe, APAC, and India.',
  },
  alternates: {
    canonical: 'https://lifesciences.smdmedicare.in/contact',
  }
};

export default function ContactPage() {
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
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
        name: 'Contact Us',
        item: 'https://lifesciences.smdmedicare.in/contact',
      },
    ],
  };

  const contactJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Global Contact Desk - SMD Life Sciences',
    description: 'Global supply of B2B diagnostic raw materials, recombinant antigens, monoclonal antibodies, and custom CDMO services.',
    url: 'https://lifesciences.smdmedicare.in/contact',
    mainEntity: {
      '@type': 'MedicalBusiness',
      name: 'SMD Life Sciences',
      parentOrganization: {
        '@type': 'Organization',
        name: 'SMD Medicare',
        url: 'https://www.smdmedicare.in',
      },
      telephone: '+91-9555422455',
      email: 'info@smdmedicare.in',
      priceRange: '$$ - $$$$',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'B-202, Block 1, First Floor, KSSIDC Complex, Electronic City Phase 1',
        addressLocality: 'Bangalore',
        addressRegion: 'Karnataka',
        postalCode: '560100',
        addressCountry: 'IN'
      },
      areaServed: [
        { '@type': 'Country', name: 'Worldwide' },
        { '@type': 'Country', name: 'United States' },
        { '@type': 'Country', name: 'Germany' },
        { '@type': 'Country', name: 'United Kingdom' },
        { '@type': 'Country', name: 'Switzerland' },
        { '@type': 'Country', name: 'Japan' },
        { '@type': 'Country', name: 'South Korea' },
        { '@type': 'Country', name: 'Singapore' },
        { '@type': 'Country', name: 'India' },
        { '@type': 'Country', name: 'United Arab Emirates' },
        { '@type': 'Country', name: 'Canada' },
        { '@type': 'Country', name: 'France' },
        { '@type': 'Country', name: 'Australia' }
      ],
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
          opens: '09:30',
          closes: '18:30'
        }
      ],
      sameAs: [
        'https://linkedin.com/company/smdmedicare',
        'https://facebook.com/smdmedicare',
        'https://x.com/smd_medicare'
      ]
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }}
      />
      {/* Breadcrumbs */}
      <div className="bg-white border-b border-slate-200 py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1400px] mx-auto text-sm text-slate-500 font-medium overflow-x-auto whitespace-nowrap custom-scrollbar pb-2">
            <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
            <span className="mx-2 text-slate-300">»</span>
            <span className="text-slate-900 font-semibold">Contact Us &amp; Global Sales</span>
        </div>
      </div>

      {/* Premium Dark Hero Section */}
      <section className="relative overflow-hidden bg-slate-900 py-16 lg:py-20 mb-12 border-y border-slate-800">
        <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[100%] rounded-full bg-gradient-to-br from-teal-500/20 to-blue-600/20 blur-[100px]"></div>
            <div className="absolute bottom-[0%] right-[0%] w-[40%] h-[80%] rounded-full bg-gradient-to-tl from-indigo-500/20 to-purple-600/20 blur-[120px]"></div>
        </div>
        <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="inline-block py-1.5 px-4 rounded-full bg-teal-500/10 text-teal-400 font-semibold text-sm mb-4 border border-teal-500/20">
              <i className="fas fa-globe mr-2"></i> GLOBAL SCIENTIFIC &amp; TECHNICAL SALES DESK
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
              Global Sourcing &amp; Custom Diagnostic CDMO Inquiries
            </h1>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto font-medium leading-relaxed">
              Connect directly with our Bangalore scientific coordination desk for high-affinity monoclonal antibodies, recombinant antigens, evaluation samples, and custom assay contract manufacturing across North America, Europe, APAC, and India.
            </p>
        </div>
      </section>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Quick WhatsApp Connect Banner - Spanning Above Both Columns */}
          <div className="mb-8 bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-600 rounded-2xl p-5 sm:p-6 text-white shadow-md flex flex-col sm:flex-row items-center justify-between gap-4 border border-emerald-400/30">
              <div className="flex items-center gap-4 text-center sm:text-left">
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center shrink-0">
                      <i className="fab fa-whatsapp text-2xl text-white"></i>
                  </div>
                  <div>
                      <h3 className="text-lg sm:text-xl font-bold text-white leading-tight">
                          Global Technical Desk: Need Instant Reagent Pricing, CoA or Sample Vials?
                      </h3>
                      <p className="text-emerald-50 text-xs sm:text-sm mt-0.5 font-medium">
                          Serving US, EMEA &amp; APAC time zones. Chat directly with our Bangalore scientific team on WhatsApp for real-time technical consultation.
                      </p>
                  </div>
              </div>
              <a 
                  href="https://wa.me/919555422455?text=Hello%20SMD%20Life%20Sciences,%20I%20am%20inquiring%20from%20our%20R&D%20procurement%20desk%20regarding%20recombinant%20antigens,%20monoclonal%20antibodies,%20and%20custom%20CDMO%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 w-full sm:w-auto px-6 py-3.5 bg-white hover:bg-emerald-50 text-emerald-800 font-extrabold rounded-xl shadow-md hover:shadow-lg transition-all text-sm sm:text-base flex items-center justify-center gap-2 cursor-pointer"
              >
                  <i className="fab fa-whatsapp text-xl text-[#25D366]"></i>
                  <span>Chat on Global WhatsApp</span>
              </a>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 mb-12">
              {/* Left details card */}
              <div className="flex-1 flex flex-col bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-200 relative overflow-hidden group">
                  <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-teal-500 to-blue-600"></div>
                  
                  <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-5 pb-3.5 border-b border-slate-100 flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center shrink-0">
                        <i className="fas fa-headset text-lg"></i>
                    </div>
                    Contact Information
                  </h2>
                  
                  <div className="space-y-3 flex flex-col flex-grow justify-between">
                      <div className="flex items-start gap-3.5 p-3 rounded-xl bg-slate-50/70 border border-slate-100">
                          <div className="w-9 h-9 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                              <i className="fas fa-map-marker-alt text-base"></i>
                          </div>
                          <div>
                              <strong className="block text-slate-900 text-xs tracking-wide uppercase mb-0.5">
                                  Official Address
                              </strong>
                              <span className="text-slate-600 font-medium leading-relaxed block text-xs sm:text-sm">
                                  Shakumbari Vihar Phase 2, Ganeshpur, Roorkee, Uttarakhand 247667
                              </span>
                              <span className="text-[11px] text-slate-500 mt-1 block">
                                  <strong className="text-slate-700">R&amp;D Hub:</strong> Electronic City Phase 1, Bangalore (Pentavalent Bio Sciences)
                              </span>
                          </div>
                      </div>
                      
                      <div className="flex items-start gap-3.5 p-3 rounded-xl bg-slate-50/70 border border-slate-100">
                          <div className="w-9 h-9 rounded-full bg-teal-50 text-teal-600 flex items-center justify-center shrink-0 mt-0.5">
                              <i className="fas fa-phone-alt text-base"></i>
                          </div>
                          <div className="flex-1">
                              <strong className="block text-slate-900 text-xs tracking-wide uppercase mb-0.5">Phone / WhatsApp Desk</strong>
                              <div className="flex flex-wrap items-center gap-2.5">
                                  <a href="tel:+919555422455" className="text-teal-600 font-bold hover:text-teal-700 transition-colors text-base">
                                      +91 95554 22455
                                  </a>
                                  <a 
                                      href="https://wa.me/919555422455?text=Hello%20SMD%20Life%20Sciences,%20I%20have%20an%20inquiry%20for%20reagents." 
                                      target="_blank" 
                                      rel="noopener noreferrer"
                                      className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold hover:bg-emerald-200 transition-colors"
                                  >
                                      <i className="fab fa-whatsapp text-xs text-[#25D366]"></i> Chat Now
                                  </a>
                              </div>
                          </div>
                      </div>
                      
                      <div className="flex items-start gap-3.5 p-3 rounded-xl bg-slate-50/70 border border-slate-100">
                          <div className="w-9 h-9 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0 mt-0.5">
                              <i className="fas fa-envelope text-base"></i>
                          </div>
                          <div>
                              <strong className="block text-slate-900 text-xs tracking-wide uppercase mb-0.5">Official Email ID</strong>
                              <a href="mailto:info@smdmedicare.in" className="text-indigo-600 font-bold hover:text-indigo-700 transition-colors text-sm sm:text-base">
                                  info@smdmedicare.in
                              </a>
                          </div>
                      </div>
                      
                      <div className="flex items-start gap-3.5 p-3 rounded-xl bg-slate-50/70 border border-slate-100">
                          <div className="w-9 h-9 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center shrink-0 mt-0.5">
                              <i className="fas fa-clock text-base"></i>
                          </div>
                          <div>
                              <strong className="block text-slate-900 text-xs tracking-wide uppercase mb-0.5">Technical Desk Hours</strong>
                              <span className="text-slate-600 font-medium leading-relaxed block text-xs sm:text-sm">
                                  Monday — Saturday: 9:30 AM — 6:30 PM IST (UTC +5:30) · <span className="text-emerald-700 font-semibold bg-emerald-50 px-1.5 py-0.5 rounded text-[11px]">24/7 International Digital RFQs Active</span>
                              </span>
                          </div>
                      </div>

                      <div className="flex items-start gap-3.5 p-3 rounded-xl bg-slate-50/70 border border-slate-100">
                          <div className="w-9 h-9 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 mt-0.5">
                              <i className="fas fa-plane-departure text-base"></i>
                          </div>
                          <div>
                              <strong className="block text-slate-900 text-xs tracking-wide uppercase mb-0.5">Global Cold-Chain Airfreight &amp; Export Compliance</strong>
                              <span className="text-slate-600 font-medium leading-relaxed block text-xs sm:text-sm">
                                  Validated temperature-controlled express airfreight (FedEx / DHL Life Sciences Temp-Assure with Dry Ice / Blue Gel) to USA, Europe, APAC &amp; Middle East with full export documentation (Batch CoA, MSDS, Certificate of Origin).
                              </span>
                          </div>
                      </div>

                      {/* Quick Route & Review Buttons */}
                      <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
                        <a 
                          href="https://www.google.com/maps/dir/?api=1&destination=SMD+MEDICARE+Shakumbari+Vihar+Phase+2+behind+Nambardar+Farmhouse+Ganeshpur+Rajendra+Nagar+Roorkee+Uttarakhand+247667" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex-1 py-3 px-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-xs sm:text-sm text-center transition-all shadow-sm flex items-center justify-center gap-1.5"
                        >
                          <i className="fas fa-directions text-sm"></i> Route to SMD Medicare
                        </a>
                        <Link 
                          href="/products" 
                          className="flex-1 py-3 px-3 bg-amber-50 hover:bg-amber-100 text-amber-900 rounded-xl font-bold text-xs sm:text-sm text-center transition-all border border-amber-200 shadow-sm flex items-center justify-center gap-1.5"
                        >
                          <i className="fas fa-vial text-amber-600 text-sm"></i> Browse 64+ Catalog
                        </Link>
                      </div>
                  </div>
              </div>

              {/* Right form */}
              <div className="flex-[1.2] flex flex-col bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-200">
                  <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-1.5 flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                        <i className="fas fa-paper-plane text-base"></i>
                      </div>
                      Send a Technical RFQ / Global Inquiry
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500 mb-3.5 font-medium">
                      ⏱️ Guaranteed Certificate of Analysis (CoA) &amp; quotation from our scientists within <strong className="text-slate-700">24 hours</strong> across US, European &amp; Asian time zones.
                  </p>
                  
                  <div className="flex flex-wrap gap-2 sm:gap-2.5 mb-4 pb-3.5 border-b border-slate-100">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-100">
                          <i className="fas fa-certificate"></i> Batch CoA Guaranteed
                      </span>
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-blue-50 text-blue-700 text-xs font-bold border border-blue-100">
                          <i className="fas fa-dna"></i> &gt;95% Purity (SDS-PAGE)
                      </span>
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-purple-50 text-purple-700 text-xs font-bold border border-purple-100">
                          <i className="fas fa-plane"></i> Global Airfreight Export
                      </span>
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-amber-50 text-amber-700 text-xs font-bold border border-amber-100">
                          <i className="fas fa-lock"></i> 100% Client IP Ownership
                      </span>
                  </div>

                  <div className="bg-white rounded-xl flex flex-col flex-grow">
                      <ContactForm />
                  </div>
              </div>
          </div>

          {/* Global Biotech & Diagnostic Supply Network */}
          <div className="w-full bg-white rounded-2xl shadow-sm border border-slate-200 p-8 md:p-10 mb-12">
              <div className="text-center mb-8">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider mb-2 border border-blue-100">
                      <i className="fas fa-globe"></i> International Sourcing &amp; Export Desks
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">
                      Global Diagnostic &amp; Custom Biotech CDMO Supply Footprint
                  </h3>
                  <p className="text-slate-600 font-medium max-w-3xl mx-auto text-sm sm:text-base leading-relaxed">
                      Supplying high-affinity monoclonal antibodies, recombinant antigens, and custom assay CDMO solutions to diagnostic manufacturers, pharma innovators, and life sciences hubs worldwide.
                  </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-sm text-slate-700 font-medium">
                  {/* North America */}
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-blue-300 transition-colors space-y-2">
                      <div className="flex items-center gap-2 mb-3 pb-2 border-b border-slate-200">
                          <span className="text-xl">🇺🇸</span>
                          <div>
                              <strong className="block text-slate-900 text-sm font-bold">North America</strong>
                              <span className="text-[11px] text-blue-600 font-semibold">USA &amp; Canada</span>
                          </div>
                      </div>
                      <p className="text-xs text-slate-600 flex items-center gap-1.5"><i className="fas fa-check text-blue-600 text-[10px]"></i> Boston &amp; Cambridge Hub (MA)</p>
                      <p className="text-xs text-slate-600 flex items-center gap-1.5"><i className="fas fa-check text-blue-600 text-[10px]"></i> San Francisco Bay &amp; San Diego (CA)</p>
                      <p className="text-xs text-slate-600 flex items-center gap-1.5"><i className="fas fa-check text-blue-600 text-[10px]"></i> Research Triangle Park (NC) &amp; NJ</p>
                      <p className="text-xs text-slate-600 flex items-center gap-1.5"><i className="fas fa-check text-blue-600 text-[10px]"></i> Toronto &amp; Montreal Life Science Corridors</p>
                      <div className="mt-3 pt-2 border-t border-slate-200/60 text-[11px] text-slate-500 italic">
                        US BIOSECURE Act compliant supply diversification for monoclonal antibodies &amp; custom antigens.
                      </div>
                  </div>

                  {/* Europe */}
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-blue-300 transition-colors space-y-2">
                      <div className="flex items-center gap-2 mb-3 pb-2 border-b border-slate-200">
                          <span className="text-xl">🇪🇺</span>
                          <div>
                              <strong className="block text-slate-900 text-sm font-bold">Europe (EMEA)</strong>
                              <span className="text-[11px] text-blue-600 font-semibold">Germany, UK, Switzerland, France</span>
                          </div>
                      </div>
                      <p className="text-xs text-slate-600 flex items-center gap-1.5"><i className="fas fa-check text-blue-600 text-[10px]"></i> Germany (Munich, Berlin, Frankfurt)</p>
                      <p className="text-xs text-slate-600 flex items-center gap-1.5"><i className="fas fa-check text-blue-600 text-[10px]"></i> UK (Oxford-Cambridge-London Triangle)</p>
                      <p className="text-xs text-slate-600 flex items-center gap-1.5"><i className="fas fa-check text-blue-600 text-[10px]"></i> Switzerland (Basel &amp; Zurich Bio-Valley)</p>
                      <p className="text-xs text-slate-600 flex items-center gap-1.5"><i className="fas fa-check text-blue-600 text-[10px]"></i> France, Netherlands &amp; Ireland</p>
                      <div className="mt-3 pt-2 border-t border-slate-200/60 text-[11px] text-slate-500 italic">
                        High-purity diagnostic raw materials, custom antibody generation &amp; batch reserve programs.
                      </div>
                  </div>

                  {/* Asia-Pacific */}
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-blue-300 transition-colors space-y-2">
                      <div className="flex items-center gap-2 mb-3 pb-2 border-b border-slate-200">
                          <span className="text-xl">🌏</span>
                          <div>
                              <strong className="block text-slate-900 text-sm font-bold">Asia-Pacific (APAC)</strong>
                              <span className="text-[11px] text-blue-600 font-semibold">Japan, Korea, Singapore, Australia</span>
                          </div>
                      </div>
                      <p className="text-xs text-slate-600 flex items-center gap-1.5"><i className="fas fa-check text-blue-600 text-[10px]"></i> Japan (Tokyo, Osaka &amp; Kansai Cluster)</p>
                      <p className="text-xs text-slate-600 flex items-center gap-1.5"><i className="fas fa-check text-blue-600 text-[10px]"></i> South Korea (Songdo Biofront &amp; Seoul)</p>
                      <p className="text-xs text-slate-600 flex items-center gap-1.5"><i className="fas fa-check text-blue-600 text-[10px]"></i> Singapore (Biopolis Biomedical Hub)</p>
                      <p className="text-xs text-slate-600 flex items-center gap-1.5"><i className="fas fa-check text-blue-600 text-[10px]"></i> Australia &amp; Vietnam Diagnostic Labs</p>
                      <div className="mt-3 pt-2 border-t border-slate-200/60 text-[11px] text-slate-500 italic">
                        High-volume lateral flow raw materials, gold conjugates &amp; OEM cassette manufacturing.
                      </div>
                  </div>

                  {/* India & Middle East */}
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-blue-300 transition-colors space-y-2">
                      <div className="flex items-center gap-2 mb-3 pb-2 border-b border-slate-200">
                          <span className="text-xl">🇮🇳</span>
                          <div>
                              <strong className="block text-slate-900 text-sm font-bold">India &amp; Middle East</strong>
                              <span className="text-[11px] text-blue-600 font-semibold">Global Biomanufacturing Base</span>
                          </div>
                      </div>
                      <p className="text-xs text-slate-600 flex items-center gap-1.5"><i className="fas fa-check text-blue-600 text-[10px]"></i> Bengaluru Electronic City (R&amp;D Hub)</p>
                      <p className="text-xs text-slate-600 flex items-center gap-1.5"><i className="fas fa-check text-blue-600 text-[10px]"></i> Hyderabad Genome Valley &amp; Pune Cluster</p>
                      <p className="text-xs text-slate-600 flex items-center gap-1.5"><i className="fas fa-check text-blue-600 text-[10px]"></i> UAE (Dubai Science Park) &amp; Saudi Arabia</p>
                      <p className="text-xs text-slate-600 flex items-center gap-1.5"><i className="fas fa-check text-blue-600 text-[10px]"></i> Delhi NCR, Chennai &amp; Mumbai Corridors</p>
                      <div className="mt-3 pt-2 border-t border-slate-200/60 text-[11px] text-slate-500 italic">
                        Domestic direct sourcing, 24-48h express cold-chain delivery &amp; milestone CDMO contracts.
                      </div>
                  </div>
              </div>

              {/* International Logistics Guarantee Banner */}
              <div className="mt-8 pt-6 border-t border-slate-200 grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-slate-600">
                  <div className="flex items-start gap-3 p-3 rounded-lg bg-blue-50/60 border border-blue-100">
                      <i className="fas fa-snowflake text-blue-600 text-base mt-0.5 shrink-0"></i>
                      <div>
                          <strong className="text-slate-900 block font-semibold mb-0.5">Validated Cold-Chain Airfreight</strong>
                          <span>FedEx / DHL Life Sciences Temp-Assure with Dry Ice (-20°C / -80°C) and real-time temperature loggers.</span>
                      </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 rounded-lg bg-emerald-50/60 border border-emerald-100">
                      <i className="fas fa-file-contract text-emerald-600 text-base mt-0.5 shrink-0"></i>
                      <div>
                          <strong className="text-slate-900 block font-semibold mb-0.5">Complete Export Documentation</strong>
                          <span>Lot Certificate of Analysis (CoA), SEC-HPLC &amp; SDS-PAGE profiles, MSDS, Certificate of Origin, and Customs HS Code clearance.</span>
                      </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 rounded-lg bg-purple-50/60 border border-purple-100">
                      <i className="fas fa-shield-alt text-purple-600 text-base mt-0.5 shrink-0"></i>
                      <div>
                          <strong className="text-slate-900 block font-semibold mb-0.5">100% Client IP Assignment</strong>
                          <span>Legally binding mutual NDAs and complete commercial intellectual property transfer for custom antibody &amp; CDMO programs.</span>
                      </div>
                  </div>
              </div>
          </div>

          {/* Map iframe container with exact SMD MEDICARE Pin */}
          <div className="w-full rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-white p-2">
              <div className="flex items-center justify-between px-4 py-3 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <i className="fas fa-map-marked-alt text-blue-600 text-lg"></i>
                  <span className="font-bold text-slate-800 text-sm">SMD MEDICARE — Corporate Headquarters Location &amp; Route</span>
                </div>
                <a 
                  href="https://www.google.com/maps/dir/?api=1&destination=SMD+MEDICARE+Shakumbari+Vihar+Phase+2+behind+Nambardar+Farmhouse+Ganeshpur+Rajendra+Nagar+Roorkee+Uttarakhand+247667" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-blue-600 hover:underline flex items-center gap-1"
                >
                  Open in Google Maps <i className="fas fa-external-link-alt text-[10px]"></i>
                </a>
              </div>
              <div className="h-[420px] w-full rounded-xl overflow-hidden">
                <iframe 
                    src="https://maps.google.com/maps?q=SMD%20MEDICARE%2C%20Shakumbari%20Vihar%20Phase%202%2C%20behind%20Nambardar%20Farmhouse%2C%20Ganeshpur%2C%20Rajendra%20Nagar%2C%20Roorkee%2C%20Uttarakhand%20247667&t=&z=16&ie=UTF8&iwloc=&output=embed" 
                    allowFullScreen={false} 
                    loading="lazy" 
                    className="w-full h-full border-none"
                    title="SMD MEDICARE Official Location Map">
                </iframe>
              </div>
          </div>
      </div>
    </div>
  );
}
