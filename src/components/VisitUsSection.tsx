import { MapPin, Clock, Phone, Navigation } from 'lucide-react';
import { motion } from 'motion/react';
import { DISPLAY_PHONE } from '../lib/contact';

export function VisitUsSection() {
  const googleMapsUrl = 'https://maps.google.com/?q=Centro+Artesanal+Cusco';
  const phone = DISPLAY_PHONE;

  return (
    <section id="ubicacion" className="py-24 bg-mystic-darker relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.12),transparent_35%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <p className="text-mystic-gold uppercase tracking-[0.3em] text-sm mb-4">
            Visitanos
          </p>

          <h2 className="font-serif text-4xl md:text-5xl text-white mb-5">
            Centro Artesanal <span className="italic text-mystic-gold">Cusco</span>
          </h2>

          <p className="text-mystic-muted/80 text-lg">
            Encuentra arte, cultura, tradicion y productos unicos en el corazon de la ciudad imperial.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-mystic-dark border border-mystic-gold/20 rounded-3xl p-8 shadow-2xl"
          >
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-mystic-gold/10 border border-mystic-gold/30 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-mystic-gold" />
                </div>

                <div>
                  <h3 className="text-white font-serif text-xl mb-1">Direccion</h3>
                  <p className="text-mystic-muted/80">
                    Centro Artesanal Cusco<br />
                    Cusco - Peru
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-mystic-gold/10 border border-mystic-gold/30 flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6 text-mystic-gold" />
                </div>

                <div>
                  <h3 className="text-white font-serif text-xl mb-1">Horario de atencion</h3>
                  <p className="text-mystic-muted/80">
                    Lunes a Domingo<br />
                    08:00 a.m. - 08:00 p.m.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-mystic-gold/10 border border-mystic-gold/30 flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-mystic-gold" />
                </div>

                <div>
                  <h3 className="text-white font-serif text-xl mb-1">Contacto</h3>
                  <p className="text-mystic-muted/80">{phone}</p>
                </div>
              </div>
            </div>

            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-mystic-gold px-8 py-4 font-bold text-black transition-all hover:scale-105 hover:bg-mystic-gold-light"
            >
              <Navigation className="w-5 h-5" />
              Ver en Google Maps
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl overflow-hidden border border-mystic-gold/20 min-h-[420px] shadow-2xl"
          >
            <iframe
              title="Ubicacion Centro Artesanal Cusco"
              src="https://www.google.com/maps?q=Centro%20Artesanal%20Cusco&output=embed"
              className="w-full h-full min-h-[420px] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
