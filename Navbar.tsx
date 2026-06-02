import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

const categories = [
  { id: 'textiles', title: 'Textiles', image: 'https://images.unsplash.com/photo-1601662528567-526cd06f3532?q=80&w=1000&auto=format&fit=crop', span: 'col-span-1 md:col-span-2 row-span-2 h-80' },
  { id: 'orfebreria', title: 'Orfebrería', image: 'https://images.unsplash.com/photo-1610086812822-0fcde3f5509e?q=80&w=1000&auto=format&fit=crop', span: 'col-span-1 h-40' },
  { id: 'ceramicas', title: 'Cerámicas', image: 'https://images.unsplash.com/photo-1610701596007-11f028873471?q=80&w=1000&auto=format&fit=crop', span: 'col-span-1 h-40' },
  { id: 'baby-alpaca', title: 'Baby Alpaca', image: 'https://images.unsplash.com/photo-1598275149313-94c34a26e4fb?q=80&w=1000&auto=format&fit=crop', span: 'col-span-1 md:col-span-2 h-40' },
  { id: 'tallados', title: 'Tallados', image: 'https://images.unsplash.com/photo-1510408253164-9134a4acc2fd?q=80&w=1000&auto=format&fit=crop', span: 'col-span-1 h-40' },
  { id: 'pinturas', title: 'Pinturas & Cuadros', image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=1000&auto=format&fit=crop', span: 'col-span-1 md:col-span-2 h-40' },
  { id: 'recuerdos', title: 'Recuerdos', image: 'https://images.unsplash.com/photo-1513519107127-1aa25b822af2?q=80&w=1000&auto=format&fit=crop', span: 'col-span-1 h-40' },
];

export function CategoriesGallery() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const textY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section ref={ref} id="categorias" className="py-24 bg-mystic-darker relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          style={{ y: textY }} 
          className="text-center mb-16"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2 
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="font-serif text-4xl md:text-5xl text-mystic-light mb-4"
          >
            Arte y <span className="italic text-mystic-gold">Categorías</span>
          </motion.h2>
          <motion.p 
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="text-mystic-muted/70 text-lg max-w-2xl mx-auto"
          >
            Descubre la riqueza de nuestra herencia a través de las distintas expresiones artísticas de nuestros maestros artesanos.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-auto gap-4">
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1, duration: 0.6, ease: "easeOut" }}
              whileHover={{ scale: 1.02 }}
              className={`relative overflow-hidden group rounded-2xl cursor-pointer shadow-lg hover:shadow-2xl transition-all ${cat.span}`}
            >
              <img 
                src={cat.image} 
                alt={cat.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-40"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-mystic-black via-mystic-black/50 to-transparent"></div>
              
              {/* Canvas Reveal / Mystic Runes Effect */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-mystic-gold/20 backdrop-blur-sm">
                <div className="absolute inset-0 overflow-hidden mix-blend-color-dodge">
                   <div className="w-full h-full text-[10px] sm:text-xs text-mystic-gold font-mono leading-none break-all opacity-50 absolute -top-1/2 left-0 animate-spin-slow" style={{ animationDuration: '30s' }}>
                      {Array(500).fill(0).map((_, i) => String.fromCharCode(33 + Math.random() * 90)).join(' ')}
                   </div>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 p-6 w-full flex items-end justify-between z-10">
                <div>
                  <h3 className="text-white font-serif text-2xl tracking-wide group-hover:text-mystic-light transition-colors">{cat.title}</h3>
                  <p className="text-mystic-gold/0 group-hover:text-mystic-gold transition-all duration-500 translate-y-4 group-hover:translate-y-0 text-sm font-medium mt-1">Explorar {cat.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
