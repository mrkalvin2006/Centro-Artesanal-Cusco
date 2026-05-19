import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Target, Eye, Heart, Sparkles, Users, Camera } from 'lucide-react';
import { useLanguage } from '../lib/LanguageContext'; // 1. IMPORTAMOS EL IDIOMA

const featuredArtisans = [
  {
    name: "Maestros del Telar",
    craft: "Arte Textil Ancestral",
    image: "https://images.unsplash.com/photo-1544928147-79a2dbc1f389?q=80&w=600&auto=format&fit=crop",
    desc: "Preservando el tejido andino tradicional, utilizando tintes naturales y técnicas milenarias."
  },
  {
    name: "Orfebres de los Andes",
    craft: "Platería y Joyería",
    image: "https://images.unsplash.com/photo-1509616788574-8d48bccaab08?q=80&w=600&auto=format&fit=crop",
    desc: "Diseños que fusionan la estética incaica con el arte virreinal en plata de la más alta pureza."
  },
  {
    name: "Manos de Barro",
    craft: "Cerámica Andina",
    image: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?q=80&w=600&auto=format&fit=crop",
    desc: "Piezas utilitarias y decorativas que cuentan la cosmovisión andina a través del barro."
  }
];

const artisanWorkImages = [
  "https://images.unsplash.com/photo-1452860606245-08befc0ff44b?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1531604250646-2f0e818c4f06?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1581022295087-35e5d36c5357?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1605335165682-628d0879eead?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1501686637-b7cd9c56e017?q=80&w=800&auto=format&fit=crop"
];

export function AboutSection() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });
  const yBg = useTransform(scrollYProgress,, ["-10%", "10%"]);
  
  const { t } = useLanguage(); // 2. USAMOS EL HOOK DE TRADUCCIÓN

  return (
    <section id="nosotros" ref={containerRef} className="py-24 relative overflow-hidden bg-mystic-dark">
      {/* Decorative background with parallax */}
      <motion.div 
        style={{ y: yBg }}
        className="absolute -right-20 top-20 w-96 h-96 bg-mystic-gold/5 rounded-full blur-3xl opacity-50"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-24">
          
          <motion.div
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div 
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="inline-flex items-center gap-2 px-3 py-1 bg-mystic-gold/10 border border-mystic-gold/20 rounded-full text-mystic-gold text-sm font-medium mb-6"
            >
              <Sparkles className="w-4 h-4" />
              {/* 3. TEXTOS CONECTADOS AL DICCIONARIO */}
              <span>{t('aboutSubtitle')}</span>
            </motion.div>
            <motion.h2 
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="font-serif text-3xl md:text-5xl text-mystic-light mb-6"
            >
              {t('aboutTitle')}
            </motion.h2>
            <motion.div 
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="space-y-6 text-mystic-muted/80 leading-relaxed text-lg font-light"
            >
              <p>{t('aboutText1')}</p>
              <p>{t('aboutText2')}</p>
              {/* Dejo este tercer párrafo original aquí. Si quieres traducirlo luego, solo crea un 'aboutText3' en tu LanguageContext */}
              <p>
                Hoy en día, salvaguardar estas prácticas tradicionales es vital. En un mundo cada vez más industrializado, respaldar a nuestros artesanos no sólo preserva una identidad cultural valiosa, sino que también empodera económicamente a comunidades de las alturas andinas, manteniendo viva la magia ancestral del Perú.
              </p>
            </motion.div>
          </motion.div>

          {/* Tarjetas de Misión, Visión y Valores (Las dejo intactas con tu diseño, puedes traducirlas siguiendo el mismo patrón cuando quieras) */}
          <motion.div 
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:mt-24"
          >
            <motion.div
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
              className="bg-mystic-darker p-8 rounded-2xl shadow-sm border border-mystic-gold/10 hover:border-mystic-gold/50 hover:shadow-[0_0_15px_rgba(212,175,55,0.15)] transition-all group"
            >
              <Target className="w-10 h-10 text-mystic-gold mb-6 group-hover:scale-110 transition-transform drop-shadow-[0_0_10px_rgba(212,175,55,0.8)]" />
              <h3 className="font-serif text-2xl text-mystic-light mb-3">Misión</h3>
              <p className="text-sm text-mystic-muted/80 leading-relaxed">
                Empoderar a nuestros creadores locales proporcionando una plataforma justa y digna, asegurando que su arte auténtico alcance al mundo, preservando a su vez el conocimiento ancestral.
              </p>
            </motion.div>

            <motion.div
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
              className="bg-mystic-darker p-8 rounded-2xl shadow-sm border border-mystic-gold/10 hover:border-mystic-gold/50 hover:shadow-[0_0_15px_rgba(212,175,55,0.15)] transition-all group"
            >
              <Eye className="w-10 h-10 text-mystic-gold mb-6 group-hover:scale-110 transition-transform drop-shadow-[0_0_10px_rgba(212,175,55,0.8)]" />
              <h3 className="font-serif text-2xl text-mystic-light mb-3">Visión</h3>
              <p className="text-sm text-mystic-muted/80 leading-relaxed">
                Ser el epicentro cultural más admirado de Latinoamérica, donde el arte contemporáneo y el legado milenario convergen para inspirar a futuras generaciones.
              </p>
            </motion.div>

            <motion.div
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
              className="bg-mystic-darker p-8 rounded-2xl shadow-sm border border-mystic-gold/10 hover:border-mystic-gold/50 hover:shadow-[0_0_15px_rgba(212,175,55,0.15)] transition-all group sm:col-span-2"
            >
              <Heart className="w-10 h-10 text-mystic-gold mb-6 group-hover:scale-110 transition-transform drop-shadow-[0_0_10px_rgba(212,175,55,0.8)]" />
              <h3 className="font-serif text-2xl text-mystic-light mb-4">Valores</h3>
              <div className="flex flex-wrap gap-3">
                {['Autenticidad', 'Comercio Justo', 'Respeto Cultural', 'Excelencia', 'Sostenibilidad'].map(val => (
                  <span key={val} className="px-4 py-2 bg-mystic-dark border border-mystic-gold/20 rounded-full text-sm text-mystic-light/90 font-medium tracking-wide shadow-sm inset-shadow-xs">
                    {val}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>

        </div>

        {/* Featured Artisans Section */}
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
                <span className="text-sm font-medium uppercase tracking-widest">Nuestra Gente</span>
              </div>
              <h3 className="font-serif text-3xl md:text-4xl text-mystic-light">
                Manos que <span className="italic text-mystic-gold">Crean Magia</span>
              </h3>
            </motion.div>
            <motion.p
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.2 }}
               className="text-mystic-muted/80 max-w-md font-light"
            >
              Conoce el rostro detrás del arte. Detrás de cada pieza extraordinaria existe una vida dedicada al perfeccionamiento de una técnica milenaria.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {featuredArtisans.map((artisan, index) => (
                <motion.div
                   key={index}
                   initial={{ opacity: 0, y: 30 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: 0.1 * index }}
                   className="group relative rounded-2xl overflow-hidden border border-mystic-gold/10 hover:border-mystic-gold/30 transition-all bg-mystic-darker"
                >
                   <div className="w-full h-64 overflow-hidden relative">
                      <div className="absolute inset-0 bg-mystic-dark/40 group-hover:bg-transparent transition-colors duration-500 z-10" />
                      <img 
                        src={artisan.image} 
                        alt={artisan.name} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale group-hover:grayscale-0"
                      />
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

        {/* Gallery Carousel Section */}
        <div className="mt-32 pb-12 overflow-hidden">
          <div className="mb-12 flex flex-col items-center text-center">
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="inline-flex items-center gap-2 px-3 py-1 bg-mystic-gold/10 border border-mystic-gold/20 rounded-full text-mystic-gold text-sm font-medium mb-4"
            >
              <Camera className="w-4 h-4" />
              <span>Detrás de la Magia</span>
            </motion.div>
            <motion.h3 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.1 }}
               className="font-serif text-3xl md:text-4xl text-mystic-light"
            >
              El Arte en <span className="italic text-mystic-gold">Proceso</span>
            </motion.h3>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="w-full relative"
          >
            {/* Carousel Container */}
            <div 
              className="flex gap-6 overflow-x-auto pb-8 pt-4 px-4 sm:px-0 snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              {artisanWorkImages.map((img, idx) => (
                <div 
                  key={idx} 
                  className="relative flex-none w-[85vw] sm:w-[45vw] md:w-[400px] h-[450px] snap-center rounded-2xl overflow-hidden group shadow-[0_0_20px_rgba(212,175,55,0.05)] border border-mystic-gold/10"
                >
                  <div className="absolute inset-0 bg-mystic-dark/40 group-hover:bg-mystic-dark/10 transition-colors duration-500 z-10" />
                  <img 
                    src={img} 
                    alt={`Artesano trabajando ${idx + 1}`} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                  />
                  {/* Decorative corner accents */}
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