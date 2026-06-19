import React from 'react';
import { Camera } from 'lucide-react';
import { motion } from 'motion/react';
// IMPORTAMOS EL TRADUCTOR
import { useLanguage } from '../lib/LanguageContext';

// 1. Lista de los 15 Rubros
const rubrosList = [
  'Textiles Andinos', 'Joyería Artesanal', 'Cerámica Cusqueña', 'Souvenirs',
  'Tallados en Madera', 'Platería', 'Peletería', 'Pinturas y Cuadros',
  'Instrumentos Musicales', 'Bisutería', 'Retablos', 'Marroquinería',
  'Alpaca y Vicuña', 'Máscaras', 'Antigüedades'
];

// 2. Fotos de alta calidad de muestra (se repetirán para simular las 45)
const sampleImages = [
  'https://images.unsplash.com/photo-1544928147-79a2dbc1f389?q=80&w=600',
  'https://images.unsplash.com/photo-1509616788574-8d48bccaab08?q=80&w=600',
  'https://images.unsplash.com/photo-1610701596007-11502861dcfa?q=80&w=600',
  'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=600',
  'https://images.unsplash.com/photo-1610086812822-0fcde3f5509e?q=80&w=600',
  'https://images.unsplash.com/photo-1531604250646-2f0e818c4f06?q=80&w=600'
];

// 3. Generador: Crea 45 tarjetas (15 rubros x 3 fotos)
const galleryItems = rubrosList.flatMap((rubro, i) => 
  Array.from({ length: 3 }).map((_, j) => ({
    id: `${i}-${j}`,
    rubro,
    image: sampleImages[(i * 3 + j) % sampleImages.length]
  }))
);

// 4. Dividimos en dos filas
const row1 = galleryItems.slice(0, 22);
const row2 = galleryItems.slice(22, 45);

export function PremiumGallery() {
  // INICIALIZAMOS EL TRADUCTOR
  const { t } = useLanguage();

  return (
    // ASIGNAMOS EL ID "galeria" AQUÍ
    <section id="galeria" className="py-32 bg-black relative overflow-hidden border-t border-mystic-gold/10">
      
      {/* Estilos para la animación infinita */}
      <style>{`
        .slider-track-left {
          display: flex;
          width: max-content;
          animation: slideLeft 50s linear infinite;
        }
        .slider-track-right {
          display: flex;
          width: max-content;
          animation: slideRight 50s linear infinite;
        }
        /* Pausar al pasar el mouse */
        .slider-track-left:hover, .slider-track-right:hover {
          animation-play-state: paused;
        }
        @keyframes slideLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes slideRight {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}</style>

      {/* CABECERA */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 text-mystic-gold text-sm font-medium tracking-widest uppercase mb-4"
        >
          <Camera className="w-4 h-4" />
          {/* TEXTO TRADUCIDO */}
          <span>{t('galleryBadge')}</span>
        </motion.div>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-serif text-5xl md:text-6xl text-mystic-light mb-6 tracking-wide"
        >
          {/* TEXTOS TRADUCIDOS */}
          {t('galleryTitleTop')} <span className="italic text-mystic-gold font-light">{t('galleryTitleBottom')}</span>
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-mystic-muted/80 max-w-3xl mx-auto font-light"
        >
          {/* TEXTO TRADUCIDO */}
          {t('galleryDesc')}
        </motion.p>
      </div>

      {/* CONTENEDOR DE LAS FILAS CON EFECTO DIFUMINADO EN LOS BORDES */}
      <div className="relative w-full flex flex-col gap-6 overflow-hidden">
        
        {/* Degradados negros a los lados para que las fotos desaparezcan suavemente */}
        <div className="absolute top-0 bottom-0 left-0 w-24 md:w-48 bg-gradient-to-r from-black via-black/80 to-transparent z-20 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-24 md:w-48 bg-gradient-to-l from-black via-black/80 to-transparent z-20 pointer-events-none" />

        {/* FILA 1: Movimiento hacia la Izquierda */}
        <div className="flex overflow-hidden relative group/row">
          <div className="slider-track-left gap-6 px-3">
            {/* Se duplica el array [...row1, ...row1] para lograr el bucle sin cortes */}
            {[...row1, ...row1].map((item, idx) => (
              <div 
                key={`r1-${idx}`} 
                className="relative w-72 h-48 md:w-96 md:h-64 rounded-2xl overflow-hidden group cursor-pointer flex-shrink-0 border border-mystic-gold/10 shadow-2xl"
              >
                <img 
                  src={item.image} 
                  alt={item.rubro} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-60 group-hover:opacity-100" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 group-hover:opacity-60 transition-opacity duration-500" />
                
                <div className="absolute bottom-6 left-6 right-6 z-20 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="font-serif text-mystic-gold text-xl md:text-2xl mb-1">{item.rubro}</h3>
                  <div className="w-8 h-[1px] bg-mystic-gold/50 group-hover:w-16 transition-all duration-500" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FILA 2: Movimiento hacia la Derecha */}
        <div className="flex overflow-hidden relative group/row">
          <div className="slider-track-right gap-6 px-3">
            {[...row2, ...row2].map((item, idx) => (
              <div 
                key={`r2-${idx}`} 
                className="relative w-72 h-48 md:w-96 md:h-64 rounded-2xl overflow-hidden group cursor-pointer flex-shrink-0 border border-mystic-gold/10 shadow-2xl"
              >
                <img 
                  src={item.image} 
                  alt={item.rubro} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-60 group-hover:opacity-100" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 group-hover:opacity-60 transition-opacity duration-500" />
                
                <div className="absolute bottom-6 left-6 right-6 z-20 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="font-serif text-mystic-gold text-xl md:text-2xl mb-1">{item.rubro}</h3>
                  <div className="w-8 h-[1px] bg-mystic-gold/50 group-hover:w-16 transition-all duration-500" />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}