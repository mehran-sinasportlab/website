
import React, { useState } from 'react';
import { Send, MessageCircle, Mail, Phone, MapPin, CheckCircle2, AlertCircle, Loader2, ExternalLink, ChevronRight } from 'lucide-react';
import { trackEvent } from '../services/analytics';
import Reviews from '../components/Reviews';

const Contact: React.FC = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [route, setRoute] = useState<'info' | 'testen'>('info');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('loading');
    
    // Track form submission attempt
    trackEvent('contact_form_submit', { route: route });

    // Simulate API call
    setTimeout(() => {
      setFormStatus('success');
      trackEvent('contact_form_success');
      window.location.hash = 'thanks';
    }, 1500);
  };

  return (
    <div className="animate-in fade-in duration-1000 bg-white">
      {/* Hero Header */}
      <section className="px-6 py-32 md:py-40 max-w-7xl mx-auto">
        <div className="max-w-4xl">
          <span className="text-[10px] font-bold tracking-[0.4em] text-zinc-400 uppercase mb-8 block italic">BEREIKBAARHEID</span>
          <h1 className="text-6xl md:text-[8rem] font-black tracking-tighter leading-[0.8] mb-12 italic uppercase">
            CONTACT.
          </h1>
          <p className="text-2xl text-zinc-500 font-light leading-relaxed max-w-2xl italic">
            Heb je een vraag over een training, afspraak of samenwerking? We staan direct voor je klaar via onze verschillende kanalen.
          </p>
        </div>
      </section>

      {/* Quick Access Cards */}
      <section className="px-6 pb-40 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-24">
          <a 
            href="https://wa.me/31611873590" 
            target="_blank" 
            rel="noopener noreferrer" 
            onClick={() => trackEvent('whatsapp_click')}
            className="group p-10 bg-zinc-50 border border-zinc-100 hover:border-black transition-all flex flex-col items-center text-center"
          >
             <MessageCircle size={32} className="mb-6 group-hover:scale-110 transition-transform" />
             <span className="text-[10px] font-bold tracking-[0.2em] text-zinc-400 uppercase mb-2">WhatsApp</span>
             <p className="font-bold text-lg italic">06-11 87 35 90</p>
          </a>
          <a 
            href="mailto:info@sinasportlab.nl" 
            onClick={() => trackEvent('email_click')}
            className="group p-10 bg-zinc-50 border border-zinc-100 hover:border-black transition-all flex flex-col items-center text-center"
          >
             <Mail size={32} className="mb-6 group-hover:scale-110 transition-transform" />
             <span className="text-[10px] font-bold tracking-[0.2em] text-zinc-400 uppercase mb-2">E-mail</span>
             <p className="font-bold text-lg italic">info@sinasportlab.nl</p>
          </a>
          <a 
            href="tel:+31611873590" 
            onClick={() => trackEvent('phone_click')}
            className="group p-10 bg-zinc-50 border border-zinc-100 hover:border-black transition-all flex flex-col items-center text-center"
          >
             <Phone size={32} className="mb-6 group-hover:scale-110 transition-transform" />
             <span className="text-[10px] font-bold tracking-[0.2em] text-zinc-400 uppercase mb-2">Bellen</span>
             <p className="font-bold text-lg italic">+31 (0) 6 11 87 35 90</p>
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          {/* Contact Form */}
          <div className="bg-white border border-zinc-100 p-10 md:p-16 shadow-2xl relative">
            <h2 className="text-4xl font-black tracking-tighter mb-10 italic uppercase">Stuur een bericht.</h2>
            
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Routing Selection */}
              <div className="space-y-4">
                  <label className="text-[10px] font-bold tracking-[0.2em] text-zinc-400 uppercase">Waar gaat je vraag over?</label>
                  <div className="flex bg-zinc-50 p-1 rounded-sm">
                    <button 
                      type="button"
                      onClick={() => setRoute('info')}
                      className={`flex-1 py-4 text-[10px] font-bold tracking-widest uppercase transition-all ${route === 'info' ? 'bg-white shadow-sm text-black' : 'text-zinc-400 hover:text-black'}`}
                    >
                      Algemeen / Fysio
                    </button>
                    <button 
                      type="button"
                      onClick={() => setRoute('testen')}
                      className={`flex-1 py-4 text-[10px] font-bold tracking-widest uppercase transition-all ${route === 'testen' ? 'bg-white shadow-sm text-black' : 'text-zinc-400 hover:text-black'}`}
                    >
                      Testen (Scholen/Clubs)
                    </button>
                  </div>
                  <p className="text-[10px] text-zinc-400 italic">
                    Uw bericht wordt gestuurd naar: <span className="text-black font-bold">{route === 'info' ? 'info@sinasportlab.nl' : 'testen@sinasportlab.nl'}</span>
                  </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold tracking-[0.2em] text-zinc-400 uppercase">Voornaam</label>
                  <input required className="w-full bg-zinc-50 border-none p-4 text-sm font-medium focus:ring-1 focus:ring-black outline-none transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold tracking-[0.2em] text-zinc-400 uppercase">Achternaam</label>
                  <input required className="w-full bg-zinc-50 border-none p-4 text-sm font-medium focus:ring-1 focus:ring-black outline-none transition-all" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold tracking-[0.2em] text-zinc-400 uppercase">E-mailadres</label>
                  <input type="email" required className="w-full bg-zinc-50 border-none p-4 text-sm font-medium focus:ring-1 focus:ring-black outline-none transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold tracking-[0.2em] text-zinc-400 uppercase">Telefoon (optioneel)</label>
                  <input className="w-full bg-zinc-50 border-none p-4 text-sm font-medium focus:ring-1 focus:ring-black outline-none transition-all" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold tracking-[0.2em] text-zinc-400 uppercase">Onderwerp</label>
                <input required className="w-full bg-zinc-50 border-none p-4 text-sm font-medium focus:ring-1 focus:ring-black outline-none transition-all" />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold tracking-[0.2em] text-zinc-400 uppercase">Bericht</label>
                <textarea required className="w-full h-40 bg-zinc-50 border-none p-4 text-sm font-medium focus:ring-1 focus:ring-black outline-none transition-all resize-none" />
              </div>

              <div className="flex items-center gap-4">
                <input type="checkbox" required id="privacy" className="w-4 h-4 border-zinc-200 text-black focus:ring-black cursor-pointer" />
                <label htmlFor="privacy" className="text-[10px] text-zinc-400 font-bold uppercase cursor-pointer italic">Ik ga akkoord met het privacybeleid</label>
              </div>

              <button 
                disabled={formStatus === 'loading'}
                className="w-full bg-black text-white py-6 text-xs font-bold tracking-[0.3em] uppercase hover:bg-zinc-800 transition-all flex items-center justify-center gap-4 disabled:opacity-50"
              >
                {formStatus === 'loading' ? <><Loader2 className="animate-spin" size={16} /> VERZENDEN...</> : <><Send size={16} /> BERICHT VERZENDEN</>}
              </button>
            </form>
          </div>

          {/* Location Info */}
          <div className="space-y-20 sticky top-40">
            <div>
              <h2 className="text-4xl font-black tracking-tighter mb-10 italic uppercase">Locatie Assen.</h2>
              <div className="space-y-8">
                <div className="flex gap-6 items-start">
                   <div className="w-12 h-12 bg-zinc-50 rounded-full flex items-center justify-center shrink-0"><MapPin size={20} /></div>
                   <div>
                      <h4 className="font-bold text-lg mb-1 italic">Bezoekadres</h4>
                      <p className="text-zinc-500 font-light leading-relaxed italic">Koperslagerstraat 3<br/>9403 VM Assen, Nederland</p>
                      <a href="https://maps.google.com/?q=Koperslagerstraat+3+Assen" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[10px] font-bold tracking-widest uppercase mt-4 border-b border-black">Google Maps <ExternalLink size={10} /></a>
                   </div>
                </div>
                <div className="flex gap-6 items-start">
                   <div className="w-12 h-12 bg-zinc-50 rounded-full flex items-center justify-center shrink-0"><Phone size={20} /></div>
                   <div>
                      <h4 className="font-bold text-lg mb-1 italic uppercase">Telefonisch</h4>
                      <p className="text-zinc-500 font-light leading-relaxed italic">06-11 87 35 90<br/>Maandag - Vrijdag: 08:30 - 18:00</p>
                   </div>
                </div>
              </div>
            </div>

            <div className="p-10 border border-zinc-100 space-y-8">
               <h4 className="text-[10px] font-bold tracking-[0.3em] text-zinc-400 uppercase">Snelkoppelingen</h4>
               <div className="grid grid-cols-1 gap-4">
                  <button onClick={() => window.location.hash = 'intake'} className="flex items-center justify-between p-6 bg-zinc-50 hover:bg-black hover:text-white transition-all group">
                     <span className="text-xs font-bold tracking-widest uppercase italic">Plan direct een intake</span>
                     <ChevronRight size={16} className="group-hover:translate-x-2 transition-transform" />
                  </button>
                  <button onClick={() => window.location.hash = 'contact'} className="flex items-center justify-between p-6 bg-zinc-50 hover:bg-black hover:text-white transition-all group">
                     <span className="text-xs font-bold tracking-widest uppercase italic">Vraag samenwerking aan</span>
                     <ChevronRight size={16} className="group-hover:translate-x-2 transition-transform" />
                  </button>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Integration before Map */}
      <Reviews />

      {/* Map Embed */}
      <section className="w-full h-[600px] bg-zinc-200 border-t border-zinc-100 grayscale hover:grayscale-0 transition-all duration-1000 overflow-hidden">
        <iframe 
          title="Locatie Assen"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2398.0583002636253!2d6.602251377488079!3d53.01353197225134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c8230f8180c4ef%3A0x77372d8e48f1f510!2sKoperslagerstraat%203%2C%209403%20VM%20Assen!5e0!3m2!1sen!2snl!4v1709400000000!5m2!1sen!2snl" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen={true} 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </div>
  );
};

export default Contact;
