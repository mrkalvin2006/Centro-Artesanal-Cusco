import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { Compass, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../lib/LanguageContext';

const heroImages = [
  "https://images.unsplash.com/photo-1587595431973-160d0d94add1?q=80&w=2676&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1526392060635-9d60198d3fe3?q=80&w=2670&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1580665971489-3dfccc07ce71?q=80&w=2670&auto=format&fit=crop"
];

export function Hero() {
  const { t } = useLanguage();
  const [currentImage, setCurrentImage] = useState(0);
  const containerRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] });
  
  // LÍNEAS CORREGIDAS (SIN COMAS DOBLES)
 const y = useTransform(scrollYProgress,, ["0%", "30%"]);
const scale = useTransform(scrollYProgress,, [1.1, 1]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextImage = () => setCurrentImage((prev) => (prev + 1) % heroImages.length);
  const prevImage = () => setCurrentImage((prev) => (prev - 1 + heroImages.length) % heroImages.length);

  return (
    <section ref={containerRef} id="inicio" className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      <motion.div style={{ y, scale }} className="absolute inset-0 z-0 w-full h-[120%] -top-[10%]">
        <AnimatePresence mode="popLayout">
          {heroImages.map((src, index) => (
            index === currentImage && (
              <motion.div
                key={src}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60 mix-blend-luminosity"
                style={{ backgroundImage: `url("${src}")` }}
              />
            )
          ))}
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-r from-mystic-black/100 via-mystic-black/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-mystic-dark via-transparent to-transparent opacity-100"></div>
      </motion.div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl"
        >
          <h1 className="font-serif text-5xl md:text-7xl text-white mb-4 leading-tight drop-shadow-2xl">
            {t('heroTitleTop')} <br />
            <span className="text-mystic-gold text-6xl md:text-8xl" style={{ textShadow: '0 0 40px rgba(212, 175, 55, 0.4)' }}>
              {t('heroTitleBottom')}
            </span>
          </h1>
          <p className="text-lg md:text-xl text-mystic-light mb-8 max-w-lg leading-relaxed font-light opacity-90">
            {t('heroSubtitle')}
          </p>
          
          <div className="flex flex-wrap gap-4">
            <button className="bg-mystic-gold hover:bg-mystic-gold-light text-black px-8 py-3.5 rounded-sm font-bold transition-all duration-300 flex items-center gap-2 group shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_30px_rgba(212,175,55,0.6)]">
              <Compass className="w-5 h-5 group-hover:rotate-45 transition-transform" />
              {t('heroBtnExplore')}
            </button>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 right-10 z-20 flex gap-3 hidden md:flex">
        <button onClick={prevImage} className="w-12 h-12 rounded-full border border-white/20 bg-black/20 backdrop-blur flex items-center justify-center text-white hover:bg-mystic-gold hover:border-transparent transition-all">
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button onClick={nextImage} className="w-12 h-12 rounded-full border border-white/20 bg-black/20 backdrop-blur flex items-center justify-center text-white hover:bg-mystic-gold hover:border-transparent transition-all">
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {heroImages.map((_, idx) => (
          <button 
            key={idx}
            onClick={() => setCurrentImage(idx)}
            className={`h-1.5 rounded-full transition-all duration-500 ${currentImage === idx ? 'w-8 bg-mystic-gold' : 'w-2 bg-mystic-gray/40'}`}
          />
        ))}
      </div>
    </section>
  );
}
