import React, { useState, useEffect } from 'react';
import { Rocket } from 'lucide-react';

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <button
        type="button"
        onClick={scrollToTop}
        className={`group p-4 rounded-full bg-gradient-to-r from-brand-primary to-brand-secondary text-white shadow-lg shadow-brand-primary/40 transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 focus:outline-none ring-2 ring-white/20 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20 pointer-events-none'
        }`}
        aria-label="Scroll to top"
      >
        <Rocket className="w-6 h-6 transform group-hover:-rotate-45 transition-transform duration-300" />
        
        {/* Thrust Effect */}
        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
           <div className="w-2 h-2 mx-auto bg-orange-400 rounded-full blur-[2px] animate-ping"></div>
        </div>
      </button>
    </div>
  );
};

export default ScrollToTop;