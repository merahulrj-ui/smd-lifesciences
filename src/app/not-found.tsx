import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] bg-slate-50 flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl w-full text-center">
        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-red-100 text-red-700 uppercase tracking-wider mb-4">
          404 &bull; Page Not Found
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
          Reagent or Page Not Located
        </h1>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-8 max-w-lg mx-auto">
          The reagent specification, technical whitepaper, or division link you requested may have been relocated or updated. Please navigate using our core directories below:
        </p>

        {/* Quick Recovery Pathways */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left mb-8 max-w-lg mx-auto">
          <Link
            href="/products"
            className="p-4 rounded-xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-xs transition-all flex items-center gap-3"
          >
            <div className="w-9 h-9 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center shrink-0 text-sm">
              <i className="fas fa-layer-group"></i>
            </div>
            <div>
              <div className="font-bold text-slate-900 text-xs sm:text-sm">64+ Catalog Reagents</div>
              <div className="text-slate-500 text-[11px]">Recombinant antigens &amp; antibodies</div>
            </div>
          </Link>

          <Link
            href="/ivd-raw-materials"
            className="p-4 rounded-xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-xs transition-all flex items-center gap-3"
          >
            <div className="w-9 h-9 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 text-sm">
              <i className="fas fa-microscope"></i>
            </div>
            <div>
              <div className="font-bold text-slate-900 text-xs sm:text-sm">IVD Raw Materials India</div>
              <div className="text-slate-500 text-[11px]">Domestic bulk supply hub</div>
            </div>
          </Link>

          <Link
            href="/recombinant-antigens"
            className="p-4 rounded-xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-xs transition-all flex items-center gap-3"
          >
            <div className="w-9 h-9 rounded-lg bg-purple-100 text-purple-600 flex items-center justify-center shrink-0 text-sm">
              <i className="fas fa-dna"></i>
            </div>
            <div>
              <div className="font-bold text-slate-900 text-xs sm:text-sm">Recombinant Antigens</div>
              <div className="text-slate-500 text-[11px]">Bangalore production facility</div>
            </div>
          </Link>

          <Link
            href="/diagnostic-cdmo"
            className="p-4 rounded-xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-xs transition-all flex items-center gap-3"
          >
            <div className="w-9 h-9 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center shrink-0 text-sm">
              <i className="fas fa-flask"></i>
            </div>
            <div>
              <div className="font-bold text-slate-900 text-xs sm:text-sm">Diagnostic CDMO</div>
              <div className="text-slate-500 text-[11px]">Rapid test &amp; ELISA development</div>
            </div>
          </Link>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/"
            className="px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs transition-colors"
          >
            Return to Homepage
          </Link>
          <a
            href="https://wa.me/919555422455?text=Hello%20SMD%20Medicare,%20I%20am%20looking%20for%20a%20specific%20reagent%20on%20your%20website."
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs transition-colors"
          >
            💬 WhatsApp Support
          </a>
        </div>
      </div>
    </div>
  );
}
