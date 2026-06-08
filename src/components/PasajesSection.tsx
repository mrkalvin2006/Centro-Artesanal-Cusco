import React, { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import {
  Search,
  Map as MapIcon,
  AppWindow,
  MapPin,
  Palette,
  X,
  Store,
  Image as ImageIcon,
} from 'lucide-react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl:
    'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl:
    'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const centerLat = -13.5226;
const centerLng = -71.9706;

const referenceImages = [
  'https://images.unsplash.com/photo-1580665971489-3dfccc07ce71?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1526392060635-9d60198d3fe3?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1587595431973-160d0d94add1?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1544928147-79a2dbc1f389?q=80&w=1200&auto=format&fit=crop',
];

const pasajesBase = [
  { id: 1, name: 'Calle Tullumayo', stands: 31 },
  { id: 2, name: 'Calle Pachacuteq', stands: 8 },
  { id: 3, name: 'Calle Inti Raymi', stands: 19 },
  { id: 4, name: 'Calle Inti Huatana', stands: 11 },
  { id: 5, name: 'Pasaje Tambomachay I', stands: 10 },
  { id: 6, name: 'Pasaje Tambomachay II', stands: 10 },
  { id: 7, name: 'Pasaje Tambomachay III', stands: 6 },
  { id: 8, name: 'Pasaje Machupicchu I', stands: 19 },
  { id: 9, name: 'Pasaje Machupicchu II', stands: 18 },
  { id: 10, name: 'Pasaje Machupicchu III', stands: 12 },
  { id: 11, name: 'Pasaje Choquequirao I', stands: 16 },
  { id: 12, name: 'Pasaje Choquequirao II', stands: 15 },
  { id: 13, name: 'Pasaje Choquequirao III', stands: 8 },
  { id: 14, name: 'Pasaje Ollantaytambo I', stands: 16 },
  { id: 15, name: 'Pasaje Ollantaytambo II', stands: 15 },
  { id: 16, name: 'Pasaje Ollantaytambo III', stands: 8 },
  { id: 17, name: 'Pasaje Sacsayhuaman I', stands: 10 },
  { id: 18, name: 'Pasaje Sacsayhuaman II', stands: 18 },
  { id: 19, name: 'Pasaje Sacsayhuaman III', stands: 12 },
  { id: 20, name: 'Pasaje Qoricancha II', stands: 19 },
  { id: 21, name: 'Pasaje Qoricancha III', stands: 6 },
  { id: 22, name: 'Pasaje Riqchary Wayna', stands: 10 },
  { id: 23, name: 'Calle Hatun Qosqo', stands: 14 },
  { id: 24, name: 'Calle Qapaq Ñan', stands: 30 },
];

const pasajes = pasajesBase.map((pasaje, i) => {
  const row = Math.floor(i / 6);
  const col = i % 6;
  const lat = centerLat + (row - 1.5) * 0.00015;
  const lng = centerLng + (col - 2.5) * 0.00015;

  return {
    ...pasaje,
    description: `${pasaje.stands} stands · Artesanía variada`,
    image: referenceImages[i % referenceImages.length],
    position: [lat, lng] as [number, number],
  };
});

type Pasaje = (typeof pasajes)[number];

const stats = [
  { icon: AppWindow, title: 'Más de', val: '360 Stands' },
  { icon: Palette, title: 'Más de', val: '1000 Artesanos' },
  { icon: MapPin, title: 'Ubicados en el', val: 'Corazón de Cusco' },
];

function MapController({ activeId }: { activeId: number | null }) {
  const map = useMap();

  useEffect(() => {
    if (activeId !== null) {
      const activePasaje = pasajes.find((p) => p.id === activeId);

      if (activePasaje) {
        map.setView(activePasaje.position, 19, { animate: true });
      }
    } else {
      map.setView([centerLat, centerLng], 18, { animate: true });
    }
  }, [activeId, map]);

  return null;
}

export function PasajesSection() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activePasaje, setActivePasaje] = useState<number | null>(null);
  const [selectedPasaje, setSelectedPasaje] = useState<Pasaje | null>(null);

  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ['20%', '-20%']);

  const filteredPasajes = pasajes.filter((p) =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const openPasaje = (pasaje: Pasaje) => {
    setActivePasaje(pasaje.id);
    setSelectedPasaje(pasaje);
  };

  const closeModal = () => {
    setSelectedPasaje(null);
  };

  return (
    <section
      ref={ref}
      id="pasajes"
      className="py-24 bg-mystic-dark relative overflow-hidden"
    >
      <motion.div
        style={{ y: yBg }}
        className="absolute top-0 right-0 w-1/3 h-[150%] bg-mystic-gold/5 rounded-l-full blur-3xl transform translate-x-1/2 pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <motion.div
            className="max-w-2xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-4xl md:text-5xl text-mystic-light mb-4">
              Nuestros <span className="italic text-mystic-gold">Pasajes</span>
            </h2>

            <p className="text-mystic-muted/70 text-lg">
              Explora nuestros pasajes, calles y corredores llenos de historia,
              color y arte cusqueño. Cada espacio reúne artesanos y productos
              únicos del Centro Artesanal Cusco.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-shrink-0"
          >
            <div className="relative">
              <input
                type="text"
                placeholder="Buscar pasaje..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-3 bg-mystic-gray border border-mystic-gold/20 rounded-full w-full md:w-72 focus:outline-none focus:border-mystic-gold shadow-sm relative z-20 text-mystic-light"
              />

              <Search className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-mystic-muted/40 z-20" />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="bg-mystic-darker rounded-xl border border-mystic-gold/20 shadow-[0_0_30px_rgba(212,175,55,0.05)] p-6 md:p-8 grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 relative z-20"
        >
          {stats.map((stat, idx) => (
            <div key={idx} className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full border border-mystic-gold/50 bg-mystic-gold/10 flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(212,175,55,0.3)]">
                <stat.icon className="w-6 h-6 text-mystic-gold" />
              </div>

              <div>
                <p className="text-sm text-mystic-muted/60">{stat.title}</p>
                <p className="font-serif font-medium text-mystic-light text-xl">
                  {stat.val}
                </p>
              </div>
            </div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mb-12">
          {filteredPasajes.map((pasaje, idx) => {
            const isActive = activePasaje === pasaje.id;

            return (
              <motion.button
                type="button"
                key={pasaje.id}
                onClick={() => openPasaje(pasaje)}
                initial={{ opacity: 0, y: 20, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{
                  delay: (idx % 4) * 0.06,
                  duration: 0.45,
                  ease: 'easeOut',
                }}
                whileHover={{ scale: 1.03, y: -4 }}
                className={`group cursor-pointer rounded-2xl border p-5 text-left transition-all shadow-sm hover:shadow-xl ${
                  isActive
                    ? 'bg-mystic-gold border-mystic-gold text-black'
                    : 'bg-mystic-gray border-mystic-gold/10 hover:border-mystic-gold/40'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`w-11 h-11 rounded-full flex items-center justify-center font-serif font-bold shrink-0 ${
                      isActive
                        ? 'bg-black/15 text-black'
                        : 'bg-mystic-gold/10 text-mystic-gold'
                    }`}
                  >
                    {pasaje.id}
                  </div>

                  <div>
                    <h3
                      className={`font-serif text-lg leading-tight mb-2 ${
                        isActive ? 'text-black' : 'text-mystic-light'
                      }`}
                    >
                      {pasaje.name}
                    </h3>

                    <p
                      className={`text-sm ${
                        isActive ? 'text-black/75' : 'text-mystic-muted/70'
                      }`}
                    >
                      {pasaje.stands} stands
                    </p>

                    <p
                      className={`text-xs mt-1 ${
                        isActive ? 'text-black/65' : 'text-mystic-gold'
                      }`}
                    >
                      Artesanía variada
                    </p>
                  </div>
                </div>
              </motion.button>
            );
          })}
        </div>

        {filteredPasajes.length === 0 && (
          <div className="text-center py-12 text-mystic-muted/50 mb-12">
            No se encontraron pasajes con esa búsqueda.
          </div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl overflow-hidden border border-mystic-gold/20 shadow-[0_0_30px_rgba(212,175,55,0.1)] h-[500px] relative z-20"
        >
          <MapContainer
            center={[centerLat, centerLng]}
            zoom={18}
            scrollWheelZoom={false}
            className="w-full h-full bg-mystic-gray"
          >
            <TileLayer
              attribution="&copy; OpenStreetMap contributors"
              url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
            />

            {pasajes.map((pasaje) => (
              <Marker
                key={pasaje.id}
                position={pasaje.position}
                eventHandlers={{
                  click: () => openPasaje(pasaje),
                }}
              >
                <Popup className="font-sans">
                  <div className="text-center p-1">
                    <h3 className="font-serif font-bold text-lg mb-1">
                      {pasaje.name}
                    </h3>

                    <p className="text-sm text-gray-600 m-0">
                      {pasaje.description}
                    </p>
                  </div>
                </Popup>
              </Marker>
            ))}

            <MapController activeId={activePasaje} />
          </MapContainer>
        </motion.div>

        <div className="mt-12 text-center">
          <motion.a
            href="#ubicacion"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-3 bg-mystic-gray hover:bg-mystic-black text-white rounded-full font-medium transition-all duration-300 relative z-20 hover:shadow-[0_0_20px_rgba(212,175,55,0.5)] border border-transparent hover:border-mystic-gold/50"
          >
            <MapIcon className="w-5 h-5" />
            Ver ubicación general
          </motion.a>
        </div>
      </div>

      <AnimatePresence>
        {selectedPasaje && (
          <motion.div
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/75 p-4 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="relative w-full max-w-4xl overflow-hidden rounded-3xl border border-mystic-gold/30 bg-mystic-darker shadow-2xl"
              initial={{ opacity: 0, scale: 0.92, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 30 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={closeModal}
                className="absolute right-4 top-4 z-20 rounded-full bg-black/60 p-3 text-white backdrop-blur transition-all hover:bg-mystic-gold hover:text-black"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="relative h-72 md:h-full min-h-[360px] overflow-hidden">
                  <img
                    src={selectedPasaje.image}
                    alt={selectedPasaje.name}
                    className="h-full w-full object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />

                  <div className="absolute bottom-5 left-5 flex items-center gap-2 rounded-full bg-black/55 px-4 py-2 text-sm text-mystic-gold backdrop-blur">
                    <ImageIcon className="h-4 w-4" />
                    Imagen referencial
                  </div>
                </div>

                <div className="p-7 md:p-9">
                  <p className="mb-3 text-sm uppercase tracking-[0.3em] text-mystic-gold">
                    Centro Artesanal Cusco
                  </p>

                  <h3 className="font-serif text-4xl text-white mb-5">
                    {selectedPasaje.name}
                  </h3>

                  <p className="text-mystic-muted/80 leading-relaxed mb-7">
                    Espacio dedicado a la exposición y venta de artesanía
                    variada, donde visitantes y turistas pueden encontrar
                    productos con identidad cultural cusqueña.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                    <div className="rounded-2xl border border-mystic-gold/20 bg-mystic-dark p-5">
                      <Store className="mb-3 h-7 w-7 text-mystic-gold" />
                      <p className="text-3xl font-serif text-white">
                        {selectedPasaje.stands}
                      </p>
                      <p className="text-sm text-mystic-muted/70">stands</p>
                    </div>

                    <div className="rounded-2xl border border-mystic-gold/20 bg-mystic-dark p-5">
                      <Palette className="mb-3 h-7 w-7 text-mystic-gold" />
                      <p className="font-serif text-xl text-white">
                        Artesanía
                      </p>
                      <p className="text-sm text-mystic-muted/70">variada</p>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href="#ubicacion"
                      onClick={closeModal}
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-mystic-gold px-6 py-3 font-bold text-black transition-all hover:scale-105"
                    >
                      <MapPin className="h-5 w-5" />
                      Ver ubicación
                    </a>

                    <button
                      type="button"
                      onClick={closeModal}
                      className="inline-flex items-center justify-center rounded-full border border-mystic-gold/30 px-6 py-3 font-bold text-mystic-gold transition-all hover:bg-mystic-gold hover:text-black"
                    >
                      Cerrar
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}