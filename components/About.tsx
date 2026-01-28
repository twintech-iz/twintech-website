import React from 'react';
import { Target, Eye, Award, Cpu, Activity, Server } from 'lucide-react';
import { Translations } from '../types';
import ScrollReveal from './ScrollReveal';

interface AboutProps {
  t: Translations['about'];
}

const About: React.FC<AboutProps> = ({ t }) => {
  return (
    <section id="about" className="py-32 bg-brand-dark relative overflow-hidden">
      {/* Grid Overlay */}
      <div className="absolute inset-0 grid-bg opacity-10"></div>
      
      {/* Decorative Line */}
      <div className="absolute left-0 top-32 w-full h-px bg-gradient-to-r from-transparent via-brand-primary/40 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <ScrollReveal>
          <div className="text-center mb-24">
            <div className="inline-flex items-center justify-center space-x-2 border border-brand-primary/30 rounded-full px-4 py-1 mb-4 bg-brand-primary/5">
                <span className="w-2 h-2 rounded-full bg-brand-primary animate-pulse"></span>
                <span className="text-brand-primary font-mono tracking-widest text-xs uppercase">Profil Syarikat</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">Excellence</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Card - Dashboard Style */}
          <div className="lg:col-span-7">
            <ScrollReveal delay={200}>
              <div className="relative group h-full">
                <div className="absolute -inset-[1px] bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-primary rounded-xl opacity-30 group-hover:opacity-70 blur-sm transition duration-1000"></div>
                <div className="relative bg-[#080c14] border border-white/10 p-8 md:p-12 rounded-xl h-full flex flex-col justify-between overflow-hidden">
                  
                  {/* Decorative Header */}
                  <div className="flex justify-between items-center mb-8 border-b border-white/5 pb-4">
                    <div className="flex space-x-2">
                        <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500"></div>
                    </div>
                    <span className="font-mono text-xs text-gray-500"></span>
                  </div>

                  <div>
                    <div className="flex items-center mb-6">
                        <div className="p-3 bg-brand-primary/10 rounded-lg border border-brand-primary/30 mr-4">
                             <Award className="w-8 h-8 text-brand-primary" />
                        </div>
                        <h3 className="text-3xl font-bold text-white leading-tight">
                            Ditubuhkan Pada Tahun <span className="text-brand-primary">2003</span>
                        </h3>
                    </div>
                    
                    <p className="text-gray-300 leading-relaxed text-lg mb-8 font-light">
                        {t.companyInfo}
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-auto">
                     {[
                        { label: 'CIDB G7', icon: <Server className="w-4 h-4" /> },
                        { label: 'MOF Reg.', icon: <Cpu className="w-4 h-4" /> },
                        { label: 'Est. 2003', icon: <Activity className="w-4 h-4" /> }
                     ].map((tag, i) => (
                       <div key={i} className="flex items-center justify-center px-4 py-3 bg-white/5 rounded-lg border border-white/5 hover:border-brand-primary/40 hover:bg-brand-primary/10 transition-all cursor-default group/tag">
                         <span className="text-gray-400 group-hover/tag:text-brand-primary mr-2 transition-colors">{tag.icon}</span>
                         <span className="text-xs font-mono text-gray-300 font-bold uppercase">{tag.label}</span>
                       </div>
                     ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
          
          {/* Side Cards - Widget Style */}
          <div className="lg:col-span-5 flex flex-col gap-6">
             <ScrollReveal delay={400}>
                <div className="relative flex-1 p-8 rounded-xl bg-[#080c14] border border-white/10 hover:border-brand-primary/50 transition-all duration-300 overflow-hidden group">
                  <div className="absolute right-0 top-0 p-4 opacity-10">
                      <Eye className="w-32 h-32 text-brand-primary -rotate-12 translate-x-10 -translate-y-10" />
                  </div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                        <div className="w-10 h-10 bg-brand-primary/20 rounded-lg flex items-center justify-center text-brand-primary border border-brand-primary/30">
                          <Eye className="w-5 h-5" />
                        </div>
                        <span className="text-[10px] font-mono uppercase text-brand-primary tracking-widest bg-brand-primary/10 px-2 py-1 rounded">Vision</span>
                    </div>
                    <h4 className="text-xl font-bold text-white mb-2">{t.visionTitle}</h4>
                    <p className="text-gray-400 text-sm leading-relaxed border-l-2 border-white/10 pl-4">{t.visionText}</p>
                  </div>
                </div>
             </ScrollReveal>

             <ScrollReveal delay={600}>
                <div className="relative flex-1 p-8 rounded-xl bg-[#080c14] border border-white/10 hover:border-brand-accent/50 transition-all duration-300 overflow-hidden group">
                   <div className="absolute right-0 top-0 p-4 opacity-10">
                      <Target className="w-32 h-32 text-brand-accent -rotate-12 translate-x-10 -translate-y-10" />
                  </div>
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                        <div className="w-10 h-10 bg-brand-accent/20 rounded-lg flex items-center justify-center text-brand-accent border border-brand-accent/30">
                          <Target className="w-5 h-5" />
                        </div>
                         <span className="text-[10px] font-mono uppercase text-brand-accent tracking-widest bg-brand-accent/10 px-2 py-1 rounded">Mission</span>
                    </div>
                    <h4 className="text-xl font-bold text-white mb-2">{t.missionTitle}</h4>
                    <p className="text-gray-400 text-sm leading-relaxed border-l-2 border-white/10 pl-4">{t.missionText}</p>
                  </div>
                </div>
             </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
