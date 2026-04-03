import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Award, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Hero() {
  return (
    <div className="relative overflow-hidden pt-16 pb-24 lg:pt-24 lg:pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-brand-primary/10 text-brand-primary mb-6">
                Yangi davr ayollari uchun
              </span>
              <h1 className="text-5xl md:text-7xl font-serif font-bold leading-tight mb-6">
                Lider <span className="italic text-brand-primary">Ayol</span>
              </h1>
              <p className="text-lg text-brand-ink/70 mb-10 leading-relaxed">
                Biz ayollarning siyosiy jarayonlardagi ishtirokini qo'llab-quvvatlaymiz, ularning huquqiy bilimlarini oshiramiz va yetakchilik qobiliyatlarini rivojlantirishga yordam beramiz.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 sm:justify-center lg:justify-start">
                <Link
                  to="/resources"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-brand-primary text-white font-medium hover:bg-brand-primary/90 transition-all shadow-lg shadow-brand-primary/20 group"
                >
                  O'rganishni boshlash
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/ai-assistant"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-full border-2 border-brand-primary/20 text-brand-primary font-medium hover:bg-brand-primary/5 transition-all"
                >
                  AI Maslahatchi bilan gaplashish
                </Link>
              </div>
            </motion.div>
          </div>
          <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://picsum.photos/seed/leadership/800/1000"
                  alt="Women in leadership"
                  className="w-full h-auto object-cover aspect-[4/5]"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/60 to-transparent" />
                <div className="absolute bottom-8 left-8 right-8 text-white">
                  <div className="flex items-center space-x-2 mb-2">
                    <Award className="w-5 h-5 text-yellow-400" />
                    <span className="text-sm font-medium uppercase tracking-wider">Muvaffaqiyat hikoyasi</span>
                  </div>
                  <p className="text-xl font-serif italic">"Siyosat - bu faqat erkaklar ishi emas, bu jamiyatning barcha a'zolari mas'uliyatidir."</p>
                </div>
              </div>
              
              {/* Floating stats */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-brand-primary/5 hidden md:block"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="text-green-600 w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold">32%</div>
                    <div className="text-xs text-brand-ink/50 uppercase tracking-tighter">Parlamentdagi ayollar</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-brand-primary/5 hidden md:block"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <ShieldCheck className="text-blue-600 w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold">100+</div>
                    <div className="text-xs text-brand-ink/50 uppercase tracking-tighter">Huquqiy darslar</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
