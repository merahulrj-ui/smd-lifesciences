import { Metadata } from 'next';
import Link from 'next/link';
import { BIOTECH_PRODUCTS } from '@/data/products';
import BiotechCatalogClient from '@/components/BiotechCatalogClient';

export const metadata: Metadata = {
  title: 'IVD Raw Materials & Reagents Catalog (64+ Products) | SMD Life Sciences',
  description: 'Browse 64+ high-purity recombinant antigens, monoclonal antibodies, and colloidal gold conjugates for lateral flow rapid tests, ELISA, and CLIA analyzers. Certificate of Analysis (CoA) included.',
  keywords: [
    'IVD raw material catalog India',
    'lateral flow raw materials supplier',
    'recombinant antigens bulk supplier',
    'anti dengue monoclonal antibody bulk',
    'malaria pf pv antigen bulk',
    'troponin i antibody for rapid test',
    'diagnostic raw materials bangalore'
  ],
  alternates: {
    canonical: 'https://lifesciences.smdmedicare.in/products',
  },
  openGraph: {
    title: 'IVD Reagents & Biological Raw Materials Directory | SMD Life Sciences',
    description: '64+ high-purity recombinant antigens, monoclonal antibodies, and lateral flow reagents with Certificate of Analysis (CoA).',
    url: 'https://lifesciences.smdmedicare.in/products',
    siteName: 'SMD Life Sciences',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function BiotechProductsPage() {
  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    'name': 'IVD Biological Raw Materials & Reagents Catalog',
    'description': 'High-purity recombinant antigens, monoclonal antibodies, and colloidal gold conjugates for diagnostic manufacturers.',
    'numberOfItems': BIOTECH_PRODUCTS.length,
    'itemListElement': BIOTECH_PRODUCTS.slice(0, 40).map((product, idx) => ({
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
        'name': '64+ Reagents Catalog',
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
          <Link href="/" className="hover:text-blue-600 transition-colors flex items-center gap-1.5">
            <i className="fas fa-home text-slate-400 text-[11px]"></i> Home
          </Link>
          <span className="text-slate-300">/</span>
          <span className="text-slate-900 font-bold">64+ IVD Biological Reagents Catalog</span>
        </div>

        {/* Header Title & CTA Bar */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 pb-6 border-b border-slate-200">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[11px] font-extrabold uppercase tracking-wider text-blue-700 bg-blue-50 border border-blue-200/60 px-2.5 py-0.5 rounded-full">
                B2B Raw Material Supply
              </span>
              <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200/60 px-2.5 py-0.5 rounded-full flex items-center gap-1">
                <i className="fas fa-certificate text-[10px]"></i> Batch CoA Included
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              IVD Reagents &amp; Biological Raw Materials Directory
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 mt-1.5 max-w-3xl leading-relaxed">
              High-affinity monoclonal antibodies, recombinant antigens, and colloidal gold conjugates for diagnostic manufacturers. Validated for lateral flow rapid tests, ELISA, and CLIA microplates.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a 
              href="https://wa.me/919555422455?text=Hello%20SMD%20Medicare,%20please%20send%20the%20complete%20PDF%20Reagents%20Catalog%20and%20Bulk%20Pricing."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-bold text-xs transition-all gap-2 shadow-sm hover:-translate-y-0.5"
            >
              <i className="fab fa-whatsapp text-sm"></i> Request Bulk Pricing Sheet
            </a>
          </div>
        </div>

        {/* Interactive Client Catalog */}
        <BiotechCatalogClient products={BIOTECH_PRODUCTS} />

      </div>
    </div>
  );
}
