import { Metadata } from 'next';
import Link from 'next/link';
import pool from '@/lib/db';
import { STATIC_INSIGHTS } from '@/data/insights';

export const metadata: Metadata = {
  title: 'Biotech Scientific Insights & IVD Whitepapers | SMD Life Sciences',
  description: 'Technical whitepapers, lateral flow assay protocols, and research validation studies for IVD kit manufacturers, R&D scientists, and CDMO partners.',
  keywords: [
    'IVD technical insights',
    'lateral flow assay development protocols',
    'monoclonal antibody pairing studies',
    'recombinant antigen purification whitepapers',
    'colloidal gold conjugation optimization'
  ],
  alternates: {
    canonical: 'https://lifesciences.smdmedicare.in/insights',
  },
  openGraph: {
    title: 'Biotech Scientific Insights & IVD Whitepapers | SMD Life Sciences',
    description: 'Technical whitepapers and assay development protocols for IVD kit manufacturers and biotech researchers.',
    url: 'https://lifesciences.smdmedicare.in/insights',
    siteName: 'SMD Life Sciences',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Biotech Scientific Insights & IVD Whitepapers | SMD Life Sciences',
    description: 'Technical whitepapers and assay development protocols for IVD kit manufacturers and biotech researchers.',
    images: ['https://lifesciences.smdmedicare.in/icon-512.png'],
  },
};

export const revalidate = 3600;

export default async function BiotechInsightsPage() {
  let articles: any[] = [];
  try {
    const [rows] = await pool.query(
      'SELECT id, title, slug, blog_image, author_name, author_title, read_time, created_at, content FROM blog WHERE status = "published" AND division = "biotech" ORDER BY created_at DESC'
    ) as any[];
    articles = rows || [];
  } catch (error) {
    console.error('Error fetching biotech insights:', error);
  }

  // Merge static insights fallback
  if (articles.length === 0) {
    articles = STATIC_INSIGHTS;
  } else {
    const dbSlugs = new Set(articles.map((a: any) => a.slug));
    const missingStatic = STATIC_INSIGHTS.filter((s) => !dbSlugs.has(s.slug));
    articles = [...articles, ...missingStatic];
  }

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { day: '2-digit', month: 'short', year: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-GB', options);
  };

  const getExcerpt = (content: string) => {
    try {
      const sections = JSON.parse(content);
      if (Array.isArray(sections)) {
        const textSection = sections.find((s: any) => s.type === 'text' || s.type === 'paragraph');
        if (textSection && textSection.body) {
          return textSection.body.replace(/<[^>]*>?/gm, '').substring(0, 150) + '...';
        }
      }
    } catch (e) {
      // not JSON
    }
    return content?.replace(/<[^>]*>?/gm, '').substring(0, 150) + '...';
  };

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
        name: 'Scientific Insights',
        item: 'https://lifesciences.smdmedicare.in/insights',
      },
    ],
  };

  return (
    <div className="bg-slate-50 min-h-screen font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* Top Breadcrumb */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between text-xs">
          <div className="flex items-center space-x-2 text-slate-500">
            <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-slate-900 font-semibold">Scientific Insights &amp; Whitepapers</span>
          </div>
          <div className="hidden sm:flex items-center space-x-2">
            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800">
              <i className="fas fa-flask mr-1"></i> Technical R&amp;D Publication
            </span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white py-14 lg:py-18 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:24px_24px] opacity-20 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <i className="fas fa-microscope text-blue-400"></i>
            Life Sciences Research Desk
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4 tracking-tight">
            Scientific Insights &amp; <span className="text-blue-400">IVD Whitepapers</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Validation studies, antibody pairing methodologies, and technical protocols developed for rapid test card manufacturers and diagnostic researchers.
          </p>
        </div>
      </section>

      {/* Articles Listing */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {articles.length === 0 ? (
          <div className="bg-white rounded-2xl border border-slate-200 p-8 sm:p-12 text-center max-w-3xl mx-auto shadow-sm">
            <div className="w-16 h-16 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mx-auto mb-4 text-2xl">
              <i className="fas fa-file-alt"></i>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Technical Publications in Preparation</h3>
            <p className="text-sm text-slate-600 leading-relaxed mb-6">
              Our Bangalore R&amp;D team is currently compiling peer-reviewed validation whitepapers on colloidal gold conjugation kinetics and monoclonal antibody pair screening.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                href="/products"
                className="inline-flex items-center px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs transition-colors gap-2"
              >
                <i className="fas fa-layer-group"></i> Browse Reagents Catalog
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center px-5 py-2.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs transition-colors gap-2"
              >
                <i className="fas fa-flask"></i> Custom CDMO Services
              </Link>
            </div>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((art) => (
              <article key={art.id} className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col">
                {art.blog_image && (
                  <div className="h-48 w-full overflow-hidden bg-slate-100">
                    <img 
                      src={art.blog_image.startsWith('http') || art.blog_image.startsWith('/') ? art.blog_image : `/backend-media/${art.blog_image}`} 
                      alt={art.title} 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 text-xs text-slate-500 mb-3">
                      <span className="font-semibold text-blue-600">{art.author_name || 'R&D Advisory'}</span>
                      <span>•</span>
                      <span>{formatDate(art.created_at)}</span>
                      <span>•</span>
                      <span>{art.read_time || '5 min read'}</span>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2 line-clamp-2 hover:text-blue-600 transition-colors">
                      <Link href={`/insights/${art.slug || art.id}`}>
                        {art.title}
                      </Link>
                    </h3>
                    <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed mb-4">
                      {getExcerpt(art.content)}
                    </p>
                  </div>
                  <div className="pt-4 border-t border-slate-100">
                    <Link
                      href={`/insights/${art.slug || art.id}`}
                      className="text-xs font-bold text-blue-600 hover:text-blue-800 inline-flex items-center gap-1.5"
                    >
                      Read Full Whitepaper <i className="fas fa-arrow-right text-[10px]"></i>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
