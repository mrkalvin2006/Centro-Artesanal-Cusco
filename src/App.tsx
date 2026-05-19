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

export default function App() {
  return (
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
  );
}
