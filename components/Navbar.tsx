import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { Language, Translations } from '../types';

interface NavbarProps {
  lang: Language;
  setLang: (l: Language) => void;
  t: Translations['nav'];
}

const Navbar: React.FC<NavbarProps> = ({ lang, setLang, t }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const languages: { code: Language; label: string }[] = [
    { code: 'ms', label: 'BM' },
    { code: 'en', label: 'EN' },
    { code: 'cn', label: 'CN' },
    { code: 'ta', label: 'TA' },
  ];

  const navLinks = [
    { href: '#home', label: t.home },
    { href: '#about', label: t.about },
    { href: '#services', label: t.services },
    { href: '#portfolio', label: t.portfolio },
    { href: '#contact', label: t.contact },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass-panel py-3 shadow-lg shadow-brand-primary/10' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <span className="text-3xl font-mono font-bold tracking-tighter text-white">
              TWIN<span className="text-brand-primary neon-text">TECH</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-300 hover:text-brand-primary transition-colors text-sm uppercase tracking-widest font-medium"
              >
                {link.label}
              </a>
            ))}
            
            {/* Language Switcher */}
            <div className="relative group ml-4">
              <button className="flex items-center text-gray-300 hover:text-white">
                <Globe className="w-5 h-5 mr-1" />
                <span className="uppercase">{lang}</span>
              </button>
              <div className="absolute right-0 mt-2 w-32 glass-panel rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all transform origin-top-right">
                <div className="py-1">
                  {languages.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => setLang(l.code)}
                      className={`block w-full text-left px-4 py-2 text-sm ${lang === l.code ? 'text-brand-primary bg-white/10' : 'text-gray-300 hover:bg-white/5'}`}
                    >
                      {l.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden glass-panel border-t border-gray-700">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                {link.label}
              </a>
            ))}
            <div className="flex space-x-4 px-3 py-2 mt-4 border-t border-gray-700 pt-4">
               {languages.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => { setLang(l.code); setIsOpen(false); }}
                    className={`px-3 py-1 rounded text-sm ${lang === l.code ? 'bg-brand-primary text-white' : 'bg-gray-800 text-gray-400'}`}
                  >
                    {l.label}
                  </button>
               ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
