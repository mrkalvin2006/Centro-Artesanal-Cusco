import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import {
  Shirt,
  Gem,
  Amphora,
  Scissors,
  Brush,
  Gift,
  Sparkles,
  ArrowUpRight,
} from 'lucide-react';

const categories = [
  {
    id: 'textiles',
    title: 'Textiles',
    subtitle: 'Tejidos andinos y prendas tradicionales',
    image:
      'https://images.pexels.com/photos/37966512/pexels-photo-37966512/free-photo-of-colorful-peruvian-craft-market-scene-in-cusco.jpeg?auto=compress&cs=tinysrgb&w=1200',
    icon: Shirt,
    span: 'col-span-1 md:col-span-2 row-span-2 min-h-[420px]',
  },
  {
    id: 'orfebreria',
    title: 'Orfebrería',
    subtitle: 'Joyería y piezas de inspiración andina',
    image:
      'https://images.unsplash.com/photo-1506806732259-39c2d0268443?q=80&w=1200&auto=format&fit=crop',
    icon: Gem,
    span: 'col-span-1 min-h-[220px]',
  },
  {
    id: 'ceramicas',
    title: 'Cerámicas',
    subtitle: 'Piezas decorativas y utilitarias',
    image:
      'https://images.pexels.com/photos/5113588/pexels-photo-5113588.jpeg?auto=compress&cs=tinysrgb&w=1200',
    icon: Amphora,
    span: 'col-span-1 min-h-[220px]',
  },
  {
    id: 'baby-alpaca',
    title: 'Baby Alpaca',
    subtitle: 'Prendas suaves de alta calidad',
    image:
      'https://images.pexels.com/photos/14519168/pexels-photo-14519168.jpeg?auto=compress&cs=tinysrgb&w=1200',
    icon: Shirt,
    span: 'col-span-1 md:col-span-2 min-h-[220px]',
  },
  {
    id: 'tallados',
    title: 'Tallados',
    subtitle: 'Arte en madera y piezas decorativas',
    image:
      'https://images.pexels.com/photos/7109996/pexels-photo-7109996.jpeg?auto=compress&cs=tinysrgb&w=1200',
    icon: Scissors,
    span: 'col-span-1 min-h-[220px]',
  },
  {
    id: 'pinturas',
    title: 'Pinturas & Cuadros',
    subtitle: 'Expresiones visuales de la cultura andina',
    image:
      'https://commons.wikimedia.org/wiki/Special:FilePath/Cuzqueña2.jpg?width=1200',
    icon: Brush,
    span: 'col-span-1 md:col-span-2 min-h-[220px]',
  },
  {
    id: 'recuerdos',
    title: 'Recuerdos',
    subtitle: 'Souvenirs únicos del Cusco',
    image:
      'https://images.pexels.com/photos/18464461/pexels-photo-18464461/free-photo-of-vendors-selling-handmade-embroidered-blankets.jpeg?auto=compress&cs=tinysrgb&w=1200',
    icon: Gift,
    span: 'col-span-1 min-h-[220px]',
  },
];

export function CategoriesGallery() {
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const textY = useTransform(scrollYProgress, [0, 1], ['-8%', '8%']);

  return (
    <section
      ref={ref}
      id="categorias"
      className="py-24 bg-mystic-darker relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.10),transparent_40%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          style={{ y: textY }}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-mystic-gold/25 bg-mystic-gold/10 text-mystic-gold text-sm mb-5">
            <Sparkles className="w-4 h-4" />
            Arte, tradición y talento local
          </div>

          <h2 className="font-serif text-4xl md:text-6xl text-mystic-light mb-5">
            Arte y <span className="italic text-mystic-gold">Categorías</span>
          </h2>

          <p className="text-mystic-muted/75 text-lg max-w-3xl mx-auto leading-relaxed">
            Descubre la riqueza de nuestra herencia a través de las distintas
            expresiones artísticas de nuestros maestros artesanos.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-auto gap-5">
          {categories.map((cat, idx) => {
            const Icon = cat.icon;

            return (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, scale: 0.95, y: 35 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{
                  delay: idx * 0.08,
                  duration: 0.55,
                  ease: 'easeOut',
                }}
                whileHover={{ scale: 1.02, y: -4 }}
                className={`relative overflow-hidden group rounded-3xl cursor-pointer border border-mystic-gold/10 hover:border-mystic-gold/50 bg-black shadow-xl hover:shadow-[0_0_35px_rgba(212,175,55,0.18)] transition-all ${cat.span}`}
              >
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-55 group-hover:opacity-75"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/65 to-black/10" />
                <div className="absolute inset-0 bg-mystic-gold/0 group-hover:bg-mystic-gold/10 transition-colors duration-500" />

                <div className="absolute top-5 left-5 z-20">
                  <motion.div
                    whileHover={{ rotate: 8, scale: 1.08 }}
                    className="w-14 h-14 rounded-2xl border border-mystic-gold/35 bg-black/50 backdrop-blur flex items-center justify-center shadow-[0_0_20px_rgba(212,175,55,0.20)]"
                  >
                    <Icon className="w-7 h-7 text-mystic-gold" />
                  </motion.div>
                </div>

                <div className="absolute top-5 right-5 z-20 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                  <div className="w-10 h-10 rounded-full bg-mystic-gold text-black flex items-center justify-center">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 p-7 w-full z-20">
                  <h3 className="text-white font-serif text-3xl tracking-wide mb-2 group-hover:text-mystic-gold transition-colors">
                    {cat.title}
                  </h3>

                  <p className="text-mystic-muted/80 text-sm max-w-md leading-relaxed">
                    {cat.subtitle}
                  </p>

                  <div className="mt-5 h-[1px] w-16 bg-mystic-gold/50 group-hover:w-32 transition-all duration-500" />

                  <p className="mt-4 text-mystic-gold opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-3 group-hover:translate-y-0 text-sm font-bold">
                    Explorar categoría
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
