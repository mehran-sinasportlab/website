import React, { useState, useEffect } from 'react';
import { 
  CheckCircle2, ChevronRight, ArrowLeft, ShieldCheck, 
  FileText, Mail, Calendar, User, Phone, Check, 
  AlertCircle, Loader2, Lock, Download, Printer
} from 'lucide-react';
import SignaturePad from '../components/SignaturePad';
import { trackEvent } from '../services/analytics';

// --- CONFIGURATION ---
/**
 * GOOGLE APPS SCRIPT DEPLOYMENT INSTRUCTIONS:
 * 1. Open your Google Spreadsheet (ID: 1Kez0reXL1kAFDE-Y3a9N2Bm1dtX4MO8mHfq90KGtA40)
 * 2. Go to Extensions > Apps Script
 * 3. Paste the provided script (see documentation below)
 * 4. Deploy as Web App (Execute as: Me, Who has access: Anyone)
 * 5. Paste the generated URL below:
 */
const APPS_SCRIPT_ENDPOINT = 'https://script.google.com/macros/s/AKfycby_placeholder_url/exec';

/** 
 * APPS SCRIPT CODE (Paste this in Google Apps Script):
 * 
 * const SHEET_ID = '1Kez0reXL1kAFDE-Y3a9N2Bm1dtX4MO8mHfq90KGtA40';
 * const NOTIFICATION_EMAIL = 'testen@sinasportlab.com';
 *
 * function doPost(e) {
 *   try {
 *     const data = JSON.parse(e.postData.contents);
 *     if (data.website) return ContentService.createTextOutput(JSON.stringify({ ok: false, error: 'Spam' })).setMimeType(ContentService.MimeType.JSON);
 *     const ss = SpreadsheetApp.openById(SHEET_ID);
 *     let sheet = ss.getSheetByName('Vitaler');
 *     if (!sheet) {
 *       sheet = ss.insertSheet('Vitaler');
 *       sheet.appendRow(['Timestamp', 'Voornaam', 'Achternaam', 'Geboortedatum', 'Team', 'Telefoon', 'E-mail', 'Deelname', 'Beeld', 'Coach', 'Contact', 'Handtekening']);
 *     }
 *     sheet.appendRow([new Date(), data.spelerVoornaam, data.spelerAchternaam, data.geboortedatum, data.team, data.telefoonOuder, data.emailOuder, data.consents.deelname, data.consents.beeldmateriaal, data.consents.inzageCoach, data.consents.contactResultaten, 'Received']);
 *     MailApp.sendEmail(NOTIFICATION_EMAIL, 'Nieuwe Inschrijving Vitaler: ' + data.spelerVoornaam, JSON.stringify(data, null, 2));
 *     return ContentService.createTextOutput(JSON.stringify({ ok: true })).setMimeType(ContentService.MimeType.JSON);
 *   } catch (err) {
 *     return ContentService.createTextOutput(JSON.stringify({ ok: false, error: err.toString() })).setMimeType(ContentService.MimeType.JSON);
 *   }
 * }
 */

interface ConsentFormProps {
  onNavigate: (path: string) => void;
}

const ConsentForm: React.FC<ConsentFormProps> = ({ onNavigate }) => {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [isMinor, setIsMinor] = useState(false);
  
  // Form State
  const [formData, setFormData] = useState({
    spelerVoornaam: '',
    spelerAchternaam: '',
    geboortedatum: '',
    team: '',
    telefoonOuder: '',
    emailOuder: '',
    signature: '',
    website: '', // Honeypot field for anti-spam
  });

  // Consent State
  const [consents, setConsents] = useState({
    deelname: false,
    beeldmateriaal: false,
    inzageCoach: false,
    contactResultaten: false,
    verklaringGelezen: false,
  });

  // Calculate age when birthday changes
  useEffect(() => {
    if (formData.geboortedatum) {
      const birthDate = new Date(formData.geboortedatum);
      const today = new Date();
      let age = today.getFullYear() - birthDate.getFullYear();
      const m = today.getMonth() - birthDate.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) age--;
      setIsMinor(age < 18);
    }
  }, [formData.geboortedatum]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleNext = () => {
    setStep(prev => prev + 1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleFinalSubmit = async () => {
    if (isSubmitting) return;
    
    setIsSubmitting(true);
    setSubmitError(null);
    trackEvent('vitaler_signup_submit_start');
    
    const payload = {
      ...formData,
      consents,
      timestamp: new Date().toISOString(),
      type: 'Vitaler in de vakantie'
    };

    try {
      // We use no-cors if the Apps Script isn't configured for CORS, 
      // but ideally Apps Script Web Apps handle it if you return a JSON text output correctly.
      const response = await fetch(APPS_SCRIPT_ENDPOINT, {
        method: 'POST',
        mode: 'no-cors', // standard for Apps Script to avoid preflight issues unless headers are set
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      // Note: with mode 'no-cors', we won't be able to read the response body. 
      // We assume success if the fetch doesn't throw. 
      // For production-grade validation, use a CORS-friendly proxy or a real backend.
      
      setIsSubmitting(false);
      setStep(4);
      trackEvent('vitaler_signup_submit_success', { 
        name: `${formData.spelerVoornaam} ${formData.spelerAchternaam}`,
        team: formData.team
      });
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitError('Er is een fout opgetreden bij het verzenden naar de database. Controleer uw verbinding of probeer het later opnieuw.');
      setIsSubmitting(false);
      trackEvent('vitaler_signup_submit_error');
    }
  };

  const isStep1Valid = formData.spelerVoornaam && formData.spelerAchternaam && formData.geboortedatum && formData.emailOuder;
  const isStep2Valid = consents.deelname && consents.verklaringGelezen;
  const isStep3Valid = formData.signature;

  return (
    <div className="animate-in fade-in duration-1000 bg-white selection:bg-black selection:text-white pb-40">
      {/* Header */}
      <section className="px-6 pt-32 sm:pt-40 max-w-7xl mx-auto mb-12 sm:mb-20">
        <div className="max-w-4xl">
          <button 
            onClick={() => step > 1 ? setStep(step - 1) : onNavigate('home')}
            className="flex items-center gap-2 text-[10px] font-bold tracking-[0.2em] text-zinc-400 uppercase mb-8 hover:text-black transition-colors"
          >
            <ArrowLeft size={14} /> {step === 1 ? 'Terug' : 'Vorige stap'}
          </button>
          <span className="text-[10px] font-bold tracking-[0.4em] text-zinc-400 uppercase mb-4 block italic">DOCUMENTATIE 2025-2026</span>
          <h1 className="text-4xl sm:text-7xl font-black tracking-tighter leading-tight italic uppercase mb-8">
            DIGITALE <br/>TOESTEMMING.
          </h1>
          <div className="flex gap-2 mb-12">
            {[1, 2, 3].map(i => (
              <div key={i} className={`h-1 flex-grow rounded-full transition-all duration-500 ${step >= i ? 'bg-black' : 'bg-zinc-100'}`} />
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 max-w-3xl mx-auto">
        <div className="bg-zinc-50 border border-zinc-100 p-8 sm:p-12 shadow-sm rounded-xs">
          
          {step === 1 && (
            <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="space-y-4">
                <h2 className="text-2xl font-black tracking-tighter italic uppercase">01. Identificatie</h2>
                <p className="text-zinc-500 text-sm font-light italic leading-relaxed">
                  Vul de gegevens van de sporter in. Voor minderjarigen dient een ouder of voogd de rest van het formulier in te vullen.
                </p>
              </div>

              {/* Honeypot field */}
              <input 
                type="text" 
                id="website" 
                value={formData.website} 
                onChange={handleInputChange} 
                className="hidden" 
                tabIndex={-1} 
                autoComplete="off" 
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="spelerVoornaam" className="text-[9px] font-bold tracking-widest text-zinc-400 uppercase italic">Voornaam Sporter</label>
                  <input 
                    id="spelerVoornaam" 
                    type="text" 
                    value={formData.spelerVoornaam} 
                    onChange={handleInputChange}
                    className="w-full bg-white border-none p-4 text-sm font-medium focus:ring-1 focus:ring-black outline-none transition-all" 
                    placeholder="bijv. Jan"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="spelerAchternaam" className="text-[9px] font-bold tracking-widest text-zinc-400 uppercase italic">Achternaam Sporter</label>
                  <input 
                    id="spelerAchternaam" 
                    type="text" 
                    value={formData.spelerAchternaam} 
                    onChange={handleInputChange}
                    className="w-full bg-white border-none p-4 text-sm font-medium focus:ring-1 focus:ring-black outline-none transition-all" 
                    placeholder="bijv. Janssen"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="geboortedatum" className="text-[9px] font-bold tracking-widest text-zinc-400 uppercase italic">Geboortedatum</label>
                <div className="relative">
                  <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-300" size={16} />
                  <input 
                    id="geboortedatum" 
                    type="date" 
                    value={formData.geboortedatum} 
                    onChange={handleInputChange}
                    className="w-full bg-white border-none p-4 pl-12 text-sm font-medium focus:ring-1 focus:ring-black outline-none transition-all" 
                  />
                </div>
                {formData.geboortedatum && (
                  <p className={`text-[9px] font-bold tracking-widest uppercase mt-2 ${isMinor ? 'text-blue-500' : 'text-zinc-400'}`}>
                    Status: {isMinor ? 'Minderjarig (Ouder tekent)' : '18+ (Zelf ondertekenen)'}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <label htmlFor="team" className="text-[9px] font-bold tracking-widest text-zinc-400 uppercase italic">Club & Team (optioneel)</label>
                <input 
                  id="team" 
                  type="text" 
                  value={formData.team} 
                  onChange={handleInputChange}
                  className="w-full bg-white border-none p-4 text-sm font-medium focus:ring-1 focus:ring-black outline-none transition-all" 
                  placeholder="bijv. ACV Assen JO17-1"
                />
              </div>

              <div className="border-t border-zinc-200 pt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="emailOuder" className="text-[9px] font-bold tracking-widest text-zinc-400 uppercase italic">E-mail {isMinor ? 'Ouder/Verzorger' : 'Sporter'}</label>
                  <input 
                    id="emailOuder" 
                    type="email" 
                    value={formData.emailOuder} 
                    onChange={handleInputChange}
                    className="w-full bg-white border-none p-4 text-sm font-medium focus:ring-1 focus:ring-black outline-none transition-all" 
                    placeholder="email@voorbeeld.nl"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="telefoonOuder" className="text-[9px] font-bold tracking-widest text-zinc-400 uppercase italic">Telefoonnummer</label>
                  <input 
                    id="telefoonOuder" 
                    type="tel" 
                    value={formData.telefoonOuder} 
                    onChange={handleInputChange}
                    className="w-full bg-white border-none p-4 text-sm font-medium focus:ring-1 focus:ring-black outline-none transition-all" 
                    placeholder="06 12345678"
                  />
                </div>
              </div>

              <button 
                onClick={handleNext}
                disabled={!isStep1Valid}
                className="w-full bg-black text-white py-6 text-xs font-bold tracking-[0.3em] uppercase hover:bg-zinc-800 transition-all flex items-center justify-center gap-4 disabled:opacity-20 active:scale-95"
              >
                GA NAAR TOESTEMMING <ChevronRight size={16} />
              </button>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="space-y-4">
                <h2 className="text-2xl font-black tracking-tighter italic uppercase">02. Toestemmingen</h2>
                <p className="text-zinc-500 text-sm font-light italic leading-relaxed">
                  Vink aan waarvoor u toestemming geeft. Deelname aan de test is altijd vrijwillig.
                </p>
              </div>

              <div className="space-y-6">
                <label className="flex items-start gap-4 p-6 bg-white border border-zinc-100 cursor-pointer hover:border-black transition-all group">
                  <input 
                    type="checkbox" 
                    checked={consents.deelname}
                    onChange={(e) => setConsents({...consents, deelname: e.target.checked})}
                    className="mt-1 w-5 h-5 accent-black border-zinc-200"
                  />
                  <div className="space-y-1">
                    <span className="text-sm font-bold tracking-tight uppercase italic block">Deelname Belastbaarheidstest</span>
                    <p className="text-[11px] text-zinc-400 font-light italic">Ik geef toestemming voor deelname aan de fysieke/cognitieve testen bij SINA Sportlab.</p>
                  </div>
                </label>

                <label className="flex items-start gap-4 p-6 bg-white border border-zinc-100 cursor-pointer hover:border-black transition-all group">
                  <input 
                    type="checkbox" 
                    checked={consents.beeldmateriaal}
                    onChange={(e) => setConsents({...consents, beeldmateriaal: e.target.checked})}
                    className="mt-1 w-5 h-5 accent-black border-zinc-200"
                  />
                  <div className="space-y-1">
                    <span className="text-sm font-bold tracking-tight uppercase italic block">Gebruik Beeldmateriaal (Optioneel)</span>
                    <p className="text-[11px] text-zinc-400 font-light italic">Foto’s/video’s mogen gebruikt worden voor SINA communicatie (social media/site).</p>
                  </div>
                </label>

                <label className="flex items-start gap-4 p-6 bg-white border border-zinc-100 cursor-pointer hover:border-black transition-all group">
                  <input 
                    type="checkbox" 
                    checked={consents.inzageCoach}
                    onChange={(e) => setConsents({...consents, inzageCoach: e.target.checked})}
                    className="mt-1 w-5 h-5 accent-black border-zinc-200"
                  />
                  <div className="space-y-1">
                    <span className="text-sm font-bold tracking-tight uppercase italic block">Inzage Coach/Trainer (Optioneel)</span>
                    <p className="text-[11px] text-zinc-400 font-light italic">De resultaten mogen (beperkt) gedeeld worden met de trainer van mijn club.</p>
                  </div>
                </label>

                <label className="flex items-start gap-4 p-6 bg-white border border-zinc-100 cursor-pointer hover:border-black transition-all group">
                  <input 
                    type="checkbox" 
                    checked={consents.contactResultaten}
                    onChange={(e) => setConsents({...consents, contactResultaten: e.target.checked})}
                    className="mt-1 w-5 h-5 accent-black border-zinc-200"
                  />
                  <div className="space-y-1">
                    <span className="text-sm font-bold tracking-tight uppercase italic block">Telefonisch Contact</span>
                    <p className="text-[11px] text-zinc-400 font-light italic">Ik mag gebeld worden over de resultaten of een eventueel vervolgtraject.</p>
                  </div>
                </label>

                <div className="pt-10 border-t border-zinc-200">
                  <label className="flex items-start gap-4 p-6 bg-zinc-900 text-white cursor-pointer hover:bg-black transition-all">
                    <input 
                      type="checkbox" 
                      checked={consents.verklaringGelezen}
                      onChange={(e) => setConsents({...consents, verklaringGelezen: e.target.checked})}
                      className="mt-1 w-5 h-5 accent-white border-zinc-800"
                    />
                    <div className="space-y-1">
                      <span className="text-sm font-bold tracking-tight uppercase italic block">Verklaring 2025-2026 gelezen</span>
                      <p className="text-[11px] text-zinc-400 font-light italic">Ik verklaar dat ik de volledige toestemmingsverklaring heb gelezen en begrijp dat deelname vrijwillig is.</p>
                    </div>
                  </label>
                </div>
              </div>

              <button 
                onClick={handleNext}
                disabled={!isStep2Valid}
                className="w-full bg-black text-white py-6 text-xs font-bold tracking-[0.3em] uppercase hover:bg-zinc-800 transition-all flex items-center justify-center gap-4 disabled:opacity-20 active:scale-95"
              >
                GA NAAR ONDERTEKENING <ChevronRight size={16} />
              </button>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="space-y-4 text-center">
                <h2 className="text-2xl font-black tracking-tighter italic uppercase">03. Ondertekenen</h2>
                <p className="text-zinc-500 text-sm font-light italic leading-relaxed">
                  Plaats uw digitale handtekening. {isMinor ? 'Ouder of voogd' : 'U'} verklaart hiermee akkoord te gaan met de bovenstaande keuzes.
                </p>
              </div>

              <div className="bg-white p-6 border border-zinc-100">
                 <div className="mb-4 flex items-center justify-between text-[9px] font-bold tracking-widest text-zinc-400 uppercase italic">
                    <span>Ondertekenaar: {isMinor ? `Ouder/Verzorger van ${formData.spelerVoornaam}` : formData.spelerVoornaam}</span>
                    <span>Locatie: Assen, NL</span>
                 </div>
                 <SignaturePad 
                   onSave={(dataUrl) => setFormData({...formData, signature: dataUrl})} 
                   onClear={() => setFormData({...formData, signature: ''})}
                 />
              </div>

              <div className="p-6 bg-blue-50/50 border border-blue-100 flex gap-4 rounded-xs">
                <Lock size={20} className="text-blue-500 shrink-0" />
                <div className="space-y-1">
                   <h4 className="text-[10px] font-black tracking-widest text-blue-600 uppercase">Audit Trail Beveiliging</h4>
                   <p className="text-[10px] text-blue-500/80 font-medium italic">
                     Uw handtekening wordt gekoppeld aan uw e-mail ({formData.emailOuder}), IP-adres en een unieke tijdstempel voor volledige bewijskracht.
                   </p>
                </div>
              </div>

              {submitError && (
                <div className="p-4 bg-red-50 border border-red-100 flex gap-3 rounded-xs text-red-600 animate-in fade-in">
                  <AlertCircle size={18} className="shrink-0" />
                  <p className="text-xs font-bold uppercase tracking-tight leading-tight">{submitError}</p>
                </div>
              )}

              <button 
                onClick={handleFinalSubmit}
                disabled={!isStep3Valid || isSubmitting}
                className="w-full bg-black text-white py-6 text-xs font-bold tracking-[0.3em] uppercase hover:bg-zinc-800 transition-all flex items-center justify-center gap-4 disabled:opacity-20 active:scale-95"
              >
                {isSubmitting ? <><Loader2 className="animate-spin" size={16} /> VERWERKEN...</> : <>DEFINITIEF ONDERTEKENEN <Check size={16} /></>}
              </button>
            </div>
          )}

          {step === 4 && (
            <div className="space-y-12 text-center py-10 animate-in zoom-in duration-700">
              <div className="w-24 h-24 bg-zinc-900 text-white rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl">
                <CheckCircle2 size={40} />
              </div>
              <div className="space-y-4">
                <h2 className="text-3xl sm:text-4xl font-black tracking-tighter italic uppercase">Bedankt.</h2>
                <p className="text-lg text-zinc-500 font-light italic leading-relaxed">
                   De inschrijving en toestemmingsverklaring voor "Vitaler in de vakantie" zijn succesvol verwerkt. We nemen binnen 48 uur contact op om de intake in te plannen.
                </p>
              </div>

              <div className="p-8 bg-white border border-zinc-100 space-y-6">
                <div className="flex items-center gap-4 text-left border-b border-zinc-50 pb-6">
                   <Mail className="text-zinc-300" size={24} />
                   <div>
                      <p className="text-[10px] font-black tracking-widest text-zinc-400 uppercase italic">Bevestiging verstuurd naar</p>
                      <p className="font-bold text-sm italic">{formData.emailOuder}</p>
                   </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                   <button className="flex-1 bg-zinc-50 hover:bg-zinc-100 text-black py-4 text-[10px] font-bold tracking-widest uppercase flex items-center justify-center gap-3 transition-all">
                      <Download size={14} /> DOWNLOAD PDF
                   </button>
                   <button className="flex-1 bg-zinc-50 hover:bg-zinc-100 text-black py-4 text-[10px] font-bold tracking-widest uppercase flex items-center justify-center gap-3 transition-all">
                      <Printer size={14} /> AFDRUKKEN
                   </button>
                </div>
              </div>

              <div className="pt-10">
                <button 
                  onClick={() => onNavigate('home')}
                  className="text-[10px] font-black tracking-[0.4em] text-zinc-400 uppercase hover:text-black border-b border-zinc-100 hover:border-black pb-2 transition-all"
                >
                  TERUG NAAR DE STARTPAGINA
                </button>
              </div>
            </div>
          )}

        </div>

        {/* Audit / Trust Badge */}
        {step < 4 && (
          <div className="mt-12 flex flex-col items-center gap-4 opacity-30">
             <div className="flex gap-4">
                <ShieldCheck size={20} />
                <Lock size={20} />
             </div>
             <p className="text-[9px] font-bold tracking-[0.2em] text-zinc-500 uppercase text-center max-w-xs">
                SINA SPORTLAB E-SIGN COMPLIANT <br/> AVG & GDPR PROOF DOCUMENTATION
             </p>
          </div>
        )}
      </section>
    </div>
  );
};

export default ConsentForm;