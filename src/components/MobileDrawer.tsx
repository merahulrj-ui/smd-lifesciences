"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useUI } from '@/context/UIContext';
import { usePathname } from 'next/navigation';

export default function MobileDrawer() {
  const { isMobileDrawerOpen, setMobileDrawerOpen } = useUI();
  const pathname = usePathname();

  const closeDrawer = () => {
    setMobileDrawerOpen(false);
  };

  const getDrawerLinkClass = (active: boolean) =>
    `flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-colors ${
      active
        ? 'bg-blue-50 text-blue-600 font-bold'
        : 'text-slate-700 hover:bg-slate-50 hover:text-blue-600'
    }`;

  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[9998] transition-opacity duration-300 ${
          isMobileDrawerOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`} 
        onClick={closeDrawer}
        aria-hidden="true"
      ></div>
      
      {/* Slide-in Drawer */}
      <aside 
        className={`fixed top-0 left-0 h-full w-[310px] bg-white z-[9999] shadow-2xl flex flex-col transform transition-transform duration-300 ease-in-out ${
          isMobileDrawerOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        aria-label="Mobile Navigation"
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between p-5 border-b border-slate-200" data-nosnippet>
          <Link href="/" onClick={closeDrawer}>
            <Image 
              src="/images/img_68ae826eb6cc47.12112340_logo.webp" 
              alt="SMD Life Sciences" 
              width={121} 
              height={69} 
              className="h-[42px] w-auto object-contain" 
            />
          </Link>
          <button 
            className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 hover:text-slate-800 transition-colors cursor-pointer" 
            onClick={closeDrawer}
            aria-label="Close Navigation Menu"
          >
            <i className="fas fa-times text-base"></i>
          </button>
        </div>

        {/* Drawer Body Links */}
        <div className="flex-1 overflow-y-auto p-5 custom-scrollbar">
          <ul className="flex flex-col gap-1.5 list-none m-0 p-0">
            <li>
              <Link 
                href="/" 
                onClick={closeDrawer} 
                className={getDrawerLinkClass(pathname === '/')}
              >
                <i className="fas fa-home w-5 text-center text-blue-600"></i>
                <span>Home</span>
              </Link>
            </li>

            <li>
              <Link 
                href="/products" 
                onClick={closeDrawer} 
                className={getDrawerLinkClass(pathname?.startsWith('/products'))}
              >
                <i className="fas fa-vial w-5 text-center text-emerald-600"></i>
                <div className="flex-1 flex items-center justify-between">
                  <span>64+ Reagents Catalog</span>
                  <span className="text-[10px] font-bold bg-emerald-100 text-emerald-800 px-1.5 py-0.5 rounded">
                    IVD
                  </span>
                </div>
              </Link>
            </li>

            <li>
              <Link 
                href="/services" 
                onClick={closeDrawer} 
                className={getDrawerLinkClass(pathname?.startsWith('/services'))}
              >
                <i className="fas fa-flask w-5 text-center text-orange-600"></i>
                <div className="flex-1 flex items-center justify-between">
                  <span>CDMO Services &amp; R&amp;D</span>
                  <span className="text-[10px] font-bold bg-orange-100 text-orange-800 px-1.5 py-0.5 rounded">
                    mAb
                  </span>
                </div>
              </Link>
            </li>

            <li>
              <Link 
                href="/insights" 
                onClick={closeDrawer} 
                className={getDrawerLinkClass(pathname?.startsWith('/insights'))}
              >
                <i className="fas fa-newspaper w-5 text-center text-indigo-600"></i>
                <span>Insights &amp; Whitepapers</span>
              </Link>
            </li>

            <li>
              <Link 
                href="/about" 
                onClick={closeDrawer} 
                className={getDrawerLinkClass(pathname === '/about')}
              >
                <i className="fas fa-building-columns w-5 text-center text-teal-600"></i>
                <span>Bangalore R&amp;D Facility</span>
              </Link>
            </li>

            <li>
              <Link 
                href="/contact" 
                onClick={closeDrawer} 
                className={getDrawerLinkClass(pathname === '/contact')}
              >
                <i className="fas fa-headset w-5 text-center text-purple-600"></i>
                <span>Contact Technical Desk</span>
              </Link>
            </li>
          </ul>

          {/* Switch to Hospital Store CTA Button */}
          <div className="mt-8">
            <a 
              href="https://www.smdmedicare.in"
              className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold px-5 py-3.5 rounded-xl shadow-[0_4px_15px_rgba(37,99,235,0.3)] hover:shadow-[0_6px_20px_rgba(37,99,235,0.4)] transition-all text-xs" 
              onClick={closeDrawer}
            >
              <i className="fas fa-hospital text-sm"></i>
              <span>Hospital Store &rarr;</span>
            </a>
          </div>

          {/* Quick Assistance Card */}
          <div className="mt-6 bg-slate-50 border border-slate-200 rounded-2xl p-4 text-center">
            <p className="text-slate-500 font-semibold text-xs mb-2 flex items-center justify-center gap-1.5">
              <i className="fab fa-whatsapp text-emerald-600"></i> Scientific Desk Hotline
            </p>
            <a 
              href="tel:+919555422455" 
              className="text-lg font-bold text-slate-800 hover:text-blue-600 block mb-1"
            >
              +91 95554 22455
            </a>
            <p className="text-slate-500 text-xs flex items-center justify-center gap-1">
              <i className="fas fa-envelope text-slate-400"></i> info@smdmedicare.in
            </p>
          </div>
        </div>
      </aside>
    </>
  );
}
