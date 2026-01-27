import React from 'react';
import { Target, Eye, Award } from 'lucide-react';
import { Translations } from '../types';

interface AboutProps {
  t: Translations['about'];
}

const About: React.FC<AboutProps> = ({ t }) => {
  return (
    <section id="about" className="py-20 bg-brand-dark relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            {t.title}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-brand-primary to-brand-accent mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-2xl blur-lg opacity-30"></div>
            <div className="relative glass-panel p-8 rounded-2xl border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                <Award className="w-6 h-6 mr-3 text-brand-accent" />
                Twintech Technology Services
              </h3>
              <p className="text-gray-300 leading-relaxed text-lg">
                {t.companyInfo}
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                 <span className="px-3 py-1 bg-gray-800 rounded-full text-xs text-gray-400 border border-gray-700">001394121-W</span>
                 <span className="px-3 py-1 bg-gray-800 rounded-full text-xs text-gray-400 border border-gray-700">CIDB Registered</span>
                 <span className="px-3 py-1 bg-gray-800 rounded-full text-xs text-gray-400 border border-gray-700">MOF Registered</span>
              </div>
            </div>
          </div>
          
           <div className="space-y-6">
              <div className="p-6 rounded-2xl bg-gray-900 border border-gray-800 hover:border-brand-primary/50 transition-colors group">
                <div className="flex items-start">
                  <div className="p-3 bg-brand-primary/20 rounded-lg mr-4 group-hover:bg-brand-primary/30 transition-colors">
                     <Eye className="w-6 h-6 text-brand-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">{t.visionTitle}</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">{t.visionText}</p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-gray-900 border border-gray-800 hover:border-brand-accent/50 transition-colors group">
                <div className="flex items-start">
                  <div className="p-3 bg-brand-accent/20 rounded-lg mr-4 group-hover:bg-brand-accent/30 transition-colors">
                     <Target className="w-6 h-6 text-brand-accent" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">{t.missionTitle}</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">{t.missionText}</p>
                  </div>
                </div>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default About;