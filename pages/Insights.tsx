
import React from 'react';
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

const Insights: React.FC = () => {
  return (
    <div className="px-6 py-24 md:py-32 max-w-7xl mx-auto animate-in fade-in duration-700">
      <div className="max-w-3xl mb-24">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-12">Resultaten & Inzichten.</h1>
        <p className="text-xl text-zinc-500 font-light leading-relaxed">
          Bij SINA Sportlab geloven we niet in giswerk. Onze resultaten zijn kwantificeerbaar. Hieronder ziet u geaggregeerde data van onze trajecten op het gebied van explosiviteit en blessurereductie.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-32">
        <div className="p-12 bg-zinc-50 rounded-3xl">
          <h3 className="text-2xl font-bold mb-8">Performance Groei (Index)</h3>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={dataPerformance}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e4e4e7" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#71717a' }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#71717a' }} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#000', border: 'none', borderRadius: '8px', color: '#fff' }}
                  itemStyle={{ color: '#fff' }}
                />
                <Line type="monotone" dataKey="power" stroke="#000" strokeWidth={3} dot={{ r: 6 }} activeDot={{ r: 8 }} name="Power Output" />
                <Line type="monotone" dataKey="technique" stroke="#a1a1aa" strokeWidth={2} strokeDasharray="5 5" dot={{ r: 4 }} name="Technical Efficiency" />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <p className="mt-8 text-sm text-zinc-400 font-light">
            Gemiddelde progressie van 240 jeugdspelers in het 'Pro-Traject' over een periode van 16 weken.
          </p>
        </div>

        <div className="p-12 bg-black text-white rounded-3xl">
          <h3 className="text-2xl font-bold mb-8">Blessure Incidentie Reductie (%)</h3>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={dataInjuries}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#27272a" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#a1a1aa' }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#a1a1aa' }} />
                <Tooltip 
                   cursor={{ fill: 'rgba(255,255,255,0.05)' }}
                   contentStyle={{ backgroundColor: '#fff', border: 'none', borderRadius: '8px', color: '#000' }}
                   itemStyle={{ color: '#000' }}
                />
                <Bar dataKey="rate" fill="#fff" radius={[4, 4, 0, 0]} name="Blessure Ratio" />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <p className="mt-8 text-sm text-zinc-500 font-light">
            Data gebaseerd op samenwerkingen met lokale amateurclubs in Assen die het SINA Preventie-protocol hanteren.
          </p>
        </div>
      </div>

      <div className="border-t border-zinc-100 pt-32">
         <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {[
              { label: 'Sporters Gemeten', value: '4,500+' },
              { label: 'Professionele Partners', value: '18' },
              { label: 'Preventie Score', value: '94%' },
              { label: 'Jaren Expertise', value: '12' },
            ].map((stat, i) => (
              <div key={i} className="text-center md:text-left">
                <div className="text-5xl font-bold tracking-tighter mb-2 italic">{stat.value}</div>
                <div className="text-sm font-bold tracking-widest text-zinc-400 uppercase">{stat.label}</div>
              </div>
            ))}
         </div>
      </div>
    </div>
  );
};

export default Insights;
