import { useState, useEffect } from 'react';
import { Globe } from 'lucide-react';

export function WelcomeGate() {
  const [visible, setVisible] = useState(false);

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

  return (
    <div className="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-md flex items-center justify-center p-6">
      <div className="w-full max-w-lg rounded-3xl border border-mystic-gold/30 bg-mystic-dark shadow-2xl overflow-hidden">

        <div className="p-10 text-center">

          <img
            src="/logo.png"
            alt="Centro Artesanal Cusco"
            className="h-24 mx-auto mb-6"
          />

          <div className="flex justify-center mb-4">
            <div className="w-14 h-14 rounded-full bg-mystic-gold/10 flex items-center justify-center border border-mystic-gold/30">
              <Globe className="w-7 h-7 text-mystic-gold" />
            </div>
          </div>

          <h1 className="font-serif text-4xl text-white mb-2">
            Centro Artesanal Cusco
          </h1>

          <p className="text-mystic-gold tracking-widest uppercase text-sm mb-6">
            Bienvenido
          </p>

          <p className="text-mystic-light/80 mb-8">
            Seleccione su idioma para continuar
          </p>

          <div className="grid gap-3 mb-8">
            <button className="py-4 rounded-xl border border-mystic-gold/20 hover:bg-mystic-gold/10 transition-all">
              🇵🇪 Español
            </button>

            <button className="py-4 rounded-xl border border-mystic-gold/20 hover:bg-mystic-gold/10 transition-all">
              🇺🇸 English
            </button>

            <button className="py-4 rounded-xl border border-mystic-gold/20 hover:bg-mystic-gold/10 transition-all">
              🇧🇷 Português
            </button>
          </div>

          <button
            onClick={enterSite}
            className="w-full py-4 rounded-xl bg-mystic-gold text-black font-bold hover:scale-105 transition-all"
          >
            INGRESAR
          </button>

        </div>
      </div>
    </div>
  );
}