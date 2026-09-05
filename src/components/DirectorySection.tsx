import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, MapPin, MessageCircle, User } from 'lucide-react';
import { useLanguage } from '../lib/LanguageContext';
import { artisans, pasajesList } from '../lib/artisansData';
import { getWhatsAppUrl } from '../lib/contact';

export function DirectorySection() {
  const { t } = useLanguage();
  const [activePasaje, setActivePasaje] = useState('Todos');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredArtisans = useMemo(() => {
    const term = searchTerm.trim().toLowerCase();
    return artisans.filter((artisan) => {
      const matchPasaje = activePasaje === 'Todos' || artisan.pasaje === activePasaje;
      const matchSearch = term === '' || artisan.name.toLowerCase().includes(term);
      return matchPasaje && matchSearch;
    });
  }, [activePasaje, searchTerm]);

  return (
    <section id="directorio" className="py-24 bg-mystic-darker relative border-t border-mystic-gold/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-mystic-light mb-4">
            {t('dirTitleTop')} <span className="italic text-mystic-gold">{t('dirTitleBottom')}</span>
          </h2>
          <p className="text-mystic-muted max-w-2xl mx-auto">
            {t('dirDesc')}
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">

          <div className="w-full lg:w-1/4 space-y-8">

            <div className="bg-mystic-dark p-6 rounded-2xl border border-mystic-gold/20 shadow-lg">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-mystic-gold/50" />
                <input
                  type="text"
                  placeholder={t('dirSearch')}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-black/50 border border-mystic-gold/30 rounded-lg py-3 pl-10 pr-4 text-white placeholder-white/40 focus:outline-none focus:border-mystic-gold focus-visible:ring-2 focus-visible:ring-mystic-gold/50 transition-colors"
                />
              </div>
              <p className="text-xs text-mystic-muted/70 mt-3">
                {filteredArtisans.length} de {artisans.length} artesanos
              </p>
            </div>

            <div className="bg-mystic-dark p-6 rounded-2xl border border-mystic-gold/20 shadow-lg">
              <h3 className="text-mystic-gold font-serif text-xl mb-4 flex items-center gap-2">
                <MapPin className="w-5 h-5" /> {t('dirPasajes')}
              </h3>
              <div className="flex flex-wrap gap-2 max-h-80 overflow-y-auto pr-1">
                {pasajesList.map((pasaje) => (
                  <button
                    key={pasaje}
                    onClick={() => setActivePasaje(pasaje)}
                    className={`px-4 py-2 text-sm rounded-full transition-all border focus-visible:ring-2 focus-visible:ring-mystic-gold/50 ${
                      activePasaje === pasaje
                        ? 'border-mystic-gold bg-mystic-gold/20 text-mystic-gold shadow-md'
                        : 'border-white/10 text-mystic-muted hover:border-mystic-gold/50 hover:text-white'
                    }`}
                  >
                    {pasaje}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="w-full lg:w-3/4">
            <motion.div layout className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
              <AnimatePresence>
                {filteredArtisans.map((artisan) => (
                  <motion.div
                    key={artisan.id}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="bg-mystic-dark border border-mystic-gold/20 rounded-2xl p-5 hover:border-mystic-gold/50 transition-all shadow-lg hover:shadow-mystic-gold/10 flex flex-col gap-3"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 rounded-full bg-mystic-gold/10 border border-mystic-gold/30 flex items-center justify-center shrink-0">
                        <User className="w-5 h-5 text-mystic-gold" />
                      </div>
                      <h4 className="font-serif text-lg text-mystic-light leading-tight">{artisan.name}</h4>
                    </div>

                    <div className="flex justify-between items-center pt-3 border-t border-white/10">
                      <span className="text-xs text-mystic-gold flex items-center gap-1">
                        <MapPin className="w-3 h-3" /> {artisan.pasaje}
                      </span>

                      <a
                        href={getWhatsAppUrl(`Hola, quisiera contactar a ${artisan.name} del Centro Artesanal Cusco.`)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-green-600/20 hover:bg-green-600 text-green-500 hover:text-white px-3 py-1.5 rounded-lg text-sm transition-all border border-green-600/30 focus-visible:ring-2 focus-visible:ring-green-500/50"
                      >
                        <MessageCircle className="w-4 h-4" /> {t('dirBtnContact')}
                      </a>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

            {filteredArtisans.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="w-full py-20 text-center border border-dashed border-white/20 rounded-2xl bg-white/5"
              >
                <Search className="w-12 h-12 text-mystic-muted mx-auto mb-4 opacity-50" />
                <h3 className="text-xl text-mystic-light mb-2">{t('dirNotFoundTitle')}</h3>
                <p className="text-mystic-muted">{t('dirNotFoundDesc')}</p>
              </motion.div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
