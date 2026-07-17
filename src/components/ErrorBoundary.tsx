import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(_: Error): State {
    // Actualiza el estado para que el siguiente renderizado muestre la interfaz de repuesto
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Imprime el error detallado en la consola para desarrollo
    console.error("ErrorBoundary atrapó un error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      // Diseño de emergencia elegante si algo falla
      return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-mystic-darker text-white p-6 text-center selection:bg-mystic-gold/30 selection:text-mystic-gold">
          <div className="max-w-md p-8 rounded-3xl bg-black/40 border border-mystic-gold/20 shadow-2xl backdrop-blur-md">
            <div className="w-16 h-16 bg-mystic-gold/10 border border-mystic-gold/35 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-mystic-gold text-2xl font-serif">!</span>
            </div>
            <h2 className="font-serif text-2xl text-mystic-gold mb-4 tracking-wide">Algo no salió como esperábamos</h2>
            <p className="text-sm text-white/70 mb-8 leading-relaxed font-light">
              Hemos detectado un pequeño inconveniente al cargar el contenido. No te preocupes, puedes intentar recargar la página para solucionarlo.
            </p>
            <button
              onClick={() => {
                sessionStorage.clear(); // Limpiamos la memoria de sesión
                window.location.reload(); // Forzamos la recarga limpia
              }}
              className="w-full py-3 bg-mystic-gold hover:bg-white text-black font-semibold rounded-full transition-all duration-300 shadow-lg shadow-mystic-gold/10 hover:shadow-white/10 hover:scale-[1.02]"
            >
              Recargar Sitio Web
            </button>
          </div>
        </div>
      );
    }

    return this.children;
  }
}