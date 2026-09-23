"use client";

import { useUI } from '@/context/UIContext';
import { useRouter } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';

const POPULAR_SEARCHES = [
  'Dengue NS1',
  'Troponin I',
  'HIV 1',
  'Malaria Pf/Pv',
  'Colloidal Gold',
  'HBsAg',
  'Goat anti-Mouse IgG',
  'CK-MB'
];

export default function SearchModal() {
  const { isSearchOpen, setSearchOpen } = useUI();
  const [query, setQuery] = useState('');
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isSearchOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isSearchOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isSearchOpen) {
        setSearchOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isSearchOpen, setSearchOpen]);

  if (!isSearchOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const sanitized = query.replace(/<[^>]*>?/gm, '').replace(/script/gi, '').slice(0, 100).trim();
    setSearchOpen(false);
    if (sanitized) {
      router.push(`/products?q=${encodeURIComponent(sanitized)}`);
    } else {
      router.push('/products');
    }
  };

  const handleChipClick = (term: string) => {
    setSearchOpen(false);
    router.push(`/products?q=${encodeURIComponent(term)}`);
  };

  return (
    <div 
      className="fixed inset-0 z-[99999] flex items-start justify-center pt-12 md:pt-24 px-4 bg-slate-950/70 backdrop-blur-md animate-in fade-in duration-200"
      onClick={() => setSearchOpen(false)}
      role="dialog"
      aria-modal="true"
      aria-label="Reagent & Antibody Search"
    >
      <div 
        className="w-full max-w-2xl bg-white rounded-2xl md:rounded-3xl shadow-2xl border border-slate-200 overflow-hidden transform transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with Search Input */}
        <form onSubmit={handleSubmit} className="p-4 md:p-5 flex items-center gap-3 border-b border-slate-100">
          <i className="fas fa-search text-blue-600 text-lg md:text-xl pl-2"></i>
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value.replace(/[<>]/g, '').slice(0, 100))}
            placeholder="Search 64+ antibodies, antigens, reagents..."
            maxLength={100}
            className="flex-1 bg-transparent border-none outline-none text-slate-800 text-base md:text-lg placeholder:text-slate-400 font-medium"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery('')}
              className="w-7 h-7 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 flex items-center justify-center cursor-pointer text-xs transition-colors"
              aria-label="Clear Search Input"
            >
              <i className="fas fa-times"></i>
            </button>
          )}
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs md:text-sm px-4 py-2.5 rounded-xl transition-colors shadow-sm shrink-0"
          >
            Search
          </button>
          <button
            type="button"
            onClick={() => setSearchOpen(false)}
            className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center cursor-pointer transition-colors shrink-0 ml-1"
            aria-label="Close Search Modal"
          >
            <i className="fas fa-times text-sm"></i>
          </button>
        </form>

        {/* Quick Suggestion Chips */}
        <div className="p-4 md:p-5 bg-slate-50/70">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
            <i className="fas fa-fire text-amber-500"></i> Popular IVD Reagents
          </p>
          <div className="flex flex-wrap gap-2">
            {POPULAR_SEARCHES.map((term) => (
              <button
                key={term}
                type="button"
                onClick={() => handleChipClick(term)}
                className="text-xs md:text-sm font-medium px-3.5 py-1.5 rounded-full bg-white hover:bg-blue-50 text-slate-700 hover:text-blue-600 border border-slate-200 hover:border-blue-300 transition-all shadow-xs cursor-pointer flex items-center gap-1.5 active:scale-95"
              >
                <i className="fas fa-arrow-trend-up text-[10px] text-blue-500"></i>
                <span>{term}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Footer info */}
        <div className="px-5 py-3 border-t border-slate-100 text-[11px] text-slate-400 flex items-center justify-between">
          <span>Press <strong>ESC</strong> to close</span>
          <span>64+ Validated Diagnostic Reagents</span>
        </div>
      </div>
    </div>
  );
}
