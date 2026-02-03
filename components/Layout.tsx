
import React, { useState, useEffect, useRef } from 'react';
import { 
  Menu, X, ChevronDown, ChevronRight, MapPin, Mail, Phone, 
  Instagram, Linkedin, ArrowUpRight, MessageCircle, Youtube 
} from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
  activePath: string;
  onNavigate: (path: string) => void;
}

const Logo: React.FC = () => (
  <svg 
    viewBox="0 0 400 60" 
    className="h-8 md:h-10 w-auto fill-current transition-all duration-500 ease-out group-hover:drop-shadow-[0_0_8px_rgba(0,0,0,0.1)] group-active:scale-[0.98]"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* SINA */}
    <path d="M12.5 45.2c-5.2 0-8.9-2.3-11-7l4.5-2.2c1.3 2.8 3.5 4.3 6.5 4.3 3.1 0 5-1.5 5-3.8 0-2.1-1.4-3.2-5.5-4.4-6.3-1.8-9.4-4.5-9.4-9.3 0-5.8 4.8-9.8 11.1-9.8 4.7 0 8.3 2 10.1 5.8l-4.4 2.3c-1.1-2.4-2.9-3.4-5.7-3.4-2.8 0-4.4 1.5-4.4 3.4 0 2 1.4 3 5.4 4.2 6.7 1.9 9.5 4.7 9.5 9.4.1 6.5-4.9 10.5-11.7 10.5zM31 13.5h6.3v31.2H31zM46.7 13.5h6.1l14.4 19.3V13.5h6.3v31.2h-5.2L53 24.3v20.4h-6.3zM91.8 13.5l11.1 31.2h-6.7l-2.2-6.5h-9.8l-2.2 6.5h-6.7l11.1-31.2h5.4zm-1.1 6.8l-3.3 10.1h6.6L90.7 20.3z" />
    {/* SPORTLAB */}
    <path d="M136.5 45.2c-5.2 0-8.9-2.3-11-7l4.5-2.2c1.3 2.8 3.5 4.3 6.5 4.3 3.1 0 5-1.5 5-3.8 0-2.1-1.4-3.2-5.5-4.4-6.3-1.8-9.4-4.5-9.4-9.3 0-5.8 4.8-9.8 11.1-9.8 4.7 0 8.3 2 10.1 5.8l-4.4 2.3c-1.1-2.4-2.9-3.4-5.7-3.4-2.8 0-4.4 1.5-4.4 3.4 0 2 1.4 3 5.4 4.2 6.7 1.9 9.5 4.7 9.5 9.4.1 6.5-4.9 10.5-11.7 10.5zM155.6 13.5h10.3c5.4 0 9.1 3.2 9.1 7.9s-3.7 7.9-9.1 7.9h-4.1v15.4h-6.2V13.5zm10.1 10.1c1.9 0 3-1 3-2.3s-1.1-2.3-3-2.3h-3.9v4.6h3.9zM182.2 29.3c0-9.2 7.3-16.3 16.5-16.3s16.5 7.1 16.5 16.3-7.3 16.3-16.5 16.3-16.5-7.1-16.5-16.3zm26.6 0c0-5.7-4.4-10.2-10.1-10.2s-10.1 4.5-10.1 10.2 4.4 10.2 10.1 10.2 10.1-4.5 10.1-10.2zM224 13.5h10.9c5.6 0 8.6 2.8 8.6 6.6 0 3.3-2.1 5.4-5.3 6.2l6.2 18.3H238l-5.4-16.5h-2.3v16.5H224V13.5zm10.4 9.1c1.5 0 2.5-.7 2.5-1.9s-1-1.9-2.5-1.9h-4.2v3.8h4.2zM250.2 13.5H269v5.6h-6.2v25.6H256.5V19.1h-6.3v-5.6zM275.5 13.5h6.3v25.6h11.1v5.6h-17.4zM302.1 13.5l11.1 31.2h-6.7l-2.2-6.5h-9.8l-2.2 6.5h-6.7l11.1-31.2h5.4zm-1.1 6.8l-3.3 10.1h6.6L301 20.3zM321.4 13.5h11c6.5 0 10.1 3.5 10.1 8.3 0 2.8-1.4 5-3.8 6.5 3.3 1.5 5.3 4 5.3 7.8 0 5.4-4.2 9.1-11.4 9.1h-11.2V13.5zm10.7 13c2.4 0 3.8-1.2 3.8-3.1 0-2-1.4-3.1-3.8-3.1h-4.5v6.2h4.5zm.7 12.8c2.9 0 4.6-1.4 4.6-3.6 0-2.3-1.7-3.6-4.6-3.6h-5.4v7.2h5.4z" />
  </svg>
);

const Navbar: React.FC<{ activePath: string; onNavigate: (path: string) => void }> = ({ activePath, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const [isDienstenDropdownOpen, setIsDienstenDropdownOpen] = useState(false);
  const [isMobileAboutExpanded, setIsMobileAboutExpanded] = useState(false);
  const [isMobileDienstenExpanded, setIsMobileDienstenExpanded] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMobileMenuOpen(false);
        setIsAboutDropdownOpen(false);
        setIsDienstenDropdownOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      document.body.style.overflowY = 'hidden';
    } else {
      const scrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.overflowY = '';
      if (scrollY) window.scrollTo(0, parseInt(scrollY || '0') * -1);
    }
    return () => {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.overflowY = '';
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { label: 'Home', path: 'home' },
    { 
      label: 'Diensten', 
      path: 'services-parent',
      subItems: [
        { label: 'Alle Diensten', path: 'services' },
        { label: 'Zorginstellingen', path: 'healthcare' }
      ]
    },
    { label: 'Fysiotherapie', path: 'physiotherapy' },
    { label: 'Tarieven', path: 'pricing' },
    { 
      label: 'Over SINA', 
      path: 'about-parent',
      subItems: [
        { label: 'Over ons', path: 'about' },
        { label: 'Werken bij SINA', path: 'careers' }
      ] 
    },
    { label: 'Vitaler in de vakantie', path: 'vitaler' },
    { label: 'Contact', path: 'contact' },
  ];

  const handleMobileNavigate = (path: string) => {
    setIsMobileMenuOpen(false);
    setIsMobileAboutExpanded(false);
    setIsMobileDienstenExpanded(false);
    onNavigate(path);
  };

  return (
    <nav 
      ref={navRef}
      className={`fixed top-0 w-full z-[100] transition-all duration-500 ease-in-out ${
        isScrolled || isMobileMenuOpen 
          ? 'bg-white/95 blur-backdrop border-b border-zinc-100 py-4 shadow-sm' 
          : 'bg-transparent py-10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center relative z-[110]">
        <div 
          className="group cursor-pointer outline-none flex items-center animate-hero-fade opacity-0 fill-black"
          style={{ animationDelay: '200ms' }}
          onClick={() => handleMobileNavigate('home')}
          role="button"
          aria-label="SINA Sportlab Home"
          tabIndex={0}
        >
          <Logo />
        </div>

        <div className="hidden lg:flex gap-8 items-center">
          {navLinks.map((link) => (
            link.subItems ? (
              <div 
                key={link.path}
                className="relative"
                onMouseEnter={() => link.path.includes('services') ? setIsDienstenDropdownOpen(true) : setIsAboutDropdownOpen(true)}
                onMouseLeave={() => link.path.includes('services') ? setIsDienstenDropdownOpen(false) : setIsAboutDropdownOpen(false)}
              >
                <button
                  className={`text-[11px] font-bold tracking-[0.2em] transition-all hover:text-black uppercase flex items-center gap-1 whitespace-nowrap outline-none ${
                    link.subItems.some(sub => activePath === sub.path) ? 'text-black' : 'text-zinc-400'
                  }`}
                  aria-expanded={link.path.includes('services') ? isDienstenDropdownOpen : isAboutDropdownOpen}
                  aria-haspopup="true"
                >
                  {link.label} <ChevronDown size={12} className={`transition-transform duration-300 ${(link.path.includes('services') ? isDienstenDropdownOpen : isAboutDropdownOpen) ? 'rotate-180' : ''}`} />
                </button>
                <div 
                  className={`absolute top-full left-0 pt-4 w-52 transition-all duration-300 ${
                    (link.path.includes('services') ? isDienstenDropdownOpen : isAboutDropdownOpen) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'
                  }`}
                >
                  <div className="bg-white border border-zinc-100 shadow-2xl p-4 flex flex-col gap-3">
                    {link.subItems.map(sub => (
                      <button
                        key={sub.path}
                        onClick={() => onNavigate(sub.path)}
                        className={`text-left text-[10px] font-bold tracking-widest uppercase transition-colors hover:text-black outline-none ${
                          activePath === sub.path ? 'text-black' : 'text-zinc-400'
                        }`}
                      >
                        {sub.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <button
                key={link.path}
                onClick={() => onNavigate(link.path)}
                className={`text-[11px] font-bold tracking-[0.2em] transition-all hover:text-black uppercase whitespace-nowrap outline-none ${
                  activePath === link.path ? 'text-black' : 'text-zinc-400'
                }`}
              >
                {link.label}
              </button>
            )
          ))}
          <button 
            onClick={() => onNavigate('intake')}
            className="bg-black text-white px-8 py-3 text-[10px] font-bold tracking-[0.2em] hover:bg-zinc-800 transition-all ml-4 active:scale-95"
          >
            START INTAKE
          </button>
        </div>

        <button 
          className="lg:hidden p-2 outline-none" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Sluit menu" : "Open menu"}
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-white z-[90] transition-all duration-500 ease-in-out lg:hidden ${
          isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
        }`}
        style={{ height: 'calc(var(--vh, 1vh) * 100)' }}
      >
        <div className="h-full flex flex-col pt-32 px-8 pb-12 overflow-y-auto scroll-hide">
          <div className="flex flex-col gap-6 sm:gap-8">
            {navLinks.map((link) => (
              <div key={link.path} className="flex flex-col">
                {link.subItems ? (
                  <>
                    <button 
                      onClick={() => link.path.includes('services') ? setIsMobileDienstenExpanded(!isMobileDienstenExpanded) : setIsMobileAboutExpanded(!isMobileAboutExpanded)}
                      className="flex items-center justify-between text-left text-3xl sm:text-4xl font-black tracking-tighter italic uppercase text-zinc-200 outline-none"
                    >
                      {link.label}
                      <ChevronDown size={28} className={`transition-transform ${(link.path.includes('services') ? isMobileDienstenExpanded : isMobileAboutExpanded) ? 'rotate-180' : ''}`} />
                    </button>
                    <div className={`flex flex-col gap-4 sm:gap-6 pl-4 transition-all duration-500 overflow-hidden ${(link.path.includes('services') ? isMobileDienstenExpanded : isMobileAboutExpanded) ? 'max-h-[300px] mt-6 sm:mt-8 opacity-100' : 'max-h-0 opacity-0'}`}>
                      {link.subItems.map(sub => (
                        <button
                          key={sub.path}
                          onClick={() => handleMobileNavigate(sub.path)}
                          className={`text-left text-2xl sm:text-3xl font-black tracking-tighter italic uppercase outline-none ${activePath === sub.path ? 'text-black underline' : 'text-zinc-300'}`}
                        >
                          {sub.label}
                        </button>
                      ))}
                    </div>
                  </>
                ) : (
                  <button
                    onClick={() => handleMobileNavigate(link.path)}
                    className={`text-left text-3xl sm:text-4xl font-black tracking-tighter italic uppercase outline-none ${activePath === link.path ? 'text-black underline' : 'text-zinc-200'}`}
                  >
                    {link.label}
                  </button>
                )}
              </div>
            ))}
          </div>
          <div className="mt-auto pt-8 sm:pt-12 space-y-6">
            <button 
              onClick={() => handleMobileNavigate('intake')}
              className="w-full bg-black text-white py-5 sm:py-6 text-sm font-black tracking-[0.3em] uppercase flex items-center justify-center gap-4 active:scale-95 transition-transform"
            >
              START INTAKE <ArrowUpRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

const Footer: React.FC<{ onNavigate: (path: string) => void }> = ({ onNavigate }) => (
  <footer className="bg-white border-t border-zinc-100 pt-20 sm:pt-32 pb-16 px-6 relative z-10">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 sm:gap-20 mb-20 sm:mb-32">
        <div className="sm:col-span-2">
          <div className="mb-4 fill-black">
            <Logo />
          </div>
          <p className="text-[10px] font-bold tracking-[0.4em] text-zinc-400 uppercase mb-8">Measure. Improve. Perform.</p>
          <p className="text-zinc-400 max-w-sm leading-relaxed text-lg sm:text-xl font-light mb-10 italic">
            Hét data-gedreven sportperformance & orthoperformance lab. <br/>
            <span className="text-black font-medium underline underline-offset-4">Assen</span> | <span>Beverwijk</span>
          </p>
          <div className="flex gap-4">
            <a href="#" aria-label="Instagram" className="w-10 h-10 sm:w-12 sm:h-12 border border-zinc-100 rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-all"><Instagram size={18} /></a>
            <a href="#" aria-label="LinkedIn" className="w-10 h-10 sm:w-12 sm:h-12 border border-zinc-100 rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-all"><Linkedin size={18} /></a>
            <a href="#" aria-label="YouTube" className="w-10 h-10 sm:w-12 sm:h-12 border border-zinc-100 rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-all"><Youtube size={18} /></a>
          </div>
        </div>
        
        <div>
          <h4 className="font-bold mb-8 text-[10px] tracking-[0.25em] text-zinc-300 uppercase">Contact & Info</h4>
          <ul className="space-y-6">
            <li className="flex items-start gap-4 group cursor-pointer" onClick={() => window.open('https://wa.me/31611873590')}>
              <div className="w-10 h-10 rounded-full bg-zinc-50 flex items-center justify-center shrink-0 group-hover:bg-[#25D366] group-hover:text-white transition-all">
                <MessageCircle size={18} className="text-[#25D366] group-hover:text-white" />
              </div>
              <div>
                <span className="block text-[9px] font-bold text-zinc-400 uppercase tracking-widest">WhatsApp</span>
                <span className="text-sm font-bold">06-11 87 35 90</span>
              </div>
            </li>
            <li className="flex items-start gap-4 group cursor-pointer" onClick={() => window.location.href = 'mailto:info@sinasportlab.nl'}>
              <div className="w-10 h-10 rounded-full bg-zinc-50 flex items-center justify-center shrink-0 group-hover:bg-[#007AFF] group-hover:text-white transition-all">
                <Mail size={18} className="text-[#007AFF] group-hover:text-white" />
              </div>
              <div>
                <span className="block text-[9px] font-bold text-zinc-400 uppercase tracking-widest">Algemeen</span>
                <span className="text-sm font-bold">info@sinasportlab.nl</span>
              </div>
            </li>
            <li className="flex items-start gap-4 group cursor-pointer" onClick={() => onNavigate('contact')}>
              <div className="w-10 h-10 rounded-full bg-zinc-50 flex items-center justify-center shrink-0 group-hover:bg-[#EA4335] group-hover:text-white transition-all">
                <MapPin size={18} className="text-[#EA4335] group-hover:text-white" />
              </div>
              <div>
                <span className="block text-[9px] font-bold text-zinc-400 uppercase tracking-widest">Adres</span>
                <span className="text-sm font-bold">Koperslagerstraat 3, Assen</span>
              </div>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-8 text-[10px] tracking-[0.25em] text-zinc-300 uppercase">Navigatie</h4>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 sm:gap-x-12 gap-y-6 text-zinc-500 font-bold uppercase text-[10px] tracking-widest leading-relaxed">
            <li onClick={() => onNavigate('home')} className="hover:text-black cursor-pointer transition-colors block min-w-0 break-words">Home</li>
            <li onClick={() => onNavigate('vitaler')} className="hover:text-black cursor-pointer transition-colors block min-w-0 break-words">Vitaler</li>
            <li onClick={() => onNavigate('services')} className="hover:text-black cursor-pointer transition-colors block min-w-0 break-words">Diensten</li>
            <li onClick={() => onNavigate('healthcare')} className="hover:text-black cursor-pointer transition-colors block min-w-0 break-words">Zorg</li>
            <li onClick={() => onNavigate('physiotherapy')} className="hover:text-black cursor-pointer transition-colors block min-w-0 break-words">Fysiotherapie</li>
            <li onClick={() => onNavigate('pricing')} className="hover:text-black cursor-pointer transition-colors block min-w-0 break-words">Tarieven</li>
            <li onClick={() => onNavigate('about')} className="hover:text-black cursor-pointer transition-colors block min-w-0 break-words">Over ons</li>
            <li onClick={() => onNavigate('careers')} className="hover:text-black cursor-pointer transition-colors block min-w-0 break-words">Werken bij</li>
            <li onClick={() => onNavigate('contact')} className="hover:text-black cursor-pointer transition-colors block min-w-0 break-words">Contact</li>
            <li onClick={() => onNavigate('privacy')} className="hover:text-black cursor-pointer transition-colors underline decoration-zinc-100 col-span-1 sm:col-span-2 block min-w-0 break-words">Privacy Policy</li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center text-zinc-300 text-[9px] sm:text-[10px] font-bold tracking-[0.1em] uppercase pt-12 border-t border-zinc-50 gap-4">
        <p className="text-center md:text-left">© 2024 SINA SPORTLAB ASSEN - DATA DRIVEN PERFORMANCE</p>
        <p className="flex items-center gap-2">GEREGISTREERD SPORTFYSIOTHERAPEUT <ChevronRight size={10} /> BIG REGISTER</p>
      </div>
    </div>
  </footer>
);

export const Layout: React.FC<LayoutProps> = ({ children, activePath, onNavigate }) => {
  return (
    <div className="min-h-screen flex flex-col selection:bg-black selection:text-white">
      <Navbar activePath={activePath} onNavigate={onNavigate} />
      <main className="flex-grow">
        {children}
      </main>
      <Footer onNavigate={onNavigate} />
    </div>
  );
};
