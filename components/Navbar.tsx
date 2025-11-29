
import React, { useState, useEffect } from 'react';
import { Menu, X, Languages, FileText } from 'lucide-react';
import { useLanguage } from './LanguageContext';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, toggleLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const content = {
    en: {
      background: 'Background',
      attack: 'Attack',
      defense: 'Defense',
      roadmap: 'Roadmap',
      dataset: 'View Dataset',
      paper: 'Read Paper'
    },
    zh: {
      background: '研究背景',
      attack: '攻击演示',
      defense: '防御机制',
      roadmap: '研究路线',
      dataset: '查看数据集',
      paper: '阅读论文'
    }
  };

  const t = content[language];

  const navLinks = [
    { name: t.background, href: '#background' },
    { name: t.attack, href: '#attack' },
    { name: t.defense, href: '#defense' },
    { name: t.roadmap, href: '#roadmap' },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    if (element) {
      // 80px offset for the fixed navbar
      const navHeight = 80; 
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    setMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled
          ? 'bg-slate-900/80 backdrop-blur-md border-slate-700 py-4'
          : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-8 h-8 border border-accent-gold rotate-45 group-hover:rotate-0 transition-transform duration-500 bg-accent-gold/10 flex items-center justify-center">
             <span className="text-accent-gold font-serif font-bold -rotate-45 group-hover:rotate-0 transition-transform">R</span>
          </div>
          <span className="text-xl font-serif font-bold tracking-wider text-white">
            RP-JAILBREAK
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="text-sm font-medium text-slate-300 hover:text-accent-gold transition-colors tracking-widest uppercase"
            >
              {link.name}
            </a>
          ))}
          
          <button 
            onClick={toggleLanguage}
            className="flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-white transition-colors border-l border-slate-700 pl-6"
          >
            <Languages size={18} />
            {language === 'en' ? 'CN' : 'EN'}
          </button>

          <div className="flex items-center gap-4">
            <a 
              href="https://aclanthology.org/2025.coling-main.494/" 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-2 text-sm font-medium text-white hover:text-accent-gold transition-colors tracking-widest uppercase border border-slate-600 hover:border-accent-gold px-4 py-2 rounded-sm"
            >
              <FileText size={14} />
              {t.paper}
            </a>

            <button className="px-6 py-2 border border-accent-gold/50 text-accent-gold text-sm tracking-widest hover:bg-accent-gold hover:text-slate-900 transition-all duration-300 shadow-[0_0_15px_rgba(251,191,36,0.1)] hover:shadow-[0_0_20px_rgba(251,191,36,0.4)]">
              {t.dataset}
            </button>
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <button 
            onClick={toggleLanguage}
            className="text-slate-200"
          >
            <Languages size={20} />
          </button>
          <button
            className="text-slate-200"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-slate-900 border-b border-slate-700 p-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="text-slate-300 hover:text-accent-gold py-2 border-b border-slate-800"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="https://aclanthology.org/2025.coling-main.494/" 
            target="_blank" 
            rel="noreferrer"
            className="flex items-center justify-center gap-2 w-full py-3 border border-slate-600 text-white font-bold"
          >
             <FileText size={16} />
             {t.paper}
          </a>
          <button className="w-full px-6 py-3 bg-accent-gold text-slate-900 font-bold">
            {t.dataset}
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
