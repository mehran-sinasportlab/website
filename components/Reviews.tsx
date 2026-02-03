
import React from 'react';
import { Star, ExternalLink } from 'lucide-react';

const reviewsData = [
  {
    name: "M. van Dijk",
    role: "Ouder van jeugdspeler",
    text: "Professionele en deskundige aanpak. De data-analyse gaf ons exact het inzicht dat nodig was voor het herstel van onze zoon.",
    rating: 5
  },
  {
    name: "Lars de Vries",
    role: "Amateurvoetballer",
    text: "SINA Sportlab gaat veel verder dan reguliere fysiotherapie. De combinatie van sportzorg en performance training is uniek in de regio.",
    rating: 5
  },
  {
    name: "S. Postma",
    role: "Hardloopster",
    text: "Duidelijke uitleg, rustige omgeving en zeer gerichte behandeling. Na maanden sukkelen eindelijk weer pijnvrij kunnen lopen.",
    rating: 5
  }
];

const Reviews: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 px-6 bg-zinc-50 border-y border-zinc-100 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 mb-6">
              <div className="flex text-black">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" />
                ))}
              </div>
              <span className="text-[10px] font-black tracking-widest uppercase">4.9 / 5.0 OP GOOGLE</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter italic uppercase leading-none">
              Wat anderen <br/>zeggen.
            </h2>
          </div>
          <a 
            href="https://g.page/r/CSdFnfX-KinxEBM/review" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-[10px] font-black tracking-[0.3em] uppercase border-b border-black pb-2 hover:opacity-50 transition-opacity mb-2"
          >
            BEKIJK ALLE REVIEWS OP GOOGLE <ExternalLink size={12} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {reviewsData.map((review, idx) => (
            <div 
              key={idx} 
              className="bg-white p-8 sm:p-10 border border-zinc-100 flex flex-col justify-between group hover:border-black transition-all duration-500"
            >
              <div>
                <div className="flex text-zinc-200 mb-6 group-hover:text-black transition-colors duration-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={12} fill="currentColor" />
                  ))}
                </div>
                <p className="text-lg text-zinc-600 font-light leading-relaxed italic mb-10">
                  "{review.text}"
                </p>
              </div>
              <div>
                <h4 className="font-bold text-sm tracking-tight uppercase italic">{review.name}</h4>
                <p className="text-[10px] font-bold tracking-widest text-zinc-400 uppercase">{review.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
