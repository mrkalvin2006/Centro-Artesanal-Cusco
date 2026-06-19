import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Compass,
  MapPin,
  MessageCircle,
  Sparkles,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { useLanguage } from '../lib/LanguageContext';

export function Hero() {
  const { t } = useLanguage();
  const [current, setCurrent] = useState(0);

  const slides = [
    {
      image: '/hero-cac.jpg',
      badge: t('heroSlide1Badge'),
      title: t('heroSlide1Title1'),
      title2: t('heroSlide1Title2'),
      title3: t('heroSlide1Title3'),
      description: t('heroSlide1Desc'),
    },
    {
      image: '/artesano.jpg',
      badge: t('heroSlide2Badge'),
      title: t('heroSlide2Title1'),
      title2: t('heroSlide2Title2'),
      title3: t('heroSlide2Title3'),
      description: t('heroSlide2Desc'),
    },
    {
      image: '/artesana.jpg',
      badge: t('heroSlide3Badge'),
      title: t('heroSlide3Title1'),
      title2: t('heroSlide3Title2'),
      title3: t('heroSlide3Title3'),
      description: t('heroSlide3Desc'),
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section
      id="inicio"
      className="relative h-screen min-h-[800px] overflow-hidden bg-mystic-darker"
    >
      {/* BACKGROUND CINEMATOGRÁFICO CON CROSSFADE */}
      <AnimatePresence>
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.02 }}
          animate={{ opacity: 1, scale: 1.08 }}
          exit={{ opacity: 0 }}
          transition={{
            opacity: { duration: 1.2, ease: 'easeInOut' },
            scale: { duration: 6, ease: 'linear' },
          }}
          className="absolute inset-0 z-0"
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${slides[current].image})` }}
          />
        </motion.div>
      </AnimatePresence>

      {/* OVERLAYS CRISTALINOS (SÓLO LO ESENCIAL PARA EL TEXTO) */}
      
      {/* 1. Sombra sutil solo a la izquierda para poder leer el texto blanco */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-black/60 via-black/10 to-transparent pointer-events-none" />
      
      {/* 2. Sombra inferior solo para resaltar los botones indicadores de la parte baja */}
      <div className="absolute inset-x-0 bottom-0 h-1/3 z-[1] bg-gradient-to-t from-black/70 via-black/10 to-transparent pointer-events-none" />
      
      {/* 3. Reflejo dorado opcional y muy suave */}
      <div className="absolute inset-0 z-[1] bg-[radial-gradient(circle_at_75%_40%,rgba(212,175,55,0.08),transparent_50%)] pointer-events-none" />


      {/* CONTENT */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 w-full">
          <div className="max-w-3xl">
            <motion.div
              key={`badge-${current}`}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-mystic-gold/40 bg-black/30 backdrop-blur-md text-mystic-gold text-sm mb-6 shadow-lg"
            >
              <Sparkles className="w-4 h-4" />
              {slides[current].badge}
            </motion.div>

            <div className="flex flex-wrap gap-3 mb-8">
              <span className="px-4 py-2 rounded-full bg-black/30 backdrop-blur-md border border-mystic-gold/30 text-mystic-gold text-sm shadow-md">
                {t('heroStat1')}
              </span>
              <span className="px-4 py-2 rounded-full bg-black/30 backdrop-blur-md border border-mystic-gold/30 text-mystic-gold text-sm shadow-md">
                {t('heroStat2')}
              </span>
              <span className="px-4 py-2 rounded-full bg-black/30 backdrop-blur-md border border-mystic-gold/30 text-mystic-gold text-sm shadow-md">
                {t('heroStat3')}
              </span>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <h1
                  className="font-serif text-5xl md:text-8xl lg:text-[9rem] text-white leading-[0.9] mb-8 drop-shadow-2xl"
                  style={{ textShadow: '2px 4px 10px rgba(0,0,0,0.8)' }}
                >
                  {slides[current].title}
                  <br />
                  {slides[current].title2}
                  <br />
                  <span
                    className="text-mystic-gold"
                    style={{ textShadow: '2px 4px 15px rgba(0,0,0,0.8), 0 0 40px rgba(212,175,55,0.4)' }}
                  >
                    {slides[current].title3}
                  </span>
                </h1>

                <p 
                  className="text-lg md:text-2xl text-white leading-relaxed max-w-2xl mb-10 font-medium"
                  style={{ textShadow: '1px 2px 8px rgba(0,0,0,0.9)' }}
                >
                  {slides[current].description}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* BOTONES */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#pasajes"
                className="bg-mystic-gold hover:bg-mystic-gold-light text-black px-8 py-4 rounded-md font-bold transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(212,175,55,0.5)] hover:scale-105"
              >
                <Compass className="w-5 h-5" />
                {t('heroBtnExplore')}
              </a>

              <a
                href="#ubicacion"
                className="border border-white/30 bg-black/20 backdrop-blur-xl hover:bg-white/15 text-white px-8 py-4 rounded-md font-bold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg"
              >
                <MapPin className="w-5 h-5" />
                {t('heroBtnLocation')}
              </a>

              <a
                href="https://wa.me/51999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-mystic-gold/40 bg-black/20 backdrop-blur-xl hover:bg-mystic-gold hover:text-black text-mystic-gold px-8 py-4 rounded-md font-bold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg"
              >
                <MessageCircle className="w-5 h-5" />
                {t('heroBtnContact')}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* FLECHAS */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-20 w-14 h-14 rounded-full bg-black/20 backdrop-blur-xl border border-white/20 text-white hover:bg-mystic-gold hover:text-black hover:scale-110 transition-all shadow-xl"
      >
        <ChevronLeft className="mx-auto" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-20 w-14 h-14 rounded-full bg-black/20 backdrop-blur-xl border border-white/20 text-white hover:bg-mystic-gold hover:text-black hover:scale-110 transition-all shadow-xl"
      >
        <ChevronRight className="mx-auto" />
      </button>

      {/* INDICADORES PREMIUM */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex gap-4 items-center">
        {slides.map((_, index) => (
          <button key={index} onClick={() => setCurrent(index)} className="group">
            <div className="w-16 h-[3px] bg-white/40 rounded-full overflow-hidden shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
              <motion.div
                className={`h-full ${current === index ? 'bg-mystic-gold' : 'bg-transparent'}`}
                initial={{ width: 0 }}
                animate={{ width: current === index ? '100%' : '0%' }}
                transition={{ duration: 6, ease: 'linear' }}
              />
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}