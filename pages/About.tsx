
import React from 'react';
import { MapPin, Users, History, Award } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';

const dataPerformance = [
  { name: 'Start', power: 45, technique: 30 },
  { name: 'Week 4', power: 52, technique: 45 },
  { name: 'Week 8', power: 65, technique: 68 },
  { name: 'Week 12', power: 78, technique: 85 },
  { name: 'Week 16', power: 90, technique: 92 },
];

const dataInjuries = [
  { name: '2021', rate: 24 },
  { name: '2022', rate: 18 },
  { name: '2023', rate: 12 },
  { name: '2024', rate: 7 },
];

const About: React.FC = () => {
  return (
    <div className="relative overflow-visible">
      {/* 
          STICKY DIAGNOSIS: 
          Sticky failed because the parent <section> had 'animate-in' which applies transforms.
          FIX: Removed transforms from all parents and the sticky element itself.
      */}
      <section className="px-6 py-40 max-w-7xl mx-auto relative overflow-visible">
        {/* Main Grid: items-start is critical for sticky behavior of children */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-start mb-40 overflow-visible">
          
          {/* Left Column: Sticky Container (No transforms/animations on this level) */}
          <div className="lg:sticky lg:top-40 self-start z-10 overflow-visible">
            <div className="animate-in fade-in duration-1000">
              <span className="text-[10px] font-bold tracking-[0.4em] text-zinc-400 uppercase mb-8 block italic">ONS VERHAAL</span>
              <h1 className="text-6xl md:text-[8rem] font-black tracking-tighter leading-[0.8] mb-12 italic uppercase">
                SINA<br />SPORT<br />LAB.
              </h1>
              <div className="flex gap-10 mt-20">
                 <div className="animate-in fade-in slide-in-from-left duration-700 delay-300">
                    <h4 className="font-bold text-4xl italic">12+</h4>
                    <p className="text-xs font-bold tracking-widest text-zinc-400 mt-2">JAREN EXPERTISE</p>
                 </div>
                 <div className="animate-in fade-in slide-in-from-left duration-700 delay-500">
                    <h4 className="font-bold text-4xl italic">10.000+</h4>
                    <p className="text-xs font-bold tracking-widest text-zinc-400 mt-2">TESTCASES</p>
                 </div>
              </div>
            </div>
          </div>
          
          {/* Right Column: Scrollable Content */}
          <div className="space-y-24">
            <div className="animate-in fade-in duration-1000 delay-200">
              <p className="text-3xl font-light leading-relaxed italic">
                SINA Sportlab is ontstaan vanuit de passie om sporters beter te maken – niet alleen fysiek, maar ook mentaal en cognitief.
              </p>
              
              <div className="space-y-12 text-zinc-500 font-light text-xl leading-relaxed mt-12">
                <p className="italic">
                  In ons eerste centrum hebben wij een unieke aanpak ontwikkeld waar fysiotherapie, performance, analyse en fitness samenkomen. Hier hebben wij jarenlang ervaring opgedaan met het begeleiden van sporters van alle niveaus: van jeugdspelers tot topsporters.
                </p>
                
                <div className="pt-10">
                  <h3 className="text-black font-black text-4xl tracking-tighter uppercase italic mb-8">Waarom Assen?</h3>
                  <p className="italic">
                    De regio Noord is rijk aan sporttalent en ambitieuze clubs. Met de opening van <span className="text-black font-medium">SINA Sportlab Assen</span> brengen wij hoogwaardige cognitieve performance en sportfysiotherapie naar het Noorden.
                  </p>
                </div>

                <div className="pt-16 grid grid-cols-1 sm:grid-cols-2 gap-4 text-[10px] font-black tracking-[0.2em] text-black uppercase">
                   <div className="flex items-center gap-6 p-8 border border-zinc-100 bg-zinc-50/30 hover:border-black transition-all group">
                      <History size={24} strokeWidth={1} className="text-zinc-400 group-hover:text-black transition-colors" /> 
                      <span>EXPERTISE SINDS 2012</span>
                   </div>
                   <div className="flex items-center gap-6 p-8 border border-zinc-100 bg-zinc-50/30 hover:border-black transition-all group">
                      <Award size={24} strokeWidth={1} className="text-zinc-400 group-hover:text-black transition-colors" /> 
                      <span>TOP-LEVEL EXPERTISE</span>
                   </div>
                   <div className="flex items-center gap-6 p-8 border border-zinc-100 bg-zinc-50/30 hover:border-black transition-all group">
                      <Users size={24} strokeWidth={1} className="text-zinc-400 group-hover:text-black transition-colors" /> 
                      <span>MULTIDISCIPLINAIR TEAM</span>
                   </div>
                   <div className="flex items-center gap-6 p-8 border border-zinc-100 bg-zinc-50/30 hover:border-black transition-all group">
                      <MapPin size={24} strokeWidth={1} className="text-zinc-400 group-hover:text-black transition-colors" /> 
                      <span>REGIO ASSEN & DRENTHE</span>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Integrated Insights Section */}
        <div className="border-t border-zinc-100 pt-40 animate-in fade-in duration-1000">
          <div className="max-w-3xl mb-24">
            <span className="text-[10px] font-bold tracking-[0.4em] text-zinc-400 uppercase mb-8 block italic">RESULTATEN & INZICHTEN</span>
            <h2 className="text-5xl md:text-8xl font-black tracking-tighter leading-none mb-12 italic uppercase">Data spreekt.</h2>
            <p className="text-xl md:text-2xl text-zinc-500 font-light leading-relaxed italic">
              Onze resultaten zijn kwantificeerbaar. We aggregeren data uit duizenden trajecten om onze methode continu te verfijnen.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-32">
            <div className="p-12 bg-zinc-50/50 border border-zinc-100 rounded-xs">
              <h3 className="text-2xl font-bold mb-8 italic uppercase tracking-tight">Performance Groei (Index)</h3>
              <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={dataPerformance}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e4e4e7" />
                    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#71717a', fontWeight: 'bold' }} />
                    <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#71717a', fontWeight: 'bold' }} />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#000', border: 'none', borderRadius: '4px', color: '#fff', fontSize: '12px' }}
                      itemStyle={{ color: '#fff' }}
                    />
                    <Line type="monotone" dataKey="power" stroke="#000" strokeWidth={3} dot={{ r: 4, fill: '#000' }} activeDot={{ r: 6 }} name="Power Output" />
                    <Line type="monotone" dataKey="technique" stroke="#a1a1aa" strokeWidth={2} strokeDasharray="5 5" dot={{ r: 2 }} name="Technical Efficiency" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              <p className="mt-8 text-xs text-zinc-400 font-light italic">
                Gemiddelde progressie van jeugdspelers over 16 weken training.
              </p>
            </div>

            <div className="p-12 bg-black text-white rounded-xs">
              <h3 className="text-2xl font-bold mb-8 italic uppercase tracking-tight">Blessure Incidentie Reductie (%)</h3>
              <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={dataInjuries}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#27272a" />
                    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#a1a1aa', fontWeight: 'bold' }} />
                    <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#a1a1aa', fontWeight: 'bold' }} />
                    <Tooltip 
                       cursor={{ fill: 'rgba(255,255,255,0.05)' }}
                       contentStyle={{ backgroundColor: '#fff', border: 'none', borderRadius: '4px', color: '#000', fontSize: '12px' }}
                       itemStyle={{ color: '#000' }}
                    />
                    <Bar dataKey="rate" fill="#fff" radius={[2, 2, 0, 0]} name="Blessure Ratio" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <p className="mt-8 text-xs text-zinc-500 font-light italic">
                Data van amateurclubs die het SINA Preventie-protocol hanteren.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Image Section */}
      <section className="w-full h-[80vh] bg-zinc-100 overflow-hidden relative">
         <img 
          src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=1920" 
          className="w-full h-full object-cover grayscale opacity-80" 
          alt="SINA Team"
         />
         <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
         <div className="absolute bottom-20 left-6 md:left-24">
            <h2 className="text-white text-5xl md:text-[8rem] font-black tracking-tighter uppercase italic leading-[0.8]">Gedreven door<br />expertise.</h2>
         </div>
      </section>
    </div>
  );
};

export default About;
