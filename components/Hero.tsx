import React from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { Translations } from '../types';

interface HeroProps {
  t: Translations['hero'];
}

const Hero: React.FC<HeroProps> = ({ t }) => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden grid-bg">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-primary/20 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-secondary/20 rounded-full blur-[120px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-brand-primary/30 bg-brand-primary/10 backdrop-blur-sm">
          <span className="text-brand-primary text-sm font-mono uppercase tracking-widest">
            {t.since}
          </span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          TWIN<span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-accent">TECH</span> <br />
          <span className="text-4xl md:text-6xl text-gray-400">TECHNOLOGY SERVICES</span>
        </h1>

        <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-400 font-light">
          {t.title}
        </p>
        
        <p className="mt-2 max-w-2xl mx-auto text-lg text-gray-500 mb-10">
          {t.subtitle}
        </p>

        <div className="flex justify-center gap-4">
          <a
            href="#services"
            className="group relative inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-brand-primary hover:bg-blue-600 rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(14,165,233,0.3)] hover:shadow-[0_0_30px_rgba(14,165,233,0.6)]"
          >
            {t.cta}
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-gray-500" />
      </div>
    </section>
  );
};

export default Hero;