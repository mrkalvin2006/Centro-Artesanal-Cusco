import React, { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Search, Map as MapIcon, AppWindow, MapPin, Palette } from 'lucide-react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix typical leaflet marker icon issue in React
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const totalPasajes = 24;
// Approximation of Centro Artesanal bounds to spread the markers
const centerLat = -13.5226;
const centerLng = -71.9706;

const pasajes = Array.from({ length: totalPasajes }, (_, i) => {
  // Simple grid distribution for 24 markers
  const row = Math.floor(i / 6);
  const col = i % 6;
  const lat = centerLat + (row - 1.5) * 0.00015;
  const lng = centerLng + (col - 2.5) * 0.00015;
  return {
    id: i + 1,
    name: `Pasaje ${i + 1}`,
    description: "Artesanías y cultura viva",
    position: [lat, lng] as [number, number],
  };
});

const stats = [
  { icon: AppWindow, title: "Más de", val: "360 Stands" },
  { icon: Palette, title: "Más de", val: "1000 Artesanos" },
  { icon: MapPin, title: "Ubicados en el", val: "Corazón de Cusco" },
];

function MapController({ activeId }: { activeId: number | null }) {
  const map = useMap();
  useEffect(() => {
    if (activeId !== null) {
      const activePasaje = pasajes.find(p => p.id === activeId);
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
  const [searchTerm, setSearchTerm] = useState("");
  const [activePasaje, setActivePasaje] = useState<number | null>(null);
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const yBg = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);

  const filteredPasajes = pasajes.filter(p => p.name.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <section ref={ref} id="pasajes" className="py-24 bg-mystic-dark relative overflow-hidden">
      {/* Decorative bg element */}
      <motion.div 
        style={{ y: yBg }}
        className="absolute top-0 right-0 w-1/3 h-[150%] bg-mystic-gold/5 rounded-l-full blur-3xl transform translate-x-1/2 pointer-events-none"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <motion.div 
            className="max-w-2xl"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.3 } }
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.8 }}
          >
            <motion.h2 
              variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
              className="font-serif text-4xl md:text-5xl text-mystic-light mb-4"
            >
              Nuestros <span className="italic text-mystic-gold">Pasajes</span>
            </motion.h2>
            <motion.p 
              variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
              className="text-mystic-muted/70 text-lg"
            >
              Explora nuestros 24 pasajes llenos de historia, color y el mejor arte cusqueño. Cada pasaje ofrece una experiencia única.
            </motion.p>
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
                className="pl-10 pr-4 py-3 bg-mystic-gray border border-mystic-gold/20 rounded-full w-full md:w-64 focus:outline-none focus:border-mystic-gold shadow-sm relative z-20"
              />
              <Search className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-mystic-muted/40 z-20" />
            </div>
          </motion.div>
        </div>

        {/* Stats Section Integrated */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="bg-mystic-darker rounded-xl border border-mystic-gold/20 shadow-[0_0_30px_rgba(212,175,55,0.05)] hover:shadow-[0_0_30px_rgba(212,175,55,0.1)] transition-all p-6 md:p-8 grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 relative z-20"
        >
          {stats.map((stat, idx) => (
            <div key={idx} className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full border border-mystic-gold/50 bg-mystic-gold/10 flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(212,175,55,0.3)]">
                <stat.icon className="w-6 h-6 text-mystic-gold drop-shadow-[0_0_8px_rgba(212,175,55,1)]" />
              </div>
              <div>
                <p className="text-sm text-mystic-muted/60">{stat.title}</p>
                <p className="font-serif font-medium text-mystic-light text-xl">{stat.val}</p>
              </div>
            </div>
          ))}
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-12">
          {filteredPasajes.map((pasaje, idx) => {
            const isActive = activePasaje === pasaje.id;
            return (
            <motion.div
              key={pasaje.id}
              onClick={() => setActivePasaje(isActive ? null : pasaje.id)}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: (idx % 6) * 0.1, duration: 0.5, ease: "easeOut" }}
              whileHover={{ scale: 1.05, y: -5 }}
              className={`group cursor-pointer p-6 rounded-xl border transition-all text-center flex flex-col items-center justify-center gap-2 shadow-sm hover:shadow-xl ${
                isActive 
                  ? 'bg-mystic-gold border-mystic-gold text-white' 
                  : 'bg-mystic-gray border-mystic-gold/10 hover:border-mystic-gold/40'
              }`}
            >
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-serif font-bold transition-colors duration-300 transform group-hover:rotate-12 ${
                isActive
                  ? 'bg-mystic-gray/20 text-white'
                  : 'bg-mystic-gold/10 text-mystic-gold group-hover:bg-mystic-gold group-hover:text-white'
              }`}>
                {pasaje.id}
              </div>
              <span className={`font-medium ${isActive ? 'text-white' : 'text-mystic-light'}`}>
                {pasaje.name}
              </span>
            </motion.div>
          )})}
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
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
            />
            {pasajes.map(pasaje => (
              <Marker 
                key={pasaje.id} 
                position={pasaje.position}
                eventHandlers={{
                  click: () => setActivePasaje(pasaje.id),
                }}
              >
                <Popup className="font-sans">
                  <div className="text-center p-1">
                    <h3 className="font-serif font-bold text-lg mb-1">{pasaje.name}</h3>
                    <p className="text-sm text-gray-600 m-0">{pasaje.description}</p>
                  </div>
                </Popup>
              </Marker>
            ))}
            <MapController activeId={activePasaje} />
          </MapContainer>
        </motion.div>

        <div className="mt-12 text-center">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-3 bg-mystic-gray hover:bg-mystic-black text-white rounded-full font-medium transition-all duration-300 relative z-20 hover:shadow-[0_0_20px_rgba(212,175,55,0.5)] border border-transparent hover:border-mystic-gold/50"
          >
            <MapIcon className="w-5 h-5" />
            Explorar en pantalla completa
          </motion.button>
        </div>
      </div>
    </section>
  );
}
