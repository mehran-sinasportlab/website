
import React, { useState, useEffect } from 'react';
import { MessageCircle, ArrowUpRight } from 'lucide-react';

interface StickyMobileCTAProps {
  onIntakeClick: () => void;
}

const StickyMobileCTA: React.FC<StickyMobileCTAProps> = ({ onIntakeClick }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      // Show when scrolling up, hide when scrolling down (after threshold)
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <div 
      className={`lg:hidden fixed bottom-6 left-6 right-6 z-50 transition-all duration-500 ease-in-out ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
      }`}
    >
      <div className="flex gap-3 h-14">
        <a 
          href="https://wa.me/31611873590"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 bg-white border border-zinc-100 shadow-xl rounded-full flex items-center justify-center text-[#25D366] active:scale-95 transition-transform"
          aria-label="WhatsApp SINA"
        >
          <MessageCircle size={24} fill="currentColor" fillOpacity={0.1} />
        </a>
        <button 
          onClick={onIntakeClick}
          className="flex-grow bg-black text-white h-14 rounded-full flex items-center justify-between px-6 shadow-xl active:scale-95 transition-transform"
        >
          <span className="text-[10px] font-black tracking-[0.2em] uppercase">START INTAKE</span>
          <ArrowUpRight size={18} />
        </button>
      </div>
    </div>
  );
};

export default StickyMobileCTA;
