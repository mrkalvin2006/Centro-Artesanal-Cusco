import { useState, useEffect } from 'react';
import { Globe } from 'lucide-react';
import { useLanguage } from '../lib/LanguageContext';

export function WelcomeGate() {
  const [visible, setVisible] = useState(false);
  const { lang, setLang, t } = useLanguage();

  useEffect(() => {
    const alreadyVisited = localStorage.getItem('cac_welcome');

    if (!alreadyVisited) {
      setVisible(true);
    }
  }, []);

  const enterSite = () => {
    localStorage.setItem('cac_welcome', 'true');
    setVisible(false);
  };

  if (!visible) return null;

  // Lista de los 5 idiomas soportados
  const languages = [
    { code: 'ES', label: '🇵🇪 Español' },
    { code: 'EN', label: '🇺🇸 English' },
    { code: 'PT', label: '🇧🇷 Português' },
    { code: 'FR', label: '🇫🇷 Français' },
    { code: 'ZH', label: '🇨🇳 中文' }
  ] as const;

  return (
    <div className="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-md flex items-center justify-center p-6">
      <div className="w-full max-w-lg rounded-3xl border border-mystic-gold/30 bg-mystic-dark shadow-2xl overflow-hidden max-h-[95vh] overflow-y-auto">
        <div className="p-8 sm:p-10 text-center">
          
          <img
            src="/logo.png"
            alt="Centro Artesanal Cusco"
            className="h-24 mx-auto mb-6"
          />

          <div className="flex justify-center mb-4">
            <div className="w-14 h-14 rounded-full bg-mystic-gold/10 flex items-center justify-center border border-mystic-gold/30">
              <Globe className="w-7 h-7 text-mystic-gold animate-pulse" />
            </div>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl text-white mb-2">
            Centro Artesanal Cusco
          </h1>

          <p className="text-mystic-gold tracking-widest uppercase text-sm mb-4 transition-all">
            {t('welcomeTitle')}
          </p>

          <p className="text-mystic-light/80 mb-8 transition-all">
            {t('welcomeSubtitle')}
          </p>

          {/* Grilla de Idiomas (2 columnas para ahorrar espacio) */}
          <div className="grid grid-cols-2 gap-3 mb-8">
            {languages.map((l, index) => (
              <button
                key={l.code}
                // Al hacer clic, actualizamos el idioma global al instante
                onClick={() => setLang(l.code as 'ES' | 'EN' | 'PT' | 'FR' | 'ZH')}
                className={`py-3 px-2 rounded-xl border transition-all ${
                  lang === l.code
                    ? 'border-mystic-gold bg-mystic-gold/20 text-mystic-gold shadow-[0_0_15px_rgba(212,175,55,0.2)]'
                    : 'border-mystic-gold/20 hover:bg-mystic-gold/10 text-white/80 hover:text-white'
                } ${index === 4 ? 'col-span-2' : ''}`} // El último botón (Chino) ocupa el ancho completo
              >
                {l.label}
              </button>
            ))}
          </div>

          <button
            onClick={enterSite}
            className="w-full py-4 rounded-xl bg-mystic-gold text-black font-bold tracking-wide hover:scale-105 shadow-[0_0_20px_rgba(212,175,55,0.3)] transition-all"
          >
            {t('welcomeEnter')}
          </button>

        </div>
      </div>
    </div>
  );
}