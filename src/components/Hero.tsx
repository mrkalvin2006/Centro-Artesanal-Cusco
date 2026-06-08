import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import {
  Compass,
  MapPin,
  MessageCircle,
  Sparkles,
} from 'lucide-react';
import { useLanguage } from '../lib/LanguageContext';

export function Hero() {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '38%']);
  const scale = useTransform(scrollYProgress, [0, 1], [1.12, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0.25]);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '18%']);

  return (
    <section
      ref={containerRef}
      id="inicio"
      className="relative h-screen min-h-[720px] flex items-center overflow-hidden bg-black"
    >
      <motion.div
        style={{ y, scale, opacity }}
        className="absolute inset-0 z-0 h-[125%] -top-[12%] bg-cover bg-center bg-no-repeat"
        style={{
          y,
          scale,
          opacity,
          backgroundImage: 'url("/hero-cac.webp")',
        }}
      />

      <div className="absolute inset-0 bg-black/45" />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/75 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-mystic-dark via-transparent to-transparent" />

      <div className="absolute right-0 top-0 h-full w-1/2 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.13),transparent_45%)]" />

      <motion.div
        style={{ y: textY }}
        className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 pt-24"
      >
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-mystic-gold/30 bg-black/35 backdrop-blur text-mystic-gold text-sm mb-8">
            <Sparkles className="w-4 h-4" />
            {t('heroBadge')}
          </div>

          <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl text-white mb-7 leading-[0.95] drop-shadow-2xl">
            Centro <br />
            Artesanal <br />
            <span
              className="text-mystic-gold"
              style={{ textShadow: '0 0 45px rgba(212, 175, 55, 0.45)' }}
            >
              Cusco
            </span>
          </h1>

          <p className="text-lg md:text-2xl text-mystic-light mb-10 max-w-2xl leading-relaxed font-light opacity-95">
            Descubre artesanías, textiles, joyería, cerámica y recuerdos únicos
            en el corazón de la ciudad imperial.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap gap-4">
            <a
              href="#pasajes"
              className="bg-mystic-gold hover:bg-mystic-gold-light text-black px-8 py-4 rounded-md font-bold transition-all duration-300 flex items-center justify-center gap-2 group shadow-[0_0_25px_rgba(212,175,55,0.35)]"
            >
              <Compass className="w-5 h-5 group-hover:rotate-45 transition-transform" />
              Explorar Pasajes
            </a>

            <a
              href="#ubicacion"
              className="border border-white/25 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-md font-bold transition-all duration-300 flex items-center justify-center gap-2 backdrop-blur"
            >
              <MapPin className="w-5 h-5" />
              Cómo Llegar
            </a>

            <a
              href="https://wa.me/51999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-mystic-gold/40 bg-black/35 hover:bg-mystic-gold hover:text-black text-mystic-gold px-8 py-4 rounded-md font-bold transition-all duration-300 flex items-center justify-center gap-2 backdrop-blur"
            >
              <MessageCircle className="w-5 h-5" />
              Contactar
            </a>
          </div>
        </div>
      </motion.div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 hidden md:flex flex-col items-center gap-2 text-white/60">
        <span className="text-xs tracking-[0.3em] uppercase">
          Scroll
        </span>
        <div className="h-12 w-[1px] bg-gradient-to-b from-mystic-gold to-transparent" />
      </div>
    </section>
  );
}