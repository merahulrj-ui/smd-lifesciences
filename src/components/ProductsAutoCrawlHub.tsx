import Link from 'next/link';
import { BIOTECH_PRODUCTS, BiotechProduct } from '@/data/products';

export default function ProductsAutoCrawlHub() {
  // Categorize 64 products for comprehensive search engine crawl indexing
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
      title: 'Cytokines, Control Calibrators & Industrial Enzymes',
      icon: 'fas fa-flask-vial',
      items: BIOTECH_PRODUCTS.filter((p) =>
        ['Cytokines', 'Control Line / Calibrator', 'Bioprocessing Enzymes'].includes(p.category)
      ),
    },
  ];

  return (
    <section className="mt-14 pt-10 border-t border-slate-200">
      
      {/* 1. AUTO-SCROLL TICKER / MARQUEE (Visual Auto-Scroll) */}
      <div className="mb-10 overflow-hidden bg-slate-900 rounded-2xl p-4 sm:p-5 text-white shadow-md relative">
        <div className="flex items-center justify-between mb-3 px-2">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
            <span className="text-xs font-bold uppercase tracking-wider text-orange-400">
              Live B2B Reagent Dispatch &bull; 64 Validated Products
            </span>
          </div>
          <span className="text-[11px] text-slate-400 hidden sm:inline">
            Direct Bangalore Cleanroom Supply &bull; 24-48h Express Delivery
          </span>
        </div>

        {/* Marquee Track */}
        <div className="relative w-full overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_40px,_black_calc(100%-40px),transparent_100%)]">
          <div className="flex gap-3 w-max animate-marquee hover:[animation-play-state:paused]">
            {/* Loop 1 */}
            {BIOTECH_PRODUCTS.map((prod) => (
              <Link
                key={prod.code}
                href={`/products/${prod.code}`}
                className="flex items-center gap-2 px-3.5 py-2 bg-slate-800/90 hover:bg-orange-600 rounded-xl border border-slate-700 hover:border-orange-500 transition-colors text-xs shrink-0 group"
              >
                <span className="font-mono font-bold text-orange-400 group-hover:text-white">
                  {prod.code}
                </span>
                <span className="text-slate-300 group-hover:text-white font-medium max-w-[200px] truncate">
                  {prod.name}
                </span>
                <span className="text-[10px] text-slate-400 group-hover:text-orange-100 bg-slate-900/60 px-1.5 py-0.5 rounded">
                  {prod.purity}
                </span>
              </Link>
            ))}

            {/* Loop 2 (Seamless infinite repetition) */}
            {BIOTECH_PRODUCTS.map((prod) => (
              <Link
                key={`${prod.code}-dup`}
                href={`/products/${prod.code}`}
                className="flex items-center gap-2 px-3.5 py-2 bg-slate-800/90 hover:bg-orange-600 rounded-xl border border-slate-700 hover:border-orange-500 transition-colors text-xs shrink-0 group"
              >
                <span className="font-mono font-bold text-orange-400 group-hover:text-white">
                  {prod.code}
                </span>
                <span className="text-slate-300 group-hover:text-white font-medium max-w-[200px] truncate">
                  {prod.name}
                </span>
                <span className="text-[10px] text-slate-400 group-hover:text-orange-100 bg-slate-900/60 px-1.5 py-0.5 rounded">
                  {prod.purity}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* 2. STATIC SSR HTML CRAWL MATRIX (Googlebot Crawl Guarantee) */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
        <div className="mb-6 pb-4 border-b border-slate-100">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[11px] font-bold uppercase tracking-wider text-orange-600 bg-orange-50 border border-orange-200/80 px-2 py-0.5 rounded-full">
              Full Biological Crawl Directory
            </span>
            <span className="text-[11px] text-slate-400">
              64 Reagents &bull; 100% Crawlable SSR Links
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
            Complete Diagnostic Reagent &amp; Monoclonal Antibody Directory
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-3xl">
            Direct access to all 64 validated IVD raw materials manufactured at our Electronic City Bangalore facility. Every reagent includes lot-specific SDS-PAGE, ELISA titer curves, and Certificate of Analysis (CoA).
          </p>
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
        </div>
      </div>
    </section>
  );
}
