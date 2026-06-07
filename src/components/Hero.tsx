import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import {
  Compass,
  ChevronLeft,
  ChevronRight,
  MapPin,
  MessageCircle,
  Sparkles,
} from 'lucide-react';
import { useLanguage } from '../lib/LanguageContext';

const heroImages = [
  'https://images.unsplash.com/photo-1587595431973-160d0d94add1?q=80&w=2676&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1526392060635-9d60198d3fe3?q=80&w=2670&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1580665971489-3dfccc07ce71?q=80&w=2670&auto=format&fit=crop',
];

export function Hero() {
  const { t } = useLanguage();
  const [currentImage, setCurrentImage] = useState(0);
  const containerRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '35%']);
  const scale = useTransform(scrollYProgress, [0, 1], [1.18, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.25]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 6500);

    return () => clearInterval(timer);
  }, []);

  const nextImage = () =>
    setCurrentImage((prev) => (prev + 1) % heroImages.length);

  const prevImage = () =>
    setCurrentImage((prev) => (prev - 1 + heroImages.length) % heroImages.length);

  return (
    <section
      ref={containerRef}
      id="inicio"
      className="relative h-screen min-h-[680px] flex items-center justify-center overflow-hidden"
    >
      <motion.div
        style={{ y, scale, opacity }}
        className="absolute inset-0 z-0 w-full h-[125%] -top-[12%]"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={heroImages[currentImage]}
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.4, ease: 'easeInOut' }}
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url("${heroImages[currentImage]}")` }}
          />
        </AnimatePresence>

        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 bg-gradient-to-r from-mystic-black via-mystic-black/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-mystic-dark via-transparent to-transparent" />
      </motion.div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-mystic-gold/30 bg-black/35 backdrop-blur text-mystic-gold text-sm mb-6">
            <Sparkles className="w-4 h-4" />
            {t('heroBadge')}
          </div>

          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white mb-5 leading-tight drop-shadow-2xl">
            {t('heroTitleTop')} <br />
            <span
              className="text-mystic-gold"
              style={{ textShadow: '0 0 45px rgba(212, 175, 55, 0.45)' }}
            >
              {t('heroTitleBottom')}
            </span>
          </h1>

          <p className="text-lg md:text-xl text-mystic-light mb-9 max-w-2xl leading-relaxed font-light opacity-95">
            {t('heroSubtitle')}
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap gap-4">
            <a
              href="#pasajes"
              className="bg-mystic-gold hover:bg-mystic-gold-light text-black px-7 py-4 rounded-md font-bold transition-all duration-300 flex items-center justify-center gap-2 group shadow-[0_0_25px_rgba(212,175,55,0.35)]"
            >
              <Compass className="w-5 h-5 group-hover:rotate-45 transition-transform" />
              {t('heroBtnExplore')}
            </a>

            <a
              href="#ubicacion"
              className="border border-white/25 bg-white/10 hover:bg-white/20 text-white px-7 py-4 rounded-md font-bold transition-all duration-300 flex items-center justify-center gap-2 backdrop-blur"
            >
              <MapPin className="w-5 h-5" />
              {t('heroBtnLocation')}
            </a>

            <a
              href="https://wa.me/51XXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-mystic-gold/40 bg-black/35 hover:bg-mystic-gold hover:text-black text-mystic-gold px-7 py-4 rounded-md font-bold transition-all duration-300 flex items-center justify-center gap-2 backdrop-blur"
            >
              <MessageCircle className="w-5 h-5" />
              {t('heroBtnContact')}
            </a>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 right-10 z-20 gap-3 hidden md:flex">
        <button
          type="button"
          onClick={prevImage}
          className="w-12 h-12 rounded-full border border-white/20 bg-black/30 backdrop-blur flex items-center justify-center text-white hover:bg-mystic-gold hover:text-black hover:border-transparent transition-all"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          type="button"
          onClick={nextImage}
          className="w-12 h-12 rounded-full border border-white/20 bg-black/30 backdrop-blur flex items-center justify-center text-white hover:bg-mystic-gold hover:text-black hover:border-transparent transition-all"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {heroImages.map((_, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => setCurrentImage(idx)}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              currentImage === idx
                ? 'w-10 bg-mystic-gold'
                : 'w-3 bg-white/40'
            }`}
          />
        ))}
      </div>
    </section>
  );
}