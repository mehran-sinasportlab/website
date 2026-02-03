
import React from 'react';
import { ArrowRight, Star, GraduationCap, Briefcase, Heart, Users, ChevronRight } from 'lucide-react';

interface CareerProps {
  onNavigate: (path: string) => void;
}

const Careers: React.FC<CareerProps> = ({ onNavigate }) => {
  const whySina = [
    { 
      icon: <Star className="text-black" size={24} />, 
      title: "High-End Omgeving", 
      desc: "Werk met de nieuwste technologieën zoals SIMUST en geavanceerde biomechanische meetapparatuur." 
    },
    { 
      icon: <Users className="text-black" size={24} />, 
      title: "Multidisciplinair Team", 
      desc: "Nauw samenwerken met sportfysiotherapeuten, performance trainers en dataspecialisten." 
    },
    { 
      icon: <Heart className="text-black" size={24} />, 
      title: "Mensgericht & Data-gedreven", 
      desc: "Wij combineren persoonlijke aandacht met keiharde bewijsvoering voor het beste resultaat." 
    }
  ];

  const positions = [
    { title: "Geregistreerd Sportfysiotherapeut", type: "Fulltime / Parttime", location: "Assen" },
    { title: "Performance Coach (Voetbal focus)", type: "Parttime", location: "Assen" },
    { title: "Junior Marketeer (Stage)", type: "Stage", location: "Hybrid / Assen" },
    { title: "Open Sollicitatie", type: "Altijd welkom", location: "Alle locaties" }
  ];

  return (
    <div className="animate-in fade-in duration-1000 bg-white">
      {/* Hero */}
      <section className="px-6 py-40 max-w-7xl mx-auto">
        <div className="max-w-4xl">
          <span className="text-[10px] font-bold tracking-[0.4em] text-zinc-400 uppercase mb-8 block italic">JOIN THE LAB</span>
          <h1 className="text-6xl md:text-[8rem] font-black tracking-tighter leading-[0.8] mb-12">
            WERKEN BIJ <br/>SINA SPORTLAB.
          </h1>
          <p className="text-2xl md:text-3xl text-zinc-500 font-light leading-relaxed mb-16">
            Bouw mee aan de toekomst van sportperformance. Wij zoeken professionals die passie hebben voor data, beweging en structurele groei.
          </p>
          <button 
            onClick={() => onNavigate('contact')}
            className="bg-black text-white px-12 py-6 text-xs font-bold tracking-[0.3em] uppercase hover:bg-zinc-800 transition-all flex items-center gap-4"
          >
            SOLLICITEER DIRECT <ArrowRight size={16} />
          </button>
        </div>
      </section>

      {/* Why SINA */}
      <section className="bg-zinc-50 py-40 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-24 max-w-2xl">
            <h2 className="text-5xl font-black tracking-tighter mb-8 italic uppercase">Waarom SINA?</h2>
            <p className="text-zinc-500 font-light text-xl leading-relaxed">
              Bij SINA Sportlab geloven we in kwaliteit boven kwantiteit. Wij bieden een omgeving waar je jezelf kunt blijven ontwikkelen en kunt werken op het snijvlak van sport en wetenschap.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {whySina.map((item, i) => (
              <div key={i} className="p-10 bg-white border border-zinc-100 hover:border-black transition-all group">
                <div className="mb-8 p-4 bg-zinc-50 group-hover:bg-black group-hover:text-white transition-all inline-block">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 tracking-tight uppercase italic">{item.title}</h3>
                <p className="text-zinc-400 font-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="px-6 py-40 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter italic uppercase">Open posities.</h2>
          <div className="text-zinc-400 font-light text-sm tracking-widest uppercase">Assen & Omstreken</div>
        </div>
        <div className="space-y-4">
          {positions.map((pos, i) => (
            <div 
              key={i} 
              onClick={() => onNavigate('contact')}
              className="flex flex-col md:flex-row md:items-center justify-between p-10 border border-zinc-100 hover:border-black transition-all cursor-pointer group"
            >
              <div>
                <h3 className="text-2xl font-bold tracking-tight mb-2 group-hover:translate-x-2 transition-transform">{pos.title}</h3>
                <div className="flex gap-4 text-[10px] font-bold tracking-widest text-zinc-400 uppercase">
                  <span>{pos.type}</span>
                  <span className="text-zinc-200">|</span>
                  <span>{pos.location}</span>
                </div>
              </div>
              <div className="mt-8 md:mt-0 flex items-center gap-4 text-xs font-black tracking-[0.2em] uppercase opacity-0 group-hover:opacity-100 transition-all">
                BEKIJK FUNCTIE <ChevronRight size={16} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education / Internships */}
      <section className="bg-black text-white py-40 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div>
            <span className="text-[10px] font-bold tracking-[0.4em] text-zinc-500 uppercase mb-8 block">OPLEIDING & TALENT</span>
            <h2 className="text-5xl font-black tracking-tighter mb-10 italic uppercase leading-tight">Stages & <br/>Opleidingen.</h2>
            <p className="text-zinc-400 font-light text-xl leading-relaxed mb-12">
              Wij zijn een erkend leerbedrijf voor studenten Sport & Bewegen, Fysiotherapie en Bewegingswetenschappen. Leer van de besten in een lab-omgeving die nergens anders te vinden is.
            </p>
            <div className="flex items-center gap-6 p-8 border border-zinc-800 rounded-sm">
              <GraduationCap size={40} className="text-zinc-500" />
              <div>
                <h4 className="font-bold text-lg mb-1 italic">Bachelor / Master trajecten</h4>
                <p className="text-sm text-zinc-500">Mogelijkheden voor zowel praktijkstages als afstudeeronderzoeken.</p>
              </div>
            </div>
          </div>
          <div className="aspect-square bg-zinc-900 rounded-full overflow-hidden p-2 border border-zinc-800">
             <img 
               src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=800" 
               className="w-full h-full object-cover rounded-full grayscale opacity-50" 
               alt="SINA Education" 
             />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-40 px-6 max-w-4xl mx-auto text-center">
         <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-12 italic uppercase leading-tight">Geen passende vacature?</h2>
         <p className="text-xl text-zinc-500 font-light mb-16 italic">
           Stuur ons een open sollicitatie. Wij zijn altijd op zoek naar gedreven talent dat ons team in Assen kan versterken.
         </p>
         <button 
           onClick={() => onNavigate('contact')}
           className="bg-black text-white px-16 py-8 text-xs font-black tracking-[0.4em] uppercase hover:bg-zinc-800 transition-all inline-flex items-center gap-4"
         >
           STUUR BERICHT <ArrowRight size={16} />
         </button>
      </section>
    </div>
  );
};

export default Careers;
