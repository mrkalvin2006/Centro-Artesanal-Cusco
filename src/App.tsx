import React, { useState, useEffect } from 'react';
import { LanguageProvider } from './lib/LanguageContext';
import { WelcomeGate } from './components/WelcomeGate';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { DirectorySection } from './components/DirectorySection'; 
import { ExperienceSection } from './components/ExperienceSection';
import { PremiumGallery } from './components/PremiumGallery';
import { VisitUsSection } from './components/VisitUsSection';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Footer } from './components/Footer';

function App() {
  // 1. Creamos un interruptor para controlar qué pantalla se ve
  const [showWelcome, setShowWelcome] = useState(true);

  // 2. Revisamos si el usuario ya vio la entrada antes (para no molestarlo cada vez que recarga)
  useEffect(() => {
    const hasVisited = sessionStorage.getItem('hasVisitedWelcome');
    if (hasVisited === 'true') {
      setShowWelcome(false);
    }
  }, []);

  // 3. Función para dar acceso a la página principal
  const handleEnter = () => {
    sessionStorage.setItem('hasVisitedWelcome', 'true');
    setShowWelcome(false);
  };

  return (
    <LanguageProvider>
      
      {/* RENDERIZADO CONDICIONAL: Si showWelcome es verdadero, SOLO mostramos la entrada */}
      {showWelcome ? (
        <div 
          className="fixed inset-0 z-[9999] bg-black"
          onClick={handleEnter} // Al hacer clic en el botón "Ingresar", se ejecutará esto
        >
          <WelcomeGate />
        </div>
      ) : (
        
        {/* Si showWelcome es falso, mostramos TODA LA PÁGINA WEB */}
        <div className="bg-mystic-darker min-h-screen text-white antialiased selection:bg-mystic-gold/30 selection:text-mystic-gold">
          <Navbar />
          <Hero />
          
          <main>
            <AboutSection />
            <DirectorySection />
            <ExperienceSection />
            <PremiumGallery />
            <VisitUsSection />
          </main>

          <Footer />
          <FloatingWhatsApp />
        </div>

      )}
      
    </LanguageProvider>
  );
}

export default App;