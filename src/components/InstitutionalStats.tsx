import { motion } from 'motion/react';
import { Store, Users, MapPinned, Landmark } from 'lucide-react';

const stats = [
  {
    icon: Store,
    value: '360+',
    label: 'Stands artesanales',
  },
  {
    icon: Users,
    value: '1000+',
    label: 'Artesanos',
  },
  {
    icon: MapPinned,
    value: '24',
    label: 'Pasajes y calles',
  },
  {
    icon: Landmark,
    value: '1',
    label: 'Centro cultural vivo',
  },
];

export function InstitutionalStats() {
  return (
    <section className="relative bg-mystic-dark py-16 border-y border-mystic-gold/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {stats.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="rounded-2xl border border-mystic-gold/20 bg-mystic-darker p-6 text-center shadow-[0_0_25px_rgba(212,175,55,0.06)]"
            >
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-mystic-gold/40 bg-mystic-gold/10">
                <item.icon className="h-7 w-7 text-mystic-gold" />
              </div>

              <p className="font-serif text-4xl text-white mb-2">
                {item.value}
              </p>

              <p className="text-sm text-mystic-muted/80">
                {item.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}