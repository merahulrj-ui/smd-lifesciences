import Link from 'next/link';
import Image from 'next/image';

export default function BiotechFooter() {
  return (
    <footer className="bg-[#0b0f19] text-slate-300 pt-12 pb-24 lg:pb-12 border-t border-slate-800 font-sans">
      <div className="max-w-[1400px] mx-auto px-5 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 mb-10 md:mb-12">
        
        {/* Col 1: Biotech Branding */}
        <div className="flex flex-col" data-nosnippet>
          <div className="flex items-center gap-3 mb-4">
            <Image 
              src="/images/img_68ae826eb6cc47.12112340_logo.webp" 
              alt="SMD Life Sciences" 
              width={121} 
              height={69} 
              className="h-[46px] w-auto bg-white p-1.5 rounded-lg object-contain shadow-xs" 
            />
            <div>
              <span className="text-white font-extrabold text-[15px] tracking-tight block leading-tight">SMD LIFE SCIENCES</span>
              <span className="text-orange-400 text-[11px] font-semibold tracking-wider uppercase">Diagnostic Solutions</span>
            </div>
          </div>
          <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6">
            B2B manufacturer &amp; supplier of high-purity recombinant antigens, monoclonal antibodies, and custom CDMO services for IVD rapid test manufacturers. Technical association with Pentavalent Bio Sciences, Bangalore.
          </p>
          <div className="flex items-center gap-3">
            <a href="https://linkedin.com/company/smdmedicare" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-[#0A66C2] hover:scale-110 transition-transform text-sm">
              <i className="fab fa-linkedin-in" aria-hidden="true"></i>
            </a>
            <a href="https://x.com/smd_medicare" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-white hover:scale-110 transition-transform text-sm">
              <i className="fab fa-x-twitter" aria-hidden="true"></i>
            </a>
            <a href="https://facebook.com/smdmedicare" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-[#1877F2] hover:scale-110 transition-transform text-sm">
              <i className="fab fa-facebook-f" aria-hidden="true"></i>
            </a>
          </div>
        </div>

        {/* Col 2: Life Sciences Portal Links */}
        <div className="flex flex-col">
          <h3 className="text-white text-base font-bold mb-4 tracking-wide flex items-center gap-2">
            <i className="fas fa-flask text-orange-400 text-xs"></i> Life Sciences Portal
          </h3>
          <ul className="flex flex-col gap-2.5 text-xs sm:text-sm">
            <li>
              <Link href="/" className="text-slate-400 hover:text-orange-400 transition-colors flex items-center gap-2">
                <i className="fas fa-angle-right text-[0.7em]"></i> Division Home
              </Link>
            </li>
            <li>
              <Link href="/products" className="text-slate-400 hover:text-orange-400 transition-colors flex items-center gap-2">
                <i className="fas fa-angle-right text-[0.7em]"></i> 64+ Catalog Reagents Directory
              </Link>
            </li>
            <li>
              <Link href="/services" className="text-slate-400 hover:text-orange-400 transition-colors flex items-center gap-2">
                <i className="fas fa-angle-right text-[0.7em]"></i> Custom CDMO &amp; Hybridoma Services
              </Link>
            </li>
            <li>
              <Link href="/insights" className="text-slate-400 hover:text-orange-400 transition-colors flex items-center gap-2">
                <i className="fas fa-angle-right text-[0.7em]"></i> Scientific Insights &amp; Whitepapers
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-slate-400 hover:text-orange-400 transition-colors flex items-center gap-2">
                <i className="fas fa-angle-right text-[0.7em]"></i> About Bangalore R&amp;D Facility
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-slate-400 hover:text-orange-400 transition-colors flex items-center gap-2">
                <i className="fas fa-angle-right text-[0.7em]"></i> Request Reagent Samples &amp; CoA
              </Link>
            </li>
          </ul>
        </div>

        {/* Col 3: Biological Reagent Categories */}
        <div className="flex flex-col">
          <h3 className="text-white text-base font-bold mb-4 tracking-wide flex items-center gap-2">
            <i className="fas fa-layer-group text-orange-400 text-xs"></i> Reagent Categories
          </h3>
          <ul className="flex flex-col gap-2.5 text-xs sm:text-sm">
            <li>
              <Link href="/ivd-raw-materials" className="text-slate-400 hover:text-orange-400 transition-colors flex items-center gap-2">
                <i className="fas fa-angle-right text-[0.7em]"></i> IVD Raw Materials (India Hub)
              </Link>
            </li>
            <li>
              <Link href="/recombinant-antigens" className="text-slate-400 hover:text-orange-400 transition-colors flex items-center gap-2">
                <i className="fas fa-angle-right text-[0.7em]"></i> Recombinant Antigens (Bangalore)
              </Link>
            </li>
            <li>
              <Link href="/diagnostic-cdmo" className="text-slate-400 hover:text-orange-400 transition-colors flex items-center gap-2">
                <i className="fas fa-angle-right text-[0.7em]"></i> Diagnostic CDMO &amp; Assay Development
              </Link>
            </li>
            <li>
              <Link href="/products" className="text-slate-400 hover:text-orange-400 transition-colors flex items-center gap-2">
                <i className="fas fa-angle-right text-[0.7em]"></i> Monoclonal Antibodies &amp; Conjugates
              </Link>
            </li>
            <li>
              <Link href="/services" className="text-slate-400 hover:text-orange-400 transition-colors flex items-center gap-2">
                <i className="fas fa-angle-right text-[0.7em]"></i> Lateral Flow Pairing Optimization
              </Link>
            </li>
          </ul>
        </div>

        {/* Col 4: Scientific Coordination Desk */}
        <div className="flex flex-col">
          <h3 className="text-white text-base font-bold mb-4 tracking-wide flex items-center gap-2">
            <i className="fas fa-headset text-orange-400 text-xs"></i> Scientific Desk
          </h3>
          <div className="flex flex-col gap-3 text-xs sm:text-sm">
            <p className="flex items-start gap-3 text-slate-400">
              <i className="fab fa-whatsapp mt-1 text-[#25D366] text-base"></i>
              <a href="https://wa.me/919555422455" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400 transition-colors font-medium">
                +91 95554 22455 (WhatsApp Direct)
              </a>
            </p>
            <p className="flex items-start gap-3 text-slate-400 break-all">
              <i className="fas fa-envelope mt-1 text-orange-400"></i>
              <a href="mailto:info@smdmedicare.in" className="hover:text-orange-400 transition-colors">
                info@smdmedicare.in
              </a>
            </p>
            <p className="flex items-start gap-2.5 text-slate-400 text-xs leading-relaxed">
              <i className="fas fa-map-marker-alt mt-0.5 text-orange-400 shrink-0"></i>
              <span>R&amp;D Hub: Bangalore Bio-Cluster, Karnataka<br/>Corporate HQ: New Delhi &amp; Roorkee</span>
            </p>

            {/* Switch to Hospital Equipment */}
            <div className="mt-2 pt-3 border-t border-slate-800">
              <a 
                href="https://www.smdmedicare.in" 
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-slate-800/80 hover:bg-slate-700/80 text-slate-200 hover:text-white transition-all text-xs font-semibold border border-slate-700"
              >
                <i className="fas fa-hospital text-orange-400"></i> Looking for Hospital Equipment? Visit Main Site &rarr;
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-[1400px] mx-auto px-5 lg:px-8 border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-slate-500 text-xs sm:text-sm text-center md:text-left">
          &copy; {new Date().getFullYear()} SMD MEDICARE &ndash; Life Sciences &amp; Diagnostic Solutions Division. All Rights Reserved.
        </p>
        <ul className="flex flex-wrap gap-4 text-xs sm:text-sm text-slate-300">
          <li><Link href="/about" className="hover:text-orange-400 transition-colors">About Us</Link></li>
          <li><Link href="/contact" className="hover:text-orange-400 transition-colors">Contact</Link></li>
          <li><Link href="/shipping-policy" className="hover:text-orange-400 transition-colors">Cold Chain Shipping</Link></li>
          <li><Link href="/return-policy" className="hover:text-orange-400 transition-colors">Return Policy</Link></li>
          <li><Link href="/privacy-policy" className="hover:text-orange-400 transition-colors">Privacy Policy</Link></li>
          <li><Link href="/terms" className="hover:text-orange-400 transition-colors">Terms of Service</Link></li>
        </ul>
      </div>
    </footer>
  );
}
