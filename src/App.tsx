/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { PasajesSection } from './components/PasajesSection';
import { CategoriesGallery } from './components/CategoriesGallery';
import { Footer } from './components/Footer';
import { LanguageProvider } from './lib/LanguageContext';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { VisitUsSection } from './components/VisitUsSection';
import { WelcomeGate } from './components/WelcomeGate';
import { InstitutionalStats } from './components/InstitutionalStats';
import { WhyVisitSection } from './components/WhyVisitSection';
import { PremiumGallery } from './components/PremiumGallery';

export default function App() {
  return (
    <LanguageProvider>
      <div className="font-sans text-mystic-light bg-mystic-dark selection:bg-mystic-gold selection:text-white">

        <WelcomeGate />

        <Navbar />

        <main>
          <Hero />
          <InstitutionalStats />
          <AboutSection />
          <WhyVisitSection />
          <CategoriesGallery />
          <PasajesSection />
          <PremiumGallery />
          <VisitUsSection />
        </main>

        <Footer />
        <FloatingWhatsApp />
      </div>
    </LanguageProvider>
  );
}