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
        className="absolute -right-20 top-20 w-96 h-96 bg-mystic-gold/10 rounded-full blur-3xl opacity-60 pointer-events-none"
      />
      <div className="absolute left-0 top-0 h-full w-full bg-[radial-gradient(circle_at_top_left,rgba(212,175,55,0.08),transparent_35%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* PARTE SUPERIOR: TEXTO RESUMIDO Y VIDEO GIGANTE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-24">
          
          {/* Columna Izquierda: Texto de Historia (Más angosto para darle espacio al video) */}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -30 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="lg:col-span-4"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-mystic-gold/10 border border-mystic-gold/20 rounded-full text-mystic-gold text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              <span>{t('aboutBadge')}</span>
            </div>

            <h2 className="font-serif text-4xl md:text-5xl text-mystic-light mb-7 leading-tight">
              {t('aboutTitleTop')}<br/>
              <span className="text-mystic-gold italic">{t('aboutTitleBottom')}</span>
            </h2>

            {/* Texto Resumido */}
            <div className="space-y-6 text-mystic-muted/80 leading-relaxed font-light">
              <p>{t('aboutP1')}</p>
              <p>{t('aboutP2')}</p>
            </div>
          </motion.div>

          {/* Columna Derecha: Reproductor de Video (Más ancho e imponente) */}
          <motion.div
            variants={{
              hidden: { opacity: 0, scale: 0.95 },
              visible: { opacity: 1, scale: 1, transition: { duration: 0.6, delay: 0.2 } },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-8 w-full"
          >
            <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[550px] rounded-3xl overflow-hidden border border-mystic-gold/30 shadow-[0_0_50px_rgba(212,175,55,0.15)] group bg-black">
              <video
                ref={videoRef}
                src="/presentacion.mp4"
                className="w-full h-full object-cover"
                controls={isPlaying}
                onPause={() => setIsPlaying(false)}
                onEnded={() => setIsPlaying(false)}
              />
              
              {!isPlaying && (
                <div 
                  className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-[2px] cursor-pointer transition-all group-hover:bg-black/20"
                  onClick={handlePlay}
                >
                  <img 
                    src="https://images.unsplash.com/photo-1526392060635-9d60198d3fe3?q=80&w=1200" 
                    alt="Miniatura Video" 
                    className="absolute inset-0 w-full h-full object-cover -z-10 opacity-70"
                  />
                  
                  <div className="w-24 h-24 bg-black/50 backdrop-blur-md rounded-full flex items-center justify-center border border-mystic-gold/60 shadow-[0_0_40px_rgba(212,175,55,0.5)] group-hover:scale-110 group-hover:bg-mystic-gold/20 transition-all duration-300">
                    <Play className="w-10 h-10 text-mystic-gold ml-1 fill-mystic-gold" />
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>

        {/* PARTE INFERIOR: TARJETAS MÁGICAS 3D (HOVER REVEAL) */}
        <motion.div
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10"
        >
          {/* Tarjeta 1: MISIÓN */}
          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
            <div className="group h-72 [perspective:1000px] cursor-pointer">
              <div className="relative h-full w-full transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] shadow-xl">
                {/* Frente */}
                <div className="absolute inset-0 bg-gradient-to-br from-mystic-darker to-black border border-mystic-gold/20 rounded-3xl p-8 flex flex-col items-center justify-center [backface-visibility:hidden]">
                  <Target className="w-16 h-16 text-mystic-gold mb-6 drop-shadow-[0_0_15px_rgba(212,175,55,0.8)]" />
                  <h3 className="font-serif text-3xl text-mystic-light tracking-wide">{t('aboutMissionTitle')}</h3>
                  <p className="text-mystic-gold/60 text-sm mt-4 tracking-widest uppercase">Descubrir</p>
                </div>
                {/* Dorso */}
                <div className="absolute inset-0 bg-mystic-darker border border-mystic-gold/60 rounded-3xl p-8 flex flex-col items-center justify-center [transform:rotateY(180deg)] [backface-visibility:hidden] shadow-[0_0_30px_rgba(212,175,55,0.15)]">
                  <h3 className="font-serif text-2xl text-mystic-gold mb-4">{t('aboutMissionTitle')}</h3>
                  <p className="text-sm text-mystic-light/90 leading-relaxed text-center font-light">{t('aboutMissionDesc')}</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Tarjeta 2: VISIÓN */}
          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
            <div className="group h-72 [perspective:1000px] cursor-pointer">
              <div className="relative h-full w-full transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] shadow-xl">
                {/* Frente */}
                <div className="absolute inset-0 bg-gradient-to-br from-mystic-darker to-black border border-mystic-gold/20 rounded-3xl p-8 flex flex-col items-center justify-center [backface-visibility:hidden]">
                  <Eye className="w-16 h-16 text-mystic-gold mb-6 drop-shadow-[0_0_15px_rgba(212,175,55,0.8)]" />
                  <h3 className="font-serif text-3xl text-mystic-light tracking-wide">{t('aboutVisionTitle')}</h3>
                  <p className="text-mystic-gold/60 text-sm mt-4 tracking-widest uppercase">Visualizar</p>
                </div>
                {/* Dorso */}
                <div className="absolute inset-0 bg-mystic-darker border border-mystic-gold/60 rounded-3xl p-8 flex flex-col items-center justify-center [transform:rotateY(180deg)] [backface-visibility:hidden] shadow-[0_0_30px_rgba(212,175,55,0.15)]">
                  <h3 className="font-serif text-2xl text-mystic-gold mb-4">{t('aboutVisionTitle')}</h3>
                  <p className="text-sm text-mystic-light/90 leading-relaxed text-center font-light">{t('aboutVisionDesc')}</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Tarjeta 3: VALORES */}
          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
            <div className="group h-72 [perspective:1000px] cursor-pointer">
              <div className="relative h-full w-full transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] shadow-xl">
                {/* Frente */}
                <div className="absolute inset-0 bg-gradient-to-br from-mystic-darker to-black border border-mystic-gold/20 rounded-3xl p-8 flex flex-col items-center justify-center [backface-visibility:hidden]">
                  <Heart className="w-16 h-16 text-mystic-gold mb-6 drop-shadow-[0_0_15px_rgba(212,175,55,0.8)]" />
                  <h3 className="font-serif text-3xl text-mystic-light tracking-wide">{t('aboutValuesTitle')}</h3>
                  <p className="text-mystic-gold/60 text-sm mt-4 tracking-widest uppercase">Sentir</p>
                </div>
                {/* Dorso */}
                <div className="absolute inset-0 bg-mystic-darker border border-mystic-gold/60 rounded-3xl p-6 flex flex-col items-center justify-center [transform:rotateY(180deg)] [backface-visibility:hidden] shadow-[0_0_30px_rgba(212,175,55,0.15)]">
                  <h3 className="font-serif text-2xl text-mystic-gold mb-4">{t('aboutValuesTitle')}</h3>
                  <div className="flex flex-wrap justify-center gap-2">
                    {values.map((val) => (
                      <span key={val} className="px-3 py-1.5 bg-black/50 border border-mystic-gold/30 rounded-full text-xs text-mystic-light/90 font-medium tracking-wide">
                        {val}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}