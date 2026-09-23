'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';
import { useUI } from '@/context/UIContext';

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const { setMobileDrawerOpen } = useUI();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const sanitized = searchQuery.replace(/<[^>]*>?/gm, '').replace(/script/gi, '').slice(0, 100).trim();
    if (sanitized) {
      router.push(`/products?q=${encodeURIComponent(sanitized)}`);
    } else {
      router.push('/products');
    }
  };

  const getNavLinkClass = (active: boolean) =>
    `relative text-[0.95rem] font-medium px-3.5 py-2 transition-colors ${
      active 
        ? 'text-blue-600 after:absolute after:bottom-[-6px] after:left-2.5 after:right-2.5 after:h-[2.5px] after:bg-blue-600 after:rounded-full font-bold' 
        : 'text-slate-700 hover:text-blue-600 hover:bg-slate-50 rounded-lg'
    }`;

  return (
    <header 
      className="bg-white border-b border-slate-200 shadow-[0_2px_10px_rgba(0,0,0,0.04)] select-none"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        width: '100%',
        height: '76px',
        zIndex: 9995,
        transform: 'translateZ(0)',
        WebkitTapHighlightColor: 'transparent',
      }}
    >
      <div className="max-w-[1400px] mx-auto h-full flex justify-between items-center px-4 sm:px-6 lg:px-8">
        
        {/* Left: Logo */}
        <div className="flex items-center shrink-0" data-nosnippet>
          <Link href="/">
            <Image 
              src="/images/img_68ae826eb6cc47.12112340_logo.webp" 
              alt="SMD Life Sciences" 
              width={121} 
              height={69} 
              className="h-[52px] w-auto transition-transform duration-300 md:hover:scale-[1.03]" 
              priority 
            />
          </Link>
        </div>

        {/* Center: Search Bar */}
        <div className="hidden lg:flex flex-1 max-w-[420px] mx-8">
          <form 
            onSubmit={handleSearch} 
            className="flex items-center bg-slate-50 rounded-full py-1 pl-4 pr-1.5 border border-slate-300 transition-all duration-300 w-full hover:border-blue-400 focus-within:border-blue-500 focus-within:bg-white focus-within:ring-2 focus-within:ring-blue-100" 
          >
            <input 
              type="text" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value.replace(/[<>]/g, '').slice(0, 100))}
              placeholder="Search antibodies, antigens, reagents..." 
              maxLength={100}
              className="border-none bg-transparent outline-none flex-1 text-[0.95rem] text-slate-700 pr-2" 
            />
            <button 
              type="submit" 
              aria-label="Search" 
              className="bg-blue-600 hover:bg-blue-700 text-white border-none w-[38px] h-[38px] rounded-full flex items-center justify-center cursor-pointer transition-colors shadow-sm shrink-0"
            >
              <i className="fas fa-search text-xs" aria-hidden="true"></i>
            </button>
          </form>
        </div>

        {/* Center-Right: Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1">
          <Link href="/" className={getNavLinkClass(pathname === '/')}>
            Home
          </Link>
          <Link href="/products" className={getNavLinkClass(pathname?.startsWith('/products'))}>
            Products
          </Link>
          <Link href="/services" className={getNavLinkClass(pathname?.startsWith('/services'))}>
            CDMO Services
          </Link>
          <Link href="/insights" className={getNavLinkClass(pathname?.startsWith('/insights'))}>
            Insights
          </Link>
          <Link href="/about" className={getNavLinkClass(pathname === '/about')}>
            About Us
          </Link>
          <Link href="/contact" className={getNavLinkClass(pathname === '/contact')}>
            Contact
          </Link>
        </nav>

        {/* Far Right: Blue Pill Action Button & Mobile Hamburger Toggle */}
        <div className="flex items-center gap-3 ml-4 shrink-0">
          <a 
            href="https://www.smdmedicare.in"
            className="hidden sm:inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-[0.9rem] px-5 py-2.5 rounded-full transition-all shadow-sm hover:shadow-md"
          >
            <i className="fas fa-hospital text-sm"></i>
            <span>Hospital Store &rarr;</span>
          </a>

          {/* Mobile Hamburger Toggle */}
          <button 
            onClick={() => setMobileDrawerOpen(true)}
            className="lg:hidden text-slate-700 hover:text-blue-600 p-2 text-2xl cursor-pointer transition-colors flex items-center justify-center"
            aria-label="Open Navigation Drawer"
          >
            <i className="fas fa-bars"></i>
          </button>
        </div>
      </div>
    </header>
  );
}
