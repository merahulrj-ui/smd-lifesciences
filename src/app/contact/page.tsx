import Link from 'next/link';
import ContactForm from '@/components/ContactForm';

export const metadata = {
  title: 'Contact Us & Technical Sales | SMD Life Sciences - SMD Medicare',
  description: 'Connect with SMD Life Sciences. Allied biomanufacturing facility in Electronic City, Bangalore in technical collaboration with Pentavalent Bio Sciences. Request price quotations, evaluation samples, or custom CDMO discussions.',
  openGraph: {
    title: 'Contact Us & Technical Sales | SMD Life Sciences - SMD Medicare',
    description: 'Connect with SMD Life Sciences. Request price quotations, evaluation samples, or custom CDMO discussions for diagnostic rapid test raw materials.',
    url: 'https://lifesciences.smdmedicare.in/contact',
    siteName: 'SMD Life Sciences',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us & Technical Sales | SMD Life Sciences - SMD Medicare',
    description: 'Connect with SMD Life Sciences. Request price quotations, evaluation samples, or custom CDMO discussions for diagnostic rapid test raw materials.',
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
    name: 'Contact SMD Life Sciences',
    description: 'B2B diagnostic raw materials, recombinant antigens, monoclonal antibodies, and CDMO inquiries.',
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
      priceRange: '₹₹ - ₹₹₹₹',
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
        { '@type': 'Country', name: 'India' },
        { '@type': 'City', name: 'Delhi NCR' },
        { '@type': 'City', name: 'Bengaluru' },
        { '@type': 'City', name: 'Hyderabad' },
        { '@type': 'City', name: 'Mumbai' },
        { '@type': 'City', name: 'Pune' },
        { '@type': 'City', name: 'Chennai' },
        { '@type': 'City', name: 'Ahmedabad' },
        { '@type': 'City', name: 'Kolkata' }
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
            <span className="text-slate-900 font-semibold">Contact Us</span>
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
              <i className="fas fa-flask mr-2"></i> SCIENTIFIC &amp; TECHNICAL SALES
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
              Get In Touch with SMD Life Sciences
            </h1>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto font-medium">
              Connect directly with our Bangalore scientific desk for high-affinity antigens, monoclonal antibodies, evaluation samples, and custom CDMO services.
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
                          Need Instant Reagent Pricing, CoA or Sample Vials?
                      </h3>
                      <p className="text-emerald-50 text-xs sm:text-sm mt-0.5 font-medium">
                          Skip the email wait. Chat directly with our technical procurement team on WhatsApp (Instant response).
                      </p>
                  </div>
              </div>
              <a 
                  href="https://wa.me/919555422455?text=Hello%20SMD%20Life%20Sciences,%20I%20am%20interested%20in%20pricing%20and%20CoA%20for%20diagnostic%20reagents."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 w-full sm:w-auto px-6 py-3.5 bg-white hover:bg-emerald-50 text-emerald-800 font-extrabold rounded-xl shadow-md hover:shadow-lg transition-all text-sm sm:text-base flex items-center justify-center gap-2 cursor-pointer"
              >
                  <i className="fab fa-whatsapp text-xl text-[#25D366]"></i>
                  <span>Chat on WhatsApp</span>
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
                                  Monday — Saturday: 9:30 AM — 6:30 PM IST · <span className="text-rose-500 font-semibold bg-rose-50 px-1.5 py-0.5 rounded text-[11px]">Closed on Sundays</span>
                              </span>
                          </div>
                      </div>

                      <div className="flex items-start gap-3.5 p-3 rounded-xl bg-slate-50/70 border border-slate-100">
                          <div className="w-9 h-9 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 mt-0.5">
                              <i className="fas fa-shield-alt text-base"></i>
                          </div>
                          <div>
                              <strong className="block text-slate-900 text-xs tracking-wide uppercase mb-0.5">Cold Chain Express Dispatch &amp; CoA Guarantee</strong>
                              <span className="text-slate-600 font-medium leading-relaxed block text-xs sm:text-sm">
                                  Express 24–48h cold chain dispatch (Blue Gel / Dry Ice) with lot-specific analytical CoA (SDS-PAGE &amp; HPLC).
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
                      Send a Technical RFQ
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500 mb-3.5 font-medium">
                      ⏱️ Guaranteed Certificate of Analysis (CoA) &amp; quotation from our scientists within <strong className="text-slate-700">24 hours</strong>.
                  </p>
                  
                  <div className="flex flex-wrap gap-2 sm:gap-2.5 mb-4 pb-3.5 border-b border-slate-100">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-100">
                          <i className="fas fa-certificate"></i> Batch CoA Guaranteed
                      </span>
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-blue-50 text-blue-700 text-xs font-bold border border-blue-100">
                          <i className="fas fa-dna"></i> &gt;95% Purity (SDS-PAGE)
                      </span>
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-purple-50 text-purple-700 text-xs font-bold border border-purple-100">
                          <i className="fas fa-snowflake"></i> 24-48h Cold Chain
                      </span>
                  </div>

                  <div className="bg-white rounded-xl flex flex-col flex-grow">
                      <ContactForm />
                  </div>
              </div>
          </div>

          {/* Areas We Serve - Local SEO Booster */}
          <div className="w-full bg-white rounded-2xl shadow-sm border border-slate-200 p-8 md:p-10 mb-12">
              <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">
                      <i className="fas fa-globe-asia text-teal-600 mr-2"></i> Pan-India Diagnostic &amp; IVD Manufacturer Supply Network
                  </h3>
                  <p className="text-slate-600 font-medium max-w-3xl mx-auto">
                      SMD Life Sciences delivers batch-tested antigens, monoclonal antibodies, and colloidal gold conjugates to diagnostic kit manufacturers and research institutions across India.
                  </p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm text-slate-700 font-medium">
                  <div className="space-y-2">
                      <strong className="block text-slate-900 mb-3 pb-2 border-b border-slate-100">North India Bio-Clusters</strong>
                      <p className="hover:text-blue-600 transition-colors cursor-default"><i className="fas fa-check text-teal-500 mr-2 text-xs"></i> Delhi NCR &amp; Manesar</p>
                      <p className="hover:text-blue-600 transition-colors cursor-default"><i className="fas fa-check text-teal-500 mr-2 text-xs"></i> Dehradun Biotech Park</p>
                      <p className="hover:text-blue-600 transition-colors cursor-default"><i className="fas fa-check text-teal-500 mr-2 text-xs"></i> Lucknow Biotech City</p>
                      <p className="hover:text-blue-600 transition-colors cursor-default"><i className="fas fa-check text-teal-500 mr-2 text-xs"></i> Chandigarh &amp; Mohali</p>
                  </div>
                  <div className="space-y-2">
                      <strong className="block text-slate-900 mb-3 pb-2 border-b border-slate-100">West &amp; Central India</strong>
                      <p className="hover:text-blue-600 transition-colors cursor-default"><i className="fas fa-check text-teal-500 mr-2 text-xs"></i> Mumbai &amp; Thane</p>
                      <p className="hover:text-blue-600 transition-colors cursor-default"><i className="fas fa-check text-teal-500 mr-2 text-xs"></i> Pune Biotech Hub (Hinjawadi)</p>
                      <p className="hover:text-blue-600 transition-colors cursor-default"><i className="fas fa-check text-teal-500 mr-2 text-xs"></i> Ahmedabad &amp; Vadodara</p>
                      <p className="hover:text-blue-600 transition-colors cursor-default"><i className="fas fa-check text-teal-500 mr-2 text-xs"></i> Indore Pharma Cluster</p>
                  </div>
                  <div className="space-y-2">
                      <strong className="block text-slate-900 mb-3 pb-2 border-b border-slate-100">South India Bio-Hubs</strong>
                      <p className="hover:text-blue-600 transition-colors cursor-default"><i className="fas fa-check text-teal-500 mr-2 text-xs"></i> Bengaluru Electronic City</p>
                      <p className="hover:text-blue-600 transition-colors cursor-default"><i className="fas fa-check text-teal-500 mr-2 text-xs"></i> Hyderabad Genome Valley</p>
                      <p className="hover:text-blue-600 transition-colors cursor-default"><i className="fas fa-check text-teal-500 mr-2 text-xs"></i> Chennai TICEL Bio Park</p>
                      <p className="hover:text-blue-600 transition-colors cursor-default"><i className="fas fa-check text-teal-500 mr-2 text-xs"></i> Kochi Bio360 Cluster</p>
                  </div>
                  <div className="space-y-2">
                      <strong className="block text-slate-900 mb-3 pb-2 border-b border-slate-100">East &amp; North East</strong>
                      <p className="hover:text-blue-600 transition-colors cursor-default"><i className="fas fa-check text-teal-500 mr-2 text-xs"></i> Kolkata Biotech Park</p>
                      <p className="hover:text-blue-600 transition-colors cursor-default"><i className="fas fa-check text-teal-500 mr-2 text-xs"></i> Bhubaneswar Biotech Park</p>
                      <p className="hover:text-blue-600 transition-colors cursor-default"><i className="fas fa-check text-teal-500 mr-2 text-xs"></i> Patna Medical Cluster</p>
                      <p className="hover:text-blue-600 transition-colors cursor-default"><i className="fas fa-check text-teal-500 mr-2 text-xs"></i> Guwahati Biotech Hub</p>
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
