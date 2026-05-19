import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Store, ClipboardList, Megaphone, GraduationCap, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Store,
    title: "Alquiler de Stands",
    description: "Espacios cómodos y seguros para artesanos y emprendedores.",
  },
  {
    icon: ClipboardList,
    title: "Gestión de Servicios",
    description: "Administración y control de servicios para los stands.",
  },
  {
    icon: Megaphone,
    title: "Promoción Cultural",
    description: "Difusión de nuestras artesanías y actividades culturales.",
  },
  {
    icon: GraduationCap,
    title: "Capacitación",
    description: "Programas de formación para artesanos y emprendedores.",
  }
];

export function ServicesSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const yBg = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <section ref={ref} id="servicios" className="py-24 bg-mystic-dark border-t border-b border-mystic-gold/10 relative overflow-hidden">
      <motion.div 
        style={{ y: yBg }} 
        className="absolute -left-32 top-10 w-80 h-80 bg-mystic-gold/5 rounded-full blur-3xl pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-mystic-gold font-bold tracking-widest uppercase text-sm mb-2"
          >
            Nuestros Servicios
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-3xl md:text-5xl text-mystic-light"
          >
            ¿Qué <span className="italic text-mystic-gold">ofrecemos?</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-mystic-gray p-8 rounded-2xl border border-mystic-gold/10 shadow-sm hover:shadow-xl hover:border-mystic-gold/30 transition-all group flex flex-col justify-between relative overflow-hidden"
            >
              <div className="relative z-10">
                <div className="w-12 h-12 bg-mystic-gold/10 rounded-xl flex items-center justify-center text-mystic-gold mb-6 group-hover:bg-mystic-gold group-hover:text-white transition-colors duration-300">
                  <service.icon className="w-6 h-6" />
                </div>
                <h3 className="font-serif font-bold text-xl text-mystic-light mb-3">{service.title}</h3>
                <p className="text-mystic-muted/70 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>
              
              <button className="flex items-center gap-2 text-mystic-gold font-medium text-sm hover:text-mystic-gold-light transition-colors w-fit relative z-10">
                Ver más <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
