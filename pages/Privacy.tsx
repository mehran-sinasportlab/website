
import React from 'react';
import { ShieldCheck, ArrowRight, FileText, UserCheck, Scale, Database, Globe, Trash2, HelpCircle } from 'lucide-react';

const Privacy: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-1000 bg-white">
      {/* Hero Section */}
      <section className="px-6 py-40 max-w-7xl mx-auto">
        <div className="max-w-4xl">
          <span className="text-[10px] font-bold tracking-[0.4em] text-zinc-400 uppercase mb-8 block italic">JOUW PRIVACY IS ONZE PRIORITEIT</span>
          <h1 className="text-6xl md:text-[8rem] font-black tracking-tighter leading-[0.8] mb-16 italic uppercase">PRIVACY<br/>BELEID.</h1>
          <p className="text-2xl md:text-3xl text-zinc-500 font-light leading-relaxed mb-12">
            Bij SINA Voetballab en Sina Sportlab - hierna aangeduid als SINA - nemen we de privacygegevens van cliënten erg serieus. Ons privacybeleid kunt u hieronder doornemen.
          </p>
          <div className="w-20 h-1 bg-black mb-20" />
        </div>
      </section>

      {/* Main Content Sections */}
      <section className="px-6 pb-40 max-w-5xl mx-auto">
        <div className="space-y-32">
          
          {/* Article 1: Begripsbepalingen */}
          <div className="space-y-12">
            <div className="flex items-center gap-4 text-zinc-300">
              <FileText size={24} />
              <div className="h-px flex-grow bg-zinc-100" />
            </div>
            <h2 className="text-4xl font-black tracking-tight italic uppercase">Artikel 1: Begripsbepalingen</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8 text-zinc-500 font-light text-lg">
              <p><strong>1.1 Persoonsgegevens:</strong> Gegevens betreffende een geïdentificeerd of identificeerbaar persoon.</p>
              <p><strong>1.2 Verwerking persoonsgegevens:</strong> Handelingen met betrekking tot persoonsgegevens verzamelen, vastleggen, verstrekken, doorzending, raadplegen, samenbrengen, bewaren, ordenen en gebruiken. Onder deze benaming vallen de cliënt dossiers.</p>
              <p><strong>1.3 Bestand:</strong> Een structureel geheel aan persoonsgegevens: elektronisch, fysiek exemplaar of telefonisch.</p>
              <p><strong>1.4 Betrokkene:</strong> De persoon waar de gegevens betrekking op hebben.</p>
              <p><strong>1.5 Verantwoordelijke:</strong> De persoon verantwoordelijk voor de doelbepaling en de inzet van de verwerkingsmiddelen binnen SINA. Verantwoording dragen voor: opslag, bewerking en het gegevensgebruik.</p>
              <p><strong>1.6 Beheerder:</strong> Verantwoordelijk voor het complete beheer van de persoonsgegevens binnen SINA.</p>
              <p><strong>1.7 Gebruiker:</strong> Persoon (werknemer) die met toestemming van de beheerder persoonsgegevens aan het archief kan toevoegen en/ of te wijzigen.</p>
              <p><strong>1.8 Autoriteit persoonsgegevens:</strong> Onafhankelijke organisatie zonder winstoogmerk dat toeziet op de uitvoering van de verwerking van persoonsgegevens.</p>
            </div>
          </div>

          {/* Article 2 & 3: Reikwijdte & Doel */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            <div className="space-y-8">
              <h2 className="text-3xl font-black tracking-tight italic uppercase border-b border-zinc-100 pb-6">Artikel 2: De reikwijdte van dit beleid</h2>
              <p className="text-zinc-500 font-light text-lg leading-relaxed">
                2.1 Onder dit beleid vallen handelingen/acties omtrent de verwerking van persoonsgegevens, ongeacht geautomatiseerd of niet geautomatiseerd door medewerkers van SINA.
              </p>
            </div>
            <div className="space-y-8">
              <h2 className="text-3xl font-black tracking-tight italic uppercase border-b border-zinc-100 pb-6">Artikel 3: Doel van het beleid</h2>
              <div className="text-zinc-500 font-light text-lg leading-relaxed space-y-4">
                <p>3.1 Het doel van dit beleid is een praktische uitwerking te formuleren, om zo te voldoen aan wettelijke voorwaarden omtrent de bedrijfsvoering m.b.t. de verwerking van persoonsgegeven en algemene patiënten rechten:</p>
                <ol className="list-decimal pl-6 space-y-2 italic">
                  <li>Algemene Verordening Gegevensbescherming (AVG)</li>
                  <li>Wet Bescherming Persoonsgegevens (WBP)</li>
                  <li>Wet geneeskundige behandelingsovereenkomst</li>
                </ol>
                <p>3.2 Het beleid is van toepassing op het algehele databeheer m.b.t. persoonsgegevens dat binnen SINA wordt gevoerd.</p>
              </div>
            </div>
          </div>

          {/* Article 4 & 5: Voorwaarden & Grondslagen */}
          <div className="space-y-12 bg-zinc-50 p-12 md:p-20">
            <div className="space-y-12">
              <h2 className="text-3xl font-black tracking-tight italic uppercase">Artikel 4: Gestelde voorwaarden voor een rechtmatige persoonsgegevensverwerking</h2>
              <div className="space-y-6 text-zinc-600 font-light text-lg">
                <p>4.1 Het verzamelen van persoonsgegevens vindt uitsluitend plaats in overleg met de patiënt/ cliënt, deze wordt zowel schriftelijk als mondeling van dit feit op de hoogte gebracht. De verzamelingsdoeleinden zijn gerechtvaardigd, gegevens worden nimmer ongevraagd met derden gedeeld of ingezet voor doeleinden buiten de core business van SINA om.</p>
                <p>4.2 Het verwerken van persoonsgebonden data dient nauwkeurig, actueel en in complete zin te worden afgerond door de gebruiker binnen SINA. De beheerder is verantwoordelijk om dit gebruik te monitoren, de verzameling mag niet meer omvattend van aard zijn dan hoofdzakelijk nodig wordt geacht.</p>
              </div>
            </div>
            
            <div className="space-y-8 pt-12 border-t border-zinc-200">
              <h2 className="text-3xl font-black tracking-tight italic uppercase">Artikel 5: De grondslagen voor de actieve verwerking van persoonsgegevens</h2>
              <div className="space-y-4 text-zinc-600 font-light text-lg">
                <p>5.1 Er is wettelijk bepaald dat een organisatie gegronde redenen moet hebben om op legitieme basis persoonsgegevens te verzamelen, aan de volgende grondslagen moet worden voldaan:</p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-4"><ShieldCheck className="shrink-0 mt-1" size={18} /> <span>De betrokkene heeft voor de verwerking van zijn/ haar persoonlijke ondubbelzinnige toestemming verleent.</span></li>
                  <li className="flex items-start gap-4"><ShieldCheck className="shrink-0 mt-1" size={18} /> <span>Er wordt voldaan aan de wettelijke verplichting ten aanzien van de verslaglegging.</span></li>
                  <li className="flex items-start gap-4"><ShieldCheck className="shrink-0 mt-1" size={18} /> <span>De verslaglegging is in overeenstemming met het belang van de betrokkene.</span></li>
                  <li className="flex items-start gap-4"><ShieldCheck className="shrink-0 mt-1" size={18} /> <span>Het is noodzakelijk voor de bestrijding van mogelijke ernstige gezondheidsgevolgen.</span></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Article 6 & 7: Beheer & Kennisgeving */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            <div className="space-y-8">
              <h2 className="text-3xl font-black tracking-tight italic uppercase">Artikel 6: De verwerking en het beheer van de persoonsgegeven van SINA</h2>
              <div className="text-zinc-500 font-light text-lg space-y-4">
                <p>6.1 De verantwoordelijke houdt een register bij met hierin de persoonsgebonden bestanden, deze worden bewaard binnen een digitaal en fysiek beschermde omgeving.</p>
                <p>6.2 De beheerder ziet toe op een conforme werkwijze van de gebruikers met betrekking tot de wettelijke voorwaarden die gelden voor de verwerking van persoonsgegevens.</p>
                <p>6.3 De verantwoordelijke draagt een medewerker aan die verantwoordelijk is voor de aanmelding van de verwerkingswijze bij de AP (Autoriteit Persoonsgegevens).</p>
                <p>6.4 De beheerder is verplicht om eventuele veranderingen in de verslaglegging herstructurering van data te rapporteren aan de verantwoordelijke.</p>
              </div>
            </div>
            <div className="space-y-8">
              <h2 className="text-3xl font-black tracking-tight italic uppercase">Artikel 7: Kennisgeving met betrekking tot de betrokkene</h2>
              <p className="text-zinc-500 font-light text-lg leading-relaxed">
                7.1 De desbetreffende persoon die in contact staat met de betrokkene is verplicht deze persoon op mondelinge en schriftelijke wijze te informeren met welke doelen de persoonsgegevens worden verworven.
              </p>
            </div>
          </div>

          {/* Article 8: Minderjarigen */}
          <div className="space-y-12">
            <div className="flex items-center gap-4 text-zinc-300">
              <UserCheck size={24} />
              <div className="h-px flex-grow bg-zinc-100" />
            </div>
            <h2 className="text-4xl font-black tracking-tight italic uppercase">Artikel 8: Vertegenwoordiging medische persoonsgegevens minderjarige</h2>
            <div className="space-y-6 text-zinc-500 font-light text-lg">
              <p>8.1 Op het moment dat de betrokkene jonger is dan twaalf, is deze persoon onvoldoende handelingsbekwaam betreffend de besluitvorming omtrent de verwerking van persoonsgegevens. De ouder of voogd wordt geacht een akkoord te geven.</p>
              <p>8.2 Hetzelfde geldt voor een betrokkene in de leeftijdscategorie 12- 16, die niet in staan is tot een redelijke waardering van zijn belangen ter zake.</p>
              <p>8.3 Indien de betrokkene minderjarig is zal de besluitvorming omtrent het vastleggen, vernietigen of wijzigen van de persoonsgegevens te allen tijde onder de verantwoording van de ouder/ voogd vallen.</p>
            </div>
          </div>

          {/* Article 9: Derden */}
          <div className="space-y-12 bg-black text-white p-12 md:p-20">
            <h2 className="text-3xl font-black tracking-tight italic uppercase text-white">Artikel 9: Het verstrekken van gegevens aan derden</h2>
            <div className="space-y-8 text-zinc-400 font-light text-lg">
              <p>9.1 Gegevens worden nimmer gedeeld met derden zonder toestemming van de betrokkene in kwestie. De betrokkene dient mondeling en schriftelijk akkoord te geven voordat gegevens mogelijk met derden worden gedeeld.</p>
              <div className="space-y-4">
                <p>9.2 Binnen SINA kunnen gegevens zonder toestemming van de betrokkene worden verstrekt, mits dit noodzakelijk is voor de taakuitoefening van de professionals:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Is betrokken bij het acute zorgproces of de hulpverlening van de betrokkene.</li>
                  <li>De persoon in kwestie is betrokken bij de financiële of administratieve handelingen met betrekking tot de betrokkene.</li>
                  <li>Ziet toe op de behandelkwaliteit (trainingsdoeleinden), alleen mogelijk binnen een gesloten setting.</li>
                </ul>
              </div>
              <p>9.3 Persoonsgegevens worden niet opgestuurd naar landen buiten de Europese Unie, tenzij er aangetoond kan worden dat er op een adequaat niveau wordt omgegaan met mensenrechten en software beveiliging.</p>
            </div>
          </div>

          {/* Article 10 & 11: Toegang & Inzage */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            <div className="space-y-8">
              <h2 className="text-3xl font-black tracking-tight italic uppercase">Artikel 10: Persoonsgegevens en toegangsverschaffing</h2>
              <div className="text-zinc-500 font-light text-lg space-y-4">
                <p>10.1 Gebruikers hebben toegang tot persoonsgegevens mits dit noodzakelijk van aard is voor het beoefenen van de desbetreffende functie.</p>
                <p>10.2 Deelnemers van Performance testen krijgen hun eigen login gegevens om hun resultaten in te bekijken. Deze gegevens zijn in eerste instantie uitsluitend zichtbaar voor de deelnemer zelf. Bij testen in groepsverbanden worden in sommige gevallen resultaten gedeeld met coaches. Uiteraard wordt hier toestemming voor gegeven door de deelnemer zelf.</p>
              </div>
            </div>
            <div className="space-y-8">
              <h2 className="text-3xl font-black tracking-tight italic uppercase">Artikel 11: Inzage betrokkene met betrekking tot persoonlijke gegevens</h2>
              <p className="text-zinc-500 font-light text-lg leading-relaxed italic">
                11.1 De betrokkene heeft het recht de hem betreffende persoonsgegevens, die hij aan een verwerkingsverantwoordelijke heeft verstrekt, in een gestructureerde, gangbare en machine leesbare vorm te verkrijgen, en hij heeft het recht die gegevens aan een andere verwerkingsverantwoordelijke over te dragen, zonder daarbij te worden gehinderd door de verwerkingsverantwoordelijke aan wie de persoonsgegevens waren verstrekt.
              </p>
            </div>
          </div>

          {/* Article 12 & 13: Bewaartermijn & Klachten */}
          <div className="space-y-12">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
                <div className="space-y-8">
                  <h2 className="text-3xl font-black tracking-tight italic uppercase">Artikel 12: Bewaartermijn</h2>
                  <div className="text-zinc-500 font-light text-lg space-y-4">
                    <p>12.1 De persoonsgegevens worden voor onbepaalde tijd worden opgeslagen in de database van SINA. Een betrokkene kan mogelijkerwijs terugkeren, in deze situatie kan er meer passende zorg verleend worden.</p>
                    <p>12.2 De betrokkene kan te allen tijde het verzoek indienden bij de gebruiker om over te gaan tot het verwijderen/ vernietigen van gegevens. SINA is wettelijk verplicht om dit verzoek te honoreren.</p>
                  </div>
                </div>
                <div className="space-y-8">
                  <h2 className="text-3xl font-black tracking-tight italic uppercase">Artikel 13: Klachtafhandeling</h2>
                  <div className="text-zinc-500 font-light text-lg space-y-4">
                    <p>13.1 Op het moment dat een betrokkene van mening is dat de regels van dit document niet worden nageleefd of een logische verdenking heeft dat er onverantwoordelijk met vertrouwelijke informatie wordt gehandeld binnen SINA, dan zijn er twee opties:</p>
                    <ul className="space-y-3 italic">
                      <li>• Contact opnemen met de verantwoordelijke binnen SINA en het geschil bespreekbaar maken.</li>
                      <li>• Een verzoek neerleggen bij de Autoriteit Persoonsgegevens, deze instantie zal een onderzoek met betrekking tot de persoonsgegevens verwerking en de AVG wetgeving uitvoeren.</li>
                    </ul>
                  </div>
                </div>
             </div>
          </div>

        </div>

        {/* Final Contact Strip */}
        <div className="mt-40 text-center space-y-12">
           <div className="w-full h-px bg-zinc-100" />
           <p className="text-zinc-400 italic text-xl max-w-2xl mx-auto">
             Mocht u vragen hebben betreffende bovenstaand; neem gerust CONTACT met ons op!
           </p>
           <button 
             onClick={() => window.location.hash = 'contact'}
             className="bg-black text-white px-16 py-8 text-xs font-black tracking-[0.4em] uppercase hover:bg-zinc-800 transition-all inline-flex items-center gap-4 group"
           >
             CONTACT OPNEMEN <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
           </button>
        </div>
      </section>
    </div>
  );
};

export default Privacy;
