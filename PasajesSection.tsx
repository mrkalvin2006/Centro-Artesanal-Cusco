import React from 'react';
import { MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react';
import { motion } from 'motion/react';

export function Footer() {
  return (
    <footer id="mapa" className="bg-mystic-black text-white/70 pt-20 pb-10 border-t border-mystic-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16"
        >
          
          {/* Brand */}
          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full overflow-hidden flex items-center justify-center border-2 border-mystic-gold/50">
                <img src="https://storage.googleapis.com/macha-dev-c76b85d/283457011245/78f47eb3-aff4-4f06-84dc-a7d316ee63d5/e7816196-1934-45fb-a524-7bd06cece3ba" alt="Logo" className="w-[120%] h-[120%] object-cover object-center" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-bold text-lg leading-none text-white tracking-widest">CENTRO</span>
                <span className="font-serif text-xl leading-none text-mystic-gold mt-1 tracking-wider">ARTESANAL</span>
              </div>
            </div>
            <p className="text-sm mb-6 max-w-xs leading-relaxed">
              El corazón del arte y la cultura viva del Cusco. Visítanos y descubre la magia de nuestras manos artesanas.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-mystic-gray/5 flex items-center justify-center hover:bg-mystic-gold transition-colors text-white">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-mystic-gray/5 flex items-center justify-center hover:bg-mystic-gold transition-colors text-white">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Mapa del sitio */}
          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
            <h3 className="font-serif text-white text-lg mb-6 tracking-wide">Mapa del Sitio</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#inicio" className="hover:text-mystic-gold transition-colors">Inicio</a></li>
              <li><a href="#nosotros" className="hover:text-mystic-gold transition-colors">Nuestra Historia</a></li>
              <li><a href="#pasajes" className="hover:text-mystic-gold transition-colors">Directorio de Pasajes</a></li>
              <li><a href="#categorias" className="hover:text-mystic-gold transition-colors">Categorías de Arte</a></li>
              <li><a href="#mapa" className="hover:text-mystic-gold transition-colors">Ubicación y Contacto</a></li>
            </ul>
          </motion.div>

          {/* Enlaces */}
          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
            <h3 className="font-serif text-white text-lg mb-6 tracking-wide">Categorías</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-mystic-gold transition-colors">Textiles Místicos</a></li>
              <li><a href="#" className="hover:text-mystic-gold transition-colors">Orfebrería Fina</a></li>
              <li><a href="#" className="hover:text-mystic-gold transition-colors">Cerámicas</a></li>
              <li><a href="#" className="hover:text-mystic-gold transition-colors">Baby Alpaca</a></li>
              <li><a href="#" className="hover:text-mystic-gold transition-colors">Pinturas Escuela Cusqueña</a></li>
            </ul>
          </motion.div>

          {/* Contacto */}
          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
            <h3 className="font-serif text-white text-lg mb-6 tracking-wide">Contáctanos</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-mystic-gold shrink-0 mt-0.5" />
                <span>Esq. Av. El Sol con Av. Tullumayo,<br />Cusco, Perú</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-mystic-gold shrink-0" />
                <span>+51 987 654 321</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-mystic-gold shrink-0" />
                <span>contacto@centroartesanalcusco.com</span>
              </li>
            </ul>
          </motion.div>

        </motion.div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/40">
          <p>&copy; {new Date().getFullYear()} Centro Artesanal Cusco. Todos los derechos reservados.</p>
          <div className="flex gap-6">
             <a href="#" className="hover:text-white transition-colors">Políticas de Privacidad</a>
             <a href="#" className="hover:text-white transition-colors">Términos y Condiciones</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
