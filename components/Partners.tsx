import React from 'react';
import { Translations, PartnerItem } from '../types';
import { PARTNERS_HARDWARE, PARTNERS_CLOUD, PARTNERS_SAAS, PARTNERS_SECURITY } from '../constants';

interface PartnersProps {
  t: Translations['partners'];
}

const PartnerGroup: React.FC<{ title: string; items: PartnerItem[] }> = ({ title, items }) => (
  <div className="mb-12">
    <h3 className="text-xl font-mono text-brand-primary mb-6 border-b border-gray-800 pb-2 inline-block">
      {title}
    </h3>
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
      {items.map((item, index) => (
        <a 
          key={index}
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative h-28 bg-white/5 rounded-xl border border-white/10 hover:border-brand-primary/50 transition-all duration-300 flex items-center justify-center p-6 overflow-hidden hover:shadow-lg hover:shadow-brand-primary/10 hover:-translate-y-1"
        >
          {/* Background Glow */}
          <div className="absolute inset-0 bg-brand-primary/0 group-hover:bg-brand-primary/5 transition-colors duration-300"></div>
          
          <img 
            src={item.logo} 
            alt={item.name} 
            className="w-full h-full object-contain filter grayscale opacity-60 group-hover:filter-none group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-105"
            onError={(e) => {
              // Fallback if image fails - hide img and show text
              (e.target as HTMLImageElement).style.display = 'none';
              (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
            }}
          />
          <span className="hidden text-gray-400 font-semibold text-sm text-center absolute z-10">{item.name}</span>
        </a>
      ))}
    </div>
  </div>
);

const Partners: React.FC<PartnersProps> = ({ t }) => {
  return (
    <section id="partners" className="py-20 bg-brand-dark relative border-b border-blue-800">
       {/* Background noise texture */}
       <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            {t.title}
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        <PartnerGroup title={t.catHardware} items={PARTNERS_HARDWARE} />
        <PartnerGroup title={t.catCloud} items={PARTNERS_CLOUD} />
        <PartnerGroup title={t.catSaaS} items={PARTNERS_SAAS} />
        <PartnerGroup title={t.catSecurity} items={PARTNERS_SECURITY} />
        
      </div>
    </section>
  );
};

export default Partners;