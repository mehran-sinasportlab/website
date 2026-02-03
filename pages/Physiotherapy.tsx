
import React, { useState, useEffect } from 'react';
import { Activity, Shield, Droplets, Zap, Crosshair, X, Info, ChevronRight, ArrowRight, ChevronDown, CheckCircle2 } from 'lucide-react';

interface FAQ {
  question: string;
  answer: string;
}

interface Specialization {
  id: string;
  title: string;
  shortDesc: string;
  icon: React.ReactNode;
  fullDesc: string;
  forWho: string;
  results: string[];
  faqs: FAQ[];
  imageUrl?: string;
}

const specs: Specialization[] = [
  {
    id: 'sport',
    title: '(Sport)fysiotherapie',
    shortDesc: 'Prestatiegericht herstel voor de ambitieuze sporter.',
    icon: <Activity strokeWidth={1} />,
    fullDesc: 'Onze sportfysiotherapie richt zich op het behandelen en voorkomen van sportblessures. Het doel is om sporters zo snel en veilig mogelijk terug te laten keren naar hun activiteiten, ondersteund door data-analyse.',
    forWho: 'Amateur- en topsporters met acute of langdurige blessures.',
    results: ['Snellere return-to-play', 'Blessurepreventie', 'Fysieke optimalisatie'],
    imageUrl: 'https://images.unsplash.com/photo-1574680096145-d05b474e2158?auto=format&fit=crop&q=80&w=1200',
    faqs: [
      { question: "Wat is sportfysiotherapie bij SINA Sportlab?", answer: "Een specialisatie die zich richt op herstel and preventie van blessures. We kijken specifiek naar de biomechanica van jouw sport om een veilige and snelle terugkeer te garanderen." },
      { question: "Wat is het verschil met reguliere fysiotherapie?", answer: "Sportfysiotherapie gaat verder; we analyseren de specifieke eisen van jouw sport and passen de behandeling aan op de belasting die jouw lichaam moet kunnen dragen." },
      { question: "Hoe helpt het bij mijn blessure?", answer: "We gebruiken geavanceerde meetapparatuur om de exacte oorcaak te vinden. Met data-gedreven oefeningen versnellen we het herstel and optimaliseren we je prestaties." },
      { question: "Wat zijn de voordelen?", answer: "Sneller herstel, minder kans op herhaling and een betere fysieke conditie dan vóór je blessure dankzij onze prestatiegerichte aanpak." },
      { question: "Wordt het vergoed door mijn verzekering?", answer: "Ja, mits u aanvullend verzekerd bent. Wij hanteren marktconforme tarieven and informeren u graag over de vergoedingen." }
    ]
  },
  {
    id: 'oedeem',
    title: 'Oedeemtherapie',
    shortDesc: 'Specialistische zorg voor vochtretentie en lymfedrainage.',
    icon: <Droplets strokeWidth={1} />,
    fullDesc: 'Behandeling gericht op het verminderen van vochtophoping in het lichaam, essentieel bij zowel medische aandoeningen als zware sportblessures.',
    forWho: 'Patiënten met zwellingen, na oncologische ingrepen of acuut trauma.',
    results: ['Afname van zwelling', 'Pijnvermindering', 'Verbeterde mobiliteit'],
    imageUrl: 'https://images.unsplash.com/photo-1516238840914-94dfc0c873ae?auto=format&fit=crop&q=80&w=1200',
    faqs: [
      { question: "Wat houdt oedeemtherapie in?", answer: "Het is een behandeling gericht op het afvoeren van overtollig vocht middels manuele technieken and compressie, wat de circulatie and het herstel bevordert." },
      { question: "Is dit relevant voor sportblessures?", answer: "Zeker. Bij trauma kan zwelling het herstel vertragen. Oedeemtherapie vermindert deze druk, verzacht de pijn and versnelt de spierfunctie." },
      { question: "Welke soorten oedeem behandelen jullie?", answer: "We behandelen lymfoedeem, veneus oedeem, maar ook specifiek traumatisch and postoperatief oedeem bij sporters." },
      { question: "Hoeveel behandelingen heb ik nodig?", answer: "Gemiddeld zijn 10 tot 15 sessies nodig voor een optimaal and blijvend resultaat, afhankelijk van de ernst." },
      { question: "Is het voor iedereen geschikt?", answer: "In principe wel. Onze specialisten beoordelen tijdens de intake of er contra-indicaties zijn and maken een plan op maat." }
    ]
  },
  {
    id: 'dry-needling',
    title: 'Dry Needling',
    shortDesc: 'Effectieve behandeling van myofasciale triggerpoints.',
    icon: <Zap strokeWidth={1} />,
    fullDesc: 'Een krachtige methode waarbij met een dunne naald in verhardingen (triggerpoints) van een spier wordt geprikt voor directe ontspanning.',
    forWho: 'Mensen met chronische spierpijn of bewegingsbeperkingen.',
    results: ['Directe spierontspanning', 'Grotere Range of Motion', 'Snel pijnvrij'],
    imageUrl: 'https://images.unsplash.com/photo-1512678080530-7760d81faba6?auto=format&fit=crop&q=80&w=1200',
    faqs: [
      { question: "Wat is dry needling precies?", answer: "Het is het gericht aanprikken van triggerpoints (spierknopen) om pijn and stijfheid direct te verminderen." },
      { question: "Hoe voelt de behandeling?", answer: "U voelt een klein prikje, gevolgd door een korte reflexmatige ontspanning van de spier. Dit geeft vaak direct een verlichtend gevoel." },
      { question: "Hoe vaak is een behandeling nodig?", answer: "Meestal 1 tot 2 keer per week. Uw therapeut stelt een plan op dat exact past bij de snelheid van uw herstel." },
      { question: "Hoe snel merk ik effect?", answer: "Veel patiënten ervaren direct na de eerste sessie minder pijn and meer bewegingsvrijheid." },
      { question: "Wie voert de behandeling uit?", answer: "Bij SINA Sportlab werken uitsluitend erkende fysiotherapeuten met een gecertificeerde specialisatie in dry needling." }
    ]
  },
  {
    id: 'tapen',
    title: 'Biomechanisch Tapen',
    shortDesc: 'Dynamische ondersteuning van gewrichten en weefsel.',
    icon: <Shield strokeWidth={1} />,
    fullDesc: 'Geavanceerde tapetechnieken die de natuurlijke bewegingspatronen herstellen and ondersteunen zonder de mobiliteit te beperken.',
    forWho: 'Sporters die stabiliteit nodig hebben tijdens herstel of prestatie-ondersteuning.',
    results: ['Directe stabiliteit', 'Minder pijn bij belasting', 'Veiliger bewegen'],
    imageUrl: 'https://images.unsplash.com/photo-1579126038374-6064e9370f0f?auto=format&fit=crop&q=80&w=1200',
    faqs: [
      { question: "Hoe helpt biomechanisch tapen?", answer: "Het ondersteunt gewrichten and spieren terwijl het de natuurlijke beweging stimuleert. Dit zorgt voor minder pijn and een veiliger gevoel tijdens het sporten." },
      { question: "Wat is het verschil met gewoon tapen?", answer: "Gewoon tape beperkt vaak een beweging; biomechanisch tapen herstelt patronen met specifieke technieken die passen bij uw anatomie." },
      { question: "Hoe lang duurt een sessie?", answer: "Een sessie duurt doorgaans 30 tot 60 minuten, inclusief analyse and het zorgvuldig aanbrengen van de tape." },
      { question: "Is het aanbrengen pijnlijk?", answer: "Nee, het is comfortabel. De tape geeft een lichte, ondersteunende druk die door de meeste sporters als zeer prettig wordt ervaren." }
    ]
  },
  {
    id: 'osteopathie',
    title: 'Osteopathie',
    shortDesc: 'Holistische benadering van het lichaam als één systeem.',
    icon: <Crosshair strokeWidth={1} />,
    fullDesc: 'Een manuele geneeswijze die zich richt op het herstellen van de beweging and balans in het hele lichaam voor optimale functie.',
    forWho: 'Bij onverklaarbare klachten of structurele disbalans.',
    results: ['Herstel van natuurlijke balans', 'Vrijheid van bewegen', 'Duurzaam resultaat'],
    imageUrl: 'https://images.unsplash.com/photo-1519824145371-296894a0daa9?auto=format&fit=crop&q=80&w=1200',
    faqs: [
      { question: "Wat is het verschil met fysiotherapie?", answer: "Waar fysio zich vaak richt op spieren and gewrichten, kijkt osteopathie naar de balans tussen alle systemen, inclusief organen and zenuwstelsel." },
      { question: "Hoe lang duurt een behandeling?", answer: "Een sessie duurt tussen de 30 and 60 minuten, afhankelijk van de complexiteit van de klacht." },
      { question: "Wordt osteopathie vergoed?", answer: "Ja, de meeste zorgverzekeraars vergoeden dit vanuit de aanvullende verzekering. Check hiervoor uw eigen polisvoorwaarden." },
      { question: "Is het geschikt voor kinderen?", answer: "Zeker. We passen onze technieken aan voor kinderen, bijvoorbeeld bij slaapproblemen, reflux of groeipijnen." }
    ]
  }
];

const Physiotherapy: React.FC = () => {
  const [activeSpec, setActiveSpec] = useState<Specialization | null>(null);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  useEffect(() => {
    if (activeSpec) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [activeSpec]);

  const handleCloseModal = () => {
    setActiveSpec(null);
    setOpenFaqIndex(null);
  };

  const steps = [
    { t: 'Intake', d: 'Grondig onderzoek om uw klacht and doelen volledig in kaart te brengen.', long: 'We luisteren and observeren om de kern van uw probleem direct bij de bron aan te pakken.' },
    { t: 'Analyse', d: 'Data-metingen voor een objectief and wetenschappelijk startpunt.', long: 'Geen aannames, maar feiten. Onze meetapparatuur vertelt ons precies waar de winst ligt.' },
    { t: 'Advies', d: 'Een behandelplan op maat gebaseerd op de verzamelde data.', long: 'U krijgt een plan dat specifiek voor úw lichaam and doelstellingen is ontworpen.' },
    { t: 'Traject', d: 'Doelgericht herstel met continue monitoring and bijsturing.', long: 'Wij begeleiden u intensief totdat u uw resultaat heeft behaald and behouden.' }
  ];

  return (
    <div className="animate-in fade-in duration-1000 bg-white selection:bg-black selection:text-white overflow-x-hidden">
      {/* Detail Modal */}
      {activeSpec && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 sm:p-6 md:p-10 animate-in fade-in duration-300">
          <div className="absolute inset-0 bg-black/80 blur-backdrop" onClick={handleCloseModal} />
          <div className="relative bg-white w-full max-w-2xl shadow-2xl animate-in slide-in-from-bottom-8 duration-500 max-h-[90vh] overflow-y-auto scroll-hide rounded-xs">
            <button onClick={handleCloseModal} className="absolute top-6 right-6 text-zinc-400 hover:text-black transition-colors z-[120] outline-none bg-white/50 rounded-full p-1 sm:p-0 sm:bg-transparent" aria-label="Sluit modal">
              <X size={32} strokeWidth={1} />
            </button>
            
            {activeSpec.imageUrl && (
              <div className="w-full h-48 sm:h-72 overflow-hidden relative grayscale transition-all duration-1000">
                <img src={activeSpec.imageUrl} alt={activeSpec.title} className="w-full h-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/5 to-transparent" />
              </div>
            )}

            <div className="p-8 sm:p-12 md:p-16 pt-8">
              <div className="mb-10 flex items-center gap-6">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-zinc-50 rounded-full flex items-center justify-center text-black shrink-0">
                  {/* Fix for React.cloneElement type check by casting to React.ReactElement<any> */}
                  {React.cloneElement(activeSpec.icon as React.ReactElement<any>, { size: 28 })}
                </div>
                <h2 className="text-2xl sm:text-4xl font-black tracking-tighter uppercase italic">{activeSpec.title}</h2>
              </div>

              <div className="space-y-10">
                <p className="text-base sm:text-lg text-zinc-600 font-light leading-relaxed italic">{activeSpec.fullDesc}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-[10px] font-bold tracking-[0.3em] uppercase text-zinc-400 mb-4">Voor wie?</h4>
                    <p className="font-medium text-sm leading-relaxed italic">{activeSpec.forWho}</p>
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold tracking-[0.3em] uppercase text-zinc-400 mb-4">Resultaten</h4>
                    <ul className="space-y-2">
                      {activeSpec.results.map((res, i) => (
                        <li key={i} className="flex items-center gap-3 text-sm font-light italic">
                          <CheckCircle2 size={14} className="text-black shrink-0" /> {res}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="border-t border-zinc-100 pt-10">
                  <h4 className="text-[10px] font-bold tracking-[0.3em] uppercase text-zinc-400 mb-6 italic">SINA Sportlab Antwoordt</h4>
                  <div className="space-y-2">
                    {activeSpec.faqs.map((faq, idx) => (
                      <div key={idx} className="border border-zinc-50 overflow-hidden">
                        <button 
                          onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                          className="w-full flex items-center justify-between p-4 text-left hover:bg-zinc-50 transition-colors outline-none"
                        >
                          <span className="text-sm font-bold tracking-tight uppercase italic">{faq.question}</span>
                          <ChevronDown size={16} className={`transition-transform duration-300 ${openFaqIndex === idx ? 'rotate-180' : ''}`} />
                        </button>
                        <div className={`transition-all duration-300 ease-in-out ${openFaqIndex === idx ? 'max-h-60 opacity-100 p-4 pt-0' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                          <p className="text-sm text-zinc-500 font-light leading-relaxed italic">{faq.answer}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <button className="w-full bg-black text-white py-6 text-xs font-bold tracking-[0.3em] uppercase hover:bg-zinc-800 transition-all active:scale-95">
                  DIRECT INTAKE PLANNEN
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="px-6 py-32 sm:py-40 max-w-7xl mx-auto">
        <span className="text-[10px] font-bold tracking-[0.4em] text-zinc-400 uppercase mb-8 block">ZORG & PERFORMANCE</span>
        <h1 className="text-5xl md:text-[8rem] font-black tracking-tighter leading-[0.8] mb-12 uppercase italic">
          FYSIO.<br className="hidden sm:block" />THERAPIE.
        </h1>
        <p className="text-xl sm:text-2xl text-zinc-500 font-light leading-relaxed max-w-2xl italic">
          Duurzaam herstel door wetenschappelijke precisie. Bij SINA Sportlab Assen combineren we specialistische zorg met geavanceerde data-analyse voor resultaten die beklijven.
        </p>
      </section>

      {/* Sticky Subnav (Consolidated) */}
      <div className="sticky top-20 sm:top-24 z-40 bg-white/90 blur-backdrop border-y border-zinc-100 hidden sm:block">
        <div className="max-w-7xl mx-auto px-6 flex justify-between py-5 overflow-x-auto scroll-hide">
          {specs.map((s) => (
            <button 
              key={s.id}
              onClick={() => setActiveSpec(s)}
              className="text-[9px] sm:text-[10px] font-bold tracking-[0.2em] text-zinc-400 hover:text-black uppercase transition-colors flex items-center gap-2 whitespace-nowrap px-4 sm:px-0"
            >
              {s.title}
            </button>
          ))}
        </div>
      </div>

      {/* Specializations Grid */}
      <section className="px-6 py-20 sm:py-40 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
          {specs.map((s) => (
            <div 
              key={s.id}
              onClick={() => setActiveSpec(s)}
              className="group border border-zinc-100 p-8 sm:p-12 hover:border-black transition-all cursor-pointer flex flex-col h-full bg-white relative overflow-hidden active:scale-95"
            >
              <div className="mb-8 sm:mb-10 text-zinc-400 group-hover:text-black transition-all duration-300 relative z-10">
                {/* Fix for React.cloneElement type check by casting to React.ReactElement<any> */}
                {React.cloneElement(s.icon as React.ReactElement<any>, { size: 40 })}
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-6 tracking-tight relative z-10 uppercase italic">{s.title}</h3>
              <p className="text-zinc-500 font-light leading-relaxed mb-8 flex-grow relative z-10 text-sm sm:text-base italic">
                {s.shortDesc}
              </p>
              <div className="flex items-center gap-4 text-[9px] sm:text-[10px] font-bold tracking-widest text-zinc-300 group-hover:text-black transition-colors uppercase relative z-10">
                DETAILS <ChevronRight size={14} className="group-hover:translate-x-2 transition-transform" />
              </div>
              <div className="absolute -bottom-4 -right-4 text-zinc-50 font-black text-8xl sm:text-9xl select-none group-hover:text-zinc-100 transition-colors duration-700 uppercase italic opacity-50">
                {s.title.charAt(0) === '(' ? s.title.charAt(1) : s.title.charAt(0)}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Method Section */}
      <section className="py-32 sm:py-60 px-6 relative overflow-hidden bg-white border-t border-zinc-100">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-16 sm:mb-32 flex flex-col md:flex-row items-end justify-between gap-8 sm:gap-12">
            <div className="max-w-2xl">
              <span className="text-[10px] font-bold tracking-[0.4em] text-zinc-400 uppercase mb-8 block">DE SINA METHODIEK</span>
              <h2 className="text-3xl sm:text-8xl font-black tracking-tighter leading-none italic uppercase">Onze werkwijze.</h2>
            </div>
            <div className="text-zinc-400 font-light max-w-xs text-sm leading-relaxed mb-4 italic">
              Wij werken volgens een circulair model waarbij elke fase leidt tot dieper inzicht in uw fysieke potentieel.
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border-t border-zinc-100">
            {steps.map((step, i) => (
              <div 
                key={i} 
                className={`relative group p-10 sm:p-12 lg:p-16 border-b lg:border-b-0 md:border-r border-zinc-100 transition-all duration-700 cursor-default ${hoveredStep === i ? 'bg-black text-white' : 'hover:bg-zinc-50'}`}
                onMouseEnter={() => setHoveredStep(i)}
                onMouseLeave={() => setHoveredStep(null)}
              >
                <span className={`absolute top-8 right-8 text-6xl sm:text-8xl font-black italic transition-all duration-700 pointer-events-none ${hoveredStep === i ? 'text-white/10 scale-125' : 'text-zinc-50'}`}>
                  0{i + 1}
                </span>
                <div className="relative z-10">
                  <h4 className={`font-black text-2xl sm:text-3xl tracking-tighter mb-6 uppercase italic transition-colors duration-500 ${hoveredStep === i ? 'text-white' : 'text-black'}`}>
                    {step.t}
                  </h4>
                  <p className={`text-base font-light leading-relaxed mb-6 transition-colors duration-500 ${hoveredStep === i ? 'text-zinc-400' : 'text-zinc-500'} italic`}>
                    {step.d}
                  </p>
                  <div className={`overflow-hidden transition-all duration-700 ease-out ${hoveredStep === i ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <p className="text-sm font-medium border-t border-white/20 pt-6 italic">
                      {step.long}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 sm:py-40 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl sm:text-7xl font-black tracking-tighter leading-tight italic uppercase mb-12">
          Klaar voor de volgende <br className="hidden sm:block" />stap naar herstel?
        </h2>
        <p className="text-lg sm:text-xl text-zinc-500 font-light mb-16 sm:mb-20 max-w-2xl mx-auto italic">
          Onze sportfysiotherapeuten in Assen staan voor u klaar om u te helpen met een plan dat écht werkt. Geen giswerk, maar meetbaar resultaat.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 justify-center items-center">
          <button className="bg-black text-white px-10 sm:px-14 py-6 sm:py-8 text-xs font-bold tracking-[0.4em] uppercase hover:bg-zinc-800 transition-all flex items-center justify-center gap-4 group active:scale-95 shadow-xl">
            PLAN INTAKE <ArrowRight size={16} />
          </button>
          <button className="text-black px-10 sm:px-14 py-6 sm:py-8 text-xs font-bold tracking-[0.4em] uppercase hover:bg-zinc-50 transition-all border-b-2 border-transparent hover:border-black">
            STEL EEN VRAAG
          </button>
        </div>
      </section>
    </div>
  );
};

export default Physiotherapy;
