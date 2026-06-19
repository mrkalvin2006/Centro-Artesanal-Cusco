import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Filter, MessageCircle, MapPin, Store } from 'lucide-react';
import { useLanguage } from '../lib/LanguageContext';

// 1. MOCK DATA: Datos falsos temporales para probar los filtros
const mockStands = [
  { id: 1, name: 'Inca Wasi', artisan: 'María Quispe', rubro: 'Textiles', pasaje: 'Pasaje Inca', image: 'https://images.unsplash.com/photo-1544928147-79a2dbc1f389?q=80&w=400', standNumber: 'A-15' },
  { id: 2, name: 'Manos de Oro', artisan: 'Juan Pérez', rubro: 'Platería', pasaje: 'Pasaje Sol', image: 'https://images.unsplash.com/photo-1509616788574-8d48bccaab08?q=80&w=400', standNumber: 'B-22' },
  { id: 3, name: 'Barro Vivo', artisan: 'Ana Condori', rubro: 'Cerámica', pasaje: 'Pasaje Cóndor', image: 'https://images.unsplash.com/photo-1610701596007-11502861dcfa?q=80&w=400', standNumber: 'C-05' },
  { id: 4, name: 'Colores del Ande', artisan: 'Luis Huamán', rubro: 'Pinturas', pasaje: 'Pasaje Inca', image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=400', standNumber: 'A-18' },
  { id: 5, name: 'Arte Andino', artisan: 'Rosa Lima', rubro: 'Bisutería', pasaje: 'Pasaje Sol', image: 'https://images.unsplash.com/photo-1610086812822-0fcde3f5509e?q=80&w=400', standNumber: 'B-30' },
  { id: 6, name: 'Pieles Cusco', artisan: 'Carlos Yupanqui', rubro: 'Peletería', pasaje: 'Pasaje Cóndor', image: 'https://images.unsplash.com/photo-1531604250646-2f0e818c4f06?q=80&w=400', standNumber: 'C-12' },
];

const rubros = ['Todos', 'Textiles', 'Bisutería', 'Cerámica', 'Tallados', 'Pinturas', 'Platería', 'Peletería', 'Otros'];
const pasajes = ['Todos', 'Pasaje Inca', 'Pasaje Sol', 'Pasaje Cóndor'];

export function DirectorySection() {
  const { t } = useLanguage();
  const [activeRubro, setActiveRubro] = useState('Todos');
  const [activePasaje, setActivePasaje] = useState('Todos');
  const [searchTerm, setSearchTerm] = useState('');

  // Lógica de filtrado
  const filteredStands = mockStands.filter((stand) => {
    const matchRubro = activeRubro === 'Todos' || stand.rubro === activeRubro;
    const matchPasaje = activePasaje === 'Todos' || stand.pasaje === activePasaje;
    const matchSearch = stand.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                        stand.artisan.toLowerCase().includes(searchTerm.toLowerCase());
    return matchRubro && matchPasaje && matchSearch;
  });

  return (
    <section id="directorio" className="py-24 bg-mystic-darker relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Título de la sección */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-mystic-light mb-4">
            Directorio de <span className="italic text-mystic-gold">Artesanos</span>
          </h2>
          <p className="text-mystic-muted max-w-2xl mx-auto">
            Explora nuestros más de 300 stands. Filtra por rubro artesanal o navega por nuestros pasajes.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* COLUMNA IZQUIERDA: FILTROS (Sidebar) */}
          <div className="w-full lg:w-1/4 space-y-8">
            
            {/* Buscador */}
            <div className="bg-mystic-dark p-6 rounded-2xl border border-mystic-gold/20">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-mystic-gold/50" />
                <input
                  type="text"
                  placeholder="Buscar stand o artesano..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-black/50 border border-mystic-gold/30 rounded-lg py-3 pl-10 pr-4 text-white focus:outline-none focus:border-mystic-gold transition-colors"
                />
              </div>
            </div>

            {/* Filtro: Rubros */}
            <div className="bg-mystic-dark p-6 rounded-2xl border border-mystic-gold/20">
              <h3 className="text-mystic-gold font-serif text-xl mb-4 flex items-center gap-2">
                <Filter className="w-5 h-5" /> Rubros
              </h3>
              <div className="flex flex-col gap-2">
                {rubros.map((rubro) => (
                  <button
                    key={rubro}
                    onClick={() => setActiveRubro(rubro)}
                    className={`text-left px-4 py-2 rounded-lg transition-all ${
                      activeRubro === rubro 
                        ? 'bg-mystic-gold text-black font-bold' 
                        : 'text-mystic-light hover:bg-mystic-gold/10 hover:text-mystic-gold'
                    }`}
                  >
                    {rubro}
                  </button>
                ))}
              </div>
            </div>

            {/* Filtro: Pasajes */}
            <div className="bg-mystic-dark p-6 rounded-2xl border border-mystic-gold/20">
              <h3 className="text-mystic-gold font-serif text-xl mb-4 flex items-center gap-2">
                <MapPin className="w-5 h-5" /> Pasajes
              </h3>
              <div className="flex flex-wrap gap-2">
                {pasajes.map((pasaje) => (
                  <button
                    key={pasaje}
                    onClick={() => setActivePasaje(pasaje)}
                    className={`px-4 py-2 text-sm rounded-full transition-all border ${
                      activePasaje === pasaje 
                        ? 'border-mystic-gold bg-mystic-gold/20 text-mystic-gold' 
                        : 'border-white/10 text-mystic-muted hover:border-mystic-gold/50'
                    }`}
                  >
                    {pasaje}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* COLUMNA DERECHA: RESULTADOS (Grid de Cards) */}
          <div className="w-full lg:w-3/4">
            <motion.div layout className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              <AnimatePresence>
                {filteredStands.map((stand) => (
                  <motion.div
                    key={stand.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className="bg-mystic-dark border border-mystic-gold/20 rounded-2xl overflow-hidden hover:border-mystic-gold/50 transition-all group"
                  >
                    {/* Imagen del Stand */}
                    <div className="h-48 overflow-hidden relative">
                      <div className="absolute top-3 right-3 z-10 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-xs text-mystic-gold border border-mystic-gold/30">
                        {stand.rubro}
                      </div>
                      <img 
                        src={stand.image} 
                        alt={stand.name} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                    </div>

                    {/* Info del Stand */}
                    <div className="p-5">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-serif text-xl text-mystic-light">{stand.name}</h4>
                        <span className="flex items-center gap-1 text-sm text-mystic-muted bg-white/5 px-2 py-1 rounded">
                          <Store className="w-3 h-3" /> {stand.standNumber}
                        </span>
                      </div>
                      <p className="text-sm text-mystic-muted/80 mb-4">{stand.artisan}</p>
                      
                      <div className="flex justify-between items-center pt-4 border-t border-white/10">
                        <span className="text-xs text-mystic-gold flex items-center gap-1">
                          <MapPin className="w-3 h-3" /> {stand.pasaje}
                        </span>
                        <button className="flex items-center gap-2 bg-green-600/20 hover:bg-green-600 text-green-500 hover:text-white px-3 py-1.5 rounded-lg text-sm transition-all border border-green-600/30">
                          <MessageCircle className="w-4 h-4" /> Contactar
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

            {/* Mensaje si no hay resultados */}
            {filteredStands.length === 0 && (
              <div className="w-full py-20 text-center border border-dashed border-white/20 rounded-2xl">
                <Search className="w-12 h-12 text-mystic-muted mx-auto mb-4 opacity-50" />
                <h3 className="text-xl text-mystic-light mb-2">No encontramos ningún stand</h3>
                <p className="text-mystic-muted">Intenta cambiar los filtros o tu término de búsqueda.</p>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}