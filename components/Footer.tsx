import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark py-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-gray-500 text-sm">
          &copy; 2024 Twintech Technology Services (001394121-W). All Rights Reserved.
        </p>
        <p className="text-gray-600 text-xs mt-2 font-mono">
          Designed for the Future.
        </p>
      </div>
    </footer>
  );
};

export default Footer;