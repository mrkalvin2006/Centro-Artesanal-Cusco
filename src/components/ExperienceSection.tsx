import React, { useEffect, useRef } from 'react';
import { Store, Users, Shapes, Landmark, Globe } from 'lucide-react';
import { motion, useInView } from 'motion/react';
import { useLanguage } from '../lib/LanguageContext';

// Componente para animar los números con separador de miles
function AnimatedCounter({ to, prefix = '', suffix = '' }: { to: number, prefix?: string, suffix?: string }) {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const inView = useInView(nodeRef, { once: true, margin: "0px 0px -100px 0px" });

  useEffect(() => {
    if (!inView) return;
    let startTimestamp: number;
    const duration = 2500; // 2.5 segundos para dar tiempo a que los 10,000 suban con drama
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const easeProgress = 1 - Math.pow(1 - progress, 3); // Desaceleración suave al final
      const currentCount = Math.floor(easeProgress * to);
      
      if (nodeRef.current) {
        // toLocaleString('en-US') formatea 10000 como "10,000"
        nodeRef.current.textContent = `${prefix}${currentCount.toLocaleString('en-US')}${suffix}`;
      }
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [inView, to, prefix, suffix]);

  return (
    <span ref={nodeRef} className="font-serif text-4xl lg:text-5xl text-mystic-gold mb-4 inline-block tracking-tight drop-shadow-md">
      0
    </span>
  );
}

export function ExperienceSection() {
  const { t } = useLanguage();

  // Se añade la estadística número 5
  const stats = [
    { icon: Store, number: 24, labelKey: 'expStat1', descKey: 'expDesc1', suffix: '' },
    { icon: Users, number: 300, labelKey: 'expStat2', descKey: 'expDesc2', prefix: '+' },
    { icon: Shapes, number: 7, labelKey: 'expStat3', descKey: 'expDesc3', suffix: '' },
    { icon: Landmark, number: 40, labelKey: 'expStat4', descKey: 'expDesc4', suffix: '+' },
    { icon: Globe, number: 10000, labelKey: 'expStat5', descKey: 'expDesc5', prefix: '+' }
  ];

  return (
    <section className="py-24 bg-black relative overflow-hidden border-t border-mystic-gold/10">
      {/* Resplandor central dorado */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.08),transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Cabecera de la Sección */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block border border-mystic-gold/30 bg-mystic-gold/5 backdrop-blur-sm rounded-full px-5 py-2 mb-8 shadow-[0_0_15px_rgba(212,175,55,0.1)]"
          >
            <span className="text-mystic-gold text-xs font-medium tracking-[0.2em] uppercase">
              {t('expBadge')}
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight"
          >
            {t('expTitle1')} <span className="text-mystic-gold italic font-light">{t('expTitle2')}</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-mystic-muted text-lg max-w-3xl mx-auto font-light leading-relaxed"
          >
            {t('expDesc')}
          </motion.p>
        </div>

        {/* Tarjetas de Estadísticas con Contadores - Ahora en 5 columnas (lg:grid-cols-5) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group relative rounded-3xl bg-mystic-darker border border-white/5 p-8 text-center overflow-hidden hover:border-mystic-gold/30 transition-all duration-500 shadow-xl"
              >
                {/* Resplandor Hover */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.1),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                
                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-16 h-16 rounded-2xl bg-black/50 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-mystic-gold/50 transition-all duration-500 shadow-[0_0_20px_rgba(0,0,0,0.5)]">
                    <Icon className="w-8 h-8 text-mystic-gold/80 group-hover:text-mystic-gold transition-colors" />
                  </div>
                  
                  <AnimatedCounter to={stat.number} prefix={stat.prefix} suffix={stat.suffix} />
                  
                  <h3 className="text-lg text-white font-semibold mb-1">{t(stat.labelKey as any)}</h3>
                  <p className="text-xs text-mystic-muted/60 uppercase tracking-wider">{t(stat.descKey as any)}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}