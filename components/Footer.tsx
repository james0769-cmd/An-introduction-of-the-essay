
import React from 'react';
import { useLanguage } from './LanguageContext';

const Footer: React.FC = () => {
  const { language } = useLanguage();

  const content = {
      en: {
          project: 'Undergraduate Innovation Program',
          uni: 'Tianjin University',
          college: 'College of Intelligence and Computing'
      },
      zh: {
          project: '大学生创新创业训练计划',
          uni: '天津大学',
          college: '智能与计算学部'
      }
  };
  const t = content[language];

  return (
    <footer className="bg-slate-950 py-12 border-t border-slate-800 text-slate-500 text-sm">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <p className="font-serif text-slate-300 text-lg mb-2">RP-JAILBREAK</p>
          <p>{t.project} &copy; 2025</p>
        </div>
        
        <div className="text-right">
          <p>{t.uni}</p>
          <p>{t.college}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
