
import React, { useState, useEffect, useRef } from 'react';
import { 
  Play, RotateCcw, ChevronRight, ArrowRight, Shield, 
  Activity, Zap, Target, Brain, Trophy, MoveRight 
} from 'lucide-react';

interface VideoPrototypeProps {
  onNavigate: (path: string) => void;
}

const VideoPrototype: React.FC<VideoPrototypeProps> = ({ onNavigate }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [activeScene, setActiveScene] = useState(0);
  const timerRef = useRef<number | null>(null);

  const scenes = [
    {
      id: 0,
      start: 0,
      end: 5,
      title: "MEASURE.",
      subtitle: "PRESTEREN BEGINT BIJ WETEN.",
      voiceOver: "Presteren begint bij weten.",
      image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=1200",
      overlay: "grid"
    },
    {
      id: 1,
      start: 5,
      end: 10,
      title: "DATA-DRIVEN.",
      subtitle: "GEEN GISWERK, MAAR FEITEN.",
      voiceOver: "Bij SINA Sportlab meten we jouw beweging tot in de kleinste details.",
      image: "https://images.unsplash.com/photo-1551958219-acbc608c6377?auto=format&fit=crop&q=80&w=1200",
      overlay: "data"
    },
    {
      id: 2,
      start: 10,
      end: 15,
      title: "IMPROVE.",
      subtitle: "SPECIALISTISCH HERSTEL.",
      voiceOver: "Of je nu herstelt van een blessure, of traint voor de absolute top.",
      image: "https://images.unsplash.com/photo-1574680096145-d05b474e2158?auto=format&fit=crop&q=80&w=1200",
      overlay: "action"
    },
    {
      id: 3,
      start: 15,
      end: 22,
      title: "PERFORM.",
      subtitle: "VOOR ELK TALENT.",
      voiceOver: "Wij bouwen aan een fundament van kracht, inzicht en snelheid.",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1200",
      overlay: "success"
    },
    {
      id: 4,
      start: 22,
      end: 30,
      title: "SINA SPORTLAB.",
      subtitle: "MEETBAAR HERSTEL. MAXIMAAL RESULTAAT.",
      voiceOver: "SINA Sportlab. Meetbaar herstel. Maximaal resultaat.",
      image: "",
      overlay: "final"
    }
  ];

  const handleStart = () => {
    setIsPlaying(true);
    setCurrentTime(0);
    setActiveScene(0);
  };

  const handleReset = () => {
    setIsPlaying(false);
    setCurrentTime(0);
    setActiveScene(0);
    if (timerRef.current) clearInterval(timerRef.current);
  };

  useEffect(() => {
    if (isPlaying) {
      timerRef.current = window.setInterval(() => {
        setCurrentTime((prev) => {
          const next = prev + 0.1;
          if (next >= 30) {
            setIsPlaying(false);
            if (timerRef.current) clearInterval(timerRef.current);
            return 30;
          }
          
          // Determine active scene
          const scene = scenes.find(s => next >= s.start && next < s.end);
          if (scene && scene.id !== activeScene) {
            setActiveScene(scene.id);
          }
          
          return next;
        });
      }, 100);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, activeScene]);

  const currentScene = scenes[activeScene];
  const progress = (currentTime / 30) * 100;

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-6 sm:p-10 relative overflow-hidden selection:bg-white selection:text-black">
      {/* Background Ambience */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent)]" />
      </div>

      <div className="max-w-6xl w-full aspect-video bg-zinc-900 relative rounded-sm overflow-hidden shadow-[0_0_100px_rgba(255,255,255,0.05)] border border-white/5">
        {!isPlaying && currentTime === 0 ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center z-50 bg-black/80 backdrop-blur-md">
            <span className="text-[10px] font-black tracking-[0.5em] text-zinc-500 uppercase mb-8">CONCEPT INTRO VIDEO</span>
            <h2 className="text-4xl sm:text-6xl font-black tracking-tighter text-white italic uppercase mb-12 text-center px-6">
              MEETBAAR HERSTEL.<br/>MAXIMAAL RESULTAAT.
            </h2>
            <button 
              onClick={handleStart}
              className="group bg-white text-black px-12 py-6 text-xs font-black tracking-[0.4em] uppercase flex items-center gap-6 hover:bg-zinc-200 transition-all active:scale-95"
            >
              START PREVIEW <Play size={18} fill="currentColor" />
            </button>
          </div>
        ) : null}

        {/* Video Canvas */}
        <div className="absolute inset-0 z-0">
          {scenes.map((scene, idx) => (
            <div 
              key={idx}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${activeScene === idx ? 'opacity-100' : 'opacity-0'}`}
            >
              {scene.image && (
                <img 
                  src={scene.image} 
                  alt="" 
                  className={`w-full h-full object-cover grayscale brightness-50 transition-transform duration-[5s] ease-linear ${activeScene === idx ? 'scale-110' : 'scale-100'}`} 
                />
              )}
              <div className="absolute inset-0 bg-black/40" />
              
              {/* Overlay Elements */}
              {scene.overlay === 'grid' && (
                <div className="absolute inset-0 opacity-30 animate-pulse">
                  <div className="w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20" />
                  <div className="absolute inset-0 border-[0.5px] border-white/20" style={{ background: 'linear-gradient(90deg, transparent 49.5%, rgba(255,255,255,0.05) 50%, transparent 50.5%), linear-gradient(0deg, transparent 49.5%, rgba(255,255,255,0.05) 50%, transparent 50.5%)', backgroundSize: '40px 40px' }} />
                </div>
              )}
              {scene.overlay === 'data' && (
                <div className="absolute inset-0 flex items-center justify-center opacity-20">
                  <Activity size={400} strokeWidth={0.5} className="text-white animate-pulse" />
                </div>
              )}
              {scene.overlay === 'final' && (
                <div className="absolute inset-0 bg-white flex flex-col items-center justify-center text-black animate-in fade-in duration-1000">
                  <div className="w-48 mb-8 fill-black">
                     <svg viewBox="0 0 400 60" className="w-full h-auto">
                        <path d="M12.5 45.2c-5.2 0-8.9-2.3-11-7l4.5-2.2c1.3 2.8 3.5 4.3 6.5 4.3 3.1 0 5-1.5 5-3.8 0-2.1-1.4-3.2-5.5-4.4-6.3-1.8-9.4-4.5-9.4-9.3 0-5.8 4.8-9.8 11.1-9.8 4.7 0 8.3 2 10.1 5.8l-4.4 2.3c-1.1-2.4-2.9-3.4-5.7-3.4-2.8 0-4.4 1.5-4.4 3.4 0 2 1.4 3 5.4 4.2 6.7 1.9 9.5 4.7 9.5 9.4.1 6.5-4.9 10.5-11.7 10.5zM31 13.5h6.3v31.2H31zM46.7 13.5h6.1l14.4 19.3V13.5h6.3v31.2h-5.2L53 24.3v20.4h-6.3zM91.8 13.5l11.1 31.2h-6.7l-2.2-6.5h-9.8l-2.2 6.5h-6.7l11.1-31.2h5.4zm-1.1 6.8l-3.3 10.1h6.6L90.7 20.3z" />
                        <path d="M136.5 45.2c-5.2 0-8.9-2.3-11-7l4.5-2.2c1.3 2.8 3.5 4.3 6.5 4.3 3.1 0 5-1.5 5-3.8 0-2.1-1.4-3.2-5.5-4.4-6.3-1.8-9.4-4.5-9.4-9.3 0-5.8 4.8-9.8 11.1-9.8 4.7 0 8.3 2 10.1 5.8l-4.4 2.3c-1.1-2.4-2.9-3.4-5.7-3.4-2.8 0-4.4 1.5-4.4 3.4 0 2 1.4 3 5.4 4.2 6.7 1.9 9.5 4.7 9.5 9.4.1 6.5-4.9 10.5-11.7 10.5zM155.6 13.5h10.3c5.4 0 9.1 3.2 9.1 7.9s-3.7 7.9-9.1 7.9h-4.1v15.4h-6.2V13.5zm10.1 10.1c1.9 0 3-1 3-2.3s-1.1-2.3-3-2.3h-3.9v4.6h3.9zM182.2 29.3c0-9.2 7.3-16.3 16.5-16.3s16.5 7.1 16.5 16.3-7.3 16.3-16.5 16.3-16.5-7.1-16.5-16.3zm26.6 0c0-5.7-4.4-10.2-10.1-10.2s-10.1 4.5-10.1 10.2 4.4 10.2 10.1 10.2 10.1-4.5 10.1-10.2zM224 13.5h10.9c5.6 0 8.6 2.8 8.6 6.6 0 3.3-2.1 5.4-5.3 6.2l6.2 18.3H238l-5.4-16.5h-2.3v16.5H224V13.5zm10.4 9.1c1.5 0 2.5-.7 2.5-1.9s-1-1.9-2.5-1.9h-4.2v3.8h4.2zM250.2 13.5H269v5.6h-6.2v25.6H256.5V19.1h-6.3v-5.6zM275.5 13.5h6.3v25.6h11.1v5.6h-17.4zM302.1 13.5l11.1 31.2h-6.7l-2.2-6.5h-9.8l-2.2 6.5h-6.7l11.1-31.2h5.4zm-1.1 6.8l-3.3 10.1h6.6L301 20.3zM321.4 13.5h11c6.5 0 10.1 3.5 10.1 8.3 0 2.8-1.4 5-3.8 6.5 3.3 1.5 5.3 4 5.3 7.8 0 5.4-4.2 9.1-11.4 9.1h-11.2V13.5zm10.7 13c2.4 0 3.8-1.2 3.8-3.1 0-2-1.4-3.1-3.8-3.1h-4.5v6.2h4.5zm.7 12.8c2.9 0 4.6-1.4 4.6-3.6 0-2.3-1.7-3.6-4.6-3.6h-5.4v7.2h5.4z" />
                     </svg>
                  </div>
                  <button 
                    onClick={() => onNavigate('intake')}
                    className="bg-black text-white px-10 py-5 text-[10px] font-black tracking-[0.4em] uppercase hover:bg-zinc-800 transition-all active:scale-95"
                  >
                    PLAN JE INTAKE <ChevronRight size={14} className="inline ml-2" />
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Text Overlays */}
        <div className="absolute inset-0 z-10 flex flex-col justify-center px-10 sm:px-20 pointer-events-none">
          {scenes.map((scene, idx) => (
            <div 
              key={idx}
              className={`transition-all duration-700 delay-300 ${activeScene === idx ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 absolute'}`}
            >
              <h3 className="text-4xl sm:text-7xl md:text-8xl font-black tracking-tighter text-white italic uppercase mb-4 leading-[0.85]">
                {scene.title}
              </h3>
              <p className="text-sm sm:text-lg text-zinc-300 font-light tracking-[0.2em] uppercase italic">
                {scene.subtitle}
              </p>
            </div>
          ))}
        </div>

        {/* Subtitles (Simulated Voiceover) */}
        <div className="absolute bottom-10 left-0 w-full text-center px-6 z-20 pointer-events-none">
          <p className="bg-black/60 backdrop-blur-sm inline-block px-4 py-2 rounded-xs text-xs sm:text-sm text-zinc-100 font-light italic transition-opacity duration-300">
            {currentScene.voiceOver}
          </p>
        </div>

        {/* Timeline Bar */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-zinc-800 z-30">
          <div 
            className="h-full bg-white transition-all duration-100 ease-linear" 
            style={{ width: `${progress}%` }} 
          />
        </div>
      </div>

      <div className="mt-12 flex flex-col sm:flex-row items-center gap-8">
        <div className="flex items-center gap-4">
          <button 
            onClick={handleReset}
            className="text-zinc-500 hover:text-white transition-colors flex items-center gap-2 text-[10px] font-bold tracking-widest uppercase"
          >
            <RotateCcw size={14} /> RESET
          </button>
          <div className="h-4 w-px bg-zinc-800" />
          <span className="text-zinc-500 text-[10px] font-bold tracking-widest uppercase">
            {currentTime.toFixed(1)}s / 30.0s
          </span>
        </div>
        
        <div className="flex gap-4">
           <button 
            onClick={() => onNavigate('home')}
            className="text-zinc-400 hover:text-white transition-colors flex items-center gap-2 text-[10px] font-bold tracking-widest uppercase"
          >
            TERUG NAAR WEBSITE
          </button>
          <button 
            onClick={() => onNavigate('intake')}
            className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-full text-[10px] font-black tracking-widest uppercase flex items-center gap-2 transition-all"
          >
            START INTAKE <ArrowRight size={12} />
          </button>
        </div>
      </div>

      <div className="mt-16 max-w-2xl text-center space-y-4">
        <h4 className="text-zinc-500 text-[10px] font-bold tracking-[0.4em] uppercase">DIRECTOR NOTES</h4>
        <p className="text-zinc-500 text-xs font-light leading-relaxed italic">
          Dit interactieve prototype simuleert de visuele flow, timing en tekst-transities van de introductievideo. 
          De echte video zal vloeiender overgangen hebben tussen high-resolution clips van het Lab en SIMUST trainingen.
        </p>
      </div>
    </div>
  );
};

export default VideoPrototype;
