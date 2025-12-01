
import React, { useState, useEffect } from 'react';
import { NavContent, Language } from '../types';
import { Menu, X, Globe, Github } from 'lucide-react';

interface NavbarProps {
  navData: NavContent;
  language: Language;
  setLanguage: (lang: Language) => void;
}

const Navbar: React.FC<NavbarProps> = ({ navData, language, setLanguage }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: navData.home },
    { id: 'about', label: navData.about },
    { id: 'projects', label: navData.projects },
    { id: 'gallery', label: navData.gallery },
    { id: 'contact', label: navData.contact },
  ];

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const langs: { code: Language; label: string }[] = [
    { code: 'en', label: 'EN' },
    { code: 'ja', label: 'JP' },
    { code: 'zh', label: 'CN' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-slate-950/80 backdrop-blur-md shadow-lg border-b border-white/5' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo / Name */}
        <div 
          onClick={() => scrollToSection('home')}
          className="text-xl font-bold font-mono text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-orange-400 cursor-pointer"
        >
          &lt;Akiko97 /&gt;
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="text-gray-300 hover:text-white transition-colors text-sm font-medium hover:text-glow"
            >
              {link.label}
            </button>
          ))}
          
          {/* Lang Switcher & GitHub Container */}
          <div className="flex items-center space-x-4 border-l border-gray-700 pl-4">
            <div className="flex items-center space-x-2">
              <Globe className="w-4 h-4 text-gray-400" />
              {langs.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => setLanguage(lang.code)}
                  className={`text-xs px-2 py-1 rounded transition-colors ${
                    language === lang.code 
                      ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30' 
                      : 'text-gray-500 hover:text-gray-300'
                  }`}
                >
                  {lang.label}
                </button>
              ))}
            </div>

            {/* Separator */}
            <div className="h-4 w-px bg-gray-700"></div>

            <a 
              href="https://github.com/Akiko97" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Github size={20} />
            </a>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-300"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-slate-950/90 backdrop-blur-md border-b border-white/10 absolute top-16 w-full">
          <div className="flex flex-col p-4 space-y-4">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-left text-gray-300 hover:text-white py-2"
              >
                {link.label}
              </button>
            ))}
            
            <div className="flex items-center justify-between pt-4 border-t border-gray-800">
               <div className="flex items-center space-x-4">
                 {langs.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code);
                        setIsMenuOpen(false);
                      }}
                      className={`text-sm px-3 py-1 rounded ${
                        language === lang.code 
                          ? 'bg-purple-600 text-white' 
                          : 'bg-gray-800 text-gray-400'
                      }`}
                    >
                      {lang.label}
                    </button>
                  ))}
               </div>
               
               <a 
                  href="https://github.com/Akiko97" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-white mr-4"
                >
                  <Github size={20} />
                </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
