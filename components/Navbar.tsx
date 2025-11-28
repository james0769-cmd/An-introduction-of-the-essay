import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Background', href: '#background' },
    { name: 'Attack', href: '#attack' },
    { name: 'Defense', href: '#defense' },
    { name: 'Roadmap', href: '#roadmap' },
  ];

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
              className="text-sm font-medium text-slate-300 hover:text-accent-gold transition-colors tracking-widest uppercase"
            >
              {link.name}
            </a>
          ))}
          <button className="px-6 py-2 border border-accent-gold/50 text-accent-gold text-sm tracking-widest hover:bg-accent-gold hover:text-slate-900 transition-all duration-300 shadow-[0_0_15px_rgba(251,191,36,0.1)] hover:shadow-[0_0_20px_rgba(251,191,36,0.4)]">
            View Dataset
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-slate-200"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-slate-900 border-b border-slate-700 p-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-slate-300 hover:text-accent-gold py-2 border-b border-slate-800"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <button className="w-full mt-4 px-6 py-3 bg-accent-gold text-slate-900 font-bold">
            View Dataset
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;