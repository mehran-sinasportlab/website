
import React from 'react';
import { CheckCircle2, MessageCircle, ArrowRight, ChevronRight } from 'lucide-react';

interface ThankYouProps {
  onNavigate: (path: string) => void;
}

const ThankYou: React.FC<ThankYouProps> = ({ onNavigate }) => {
  return (
    <div className="px-6 min-h-[80vh] flex flex-col justify-center items-center text-center animate-in zoom-in duration-700">
      <div className="max-w-2xl">
        <div className="w-20 h-20 bg-zinc-50 rounded-full flex items-center justify-center mb-10 mx-auto">
          <CheckCircle2 size={40} className="text-black" strokeWidth={1} />
        </div>
        <span className="text-[10px] font-bold tracking-[0.4em] text-zinc-400 uppercase mb-6 block italic">BEVESTIGING</span>
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter italic uppercase mb-8">BEDANKT VOOR JE AANVRAAG.</h1>
        <p className="text-xl text-zinc-500 font-light leading-relaxed mb-8 italic">
          We hebben je gegevens in goede orde ontvangen. Een van onze specialisten neemt zo snel mogelijk contact met je op om de volgende stap in te plannen.
        </p>
        <p className="text-sm text-zinc-400 font-light leading-relaxed mb-16 italic">
          Heb je in de tussentijd dringende vragen? Je kunt ons ook direct bereiken via WhatsApp voor een snelle reactie.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a 
            href="https://wa.me/31611873590"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-[#25D366] text-white px-10 py-5 text-xs font-bold tracking-[0.3em] uppercase hover:bg-[#20bd5a] transition-all flex items-center justify-center gap-4"
          >
            WHATSAPP DIRECT <MessageCircle size={16} />
          </a>
          <button 
            onClick={() => onNavigate('home')}
            className="w-full sm:w-auto border border-zinc-200 text-black px-10 py-5 text-xs font-bold tracking-[0.3em] uppercase hover:bg-zinc-50 transition-all flex items-center justify-center gap-4 group"
          >
            TERUG NAAR HOME <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
