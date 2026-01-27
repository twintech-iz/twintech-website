import React from 'react';
import { Translations, ServiceItem } from '../types';

interface ServicesProps {
  t: Translations['services'];
  items: ServiceItem[];
}

const Services: React.FC<ServicesProps> = ({ t, items }) => {
  return (
    <section id="services" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-brand-primary font-mono tracking-widest uppercase text-sm">{t.title}</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mt-2 mb-6">
            Comprehensive Solutions
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            From digital infrastructure to physical construction, we provide end-to-end services tailored for the future.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, index) => (
            <div 
              key={index} 
              className="group p-6 bg-slate-800 rounded-2xl border border-slate-700 hover:border-brand-primary transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-brand-primary/10"
            >
              <div className="w-14 h-14 bg-slate-700 rounded-xl flex items-center justify-center mb-6 text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-colors duration-300">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-brand-primary transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-400 text-sm mb-4 min-h-[60px]">
                {item.desc}
              </p>
              <div className="w-full h-[1px] bg-slate-700 group-hover:bg-brand-primary/50 transition-colors"></div>
              <span className="inline-block mt-4 text-xs font-mono text-gray-500 uppercase">
                {item.category === 'it' && t.catIT}
                {item.category === 'construction' && t.catConstruction}
                {item.category === 'maintenance' && t.catMaintenance}
                {item.category === 'supply' && t.catSupply}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;