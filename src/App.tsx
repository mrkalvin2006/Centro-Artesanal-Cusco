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
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    const hasVisited = sessionStorage.getItem('hasVisitedWelcome');
    if (hasVisited === 'true') {
      setShowWelcome(false);
    }
  }, []);

  const handleEnter = () => {
    sessionStorage.setItem('hasVisitedWelcome', 'true');
    setShowWelcome(false);
  };

  return (
    <LanguageProvider>
      {showWelcome ? (
        <div 
          className="fixed inset-0 z-[9999] bg-black"
          onClick={handleEnter}
        >
          <WelcomeGate />
        </div>
      ) : (
        <div className="bg-mystic-darker min-h-screen text-white antialiased selection:bg-mystic-gold/30 selection:text-mystic-gold">
          {/* El comentario ahora está seguro aquí adentro */}
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