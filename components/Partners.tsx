import React from 'react';
import { Translations, PartnerItem } from '../types';
import { PARTNERS_HARDWARE, PARTNERS_CLOUD, PARTNERS_SAAS, PARTNERS_SECURITY } from '../constants';
import ScrollReveal from './ScrollReveal';

interface PartnersProps {
  t: Translations['partners'];
}

const PartnerCard: React.FC<{ item: PartnerItem }> = ({ item }) => (
  <a 
    href={item.url}
    target="_blank"
    rel="noopener noreferrer"
    className="group relative h-32 bg-white/[0.02] hover:bg-white/[0.05] rounded-2xl border border-white/5 hover:border-brand-primary/30 transition-all duration-500 flex items-center justify-center p-8 overflow-hidden"
  >
    {/* Radial Gradient Glow on Hover */}
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
    
    <img 
      src={item.logo} 
      alt={item.name} 
      className="relative z-10 w-full h-full object-contain filter grayscale opacity-40 group-hover:filter-none group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110"
      onError={(e) => {
        (e.target as HTMLImageElement).style.display = 'none';
        (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
      }}
    />
    <span className="hidden relative z-10 text-gray-400 font-mono font-bold text-sm text-center">{item.name}</span>
  </a>
);

const PartnerGroup: React.FC<{ title: string; items: PartnerItem[] }> = ({ title, items }) => (
  <div className="mb-20 last:mb-0">
    <ScrollReveal>
      <h3 className="text-xl font-mono text-gray-400 mb-8 flex items-center">
        <span className="w-2 h-2 bg-brand-primary rounded-full mr-3 animate-pulse"></span>
        {title}
      </h3>
    </ScrollReveal>
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
      {items.map((item, index) => (
        <ScrollReveal key={index} delay={index * 50}>
          <PartnerCard item={item} />
        </ScrollReveal>
      ))}
    </div>
  </div>
);

const Partners: React.FC<PartnersProps> = ({ t }) => {
  return (
    <section id="partners" className="py-32 bg-brand-dark relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-24">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              {t.title}
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg font-light">
              {t.subtitle}
            </p>
          </div>
        </ScrollReveal>

        <PartnerGroup title={t.catHardware} items={PARTNERS_HARDWARE} />
        <PartnerGroup title={t.catCloud} items={PARTNERS_CLOUD} />
        <PartnerGroup title={t.catSaaS} items={PARTNERS_SAAS} />
        <PartnerGroup title={t.catSecurity} items={PARTNERS_SECURITY} />
        
      </div>
    </section>
  );
};

export default Partners;
