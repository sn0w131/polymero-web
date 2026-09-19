// app/components/CookieBanner.tsx
"use client";

import { useState, useEffect } from "react";

export default function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("polymero_consent");
    if (!consent) setShow(true);
  }, []);

  const accept = () => {
    localStorage.setItem("polymero_consent", "granted");
    
    // Aktivace GA4 po souhlasu
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag('consent', 'update', {
        'analytics_storage': 'granted'
      });
    }
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 border-t border-[#e5e5e5] bg-background/80 backdrop-blur-lg z-50 p-6 flex flex-col md:flex-row items-center justify-between gap-6 font-geist-sans shadow-[0_-10px_40px_rgba(0,0,0,0.05)]">
      <div className="text-sm text-foreground max-w-3xl">
        <p className="font-headline font-bold text-base mb-1 tracking-wide">Ochrana soukromí a analytika</p>
        <p className="text-[#666666]">
          Pro optimalizaci uživatelského zážitku a měření výkonu ekosystému POLYMERO využíváme analytické cookies. 
          Pokračováním vyjadřujete souhlas s jejich použitím.
        </p>
      </div>
      <button 
        onClick={accept} 
        className="w-full md:w-auto whitespace-nowrap px-8 py-3 bg-foreground text-background font-syne font-bold tracking-widest hover:bg-[#666666] transition-colors duration-300"
      >
        PŘIJMOUT VŠE
      </button>
    </div>
  );
}