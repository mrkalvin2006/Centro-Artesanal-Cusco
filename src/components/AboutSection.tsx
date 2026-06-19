import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Target, Eye, Heart, Sparkles, Users, Camera } from 'lucide-react';
import { useLanguage } from '../lib/LanguageContext';

const artisanWorkImages = [
  'https://images.unsplash.com/photo-1452860606245-08befc0ff44b?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1531604250646-2f0e818c4f06?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1581022295087-35e5d36c5357?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1605335165682-628d0879eead?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1501686637-b7cd9c56e017?q=80&w=800&auto=format&fit=crop',
];

export function AboutSection() {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ['-10%', '10%']);

  const featuredArtisans = [
    {
      name: 'Maestros del Telar',
      craft: t('artisan1Craft'),
      image: 'https://images.unsplash.com/photo-1544928147-79a2dbc1f389?q=80&w=600&auto=format&fit=crop',
      desc: t('artisan1Desc'),
    },
    {
      name: 'Orfebres de los Andes',
      craft: t('artisan2Craft'),
      image: 'https://images.unsplash.com/photo-1509616788574-8d48bccaab08?q=80&w=600&auto=format&fit=crop',
      desc: t('artisan2Desc'),
    },
    {
      name: 'Manos de Barro',
      craft: t('artisan3Craft'),
      image: 'https://images.unsplash.com/photo-1610701596007-11502861dcfa?q=80&w=600&auto=format&fit=crop',
      desc: t('artisan3Desc'),
    },
  ];

  const values = t('aboutValuesList').split(',');

  return (
    <section id="nosotros" ref={containerRef} className="py-24 relative overflow-hidden bg-mystic-dark">
      <motion.div
        style={{ y: yBg }}
        className="absolute -right-20 top-20 w-96 h-96 bg-mystic-gold/10 rounded-full blur-3xl opacity-60"
      />

      <div className="absolute left-0 top-0 h-full w-full bg-[radial-gradient(circle_at_top_left,rgba(212,175,55,0.08),transparent_35%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center mb-24">
          <motion.div
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            <motion.div
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-mystic-gold/10 border border-mystic-gold/20 rounded-full text-mystic-gold text-sm font-medium mb-6"
            >
              <Sparkles className="w-4 h-4" />
              <span>{t('aboutBadge')}</span>
            </motion.div>

            <motion.h2
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="font-serif text-4xl md:text-6xl text-mystic-light mb-7 leading-tight"
            >
              {t('aboutTitleTop')}
              <span className="text-mystic-gold italic">{t('aboutTitleBottom')}</span>
            </motion.h2>

            <motion.div
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="space-y-6 text-mystic-muted/80 leading-relaxed text-lg font-light"
            >
              <p>{t('aboutP1')}</p>
              <p>{t('aboutP2')}</p>
              <p>{t('aboutP3')}</p>
            </motion.div>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            <motion.div
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
              className="bg-gradient-to-br from-mystic-darker to-black p-8 rounded-3xl border border-mystic-gold/20 hover:border-mystic-gold/50 transition-all duration-500 group"
            >
              <Target className="w-11 h-11 text-mystic-gold mb-6 group-hover:scale-110 transition-transform drop-shadow-[0_0_10px_rgba(212,175,55,0.8)]" />
              <h3 className="font-serif text-3xl text-mystic-light mb-4">{t('aboutMissionTitle')}</h3>
              <p className="text-sm text-mystic-muted/80 leading-relaxed">
                {t('aboutMissionDesc')}
              </p>
            </motion.div>

            <motion.div
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
              className="bg-gradient-to-br from-mystic-darker to-black p-8 rounded-3xl border border-mystic-gold/20 hover:border-mystic-gold/50 transition-all duration-500 group"
            >
              <Eye className="w-11 h-11 text-mystic-gold mb-6 group-hover:scale-110 transition-transform drop-shadow-[0_0_10px_rgba(212,175,55,0.8)]" />
              <h3 className="font-serif text-3xl text-mystic-light mb-4">{t('aboutVisionTitle')}</h3>
              <p className="text-sm text-mystic-muted/80 leading-relaxed">
                {t('aboutVisionDesc')}
              </p>
            </motion.div>

            <motion.div
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
              className="bg-gradient-to-br from-mystic-darker to-black p-8 rounded-3xl border border-mystic-gold/20 hover:border-mystic-gold/50 transition-all duration-500 group sm:col-span-2"
            >
              <Heart className="w-11 h-11 text-mystic-gold mb-6 group-hover:scale-110 transition-transform drop-shadow-[0_0_10px_rgba(212,175,55,0.8)]" />
              <h3 className="font-serif text-3xl text-mystic-light mb-5">{t('aboutValuesTitle')}</h3>
              <div className="flex flex-wrap gap-3">
                {values.map((val) => (
                  <span
                    key={val}
                    className="px-4 py-2 bg-mystic-dark border border-mystic-gold/20 rounded-full text-sm text-mystic-light/90 font-medium tracking-wide hover:border-mystic-gold/50 transition-all"
                  >
                    {val}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        <div className="mt-32 border-t border-mystic-gold/10 pt-24">
          <div className="mb-12 flex flex-col md:flex-row justify-between items-end gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-2xl"
            >
              <div className="flex items-center gap-2 text-mystic-gold mb-4">
                <Users className="w-5 h-5" />
                <span className="text-sm font-medium uppercase tracking-widest">{t('aboutPeopleBadge')}</span>
              </div>
              <h3 className="font-serif text-3xl md:text-4xl text-mystic-light">
                {t('aboutPeopleTitleTop')}
                <span className="italic text-mystic-gold">{t('aboutPeopleTitleBottom')}</span>
              </h3>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-mystic-muted/80 max-w-md font-light"
            >
              {t('aboutPeopleDesc')}
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredArtisans.map((artisan, index) => (
              <motion.div
                key={artisan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
                className="group relative rounded-2xl overflow-hidden border border-mystic-gold/10 hover:border-mystic-gold/30 transition-all bg-mystic-darker"
              >
                <div className="w-full h-64 overflow-hidden relative">
                  <div className="absolute inset-0 bg-mystic-dark/40 group-hover:bg-transparent transition-colors duration-500 z-10" />
                  <img src={artisan.image} alt={artisan.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale group-hover:grayscale-0" />
                </div>
                <div className="p-8 relative z-20 -mt-8 bg-gradient-to-t from-mystic-darker via-mystic-darker to-transparent pt-12">
                  <div className="text-mystic-gold text-sm font-medium tracking-wide mb-2 uppercase">{artisan.craft}</div>
                  <h4 className="font-serif text-2xl text-mystic-light mb-3">{artisan.name}</h4>
                  <p className="text-mystic-muted/80 font-light leading-relaxed">{artisan.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-32 pb-12 overflow-hidden">
          <div className="mb-12 flex flex-col items-center text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 bg-mystic-gold/10 border border-mystic-gold/20 rounded-full text-mystic-gold text-sm font-medium mb-4"
            >
              <Camera className="w-4 h-4" />
              <span>{t('aboutProcessBadge')}</span>
            </motion.div>

            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-serif text-3xl md:text-4xl text-mystic-light"
            >
              {t('aboutProcessTitleTop')}
              <span className="italic text-mystic-gold">{t('aboutProcessTitleBottom')}</span>
            </motion.h3>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="w-full relative"
          >
            <div className="flex gap-6 overflow-x-auto pb-8 pt-4 px-4 sm:px-0 snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {artisanWorkImages.map((img, idx) => (
                <div key={idx} className="relative flex-none w-[85vw] sm:w-[45vw] md:w-[400px] h-[450px] snap-center rounded-2xl overflow-hidden group shadow-[0_0_20px_rgba(212,175,55,0.05)] border border-mystic-gold/10">
                  <div className="absolute inset-0 bg-mystic-dark/40 group-hover:bg-mystic-dark/10 transition-colors duration-500 z-10" />
                  <img src={img} alt={`Artesano trabajando ${idx + 1}`} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                  <div className="absolute top-4 left-4 w-8 h-8 border-t border-l border-mystic-gold/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20" />
                  <div className="absolute bottom-4 right-4 w-8 h-8 border-b border-r border-mystic-gold/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20" />
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}