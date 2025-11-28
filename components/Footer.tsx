import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 py-12 border-t border-slate-800 text-slate-500 text-sm">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <p className="font-serif text-slate-300 text-lg mb-2">RP-JAILBREAK</p>
          <p>Undergraduate Innovation Program (大创项目) © 2025</p>
        </div>
        
        <div className="text-right">
          <p>Tianjin University</p>
          <p>College of Intelligence and Computing</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;