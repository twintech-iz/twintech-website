import React from 'react';
import { Translations, ServiceItem } from '../types';
import ScrollReveal from './ScrollReveal';
import { ArrowUpRight, Zap } from 'lucide-react';

interface ServicesProps {
  t: Translations['services'];
  items: ServiceItem[];
}

const Services: React.FC<ServicesProps> = ({ t, items }) => {
  return (
    <section id="services" className="py-32 bg-black relative">
      {/* Background Grid */}
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 border-b border-gray-800 pb-10">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 mb-4">
                 <Zap className="w-5 h-5 text-brand-primary animate-pulse" />
                 <span className="text-brand-primary font-mono tracking-widest uppercase text-sm block">{t.title}</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                Comprehensive <br/> <span className="text-gray-500">Ecosystem</span>
              </h2>
            </div>
            <p className="text-gray-400 max-w-sm mt-6 md:mt-0 text-right font-mono text-sm border-l border-gray-800 pl-6">
            <br/>
              End-to-end solutions tailored for the digital age.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <ScrollReveal key={index} delay={index * 100}>
              <div className="group relative h-full min-h-[300px] cyber-card p-1 hover:-translate-y-2">
                
                {/* Tech Corners (The Brackets) */}
                <div className="corner-bracket bracket-tl"></div>
                <div className="corner-bracket bracket-tr"></div>
                <div className="corner-bracket bracket-bl"></div>
                <div className="corner-bracket bracket-br"></div>

                {/* Scanline Effect */}
                <div className="scan-line"></div>

                {/* Content Container */}
                <div className="relative h-full bg-[#0a0f1e] p-8 clip-cut-tr border-t border-white/5 transition-colors group-hover:bg-[#0d1425]">
                  
                  {/* Category Tag - Tech Style */}
                  <div className="absolute top-0 right-0 bg-white/5 px-4 py-1 rounded-bl-xl border-l border-b border-white/10 group-hover:bg-brand-primary/20 group-hover:border-brand-primary/30 transition-all">
                     <span className="text-[10px] font-mono uppercase tracking-widest text-gray-500 group-hover:text-brand-primary">
                        {item.category === 'it' && 'SYS_IT'}
                        {item.category === 'construction' && 'SYS_BLD'}
                        {item.category === 'maintenance' && 'SYS_MNT'}
                        {item.category === 'supply' && 'SYS_SPL'}
                     </span>
                  </div>

                  <div className="flex flex-col h-full justify-between pt-4">
                    <div>
                      <div className="mb-6 inline-block">
                        <div className="relative">
                          <div className="absolute inset-0 bg-brand-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                          <div className="relative p-3 bg-white/5 rounded-lg text-white border border-white/10 group-hover:border-brand-primary/50 group-hover:text-brand-primary transition-colors duration-300">
                            {item.icon}
                          </div>
                        </div>
                      </div>

                      <h3 className="text-2xl font-bold text-white mb-3 font-mono group-hover:text-brand-primary transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors border-l-2 border-white/5 pl-4 group-hover:border-brand-primary/50">
                        {item.desc}
                      </p>
                    </div>

                    <div className="mt-8 flex items-center text-brand-primary opacity-0 transform translate-x-[-10px] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                      <span className="text-xs font-mono uppercase tracking-widest mr-2">Initialize</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
