import React, { useEffect, useState } from 'react';
import { ArrowRight, ChevronDown, Zap } from 'lucide-react';
import { Translations } from '../types';

interface HeroProps {
  t: Translations['hero'];
}

const Hero: React.FC<HeroProps> = ({ t }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-brand-dark">
      
      {/* --- BACKGROUND VIDEO SETUP --- */}
      <div className="absolute inset-0 z-0">
        {/* 
           INSTRUCTION: 
           Place your video file named 'hero-bg.mp4' inside the 'public' folder of your project.
        */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          poster=""
        >
          <source src="/hero-bg.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Overlay 1: Darken slightly for general contrast */}
        <div className="absolute inset-0 bg-brand-dark/60"></div>
        
        {/* Overlay 2: Gradient to ensure text readability at the bottom and top */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/20 to-brand-dark/60"></div>
        
        {/* Tech Grid Texture on top of video */}
        <div className="absolute inset-0 grid-bg opacity-20 mix-blend-overlay"></div>
      </div>
      
      {/* Ambient Glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-brand-primary/20 rounded-full blur-[128px] animate-blob mix-blend-screen z-0 pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-brand-secondary/20 rounded-full blur-[128px] animate-blob animation-delay-2000 mix-blend-screen z-0 pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        
        {/* Badge */}
        <div className={`transition-all duration-1000 transform ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center space-x-2 px-4 py-2 mb-8 rounded-full border border-white/10 bg-white/5 backdrop-blur-md shadow-lg shadow-brand-primary/10 hover:border-brand-primary/50 transition-colors cursor-default">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-accent"></span>
            </span>
            <span className="text-gray-300 text-xs font-mono tracking-widest uppercase">
              {t.since}
            </span>
          </div>
        </div>
        
        {/* Main Title */}
        <div className={`mt-2 transition-all duration-1000 delay-100 transform ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-2 leading-tight tracking-tight drop-shadow-2xl">
            TWIN<span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-blue-400 to-brand-secondary neon-text">TECH</span>
          </h1>
        </div>

        {/* Subtitle with masking effect */}
        <div className={`transition-all duration-1000 delay-200 transform ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-2xl md:text-4xl text-gray-300 font-mono mb-8 max-w-4xl drop-shadow-md">
            <span className="text-white font-bold">Future-Proof</span> Engineering & <br className="hidden md:block"/>
            <span className="text-white font-bold">Intelligent</span> Systems.
          </h2>
        </div>

        {/* Description */}
        <div className={`transition-all duration-1000 delay-300 transform ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
           <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-400 font-light mb-12 leading-relaxed backdrop-blur-sm bg-black/10 rounded-xl p-4 border border-white/5">
            {t.subtitle}
          </p>
        </div>

        {/* Buttons */}
        <div className={`flex flex-col sm:flex-row gap-6 transition-all duration-1000 delay-500 transform ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <a
            href="#services"
            className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-brand-primary rounded-full overflow-hidden transition-all duration-300 shadow-[0_0_40px_-10px_rgba(14,165,233,0.5)] hover:shadow-[0_0_60px_-15px_rgba(14,165,233,0.7)] hover:scale-105"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
            {t.cta}
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          
          <a
            href="#portfolio"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white border border-white/20 rounded-full hover:bg-white/5 transition-all duration-300 hover:border-white/50 backdrop-blur-sm"
          >
            <Zap className="mr-2 w-4 h-4 text-brand-accent" />
            Success Stories
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce opacity-50 z-10">
        <ChevronDown className="w-6 h-6 text-white" />
      </div>
    </section>
  );
};

export default Hero;
