
import React, { useState, useEffect } from 'react';
import { 
  ChevronRight, ArrowRight, ShieldCheck, CheckCircle2, 
  Info, MessageCircle, Mail, MapPin, ExternalLink, 
  Stethoscope, Zap, Target, Activity, ClipboardCheck, Dumbbell, Phone
} from 'lucide-react';

const PricingPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('fysio');

  const categories = [
    { id: 'fysio', label: 'Fysio', icon: <Stethoscope size={16} /> },
    { id: 'performance-test', label: 'Performance Test', icon: <Target size={16} /> },
    { id: 'performance-training', label: 'Performance Training', icon: <Zap size={16} /> },
    { id: 'analyse', label: 'Analyse', icon: <Activity size={16} /> },
    { id: 'metingen', label: 'Metingen', icon: <ClipboardCheck size={16} /> },
    { id: 'strippenkaarten', label: 'Strippenkaarten', icon: <ShieldCheck size={16} /> },
    { id: 'rapportages', label: 'Rapportages', icon: <ExternalLink size={16} /> },
  ];

  const pricingData = {
    fysio: [
      { name: "Intake & onderzoek", price: "€ 60", highlight: true },
      { name: "Zitting fysiotherapie", price: "€ 42" },
      { name: "Sportfysiotherapie", price: "€ 42" },
      { name: "Dry Needling**", price: "€ 42" },
      { name: "Biomechanisch tapen**", price: "€ 42" },
      { name: "Lange zitting", price: "€ 52" },
      { name: "Zitting buiten reguliere werktijden", price: "€ 52" },
      { name: "Telefonische zitting", price: "€ 20" },
      { name: "Niet nagekomen afspraak", price: "€ 33,60" },
      { name: "Littekenbehandeling", price: "€ 57,50" },
      { name: "Lymfedrainage", price: "€ 57,50" },
      { name: "Anti-cellulite behandeling**", price: "prijs op aanvraag" },
      { name: "Anti-cellulite behandeling Pakket** (10x)", price: "Prijs op aanvraag" },
    ],
    'performance-test': [
      { name: "1 persoon", price: "€ 128,08", suffix: "incl. BTW", highlight: true },
      { name: "2 Personen", price: "€ 111,73", suffix: "p.p. incl. BTW" },
      { name: "3+ Personen", price: "€ 89,93", suffix: "p.p. incl. BTW" },
    ],
    'performance-training': [
      { name: "30 minuten", price: "€ 40,88", suffix: "incl. BTW" },
      { name: "60 minuten", price: "€ 81,75", suffix: "incl. BTW", highlight: true },
      { name: "60 minuten 2 personen", price: "€ 65,40", suffix: "p.p. incl. BTW" },
    ],
    analyse: [
      { name: "Echo", price: "€ 60" },
      { name: "Isoforce", price: "€ 87,50", highlight: true },
    ],
    metingen: [
      { name: "Loopanalyse", price: "€ 87,50", highlight: true },
      { name: "TMG kort", price: "€ 62,50" },
      { name: "TMG lang", price: "€ 100" },
      { name: "Nordbord meting", price: "€ 40" },
      { name: "Forcedecks analyse", price: "€ 40" },
      { name: "Kneelax meting", price: "€ 40" },
    ],
    strippenkaarten: [
      { name: "Fysio (1x intake + 10 behandelingen)", price: "€ 345", highlight: true },
      { name: "Fysio (1x intake + 5 behandelingen)", price: "€ 220" },
      { name: "Fysio (5 behandelingen)", price: "€ 170" },
      { name: "Performance (1x test + 10 trainingen)", price: "€ 415" },
      { name: "SIMUST Academy (2x test + 10 trainingen)", price: "€ 650" },
      { name: "SIMUST Training (10 Trainingen)", price: "€ 355" },
    ],
    rapportages: [
      { name: "Korte / eenvoudige rapportages", price: "€ 28,50" },
      { name: "Uitgebreide / gecompliceerde rapportages", price: "€ 48", highlight: true },
    ]
  };

  const scrollToSection = (id: string) => {
    setActiveTab(id);
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 180;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <div className="animate-in fade-in duration-1000 bg-white selection:bg-black selection:text-white pb-40">
      {/* Hero Section */}
      <section className="px-6 pt-32 sm:pt-40 max-w-7xl mx-auto mb-20">
        <div className="max-w-4xl">
          <span className="text-[10px] font-bold tracking-[0.4em] text-zinc-400 uppercase mb-8 block italic">TRANSPARANTIE</span>
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.8] mb-12 italic uppercase">
            TARIEVEN.
          </h1>
          <p className="text-xl sm:text-2xl text-zinc-500 font-light leading-relaxed max-w-2xl italic">
            Heldere voorwaarden en overzichtelijke prijzen. Vergoeding vaak mogelijk via de (aanvullende) verzekering, zeker voor jeugd tot 18 jaar.
          </p>
        </div>
      </section>

      {/* Sticky Category Selector */}
      <div className="sticky top-20 sm:top-24 z-40 bg-white/95 blur-backdrop border-y border-zinc-100 mb-20 overflow-visible">
        <div className="max-w-7xl mx-auto px-6 flex items-center gap-2 sm:gap-4 py-4 overflow-x-auto scroll-hide no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => scrollToSection(cat.id)}
              className={`flex items-center gap-2 px-4 py-2 whitespace-nowrap text-[10px] font-bold tracking-widest uppercase transition-all rounded-full border ${
                activeTab === cat.id 
                  ? 'bg-black text-white border-black' 
                  : 'bg-zinc-50 text-zinc-400 border-zinc-100 hover:border-zinc-300 hover:text-black'
              }`}
            >
              {cat.icon} {cat.label}
            </button>
          ))}
        </div>
      </div>

      <div className="px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-20">
        {/* Main Price Column */}
        <div className="lg:col-span-8 space-y-32">
          {Object.entries(pricingData).map(([id, items]) => {
            const category = categories.find(c => c.id === id);
            return (
              <section id={id} key={id} className="scroll-mt-40">
                <div className="flex items-center justify-between border-b border-black pb-6 mb-10">
                  <h2 className="text-3xl font-black tracking-tighter uppercase italic flex items-center gap-4">
                    <span className="text-zinc-200">/</span> {category?.label}
                  </h2>
                  <span className="text-[9px] font-bold tracking-widest text-zinc-400 uppercase hidden sm:block">
                    {id === 'fysio' ? '*PRIJS PER ZITTING' : 'PRIJS INCL. BTW'}
                  </span>
                </div>
                
                <div className="grid grid-cols-1 gap-1">
                  {items.map((item: any, idx) => (
                    <div 
                      key={idx}
                      className={`group flex items-center justify-between p-4 sm:p-6 transition-all duration-300 border-b border-zinc-50 hover:bg-zinc-50/50 ${item.highlight ? 'bg-zinc-50/30' : ''}`}
                    >
                      <div className="flex flex-col gap-1">
                        <span className={`text-sm sm:text-base font-medium tracking-tight uppercase italic transition-colors ${item.highlight ? 'text-black' : 'text-zinc-500 group-hover:text-black'}`}>
                          {item.name}
                        </span>
                        {item.highlight && (
                          <span className="text-[8px] font-bold tracking-[0.3em] text-zinc-300 uppercase">Aanbevolen</span>
                        )}
                      </div>
                      <div className="text-right flex flex-col items-end">
                        <span className="text-base sm:text-xl font-black tabular-nums tracking-tighter italic">
                          {item.price}
                        </span>
                        {item.suffix && (
                          <span className="text-[8px] font-bold tracking-widest text-zinc-300 uppercase">
                            {item.suffix}
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            );
          })}

          {/* Fitness Reference */}
          <section id="fitness" className="p-12 sm:p-20 bg-zinc-900 text-white rounded-xs relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-10 opacity-5 pointer-events-none group-hover:scale-110 transition-transform duration-1000">
              <Dumbbell size={200} />
            </div>
            <div className="relative z-10 max-w-lg">
              <h2 className="text-4xl font-black tracking-tighter italic uppercase mb-6">Fitness & Training.</h2>
              <p className="text-zinc-400 font-light leading-relaxed mb-10 italic">
                Voor ons volledige fitness-aanbod, abonnementen en groepslessen verwijzen wij u graag naar de specifieke prijslijst.
              </p>
              <button 
                onClick={() => window.open('#services', '_self')}
                className="bg-white text-black px-10 py-5 text-[10px] font-bold tracking-[0.3em] uppercase hover:bg-zinc-200 transition-all flex items-center gap-4 active:scale-95"
              >
                BEKIJK PRIJSLIJST FITNESS <ArrowRight size={14} />
              </button>
            </div>
          </section>
        </div>

        {/* Sidebar: Conditions & Trust */}
        <div className="lg:col-span-4 lg:sticky lg:top-48 self-start space-y-12">
          <div className="p-10 border border-zinc-100 bg-zinc-50/30 rounded-xs space-y-8">
            <div className="flex items-center gap-4 text-black mb-2">
              <Info size={24} strokeWidth={1.5} />
              <h3 className="text-xl font-black tracking-tighter uppercase italic">Vergoeding & Voorwaarden.</h3>
            </div>
            
            <div className="space-y-6 text-[11px] leading-relaxed text-zinc-500 font-medium italic">
              <p className="border-l-2 border-zinc-200 pl-4">
                <span className="text-black font-bold">*</span> Indien u een aanvullende zorgverzekering heeft, vallen de fysiotherapeutische interventies hieronder.
              </p>
              <p className="border-l-2 border-black pl-4 text-black">
                <span className="font-bold">Jeugd tot 18 jaar:</span> Valt onder de basisverzekering en behandelingen worden 100% vergoed.
              </p>
              <p className="border-l-2 border-zinc-200 pl-4">
                <span className="text-black font-bold">**</span> Bij de volgende sessies wordt een eigen bijdrage in rekening gebracht:
              </p>
              <ul className="space-y-2 pl-4 list-disc marker:text-black">
                <li>Dry needling: € 14,95 (eenmalig per jaar)</li>
                <li>Biomechanisch tapen: € 14,95 (per rol)</li>
                <li>Bodywear: € 30 (eenmalige aanschafkosten)</li>
              </ul>
              <p className="text-zinc-400 pt-4 border-t border-zinc-100">
                Niet nagekomen afspraken dienen minimaal 24 uur van tevoren te worden afgezegd.
              </p>
            </div>
          </div>

          <div className="p-10 border border-zinc-100 bg-white shadow-xl space-y-8">
             <h4 className="text-[10px] font-bold tracking-[0.4em] text-zinc-400 uppercase italic">VRAGEN OVER TARIEVEN?</h4>
             <div className="space-y-4">
                <a href="https://wa.me/31611873590" className="flex items-center justify-between p-6 bg-zinc-50 hover:bg-black hover:text-white transition-all group rounded-xs">
                   <div className="flex items-center gap-4">
                      <MessageCircle size={20} className="text-[#25D366] group-hover:text-white" />
                      <span className="text-[10px] font-bold tracking-widest uppercase italic">WhatsApp Direct</span>
                   </div>
                   <ChevronRight size={14} />
                </a>
                <a href="mailto:info@sinasportlab.nl" className="flex items-center justify-between p-6 bg-zinc-50 hover:bg-black hover:text-white transition-all group rounded-xs">
                   <div className="flex items-center gap-4">
                      <Mail size={20} className="text-zinc-400 group-hover:text-white" />
                      <span className="text-[10px] font-bold tracking-widest uppercase italic">E-mail Ons</span>
                   </div>
                   <ChevronRight size={14} />
                </a>
             </div>
             <button 
              onClick={() => window.open('#intake', '_self')}
              className="w-full py-6 bg-black text-white text-[10px] font-bold tracking-[0.4em] uppercase hover:bg-zinc-800 transition-all active:scale-95"
             >
               PLAN INTAKE
             </button>
          </div>

          <div className="flex items-center justify-center gap-4 opacity-30 pt-10 grayscale">
            <ShieldCheck size={32} />
            <span className="text-[9px] font-black tracking-[0.2em] uppercase max-w-[120px]">ERKENDE ZORGVERLENER BIG-GEREGISTREERD</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
