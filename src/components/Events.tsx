import React from 'react';
import { motion } from 'framer-motion';
import { Calendar as CalendarIcon, MapPin, Clock, Users, ArrowRight } from 'lucide-react';

const events = [
  {
    id: 1,
    title: "Ayollar va Siyosat: Xalqaro Forum",
    date: "15-Aprel, 2026",
    time: "10:00 - 17:00",
    location: "Toshkent, Simpoziumlar saroyi",
    attendees: "500+",
    image: "https://picsum.photos/seed/conference/800/400"
  },
  {
    id: 2,
    title: "Liderlik mahorati: Onlayn vebinar",
    date: "22-Aprel, 2026",
    time: "19:00 - 20:30",
    location: "Zoom platformasi",
    attendees: "1000+",
    image: "https://picsum.photos/seed/webinar/800/400"
  },
  {
    id: 3,
    title: "Mahalliy kengashlarga saylov: Seminar",
    date: "5-May, 2026",
    time: "11:00 - 14:00",
    location: "Samarqand, Yoshlar markazi",
    attendees: "200+",
    image: "https://picsum.photos/seed/seminar/800/400"
  }
];

export function Events() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-serif font-bold mb-4">Kelgusi tadbirlar</h2>
        <p className="text-brand-ink/60 max-w-2xl mx-auto">
          O'z bilimlaringizni boyitish va yangi do'stlar orttirish uchun tadbirlarimizda ishtirok eting.
        </p>
      </div>

      <div className="space-y-12">
        {events.map((event, i) => (
          <motion.div
            key={event.id}
            initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            className={cn(
              "flex flex-col lg:flex-row bg-white rounded-[40px] overflow-hidden border border-brand-primary/5 shadow-sm hover:shadow-xl transition-all",
              i % 2 !== 0 ? "lg:flex-row-reverse" : ""
            )}
          >
            <div className="lg:w-1/2 relative h-64 lg:h-auto">
              <img 
                src={event.image} 
                alt={event.title} 
                className="absolute inset-0 w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-2xl flex flex-col items-center shadow-lg">
                <span className="text-brand-primary font-bold text-xl">{event.date.split('-')[0]}</span>
                <span className="text-brand-ink/60 text-xs uppercase font-bold">{event.date.split(',')[0].split('-')[1]}</span>
              </div>
            </div>
            <div className="lg:w-1/2 p-8 md:p-12 flex flex-col justify-center">
              <h3 className="text-3xl font-serif font-bold mb-6">{event.title}</h3>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="flex items-center text-brand-ink/60">
                  <Clock size={18} className="mr-3 text-brand-primary" />
                  <span className="text-sm">{event.time}</span>
                </div>
                <div className="flex items-center text-brand-ink/60">
                  <MapPin size={18} className="mr-3 text-brand-primary" />
                  <span className="text-sm">{event.location}</span>
                </div>
                <div className="flex items-center text-brand-ink/60">
                  <Users size={18} className="mr-3 text-brand-primary" />
                  <span className="text-sm">{event.attendees} ishtirokchi</span>
                </div>
                <div className="flex items-center text-brand-ink/60">
                  <CalendarIcon size={18} className="mr-3 text-brand-primary" />
                  <span className="text-sm">Ro'yxatdan o'tish ochiq</span>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <button className="bg-brand-primary text-white px-8 py-3 rounded-full font-bold hover:bg-brand-primary/90 transition-all">
                  Ro'yxatdan o'tish
                </button>
                <button className="text-brand-primary font-bold flex items-center group">
                  Batafsil
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(' ');
}
