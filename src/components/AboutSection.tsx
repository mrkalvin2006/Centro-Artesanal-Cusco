import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Target, Eye, Heart, Sparkles, Play } from 'lucide-react';
import { useLanguage } from '../lib/LanguageContext';

export function AboutSection() {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ['-10%', '10%']);
  const values = t('aboutValuesList').split(',');

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <section id="nosotros" ref={containerRef} className="py-24 relative overflow-hidden bg-mystic-dark">
      {/* Fondos Decorativos */}
      <motion.div
        style={{ y: yBg }}
        className="absolute -right-20 top-20 w-96 h-96 bg-mystic-gold/10 rounded-full blur-3xl opacity-60"
      />
      <div className="absolute left-0 top-0 h-full w-full bg-[radial-gradient(circle_at_top_left,rgba(212,175,55,0.08),transparent_35%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* PARTE SUPERIOR: TEXTO Y VIDEO */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          
          {/* Columna Izquierda: Texto de Historia */}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -30 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-mystic-gold/10 border border-mystic-gold/20 rounded-full text-mystic-gold text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              <span>{t('aboutBadge')}</span>
            </div>

            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-mystic-light mb-7 leading-tight">
              {t('aboutTitleTop')}
              <span className="text-mystic-gold italic">{t('aboutTitleBottom')}</span>
            </h2>

            <div className="space-y-6 text-mystic-muted/80 leading-relaxed text-lg font-light">
              <p>{t('aboutP1')}</p>
              <p>{t('aboutP2')}</p>
              <p>{t('aboutP3')}</p>
            </div>
          </motion.div>

          {/* Columna Derecha: Reproductor de Video */}
          <motion.div
            variants={{
              hidden: { opacity: 0, scale: 0.9 },
              visible: { opacity: 1, scale: 1, transition: { duration: 0.6, delay: 0.2 } },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="w-full"
          >
            <div className="relative w-full aspect-video rounded-3xl overflow-hidden border border-mystic-gold/30 shadow-[0_0_40px_rgba(212,175,55,0.15)] group bg-black">
              {/* Aquí va tu video. Debe llamarse 'presentacion.mp4' y estar en la carpeta public */}
              <video
                ref={videoRef}
                src="/presentacion.mp4"
                className="w-full h-full object-cover"
                controls={isPlaying}
                onPause={() => setIsPlaying(false)}
                onEnded={() => setIsPlaying(false)}
              />
              
              {/* Capa de Play Personalizada (Desaparece al reproducir) */}
              {!isPlaying && (
                <div 
                  className="absolute inset-0 flex items-center justify-center bg-black/30 backdrop-blur-[2px] cursor-pointer transition-all group-hover:bg-black/10"
                  onClick={handlePlay}
                >
                  {/* Foto de portada del video (thumbnail) */}
                  <img 
                    src="https://images.unsplash.com/photo-1526392060635-9d60198d3fe3?q=80&w=800" 
                    alt="Miniatura Video" 
                    className="absolute inset-0 w-full h-full object-cover -z-10 opacity-70"
                  />
                  
                  {/* Botón de Play animado */}
                  <div className="w-20 h-20 bg-black/40 backdrop-blur-md rounded-full flex items-center justify-center border border-mystic-gold/60 shadow-[0_0_30px_rgba(212,175,55,0.4)] group-hover:scale-110 group-hover:bg-mystic-gold/20 transition-all duration-300">
                    <Play className="w-8 h-8 text-mystic-gold ml-1 fill-mystic-gold" />
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>

        {/* PARTE INFERIOR: MISIÓN, VISIÓN Y VALORES */}
        <motion.div
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <motion.div
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="bg-gradient-to-br from-mystic-darker to-black p-8 rounded-3xl border border-mystic-gold/20 hover:border-mystic-gold/50 transition-all duration-500 group lg:col-span-1"
          >
            <Target className="w-10 h-10 text-mystic-gold mb-6 group-hover:scale-110 transition-transform drop-shadow-[0_0_10px_rgba(212,175,55,0.8)]" />
            <h3 className="font-serif text-2xl text-mystic-light mb-3">{t('aboutMissionTitle')}</h3>
            <p className="text-sm text-mystic-muted/80 leading-relaxed">{t('aboutMissionDesc')}</p>
          </motion.div>

          <motion.div
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="bg-gradient-to-br from-mystic-darker to-black p-8 rounded-3xl border border-mystic-gold/20 hover:border-mystic-gold/50 transition-all duration-500 group lg:col-span-1"
          >
            <Eye className="w-10 h-10 text-mystic-gold mb-6 group-hover:scale-110 transition-transform drop-shadow-[0_0_10px_rgba(212,175,55,0.8)]" />
            <h3 className="font-serif text-2xl text-mystic-light mb-3">{t('aboutVisionTitle')}</h3>
            <p className="text-sm text-mystic-muted/80 leading-relaxed">{t('aboutVisionDesc')}</p>
          </motion.div>

          <motion.div
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="bg-gradient-to-br from-mystic-darker to-black p-8 rounded-3xl border border-mystic-gold/20 hover:border-mystic-gold/50 transition-all duration-500 group md:col-span-2 lg:col-span-2"
          >
            <Heart className="w-10 h-10 text-mystic-gold mb-6 group-hover:scale-110 transition-transform drop-shadow-[0_0_10px_rgba(212,175,55,0.8)]" />
            <h3 className="font-serif text-2xl text-mystic-light mb-5">{t('aboutValuesTitle')}</h3>
            <div className="flex flex-wrap gap-3">
              {values.map((val) => (
                <span
                  key={val}
                  className="px-4 py-2 bg-mystic-dark border border-mystic-gold/20 rounded-full text-sm text-mystic-light/90 font-medium tracking-wide hover:border-mystic-gold/50 transition-all cursor-default"
                >
                  {val}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
        
      </div>
    </section>
  );
}