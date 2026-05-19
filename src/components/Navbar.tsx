import React, { useState } from 'react';
import { Menu, Search, Map, Globe, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../context/LanguageContext'; // IMPORTAMOS EL IDIOMA

const languages = [
  { code: 'ES', label: 'Español' },
  { code: 'EN', label: 'English' },
  { code: 'PT', label: 'Português' },
  { code: 'RU', label: 'Русский' }
];

export function Navbar() {
  const { lang, setLang, t } = useLanguage(); // USAMOS EL CONTEXTO EN LUGAR DE USO LOCAL
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
          
          {/* Logo - CAMBIADO SEGÚN TU REQUERIMIENTO */}
          <div className="flex items-center gap-3">
            <a href="#inicio" className="block h-12 w-auto">
              {/* Pon la ruta real de tu logo aquí (ej. /images/mi-logo.png) */}
              <img 
                src="/ruta-a-tu-logo.png" 
                alt="Centro Artesanal Cusco Logo" 
                className="h-full w-auto object-contain" 
              />
            </a>
          </div>

          {/* Desktop Nav - AHORA USA TRADUCCIONES */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#inicio" className="text-sm font-medium hover:text-mystic-gold transition-colors text-mystic-gold border-b-2 border-mystic-gold pb-1">{t('navInicio')}</a>
            <a href="#nosotros" className="text-sm font-medium text-mystic-light hover:text-mystic-gold transition-colors">{t('navHistoria')}</a>
            <a href="#categorias" className="text-sm font-medium text-mystic-light hover:text-mystic-gold transition-colors">{t('navCategorias')}</a>
            <a href="#pasajes" className="text-sm font-medium text-mystic-light hover:text-mystic-gold transition-colors">{t('navPasajes')}</a>
            <a href="#mapa" className="text-sm font-medium text-mystic-light hover:text-mystic-gold transition-colors">{t('navUbicacion')}</a>
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
                <span>{lang}</span> {/* MUESTRA EL IDIOMA ACTUAL */}
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
                    {languages.map((l) => (
                      <button
                        key={l.code}
                        onClick={() => {
                          setLang(l.code as any); // CAMBIA EL IDIOMA GLOBAL
                          setIsLangOpen(false);
                        }}
                        className={`text-left px-4 py-3 text-sm transition-all duration-300 hover:bg-mystic-gold/10 hover:text-mystic-gold flex items-center justify-between group ${
                          lang === l.code ? 'text-mystic-gold font-bold bg-mystic-gold/5' : 'text-mystic-light/90 font-medium'
                        }`}
                      >
                        <span className="tracking-wide">{l.label}</span>
                        <span className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          lang === l.code ? 'bg-mystic-gold shadow-[0_0_8px_rgba(212,175,55,0.8)] scale-100' : 'bg-transparent scale-0 group-hover:bg-mystic-gold/30 group-hover:scale-100'
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
              {t('navVisitanos')}
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