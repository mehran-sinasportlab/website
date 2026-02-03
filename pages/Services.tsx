
import React, { useState, useMemo, useRef } from 'react';
import { 
  Target, Users, Zap, User, ArrowRight, ShieldCheck, 
  ChevronRight, X, CheckCircle2, 
  Dumbbell, Activity, Search, Trophy, Timer, Briefcase, GraduationCap, Brain, BarChart3, HeartHandshake, Smile
} from 'lucide-react';

type ServiceRoute = 'Sporters' | 'Voetballers' | 'Verenigingen' | 'Scholen' | 'Zorginstellingen' | 'Teambuilding' | 'All';

interface ServiceDetail {
  id: string;
  routes: ServiceRoute[];
  category: string;
  icon: React.ReactNode;
  title: string;
  shortPitch: string;
  bullets: string[];
  fullDesc: string;
  features: string[];
  ctaText: string;
  imageUrl: string;
}

const services: ServiceDetail[] = [
  // --- SPORTERS ---
  {
    id: 'pt-general',
    routes: ['Sporters'],
    category: 'Kracht & Fitheid',
    icon: <User strokeWidth={1} />,
    title: "Personal Training",
    shortPitch: "1-op-1 krachttraining gericht op sterker worden en algemene fitheid.",
    bullets: ["Persoonlijke coaching", "Resultaatgericht", "Fysieke groei"],
    fullDesc: "Onze Personal Training is gericht op het behalen van jouw persoonlijke doelen. Geen standaard schema, maar een plan dat past bij jouw lichaam en ambitie.",
    features: ["Fullbody analyse", "Krachtopbouw", "Structurele begeleiding"],
    ctaText: "START PT TRAJECT",
    imageUrl: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: 'hyrox-functional',
    routes: ['Sporters'],
    category: 'Functional',
    icon: <Zap strokeWidth={1} />,
    title: "Functional / HYROX",
    shortPitch: "Intensieve full-body training voor maximale conditie en uithoudingsvermogen.",
    bullets: ["Event-voorbereiding", "Functionele kracht", "Hoge intensiteit"],
    fullDesc: "Bereid je voor op de ultieme fysieke uitdaging. Onze Functional trainingen focussen op kracht-uithoudingsvermogen voor sporters die een doel zoeken.",
    features: ["HYROX specifieke oefeningen", "Conditie pieken", "Full-body focus"],
    ctaText: "ONTDEK FUNCTIONAL",
    imageUrl: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: 'bootcamp',
    routes: ['Sporters'],
    category: 'Groepstraining',
    icon: <Activity strokeWidth={1} />,
    title: "SINA Bootcamp",
    shortPitch: "Energieke groepslessen in afwisselende binnen- en buitenworkouts.",
    bullets: ["Kracht & Conditie", "Teamwork", "Alle niveaus"],
    fullDesc: "Onze Bootcamps combineren kracht en doorzettingsvermogen met plezier. Gebruik van kettlebells, battle ropes en banden voor maximale variatie.",
    features: ["Binnen & Buiten", "Kettlebells & Ropes", "Groepsdynamiek"],
    ctaText: "DOE MEE MET BOOTCAMP",
    imageUrl: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=1200"
  },

  // --- VOETBALLERS: TRAINING FORMS ---
  {
    id: 'voetbal-pt',
    routes: ['Voetballers'],
    category: 'Trainingvorm',
    icon: <User strokeWidth={1} />,
    title: "Personal Performance",
    shortPitch: "Individuele 1-op-1 training met focus op jouw specifieke positie en doelen.",
    bullets: ["Vaste expert-trainer", "Maatwerk schema", "Focus op techniek"],
    fullDesc: "Jij krijgt een vaste trainer die zich volledig richt op jouw ontwikkeling als voetballer. Ideaal voor ambitieuze spelers die een individueel traject willen volgen.",
    features: ["Specifiek positie-gericht", "Biomechanische checks", "Persoonlijke coaching"],
    ctaText: "PLAN PERSONAL TRAINING",
    imageUrl: "https://images.unsplash.com/photo-1551958219-acbc608c6377?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: 'voetbal-duo',
    routes: ['Voetballers'],
    category: 'Trainingvorm',
    icon: <Users strokeWidth={1} />,
    title: "Duo Performance",
    shortPitch: "Samen beter worden met een partner, met behoud van individuele data-focus.",
    bullets: ["Samen motiveren", "Competitief element", "Kostenbewust"],
    fullDesc: "Samen trainen geeft extra motivatie. Bij Duo Training werk je met een partner, maar blijft de aandacht persoonlijk. Elke speler krijgt zijn eigen analyse.",
    features: ["Interactie-gericht", "Meetbare vooruitgang", "Gedeelde motivatie"],
    ctaText: "START DUO TRAINING",
    imageUrl: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: 'voetbal-group',
    routes: ['Voetballers'],
    category: 'Trainingvorm',
    icon: <Activity strokeWidth={1} />,
    title: "Small Group Performance",
    shortPitch: "Train in kleine groepen van 4 tot 6 spelers met hoge intensiteit.",
    bullets: ["Teamdynamiek", "Persoonlijke aandacht", "Match-speed"],
    fullDesc: "In kleine groepen train je met de kracht van teamdynamiek én persoonlijke aandacht. Elke speler wordt individueel gevolgd.",
    features: ["Hoge intensiteit", "Wedstrijd-gericht", "Sociale motivatie"],
    ctaText: "DOE MEE MET DE GROEP",
    imageUrl: "https://images.unsplash.com/photo-1517438476312-10d79c67750d?auto=format&fit=crop&q=80&w=1200"
  },

  // --- VOETBALLERS: PROGRAMS ---
  {
    id: 'performance-basis',
    routes: ['Voetballers'],
    category: 'Programma',
    icon: <Target strokeWidth={1} />,
    title: "Performance - Basis",
    shortPitch: "Het fundament voor voetballers die fysiek en mentaal vooruit willen.",
    bullets: ["Lichaamsanalyse", "Kracht & Explosiviteit", "Mentale basis"],
    fullDesc: "Een doordacht startpunt voor elke voetballer. We meten je lichaamssamenstelling, kracht, snelheid en uithoudingsvermogen.",
    features: ["Persoonlijk prestatieprofiel", "Kracht & Vermogen test", "Reactiesnelheid check"],
    ctaText: "BEKIJK BASIS PROGRAMMA",
    imageUrl: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 'performance-plus',
    routes: ['Voetballers'],
    category: 'Programma',
    icon: <Zap strokeWidth={1} />,
    title: "Performance+",
    shortPitch: "Het meest uitgebreide programma voor voetballers die maximaal gaan.",
    bullets: ["Neurofeedback", "Hartslagvariabiliteit", "Voedingsanalyse"],
    fullDesc: "Dit programma gaat dieper. Naast fysieke data meten we hartslagvariabiliteit, neurofeedback en visuele functies.",
    features: ["Neuro-cognitieve tests", "Stress/Herstel balans", "Voedingsplan op maat"],
    ctaText: "ONTDEK PERFORMANCE+",
    imageUrl: "https://images.unsplash.com/photo-1516238840914-94dfc0c873ae?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: 'simust-academy',
    routes: ['Voetballers'],
    category: 'Systeem',
    icon: <Brain strokeWidth={1} />,
    title: "SIMUST Academy",
    shortPitch: "Train in de interactieve 360° arena voor spelinzicht en besluitvorming.",
    bullets: ["360° awareness", "Beslissen onder druk", "Real-time video feedback"],
    fullDesc: "SIMUST is een unieke, gesimuleerde trainingsomgeving exclusief voor voetballers. Hier trainen we cognitieve vaardigheden.",
    features: ["Interactieve Arena", "Beeldanalyse", "Data-vergelijking"],
    ctaText: "TEST JEZELF IN SIMUST",
    imageUrl: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80&w=1200"
  },

  // --- VERENIGINGEN ---
  {
    id: 'club-measurements',
    routes: ['Verenigingen'],
    category: 'Team Support',
    icon: <Users strokeWidth={1} />,
    title: "Teammetingen & Preventie",
    shortPitch: "Structurele monitoring van teams voor optimale belastbaarheid en preventie.",
    bullets: ["Belastbaarheids-profiel", "Preventie rapportages", "Data voor trainers"],
    fullDesc: "Wij ondersteunen verenigingen met professionele teammetingen. Krijg inzicht in de fysieke status van je spelers.",
    features: ["Team rapportages", "Periodisering advies", "Vroegtijdige signalering"],
    ctaText: "VRAAG CLUB-OFFERTE AAN",
    imageUrl: "https://images.unsplash.com/photo-1551958219-acbc608c6377?auto=format&fit=crop&q=80&w=1200"
  },

  // --- SCHOLEN ---
  {
    id: 'school-gymlessen',
    routes: ['Scholen'],
    category: 'Onderwijs',
    icon: <Dumbbell strokeWidth={1} />,
    title: "Functionele Gymlessen",
    shortPitch: "Structureel en doorlopend bewegingsprogramma binnen het onderwijs.",
    bullets: ["Conditie & Motoriek", "Mentale weerbaarheid", "HYROX-eindevent"],
    fullDesc: "Een structureel sportprogramma gericht op de fysieke en mentale ontwikkeling van scholieren. De lessen combineren kracht, conditie en samenwerking in een uitdagende schoolomgeving.",
    features: ["Functionele warming-up", "Circuit training / HYROX", "Team-uitdagingen", "Traject-afsluiting event"],
    ctaText: "PLAN VOOR UW SCHOOL",
    imageUrl: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=1200"
  },

  // --- ZORGINSTELLINGEN ---
  {
    id: 'healthcare-group',
    routes: ['Zorginstellingen'],
    category: 'Zorg & Bewegen',
    icon: <HeartHandshake strokeWidth={1} />,
    title: "Begeleid Sporten & Bewegen",
    shortPitch: "Veilig en laagdrempelig bewegen voor cliënten van zorginstellingen.",
    bullets: ["Focus op plezier", "Duidelijke structuur", "Persoonlijke aandacht"],
    fullDesc: "Wij organiseren begeleide sport- en beweegmomenten die zijn afgestemd op belastbaarheid en motoriek. Geen 'standaard fitness', maar een programma met succeservaringen.",
    features: ["Functionele beweegvormen", "Kracht & Balans op niveau", "Rustige omgeving", "Deskundige zorgblik"],
    ctaText: "PLAN KENNISMAKING",
    imageUrl: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: 'healthcare-vitality',
    routes: ['Zorginstellingen'],
    category: 'Dagbesteding',
    icon: <Smile strokeWidth={1} />,
    title: "Positieve Daginvulling",
    shortPitch: "Bewegen als onderdeel van de dagbesteding voor betere lichaamsbeleving.",
    bullets: ["Ritme & Structuur", "Lichaamsbewustzijn", "Zelfvertrouwen"],
    fullDesc: "Ons programma helpt cliënten bij het opbouwen van ritme en zelfvertrouwen door middel van aangepaste sportoefeningen.",
    features: ["Individuele aandacht", "Kleine groepen", "Ontlasting personeel", "Meetbaar waar zinvol"],
    ctaText: "VRAAG VOORSTEL AAN",
    imageUrl: "https://images.unsplash.com/photo-1581056770613-39b9bbdc3310?auto=format&fit=crop&q=80&w=1200"
  },

  // --- TEAMBUILDING ---
  {
    id: 'teambuilding-vitality',
    routes: ['Teambuilding'],
    category: 'Business',
    icon: <Briefcase strokeWidth={1} />,
    title: "Business Teambuilding",
    shortPitch: "Maatwerkprogramma's gericht op energie, mindset en gezonde samenwerking.",
    bullets: ["Vitaliteit workshops", "Sportieve uitdaging", "Gezonde voeding focus"],
    fullDesc: "Versterk je team met een energieke dag in ons lab. Combinatie van fysieke activiteit en vitaliteit.",
    features: ["Maatwerk traject", "Reflectie & Actie", "Unieke locatie"],
    ctaText: "PLAN TEAM-EVENT",
    imageUrl: "https://images.unsplash.com/photo-1517438476312-10d79c67750d?auto=format&fit=crop&q=80&w=1200"
  }
];

const Services: React.FC = () => {
  // Default to 'Sporters' for a simpler initial view
  const [activeRoute, setActiveRoute] = useState<ServiceRoute>('Sporters');
  const [activeService, setActiveService] = useState<ServiceDetail | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const filteredServices = useMemo(() => {
    if (activeRoute === 'All') return services;
    return services.filter(s => s.routes.includes(activeRoute));
  }, [activeRoute]);

  const handleRouteSelect = (route: ServiceRoute) => {
    setActiveRoute(route);
    if (window.innerWidth < 768) {
      gridRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const routeConfig = [
    { 
      id: 'Sporters', 
      title: 'Sporters', 
      desc: 'Kracht & Fitheid', 
      icon: <Timer size={40} />,
      bg: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=800'
    },
    { 
      id: 'Voetballers', 
      title: 'Voetballers', 
      desc: 'Performance & SIMUST', 
      icon: <Trophy size={40} />,
      bg: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80&w=800'
    },
    { 
      id: 'Verenigingen', 
      title: 'Verenigingen', 
      desc: 'Team Support', 
      icon: <Users size={40} />,
      bg: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800'
    },
    { 
      id: 'Scholen', 
      title: 'Scholen', 
      desc: 'Voor Scholieren', 
      icon: <GraduationCap size={40} />,
      bg: 'https://images.unsplash.com/photo-1471286174890-9c112ffca5b4?auto=format&fit=crop&q=80&w=800'
    },
    { 
      id: 'Zorginstellingen', 
      title: 'Zorginstellingen', 
      desc: 'Zorg & Bewegen', 
      icon: <HeartHandshake size={40} />,
      bg: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&q=80&w=800'
    },
    { 
      id: 'Teambuilding', 
      title: 'Teambuilding', 
      desc: 'Vitaliteit & Business', 
      icon: <Briefcase size={40} />,
      bg: 'https://images.unsplash.com/photo-1517438476312-10d79c67750d?auto=format&fit=crop&q=80&w=800'
    }
  ];

  return (
    <div className="animate-in fade-in duration-1000 bg-white selection:bg-black selection:text-white overflow-x-hidden">
      {/* Detail Overlay */}
      {activeService && (
        <div className="fixed inset-0 z-[100] flex justify-end animate-in fade-in duration-300">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setActiveService(null)} />
          <div className="relative bg-white w-full max-w-xl h-full shadow-2xl animate-in slide-in-from-right duration-500 overflow-y-auto scroll-hide">
            <div className="sticky top-0 bg-white/80 backdrop-blur-md z-20 px-8 py-6 flex justify-between items-center border-b border-zinc-100">
              <span className="text-[10px] font-bold tracking-[0.3em] text-zinc-400 uppercase">{activeService.category}</span>
              <button onClick={() => setActiveService(null)} className="text-zinc-400 hover:text-black transition-colors">
                <X size={24} strokeWidth={1} />
              </button>
            </div>
            <div className="p-8 md:p-12">
              <div className="aspect-[16/9] w-full bg-zinc-100 mb-8 overflow-hidden grayscale rounded-xl">
                <img src={activeService.imageUrl} className="w-full h-full object-cover" alt={activeService.title} />
              </div>
              <h2 className="text-3xl font-black tracking-tighter mb-6 italic uppercase">{activeService.title}</h2>
              <p className="text-lg text-zinc-600 font-light leading-relaxed mb-8 italic">{activeService.fullDesc}</p>
              <div className="space-y-8 mb-12">
                <div>
                  <h4 className="text-[10px] font-bold tracking-[0.3em] uppercase text-zinc-400 mb-6">Wat we doen</h4>
                  <div className="grid grid-cols-1 gap-4">
                    {activeService.features.map((f, i) => (
                      <div key={i} className="flex items-center gap-4">
                        <CheckCircle2 size={16} className="text-black shrink-0" />
                        <span className="text-sm font-medium">{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <button className="w-full bg-black text-white py-6 text-xs font-bold tracking-[0.3em] uppercase hover:bg-zinc-800 transition-all">
                {activeService.ctaText}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Hero */}
      <section className="px-6 pt-24 pb-12 md:pt-32 md:pb-20 max-w-7xl mx-auto">
        <span className="text-[10px] font-bold tracking-[0.4em] text-zinc-400 uppercase mb-4 md:mb-8 block">ONZE AANBOD</span>
        <h1 className="text-5xl md:text-[8rem] font-black tracking-tighter leading-[0.8] mb-8 md:mb-12">DIENSTEN.</h1>
        <p className="text-lg md:text-2xl text-zinc-500 font-light leading-relaxed max-w-2xl italic">
          Kies de route die bij jouw doel past. Wij bieden gespecialiseerde oplossingen voor sporters, voetballers, clubs, scholen en zorginstellingen.
        </p>
      </section>

      {/* Route Selector */}
      <section className="px-6 pb-20 max-w-7xl mx-auto">
        <div className="flex flex-col gap-6">
          <div className="md:hidden flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <span className="text-[9px] font-black tracking-[0.3em] text-zinc-300 uppercase">Swipe → om meer routes te zien</span>
              {activeRoute !== 'All' ? (
                <button onClick={() => setActiveRoute('All')} className="text-[9px] font-bold tracking-widest text-zinc-500 uppercase">Toon alles</button>
              ) : (
                <button onClick={() => setActiveRoute('Sporters')} className="text-[9px] font-bold tracking-widest text-zinc-500 uppercase">Reset</button>
              )}
            </div>
            <span className="text-[8px] font-bold tracking-[0.2em] text-zinc-400 uppercase">Tik om te kiezen</span>
          </div>
          
          <div className="relative group/scroll-hint">
            {/* Horizontal scroll hints for mobile */}
            <div className="md:hidden absolute -right-4 top-0 bottom-4 w-12 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none opacity-60" />
            
            <div 
              ref={scrollRef}
              className="flex md:grid md:grid-cols-6 gap-4 overflow-x-auto scroll-hide snap-x snap-mandatory pb-4 relative z-0"
            >
              {routeConfig.map((route) => (
                <button 
                  key={route.id}
                  onClick={() => handleRouteSelect(route.id as ServiceRoute)}
                  className={`group min-w-[70vw] md:min-w-0 snap-center p-8 md:p-6 text-left border transition-all duration-700 rounded-xl flex flex-col justify-between h-[200px] relative overflow-hidden ${activeRoute === route.id ? 'border-black text-white' : 'border-zinc-100 bg-zinc-50 hover:border-zinc-300'}`}
                >
                  <div className="absolute inset-0 z-0">
                    <img 
                      src={route.bg} 
                      alt={route.title}
                      className={`w-full h-full object-cover grayscale transition-transform duration-[1.5s] ease-out ${activeRoute === route.id ? 'scale-110 opacity-40' : 'opacity-20 group-hover:scale-105 group-hover:opacity-30'}`}
                    />
                    <div className={`absolute inset-0 transition-colors duration-700 ${activeRoute === route.id ? 'bg-black/80' : 'bg-zinc-50/80 group-hover:bg-zinc-50/70'}`} />
                  </div>

                  <div className="relative z-10 text-zinc-400 group-hover:text-black transition-colors duration-500">
                    {/* Fix for React.cloneElement type check by casting to React.ReactElement<any> */}
                    {React.cloneElement(route.icon as React.ReactElement<any>, { 
                      size: 32, 
                      strokeWidth: 1,
                      className: activeRoute === route.id ? 'text-white' : ''
                    })}
                  </div>
                  
                  <div className="relative z-10">
                    <h3 className={`text-xl font-black tracking-tight uppercase italic leading-none mb-1 transition-colors duration-500 ${activeRoute === route.id ? 'text-white' : 'text-black'}`}>
                      {route.title}
                    </h3>
                    <p className={`text-[10px] font-medium tracking-widest uppercase transition-colors duration-500 ${activeRoute === route.id ? 'text-zinc-400' : 'text-zinc-500 group-hover:text-black'}`}>
                      {route.desc}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="hidden md:flex flex-col items-center gap-6 mt-8">
             <p className="text-[9px] font-bold tracking-[0.4em] text-zinc-400 uppercase italic">Klik een route om te filteren.</p>
             <div className="flex items-center gap-8">
               <button 
                onClick={() => setActiveRoute('All')} 
                className={`text-[10px] font-black tracking-[0.4em] uppercase transition-colors ${activeRoute === 'All' ? 'text-black underline underline-offset-8' : 'text-zinc-400 hover:text-black'}`}
               >
                 Toon alle diensten
               </button>
               {activeRoute === 'All' && (
                 <button 
                  onClick={() => setActiveRoute('Sporters')} 
                  className="text-[10px] font-black tracking-[0.4em] uppercase text-zinc-400 hover:text-black transition-colors"
                 >
                   Reset naar Sporters
                 </button>
               )}
             </div>
          </div>
        </div>
      </section>

      {/* Service Grid with Dynamic Backgrounds */}
      <section ref={gridRef} className="px-6 pb-40 max-w-7xl mx-auto scroll-mt-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredServices.map((service) => (
            <div 
              key={service.id}
              onClick={() => setActiveService(service)}
              className="group relative bg-black border border-zinc-900 flex flex-col h-full cursor-pointer overflow-hidden transition-all duration-700 hover:shadow-2xl"
            >
              <div className="absolute inset-0 z-0">
                <img 
                  src={service.imageUrl} 
                  alt={service.title} 
                  className="w-full h-full object-cover grayscale opacity-40 group-hover:opacity-60 group-hover:scale-105 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/20" />
              </div>

              <div className="relative z-10 p-8 md:p-10 flex flex-col h-full">
                <div className="mb-10 text-white/50 group-hover:text-white transition-all flex justify-between items-start">
                  {/* Fix for React.cloneElement type check by casting to React.ReactElement<any> */}
                  {React.cloneElement(service.icon as React.ReactElement<any>, { size: 32, strokeWidth: 1.5 })}
                  <div className="flex flex-wrap gap-1 justify-end">
                    <span className="text-[7px] font-black tracking-widest border border-white/10 px-2 py-1 uppercase bg-white/5 text-white/60">
                      {service.category}
                    </span>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold tracking-tighter mb-4 uppercase italic leading-tight text-white group-hover:translate-x-1 transition-transform">
                  {service.title}
                </h3>
                <p className="text-zinc-400 font-light leading-relaxed mb-8 flex-grow text-sm group-hover:text-zinc-300 transition-colors">
                  {service.shortPitch}
                </p>

                <div className="space-y-3 mb-10 border-t border-white/10 pt-8">
                  {service.bullets.map((b, i) => (
                    <div key={i} className="flex items-center gap-3 text-[10px] font-bold tracking-widest text-white/40 group-hover:text-white transition-colors uppercase">
                      <ShieldCheck size={12} className="opacity-40" /> {b}
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-4 text-[9px] font-black tracking-[0.2em] uppercase text-white group-hover:gap-6 transition-all">
                  Details <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black text-white py-40 px-6 text-center">
        <h2 className="text-5xl md:text-8xl font-black tracking-tighter mb-12 italic uppercase leading-tight">Start jouw<br/>traject.</h2>
        <button className="bg-white text-black px-14 py-8 text-xs font-black tracking-[0.4em] uppercase hover:bg-zinc-200 transition-all inline-flex items-center gap-4 active:scale-95">
          PLAN INTAKE <ArrowRight size={16} />
        </button>
      </section>
    </div>
  );
};

export default Services;
