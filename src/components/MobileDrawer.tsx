"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useUI } from '@/context/UIContext';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';

export default function MobileDrawer() {
  const { isMobileDrawerOpen, setMobileDrawerOpen } = useUI();
  const pathname = usePathname();
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const sanitized = searchQuery.replace(/<[^>]*>?/gm, '').replace(/script/gi, '').slice(0, 100).trim();
    closeDrawer();
    if (sanitized) {
      router.push(`/products?q=${encodeURIComponent(sanitized)}`);
    } else {
      router.push('/products');
    }
  };

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

        {/* Search Bar in Drawer */}
        <div className="p-4 border-b border-slate-100 bg-slate-50/70">
          <form 
            onSubmit={handleSearch} 
            className="flex items-center bg-white rounded-xl py-1 pl-3.5 pr-1 border border-slate-200 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-100 transition-all shadow-sm"
          >
            <input 
              type="text" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value.replace(/[<>]/g, '').slice(0, 100))}
              placeholder="Search antibodies, reagents..." 
              maxLength={100}
              className="border-none bg-transparent outline-none flex-1 text-xs text-slate-700 pr-2" 
            />
            <button 
              type="submit" 
              aria-label="Search" 
              className="bg-blue-600 hover:bg-blue-700 text-white w-7 h-7 rounded-lg flex items-center justify-center cursor-pointer transition-colors shadow-sm shrink-0"
            >
              <i className="fas fa-search text-[10px]" aria-hidden="true"></i>
            </button>
          </form>
        </div>

        {/* Drawer Body Links - Exact match to Desktop Navbar */}
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
                <i className="fas fa-flask w-5 text-center text-blue-600"></i>
                <span>Products</span>
              </Link>
            </li>

            <li>
              <Link 
                href="/services" 
                onClick={closeDrawer} 
                className={getDrawerLinkClass(pathname?.startsWith('/services'))}
              >
                <i className="fas fa-microscope w-5 text-center text-blue-600"></i>
                <span>CDMO Services</span>
              </Link>
            </li>

            <li>
              <Link 
                href="/insights" 
                onClick={closeDrawer} 
                className={getDrawerLinkClass(pathname?.startsWith('/insights'))}
              >
                <i className="fas fa-newspaper w-5 text-center text-blue-600"></i>
                <span>Insights</span>
              </Link>
            </li>

            <li>
              <Link 
                href="/about" 
                onClick={closeDrawer} 
                className={getDrawerLinkClass(pathname === '/about')}
              >
                <i className="fas fa-building w-5 text-center text-blue-600"></i>
                <span>About Us</span>
              </Link>
            </li>

            <li>
              <Link 
                href="/contact" 
                onClick={closeDrawer} 
                className={getDrawerLinkClass(pathname === '/contact')}
              >
                <i className="fas fa-headset w-5 text-center text-blue-600"></i>
                <span>Contact</span>
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
