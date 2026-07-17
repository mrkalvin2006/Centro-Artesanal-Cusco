import React from 'react';
import { useLanguage } from '../lib/LanguageContext';
import { Globe } from 'lucide-react';

export function WelcomeGate() {
  const { language, setLanguage } = useLanguage();

  const languages = [
    { code: 'es', label: 'Español', flag: '🇵🇪' },
    { code: 'en', label: 'English', flag: '🇺🇸' },
    { code: 'pt', label: 'Português', flag: '🇧🇷' },
    { code: 'fr', label: 'Français', flag: '🇫🇷' },
    { code: 'zh', label: '中文', flag: '🇨🇳' },
  ];

  const handleLanguageSelect = (code: string) => {
    // 1. Cambiamos el idioma
    setLanguage(code as any);
    
    // 2. Esperamos 300 milisegundos para que el usuario vea la animación dorada, y luego ingresamos automáticamente
    setTimeout(() => {
      const background = document.querySelector('.fixed.inset-0.z-\\[9999\\]') as HTMLElement;
      if (background) background.click();
    }, 300);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 relative">
      {/* Tarjeta de Cristal Premium */}
      <div 
        className="w-full max-w-md bg-black/60 backdrop-blur-2xl border border-mystic-gold/20 rounded-[2rem] p-8 md:p-10 shadow-[0_0_50px_rgba(0,0,0,0.5)] flex flex-col items-center z-10"
        onClick={(e) => e.stopPropagation()} /* Evita que clics accidentales aquí adentro cierren la pantalla */
      >
        
        {/* Logo Agrandado */}
        <img
          src="/newlogo.png"
          alt="Centro Artesanal Cusco"
          className="w-40 md:w-48 h-auto mx-auto mb-8 object-contain drop-shadow-[0_0_25px_rgba(212,175,55,0.3)]"
        />

        {/* Ícono Decorativo */}
        <div className="w-12 h-12 rounded-full border border-mystic-gold/30 flex items-center justify-center mb-6 bg-gradient-to-b from-mystic-gold/10 to-transparent">
          <Globe className="w-5 h-5 text-mystic-gold" />
        </div>

        <h1 className="text-3xl md:text-4xl font-serif text-white text-center tracking-wider mb-2 leading-tight">
          CENTRO ARTESANAL<br />
          <span className="text-mystic-gold italic">CUSCO</span>
        </h1>
        
        <p className="text-mystic-gold/80 text-xs tracking-[0.3em] uppercase mb-8 font-medium">
          Bienvenido • Welcome
        </p>

        <p className="text-white/80 text-sm mb-6 text-center font-light">
          Seleccione su idioma para ingresar
        </p>

        {/* Nuevo Selector de Idiomas */}
        <div className="grid grid-cols-2 gap-3 w-full">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleLanguageSelect(lang.code)}
              className={`flex items-center justify-center gap-3 py-4 px-4 rounded-xl border transition-all duration-300 ${
                language === lang.code
                  ? 'bg-mystic-gold/10 border-mystic-gold text-mystic-gold shadow-[0_0_20px_rgba(212,175,55,0.15)] scale-[1.02]'
                  : 'bg-white/5 border-white/10 text-white/70 hover:bg-white/10 hover:text-white hover:border-mystic-gold/50'
              }`}
            >
              <span className="text-xl drop-shadow-md">{lang.flag}</span>
              <span className="font-medium text-sm tracking-wide">{lang.label}</span>
            </button>
          ))}
        </div>

      </div>
    </div>
  );
}