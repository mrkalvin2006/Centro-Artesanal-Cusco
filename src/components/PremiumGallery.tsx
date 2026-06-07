import { motion } from 'motion/react';
import { Image, Camera } from 'lucide-react';

const galleryItems = [
  'Textiles andinos',
  'Joyería artesanal',
  'Cerámica cusqueña',
  'Souvenirs',
  'Tallados',
  'Artesanos',
];

export function PremiumGallery() {
  return (
    <section id="galeria" className="relative bg-mystic-dark py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-mystic-gold mb-4">
            <Camera className="w-5 h-5" />
            <span className="uppercase tracking-[0.3em] text-sm">
              Galería
            </span>
          </div>

          <h2 className="font-serif text-4xl md:text-5xl text-white mb-5">
            Galería <span className="italic text-mystic-gold">Premium</span>
          </h2>

          <p className="text-mystic-muted/80 text-lg">
            Próximamente compartiremos fotografías reales de nuestros pasajes,
            stands, artesanías y visitantes.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="relative h-72 overflow-hidden rounded-3xl border border-mystic-gold/15 bg-mystic-darker group"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.12),transparent_40%)]" />

              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full border border-mystic-gold/30 bg-mystic-gold/10">
                  <Image className="h-8 w-8 text-mystic-gold" />
                </div>

                <h3 className="font-serif text-2xl text-white mb-2">
                  {item}
                </h3>

                <p className="text-sm text-mystic-muted/70">
                  Imagen próximamente
                </p>
              </div>

              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-mystic-gold/5" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}