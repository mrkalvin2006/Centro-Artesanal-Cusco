import React, { useEffect, useState } from 'react';
import {
  Menu,
  X,
  Map,
  Globe,
  ChevronDown,
  MessageCircle,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../lib/LanguageContext';

// 1. Añadimos las banderas (flags) para que el selector se vea visualmente atractivo
const languages = [
  { code: 'ES', label: 'Español', flag: '🇵🇪' },
  { code: 'EN', label: 'English', flag: '🇺🇸' },
  { code: 'PT', label: 'Português', flag: '🇧🇷' },
  { code: 'FR', label: 'Français', flag: '🇫🇷' },
  { code: 'ZH', label: '中文', flag: '🇨🇳' } 
];

// 2. Corregimos las rutas (href) y quitamos "Pasajes"
const navLinks = [
  { href: '#inicio', key: 'navInicio' },
  { href: '#nosotros', key: 'navHistoria' },
  { href: '#directorio', key: 'navCategorias' }, // Apunta al nuevo Directorio
  { href: '#galeria', key: 'navGaleria' },       // Apunta a la Galería Premium
  { href: '#ubicacion', key: 'navUbicacion' },
];

export function Navbar() {
  const { lang, setLang, t } = useLanguage();
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const closeMobile = () => setIsMobileOpen(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    onScroll();
    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || isMobileOpen
          ? 'border-b border-mystic-gold/20 bg-mystic-dark/90 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.35)]'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`flex items-center justify-between transition-all duration-500 ${
            scrolled ? 'h-16' : 'h-20'
          }`}
        >
          {/* LOGO Y TÍTULO */}
          <a
            href="#inicio"
            className="flex items-center gap-3"
            onClick={closeMobile}
          >
            <div
              className={`rounded-full transition-all duration-500 ${
                scrolled
                  ? 'bg-white/5 p-1'
                  : 'bg-black/20 p-1.5 backdrop-blur'
              }`}
            >
              <img
                src="/logo.png"
                alt="Centro Artesanal Cusco"
                className={`w-auto object-contain transition-all duration-500 ${
                  scrolled ? 'h-10' : 'h-12'
                }`}
              />
            </div>

            <div className="hidden sm:block leading-tight">
              <p className="font-serif text-lg text-white">
                Centro Artesanal
              </p>
              <p className="text-xs tracking-[0.28em] text-mystic-gold uppercase">
                Cusco
              </p>
            </div>
          </a>

          {/* ENLACES DE ESCRITORIO */}
          <div className="hidden lg:flex items-center gap-7">
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-white/90 hover:text-mystic-gold transition-colors"
              >
                {/* Ahora usa el traductor directamente */}
                {t(item.key as any)}
              </a>
            ))}
          </div>

          {/* BOTONES DERECHOS (ESCRITORIO) */}
          <div className="hidden lg:flex items-center gap-4">
            
            {/* SELECTOR DE IDIOMAS */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center gap-2 rounded-full border border-white/15 bg-black/20 px-3 py-2 text-sm font-medium text-white/80 hover:border-mystic-gold/40 hover:text-mystic-gold transition-colors backdrop-blur"
              >
                <Globe className="w-4 h-4" />
                <span>{lang}</span>
                <ChevronDown className="w-4 h-4 opacity-70" />
              </button>

              <AnimatePresence>
                {isLangOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.96 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 mt-3 w-48 overflow-hidden rounded-2xl border border-mystic-gold/20 bg-mystic-gray shadow-2xl"
                  >
                    {languages.map((l) => (
                      <button
                        key={l.code}
                        type="button"
                        onClick={() => {
                          setLang(l.code as any);
                          setIsLangOpen(false);
                        }}
                        className={`flex w-full items-center justify-between px-4 py-3 text-left text-sm transition-all hover:bg-mystic-gold/10 hover:text-mystic-gold ${
                          lang === l.code
                            ? 'bg-mystic-gold/10 text-mystic-gold font-bold'
                            : 'text-mystic-light'
                        }`}
                      >
                        <span className="flex items-center gap-2">
                          <span className="text-lg">{l.flag}</span>
                          {l.label}
                        </span>
                        <span>{l.code}</span>
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <a
              href="#ubicacion"
              className="flex items-center gap-2 rounded-full bg-mystic-gold px-5 py-2.5 text-sm font-bold text-black shadow-lg shadow-mystic-gold/20 transition-all hover:scale-105 hover:bg-mystic-gold-light"
            >
              <Map className="w-4 h-4" />
              {t('navVisitanos' as any)}
            </a>

            <a
              href="https://wa.me/51999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full border border-mystic-gold/40 bg-black/20 px-4 py-2.5 text-sm font-bold text-mystic-gold transition-all hover:bg-mystic-gold hover:text-black backdrop-blur"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </a>
          </div>

          {/* BOTÓN HAMBURGUESA (MÓVIL) */}
          <button
            type="button"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="lg:hidden rounded-full border border-white/15 bg-black/20 p-2 text-white backdrop-blur"
          >
            {isMobileOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* MENÚ MÓVIL DESPLEGABLE */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-mystic-gold/10 bg-mystic-dark/95 backdrop-blur-xl"
          >
            <div className="px-4 py-5 space-y-3">
              {navLinks.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={closeMobile}
                  className="block rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-mystic-light hover:border-mystic-gold/40 hover:text-mystic-gold"
                >
                  {/* Traducción dinámica */}
                  {t(item.key as any)}
                </a>
              ))}

              <div className="grid grid-cols-5 gap-2 pt-3">
                {languages.map((l) => (
                  <button
                    key={l.code}
                    type="button"
                    onClick={() => {
                      setLang(l.code as any);
                      setIsMobileOpen(false);
                    }}
                    className={`rounded-xl border flex flex-col items-center justify-center py-3 text-sm ${
                      lang === l.code
                        ? 'border-mystic-gold bg-mystic-gold/15 text-mystic-gold'
                        : 'border-white/10 bg-white/5 text-mystic-light'
                    }`}
                  >
                    <div className="text-lg mb-1">{l.flag}</div>
                    <div className="text-xs">{l.code}</div>
                  </button>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <a
                  href="#ubicacion"
                  onClick={closeMobile}
                  className="flex items-center justify-center gap-2 rounded-xl bg-mystic-gold px-4 py-4 font-bold text-black"
                >
                  <Map className="w-4 h-4" />
                  {t('navVisitanos' as any)}
                </a>

                <a
                  href="https://wa.me/51999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMobile}
                  className="flex items-center justify-center gap-2 rounded-xl border border-mystic-gold/40 px-4 py-4 font-bold text-mystic-gold"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}