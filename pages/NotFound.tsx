
import React from 'react';
import { ArrowLeft, Search, Mail, ChevronRight } from 'lucide-react';

interface NotFoundProps {
  onNavigate: (path: string) => void;
}

const NotFound: React.FC<NotFoundProps> = ({ onNavigate }) => {
  return (
    <div className="px-6 min-h-[80vh] flex flex-col justify-center items-center text-center animate-in fade-in duration-1000">
      <div className="max-w-2xl">
        <span className="text-[10px] font-bold tracking-[0.4em] text-zinc-300 uppercase mb-8 block italic">FOUTMELDING 404</span>
        <h1 className="text-6xl md:text-9xl font-black tracking-tighter italic uppercase mb-8">PAGINA NIET GEVONDEN.</h1>
        <p className="text-xl text-zinc-500 font-light leading-relaxed mb-16 italic">
          De pagina die je zoekt bestaat niet (meer) of is verplaatst naar een andere locatie binnen ons lab.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <button 
            onClick={() => onNavigate('home')}
            className="bg-black text-white px-10 py-5 text-xs font-bold tracking-[0.3em] uppercase hover:bg-zinc-800 transition-all flex items-center justify-center gap-4 group"
          >
            TERUG NAAR HOME <ChevronRight size={16} className="group-hover:translate-x-2 transition-transform" />
          </button>
          <button 
            onClick={() => onNavigate('services')}
            className="border border-zinc-200 text-black px-10 py-5 text-xs font-bold tracking-[0.3em] uppercase hover:bg-zinc-50 transition-all"
          >
            BEKIJK DIENSTEN
          </button>
        </div>

        <div className="mt-24 pt-12 border-t border-zinc-100 flex flex-col items-center gap-6">
          <p className="text-xs font-bold tracking-widest text-zinc-400 uppercase">Hulp nodig?</p>
          <button 
            onClick={() => onNavigate('contact')}
            className="flex items-center gap-3 text-zinc-500 hover:text-black transition-colors"
          >
            <Mail size={18} />
            <span className="text-sm font-light italic">Neem contact met ons op</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
