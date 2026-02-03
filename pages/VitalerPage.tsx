
import React, { useState } from 'react';
import { 
  ChevronRight, ArrowRight, CheckCircle2, ShieldCheck, 
  Activity, Zap, Heart, Timer, BarChart3, Move, 
  Mail, Phone, Info, ChevronDown, Loader2, Sparkles, Shield, FileSignature, Check
} from 'lucide-react';
import { trackEvent } from '../services/analytics';

interface VitalerPageProps {
  onNavigate: (path: string) => void;
}

const VitalerPage: React.FC<VitalerPageProps> = ({ onNavigate }) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const expectCards = [
    { icon: <Zap />, title: "Vergroten belastbaarheid", desc: "Versterk je fundament om zwaardere trainingen aan te kunnen." },
    { icon: <ShieldCheck />, title: "Optimaliseren stabiliteit", desc: "Verbeter je core and balans voor minder blessuregevoeligheid." },
    { icon: <Heart />, title: "Omgaan met groeipijn", desc: "Gerichte oefeningen om groeiklachten beheersbaar te maken." },
    { icon: <Activity />, title: "Revalidatie blessures", desc: "Begeleid herstel na acute of slepende blessures." },
    { icon: <Timer />, title: "Verhelpen restklachten", desc: "Pak die laatste 10% van oude blessures effectief aan." },
    { icon: <Move />, title: "Aanplanen loopklachten", desc: "Analyse and correctie van looptechniek and bewegingspatronen." }
  ];

  const faqs = [
    { question: "Voor welke leeftijden is dit?", answer: "Dit programma is specifiek ontworpen voor jeugd tot 18 jaar." },
    { question: "Is dit alleen in de vakantie?", answer: "Nee, de methodiek is het hele jaar door bruikbaar and effectief voor structurele opbouw." },
    { question: "Wordt het vergoed tot 18 jaar?", answer: "Ja, in veel gevallen vallen de intake and behandelingen onder de basisverzekering voor kinderen." },
    { question: "Wanneer is een intake nodig?", answer: "We starten altijd met een intake om het huidige niveau and eventuele klachten objectief vast te stellen." },
    { question: "Hoe snel kunnen we starten?", answer: "Na de inschrijving nemen we binnen 48 uur contact op om de intake in te plannen." }
  ];

  return (
    <div className="animate-in fade-in duration-1000 bg-white selection:bg-black selection:text-white overflow-x-hidden">
      {/* Premium Motion Hero */}
      <section className="relative min-h-[80dvh] sm:min-h-[90dvh] flex flex-col justify-center px-6 pt-32 sm:pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-[50vw] h-[50vw] bg-zinc-50 rounded-full blur-[120px] animate-pulse opacity-40" />
          <div className="absolute bottom-1/4 right-1/4 w-[40vw] h-[40vw] bg-zinc-100 rounded-full blur-[100px] animate-pulse delay-700 opacity-30" />
          <div className="absolute inset-0 opacity-[0.03] grayscale bg-[url('https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1200')] bg-cover bg-center" />
        </div>

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6 sm:mb-8 animate-in slide-in-from-left duration-700">
              <Sparkles className="text-black" size={24} />
              <span className="text-[10px] font-bold tracking-[0.4em] text-zinc-400 uppercase mb-8 block italic">SPECIAAL VOOR JEUGD</span>
            </div>
            <h1 className="text-5xl sm:text-6xl md:text-[8rem] font-black tracking-tighter leading-[0.8] mb-8 sm:mb-12 italic uppercase mobile-title-scale">
              Vitaler in <br/>de vakantie.
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl text-zinc-500 font-light leading-relaxed mb-12 sm:mb-16 max-w-3xl italic">
              Verhoog je belastbaarheid. Voorkom klachten. <br/> <span className="text-black font-medium">Het hele jaar door.</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <button onClick={() => onNavigate('toestemming')} className="bg-black text-white px-10 sm:px-12 py-5 sm:py-6 text-xs font-bold tracking-[0.3em] uppercase hover:bg-zinc-800 transition-all flex items-center justify-center gap-4 group active:scale-95">
                START AANMELDING <ChevronRight size={16} className="group-hover:translate-x-2 transition-transform" />
              </button>
              <button onClick={() => onNavigate('intake')} className="border border-zinc-200 text-black px-10 sm:px-12 py-5 sm:py-6 text-xs font-bold tracking-[0.3em] uppercase hover:bg-zinc-50 transition-all flex items-center justify-center gap-4 active:scale-95">
                PLAN EEN INTAKE <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Program Context Section */}
      <section className="py-20 sm:py-40 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 sm:gap-32 items-center">
          <div>
            <span className="text-[10px] font-bold tracking-[0.4em] text-zinc-400 uppercase mb-6 sm:mb-8 block italic">HERSTEL & PREVENTIE</span>
            <h2 className="text-3xl md:text-6xl font-black tracking-tighter italic uppercase mb-10 leading-tight">
              Bouw aan een <br/>sterke basis.
            </h2>
            <div className="space-y-6 sm:space-y-8 text-lg sm:text-xl text-zinc-500 font-light leading-relaxed italic">
              <p>
                Minder beweging (bijv. in vakanties) and tijdelijk stoppen met sport kan de belastbaarheid van een kind in groei verlagen and de kans op klachten vergroten.
              </p>
              <p>
                Met SINA ‘Vitaler in de vakantie’ zorgen we voor een betere balans tussen rust and activiteit, and begeleiden we kinderen naar een sterker and vitaler seizoen.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {expectCards.map((card, i) => (
              <div key={i} className="p-8 border border-zinc-100 bg-zinc-50/50 hover:border-black transition-all group">
                <div className="mb-6 text-zinc-400 group-hover:text-black transition-colors">
                  {/* Fix for React.cloneElement type check by casting to React.ReactElement<any> */}
                  {React.cloneElement(card.icon as React.ReactElement<any>, { size: 28, strokeWidth: 1.5 })}
                </div>
                <h3 className="text-base font-bold mb-3 tracking-tight uppercase italic">{card.title}</h3>
                <p className="text-sm text-zinc-400 font-light leading-relaxed italic">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="bg-black text-white py-20 sm:py-40 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-16 sm:mb-24">
            <h2 className="text-3xl md:text-7xl font-black tracking-tighter italic uppercase mb-8 leading-tight">Voor wie is dit programma?</h2>
            <p className="text-lg sm:text-xl text-zinc-400 font-light italic">
              Twijfel je of jouw kind in aanmerking komt? Plan een intake; we beoordelen dit zorgvuldig and laagdrempelig.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-20">
            <div className="space-y-10 sm:space-y-12">
              {["Kinderen met verminderde belastbaarheid", "Kinderen met een bestaande klacht", "Kinderen met groeipijn of groeiklachten"].map((item, i) => (
                <div key={i} className="flex items-center gap-6 group">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border border-zinc-800 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all shrink-0">
                    <CheckCircle2 size={24} />
                  </div>
                  <span className="text-xl sm:text-2xl font-light italic">{item}</span>
                </div>
              ))}
            </div>
            <div className="space-y-10 sm:space-y-12">
              {["Kinderen met restklachten van een oude blessure", "Kinderen met loopklachten of bewegingsproblemen"].map((item, i) => (
                <div key={i} className="flex items-center gap-6 group">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border border-zinc-800 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all shrink-0">
                    <CheckCircle2 size={24} />
                  </div>
                  <span className="text-xl sm:text-2xl font-light italic">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Reimbursement Section */}
      <section className="py-20 sm:py-40 px-6 max-w-7xl mx-auto">
        <div className="bg-zinc-50 p-8 sm:p-24 rounded-xs border border-zinc-100 flex flex-col md:flex-row gap-12 sm:gap-20 items-center">
          <div className="flex-1 w-full">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-black text-white rounded-full flex items-center justify-center mb-10">
              {/* Fix: removed invalid sm:size prop and used responsive tailwind classes */}
              <ShieldCheck strokeWidth={1} className="w-8 h-8 sm:w-10 sm:h-10" />
            </div>
            <h2 className="text-3xl md:text-6xl font-black tracking-tighter italic uppercase mb-8">Kosten & vergoeding.</h2>
            <p className="text-lg sm:text-xl text-zinc-500 font-light italic">Geen verrassingen: we bespreken dit altijd vooraf.</p>
          </div>
          <div className="flex-1 space-y-8 sm:space-y-10 w-full">
            <div className="flex gap-4 sm:gap-6 items-start">
               <div className="w-2 h-2 bg-black rounded-full mt-3 shrink-0" />
               <p className="text-lg sm:text-xl text-zinc-600 font-light leading-relaxed italic">
                 Tot 18 jaar vallen screening, intake and behandelingen in veel gevallen onder de <span className="font-bold text-black">basisverzekering</span>.
               </p>
            </div>
            <div className="flex gap-4 sm:gap-6 items-start">
               <div className="w-2 h-2 bg-black rounded-full mt-3 shrink-0" />
               <p className="text-lg sm:text-xl text-zinc-600 font-light leading-relaxed italic">
                 We kijken tijdens de intake of dit programma passend is and hoe de vergoeding specifiek voor uw situatie werkt.
               </p>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Section - REPLACED GOOGLE FORM WITH INTEGRATED FLOW */}
      <section id="register" className="py-20 sm:py-40 px-6 bg-white relative">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 sm:mb-20">
             <span className="text-[10px] font-bold tracking-[0.4em] text-zinc-400 uppercase mb-8 block italic">AANMELDEN</span>
             <h2 className="text-4xl md:text-[8rem] font-black tracking-tighter italic uppercase leading-tight mb-8">Direct inschrijven.</h2>
             <p className="text-lg sm:text-xl text-zinc-500 font-light italic max-w-2xl mx-auto">
               Gebruik onze beveiligde digitale toestemmingsflow om uw kind direct aan te melden voor “Vitaler in de vakantie”.
             </p>
          </div>

          <div className="relative bg-zinc-900 text-white p-12 sm:p-20 shadow-2xl rounded-xl overflow-hidden animate-in fade-in duration-1000">
            <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
               <FileSignature size={200} />
            </div>
            
            <div className="relative z-10 space-y-10">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white text-black rounded-full flex items-center justify-center shrink-0">
                   <Shield size={24} />
                </div>
                <div>
                   <h3 className="text-2xl font-black tracking-tighter uppercase italic">Veilig & Digitaal</h3>
                   <p className="text-zinc-400 text-sm italic">Geen papieren rompslomp, direct online ondertekenen.</p>
                </div>
              </div>

              <div className="space-y-6">
                <p className="text-lg text-zinc-300 font-light leading-relaxed italic">
                  Ons nieuwe registratiesysteem is volledig geïntegreerd. U doorloopt de stappen, vinkt de benodigde toestemmingen aan and ondertekent digitaal op uw scherm.
                </p>
                <ul className="space-y-3">
                   {["Directe bevestiging per e-mail", "Beveiligde dataverwerking", "Direct gekoppeld aan ons team"].map((f, i) => (
                     <li key={i} className="flex items-center gap-4 text-xs font-bold tracking-widest uppercase">
                        {/* Corrected 'Check' icon usage */}
                        <Check size={14} className="text-white" /> {f}
                     </li>
                   ))}
                </ul>
              </div>

              <button 
                onClick={() => onNavigate('toestemming')}
                className="w-full bg-white text-black py-6 text-xs font-black tracking-[0.4em] uppercase hover:bg-zinc-200 transition-all flex items-center justify-center gap-4 group active:scale-95"
              >
                START DIGITALE INTAKE <ChevronRight size={16} className="group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 sm:py-40 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-black tracking-tighter italic uppercase mb-12 text-center">Veelgestelde vragen.</h2>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border border-zinc-100">
              <button 
                onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                className="w-full flex items-center justify-between p-6 sm:p-8 text-left hover:bg-zinc-50 transition-colors outline-none"
              >
                <span className="font-bold tracking-tight uppercase italic text-sm sm:text-base">{faq.question}</span>
                <ChevronDown size={18} className={`transition-transform duration-300 ${openFaqIndex === idx ? 'rotate-180' : ''}`} />
              </button>
              <div className={`transition-all duration-300 ease-in-out ${openFaqIndex === idx ? 'max-h-60 opacity-100 p-6 sm:p-8 pt-0' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                <p className="text-zinc-500 font-light leading-relaxed italic text-sm sm:text-base">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA Strip */}
      <section className="bg-zinc-50 py-20 sm:py-32 border-y border-zinc-100">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-10 sm:gap-12">
          <div className="flex items-center gap-6 w-full md:w-auto">
             <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white border border-zinc-200 rounded-full flex items-center justify-center shrink-0">
                <Mail size={24} strokeWidth={1} />
             </div>
             <div>
                <span className="block text-[9px] sm:text-[10px] font-bold tracking-[0.3em] text-zinc-400 uppercase">VRAGEN?</span>
                <p className="text-xl font-bold italic text-black">info@sinasportlab.com</p>
             </div>
          </div>
          <div className="flex items-center gap-6 w-full md:w-auto">
             <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white border border-zinc-200 rounded-full flex items-center justify-center shrink-0">
                <Phone size={24} strokeWidth={1} />
             </div>
             <div>
                <span className="block text-[9px] sm:text-[10px] font-bold tracking-[0.3em] text-zinc-400 uppercase">BEL ONS</span>
                <p className="text-xl font-bold italic text-black">06-11 87 35 90</p>
             </div>
          </div>
          <button onClick={() => onNavigate('contact')} className="text-[10px] font-black tracking-[0.4em] uppercase border-b-2 border-black pb-2 active:opacity-50 transition-opacity">ALLE CONTACTOPTIES <ArrowRight size={14} className="inline ml-2" /></button>
        </div>
      </section>
    </div>
  );
};

export default VitalerPage;
