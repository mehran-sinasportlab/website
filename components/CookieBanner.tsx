
import React, { useState, useEffect } from 'react';
import { X, Shield, ChevronRight } from 'lucide-react';

interface CookieBannerProps {
  onConsentChange: () => void;
}

const CookieBanner: React.FC<CookieBannerProps> = ({ onConsentChange }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [consent, setConsent] = useState({
    functional: true,
    analytics: true,
    marketing: false,
  });

  useEffect(() => {
    const hasConsent = localStorage.getItem('sina-cookie-consent');
    if (!hasConsent) {
      // Small delay for better UX
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const saveConsent = (newConsent: typeof consent) => {
    localStorage.setItem('sina-cookie-consent', JSON.stringify(newConsent));
    setIsVisible(false);
    onConsentChange();
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 left-6 right-6 md:left-auto md:max-w-md z-[200] animate-in slide-in-from-bottom-8 duration-700">
      <div className="bg-white border border-zinc-100 shadow-2xl p-6 md:p-8 rounded-sm overflow-hidden relative">
        <div className="flex items-start gap-4 mb-6">
          <div className="w-10 h-10 bg-zinc-50 rounded-full flex items-center justify-center shrink-0">
            <Shield size={20} strokeWidth={1.5} />
          </div>
          <div>
            <h4 className="text-sm font-bold tracking-tight uppercase italic mb-2">Privacy & Cookies</h4>
            <p className="text-xs text-zinc-500 font-light leading-relaxed">
              Wij gebruiken cookies om uw ervaring te verbeteren en websitebezoek te analyseren. Kies welke cookies u wilt accepteren.
            </p>
          </div>
        </div>

        {!showSettings ? (
          <div className="flex flex-col gap-3">
            <button 
              onClick={() => saveConsent({ functional: true, analytics: true, marketing: true })}
              className="w-full bg-black text-white py-4 text-[10px] font-bold tracking-[0.2em] uppercase hover:bg-zinc-800 transition-all"
            >
              ALLE COOKIES ACCEPTEREN
            </button>
            <div className="grid grid-cols-2 gap-3">
              <button 
                onClick={() => setShowSettings(true)}
                className="text-[9px] font-bold tracking-widest text-zinc-400 uppercase hover:text-black transition-colors py-2 border border-zinc-100"
              >
                INSTELLINGEN
              </button>
              <button 
                onClick={() => saveConsent({ functional: true, analytics: false, marketing: false })}
                className="text-[9px] font-bold tracking-widest text-zinc-400 uppercase hover:text-black transition-colors py-2 border border-zinc-100"
              >
                NOODZAKELIJK
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-6 animate-in fade-in duration-300">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-widest">Functioneel</span>
                <span className="text-[9px] text-zinc-300 font-bold uppercase">Altijd aan</span>
              </div>
              <div className="flex items-center justify-between">
                <label htmlFor="analytics-opt" className="text-[10px] font-bold uppercase tracking-widest cursor-pointer">Analytisch (GA4)</label>
                <input 
                  id="analytics-opt"
                  type="checkbox" 
                  checked={consent.analytics}
                  onChange={(e) => setConsent({...consent, analytics: e.target.checked})}
                  className="w-4 h-4 accent-black cursor-pointer"
                />
              </div>
              <div className="flex items-center justify-between">
                <label htmlFor="marketing-opt" className="text-[10px] font-bold uppercase tracking-widest cursor-pointer">Marketing</label>
                <input 
                  id="marketing-opt"
                  type="checkbox" 
                  checked={consent.marketing}
                  onChange={(e) => setConsent({...consent, marketing: e.target.checked})}
                  className="w-4 h-4 accent-black cursor-pointer"
                />
              </div>
            </div>
            <button 
              onClick={() => saveConsent(consent)}
              className="w-full bg-black text-white py-4 text-[10px] font-bold tracking-[0.2em] uppercase hover:bg-zinc-800 transition-all"
            >
              VOORKEUREN OPSLAAN
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CookieBanner;
