import Link from 'next/link';
import { BIOTECH_PRODUCTS, BiotechProduct } from '@/data/products';
import { STATIC_INSIGHTS } from '@/data/insights';

export default function ProductsAutoCrawlHub() {
  // Categorize all 70 products for comprehensive search engine crawl indexing
  const categories: { title: string; icon: string; items: BiotechProduct[] }[] = [
    {
      title: 'Infectious Diseases & Blood Bank Reagents',
      icon: 'fas fa-shield-virus',
      items: BIOTECH_PRODUCTS.filter((p) =>
        ['HIV', 'Hepatitis B', 'Hepatitis C', 'Syphilis', 'Typhoid', 'Leptospira', 'Scrub Typhus'].includes(p.target)
      ),
    },
    {
      title: 'Vector-Borne & Parasitic Disease Antigens & Pairs',
      icon: 'fas fa-mosquito',
      items: BIOTECH_PRODUCTS.filter((p) =>
        ['Malaria', 'Dengue', 'Chikungunya'].includes(p.target)
      ),
    },
    {
      title: 'Cardiac Markers & Acute Care Monoclonals',
      icon: 'fas fa-heart-pulse',
      items: BIOTECH_PRODUCTS.filter((p) =>
        ['Cardiac Markers'].includes(p.category) || p.target.includes('Troponin')
      ),
    },
    {
      title: 'Respiratory & Fertility Hormones',
      icon: 'fas fa-lungs',
      items: BIOTECH_PRODUCTS.filter((p) =>
        ['Influenza', 'Fertility / Pregnancy'].includes(p.target)
      ),
    },
    {
      title: 'Cytokines, Sepsis Markers, Control Calibrators & Industrial Enzymes',
      icon: 'fas fa-flask-vial',
      items: BIOTECH_PRODUCTS.filter((p) =>
        ['Cytokines', 'Control Antibodies', 'Enzymes'].includes(p.category) ||
        ['Cytokines', 'Control Line / Calibrator', 'Bioprocessing Enzymes'].includes(p.target)
      ),
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-14 pt-10 pb-12 border-t border-slate-200">
      {/* STATIC SSR HTML CRAWL MATRIX (Googlebot Crawl Guarantee for all 70 SKUs + 12 Whitepapers + CDMO Hubs) */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
        <div className="mb-6 pb-4 border-b border-slate-100">
          <div className="flex flex-wrap items-center gap-2 mb-1">
            <span className="text-[11px] font-bold uppercase tracking-wider text-orange-600 bg-orange-50 border border-orange-200/80 px-2 py-0.5 rounded-full">
              Full Biological &amp; CDMO Crawl Directory
            </span>
            <span className="text-[11px] text-slate-400">
              {BIOTECH_PRODUCTS.length} Validated Reagents &bull; {STATIC_INSIGHTS.length} Technical Whitepapers &bull; 100% Crawlable SSR Links
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
            Complete Custom Monoclonal Antibody CDMO, IVD Raw Materials &amp; Whitepapers Directory
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-3xl">
            Direct access to our custom monoclonal antibody development services, technical wet-lab SOP whitepapers, and all {BIOTECH_PRODUCTS.length} validated IVD raw materials manufactured at our Electronic City Bangalore facility.
          </p>
        </div>

        {/* Core Commercial CDMO & Supplier Hubs */}
        <div className="mb-8 pb-6 border-b border-slate-100">
          <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2 mb-3">
            <i className="fas fa-dna text-orange-600 text-xs"></i>
            Custom Monoclonal Antibody Development &amp; Commercial IVD Sourcing Hubs
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2.5">
            <Link href="/services" className="p-3 rounded-xl border border-orange-200 bg-orange-50/40 hover:border-orange-500 transition-all text-xs font-bold text-slate-900 hover:text-orange-700">
              Custom Monoclonal Antibody Development &amp; Production &rarr;
            </Link>
            <Link href="/diagnostic-cdmo" className="p-3 rounded-xl border border-slate-200 bg-slate-50 hover:border-orange-400 transition-all text-xs font-bold text-slate-900 hover:text-orange-600">
              Diagnostic CDMO &amp; Hybridoma Pair Screening India &rarr;
            </Link>
            <Link href="/recombinant-antigens" className="p-3 rounded-xl border border-slate-200 bg-slate-50 hover:border-orange-400 transition-all text-xs font-bold text-slate-900 hover:text-orange-600">
              Bulk IVD Recombinant &amp; Native Antigens Supplier &rarr;
            </Link>
            <Link href="/ivd-raw-materials" className="p-3 rounded-xl border border-slate-200 bg-slate-50 hover:border-orange-400 transition-all text-xs font-bold text-slate-900 hover:text-orange-600">
              Diagnostic Antibody &amp; IVD Raw Materials Supplier &rarr;
            </Link>
            <Link href="/insights" className="p-3 rounded-xl border border-slate-200 bg-slate-50 hover:border-orange-400 transition-all text-xs font-bold text-slate-900 hover:text-orange-600">
              Biotech R&amp;D Whitepapers &amp; Wet-Lab Protocols &rarr;
            </Link>
          </div>
        </div>

        <div className="space-y-8">
          {categories.map((cat, idx) => (
            <div key={idx} className="space-y-3">
              <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                <i className={`${cat.icon} text-orange-600 text-xs`}></i>
                {cat.title}
                <span className="text-xs font-normal text-slate-500">
                  ({cat.items.length} Reagents)
                </span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                {cat.items.map((prod) => (
                  <Link
                    key={prod.code}
                    href={`/products/${prod.code}`}
                    className="p-3 rounded-xl border border-slate-100 hover:border-orange-400 bg-slate-50/60 hover:bg-orange-50/40 transition-all flex items-start justify-between gap-2 group"
                  >
                    <div>
                      <div className="flex items-center gap-1.5 mb-1">
                        <span className="font-mono font-bold text-[11px] text-orange-700 bg-white px-2 py-0.5 rounded border border-slate-200">
                          {prod.code}
                        </span>
                        <span className="text-[10px] text-emerald-700 font-semibold bg-emerald-50 px-1.5 py-0.5 rounded">
                          {prod.purity}
                        </span>
                      </div>
                      <h4 className="text-xs font-semibold text-slate-900 group-hover:text-orange-600 transition-colors line-clamp-1">
                        {prod.name}
                      </h4>
                      <p className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">
                        {prod.target} &bull; {prod.format}
                      </p>
                    </div>
                    <span className="text-slate-300 group-hover:text-orange-600 group-hover:translate-x-0.5 transition-all text-xs shrink-0 mt-1">
                      &rarr;
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          ))}

          {/* Technical Whitepapers & Wet-Lab SOPs */}
          <div className="pt-6 border-t border-slate-100 space-y-3">
            <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
              <i className="fas fa-book-medical text-orange-600 text-xs"></i>
              Technical Whitepapers, Antibody Engineering &amp; Wet-Lab Assay Protocols
              <span className="text-xs font-normal text-slate-500">
                ({STATIC_INSIGHTS.length} Guides)
              </span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
              {STATIC_INSIGHTS.map((article) => (
                <Link
                  key={article.slug}
                  href={`/insights/${article.slug}`}
                  className="p-3 rounded-xl border border-slate-100 hover:border-orange-400 bg-slate-50/60 hover:bg-orange-50/40 transition-all flex items-start justify-between gap-2 group"
                >
                  <div>
                    <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-orange-700 bg-orange-50 px-1.5 py-0.5 rounded mb-1">
                      {article.category}
                    </span>
                    <h4 className="text-xs font-semibold text-slate-900 group-hover:text-orange-600 transition-colors line-clamp-2">
                      {article.title}
                    </h4>
                  </div>
                  <span className="text-slate-300 group-hover:text-orange-600 group-hover:translate-x-0.5 transition-all text-xs shrink-0 mt-1">
                    &rarr;
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
