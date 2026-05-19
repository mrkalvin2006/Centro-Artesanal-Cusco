import React, { useState } from 'react';
import { Menu, Search, Map, Globe, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const languages = [
  { code: 'ES', label: 'Español' },
  { code: 'EN', label: 'English' },
  { code: 'PT', label: 'Português' },
  { code: 'RU', label: 'Русский' }
];

export function Navbar() {
  const [currentLang, setCurrentLang] = useState('ES');
  const [isLangOpen, setIsLangOpen] = useState(false);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="sticky top-0 z-50 bg-mystic-dark/90 backdrop-blur-md border-b border-mystic-gold/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full overflow-hidden flex items-center justify-center border-2 border-mystic-gold/50">
               <img src="https://storage.googleapis.com/macha-dev-c76b85d/283457011245/78f47eb3-aff4-4f06-84dc-a7d316ee63d5/e7816196-1934-45fb-a524-7bd06cece3ba" alt="Logo" className="w-[120%] h-[120%] object-cover object-center" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-bold text-xl leading-none text-mystic-light tracking-widest">CENTRO</span>
              <span className="font-serif text-2xl leading-none text-mystic-gold mt-1 tracking-wider">ARTESANAL</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#inicio" className="text-sm font-medium hover:text-mystic-gold transition-colors text-mystic-gold border-b-2 border-mystic-gold pb-1">Inicio</a>
            <a href="#nosotros" className="text-sm font-medium text-mystic-light hover:text-mystic-gold transition-colors">Nuestra Historia</a>
            <a href="#categorias" className="text-sm font-medium text-mystic-light hover:text-mystic-gold transition-colors">Categorías</a>
            <a href="#pasajes" className="text-sm font-medium text-mystic-light hover:text-mystic-gold transition-colors">Pasajes</a>
            <a href="#mapa" className="text-sm font-medium text-mystic-light hover:text-mystic-gold transition-colors">Ubicación</a>
          </div>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-4">
            {/* Language Selector */}
            <div className="relative">
              <button 
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center gap-1.5 p-2 text-mystic-muted hover:text-mystic-gold transition-colors text-sm font-medium"
              >
                <Globe className="w-5 h-5" />
                <span>{currentLang}</span>
                <ChevronDown className="w-4 h-4 opacity-70" />
              </button>
              
              <AnimatePresence>
                {isLangOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 mt-2 w-40 bg-mystic-gray border border-mystic-gold/20 rounded-xl shadow-xl overflow-hidden z-50 flex flex-col"
                  >
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          setCurrentLang(lang.code);
                          setIsLangOpen(false);
                        }}
                        className={`text-left px-4 py-3 text-sm transition-all duration-300 hover:bg-mystic-gold/10 hover:text-mystic-gold flex items-center justify-between group ${
                          currentLang === lang.code ? 'text-mystic-gold font-bold bg-mystic-gold/5' : 'text-mystic-light/90 font-medium'
                        }`}
                      >
                        <span className="tracking-wide">{lang.label}</span>
                        <span className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          currentLang === lang.code ? 'bg-mystic-gold shadow-[0_0_8px_rgba(212,175,55,0.8)] scale-100' : 'bg-transparent scale-0 group-hover:bg-mystic-gold/30 group-hover:scale-100'
                        }`}></span>
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <button className="p-2 text-mystic-muted hover:text-mystic-gold transition-colors hidden sm:flex">
              <Search className="w-5 h-5" />
            </button>
            <button className="bg-mystic-gold hover:bg-mystic-gold-light text-white px-6 py-2.5 rounded-sm font-medium text-sm transition-all duration-300 flex items-center gap-2 shadow-lg shadow-mystic-gold/20">
              <Map className="w-4 h-4" />
              Visítanos
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
             <button className="p-2 text-mystic-muted">
              <Menu className="w-6 h-6" />
            </button>
          </div>

        </div>
      </div>
    </motion.nav>
  );
}
