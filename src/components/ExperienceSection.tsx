import React from 'react';
import { motion } from 'motion/react';
import {
  Store,
  Users,
  Shapes,
  Landmark,
} from 'lucide-react';

const stats = [
  {
    icon: Store,
    value: '24',
    label: 'Pasajes',
    description: 'Espacios especializados',
  },
  {
    icon: Users,
    value: '+300',
    label: 'Artesanos',
    description: 'Maestros artesanos',
  },
  {
    icon: Shapes,
    value: '7',
    label: 'Categorías',
    description: 'Arte y tradición',
  },
  {
    icon: Landmark,
    value: '40+',
    label: 'Años',
    description: 'Historia cultural',
  },
];

export function ExperienceSection() {
  return (
    <section className="relative py-24 bg-mystic-dark overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.10),transparent_50%)]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center px-4 py-2 rounded-full border border-mystic-gold/30 bg-mystic-gold/10 text-mystic-gold text-sm mb-5">
            EXPERIENCIA CENTRO ARTESANAL
          </span>

          <h2 className="font-serif text-4xl md:text-6xl text-white mb-6">
            Cultura, Tradición y
            <span className="text-mystic-gold italic"> Arte Vivo</span>
          </h2>

          <p className="max-w-3xl mx-auto text-mystic-light/80 text-lg">
            Un espacio donde convergen generaciones de artesanos,
            tradición andina y expresiones culturales únicas que
            representan la identidad del Cusco.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.15,
                  duration: 0.6,
                }}
                whileHover={{
                  y: -8,
                }}
                className="group bg-gradient-to-b from-mystic-darker to-black rounded-3xl border border-mystic-gold/15 hover:border-mystic-gold/50 p-8 text-center transition-all duration-500 shadow-xl"
              >
                <div className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-mystic-gold/10 border border-mystic-gold/20 flex items-center justify-center group-hover:scale-110 transition-all duration-500">
                  <Icon className="w-8 h-8 text-mystic-gold" />
                </div>

                <div className="text-4xl md:text-5xl font-bold text-mystic-gold mb-2">
                  {item.value}
                </div>

                <h3 className="text-white font-semibold text-xl mb-2">
                  {item.label}
                </h3>

                <p className="text-mystic-light/60 text-sm">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}