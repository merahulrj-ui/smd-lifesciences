import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { BIOTECH_PRODUCTS } from '@/data/products';

interface PageProps {
  params: Promise<{ code: string }>;
}

export async function generateStaticParams() {
  return BIOTECH_PRODUCTS.map((product) => ({
    code: product.code,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { code } = await params;
  const product = BIOTECH_PRODUCTS.find((p) => p.code.toLowerCase() === code.toLowerCase());

  if (!product) {
    return {
      title: 'Reagent Not Found | SMD Life Sciences',
    };
  }

  return {
    title: `${product.name} (${product.code}) - High-Purity IVD Raw Material | SMD Life Sciences`,
    description: `${product.description} Purity: ${product.purity}. Applications: ${product.applications}. Batch-tested with Certificate of Analysis (CoA).`,
    keywords: [
      `${product.name} supplier India`,
      `${product.code} IVD raw material`,
      `${product.target} antigen antibody bulk`,
      'lateral flow rapid test reagent'
    ],
    alternates: {
      canonical: `https://lifesciences.smdmedicare.in/products/${product.code}`,
    },
    openGraph: {
      title: `${product.name} (${product.code}) | IVD Reagent`,
      description: `${product.description} Purity ${product.purity}. Order evaluation samples or bulk quantities.`,
      url: `https://lifesciences.smdmedicare.in/products/${product.code}`,
      siteName: 'SMD Life Sciences',
      locale: 'en_IN',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${product.name} (${product.code}) | IVD Reagent`,
      description: `${product.description} Purity ${product.purity}. Order evaluation samples or bulk quantities.`,
      images: ['https://lifesciences.smdmedicare.in/icon-512.png'],
    },
  };
}

export default async function BiotechProductDetailPage({ params }: PageProps) {
  const { code } = await params;
  const product = BIOTECH_PRODUCTS.find((p) => p.code.toLowerCase() === code.toLowerCase());

  if (!product) {
    notFound();
  }

  const relatedProducts = BIOTECH_PRODUCTS.filter(
    (p) => p.code !== product.code && (p.category === product.category || p.target === product.target)
  ).slice(0, 4);

  const schemaGraph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Product',
        '@id': `https://lifesciences.smdmedicare.in/products/${product.code}#product`,
        name: product.name,
        sku: product.code,
        mpn: product.code,
        description: product.description,
        image: 'https://lifesciences.smdmedicare.in/icon-512.png',
        category: product.category,
        brand: {
          '@type': 'Brand',
          name: 'SMD Life Sciences',
        },
        manufacturer: {
          '@id': 'https://lifesciences.smdmedicare.in/#organization',
        },
        isRelatedTo: relatedProducts.map((rp) => ({
          '@type': 'Product',
          '@id': `https://lifesciences.smdmedicare.in/products/${rp.code}#product`,
          name: rp.name,
          sku: rp.code,
        })),
        additionalProperty: [
          {
            '@type': 'PropertyValue',
            name: 'Target Analyte',
            value: product.target,
          },
          {
            '@type': 'PropertyValue',
            name: 'Host / Source',
            value: product.host,
          },
          {
            '@type': 'PropertyValue',
            name: 'Purity',
            value: product.purity,
          },
          {
            '@type': 'PropertyValue',
            name: 'Applications',
            value: product.applications,
          },
        ],
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `https://lifesciences.smdmedicare.in/products/${product.code}#breadcrumbs`,
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
            name: 'Reagents Directory',
            item: 'https://lifesciences.smdmedicare.in/products',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: `${product.code} - ${product.name}`,
            item: `https://lifesciences.smdmedicare.in/products/${product.code}`,
          },
        ],
      },
    ],
  };

  return (
    <div className="bg-slate-50 min-h-screen py-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <div className="flex items-center space-x-2 text-xs text-slate-500 mb-6">
          <Link href="/" className="hover:text-orange-600 transition-colors">Home</Link>
          <span>/</span>
          <Link href="/products" className="hover:text-orange-600 transition-colors">Reagents Directory</Link>
          <span>/</span>
          <span className="text-slate-900 font-semibold">{product.code}</span>
        </div>

        {/* Top Back Link */}
        <div className="mb-6">
          <Link 
            href="/products"
            className="inline-flex items-center text-xs font-semibold text-slate-600 hover:text-orange-600 transition-colors gap-1.5"
          >
            <i className="fas fa-arrow-left text-[10px]"></i>
            Back to All 64+ Reagents
          </Link>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Main Datasheet Details (2 Columns) */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Header Card */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="text-xs font-mono font-bold text-orange-700 bg-orange-50 px-3 py-1 rounded-md border border-orange-200/80">
                  {product.code}
                </span>
                <span className="text-xs font-semibold text-slate-600 bg-slate-100 px-3 py-1 rounded-md">
                  {product.category}
                </span>
                <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-md">
                  {product.purity}
                </span>
              </div>

              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight mb-4">
                {product.name}
              </h1>

              <p className="text-sm text-slate-600 leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Technical Specification Table */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
              <h2 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
                <i className="fas fa-flask text-orange-600"></i>
                Technical Datasheet &amp; Analytical Specifications
              </h2>

              <div className="divide-y divide-slate-100 text-sm">
                <div className="py-3 grid grid-cols-3">
                  <span className="text-slate-500 font-medium">Product Code:</span>
                  <span className="col-span-2 font-mono font-bold text-slate-900">{product.code}</span>
                </div>
                <div className="py-3 grid grid-cols-3">
                  <span className="text-slate-500 font-medium">Biological Target:</span>
                  <span className="col-span-2 font-semibold text-slate-900">{product.target}</span>
                </div>
                <div className="py-3 grid grid-cols-3">
                  <span className="text-slate-500 font-medium">Product Type:</span>
                  <span className="col-span-2 text-slate-900">{product.type}</span>
                </div>
                <div className="py-3 grid grid-cols-3">
                  <span className="text-slate-500 font-medium">Reagent Format:</span>
                  <span className="col-span-2 text-slate-900">{product.format}</span>
                </div>
                <div className="py-3 grid grid-cols-3">
                  <span className="text-slate-500 font-medium">Host / Expression System:</span>
                  <span className="col-span-2 text-slate-900">{product.host}</span>
                </div>
                <div className="py-3 grid grid-cols-3">
                  <span className="text-slate-500 font-medium">Guaranteed Purity:</span>
                  <span className="col-span-2 font-semibold text-emerald-600">{product.purity}</span>
                </div>
                <div className="py-3 grid grid-cols-3">
                  <span className="text-slate-500 font-medium">Physical Form:</span>
                  <span className="col-span-2 text-slate-900">{product.form}</span>
                </div>
                <div className="py-3 grid grid-cols-3">
                  <span className="text-slate-500 font-medium">Storage Temperature:</span>
                  <span className="col-span-2 text-slate-900">{product.storage}</span>
                </div>
                <div className="py-3 grid grid-cols-3">
                  <span className="text-slate-500 font-medium">Recommended Applications:</span>
                  <span className="col-span-2 text-slate-900">{product.applications}</span>
                </div>
              </div>
            </div>

            {/* Quality & Batch Guarantee */}
            <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 flex items-start gap-4">
              <i className="fas fa-shield-alt text-2xl text-orange-600 shrink-0 mt-1"></i>
              <div>
                <h3 className="text-sm font-bold text-slate-900 mb-1">
                  Lot-Specific Certificate of Analysis (CoA) Guarantee
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Every order includes comprehensive analytical documentation including SDS-PAGE densitometry scans, ELISA binding curves, protein concentration (BCA/A280), and sterility testing reports. Manufactured under rigorous batch quality assurance protocols.
                </p>
              </div>
            </div>
          </div>

          {/* Right Action & RFQ Sidebar (1 Column) */}
          <div className="space-y-6">
            
            {/* Direct RFQ Action Box */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm sticky top-6">
              <div className="text-xs font-bold uppercase tracking-wider text-orange-600 mb-1">
                B2B Bulk Sourcing &amp; Samples
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Order Evaluation Sample or Bulk PO
              </h3>
              <p className="text-xs text-slate-500 mb-6">
                Sample vials (1mg – 5mg) available for rapid lateral flow calibration and R&amp;D assay development.
              </p>

              <div className="space-y-3 mb-6">
                <a 
                  href={`https://wa.me/919555422455?text=Hello%20SMD%20Medicare,%20inquiry%20for%20Reagent%20${product.code}%20(${encodeURIComponent(product.name)}).%20Please%20provide%20bulk%20quote%20and%20CoA.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-4 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-md hover:shadow-lg"
                >
                  <i className="fab fa-whatsapp text-white text-sm"></i> Inquire on WhatsApp (+91 95554 22455)
                </a>

                <a 
                  href={`mailto:info@smdmedicare.in?subject=RFQ%20for%20${product.code}%20-%20${encodeURIComponent(product.name)}&body=Hello%20SMD%20Medicare%20Life%20Sciences,%0D%0A%0D%0AWe%20would%20like%20to%20request%20a%20quotation%20and%20Certificate%20of%20Analysis%20(CoA)%20for:%0D%0AProduct%20Code:%20${product.code}%0D%0AProduct%20Name:%20${encodeURIComponent(product.name)}%0D%0AQuantity%20Needed%20(mg/g):%20%0D%0ACompany%20Name:%20%0D%0AContact%20Number:%20`}
                  className="w-full py-3.5 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs flex items-center justify-center gap-2 transition-colors shadow-sm"
                >
                  <i className="fas fa-paper-plane text-xs text-orange-400"></i>
                  Email RFQ (info@smdmedicare.in)
                </a>
              </div>

              <div className="space-y-3 pt-6 border-t border-slate-100 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <i className="fas fa-truck text-slate-400 shrink-0 text-xs"></i>
                  <span>24–48h Domestic Express Dispatch (Blue Gel / Dry Ice)</span>
                </div>
                <div className="flex items-center gap-2">
                  <i className="fas fa-file-invoice text-slate-400 shrink-0 text-xs"></i>
                  <span>GST Invoice with Input Tax Credit (INR Billing)</span>
                </div>
                <div className="flex items-center gap-2">
                  <i className="fas fa-shield-alt text-slate-400 shrink-0 text-xs"></i>
                  <span>Batch Reservation available for contract production</span>
                </div>
              </div>
            </div>

            {/* Custom Services Teaser */}
            <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl border border-orange-200 p-6 text-xs">
              <span className="font-bold text-orange-800 uppercase tracking-wider block mb-1">
                Need Custom Modifications?
              </span>
              <p className="text-slate-700 mb-3 leading-relaxed">
                Need this target expressed in mammalian CHO cells, or conjugated with custom 40nm colloidal gold nanoparticles?
              </p>
              <Link 
                href="/services"
                className="font-bold text-orange-700 hover:text-orange-900 inline-flex items-center gap-1"
              >
                Inquire Custom Services ➔
              </Link>
            </div>

          </div>
        </div>

        {/* Related Diagnostic Reagents & Matched Antibodies */}
        {relatedProducts.length > 0 && (
          <div className="mt-12 pt-8 border-t border-slate-200">
            <div className="flex items-center justify-between mb-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-orange-600">Topical Reagent Mesh</span>
                <h2 className="text-xl font-bold text-slate-900 mt-1">
                  Related Diagnostic Reagents &amp; Matched Antibodies
                </h2>
              </div>
              <Link
                href="/products"
                className="text-xs font-bold text-orange-600 hover:text-orange-700"
              >
                View all 64+ reagents &rarr;
              </Link>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {relatedProducts.map((rp) => (
                <div
                  key={rp.code}
                  className="bg-white rounded-xl border border-slate-200 p-4 hover:border-orange-300 hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[11px] font-mono font-bold text-orange-700 bg-orange-50 border border-orange-200/80 px-1.5 py-0.5 rounded">
                        {rp.code}
                      </span>
                      <span className="text-[11px] text-slate-400">{rp.format}</span>
                    </div>
                    <h3 className="text-xs sm:text-sm font-bold text-slate-900 leading-snug mb-2 line-clamp-2">
                      {rp.name}
                    </h3>
                    <p className="text-[11px] text-slate-500 line-clamp-2 mb-3">
                      {rp.description}
                    </p>
                  </div>
                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                    <Link
                      href={`/products/${rp.code}`}
                      className="font-bold text-slate-900 hover:text-orange-600"
                    >
                      Datasheet &rarr;
                    </Link>
                    <span className="text-orange-700 font-semibold text-[11px] bg-orange-50 px-1.5 py-0.5 rounded border border-orange-200/60">CoA Validated</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
