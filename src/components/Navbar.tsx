import React, { useEffect, useState } from 'react';
import {
  Menu,
  X,
  Globe,
  ChevronDown,
  Facebook,
  Instagram
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../lib/LanguageContext';

// 1. Ícono de TikTok Personalizado
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 1.25.29V9.45a6.27 6.27 0 0 0-1.7-.24 6.33 6.33 0 0 0-6.33 6.33 6.33 6.33 0 0 0 6.33 6.33 6.33 6.33 0 0 0 6.33-6.27v-6.9a8.1 8.1 0 0 0 4.23 1.2V6.44a4.88 4.88 0 0 1-2.02-.24z"/>
  </svg>
);

const languages = [
  { code: 'ES', label: 'Español', flag: '🇵🇪' },
  { code: 'EN', label: 'English', flag: '🇺🇸' },
  { code: 'PT', label: 'Português', flag: '🇧🇷' },
  { code: 'FR', label: 'Français', flag: '🇫🇷' },
  { code: 'ZH', label: '中文', flag: '🇨🇳' } 
];

const navLinks = [
  { href: '#inicio', key: 'navInicio' },
  { href: '#nosotros', key: 'navHistoria' },
  { href: '#directorio', key: 'navCategorias' },
  { href: '#galeria', key: 'navGaleria' },
  { href: '#ubicacion', key: 'navUbicacion' },
];

const socialLinks = [
  { icon: Facebook, href: 'https://www.facebook.com/centroArtesanalcusco', label: 'Facebook' },
  { icon: Instagram, href: 'https://www.instagram.com/centroartesanaldelcusco/', label: 'Instagram' },
  { icon: TikTokIcon, href: 'https://www.tiktok.com/@centroartesanal_cusco', label: 'TikTok' },
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
                src="/newlogo.png"
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
                {t(item.key as any)}
              </a>
            ))}
          </div>

          {/* ZONA DERECHA (ESCRITORIO) */}
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

            {/* REDES SOCIALES NAVBAR */}
            <div className="flex items-center gap-2 border-l border-white/15 pl-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full border border-white/15 bg-black/20 flex items-center justify-center text-white/80 hover:bg-mystic-gold hover:border-mystic-gold hover:text-black transition-all duration-300 backdrop-blur hover:scale-110"
                    aria-label={social.label}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
            
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
                  className="block rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-mystic-light hover:border-mystic-gold/40 hover:text-mystic-gold transition-colors"
                >
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

              {/* REDES SOCIALES MÓVIL */}
              <div className="flex items-center justify-center gap-4 pt-5 pb-2 border-t border-white/10 mt-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full border border-white/15 bg-white/5 flex items-center justify-center text-mystic-light hover:bg-mystic-gold hover:border-mystic-gold hover:text-black transition-all duration-300"
                      aria-label={social.label}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}