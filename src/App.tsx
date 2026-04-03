/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar, Footer } from './components/Layout';
import { Hero } from './components/Hero';
import { AIAssistant } from './components/AIAssistant';
import { Resources } from './components/Resources';
import { Events } from './components/Events';
import { motion } from 'framer-motion';

function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Hero />
      
      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold mb-4">Platforma imkoniyatlari</h2>
            <p className="text-brand-ink/60 max-w-2xl mx-auto">Biz ayollarga o'z salohiyatlarini to'liq ro'yobga chiqarishlari uchun barcha zarur vositalarni taqdim etamiz.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-bg rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-serif font-bold text-brand-primary">01</span>
              </div>
              <h3 className="text-xl font-serif font-bold mb-3">Bilim olish</h3>
              <p className="text-brand-ink/60">Siyosiy tizim, qonunchilik va huquqlaringiz haqida chuqur bilimga ega bo'ling.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-bg rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-serif font-bold text-brand-primary">02</span>
              </div>
              <h3 className="text-xl font-serif font-bold mb-3">AI Maslahat</h3>
              <p className="text-brand-ink/60">Istalgan vaqtda siyosiy mentorimizdan huquqiy va strategik maslahatlar oling.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-bg rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-serif font-bold text-brand-primary">03</span>
              </div>
              <h3 className="text-xl font-serif font-bold mb-3">Hamjamiyat</h3>
              <p className="text-brand-ink/60">Fikrdosh ayollar bilan tajriba almashing va birgalikda rivojlaning.</p>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/ai-assistant" element={<AIAssistant />} />
            <Route path="/events" element={<Events />} />
            <Route path="/community" element={<div className="py-32 text-center font-serif text-3xl">Tez kunda...</div>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
