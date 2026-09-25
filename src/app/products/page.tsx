import { Metadata } from 'next';
import { Suspense } from 'react';
import Link from 'next/link';
import { BIOTECH_PRODUCTS } from '@/data/products';
import BiotechCatalogClient from '@/components/BiotechCatalogClient';

export const metadata: Metadata = {
  title: 'Buy IVD Raw Materials & Reagents (64+ Products) | Factory Direct India | SMD Life Sciences',
  description: 'Source 64+ clinical-grade IVD biological raw materials: recombinant antigens, matched monoclonal antibodies, colloidal gold conjugates. Free CoA, 1mg-5mg samples, 24-48h dispatch from Bangalore.',
  keywords: [
    'buy IVD raw materials India',
    'lateral flow raw materials supplier',
    'recombinant antigens bulk supplier',
    'anti dengue monoclonal antibody bulk',
    'malaria pf pv antigen bulk price',
    'troponin i antibody for rapid test',
    'diagnostic raw materials Bangalore manufacturer'
  ],
  alternates: {
    canonical: 'https://lifesciences.smdmedicare.in/products',
  },
  openGraph: {
    title: 'Buy IVD Reagents & Biological Raw Materials (64+ Validated) | SMD Life Sciences',
    description: '64+ high-purity recombinant antigens, monoclonal antibodies, and lateral flow reagents with Certificate of Analysis (CoA).',
    url: 'https://lifesciences.smdmedicare.in/products',
    siteName: 'SMD Life Sciences',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: 'https://lifesciences.smdmedicare.in/images/biotech_chromatography.jpg',
        width: 1200,
        height: 630,
        alt: 'IVD Raw Materials & Reagents Catalog',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Buy IVD Reagents & Biological Raw Materials (64+ Validated) | SMD Life Sciences',
    description: '64+ high-purity recombinant antigens, monoclonal antibodies, and lateral flow reagents with Certificate of Analysis (CoA).',
    images: ['https://lifesciences.smdmedicare.in/images/biotech_chromatography.jpg'],
  },
};

export default function BiotechProductsPage() {
  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    'name': 'IVD Biological Raw Materials & Reagents Catalog',
    'description': 'High-purity recombinant antigens, monoclonal antibodies, and colloidal gold conjugates for diagnostic manufacturers.',
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
          <Link href="/" className="hover:text-orange-600 transition-colors flex items-center gap-1.5">
            <i className="fas fa-home text-slate-400 text-[11px]"></i> Home
          </Link>
          <span className="text-slate-300">/</span>
          <span className="text-slate-900 font-bold">Products</span>
        </div>

        {/* Header Title & CTA Bar */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 pb-6 border-b border-slate-200">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[11px] font-extrabold uppercase tracking-wider text-orange-700 bg-orange-50 border border-orange-200/80 px-2.5 py-0.5 rounded-full">
                B2B Raw Material Supply
              </span>
              <span className="text-[11px] font-bold text-slate-700 bg-slate-100 border border-slate-200 px-2.5 py-0.5 rounded-full flex items-center gap-1">
                <i className="fas fa-certificate text-[10px] text-orange-600"></i> Batch CoA Included
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
              className="inline-flex items-center px-4 py-2.5 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs transition-all gap-2 shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              <i className="fab fa-whatsapp text-sm"></i> Request Bulk Pricing Sheet
            </a>
          </div>
        </div>

        {/* Interactive Client Catalog */}
        <Suspense fallback={<div className="text-center py-12 text-slate-400 text-sm">Loading catalog...</div>}>
          <BiotechCatalogClient products={BIOTECH_PRODUCTS} />
        </Suspense>

      </div>
    </div>
  );
}
