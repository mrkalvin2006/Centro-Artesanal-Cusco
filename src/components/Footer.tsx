import React from 'react';
import { MapPin, Phone, Mail, Instagram, Facebook, Link as LinkIcon } from 'lucide-react';
import { motion } from 'motion/react';
import { useLanguage } from '../lib/LanguageContext';

// Ícono SVG personalizado para TikTok
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 1.25.29V9.45a6.27 6.27 0 0 0-1.7-.24 6.33 6.33 0 0 0-6.33 6.33 6.33 6.33 0 0 0 6.33 6.33 6.33 6.33 0 0 0 6.33-6.27v-6.9a8.1 8.1 0 0 0 4.23 1.2V6.44a4.88 4.88 0 0 1-2.02-.24z"/>
  </svg>
);

export function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer id="mapa" className="bg-mystic-darker text-white/70 pt-20 pb-10 border-t border-mystic-gold/20">
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
          
          {/* COLUMNA 1: Brand y Redes Sociales */}
          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full overflow-hidden flex items-center justify-center border-2 border-mystic-gold/50 bg-black p-1">
                {/* 👇 AQUÍ YA ESTÁ REEMPLAZADO POR EL NUEVO LOGO 👇 */}
                <img src="/newlogo.png" alt="Logo" className="w-full h-full object-contain object-center" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-bold text-lg leading-none text-white tracking-widest">CENTRO</span>
                <span className="font-serif text-xl leading-none text-mystic-gold mt-1 tracking-wider">ARTESANAL</span>
              </div>
            </div>
            <p className="text-sm mb-8 max-w-xs leading-relaxed">
              El corazón del arte y la cultura viva del Cusco. Visítanos y descubre la magia de nuestras manos artesanas.
            </p>
            
            {/* NUESTRAS REDES SOCIALES (Integradas en tu diseño) */}
            <div className="flex flex-wrap gap-3">
              <a href="https://www.facebook.com/centroArtesanalcusco" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center hover:bg-mystic-gold hover:border-mystic-gold hover:scale-110 transition-all duration-300 text-white hover:text-black">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/centroartesanaldelcusco/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center hover:bg-mystic-gold hover:border-mystic-gold hover:scale-110 transition-all duration-300 text-white hover:text-black">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.tiktok.com/@centroartesanal_cusco" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center hover:bg-mystic-gold hover:border-mystic-gold hover:scale-110 transition-all duration-300 text-white hover:text-black">
                <TikTokIcon className="w-5 h-5" />
              </a>
              <a href="https://linktr.ee/centroartesanalcusco" target="_blank" rel="noopener noreferrer" title="Linktree" className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center hover:bg-mystic-gold hover:border-mystic-gold hover:scale-110 transition-all duration-300 text-white hover:text-black">
                <LinkIcon className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* COLUMNA 2: Mapa del sitio actualizado con el traductor */}
          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
            <h3 className="font-serif text-white text-lg mb-6 tracking-wide">Mapa del Sitio</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#inicio" className="hover:text-mystic-gold transition-colors">{t('navInicio' as any)}</a></li>
              <li><a href="#nosotros" className="hover:text-mystic-gold transition-colors">{t('navHistoria' as any)}</a></li>
              <li><a href="#directorio" className="hover:text-mystic-gold transition-colors">{t('navCategorias' as any)}</a></li>
              <li><a href="#galeria" className="hover:text-mystic-gold transition-colors">{t('navGaleria' as any)}</a></li>
              <li><a href="#ubicacion" className="hover:text-mystic-gold transition-colors">{t('navUbicacion' as any)}</a></li>
            </ul>
          </motion.div>

          {/* COLUMNA 3: Enlaces de Categorías */}
          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
            <h3 className="font-serif text-white text-lg mb-6 tracking-wide">Categorías Populares</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#directorio" className="hover:text-mystic-gold transition-colors">Textiles Andinos</a></li>
              <li><a href="#directorio" className="hover:text-mystic-gold transition-colors">Orfebrería y Platería</a></li>
              <li><a href="#directorio" className="hover:text-mystic-gold transition-colors">Cerámica Cusqueña</a></li>
              <li><a href="#directorio" className="hover:text-mystic-gold transition-colors">Alpaca y Vicuña</a></li>
              <li><a href="#directorio" className="hover:text-mystic-gold transition-colors">Pinturas y Cuadros</a></li>
            </ul>
          </motion.div>

          {/* COLUMNA 4: Contacto */}
          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
            <h3 className="font-serif text-white text-lg mb-6 tracking-wide">Contáctanos</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-mystic-gold shrink-0 mt-0.5" />
                <span>Esq. Av. El Sol con Av. Tullumayo,<br />Cusco, Perú</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-mystic-gold shrink-0" />
                <span>+51 984 000 000</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-mystic-gold shrink-0" />
                <span>contacto@centroartesanalcusco.com</span>
              </li>
            </ul>
          </motion.div>

        </motion.div>

        {/* COPYRIGHT */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/40">
          <p>&copy; {currentYear} Centro Artesanal Cusco. Todos los derechos reservados.</p>
          <div className="flex gap-6">
             <a href="#" className="hover:text-white transition-colors">Políticas de Privacidad</a>
             <a href="#" className="hover:text-white transition-colors">Términos y Condiciones</a>
          </div>
        </div>
      </div>
    </footer>
  );
}