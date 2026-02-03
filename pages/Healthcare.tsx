
import React, { useState } from 'react';
import { 
  HeartHandshake, 
  ShieldPlus, 
  BicepsFlexed, 
  Stethoscope, 
  Smile, 
  CalendarCheck, 
  ChevronDown, 
  CheckCircle2, 
  ArrowRight, 
  X, 
  MessageCircle, 
  Mail,
  ChevronRight,
  Users,
  Gauge,
  BarChart3,
  UserCheck,
  Zap,
  MoveRight
} from 'lucide-react';

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  { 
    question: "Voor welke doelgroepen is dit geschikt?", 
    answer: "Onze programma's zijn ideaal voor jongeren and jongvolwassenen in de dagbesteding, GGZ, jeugdzorg of begeleid wonen die baat hebben bij structuur and een persoonlijke aanpak in bewegen." 
  },
  { 
    question: "Doen jullie dit ook op onze locatie?", 
    answer: "Ja, wij bieden zowel programma's aan bij ons in het Sportlab in Assen als op locatie bij de zorginstelling zelf (ambulante begeleiding)." 
  },
  { 
    question: "Is het individueel of in groepen?", 
    answer: "Beide zijn mogelijk. We bieden sportieve dagbesteding in kleine groepen aan, maar ook individuele begeleidingstrajecten voor wie dat nodig heeft." 
  },
  { 
    question: "Hoe start een traject?", 
    answer: "We beginnen altijd met een vrijblijvende kennismaking and inventarisatie van de doelen and de doelgroep, gevolgd door een passend voorstel." 
  },
  { 
    question: "Kunnen we structureel samenwerken?", 
    answer: "Zeker. Veel instellingen and gemeenten kiezen voor een structurele samenwerking via Jeugdwet, WMO of WLZ-indicaties." 
  }
];

const Healthcare: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  return (
    <div className="animate-in fade-in duration-1000 bg-white selection:bg-black selection:text-white">
      {/* Hero Section */}
      <section className="px-6 py-40 max-w-7xl mx-auto">
        <div className="max-w-4xl">
          <span className="text-[10px] font-bold tracking-[0.4em] text-zinc-400 uppercase mb-8 block italic">ZORG & BEWEGEN</span>
          <h1 className="text-6xl md:text-[8rem] font-black tracking-tighter leading-[0.8] mb-12 italic uppercase">ZORGINSTELLINGEN.</h1>
          <p className="text-2xl text-zinc-500 font-light leading-relaxed mb-16 italic">
            Bij SINA Sportlab zetten we sport and beweging in als krachtig middel voor structuur, ontwikkeling and perspectief. Voor jongeren and jongvolwassenen die vastlopen in school, werk of dagelijks functioneren bieden wij begeleide programma’s binnen een veilige and professionele omgeving.
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <button className="bg-black text-white px-10 py-6 text-xs font-bold tracking-[0.3em] uppercase hover:bg-zinc-800 transition-all flex items-center justify-center gap-4 group">
              PLAN KENNISMAKING <ChevronRight size={16} className="group-hover:translate-x-2 transition-transform" />
            </button>
            <button className="border border-zinc-200 px-10 py-6 text-xs font-bold tracking-[0.3em] uppercase hover:bg-zinc-50 transition-all">
              VRAAG VOORSTEL OP MAAT
            </button>
          </div>
        </div>
      </section>

      {/* Voor Wie Section */}
      <section className="bg-zinc-50 py-40 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div>
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter italic uppercase mb-12">Voor wie is dit bedoeld?</h2>
              <div className="space-y-6 mb-12">
                {[
                  "Jongeren and jongvolwassenen die dreigen vast te lopen",
                  "Dagbesteding and begeleid sporten",
                  "Gemeenten, zorginstellingen and samenwerkingspartners"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 text-xl font-light text-zinc-600">
                    <CheckCircle2 size={24} className="text-black shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              
              <div className="p-8 bg-white border border-zinc-100 space-y-4">
                <h4 className="text-[10px] font-bold tracking-[0.3em] text-zinc-400 uppercase">Mogelijkheden voor deelname</h4>
                <ul className="text-sm text-zinc-500 font-light space-y-2">
                  <li className="flex items-center gap-2">• Jeugdwet / WMO</li>
                  <li className="flex items-center gap-2">• WLZ-indicatie</li>
                  <li className="flex items-center gap-2">• Samenwerking met zorg- of onderwijsinstellingen</li>
                </ul>
              </div>
            </div>
            <div className="aspect-square bg-zinc-200 overflow-hidden rounded-3xl grayscale">
               <img src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover" alt="Begeleid sporten" />
            </div>
          </div>
        </div>
      </section>

      {/* Wat We Doen Section */}
      <section className="py-40 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-32">
          <h2 className="text-5xl md:text-8xl font-black tracking-tighter italic uppercase mb-8 text-black">Wat doen we precies?</h2>
          <p className="text-xl text-zinc-500 font-light max-w-2xl mx-auto">
            Wij bieden specialistische begeleiding gericht op de persoonlijke ontwikkeling van de deelnemer.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { 
              icon: <Users />, 
              title: "Sportieve dagbesteding (groep)", 
              desc: "In kleine groepen werken aan ritme, sociale vaardigheden and zelfvertrouwen zonder prestatiedruk.",
              bullets: ["Structuur and voorspelbaarheid", "Sociale interactie", "Positieve daginvulling"]
            },
            { 
              icon: <UserCheck />, 
              title: "Individuele dagbesteding", 
              desc: "Één-op-één begeleiding gericht op ontwikkeling and vertrouwen, met als doel doorgroei naar school of werk.",
              bullets: ["Individuele aandacht", "Focus op vertrouwen", "Opbouw naar groepsactiviteiten"]
            },
            { 
              icon: <Zap />, 
              title: "Emotieregulatie", 
              desc: "Sport inzetten als uitlaatklep om spanning and emoties beter te begrijpen and gezonder te reguleren.",
              bullets: ["Lichaamsbewustzijn", "Moment van focus", "Mentale veerkracht"]
            },
            { 
              icon: <MoveRight />, 
              title: "Ambulante begeleiding", 
              desc: "Via sport een vertrouwensband opbouwen and werken aan dagstructuur and motivatie in de eigen omgeving.",
              bullets: ["Praktisch and doelgericht", "Persoonlijke relatie", "Maatwerk traject"]
            }
          ].map((item, i) => (
            <div key={i} className="p-12 border border-zinc-100 bg-white hover:border-black transition-all group">
              {/* Fix for React.cloneElement type check by casting to React.ReactElement<any> */}
              <div className="mb-8 text-black group-hover:scale-110 transition-transform duration-500">{React.cloneElement(item.icon as React.ReactElement<any>, { size: 32, strokeWidth: 1 })}</div>
              <h3 className="text-2xl font-bold mb-6 tracking-tight uppercase italic">{item.title}</h3>
              <p className="text-sm text-zinc-500 font-light leading-relaxed mb-8">{item.desc}</p>
              <ul className="space-y-2">
                {item.bullets.map((b, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-[10px] font-bold tracking-widest text-zinc-400 uppercase">
                    <CheckCircle2 size={12} className="text-zinc-300" /> {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Waarom SINA Section */}
      <section className="bg-black text-white py-40 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter italic uppercase mb-24 text-center">Waarom SINA Sportlab?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
            {[
              { icon: <Stethoscope />, title: "Expertise", desc: "Professionele begeleiding met een sport- én zorgblik." },
              { icon: <ShieldPlus />, title: "Veiligheid", desc: "Een veilige omgeving and duidelijke structuur." },
              { icon: <Gauge />, title: "Lichaamsbewustzijn", desc: "Focus op motoriek and betere lichaamsbeleving." },
              { icon: <BarChart3 />, title: "Geen Druk", desc: "Meetbaar waar zinvol, zonder prestatiedruk." },
              { icon: <Smile />, title: "Vertrouwen", desc: "Plezier and zelfvertrouwen staan altijd centraal." }
            ].map((item, i) => (
              <div key={i} className="flex gap-6">
                {/* Fix for React.cloneElement type check by casting to React.ReactElement<any> */}
                <div className="text-zinc-500 shrink-0">{React.cloneElement(item.icon as React.ReactElement<any>, { size: 32 })}</div>
                <div>
                  <h4 className="font-bold text-xl mb-4 italic uppercase">{item.title}</h4>
                  <p className="text-zinc-400 font-light leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Samenwerkingsvormen Section */}
      <section className="py-40 px-6 max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-black tracking-tighter italic uppercase mb-16 text-center">Samenwerkingsvormen.</h2>
        <p className="text-xl text-zinc-500 font-light max-w-2xl mx-auto text-center mb-24">
          We starten altijd met een kennismaking and inventarisatie. Op basis daarvan stellen we een passend programma samen, afgestemd op de doelgroep, doelen and context.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Individueel Traject", desc: "Focus op persoonlijke ontwikkeling and ambulante ondersteuning." },
            { title: "Groepsbegeleiding", desc: "Structurele sportmomenten binnen de dagbesteding bij SINA." },
            { title: "Traject op Maat", desc: "Structureel programma in samenwerking met uw instelling of school." }
          ].map((item, i) => (
            <div key={i} className="p-12 bg-zinc-50 border border-zinc-100 text-center">
              <h3 className="text-2xl font-bold mb-6 italic">{item.title}</h3>
              <p className="text-zinc-500 font-light">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Resultaat Section */}
      <section className="bg-zinc-50 py-40 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter italic uppercase mb-24 text-center">Wat levert het op?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            <div className="bg-white p-12 shadow-sm">
              <h4 className="text-2xl font-bold mb-10 italic uppercase border-b border-zinc-100 pb-4">Voor Deelnemers</h4>
              <ul className="space-y-4 text-zinc-500 font-light">
                {["Meer plezier in bewegen", "Meer zelfvertrouwen", "Betere lichaamsbeleving", "Structuur and ritme", "Positieve daginvulling", "Grip op gedrag and emoties"].map((item, i) => (
                  <li key={i} className="flex items-center gap-4"><CheckCircle2 size={16} className="text-black" /> {item}</li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-12 shadow-sm">
              <h4 className="text-2xl font-bold mb-10 italic uppercase border-b border-zinc-100 pb-4">Voor Instellingen</h4>
              <ul className="space-y-4 text-zinc-500 font-light">
                {["Professionele uitvoeringspartner", "Ontlasting personeel", "Kwalitatief beweegaanbod", "Inzetbaar binnen trajecten", "Vast aanspreekpunt", "Data-gedreven rapportage"].map((item, i) => (
                  <li key={i} className="flex items-center gap-4"><CheckCircle2 size={16} className="text-black" /> {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-40 px-6 max-w-4xl mx-auto">
        <h2 className="text-4xl font-black tracking-tighter italic uppercase mb-12 text-center">Veelgestelde vragen.</h2>
        <div className="space-y-2">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border border-zinc-100">
              <button 
                onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-zinc-50 transition-colors"
              >
                <span className="font-bold tracking-tight uppercase italic text-sm md:text-base">{faq.question}</span>
                <ChevronDown size={18} className={`transition-transform duration-300 ${openFaqIndex === idx ? 'rotate-180' : ''}`} />
              </button>
              <div className={`transition-all duration-300 ease-in-out ${openFaqIndex === idx ? 'max-h-60 opacity-100 p-6 pt-0' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                <p className="text-zinc-500 font-light leading-relaxed italic text-sm md:text-base">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-black text-white py-40 px-6 text-center">
        <h2 className="text-5xl md:text-[8rem] font-black tracking-tighter italic uppercase mb-12 leading-tight">Samen iets neerzetten<br/>dat werkt.</h2>
        <p className="text-xl text-zinc-500 font-light mb-20 max-w-2xl mx-auto">Wil je verkennen wat past bij jullie doelgroep of een specifieke casus? We denken graag mee.</p>
        <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
          <button className="bg-white text-black px-14 py-8 text-xs font-bold tracking-[0.4em] uppercase hover:bg-zinc-200 transition-all flex items-center justify-center gap-4 group">
            NEEM CONTACT OP <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
          </button>
          <button className="border border-zinc-700 text-white px-14 py-8 text-xs font-bold tracking-[0.4em] uppercase hover:bg-zinc-900 transition-all">
            VRAAG VOORSTEL AAN
          </button>
        </div>
        <div className="mt-20 flex justify-center gap-12">
           <a href="https://wa.me/31611873590" className="flex items-center gap-3 text-[10px] font-bold tracking-widest text-zinc-500 uppercase hover:text-white transition-colors">
              <MessageCircle size={18} /> WhatsApp Direct
           </a>
           <a href="mailto:info@sinasportlab.nl" className="flex items-center gap-3 text-[10px] font-bold tracking-widest text-zinc-500 uppercase hover:text-white transition-colors">
              <Mail size={18} /> Mail Ons
           </a>
        </div>
      </section>
    </div>
  );
};

export default Healthcare;
