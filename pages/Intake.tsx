
import React, { useState } from 'react';
import { getIntakeRecommendation } from '../services/geminiService';
import { Loader2, Send, CheckCircle2, Activity } from 'lucide-react';

const Intake: React.FC = () => {
  const [step, setStep] = useState(1);
  const [profile, setProfile] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [recommendation, setRecommendation] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!profile.trim()) return;

    setIsLoading(true);
    const result = await getIntakeRecommendation(profile);
    setRecommendation(result);
    setIsLoading(false);
    setStep(2);
  };

  return (
    <div className="px-6 py-24 md:py-32 max-w-7xl mx-auto min-h-[80vh] flex flex-col justify-center animate-in fade-in slide-in-from-bottom-4 duration-1000">
      <div className="max-w-2xl">
        <span className="text-xs font-bold tracking-widest text-zinc-400 uppercase mb-4 block">Data-Gedreven Intake</span>
        <h1 className="text-5xl md:text-6xl font-bold tracking-tighter mb-12">
          {step === 1 ? "Vertel ons over jouw doelen." : "Ons Deskundig Advies."}
        </h1>

        {step === 1 ? (
          <form onSubmit={handleSubmit} className="space-y-8">
            <p className="text-xl text-zinc-500 font-light leading-relaxed">
              Geef een korte omschrijving van je huidige situatie, je sport, eventuele blessures of je ambitie. Onze AI-gebaseerde assistent koppelt dit direct aan de expertises van SINA Sportlab.
            </p>
            <textarea
              className="w-full h-48 bg-zinc-50 border-none p-6 text-xl font-light focus:ring-2 focus:ring-black outline-none transition-all resize-none"
              placeholder="Bijv: Ik ben een 16-jarige voetballer met terugkerende hamstringklachten..."
              value={profile}
              onChange={(e) => setProfile(e.target.value)}
            />
            <button
              disabled={isLoading || !profile.trim()}
              className="bg-black text-white px-12 py-5 text-sm font-bold tracking-widest flex items-center gap-4 disabled:opacity-50 hover:bg-zinc-800 transition-all"
            >
              {isLoading ? (
                <>VERWERKEN... <Loader2 className="w-4 h-4 animate-spin" /></>
              ) : (
                <>ANALYSE STARTEN <Send className="w-4 h-4" /></>
              )}
            </button>
          </form>
        ) : (
          <div className="space-y-12 animate-in fade-in duration-700">
            <div className="bg-zinc-50 p-12 border-l-4 border-black">
              <p className="text-xl text-zinc-800 leading-relaxed font-light italic">
                "{recommendation}"
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               <div className="p-8 border border-zinc-100 flex flex-col items-start gap-6">
                  <CheckCircle2 className="w-10 h-10 text-green-500" />
                  <h3 className="text-2xl font-bold tracking-tight">Vervolgstap: Intakegesprek</h3>
                  <p className="text-zinc-500 font-light">Onze specialisten staan klaar om de bovenstaande analyse te verifiëren met fysieke tests.</p>
                  <button className="bg-black text-white px-8 py-3 text-xs font-bold tracking-widest">PLAN DIRECT IN</button>
               </div>
               <div className="p-8 border border-zinc-100 flex flex-col items-start gap-6">
                  <Activity className="w-10 h-10 text-zinc-400" />
                  <h3 className="text-2xl font-bold tracking-tight">Krijg de Data-Sheet</h3>
                  <p className="text-zinc-500 font-light">Download onze visie op jouw specifieke uitdaging gebaseerd op de nieuwste sportwetenschap.</p>
                  <button className="border border-black text-black px-8 py-3 text-xs font-bold tracking-widest">DOWNLOAD PDF</button>
               </div>
            </div>

            <button 
              onClick={() => { setStep(1); setRecommendation(null); setProfile(''); }}
              className="text-zinc-400 text-sm font-bold tracking-widest hover:text-black transition-colors"
            >
              OPNIEUW BEGINNEN
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Intake;
