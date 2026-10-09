import { Metadata } from 'next';
import Link from 'next/link';
import { BIOTECH_PRODUCTS } from '@/data/products';
import { STATIC_INSIGHTS } from '@/data/insights';
import BiotechCatalogClient from '@/components/BiotechCatalogClient';
import ProductsAutoCrawlHub from '@/components/ProductsAutoCrawlHub';

export const metadata: Metadata = {
  title: 'Bulk IVD Antigen & Diagnostic Antibody Supplier India | 70+ Validated Reagents | SMD Life Sciences',
  description: 'Direct bulk IVD antigen & diagnostic monoclonal antibody supplier in India (Bangalore). Source HIV-1/2, Syphilis Tp15/47, Dengue NS1, Malaria HRP2, HBsAg, HCV, Troponin I & IL-6 (>95% purity). Request 1mg-5mg evaluation sample & batch CoA.',
  keywords: [
    'bulk ivd antigen supplier',
    'diagnostic antibody supplier india',
    'recombinant antibody supplier india',
    'hiv recombinant antigen supplier india',
    'syphilis recombinant antigen supplier',
    'dengue ns1 antibody supplier india',
    'native antigens supplier india',
    'recombinant ivd antibodies',
    'ivd raw materials for immunoassay manufacturing',
    'custom monoclonal antibody development'
  ],
  alternates: {
    canonical: 'https://lifesciences.smdmedicare.in/products',
  },
  openGraph: {
    title: 'Bulk IVD Antigen & Diagnostic Antibody Supplier India | SMD Life Sciences',
    description: '70+ clinical-grade recombinant antigens, matched monoclonal antibody pairs, and cytokines with lot Certificate of Analysis (CoA).',
    url: 'https://lifesciences.smdmedicare.in/products',
    siteName: 'SMD Life Sciences',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: 'https://lifesciences.smdmedicare.in/images/biotech_chromatography.webp',
        width: 1200,
        height: 630,
        alt: 'Bulk IVD Antigen and Diagnostic Antibody Supplier India Catalog',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bulk IVD Antigen & Diagnostic Antibody Supplier India | SMD Life Sciences',
    description: '70+ clinical-grade recombinant antigens, matched monoclonal antibody pairs, and cytokines with lot Certificate of Analysis (CoA).',
    images: ['https://lifesciences.smdmedicare.in/images/biotech_chromatography.webp'],
  },
};

export default function BiotechProductsPage() {
  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    'name': 'Bulk IVD Antigens, Diagnostic Monoclonal Antibodies & Reagents Catalog',
    'description': 'High-purity recombinant antigens, matched monoclonal antibodies, cytokines, and colloidal gold conjugates for diagnostic manufacturers in India and worldwide.',
    'numberOfItems': BIOTECH_PRODUCTS.length,
    'itemListElement': BIOTECH_PRODUCTS.map((product, idx) => ({
      '@type': 'ListItem',
      'position': idx + 1,
      'name': `${product.name} (${product.code})`,
      'url': `https://lifesciences.smdmedicare.in/products/${product.code}`,
    })),
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      {
        '@type': 'ListItem',
        'position': 1,
        'name': 'Home',
        'item': 'https://lifesciences.smdmedicare.in',
      },
      {
        '@type': 'ListItem',
        'position': 2,
        'name': 'Bulk IVD Antigens & Antibodies Catalog',
        'item': 'https://lifesciences.smdmedicare.in/products',
      },
    ],
  };

  return (
    <div className="bg-slate-50 min-h-screen py-6 sm:py-8 text-slate-900 selection:bg-orange-500 selection:text-white">
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Header */}
        <div className="flex items-center space-x-2 text-xs text-slate-500 mb-6 font-medium">
          <Link href="/" className="hover:text-orange-600 transition-colors flex items-center gap-1.5">
            <i className="fas fa-home text-slate-400 text-[11px]"></i> Home
          </Link>
          <span className="text-slate-300">/</span>
          <span className="text-slate-900 font-bold">Bulk IVD Antigens &amp; Diagnostic Antibodies</span>
        </div>

        {/* Header Title & CTA Bar */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6 pb-6 border-b border-slate-200">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[11px] font-extrabold uppercase tracking-wider text-orange-700 bg-orange-50 border border-orange-200/80 px-2.5 py-0.5 rounded-full">
                Bulk IVD Antigen &amp; Antibody Supplier India
              </span>
              <span className="text-[11px] font-bold text-slate-700 bg-slate-100 border border-slate-200 px-2.5 py-0.5 rounded-full flex items-center gap-1">
                <i className="fas fa-certificate text-[10px] text-orange-600"></i> 1mg–5mg Samples &amp; CoA
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              Bulk IVD Antigens, Diagnostic Monoclonal Antibodies &amp; Reagents Catalog
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 mt-1.5 max-w-3xl leading-relaxed">
              Factory-direct B2B supplier in Bangalore, India. Browse {BIOTECH_PRODUCTS.length} validated recombinant &amp; native antigens (HIV-1/2, Syphilis Tp15/17/47, Dengue NS1, Malaria HRP2/pLDH, HBsAg, HCV, Troponin I, IL-6, PCT) and matched monoclonal antibody pairs for lateral flow rapid test cards, ELISA, and CLIA manufacturing.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2.5 shrink-0">
            <Link
              href="/services"
              className="inline-flex items-center px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs transition-all gap-2 shadow-sm"
            >
              <i className="fas fa-flask text-orange-400 text-xs"></i> Custom mAb Development
            </Link>
            <a 
              href="https://wa.me/919555422455?text=Hello%20SMD%20Medicare,%20please%20send%20the%20complete%20PDF%20Reagents%20Catalog%20and%20Bulk%20Pricing."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2.5 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs transition-all gap-2 shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              <i className="fab fa-whatsapp text-sm"></i> Request Bulk Pricing &amp; Sample
            </a>
          </div>
        </div>

        {/* High-Visibility Pillar Cross-Link Bar (Passes Crawl Equity to /services, /diagnostic-cdmo, /recombinant-antigens, /ivd-raw-materials) */}
        <div className="mb-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          <Link href="/services" className="p-3.5 rounded-xl bg-white border border-slate-200 hover:border-orange-500 transition-all flex items-center justify-between group shadow-2xs">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-orange-600 block">80% Core CDMO</span>
              <span className="text-xs font-bold text-slate-900 group-hover:text-orange-600">Custom Monoclonal Antibody Development</span>
            </div>
            <i className="fas fa-arrow-right text-xs text-slate-400 group-hover:text-orange-600"></i>
          </Link>
          <Link href="/diagnostic-cdmo" className="p-3.5 rounded-xl bg-white border border-slate-200 hover:border-orange-500 transition-all flex items-center justify-between group shadow-2xs">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 block">Assay Prototyping</span>
              <span className="text-xs font-bold text-slate-900 group-hover:text-orange-600">Diagnostic CDMO &amp; Gold Conjugation</span>
            </div>
            <i className="fas fa-arrow-right text-xs text-slate-400 group-hover:text-orange-600"></i>
          </Link>
          <Link href="/recombinant-antigens" className="p-3.5 rounded-xl bg-white border border-slate-200 hover:border-orange-500 transition-all flex items-center justify-between group shadow-2xs">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-blue-700 block">&gt;95% SEC-HPLC</span>
              <span className="text-xs font-bold text-slate-900 group-hover:text-orange-600">Recombinant &amp; Native Antigens India</span>
            </div>
            <i className="fas fa-arrow-right text-xs text-slate-400 group-hover:text-orange-600"></i>
          </Link>
          <Link href="/ivd-raw-materials" className="p-3.5 rounded-xl bg-white border border-slate-200 hover:border-orange-500 transition-all flex items-center justify-between group shadow-2xs">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-purple-700 block">Bulk Supply Desk</span>
              <span className="text-xs font-bold text-slate-900 group-hover:text-orange-600">IVD Raw Materials for Immunoassays</span>
            </div>
            <i className="fas fa-arrow-right text-xs text-slate-400 group-hover:text-orange-600"></i>
          </Link>
        </div>

        {/* Full SSR Rendered Interactive Client Catalog */}
        <BiotechCatalogClient products={BIOTECH_PRODUCTS} />

        {/* All 70 Products Static SSR HTML Crawl Hub */}
        <ProductsAutoCrawlHub />

        {/* Featured Technical Whitepapers & Assay Formulation Blogs */}
        <section className="mt-14 pt-10 border-t border-slate-200">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-wider text-orange-600 block mb-1">
                R&amp;D Knowledge Base &bull; Dispensing &amp; Conjugation SOPs
              </span>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900">
                Technical Whitepapers &amp; Assay Formulation Guides
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl">
                Step-by-step biomanufacturing protocols for colloidal gold conjugation, nitrocellulose membrane blocking, and matched antibody pair optimization.
              </p>
            </div>
            <Link
              href="/insights"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-slate-300 hover:border-orange-500 text-xs font-bold text-slate-800 hover:text-orange-600 transition-all shrink-0 self-start sm:self-auto"
            >
              View All 12 Whitepapers &rarr;
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {STATIC_INSIGHTS.slice(0, 6).map((blog) => (
              <div
                key={blog.slug}
                className="relative bg-white rounded-2xl border border-slate-200 overflow-hidden hover:border-orange-400 hover:shadow-md transition-all flex flex-col justify-between group cursor-pointer"
              >
                {/* Full-Box Clickable Overlay Link */}
                <Link
                  href={`/insights/${blog.slug}`}
                  className="absolute inset-0 z-10 rounded-2xl"
                  aria-label={blog.title}
                />

                <div>
                  {blog.blog_image && (
                    <div className="h-44 overflow-hidden bg-slate-100 border-b border-slate-100">
                      <img
                        src={blog.blog_image}
                        alt={blog.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  )}
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-2.5">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-orange-700 bg-orange-50 border border-orange-200/80 px-2 py-0.5 rounded-full">
                        Technical SOP
                      </span>
                      <span className="text-[11px] text-slate-400 font-medium">{blog.read_time}</span>
                    </div>
                    <h3 className="text-sm sm:text-base font-bold text-slate-900 leading-snug mb-2 line-clamp-2 group-hover:text-orange-600 transition-colors">
                      {blog.title}
                    </h3>
                    <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                      {blog.excerpt}
                    </p>
                  </div>
                </div>

                <div className="px-5 py-3.5 bg-slate-50/80 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="font-bold text-orange-600 group-hover:text-orange-700 flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                    Read Full Whitepaper &rarr;
                  </span>
                  <span className="text-[11px] text-slate-500 font-medium">{blog.author_name}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
