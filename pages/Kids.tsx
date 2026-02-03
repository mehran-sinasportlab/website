
import React from 'react';
/* Added CheckCircle2 to imports */
import { Target, Users, BookOpen, BarChart2, ArrowRight, Activity, Brain, Shield, CheckCircle2 } from 'lucide-react';

const Scholieren: React.FC = () => {
  const stats = [
    { label: "Minder lichaamsbewustzijn", value: "70%" },
    { label: "Mist kracht/uithoudingsvermogen", value: "60%" },
    { label: "Verborgen fysieke klachten", value: "30%" },
    { label: "Wil bewegen maar mist stimulans", value: "25%" },
    { label: "Onduidelijke belemmeringen", value: "80%" }
  ];

  return (
    <div className="animate-in fade-in duration-1000 bg-white">
      {/* Hero */}
      <section className="px-6 py-40 max-w-7xl mx-auto">
        <div className="max-w-4xl">
          <span className="text-[10px] font-bold tracking-[0.4em] text-zinc-400 uppercase mb-8 block">MAATSCHAPPELIJK PROJECT</span>
          <h1 className="text-6xl md:text-9xl font-black tracking-tighter leading-[0.8] mb-16">VOOR SCHOLIEREN.</h1>
          <p className="text-2xl md:text-3xl text-zinc-500 font-light leading-relaxed mb-20">
            Een gezonde toekomst begint bij vroegtijdige signalering. Wij bieden scholen en gemeenten inzicht in de motorische en cognitieve ontwikkeling van de volgende generatie.
          </p>
        </div>

        {/* Core Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-40">
           {[
             { icon: <Target />, title: "Motoriek Scan", desc: "Grondig onderzoek naar motorische vaardigheden." },
             { icon: <Brain />, title: "Cognitieve Motorik", desc: "Inzicht in waarneming en besluitvorming." },
             { icon: <Users />, title: "Beweegbeleving", desc: "Hoe ervaart een leerling sport en beweging?" },
             { icon: <BarChart2 />, title: "Data Inzicht", desc: "Objectieve rapportages voor school and ouders." }
           ].map((item, i) => (
             <div key={i} className="p-10 bg-zinc-50 border border-zinc-100 hover:border-black transition-all">
               {/* Fix for React.cloneElement type check by casting to React.ReactElement<any> */}
               <div className="mb-8 text-black">{React.cloneElement(item.icon as React.ReactElement<any>, { size: 32, strokeWidth: 1 })}</div>
               <h3 className="text-xl font-bold mb-4 tracking-tight uppercase italic">{item.title}</h3>
               <p className="text-sm text-zinc-400 font-light leading-relaxed">{item.desc}</p>
             </div>
           ))}
        </div>

        {/* Data Insights Section */}
        <div className="bg-black text-white p-12 md:p-24 mb-40 rounded-3xl overflow-hidden relative">
           <div className="max-w-3xl relative z-10">
              <span className="text-[10px] font-bold tracking-[0.4em] text-zinc-500 uppercase mb-12 block">WAAROM DIT NODIG IS</span>
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-16 italic uppercase leading-none">Data liegt niet.</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                 {stats.map((s, i) => (
                   <div key={i} className="border-b border-zinc-800 pb-8 group">
                      <div className="text-5xl font-black mb-2 transition-transform group-hover:translate-x-4 duration-500">{s.value}</div>
                      <div className="text-[10px] font-bold tracking-widest text-zinc-500 uppercase">{s.label}</div>
                   </div>
                 ))}
              </div>
           </div>
           <Activity className="absolute -bottom-20 -right-20 opacity-10 text-white" size={600} />
        </div>

        {/* Workshops */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center mb-40">
          <div>
            <span className="text-[10px] font-bold tracking-[0.4em] text-zinc-400 uppercase mb-8 block">EDUCATIE</span>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-10 leading-none uppercase italic">Workshops voor studenten.</h2>
            <p className="text-xl text-zinc-500 font-light leading-relaxed mb-12">
              Wij verzorgen verdiepende sessies voor studenten Sport & Bewegen, Fysiotherapie en Psychologie. Praktijkgericht inzicht in biomechanica, preventie en motivatiegedrag.
            </p>
            <div className="space-y-6 mb-12">
               {["Lichaamsbewustzijn", "Blessurepreventie", "Motivatie & Gedrag", "Fysieke & Mentale belasting"].map((t, i) => (
                 <div key={i} className="flex items-center gap-4 text-xs font-bold tracking-widest uppercase">
                    <CheckCircle2 size={16} /> {t}
                 </div>
               ))}
            </div>
            <button className="bg-black text-white px-12 py-5 text-xs font-bold tracking-widest hover:bg-zinc-800 transition-all flex items-center gap-4">
              BOEK EEN WORKSHOP <ArrowRight size={16} />
            </button>
          </div>
          <div className="aspect-square bg-zinc-200 overflow-hidden rounded-3xl grayscale">
             <img src="https://images.unsplash.com/photo-1516238840914-94dfc0c873ae?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover" alt="Workshop SINA" />
          </div>
        </div>

        {/* Final Statement */}
        <div className="text-center max-w-4xl mx-auto border-t border-zinc-100 pt-32">
           <h2 className="text-4xl md:text-7xl font-black tracking-tighter leading-none mb-12 uppercase italic">Focus op de volgende generatie.</h2>
           <p className="text-xl text-zinc-500 font-light leading-relaxed mb-16">
              Samen met scholen bouwen wij aan een fundament van fysieke en cognitieve intelligentie. Voorkom uitval, vergroot zelfvertrouwen en investeer in duurzame gezondheid.
           </p>
           <button className="text-black px-12 py-5 text-xs font-black tracking-[0.4em] uppercase border-b-2 border-black hover:opacity-50 transition-all">
              NEEM CONTACT OP VOOR UW SCHOOL
           </button>
        </div>
      </section>
    </div>
  );
};

export default Scholieren;
