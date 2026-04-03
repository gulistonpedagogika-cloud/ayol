import React from 'react';
import { motion } from 'framer-motion';
import { Book, Video, FileText, Download, ExternalLink, Search } from 'lucide-react';

const resources = [
  {
    id: 1,
    title: "O'zbekiston Respublikasi Konstitutsiyasi",
    category: "Qonunchilik",
    type: "Hujjat",
    icon: FileText,
    description: "Yangi tahrirdagi Konstitutsiya va undagi ayollar huquqlari.",
    color: "bg-blue-50 text-blue-600"
  },
  {
    id: 2,
    title: "Siyosiy yetakchilik asoslari",
    category: "Ta'lim",
    type: "Kurs",
    icon: Book,
    description: "Ayollar uchun siyosiy maydonda o'z o'rnini topish bo'yicha video-kurs.",
    color: "bg-brand-primary/10 text-brand-primary"
  },
  {
    id: 3,
    title: "Saylov jarayonida ishtirok etish",
    category: "Saylov",
    type: "Qo'llanma",
    icon: Video,
    description: "Nomzod sifatida ro'yxatdan o'tish va kampaniya yuritish sirlari.",
    color: "bg-purple-50 text-purple-600"
  },
  {
    id: 4,
    title: "Gender tengligi to'g'risidagi qonun",
    category: "Huquq",
    type: "Hujjat",
    icon: FileText,
    description: "Xotin-qizlar va erkaklar uchun teng huquq hamda imkoniyatlar kafolatlari.",
    color: "bg-orange-50 text-orange-600"
  }
];

export function Resources() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
        <div className="max-w-2xl">
          <h2 className="text-4xl font-serif font-bold mb-4">Bilimlar xazinasi</h2>
          <p className="text-brand-ink/60">Siyosiy va huquqiy bilimlaringizni oshirish uchun saralangan materiallar to'plami.</p>
        </div>
        <div className="mt-6 md:mt-0 relative">
          <input 
            type="text" 
            placeholder="Qidirish..." 
            className="pl-10 pr-4 py-2 rounded-full border border-brand-primary/20 bg-white focus:outline-none focus:ring-2 focus:ring-brand-primary/20 w-full md:w-64"
          />
          <Search className="absolute left-3 top-2.5 text-brand-ink/30 w-5 h-5" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {resources.map((res, i) => (
          <motion.div
            key={res.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-white rounded-3xl p-6 border border-brand-primary/5 shadow-sm hover:shadow-xl transition-all group"
          >
            <div className={`w-12 h-12 ${res.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
              <res.icon size={24} />
            </div>
            <div className="text-xs font-bold uppercase tracking-widest text-brand-ink/40 mb-2">{res.category} • {res.type}</div>
            <h3 className="text-xl font-serif font-bold mb-3 group-hover:text-brand-primary transition-colors">{res.title}</h3>
            <p className="text-sm text-brand-ink/60 mb-6 line-clamp-2">{res.description}</p>
            <div className="flex items-center justify-between pt-4 border-t border-brand-primary/5">
              <button className="text-brand-primary text-sm font-bold flex items-center hover:underline">
                <Download size={16} className="mr-2" />
                Yuklab olish
              </button>
              <button className="text-brand-ink/40 hover:text-brand-primary transition-colors">
                <ExternalLink size={16} />
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Featured Section */}
      <div className="mt-20 bg-brand-primary rounded-[40px] p-8 md:p-16 text-white relative overflow-hidden">
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl md:text-5xl font-serif font-bold mb-6">Hafta mavzusi: Siyosiy notiqlik</h3>
            <p className="text-white/80 text-lg mb-8 leading-relaxed">
              O'z fikrini omma oldida ishonchli va ta'sirchan bayon qilish - bu har bir yetakchi ayol uchun zarur bo'lgan san'atdir. Ushbu haftada biz notiqlik mahorati bo'yicha maxsus darslarni taqdim etamiz.
            </p>
            <button className="bg-white text-brand-primary px-8 py-4 rounded-full font-bold hover:bg-brand-bg transition-colors">
              Darsni ko'rish
            </button>
          </div>
          <div className="relative">
            <img 
              src="https://picsum.photos/seed/publicspeaking/600/400" 
              alt="Public speaking" 
              className="rounded-3xl shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />
      </div>
    </div>
  );
}
