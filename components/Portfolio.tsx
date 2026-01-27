import React from 'react';
import { Translations, PortfolioItem } from '../types';
import { CheckCircle2 } from 'lucide-react';

interface PortfolioProps {
  t: Translations['portfolio'];
  items: PortfolioItem[];
}

const Portfolio: React.FC<PortfolioProps> = ({ t, items }) => {
  return (
    <section id="portfolio" className="py-20 bg-brand-dark relative overflow-hidden">
      {/* Background Decorative */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-b from-brand-primary/5 to-transparent skew-x-12 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-2">
              {t.title}
            </h2>
            <p className="text-gray-400 text-lg">
              {t.subtitle}
            </p>
          </div>
          <div className="hidden md:block w-32 h-1 bg-gray-800"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, index) => (
            <div key={index} className="flex items-start p-4 rounded-lg hover:bg-white/5 transition-colors border border-transparent hover:border-gray-700">
              <CheckCircle2 className="w-6 h-6 text-brand-accent mr-4 flex-shrink-0 mt-1" />
              <div>
                <h4 className="text-white font-semibold text-lg leading-tight mb-1">
                  {item.client}
                </h4>
                <p className="text-brand-primary text-sm font-mono">
                  {item.project}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;