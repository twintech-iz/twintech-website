import React from 'react';
import { MapPin, Phone, Mail, Building2 } from 'lucide-react';
import { Translations } from '../types';

interface ContactProps {
  t: Translations['contact'];
}

const Contact: React.FC<ContactProps> = ({ t }) => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-900 to-brand-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="glass-panel rounded-3xl p-8 md:p-12 border border-gray-700 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-8">{t.title}</h2>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center text-blue-400 mr-5 flex-shrink-0">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-gray-400 text-sm uppercase tracking-wide mb-1">{t.address}</h4>
                    <p className="text-white text-lg font-medium">No. 76 Kompleks Peruda, Jalan Sultan Badlishah</p>
                    <p className="text-white text-lg">05000 Alor Setar, Kedah.</p>
                  </div>
                </div>

                <div className="flex items-start">
                   <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center text-purple-400 mr-5 flex-shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-gray-400 text-sm uppercase tracking-wide mb-1">{t.branch}</h4>
                    <p className="text-white text-lg font-medium">No. 11 Jalan Desa 4/12, Bandar Country Homes</p>
                    <p className="text-white text-lg">48000 Rawang, Selangor.</p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-8">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center text-green-400 mr-5 flex-shrink-0">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-gray-400 text-sm uppercase tracking-wide mb-1">{t.phone}</h4>
                      <p className="text-white text-lg font-mono">012-5002646</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center text-orange-400 mr-5 flex-shrink-0">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-gray-400 text-sm uppercase tracking-wide mb-1">{t.email}</h4>
                      <a href="mailto:twintech07@gmail.com" className="text-white text-lg hover:text-brand-primary transition-colors">
                        twintech07@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder / Form Area */}
            <div className="relative h-full min-h-[300px] bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 flex items-center justify-center group">
               {/* Visual Placeholder for Map */}
               <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-40 group-hover:opacity-50 transition-opacity"></div>
               <div className="absolute inset-0 bg-brand-dark/50"></div>
               
               <div className="relative z-10 text-center p-6">
                 <div className="inline-block p-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-4">
                    <MapPin className="w-8 h-8 text-white" />
                 </div>
                 <h3 className="text-white text-xl font-bold">Visit Our HQ</h3>
                 <p className="text-gray-300">Kompleks Peruda, Alor Setar</p>
               </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;