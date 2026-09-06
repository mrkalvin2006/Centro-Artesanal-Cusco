import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Clock } from 'lucide-react';

export function BottomStats() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <section ref={ref} className="bg-gradient-to-r from-brand-brown-dark to-brand-brown py-16 relative overflow-hidden">
      {/* Decorative Parallax Background */}
      <motion.div 
        style={{ y: yBg }}
        className="absolute inset-0 opacity-10 bg-[url('https://images.pexels.com/photos/17059195/pexels-photo-17059195/free-photo-of-santo-domingo-convent-in-cusco-peru.jpeg?auto=compress&cs=tinysrgb&w=2400')] bg-cover bg-center h-[150%] -top-[25%]"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 items-center border-l-4 border-mystic-gold pl-6">
          
          <div className="flex flex-col">
            <span className="text-mystic-gold/80 text-sm font-medium mb-1">Más de</span>
            <span className="font-serif text-5xl md:text-6xl text-mystic-gold mb-2">360</span>
            <span className="text-white/80 font-medium tracking-wide">Stands activos</span>
          </div>

          <div className="flex flex-col">
            <span className="text-mystic-gold/80 text-sm font-medium mb-1">Más de</span>
            <span className="font-serif text-5xl md:text-6xl text-mystic-gold mb-2">1000</span>
            <span className="text-white/80 font-medium tracking-wide">Artesanos</span>
          </div>

          <div className="flex flex-col">
            <span className="text-mystic-gold/80 text-sm font-medium mb-1">Más de</span>
            <span className="font-serif text-5xl md:text-6xl text-mystic-gold mb-2">20 <span className="text-3xl">años</span></span>
            <span className="text-white/80 font-medium tracking-wide">Promoviendo nuestra cultura</span>
          </div>

          <div className="flex items-start gap-4">
            <div className="mt-1">
               <Clock className="w-8 h-8 text-mystic-gold" />
            </div>
            <div>
              <span className="block text-white font-serif text-xl mb-1">Atención</span>
              <span className="block text-white/80">Lunes a Domingo</span>
              <span className="block text-white/50 text-sm mt-1">8:00 a.m. - 7:00 p.m.</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
