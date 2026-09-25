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

  const productImage = product.category.toLowerCase().includes('antigen') || product.type.toLowerCase().includes('recombinant')
    ? 'https://lifesciences.smdmedicare.in/images/biotech_chromatography.jpg'
    : 'https://lifesciences.smdmedicare.in/images/biotech_lateral_flow.jpg';

  return {
    title: `Buy ${product.name} (${product.code}) | IVD Reagent Bulk Price & CoA | SMD Life Sciences`,
    description: `Order ${product.name} (${product.code}) direct from Bangalore manufacturer. Purity: ${product.purity} | Target: ${product.target} | Applications: ${product.applications}. 1mg-5mg evaluation sample vials available. 24-48h cold-chain dispatch with lot CoA.`,
    keywords: [
      product.name,
      `${product.name} price`,
      `${product.name} manufacturer India`,
      `${product.code} IVD reagent`,
      `${product.target} antibody antigen`,
      'IVD raw material supplier Bangalore',
      'lateral flow rapid test reagent',
      'ELISA raw material India'
    ],
    alternates: {
      canonical: `https://lifesciences.smdmedicare.in/products/${product.code}`,
    },
    openGraph: {
      title: `Buy ${product.name} (${product.code}) | IVD Reagent`,
      description: `Purity ${product.purity}. Order 1mg-5mg evaluation samples or commercial bulk quantities with lot Certificate of Analysis (CoA).`,
      url: `https://lifesciences.smdmedicare.in/products/${product.code}`,
      siteName: 'SMD Life Sciences',
      locale: 'en_IN',
      type: 'website',
      images: [
        {
          url: productImage,
          width: 1200,
          height: 630,
          alt: `${product.name} (${product.code}) IVD Raw Material`,
        }
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `Buy ${product.name} (${product.code}) | IVD Reagent`,
      description: `Purity ${product.purity}. Order 1mg-5mg evaluation samples or commercial bulk quantities with lot Certificate of Analysis (CoA).`,
      images: [productImage],
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

  const productImage = product.category.toLowerCase().includes('antigen') || product.type.toLowerCase().includes('recombinant')
    ? 'https://lifesciences.smdmedicare.in/images/biotech_chromatography.jpg'
    : 'https://lifesciences.smdmedicare.in/images/biotech_lateral_flow.jpg';

  const productFaqs = [
    {
      question: `What is the certified purity and testing validation of ${product.name} (${product.code})?`,
      answer: `${product.name} (${product.code}) offers guaranteed purity of ${product.purity} verified by SDS-PAGE densitometry and analytical profiling. Each batch comes with a lot-specific Certificate of Analysis (CoA) and clinical reactivity validation.`
    },
    {
      question: `Can IVD kit manufacturers order evaluation samples of ${product.code}?`,
      answer: `Yes. SMD Life Sciences supplies 1mg to 5mg evaluation sample vials of ${product.code} for rapid lateral flow calibration, ELISA sensitivity testing, and assay validation before placing commercial bulk orders.`
    },
    {
      question: `What is the shipping temperature and domestic dispatch timeline for ${product.name}?`,
      answer: `Recommended storage temperature is ${product.storage}. Domestic dispatch across India takes 24–48 hours directly from our Bangalore facility in temperature-controlled packaging (Blue Gel / Dry Ice).`
    }
  ];

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
        image: [
          productImage,
          'https://lifesciences.smdmedicare.in/icon-512.png'
        ],
        category: product.category,
        brand: {
          '@type': 'Brand',
          name: 'SMD Life Sciences',
        },
        manufacturer: {
          '@id': 'https://lifesciences.smdmedicare.in/#organization',
        },
        offers: {
          '@type': 'Offer',
          url: `https://lifesciences.smdmedicare.in/products/${product.code}`,
          priceCurrency: 'INR',
          price: '2500',
          priceValidUntil: '2027-12-31',
          availability: 'https://schema.org/InStock',
          itemCondition: 'https://schema.org/NewCondition',
          seller: {
            '@type': 'Organization',
            name: 'SMD Life Sciences',
          },
          shippingDetails: {
            '@type': 'OfferShippingDetails',
            shippingRate: {
              '@type': 'MonetaryAmount',
              value: '0',
              currency: 'INR',
            },
            shippingDestination: {
              '@type': 'DefinedRegion',
              addressCountry: 'IN',
            },
            deliveryTime: {
              '@type': 'ShippingDeliveryTime',
              transitTime: {
                '@type': 'QuantitativeValue',
                minValue: 1,
                maxValue: 3,
                unitCode: 'DAY',
              },
            },
          },
          hasMerchantReturnPolicy: {
            '@type': 'MerchantReturnPolicy',
            applicableCountry: 'IN',
            returnPolicyCategory: 'https://schema.org/MerchantReturnFiniteReturnWindow',
            merchantReturnDays: 14,
            returnMethod: 'https://schema.org/ReturnByMail',
            returnFees: 'https://schema.org/FreeReturn',
          },
        },
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.9',
          reviewCount: '34',
          bestRating: '5',
          worstRating: '1',
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
      {
        '@type': 'FAQPage',
        '@id': `https://lifesciences.smdmedicare.in/products/${product.code}#faq`,
        mainEntity: productFaqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        })),
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

            {/* Technical & Procurement FAQ Accordion */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
              <h3 className="text-base font-bold text-slate-900 mb-4 flex items-center gap-2">
                <i className="fas fa-circle-question text-orange-600"></i>
                Technical &amp; Sourcing FAQ for {product.name}
              </h3>
              <div className="space-y-3">
                {productFaqs.map((faq, idx) => (
                  <details
                    key={idx}
                    className="group bg-slate-50 rounded-xl border border-slate-200 p-4 transition-all [&_summary::-webkit-details-marker]:hidden"
                    {...(idx === 0 ? { open: true } : {})}
                  >
                    <summary className="flex cursor-pointer items-center justify-between gap-3 font-semibold text-slate-900 text-xs sm:text-sm select-none">
                      <span>{faq.question}</span>
                      <span className="shrink-0 text-slate-400 group-open:rotate-180 transition-transform">
                        <i className="fas fa-chevron-down text-xs"></i>
                      </span>
                    </summary>
                    <p className="mt-2 text-xs text-slate-600 leading-relaxed pt-2 border-t border-slate-200/60">
                      {faq.answer}
                    </p>
                  </details>
                ))}
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
                  className="relative bg-white rounded-xl border border-slate-200 p-4 hover:border-orange-400 hover:shadow-md transition-all flex flex-col justify-between group cursor-pointer"
                >
                  {/* Full-box Clickable Overlay Link */}
                  <Link
                    href={`/products/${rp.code}`}
                    className="absolute inset-0 z-10 rounded-xl"
                    aria-label={`View ${rp.name} (${rp.code}) datasheet`}
                  />

                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[11px] font-mono font-bold text-orange-700 bg-orange-50 border border-orange-200/80 px-1.5 py-0.5 rounded">
                        {rp.code}
                      </span>
                      <span className="text-[11px] text-slate-400">{rp.format}</span>
                    </div>
                    <h3 className="text-xs sm:text-sm font-bold text-slate-900 leading-snug mb-2 line-clamp-2 group-hover:text-orange-600 transition-colors">
                      {rp.name}
                    </h3>
                    <p className="text-[11px] text-slate-500 line-clamp-2 mb-3">
                      {rp.description}
                    </p>
                  </div>
                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="font-bold text-slate-900 group-hover:text-orange-600 flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                      Datasheet &rarr;
                    </span>
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
