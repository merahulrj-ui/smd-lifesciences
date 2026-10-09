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
      title: 'Cytokines, Sepsis Markers, Control Calibrators & Industrial Enzymes',
      icon: 'fas fa-flask-vial',
      items: BIOTECH_PRODUCTS.filter((p) =>
        ['Cytokines', 'Control Antibodies', 'Enzymes'].includes(p.category) ||
        ['Cytokines', 'Control Line / Calibrator', 'Bioprocessing Enzymes'].includes(p.target)
      ),
    },
  ];

  return (
    <section className="mt-14 pt-10 border-t border-slate-200">
      {/* 2. STATIC SSR HTML CRAWL MATRIX (Googlebot Crawl Guarantee) */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
        <div className="mb-6 pb-4 border-b border-slate-100">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[11px] font-bold uppercase tracking-wider text-orange-600 bg-orange-50 border border-orange-200/80 px-2 py-0.5 rounded-full">
              Full Biological Crawl Directory
            </span>
            <span className="text-[11px] text-slate-400">
              {BIOTECH_PRODUCTS.length} Validated Reagents &bull; 100% Crawlable SSR Links
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
            Complete IVD Raw Materials, Recombinant Antigens &amp; Monoclonal Antibodies Directory
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-3xl">
            Direct access to all {BIOTECH_PRODUCTS.length} validated IVD raw materials manufactured at our Electronic City Bangalore facility. Every reagent includes lot-specific SDS-PAGE, SEC-HPLC profiles, ELISA titer curves, and Certificate of Analysis (CoA).
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
