"use client";

import React from 'react';

export default function FloatingWhatsApp() {
  const whatsappUrl = "https://wa.me/919555422455?text=Hello%20SMD%20Life%20Sciences,%20I%20have%20an%20inquiry%20for%20IVD%20Reagents%20/%20CDMO%20Services";

  return (
    <aside
      className="fixed bottom-[80px] lg:bottom-7 right-4 lg:right-7 z-[9985] flex items-center group select-none"
      aria-label="WhatsApp Contact"
    >
      {/* Tooltip on desktop hover */}
      <span className="hidden md:inline-block mr-3 px-3 py-1.5 bg-slate-900/90 backdrop-blur-sm text-white text-xs font-semibold rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
        Chat with Scientific Desk
      </span>

      {/* Floating Circular Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Direct WhatsApp Chat with SMD Life Sciences"
        className="relative w-[52px] h-[52px] lg:w-[58px] lg:h-[58px] rounded-full bg-[#25D366] hover:bg-[#20ba59] active:scale-95 text-white flex items-center justify-center shadow-[0_4px_20px_rgba(37,211,102,0.45)] hover:shadow-[0_6px_25px_rgba(37,211,102,0.6)] transition-all duration-300"
      >
        {/* Subtle Pulse Ring */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-30 animate-ping pointer-events-none"></span>

        <i className="fab fa-whatsapp text-[28px] lg:text-[32px] relative z-10"></i>
      </a>
    </aside>
  );
}
