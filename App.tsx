
import React, { useState, useEffect } from 'react';
import { Layout } from './components/Layout';
import Home from './pages/Home';
import Intake from './pages/Intake';
import Services from './pages/Services';
import About from './pages/About';
import Scholieren from './pages/Kids';
import PricingPage from './pages/Pricing';
import Physiotherapy from './pages/Physiotherapy';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import Healthcare from './pages/Healthcare';
import VitalerPage from './pages/VitalerPage';
import NotFound from './pages/NotFound';
import ThankYou from './pages/ThankYou';
import ConsentForm from './pages/ConsentForm';
import CookieBanner from './components/CookieBanner';
import StickyMobileCTA from './components/StickyMobileCTA';
import { initGA, trackEvent } from './services/analytics';

const App: React.FC = () => {
  const [currentPath, setCurrentPath] = useState('home');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') || 'home';
      setCurrentPath(hash);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      
      // Track page view
      trackEvent('page_view', { page_path: hash });
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigate = (path: string) => {
    window.location.hash = path;
  };

  const handleConsentChange = () => {
    // Analytics re-init logic if needed
  };

  const renderContent = () => {
    switch (currentPath) {
      case 'home':
        return <Home onNavigate={navigate} />;
      case 'intake':
        return <Intake />;
      case 'services':
        return <Services />;
      case 'healthcare':
        return <Healthcare />;
      case 'vitaler':
        return <VitalerPage onNavigate={navigate} />;
      case 'physiotherapy':
        return <Physiotherapy />;
      case 'pricing':
        return <PricingPage />;
      case 'about':
        return <About />;
      case 'careers':
        return <Careers onNavigate={navigate} />;
      case 'contact':
        return <Contact />;
      case 'scholieren':
        return <Scholieren />;
      case 'privacy':
        return <Privacy />;
      case 'toestemming':
        return <ConsentForm onNavigate={navigate} />;
      case 'thanks':
        return <ThankYou onNavigate={navigate} />;
      case 'vision':
        return (
          <section className="px-6 py-40 max-w-7xl mx-auto animate-in fade-in duration-1000">
            <span className="text-[10px] font-bold tracking-[0.4em] text-zinc-400 uppercase mb-8 block">ONZE METHODE</span>
            <h1 className="text-7xl md:text-9xl font-black tracking-tighter mb-20 leading-none italic uppercase">Visie.</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-32">
              <p className="text-3xl font-light leading-relaxed italic">
                Wij geloven dat talent een fundament nodig heeft van fysieke intelligentie. Door sportfysiotherapie te combineren met geavanceerde data-analyse, bouwen we aan sporters die niet alleen sneller zijn, maar ook duurzamer.
              </p>
              <div className="space-y-20">
                <div className="group border-b border-zinc-100 pb-12">
                  <h3 className="text-3xl font-bold mb-6 italic uppercase">01. Analyseren</h3>
                  <p className="text-zinc-500 font-light text-xl leading-relaxed italic">Elk traject start met nulmetingen. Video-analyse, kracht-data en biomechanica. Meten is weten.</p>
                </div>
                <div className="group border-b border-zinc-100 pb-12">
                  <h3 className="text-3xl font-bold mb-6 italic uppercase">02. Optimaliseren</h3>
                  <p className="text-zinc-500 font-light text-xl leading-relaxed italic">Gerichte interventies op basis van de testresultaten. Geen algemene schema's, maar cognitieve en fysieke precisie.</p>
                </div>
                <div className="group border-b border-zinc-100 pb-12">
                  <h3 className="text-3xl font-bold mb-6 italic uppercase">03. Valideren</h3>
                  <p className="text-zinc-500 font-light text-xl leading-relaxed italic">Structurele hertesten om progressie te waarborgen en risico's tijdig te signaleren. Data-gedreven groei.</p>
                </div>
              </div>
            </div>
          </section>
        );
      default:
        const validPaths = ['home', 'intake', 'services', 'healthcare', 'vitaler', 'physiotherapy', 'pricing', 'about', 'careers', 'contact', 'scholieren', 'privacy', 'thanks', 'vision', 'toestemming'];
        if (!validPaths.includes(currentPath)) {
          return <NotFound onNavigate={navigate} />;
        }
        return <Home onNavigate={navigate} />;
    }
  };

  return (
    <Layout activePath={currentPath} onNavigate={navigate}>
      {renderContent()}
      <CookieBanner onConsentChange={handleConsentChange} />
      <StickyMobileCTA onIntakeClick={() => navigate('intake')} />
    </Layout>
  );
};

export default App;
