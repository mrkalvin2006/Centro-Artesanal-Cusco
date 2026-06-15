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

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '40%']);
  const scale = useTransform(scrollYProgress, [0, 1], [1.15, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0.2]);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);

  return (
    <section
      ref={containerRef}
      id="inicio"
      className="relative h-screen min-h-[800px] overflow-hidden bg-black"
    >
      {/* FOTO PARALLAX */}
      <motion.div
        style={{
          y,
          scale,
          opacity,
          backgroundImage: 'url("/hero-cac.jpg")',
          backgroundPosition: 'center 35%',
        }}
        className="absolute inset-0 z-0 h-[130%] -top-[15%] bg-cover bg-no-repeat"
      />

      {/* OVERLAYS */}
      <div className="absolute inset-0 bg-black/60 z-[1]" />

      <div className="absolute inset-0 z-[2] bg-gradient-to-r from-black via-black/80 to-black/20" />

      <div className="absolute inset-0 z-[2] bg-gradient-to-t from-black via-transparent to-transparent" />

      <div className="absolute inset-0 z-[2] bg-[radial-gradient(circle_at_75%_40%,rgba(212,175,55,0.18),transparent_45%)]" />

      {/* CONTENIDO */}
      <motion.div
        style={{ y: textY }}
        className="relative z-10 h-full flex items-center"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 w-full">
          <div className="max-w-3xl">
            {/* BADGE */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-mystic-gold/30 bg-black/40 backdrop-blur-md text-mystic-gold text-sm mb-6">
              <Sparkles className="w-4 h-4" />
              Arte • Tradición • Cultura Viva
            </div>

            {/* STATS */}
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="px-4 py-2 rounded-full bg-mystic-gold/10 border border-mystic-gold/25 text-mystic-gold text-sm">
                24 Pasajes
              </span>

              <span className="px-4 py-2 rounded-full bg-mystic-gold/10 border border-mystic-gold/25 text-mystic-gold text-sm">
                +300 Artesanos
              </span>

              <span className="px-4 py-2 rounded-full bg-mystic-gold/10 border border-mystic-gold/25 text-mystic-gold text-sm">
                Cultura Viva del Cusco
              </span>
            </div>

            {/* TITULO */}
            <h1
              className="font-serif text-6xl md:text-8xl lg:text-[9rem] text-white leading-[0.9] mb-8"
              style={{
                textShadow:
                  '0 10px 40px rgba(0,0,0,0.8)',
              }}
            >
              Centro
              <br />
              Artesanal
              <br />

              <span
                className="text-mystic-gold"
                style={{
                  textShadow:
                    '0 0 50px rgba(212,175,55,0.45)',
                }}
              >
                Cusco
              </span>
            </h1>

            {/* DESCRIPCIÓN */}
            <p className="text-lg md:text-2xl text-white/90 leading-relaxed max-w-2xl mb-10">
              Descubre artesanías, textiles, joyería, cerámica,
              arte tradicional y recuerdos únicos elaborados por
              maestros artesanos en el corazón de la ciudad imperial.
            </p>

            {/* BOTONES */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#pasajes"
                className="bg-mystic-gold hover:bg-mystic-gold-light text-black px-8 py-4 rounded-md font-bold transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(212,175,55,0.4)] hover:scale-105"
              >
                <Compass className="w-5 h-5" />
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
                className="border border-mystic-gold/40 bg-black/40 hover:bg-mystic-gold hover:text-black text-mystic-gold px-8 py-4 rounded-md font-bold transition-all duration-300 flex items-center justify-center gap-2 backdrop-blur"
              >
                <MessageCircle className="w-5 h-5" />
                Contactar
              </a>
            </div>
          </div>
        </div>
      </motion.div>

      {/* SCROLL INDICATOR */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 hidden md:flex flex-col items-center">
        <span className="text-xs tracking-[0.35em] uppercase text-white/60 mb-2">
          Scroll
        </span>

        <motion.div
          animate={{
            y: [0, 12, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
          }}
          className="h-14 w-[2px] bg-gradient-to-b from-mystic-gold to-transparent"
        />
      </div>
    </section>
  );
}