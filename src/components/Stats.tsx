import React from 'react';
import { motion } from 'motion/react';
import { Users, Award, TrendingUp, MapPin } from 'lucide-react';

const stats = [
  { icon: Users, title: "Apoyamos a más de", val: "360 stands artesanales" },
  { icon: Award, title: "Promovemos la", val: "calidad y autenticidad" },
  { icon: TrendingUp, title: "Impulsamos el", val: "desarrollo económico" },
  { icon: MapPin, title: "Ubicados en el", val: "corazón de Cusco" },
];

export function Stats() {
  return (
    <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-24 mb-20">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="bg-mystic-gray rounded-xl shadow-2xl p-6 md:p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
      >
        {stats.map((stat, idx) => (
          <div key={idx} className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full border border-mystic-gold/30 bg-mystic-gold/5 flex items-center justify-center shrink-0">
              <stat.icon className="w-6 h-6 text-mystic-gold" />
            </div>
            <div>
              <p className="text-sm text-mystic-muted/60">{stat.title}</p>
              <p className="font-serif font-medium text-mystic-light">{stat.val}</p>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
