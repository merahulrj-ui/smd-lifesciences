"use client";

import Link from 'next/link';
import { useUI } from '@/context/UIContext';
import { usePathname } from 'next/navigation';

export default function BottomNav() {
  const { setMobileDrawerOpen, setSearchOpen } = useUI();
  const pathname = usePathname();

  const openDrawer = (e: React.MouseEvent) => {
    e.preventDefault();
    setMobileDrawerOpen(true);
  };

  const isActive = (path: string) => {
    if (path === '/') return pathname === '/';
    return pathname?.startsWith(path);
  };

  return (
    <nav
      className="lg:hidden bg-white/95 backdrop-blur-md border-t border-slate-200/90 shadow-[0_-4px_20px_rgba(0,0,0,0.06)] select-none"
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        width: '100%',
        height: '66px',
        zIndex: 9990,
        transform: 'translateZ(0)',
        WebkitTapHighlightColor: 'transparent',
      }}
      aria-label="Mobile Bottom Navigation"
    >
      <div className="grid grid-cols-5 h-full w-full max-w-md mx-auto items-center px-1">
        {/* 1. Home */}
        <Link
          href="/"
          className={`flex flex-col items-center justify-center h-full py-1 group transition-colors ${
            isActive('/') ? 'text-blue-600' : 'text-slate-500 hover:text-blue-600'
          }`}
        >
          <div
            className={`w-11 h-7 rounded-full flex items-center justify-center transition-all ${
              isActive('/') ? 'bg-blue-50 text-blue-600' : ''
            }`}
          >
            <i className="fas fa-home text-[19px]"></i>
          </div>
          <span
            className={`text-[11px] tracking-tight leading-none mt-1 whitespace-nowrap ${
              isActive('/') ? 'font-bold text-blue-600' : 'font-medium'
            }`}
          >
            Home
          </span>
        </Link>

        {/* 2. Products */}
        <Link
          href="/products"
          className={`flex flex-col items-center justify-center h-full py-1 group transition-colors ${
            isActive('/products') ? 'text-blue-600' : 'text-slate-500 hover:text-blue-600'
          }`}
        >
          <div
            className={`w-11 h-7 rounded-full flex items-center justify-center transition-all ${
              isActive('/products') ? 'bg-blue-50 text-blue-600' : ''
            }`}
          >
            <i className="fas fa-flask text-[18px]"></i>
          </div>
          <span
            className={`text-[11px] tracking-tight leading-none mt-1 whitespace-nowrap ${
              isActive('/products') ? 'font-bold text-blue-600' : 'font-medium'
            }`}
          >
            Products
          </span>
        </Link>

        {/* 3. Center Action Button: Search FAB */}
        <div className="flex flex-col items-center justify-center h-full relative">
          <button
            onClick={() => setSearchOpen(true)}
            className="absolute -top-4 w-[52px] h-[52px] rounded-full bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center shadow-lg shadow-blue-500/30 border-4 border-white active:scale-95 transition-transform outline-none cursor-pointer"
            aria-label="Search Catalog"
          >
            <i className="fas fa-search text-[19px]"></i>
          </button>
          <span className="text-[10px] font-semibold text-slate-500 tracking-tight leading-none mt-7 whitespace-nowrap">
            Search
          </span>
        </div>

        {/* 4. CDMO Services */}
        <Link
          href="/services"
          className={`flex flex-col items-center justify-center h-full py-1 group transition-colors ${
            isActive('/services') ? 'text-blue-600' : 'text-slate-500 hover:text-blue-600'
          }`}
        >
          <div
            className={`w-11 h-7 rounded-full flex items-center justify-center transition-all ${
              isActive('/services') ? 'bg-blue-50 text-blue-600' : ''
            }`}
          >
            <i className="fas fa-microscope text-[18px]"></i>
          </div>
          <span
            className={`text-[11px] tracking-tight leading-none mt-1 whitespace-nowrap ${
              isActive('/services') ? 'font-bold text-blue-600' : 'font-medium'
            }`}
          >
            Services
          </span>
        </Link>

        {/* 5. Menu Drawer Trigger */}
        <button
          onClick={openDrawer}
          className="flex flex-col items-center justify-center h-full py-1 text-slate-500 hover:text-blue-600 group outline-none cursor-pointer"
          aria-label="Open Navigation Menu"
        >
          <div className="w-11 h-7 rounded-full flex items-center justify-center group-active:scale-95 transition-transform">
            <i className="fas fa-bars text-[19px]"></i>
          </div>
          <span className="text-[11px] font-medium tracking-tight leading-none mt-1 whitespace-nowrap">
            Menu
          </span>
        </button>
      </div>
    </nav>
  );
}
