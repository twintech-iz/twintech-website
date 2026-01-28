import React from 'react';
import { Translations, PortfolioItem } from '../types';
import { CheckCircle2, ArrowRight, FolderOpen } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

interface PortfolioProps {
  t: Translations['portfolio'];
  items: PortfolioItem[];
}

const Portfolio: React.FC<PortfolioProps> = ({ t, items }) => {
  return (
    <section id="portfolio" className="py-32 bg-[#050a14] relative overflow-hidden">
      {/* Background Decorative */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-secondary/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 border-b border-gray-800 pb-8">
            <div>
              <div className="flex items-center gap-2 mb-2">
                 <FolderOpen className="w-5 h-5 text-brand-secondary" />
                 <span className="text-brand-secondary font-mono tracking-widest text-sm uppercase">Senarai Projek</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-bold text-white">
                {t.title}
              </h2>
            </div>
            <p className="text-gray-400 text-lg max-w-md text-right mt-4 md:mt-0 font-light">
              {t.subtitle}
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, index) => (
            <ScrollReveal key={index} delay={index * 50}>
              <div className="group relative">
                
                {/* File Tab Effect */}
                <div className="absolute -top-3 left-0 bg-[#0f172a] border-t border-l border-r border-white/10 w-24 h-4 rounded-t-lg z-0 group-hover:border-brand-primary/50 transition-colors"></div>

                <div className="relative z-10 p-6 pt-8 bg-[#0f172a] border border-white/10 rounded-br-2xl rounded-bl-2xl rounded-tr-2xl hover:border-brand-primary/50 transition-all duration-300 group-hover:bg-[#131c33] group-hover:shadow-[0_0_30px_-10px_rgba(99,102,241,0.2)]">
                  
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-8 h-8 rounded bg-brand-secondary/10 flex items-center justify-center text-brand-secondary border border-brand-secondary/20">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-mono text-gray-500 bg-black/30 px-2 py-1 rounded border border-white/5">
                        COMPLETED
                    </span>
                  </div>
                  
                  <h4 className="text-white font-bold text-lg leading-tight mb-3 group-hover:text-brand-primary transition-colors line-clamp-2">
                    {item.client}
                  </h4>
                  
                  <div className="relative overflow-hidden">
                     <p className="text-gray-400 text-sm font-mono border-l-2 border-gray-700 pl-3 group-hover:border-brand-secondary transition-colors">
                        {item.project}
                     </p>
                  </div>

                  {/* Bottom Tech Bar */}
                  <div className="mt-6 h-1 w-full bg-gray-800 rounded-full overflow-hidden">
                    <div className="h-full bg-brand-secondary w-0 group-hover:w-full transition-all duration-700 ease-out"></div>
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

export default Portfolio;
