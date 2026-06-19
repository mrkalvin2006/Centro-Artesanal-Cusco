import React from 'react';
import { LanguageProvider } from './lib/LanguageContext';
import { WelcomeGate } from './components/WelcomeGate';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { DirectorySection } from './components/DirectorySection'; // El nuevo directorio fusionado
import { ExperienceSection } from './components/ExperienceSection';
import { PremiumGallery } from './components/PremiumGallery';
import { VisitUsSection } from './components/VisitUsSection';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Footer } from './components/Footer';

function App() {
  return (
    <LanguageProvider>
      {/* Pantalla de entrada premium */}
      <WelcomeGate />
      
      {/* Interfaz principal */}
      <div className="bg-mystic-darker min-h-screen text-white antialiased selection:bg-mystic-gold/30 selection:text-mystic-gold">
        <Navbar />
        <Hero />
        
        <main>
          <AboutSection />
          
          {/* Aquí se fusionan Categorías y Pasajes en una sola experiencia interactiva */}
          <DirectorySection />
          
          <ExperienceSection />
          <PremiumGallery />
          <VisitUsSection />
        </main>

        <Footer />
        <FloatingWhatsApp />
      </div>
    </LanguageProvider>
  );
}

export default App;