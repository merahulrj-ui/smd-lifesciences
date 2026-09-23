"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import { getLumpSumMOQ } from '@/lib/moq';

export type CurrencyCode = 'INR' | 'USD' | 'EUR' | 'GBP' | 'JPY' | 'AED';

export const CURRENCIES: Record<CurrencyCode, { symbol: string; rate: number; label: string }> = {
  INR: { symbol: '₹', rate: 1, label: 'INR' },
  USD: { symbol: '$', rate: 0.012, label: 'USD' },
  EUR: { symbol: '€', rate: 0.011, label: 'EUR' },
  GBP: { symbol: '£', rate: 0.0095, label: 'GBP' },
  JPY: { symbol: '¥', rate: 1.81, label: 'JPY' },
  AED: { symbol: 'د.إ', rate: 0.044, label: 'AED' }
};

interface UIContextType {
  isSearchOpen: boolean;
  setSearchOpen: (val: boolean) => void;
  isMobileDrawerOpen: boolean;
  setMobileDrawerOpen: (val: boolean) => void;
  isSellerModalOpen: boolean;
  setSellerModalOpen: (val: boolean) => void;
  inquiryState: { isOpen: boolean; productName: string; type: string };
  openInquiryModal: (productName: string, type?: string) => void;
  closeInquiryModal: () => void;
  isQuoteModalOpen: boolean;
  setQuoteModalOpen: (val: boolean) => void;
  catalog: any[];
  addToCatalog: (product: any) => void;
  removeFromCatalog: (productId: string | number) => void;
  clearCatalog: () => void;
  currency: CurrencyCode;
  setCurrency: (currency: CurrencyCode) => void;
  currencySymbol: string;
  formatPrice: (amount: number) => string;
}

const UIContext = createContext<UIContextType | undefined>(undefined);

export function UIProvider({ children }: { children: React.ReactNode }) {
  const [isSearchOpen, setSearchOpen] = useState(false);
  const [isMobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [isSellerModalOpen, setSellerModalOpen] = useState(false);
  const [isQuoteModalOpen, setQuoteModalOpen] = useState(false);
  const [inquiryState, setInquiryState] = useState({ isOpen: false, productName: '', type: 'Product Inquiry' });
  const [catalog, setCatalog] = useState<any[]>([]);
  
  const [currency, setCurrencyState] = useState<CurrencyCode>('INR');

  useEffect(() => {
    const savedCurrency = localStorage.getItem('smd_currency') as CurrencyCode;
    if (savedCurrency && CURRENCIES[savedCurrency]) {
      setCurrencyState(savedCurrency);
    }
    try {
      const savedCatalog = localStorage.getItem('smd_catalog');
      if (savedCatalog) {
        const parsed = JSON.parse(savedCatalog);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setCatalog(parsed);
        }
      }
    } catch (e) {
      console.error('Error loading saved catalog:', e);
    }
  }, []);

  const setCurrency = (c: CurrencyCode) => {
    setCurrencyState(c);
    localStorage.setItem('smd_currency', c);
  };

  const MAX_CATALOG_ITEMS = 20;

  const addToCatalog = (product: any) => {
    if (catalog.find(p => String(p.id) === String(product.id))) {
      return;
    }
    if (catalog.length >= MAX_CATALOG_ITEMS) {
      alert(`You can add up to ${MAX_CATALOG_ITEMS} items to a single quotation/catalog to ensure fast generation.`);
      return;
    }
    const defaultQty = product.quantity || getLumpSumMOQ(product.price);
    const next = [...catalog, { ...product, quantity: defaultQty }];
    setCatalog(next);
    try {
      localStorage.setItem('smd_catalog', JSON.stringify(next));
    } catch (e) {}
  };

  const removeFromCatalog = (productId: string | number) => {
    const next = catalog.filter(p => String(p.id) !== String(productId));
    setCatalog(next);
    try {
      localStorage.setItem('smd_catalog', JSON.stringify(next));
    } catch (e) {}
  };

  const clearCatalog = () => {
    setCatalog([]);
    try {
      localStorage.removeItem('smd_catalog');
    } catch (e) {}
  };

  const openInquiryModal = (productName: string, type: string = 'Product Inquiry') => {
    setInquiryState({ isOpen: true, productName, type });
  };

  const closeInquiryModal = () => {
    setInquiryState(prev => ({ ...prev, isOpen: false }));
  };

  const currencySymbol = CURRENCIES[currency].symbol;

  const formatPrice = (amount: number) => {
    const converted = amount * CURRENCIES[currency].rate;
    if (currency === 'INR') {
      return `${currencySymbol}${converted.toLocaleString('en-IN')}`;
    }
    return `${currencySymbol}${converted.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  };

  return (
    <UIContext.Provider
      value={{
        isSearchOpen,
        setSearchOpen,
        isMobileDrawerOpen,
        setMobileDrawerOpen,
        isSellerModalOpen,
        setSellerModalOpen,
        inquiryState,
        openInquiryModal,
        closeInquiryModal,
        isQuoteModalOpen,
        setQuoteModalOpen,
        catalog,
        addToCatalog,
        removeFromCatalog,
        clearCatalog,
        currency,
        setCurrency,
        currencySymbol,
        formatPrice
      }}
    >
      {children}
    </UIContext.Provider>
  );
}

export function useUI() {
  const context = useContext(UIContext);
  if (!context) {
    throw new Error('useUI must be used within a UIProvider');
  }
  return context;
}
