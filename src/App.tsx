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
import { LanguageProvider } from './lib/LanguageContext'; // IMPORTAMOS EL PROVEEDOR

export default function App() {
  return (
    // ENVOLVEMOS TODA LA APP EN EL LANGUAGE PROVIDER
    <LanguageProvider>
      <div className="font-sans text-mystic-light bg-mystic-dark selection:bg-mystic-gold selection:text-white">
        <Navbar />
        <main>
          <Hero />
          <AboutSection />
          <CategoriesGallery />
          <PasajesSection />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}