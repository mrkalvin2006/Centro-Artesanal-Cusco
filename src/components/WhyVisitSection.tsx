import { motion } from 'motion/react';
import { Palette, Shirt, Gem, Gift } from 'lucide-react';

const items = [
  {
    icon: Palette,
    title: 'Artesanía auténtica',
    text: 'Productos hechos por manos cusqueñas, con identidad, historia y tradición.',
  },
  {
    icon: Shirt,
    title: 'Textiles andinos',
    text: 'Encuentra tejidos, prendas y piezas inspiradas en la cultura peruana.',
  },
  {
    icon: Gem,
    title: 'Joyería y arte',
    text: 'Piezas únicas en joyería, cerámica, tallados y arte decorativo.',
  },
  {
    icon: Gift,
    title: 'Souvenirs únicos',
    text: 'Recuerdos especiales para turistas y visitantes del Cusco.',
  },
];

export function WhyVisitSection() {
  return (
    <section className="relative bg-mystic-darker py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(212,175,55,0.12),transparent_35%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-mystic-gold uppercase tracking-[0.3em] text-sm mb-4">
            Experiencia cultural
          </p>

          <h2 className="font-serif text-4xl md:text-5xl text-white mb-5">
            ¿Por qué <span className="italic text-mystic-gold">visitarnos?</span>
          </h2>

          <p className="text-mystic-muted/80 text-lg">
            El Centro Artesanal Cusco reúne tradición, arte y cultura viva en un solo lugar.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
          {items.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="group rounded-3xl border border-mystic-gold/15 bg-mystic-dark p-7 hover:border-mystic-gold/50 hover:-translate-y-2 transition-all duration-300"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full border border-mystic-gold/30 bg-mystic-gold/10 group-hover:bg-mystic-gold transition-all">
                <item.icon className="h-7 w-7 text-mystic-gold group-hover:text-black" />
              </div>

              <h3 className="font-serif text-2xl text-white mb-3">
                {item.title}
              </h3>

              <p className="text-sm leading-relaxed text-mystic-muted/80">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}