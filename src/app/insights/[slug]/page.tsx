import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import pool from '@/lib/db';
import { BIOTECH_PRODUCTS } from '@/data/products';
import { getStaticInsightBySlug, STATIC_INSIGHTS } from '@/data/insights';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const cleanSlug = slug.replace(/\.html$/, '');

  let art: any = null;
  try {
    const [rows] = await pool.query(
      'SELECT title, content, blog_image FROM blog WHERE (slug = ? OR slug = ? OR id = ?) LIMIT 1',
      [slug, cleanSlug, isNaN(Number(slug)) ? 0 : Number(slug)]
    ) as any[];

    if (rows && rows.length > 0) {
      art = rows[0];
    }
  } catch (e) {
    // DB offline, fallback to static
  }

  if (!art) {
    art = getStaticInsightBySlug(cleanSlug);
  }

  if (!art) {
    return { title: 'Scientific Insight | SMD Life Sciences' };
  }

  return {
    title: `${art.title} | SMD Life Sciences Insights`,
    description: `Technical whitepaper: ${art.title}. Advanced protocols and validation data for diagnostic manufacturers.`,
    alternates: {
      canonical: `https://lifesciences.smdmedicare.in/insights/${cleanSlug}`,
    },
    openGraph: {
      title: `${art.title} | SMD Life Sciences`,
      description: `Technical whitepaper and validation data for diagnostic manufacturers.`,
      url: `https://lifesciences.smdmedicare.in/insights/${cleanSlug}`,
      siteName: 'SMD Life Sciences',
      type: 'article',
      images: [art.blog_image || 'https://lifesciences.smdmedicare.in/icon-512.png'],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${art.title} | SMD Life Sciences`,
      description: `Technical whitepaper: ${art.title}. Advanced protocols and validation data for diagnostic manufacturers.`,
      images: [art.blog_image || 'https://lifesciences.smdmedicare.in/icon-512.png'],
    },
  };
}

export const revalidate = 3600;

export default async function BiotechInsightDetailPage({ params }: Props) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const cleanSlug = slug.replace(/\.html$/, '');

  let article: any = null;
  try {
    const [rows] = await pool.query(
      'SELECT * FROM blog WHERE (slug = ? OR slug = ? OR REPLACE(LOWER(title), " ", "-") = ? OR id = ?) LIMIT 1',
      [slug, cleanSlug, cleanSlug, isNaN(Number(slug)) ? 0 : Number(slug)]
    ) as any[];

    if (rows && rows.length > 0) {
      article = rows[0];
    }
  } catch (error) {
    console.error('Error fetching insight article from DB:', error);
  }

  // Fallback to static insights if not in database
  if (!article) {
    article = getStaticInsightBySlug(cleanSlug);
  }

  if (!article) {
    notFound();
  }

  // Related Biotech Insights
  let relatedInsights: any[] = [];
  try {
    const [rRows] = await pool.query(
      'SELECT id, title, slug, blog_image, created_at, read_time FROM blog WHERE status = "published" AND division = "biotech" AND id != ? ORDER BY created_at DESC LIMIT 3',
      [article.id]
    ) as any[];
    relatedInsights = rRows || [];
  } catch (e) {
    // ignore
  }

  if (relatedInsights.length === 0) {
    relatedInsights = STATIC_INSIGHTS.filter((s) => s.slug !== cleanSlug).slice(0, 3);
  }

  // Related Biotech Products from catalog
  const sampleReagents = BIOTECH_PRODUCTS.slice(0, 4);

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { day: '2-digit', month: 'short', year: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-GB', options);
  };

  // Render article content (supports HTML string or structured JSON sections)
  const renderContent = () => {
    try {
      const parsed = JSON.parse(article.content);
      if (Array.isArray(parsed)) {
        return parsed.map((section: any, idx: number) => {
          if (section.type === 'heading' || section.type === 'h2') {
            return <h2 key={idx} className="text-xl sm:text-2xl font-bold text-slate-900 mt-8 mb-4">{section.text || section.title}</h2>;
          }
          if (section.type === 'h3') {
            return <h3 key={idx} className="text-lg font-bold text-slate-900 mt-6 mb-3">{section.text || section.title}</h3>;
          }
          if (section.type === 'image') {
            return (
              <div key={idx} className="my-6 rounded-xl overflow-hidden bg-slate-100 border border-slate-200">
                <img src={section.url} alt={section.caption || 'Scientific figure'} className="w-full h-auto object-contain" />
                {section.caption && <p className="text-xs text-center text-slate-500 py-2 italic">{section.caption}</p>}
              </div>
            );
          }
          return (
            <div 
              key={idx} 
              className="text-slate-700 text-base leading-relaxed mb-4 prose-p:mb-4"
              dangerouslySetInnerHTML={{ __html: section.body || section.html || section.text || '' }} 
            />
          );
        });
      }
    } catch (e) {
      // plain HTML
    }
    return (
      <div 
        className="prose prose-slate max-w-none text-slate-700 leading-relaxed text-base"
        dangerouslySetInnerHTML={{ __html: article.content }} 
      />
    );
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
      {
        '@type': 'ListItem',
        position: 3,
        name: article.title,
        item: `https://lifesciences.smdmedicare.in/insights/${article.slug || article.id}`,
      },
    ],
  };

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    '@id': `https://lifesciences.smdmedicare.in/insights/${cleanSlug}#article`,
    headline: article.title,
    author: {
      '@type': 'Person',
      name: article.author_name || 'SMD Life Sciences R&D Team',
      jobTitle: article.author_title || 'Biotechnology & IVD Research Scientist',
      worksFor: {
        '@id': 'https://lifesciences.smdmedicare.in/#organization',
      },
    },
    publisher: {
      '@id': 'https://lifesciences.smdmedicare.in/#organization',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://lifesciences.smdmedicare.in/insights/${cleanSlug}`,
    },
    datePublished: article.created_at,
    dateModified: article.updated_at || article.created_at,
    image: article.blog_image || 'https://lifesciences.smdmedicare.in/icon-512.png',
    description: article.title,
  };

  return (
    <div className="bg-slate-50 min-h-screen font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      {/* Top Breadcrumb */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between text-xs">
          <div className="flex items-center space-x-2 text-slate-500 overflow-x-auto whitespace-nowrap">
            <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/insights" className="hover:text-blue-600 transition-colors">Scientific Insights</Link>
            <span>/</span>
            <span className="text-slate-900 font-semibold truncate max-w-xs">{article.title}</span>
          </div>
        </div>
      </div>

      {/* Article Header & Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Main Whitepaper Content (8 Cols) */}
          <main className="lg:col-span-8 bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-sm">
            <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 mb-4 pb-4 border-b border-slate-100">
              <span className="px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800 font-semibold">
                Whitepaper
              </span>
              <span>•</span>
              <span>Published: {formatDate(article.created_at)}</span>
              <span>•</span>
              <span>{article.read_time || '6 min technical read'}</span>
              <span>•</span>
              <span className="text-slate-700 font-medium">By {article.author_name || 'R&D Advisory Desk'}</span>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 leading-tight mb-6">
              {article.title}
            </h1>

            {article.blog_image && (
              <div className="mb-8 rounded-xl overflow-hidden bg-slate-100 border border-slate-200 shadow-sm">
                <img 
                  src={article.blog_image.startsWith('http') || article.blog_image.startsWith('/') ? article.blog_image : `/backend-media/${article.blog_image}`} 
                  alt={article.title} 
                  className="w-full h-auto object-cover max-h-[460px]"
                />
              </div>
            )}

            {/* Scientific Content Body */}
            <div className="scientific-article-body">
              {renderContent()}
            </div>

            {/* Scientific CTA Box */}
            <div className="mt-12 bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-6 sm:p-8">
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Need Specific Lot CoA or Matched Antibody Pairs?
              </h3>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-6">
                Our Bangalore scientific coordination desk provides lot-specific analytical data, 1mg–5mg evaluation samples, and custom conjugation support for IVD kit manufacturers.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href={`https://wa.me/919555422455?text=${encodeURIComponent(`Hello SMD Life Sciences, I am inquiring regarding your whitepaper: "${article.title}". Please provide the technical protocol and reagent samples.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-5 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs transition-colors gap-2 shadow-sm"
                >
                  💬 Inquire with Bangalore Lab Desk
                </a>
                <Link
                  href="/products"
                  className="inline-flex items-center px-5 py-2.5 rounded-lg bg-white hover:bg-slate-50 text-blue-700 border border-blue-300 font-semibold text-xs transition-colors gap-2"
                >
                  <i className="fas fa-layer-group"></i> Browse 64+ Catalog Reagents
                </Link>
              </div>
            </div>
          </main>

          {/* Right Sidebar (4 Cols) */}
          <aside className="lg:col-span-4 space-y-6">
            
            {/* Catalog Quick Access */}
            <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
              <h3 className="text-sm font-bold text-slate-900 mb-4 flex items-center gap-2">
                <i className="fas fa-vial text-blue-600"></i> Featured IVD Reagents
              </h3>
              <div className="space-y-3">
                {sampleReagents.map((reagent) => (
                  <Link 
                    key={reagent.code} 
                    href={`/products/${reagent.code.toLowerCase()}`}
                    className="block p-3 rounded-lg border border-slate-100 hover:border-blue-300 hover:bg-blue-50/50 transition-all group"
                  >
                    <div className="flex items-center justify-between text-xs mb-1">
                      <span className="font-mono text-[11px] font-bold text-blue-700">{reagent.code}</span>
                      <span className="text-[10px] bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded font-medium">{reagent.type}</span>
                    </div>
                    <h4 className="text-xs font-semibold text-slate-800 line-clamp-1 group-hover:text-blue-600 transition-colors">
                      {reagent.name}
                    </h4>
                    <p className="text-[11px] text-slate-500 mt-0.5">Purity: {reagent.purity} • {reagent.host}</p>
                  </Link>
                ))}
              </div>
              <Link 
                href="/products" 
                className="block text-center mt-4 text-xs font-bold text-blue-600 hover:text-blue-800"
              >
                View All 64+ Reagents &rarr;
              </Link>
            </div>

            {/* Custom CDMO Card */}
            <div className="bg-gradient-to-br from-slate-900 to-blue-950 text-white rounded-xl p-6 shadow-sm">
              <span className="text-[10px] font-bold uppercase tracking-wider text-orange-400 bg-orange-500/20 px-2 py-0.5 rounded">
                Bangalore R&amp;D
              </span>
              <h3 className="text-base font-bold mt-3 mb-2">Custom Hybridoma &amp; Expression</h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Milestone-guaranteed custom antibody development and mammalian protein expression from Bangalore bio-cluster.
              </p>
              <Link 
                href="/services"
                className="inline-flex items-center justify-center w-full py-2.5 rounded-lg bg-orange-600 hover:bg-orange-700 text-white font-semibold text-xs transition-colors gap-2"
              >
                Explore CDMO Capabilities &rarr;
              </Link>
            </div>

            {/* More Insights */}
            {relatedInsights.length > 0 && (
              <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
                <h3 className="text-sm font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <i className="fas fa-newspaper text-blue-600"></i> More Technical Insights
                </h3>
                <div className="space-y-3">
                  {relatedInsights.map((ins) => (
                    <Link 
                      key={ins.id} 
                      href={`/insights/${ins.slug || ins.id}`}
                      className="block text-xs font-semibold text-slate-800 hover:text-blue-600 transition-colors line-clamp-2"
                    >
                      • {ins.title}
                    </Link>
                  ))}
                </div>
              </div>
            )}

          </aside>
        </div>
      </div>
    </div>
  );
}
