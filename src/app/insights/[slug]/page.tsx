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

  const desc = art.excerpt || `Technical whitepaper: ${art.title}. Advanced protocols and validation data for diagnostic manufacturers.`;

  return {
    title: `${art.title} | SMD Life Sciences Insights`,
    description: desc,
    alternates: {
      canonical: `https://lifesciences.smdmedicare.in/insights/${cleanSlug}`,
    },
    openGraph: {
      title: `${art.title} | SMD Life Sciences`,
      description: desc,
      url: `https://lifesciences.smdmedicare.in/insights/${cleanSlug}`,
      siteName: 'SMD Life Sciences',
      type: 'article',
      images: [art.blog_image || 'https://lifesciences.smdmedicare.in/icon-512.png'],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${art.title} | SMD Life Sciences`,
      description: desc,
      images: [art.blog_image || 'https://lifesciences.smdmedicare.in/icon-512.png'],
    },
  };
}

export async function generateStaticParams() {
  return STATIC_INSIGHTS.map((art) => ({
    slug: art.slug,
  }));
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
    relatedInsights = STATIC_INSIGHTS.filter((s) => s.slug !== cleanSlug).slice(0, 6);
  }

  // Dynamically match Biotech Products mentioned in the article content (e.g., PVBSP112), fallback to top catalog items
  const mentionedCodes = Array.from(new Set((article.content?.match(/PVBSP\d{3}/gi) || []).map((c: string) => c.toUpperCase())));
  const matchedFromArticle = BIOTECH_PRODUCTS.filter((p) => mentionedCodes.includes(p.code.toUpperCase()));
  const fallbackProducts = BIOTECH_PRODUCTS.filter((p) => !mentionedCodes.includes(p.code.toUpperCase()));
  const sampleReagents = [...matchedFromArticle, ...fallbackProducts].slice(0, 6);

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
        item: 'https://www.smdlifesciences.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Scientific Insights',
        item: 'https://www.smdlifesciences.com/insights',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: article.title,
        item: `https://www.smdlifesciences.com/insights/${article.slug || article.id}`,
      },
    ],
  };

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    '@id': `https://www.smdlifesciences.com/insights/${cleanSlug}#article`,
    headline: article.title,
    author: {
      '@type': 'Person',
      name: article.author_name || 'SMD Life Sciences R&D Team',
      jobTitle: article.author_title || 'Biotechnology & IVD Research Scientist',
      worksFor: {
        '@id': 'https://www.smdlifesciences.com/#organization',
      },
    },
    publisher: {
      '@id': 'https://www.smdlifesciences.com/#organization',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://www.smdlifesciences.com/insights/${cleanSlug}`,
    },
    datePublished: article.created_at,
    dateModified: article.updated_at || article.created_at,
    image: article.blog_image || 'https://www.smdlifesciences.com/icon-512.png',
    description: article.excerpt || article.title,
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
            <Link href="/" className="hover:text-orange-600 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/insights" className="hover:text-orange-600 transition-colors">Scientific Insights</Link>
            <span>/</span>
            <span className="text-slate-900 font-semibold truncate max-w-xs">{article.title}</span>
          </div>
        </div>
      </div>

      {/* Article Header & Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Whitepaper Content (8 Cols) */}
          <main className="lg:col-span-8 bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-sm h-fit">
            <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 mb-4 pb-4 border-b border-slate-100">
              <span className="px-2.5 py-0.5 rounded-full bg-orange-100 text-orange-800 font-semibold">
                Technical Whitepaper
              </span>
              <span>•</span>
              <span>Published: {formatDate(article.created_at)}</span>
              <span>•</span>
              <span>{article.read_time || '15 min technical read'}</span>
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
                  className="w-full h-auto object-cover max-h-[440px]"
                />
              </div>
            )}

            {/* Scientific Content Body */}
            <div className="scientific-article-body">
              {renderContent()}
            </div>

            {/* Scientific CTA Box */}
            <div className="mt-12 bg-gradient-to-br from-orange-50 to-amber-50 border border-orange-200 rounded-xl p-6 sm:p-8">
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Need Specific Lot CoA or Matched Antibody Pairs?
              </h3>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-6">
                Our Electronic City, Bangalore scientific coordination desk provides lot-specific analytical data, 1 mg–5 mg evaluation samples, and custom conjugation support for IVD kit manufacturers.
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
                  className="inline-flex items-center px-5 py-2.5 rounded-lg bg-white hover:bg-slate-50 text-orange-700 border border-orange-300 font-semibold text-xs transition-colors gap-2"
                >
                  <i className="fas fa-layer-group"></i> Browse Catalog Reagents
                </Link>
              </div>
            </div>
          </main>

          {/* Right Sidebar (4 Cols) - Stretches full height of grid so the inner sticky dock travels smoothly all the way to the bottom */}
          <aside className="lg:col-span-4 flex flex-col gap-6">
            
            {/* Card 1: Matched & Featured IVD Reagents from this Whitepaper */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                  <i className="fas fa-vial text-orange-600"></i>
                  {matchedFromArticle.length > 0 ? 'Matched Whitepaper Reagents' : 'Featured IVD Reagents'}
                </h3>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                  In-Stock
                </span>
              </div>
              <div className="space-y-2.5">
                {sampleReagents.map((reagent) => (
                  <Link 
                    key={reagent.code} 
                    href={`/products/${reagent.code}`}
                    className="block p-3 rounded-xl border border-slate-100 hover:border-orange-300 hover:bg-orange-50/40 transition-all group"
                  >
                    <div className="flex items-center justify-between text-xs mb-1">
                      <span className="font-mono text-[11px] font-bold text-orange-700">{reagent.code}</span>
                      <span className="text-[10px] bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded font-medium">{reagent.type}</span>
                    </div>
                    <h4 className="text-xs font-bold text-slate-800 line-clamp-1 group-hover:text-orange-600 transition-colors">
                      {reagent.name}
                    </h4>
                    <p className="text-[11px] text-slate-500 mt-0.5">Purity: {reagent.purity} • {reagent.host}</p>
                  </Link>
                ))}
              </div>
              <Link 
                href="/products" 
                className="mt-4 flex items-center justify-center w-full py-2.5 rounded-xl bg-slate-900 hover:bg-orange-600 text-white text-xs font-bold transition-colors"
              >
                Browse Complete Reagent Catalog &rarr;
              </Link>
            </div>

            {/* Card 2: Core Biomanufacturing Pillar Platforms */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
              <h3 className="text-sm font-bold text-slate-900 mb-3 flex items-center gap-2">
                <i className="fas fa-microscope text-orange-600"></i> Biomanufacturing Platforms
              </h3>
              <div className="grid grid-cols-1 gap-2.5">
                <Link href="/ivd-raw-materials" className="p-3 rounded-xl bg-slate-50 hover:bg-orange-50 border border-slate-200/80 hover:border-orange-300 transition-all flex items-center justify-between group">
                  <div>
                    <span className="text-xs font-bold text-slate-900 group-hover:text-orange-700 block">IVD Raw Materials Hub</span>
                    <span className="text-[11px] text-slate-500">Matched Capture &amp; Detector mAb Pairs</span>
                  </div>
                  <span className="text-orange-600 font-bold text-xs">&rarr;</span>
                </Link>
                <Link href="/recombinant-antigens" className="p-3 rounded-xl bg-slate-50 hover:bg-orange-50 border border-slate-200/80 hover:border-orange-300 transition-all flex items-center justify-between group">
                  <div>
                    <span className="text-xs font-bold text-slate-900 group-hover:text-orange-700 block">Recombinant Antigens</span>
                    <span className="text-[11px] text-slate-500">E. coli, Yeast &amp; HEK293/CHO Expression</span>
                  </div>
                  <span className="text-orange-600 font-bold text-xs">&rarr;</span>
                </Link>
                <Link href="/diagnostic-cdmo" className="p-3 rounded-xl bg-slate-50 hover:bg-orange-50 border border-slate-200/80 hover:border-orange-300 transition-all flex items-center justify-between group">
                  <div>
                    <span className="text-xs font-bold text-slate-900 group-hover:text-orange-700 block">Diagnostic CDMO India</span>
                    <span className="text-[11px] text-slate-500">16-Week Custom Assay Tech Transfer</span>
                  </div>
                  <span className="text-orange-600 font-bold text-xs">&rarr;</span>
                </Link>
              </div>
            </div>

            {/* Sticky Scroll-Following Dock: Eliminates empty space as user scrolls deep into the whitepaper */}
            <div className="lg:sticky lg:top-24 space-y-6">
              
              {/* Custom CDMO & Evaluation Sample Desk Card */}
              <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-orange-950 text-white rounded-2xl p-6 shadow-md border border-slate-800">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-orange-400 bg-orange-500/20 px-2.5 py-1 rounded-full border border-orange-500/30">
                    Electronic City, Bangalore Lab
                  </span>
                  <span className="text-[10px] text-emerald-400 font-semibold flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span> 24–48h Dispatch
                  </span>
                </div>
                <h3 className="text-base font-bold mt-2 mb-2">Request 1 mg–5 mg Evaluation Vials &amp; Lot CoA</h3>
                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  Testing antibodies or recombinant antigens on your lateral flow, FIA, or ELISA line? Request immediate evaluation aliquots with SEC-HPLC &amp; SDS-PAGE certificates.
                </p>
                <div className="space-y-2.5">
                  <a 
                    href={`https://wa.me/919555422455?text=${encodeURIComponent(`Hello SMD Life Sciences, I am reading "${article.title}" and would like to request evaluation sample vials and CoA.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full py-2.5 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs transition-colors gap-2 shadow-sm"
                  >
                    💬 Request Evaluation Samples on WhatsApp
                  </a>
                  <Link 
                    href="/services"
                    className="inline-flex items-center justify-center w-full py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs border border-white/15 transition-colors gap-2"
                  >
                    Explore Custom CDMO Capabilities &rarr;
                  </Link>
                </div>

                {/* Quality Benchmarks Mini-Grid */}
                <div className="grid grid-cols-3 gap-2 mt-5 pt-4 border-t border-white/10 text-center">
                  <div>
                    <span className="text-xs font-extrabold text-orange-400 block">&gt;95%</span>
                    <span className="text-[10px] text-slate-400">SEC-HPLC Purity</span>
                  </div>
                  <div>
                    <span className="text-xs font-extrabold text-orange-400 block">ISO 13485</span>
                    <span className="text-[10px] text-slate-400">Grade Facility</span>
                  </div>
                  <div>
                    <span className="text-xs font-extrabold text-orange-400 block">100% IP</span>
                    <span className="text-[10px] text-slate-400">Client Ownership</span>
                  </div>
                </div>
              </div>

              {/* Related Technical Insights List */}
              {relatedInsights.length > 0 && (
                <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                      <i className="fas fa-book-medical text-orange-600"></i> Related R&amp;D Whitepapers
                    </h3>
                    <Link href="/insights" className="text-[11px] font-bold text-orange-600 hover:underline">
                      View All
                    </Link>
                  </div>
                  <div className="space-y-3">
                    {relatedInsights.slice(0, 5).map((ins) => (
                      <Link 
                        key={ins.id} 
                        href={`/insights/${ins.slug || ins.id}`}
                        className="block p-3 rounded-xl bg-slate-50/80 hover:bg-orange-50/60 border border-slate-200/70 hover:border-orange-300 transition-all group"
                      >
                        <span className="text-[10px] font-bold text-orange-600 uppercase tracking-wider block mb-0.5">
                          {ins.read_time || '15 min read'}
                        </span>
                        <h4 className="text-xs font-bold text-slate-800 group-hover:text-orange-700 transition-colors line-clamp-2 leading-snug">
                          {ins.title}
                        </h4>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

            </div>

          </aside>
        </div>

        {/* Full-Width Bottom Section: Related Technical Whitepapers & SOPs Grid */}
        {relatedInsights.length > 0 && (
          <section className="mt-14 pt-10 border-t border-slate-200">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-orange-600 block mb-1">
                  Continue Reading • R&amp;D Knowledge Base
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  More IVD Manufacturing Whitepapers &amp; Formulation SOPs
                </h2>
              </div>
              <Link
                href="/insights"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-slate-300 hover:border-orange-500 text-xs font-bold text-slate-800 hover:text-orange-600 transition-all self-start sm:self-auto"
              >
                View All Whitepapers &rarr;
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedInsights.slice(0, 3).map((item) => (
                <div
                  key={item.id}
                  className="relative group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md hover:border-orange-300 transition-all flex flex-col"
                >
                  <Link
                    href={`/insights/${item.slug || item.id}`}
                    className="absolute inset-0 z-10"
                    aria-label={item.title}
                  />
                  {item.blog_image && (
                    <div className="h-44 overflow-hidden bg-slate-100 border-b border-slate-100">
                      <img
                        src={item.blog_image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  )}
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <span className="inline-block px-2.5 py-0.5 rounded-full bg-orange-50 text-orange-700 text-[11px] font-bold mb-2">
                        {item.read_time || '15 min read'}
                      </span>
                      <h3 className="text-sm font-bold text-slate-900 group-hover:text-orange-600 transition-colors line-clamp-2 mb-2">
                        {item.title}
                      </h3>
                    </div>
                    <span className="text-xs font-bold text-orange-600 mt-2 inline-flex items-center gap-1">
                      Read Technical SOP &rarr;
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
