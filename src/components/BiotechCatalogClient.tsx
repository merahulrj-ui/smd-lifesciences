'use client';

import { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { BiotechProduct } from '@/data/products';

interface Props {
  products: BiotechProduct[];
}

const ITEMS_PER_PAGE = 15;

export default function BiotechCatalogClient({ products }: Props) {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get('q') || '';
  const [searchTerm, setSearchTerm] = useState(initialQuery);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedType, setSelectedType] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);

  // Sync search term when URL query changes (e.g. from SearchModal)
  useEffect(() => {
    const q = searchParams.get('q') || '';
    if (q !== searchTerm) {
      setSearchTerm(q);
      setCurrentPage(1);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  // Category counts
  const categories = useMemo(() => {
    const map = new Map<string, number>();
    products.forEach((p) => {
      map.set(p.category, (map.get(p.category) || 0) + 1);
    });
    return [
      { name: 'All', count: products.length },
      ...Array.from(map.entries()).map(([name, count]) => ({ name, count })),
    ];
  }, [products]);

  // Product types
  const productTypes = useMemo(() => {
    const types = Array.from(new Set(products.map((p) => p.type).filter(Boolean)));
    return ['All', ...types];
  }, [products]);

  // Filtered Products
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
      const matchesType = selectedType === 'All' || product.type === selectedType;

      const searchLower = searchTerm.toLowerCase().trim();
      const matchesSearch =
        !searchLower ||
        product.name.toLowerCase().includes(searchLower) ||
        product.code.toLowerCase().includes(searchLower) ||
        product.target.toLowerCase().includes(searchLower) ||
        product.type.toLowerCase().includes(searchLower) ||
        product.host.toLowerCase().includes(searchLower) ||
        product.applications.toLowerCase().includes(searchLower);

      return matchesCategory && matchesType && matchesSearch;
    });
  }, [products, selectedCategory, selectedType, searchTerm]);

  // Total pages
  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE) || 1;

  // Current page items
  const paginatedProducts = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredProducts.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredProducts, currentPage]);

  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
    setCurrentPage(1);
  };

  const handleCategoryChange = (cat: string) => {
    setSelectedCategory(cat);
    setCurrentPage(1);
  };

  const handleTypeChange = (type: string) => {
    setSelectedType(type);
    setCurrentPage(1);
  };

  return (
    <div className="space-y-8 overflow-x-hidden">
      {/* Search & Filter Terminal Bar */}
      <div className="bg-white rounded-2xl border border-slate-200/90 p-5 sm:p-6 shadow-sm">
        
        {/* Top Controls: Search + Type Selector + Count */}
        <div className="flex flex-col lg:flex-row gap-4 items-stretch lg:items-center justify-between">
          
          {/* Search Box with Clear Button */}
          <div className="relative flex-1 max-w-lg">
            <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400 text-xs">
              <i className="fas fa-search"></i>
            </span>
            <input 
              type="text" 
              value={searchTerm}
              onChange={(e) => handleSearchChange(e.target.value)}
              placeholder="Search by code (e.g. PVBSP101), target, name, or host..."
              className="w-full pl-9 pr-9 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:border-blue-600 focus:ring-2 focus:ring-blue-100 focus:outline-none transition-colors"
            />
            {searchTerm && (
              <button
                onClick={() => handleSearchChange('')}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600 text-xs cursor-pointer"
                title="Clear search"
              >
                <i className="fas fa-times-circle"></i>
              </button>
            )}
          </div>

          {/* Quick Type Dropdown & Counter */}
          <div className="flex items-center gap-3 justify-between sm:justify-end min-w-0">
            <div className="flex items-center gap-2 text-xs min-w-0">
              <span className="text-slate-500 font-medium hidden sm:inline">Type:</span>
              <select
                value={selectedType}
                onChange={(e) => handleTypeChange(e.target.value)}
                className="px-3 py-2 rounded-xl border border-slate-300 bg-white text-xs font-semibold text-slate-700 focus:border-blue-600 focus:outline-none cursor-pointer min-w-0"
              >
                {productTypes.map((type) => (
                  <option key={type} value={type}>
                    {type === 'All' ? 'All Reagent Types' : type}
                  </option>
                ))}
              </select>
            </div>

            <div className="text-xs font-semibold text-slate-600 bg-slate-100 px-3 py-1.5 rounded-xl shrink-0 whitespace-nowrap">
              {filteredProducts.length} / {products.length}
            </div>
          </div>

        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mt-4 pt-4 border-t border-slate-100">
          <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mr-1">
            Category:
          </span>
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.name;
            return (
              <button
                key={cat.name}
                onClick={() => handleCategoryChange(cat.name)}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  isActive 
                    ? 'bg-blue-600 text-white shadow-sm' 
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                }`}
              >
                <span>{cat.name}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                  isActive ? 'bg-blue-700 text-blue-100' : 'bg-slate-200 text-slate-600'
                }`}>
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>

      </div>

      {/* Products Grid */}
      {filteredProducts.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-3xl border border-slate-200 shadow-sm p-8">
          <div className="w-14 h-14 rounded-full bg-slate-100 text-slate-400 mx-auto flex items-center justify-center text-2xl mb-3">
            <i className="fas fa-flask"></i>
          </div>
          <h3 className="text-base font-bold text-slate-900">No matching biological reagents found</h3>
          <p className="text-xs text-slate-500 mt-1 max-w-md mx-auto leading-relaxed">
            We didn&apos;t find reagents matching &ldquo;{searchTerm}&rdquo;. We also develop custom antibodies and express recombinant targets on contract.
          </p>
          <div className="flex items-center justify-center gap-3 mt-5">
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('All');
                setSelectedType('All');
                setCurrentPage(1);
              }}
              className="px-4 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition-colors cursor-pointer"
            >
              Reset Filters
            </button>
            <Link 
              href="/services"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-orange-600 hover:bg-orange-700 text-white text-xs font-bold transition-colors shadow-sm"
            >
              <i className="fas fa-dna text-[11px]"></i> Custom Development RFQ ➔
            </Link>
          </div>
        </div>
      ) : (
        <>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {paginatedProducts.map((p) => (
              <div 
                key={p.code}
                className="bg-white border border-slate-200/90 rounded-2xl p-6 hover:border-blue-400 hover:shadow-lg transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Top Bar: Code & Purity */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono font-extrabold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-200/60">
                      {p.code}
                    </span>
                    <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200/60 px-2 py-0.5 rounded-full flex items-center gap-1">
                      <i className="fas fa-check-circle text-[10px]"></i>
                      {p.purity}
                    </span>
                  </div>

                  {/* Product Name */}
                  <h3 className="text-base font-extrabold text-slate-900 leading-snug mb-2 group-hover:text-blue-600 transition-colors">
                    <Link href={`/products/${p.code}`}>
                      {p.name}
                    </Link>
                  </h3>

                  {/* Short Description */}
                  <p className="text-xs text-slate-500 line-clamp-2 mb-4 leading-relaxed">
                    {p.description}
                  </p>

                  {/* Structured Specifications Box */}
                  <div className="space-y-1.5 text-xs text-slate-700 bg-slate-50/80 border border-slate-100 p-3 rounded-xl mb-4 font-medium">
                    <div className="flex justify-between">
                      <span className="text-slate-400 text-[11px]">Target:</span>
                      <span className="font-bold text-slate-900">{p.target}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400 text-[11px]">Host / System:</span>
                      <span className="font-semibold text-slate-800">{p.host}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400 text-[11px]">Type / Format:</span>
                      <span className="font-semibold text-slate-800">{p.type}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-400 text-[11px]">Application:</span>
                      <span className="font-medium text-slate-600 truncate max-w-[170px]" title={p.applications}>
                        {p.applications}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Bottom Action Strip */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                  <Link 
                    href={`/products/${p.code}`}
                    className="text-xs font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1 group-hover:translate-x-0.5 transition-transform"
                  >
                    Datasheet
                    <i className="fas fa-arrow-right text-[9px]"></i>
                  </Link>

                  <a 
                    href={`https://wa.me/919555422455?text=Hello%20SMD%20Medicare,%20inquiry%20for%20Reagent%20${p.code}%20(${encodeURIComponent(p.name)})`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-1.5 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-800 font-bold text-xs transition-colors flex items-center gap-1.5 border border-emerald-200/50"
                  >
                    <i className="fab fa-whatsapp text-emerald-600"></i> Quote / CoA
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-slate-200">
              <span className="text-xs text-slate-500 font-medium">
                Page <strong className="text-slate-900">{currentPage}</strong> of <strong className="text-slate-900">{totalPages}</strong> ({filteredProducts.length} total items)
              </span>

              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className="px-3 py-1.5 rounded-lg border border-slate-200 bg-white text-xs font-bold text-slate-700 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                >
                  <i className="fas fa-chevron-left text-[10px] mr-1"></i> Prev
                </button>

                {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => {
                  // Only show current, first, last, and immediate neighbors
                  if (
                    pageNum === 1 ||
                    pageNum === totalPages ||
                    (pageNum >= currentPage - 1 && pageNum <= currentPage + 1)
                  ) {
                    return (
                      <button
                        key={pageNum}
                        onClick={() => setCurrentPage(pageNum)}
                        className={`w-8 h-8 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                          currentPage === pageNum
                            ? 'bg-blue-600 text-white shadow-sm'
                            : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
                        }`}
                      >
                        {pageNum}
                      </button>
                    );
                  } else if (
                    pageNum === currentPage - 2 ||
                    pageNum === currentPage + 2
                  ) {
                    return (
                      <span key={pageNum} className="text-slate-400 px-1 text-xs">
                        ...
                      </span>
                    );
                  }
                  return null;
                })}

                <button
                  onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className="px-3 py-1.5 rounded-lg border border-slate-200 bg-white text-xs font-bold text-slate-700 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                >
                  Next <i className="fas fa-chevron-right text-[10px] ml-1"></i>
                </button>
              </div>
            </div>
          )}
        </>
      )}

      {/* Bottom Custom CDMO Banner */}
      <div className="bg-gradient-to-r from-slate-900 to-indigo-950 rounded-3xl p-6 sm:p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-md border border-slate-800">
        <div>
          <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-orange-400 bg-orange-500/20 px-2.5 py-0.5 rounded-full uppercase tracking-wider mb-2">
            <i className="fas fa-flask"></i> Bangalore R&amp;D Collaborative Desk
          </span>
          <h3 className="text-lg sm:text-xl font-extrabold text-white">
            Need a Proprietary Recombinant Protein or Custom Monoclonal Clone?
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl leading-relaxed">
            We formulate milestone-based custom hybridoma pipelines, high-yield protein expressions, and lateral flow matched pair screening.
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0 w-full md:w-auto">
          <Link
            href="/services"
            className="w-full md:w-auto px-5 py-3 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs text-center transition-all shadow-md shadow-orange-900/20"
          >
            Explore CDMO Services ➔
          </Link>
        </div>
      </div>
    </div>
  );
}
