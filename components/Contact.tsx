import React from 'react';
import { MapPin, Phone, Mail, Building2, ArrowUpRight } from 'lucide-react';
import { Translations } from '../types';
import ScrollReveal from './ScrollReveal';

interface ContactProps {
  t: Translations['contact'];
}

const Contact: React.FC<ContactProps> = ({ t }) => {
  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-black via-brand-dark to-[#080c14]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <ScrollReveal>
          <div className="glass-panel rounded-[3rem] p-8 md:p-16 border border-white/10 shadow-2xl overflow-hidden relative">
            {/* Background Gradient inside card */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-primary/10 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              
              {/* Contact Info */}
              <div className="space-y-12">
                <div>
                   <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{t.title}</h2>
                   <p className="text-gray-400 text-lg">Sedia untuk transformasi infrastruktur anda?</p>
                </div>
                
                <div className="space-y-8">
                  <div className="flex group">
                    <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-brand-primary mr-6 border border-white/5 group-hover:border-brand-primary/50 group-hover:bg-brand-primary/10 transition-all">
                      <Building2 className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-gray-500 text-xs font-mono uppercase tracking-widest mb-1">{t.address}</h4>
                      <p className="text-white text-lg font-medium leading-snug">No. 76 Kompleks Peruda, <br/>Jalan Sultan Badlishah</p>
                      <p className="text-gray-400">05000 Alor Setar, Kedah.</p>
                    </div>
                  </div>

                  <div className="flex group">
                     <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-brand-secondary mr-6 border border-white/5 group-hover:border-brand-secondary/50 group-hover:bg-brand-secondary/10 transition-all">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-gray-500 text-xs font-mono uppercase tracking-widest mb-1">{t.branch}</h4>
                      <p className="text-white text-lg font-medium leading-snug">No. 11 Jalan Desa 4/12, <br/>Bandar Country Homes</p>
                      <p className="text-gray-400">48000 Rawang, Selangor.</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="flex group items-center">
                      <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-brand-accent mr-4 border border-white/5 group-hover:border-brand-accent/50 transition-all">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-gray-500 text-xs font-mono uppercase tracking-widest mb-1">{t.phone}</h4>
                        <p className="text-white text-lg font-mono">012-5002646</p>
                      </div>
                    </div>

                    <div className="flex group items-center">
                      <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-orange-400 mr-4 border border-white/5 group-hover:border-orange-400/50 transition-all">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-gray-500 text-xs font-mono uppercase tracking-widest mb-1">{t.email}</h4>
                        <a href="mailto:twintech07@gmail.com" className="text-white text-lg hover:text-brand-primary transition-colors">
                          twintech07@gmail.com
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map/Action Area */}
              <div className="relative h-full min-h-[400px] rounded-3xl overflow-hidden group">
                 <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"></div>
                 <div className="absolute inset-0 bg-brand-dark/60 backdrop-blur-[2px] group-hover:backdrop-blur-0 transition-all duration-500"></div>
                 
                 <div className="relative z-10 h-full flex flex-col items-center justify-center p-8 text-center">
                   <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center mb-6 animate-pulse">
                      <MapPin className="w-8 h-8 text-white" />
                   </div>
                   <h3 className="text-3xl font-bold text-white mb-2">Locate Us</h3>
                   <p className="text-gray-300 mb-8 max-w-xs">Visit our headquarters for a consultation on your next big project.</p>
                   
                   <a 
                    href="https://maps.google.com/?q=Kompleks+Peruda+Alor+Setar" 
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-white text-black rounded-full font-bold hover:bg-brand-primary hover:text-white transition-colors duration-300"
                   >
                     Open Google Maps <ArrowUpRight className="ml-2 w-4 h-4" />
                   </a>
                 </div>
              </div>

            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Contact;
