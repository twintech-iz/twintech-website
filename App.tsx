import React, { useState } from 'react';
import { Language } from './types';
import { TEXTS, SERVICES_LIST, CLIENTS } from './constants';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Partners from './components/Partners';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

const App: React.FC = () => {
  // Default language is Malay ('ms')
  const [lang, setLang] = useState<Language>('ms');
  
  // Get content based on current language
  const t = TEXTS[lang];
  const services = SERVICES_LIST(lang);

  return (
    <div className="min-h-screen bg-brand-dark text-slate-200 font-sans selection:bg-brand-primary selection:text-white">
      <Navbar lang={lang} setLang={setLang} t={t.nav} />
      
      <main>
        <Hero t={t.hero} />
        <About t={t.about} />
        <Services t={t.services} items={services} />
        <Partners t={t.partners} />
        <Portfolio t={t.portfolio} items={CLIENTS} />
        <Contact t={t.contact} />
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default App;
