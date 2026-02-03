
import React, { useState, useEffect, useRef } from 'react';
import { 
  ArrowRight, Activity, ChevronRight, Target, Zap, Play, X, 
  UserCircle, Gauge, ClipboardCheck, HeartPulse, Dumbbell, 
  MessageCircle, Mail, Phone, Users, Trophy, GraduationCap, Briefcase, HeartHandshake, Sparkles
} from 'lucide-react';
import Reviews from '../components/Reviews';

// --- VIDEO CONFIGURATION ---
const HERO_VIDEO_MP4 = "https://drive.google.com/uc?export=download&id=1c9GFvknqr7YhSOhCT_vJBVJFIGy7LPbu";
const HERO_POSTER = "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1920";

interface HomeProps {
  onNavigate: (path: string) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const [activeScrollStep, setActiveScrollStep] = useState<number | null>(null);
  const [heroActiveIndex, setHeroActiveIndex] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  const heroWords = ["MEASURE.", "IMPROVE.", "PERFORM."];

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    const listener = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', listener);
    return () => mediaQuery.removeEventListener('change', listener);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroActiveIndex((prev) => (prev + 1) % heroWords.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  // Optimized Intersection Observer for "Scroll-Aware" behavior
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '-35% 0px -35% 0px', // Focus on middle 30% of viewport
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = stepRefs.current.indexOf(entry.target as HTMLDivElement);
          if (index !== -1) {
            setActiveScrollStep(index);
          }
        }
      });
    }, options);

    const currentRefs = stepRefs.current;
    currentRefs.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      currentRefs.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  const routes = [
    { 
      id: 'Sporters', 
      title: 'Sporters', 
      icon: <Trophy size={32} />, 
      desc: 'Kracht & Fitheid training voor elk niveau.', 
      path: 'services',
      imageUrl: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=800'
    },
    { 
      id: 'Voetballers', 
      title: 'Voetballers', 
      icon: <Target size={32} />, 
      desc: 'Performance & SIMUST training voor talenten.', 
      path: 'services',
      imageUrl: 'https://images.unsplash.com/photo-1551958219-acbc608c6377?auto=format&fit=crop&q=80&w=800'
    },
    { 
      id: 'Verenigingen', 
      title: 'Verenigingen', 
      icon: <Users size={32} />, 
      desc: 'Team support & structurele periodisering.', 
      path: 'services',
      imageUrl: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800'
    },
    { 
      id: 'Scholen', 
      title: 'Scholen', 
      icon: <GraduationCap size={32} />, 
      desc: 'Voor scholieren & functionele gymlessen.', 
      path: 'services',
      imageUrl: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800'
    },
    { 
      id: 'Zorginstellingen', 
      title: 'Zorginstellingen', 
      icon: <HeartHandshake size={32} />, 
      desc: 'Zorg & Bewegen op maat voor groepen.', 
      path: 'healthcare',
      imageUrl: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&q=80&w=800'
    },
    { 
      id: 'Teambuilding', 
      title: 'Teambuilding', 
      icon: <Briefcase size={32} />, 
      desc: 'Vitaliteit & Business days voor teams.', 
      path: 'services',
      imageUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800'
    }
  ];

  const steps = [
    { title: "Intake", icon: <UserCircle strokeWidth={1} />, desc: "Kennismaking en het in kaart brengen van jouw doelen." },
    { title: "Analyse", icon: <Gauge strokeWidth={1} />, desc: "Gerichte biomechanische of cognitieve testen." },
    { title: "Advies", icon: <ClipboardCheck strokeWidth={1} />, desc: "Een data-gedreven behandel- of trainingsplan op maat." },
    { title: "Behandeling", icon: <HeartPulse strokeWidth={1} />, desc: "Specialistische (sport)fysiotherapie voor herstel." },
    { title: "Performance", icon: <Zap strokeWidth={1} />, desc: "High-end training gericht op snelheid en cognitie." },
    { title: "Fitness", icon: <Dumbbell strokeWidth={1} />, desc: "Ondersteunende krachttraining en vitaliteit." }
  ];

  return (
    <div className="bg-white">
      {/* Video Modal Overlay */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-10 animate-in fade-in duration-300">
          <button 
            onClick={() => setIsModalOpen(false)}
            className="absolute top-6 right-6 sm:top-10 sm:right-10 text-white hover:text-zinc-400 transition-colors z-[210] outline-none"
            aria-label="Sluit video"
          >
            <X strokeWidth={1} className="w-8 h-8 sm:w-10 sm:h-10" />
          </button>
          <div className="w-full max-w-6xl aspect-video bg-zinc-900 overflow-hidden shadow-2xl relative rounded-xs">
            <video autoPlay controls muted className="w-full h-full object-contain grayscale">
              <source src="https://v.ftcdn.net/05/56/64/73/700_F_556647311_Xv7p9m8A3JpDqB7uT9U0n8lXyX5H6m7A_ST.mp4" type="video/mp4" />
              Uw browser ondersteunt geen video.
            </video>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative min-h-dvh flex flex-col justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          {prefersReducedMotion ? (
            <img 
              src={HERO_POSTER} 
              alt="SINA Sportlab Hero" 
              className="w-full h-full object-cover grayscale brightness-50" 
            />
          ) : (
            <video 
              autoPlay 
              muted 
              loop 
              playsInline 
              poster={HERO_POSTER}
              className="w-full h-full object-cover grayscale brightness-75 contrast-110"
            >
              <source src={HERO_VIDEO_MP4} type="video/mp4" />
            </video>
          )}
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/70" />
        </div>

        <div className="px-6 relative z-10 max-w-7xl mx-auto w-full pt-20 sm:pt-24">
          <div className="max-w-5xl">
            <span className="text-[10px] font-bold tracking-[0.4em] text-zinc-300 uppercase mb-4 sm:mb-8 block">SINA SPORTLAB ASSEN</span>
            
            <div className="flex flex-col mb-8 sm:mb-16 select-none">
              {heroWords.map((word, idx) => (
                <h1 
                  key={idx}
                  className={`text-4xl sm:text-7xl md:text-8xl lg:text-[9.5rem] font-black tracking-tighter leading-[0.85] transition-all duration-700 ease-in-out origin-left cursor-default mobile-title-scale ${
                    heroActiveIndex === idx ? 'text-white opacity-100 scale-[1.02]' : 'text-white/20 opacity-20 scale-100'
                  }`}
                >
                  {word}
                </h1>
              ))}
            </div>

            <p className="text-base sm:text-xl md:text-2xl text-zinc-300 font-light leading-relaxed mb-10 sm:mb-16 max-w-2xl animate-hero-fade italic">
              SINA Sportlab is een performance-en revalidatiecentrum waar sport, zorg en data samenkomen. 
              Wij helpen sporters, jongeren en verenigingen om sterker te bewegen, beter te presteren en blessures te voorkomen.
            </p>
            
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-6">
              <button 
                onClick={() => onNavigate('services')}
                className="bg-white text-black px-8 sm:px-10 py-4 sm:py-5 text-xs font-bold tracking-[0.3em] hover:bg-zinc-200 transition-all flex items-center justify-center gap-4 group active:scale-95 shadow-xl"
              >
                BEKIJK DIENSTEN <ChevronRight size={16} />
              </button>
              <button 
                onClick={() => onNavigate('contact')}
                className="bg-transparent border border-white/30 text-white px-8 sm:px-10 py-4 sm:py-5 text-xs font-bold tracking-[0.3em] hover:bg-white/10 transition-all flex items-center justify-center gap-4 active:scale-95"
              >
                PLAN INTAKE / CONTACT <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Route Cards Section */}
      <section className="bg-zinc-50 py-20 sm:py-40 px-6 overflow-x-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 sm:mb-20 text-center sm:text-left">
            <span className="text-[10px] font-bold tracking-[0.4em] text-zinc-400 uppercase mb-4 block">KIES JOUW ROUTE</span>
            <h2 className="text-3xl sm:text-6xl font-black tracking-tighter uppercase italic">Oplossingen voor iedereen.</h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
            {routes.map((route) => (
              <div 
                key={route.id}
                onClick={() => onNavigate(route.path)}
                className="route-card group p-8 sm:p-10 bg-white border border-zinc-100 hover:border-black transition-all duration-300 cursor-pointer flex flex-col h-full relative overflow-hidden shadow-sm hover:shadow-xl outline-none"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && onNavigate(route.path)}
                role="button"
                aria-label={`Route: ${route.title}`}
              >
                <div className="absolute inset-0 z-0">
                  <img 
                    src={route.imageUrl} 
                    alt="" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 brightness-110" 
                    loading="lazy" 
                    width="400" 
                    height="600" 
                  />
                  <div className="card-overlay absolute inset-0 bg-white/60 sm:bg-white/60 transition-opacity duration-300 group-hover:opacity-40" />
                </div>

                <div className="card-content relative z-10 flex flex-col h-full transition-transform duration-300 ease-out">
                  <div className="card-icon mb-6 sm:mb-8 text-black/40 group-hover:text-black transition-colors duration-300">
                    {route.icon}
                  </div>
                  <h3 className="card-title text-lg sm:text-xl font-bold mb-3 sm:mb-4 tracking-tighter uppercase italic text-black transition-all duration-300 origin-left">
                    {route.title}
                  </h3>
                  <p className="card-desc text-zinc-700 text-sm font-light leading-relaxed mb-6 sm:mb-8 flex-grow transition-all duration-300 italic">
                    {route.desc}
                  </p>
                  <div className="card-cta flex items-center gap-2 text-[9px] font-black tracking-widest uppercase text-black/60 transition-colors duration-300 group-hover:text-black">
                    GA NAAR ROUTE <ChevronRight size={14} className="card-cta-icon transition-transform duration-300" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Process Section - UPGRADED INTERACTION */}
      <section className="bg-white py-20 sm:py-40 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 sm:mb-32 max-w-3xl">
            <span className="text-[10px] font-bold tracking-[0.4em] text-zinc-400 uppercase mb-8 block text-center lg:text-left">WERKWIJZE</span>
            <h2 className="text-3xl sm:text-5xl md:text-7xl font-black tracking-tighter leading-none mb-12 uppercase italic text-center lg:text-left">
              Onze route naar <br className="hidden sm:block" />jouw topprestatie.
            </h2>
            <p className="text-base sm:text-xl text-zinc-500 font-light leading-relaxed italic text-center lg:text-left">
              Bij SINA Sportlab starten we altijd met een intake. Op basis van jouw klachten of behoeften voeren we een gerichte analyse uit.
            </p>
          </div>

          <div className="relative">
            {/* Connecting Line */}
            <div className="hidden lg:block absolute top-[60px] left-0 w-full h-[1px] bg-zinc-100" />
            
            <div className="flex flex-col lg:grid lg:grid-cols-6 gap-y-12 sm:gap-y-16 lg:gap-y-0 relative">
              {steps.map((step, idx) => {
                // Shared active index logic: Hover overrides scroll position
                const isCurrent = activeStep === idx || (activeStep === null && activeScrollStep === idx);
                
                return (
                  <div 
                    key={idx}
                    ref={(el) => { stepRefs.current[idx] = el; }}
                    onMouseEnter={() => setActiveStep(idx)}
                    onMouseLeave={() => setActiveStep(null)}
                    onClick={() => setActiveStep(idx)}
                    className={`group relative px-4 lg:px-6 flex flex-col items-center lg:items-start text-center lg:text-left transition-all duration-500 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)]
                      ${isCurrent ? 'opacity-100 scale-[1.05] z-20' : 'opacity-40 blur-[1px] lg:blur-0 scale-100 z-10'}`}
                  >
                    {/* Circle Icon Container - Apple-style transition */}
                    <div className={`relative z-10 w-24 h-24 sm:w-32 sm:h-32 rounded-full border mb-6 sm:mb-10 flex items-center justify-center transition-all duration-500 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)]
                      ${isCurrent 
                        ? 'bg-black border-black text-white shadow-[0_20px_40px_-15px_rgba(0,0,0,0.15)]' 
                        : 'bg-white border-zinc-100 text-zinc-400 group-hover:border-zinc-300'}`}>
                      
                      {React.cloneElement(step.icon as React.ReactElement<any>, { 
                        size: 32, 
                        strokeWidth: isCurrent ? 1.5 : 1,
                        className: "transition-all duration-500"
                      })}
                      
                      <div className={`absolute top-3 left-3 text-[9px] font-bold tracking-widest transition-opacity duration-500 ${isCurrent ? 'opacity-40' : 'opacity-10'} italic`}>
                        0{idx + 1}
                      </div>
                    </div>

                    <h3 className={`text-base sm:text-lg font-black mb-3 tracking-tighter uppercase italic transition-colors duration-500 ${isCurrent ? 'text-black' : 'text-zinc-400'}`}>
                      {step.title}
                    </h3>

                    <div className={`transition-all duration-500 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] ${isCurrent ? 'max-h-40 opacity-100' : 'max-h-0 lg:max-h-40 opacity-0 lg:opacity-100'}`}>
                      <p className="text-sm text-zinc-500 leading-relaxed font-light italic">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section Integration */}
      <Reviews />

      {/* Vitaler in de vakantie Teaser Section */}
      <section className="bg-zinc-900 text-white py-16 sm:py-24 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/4 h-full opacity-5 pointer-events-none">
          <Activity size={300} strokeWidth={0.5} className="text-white" />
        </div>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 sm:gap-16 relative z-10">
          <div className="flex-1 w-full text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
              <Sparkles className="text-zinc-500" size={16} />
              <span className="text-[9px] font-bold tracking-[0.3em] text-zinc-500 uppercase">PROGRAMMA FOCUS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tighter uppercase italic mb-6 leading-tight">
              Vitaler in de vakantie.
            </h2>
            <p className="text-base sm:text-lg text-zinc-400 font-light leading-relaxed mb-8 sm:mb-10 max-w-lg mx-auto md:mx-0">
              Minder bewegen kan de belastbaarheid van kinderen verlagen. Met dit programma werken we aan stabiliteit en herstel — het hele jaar door.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button onClick={() => onNavigate('vitaler')} className="bg-white text-black px-8 py-4 text-[10px] font-bold tracking-[0.2em] uppercase hover:bg-zinc-200 transition-all flex items-center justify-center gap-3 active:scale-95">
                MEER INFORMATIE <ChevronRight size={14} />
              </button>
              <button onClick={() => onNavigate('intake')} className="border border-zinc-700 text-white px-8 py-4 text-[10px] font-bold tracking-[0.2em] uppercase hover:bg-zinc-800 transition-all active:scale-95">
                AFSPRAAK MAKEN
              </button>
            </div>
          </div>
          <div className="flex-1 hidden md:block max-w-md w-full">
            <div className="aspect-[4/3] bg-zinc-800 rounded-sm overflow-hidden grayscale opacity-60">
              <img src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800" alt="Jeugd Performance" className="w-full h-full object-cover" loading="lazy" width="800" height="600" />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact Strip */}
      <section className="border-y border-zinc-100 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10 md:gap-12">
          <div className="flex items-center gap-4 group cursor-pointer w-full md:w-auto" onClick={() => window.open('https://wa.me/31611873590')}>
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-zinc-50 rounded-full flex items-center justify-center text-[#25D366] group-hover:bg-[#25D366] group-hover:text-white transition-all">
              <MessageCircle size={24} />
            </div>
            <div>
              <span className="block text-[10px] font-bold tracking-widest text-zinc-400 uppercase">WhatsApp Direct</span>
              <span className="text-lg sm:text-xl font-bold">06-11 87 35 90</span>
            </div>
          </div>
          <div className="flex items-center gap-4 group cursor-pointer w-full md:w-auto" onClick={() => window.location.href = 'mailto:info@sinasportlab.nl'}>
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-zinc-50 rounded-full flex items-center justify-center text-[#007AFF] group-hover:bg-[#007AFF] group-hover:text-white transition-all">
              <Mail size={24} />
            </div>
            <div>
              <span className="block text-[10px] font-bold tracking-widest text-zinc-400 uppercase">Mail Ons</span>
              <span className="text-lg sm:text-xl font-bold">info@sinasportlab.nl</span>
            </div>
          </div>
          <div className="flex items-center gap-4 group cursor-pointer w-full md:w-auto" onClick={() => window.location.href = 'tel:+31611873590'}>
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-zinc-50 rounded-full flex items-center justify-center text-black group-hover:bg-black group-hover:text-white transition-all">
              <Phone size={24} />
            </div>
            <div>
              <span className="block text-[10px] font-bold tracking-widest text-zinc-400 uppercase">Bel Direct</span>
              <span className="text-lg sm:text-xl font-bold">06-11 87 35 90</span>
            </div>
          </div>
        </div>
      </section>

      {/* Lab Insight Strip */}
      <section className="py-20 sm:py-40 px-6 max-w-7xl mx-auto text-center">
        <h2 className="text-4xl sm:text-8xl font-black tracking-tighter uppercase italic leading-none mb-12">Waar data <br className="hidden sm:block" />beweging wordt.</h2>
        <p className="text-lg sm:text-xl text-zinc-500 font-light mb-16 sm:mb-20 max-w-2xl mx-auto italic">SINA Sportlab combineert passie voor sport met wetenschappelijke validatie. Van jeugdtalent tot professional.</p>
        <button onClick={() => onNavigate('about')} className="group flex items-center gap-6 text-[10px] font-black tracking-[0.4em] uppercase mx-auto border-b border-black pb-2 active:opacity-50 transition-opacity">
          OVER SINA SPORTLAB <ArrowRight className="group-hover:translate-x-4 transition-transform duration-500" />
        </button>
      </section>
    </div>
  );
};

export default Home;
