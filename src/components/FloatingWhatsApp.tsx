import { MessageCircle } from 'lucide-react';

export function FloatingWhatsApp() {
  const phone = '51XXXXXXXXX';

  const message =
    'Hola, quisiera información sobre el Centro Artesanal Cusco.';

  return (
    <a
      href={`https://wa.me/${phone}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[999] flex items-center gap-3 rounded-full bg-green-500 px-5 py-4 font-bold text-white shadow-2xl transition-all duration-300 hover:scale-105 hover:bg-green-600"
    >
      <MessageCircle className="h-6 w-6" />

      <span className="hidden sm:inline">
        ¿Necesitas ayuda?
      </span>
    </a>
  );
}