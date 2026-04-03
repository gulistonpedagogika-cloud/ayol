import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Landmark, Users, BookOpen, MessageSquare, Calendar } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/src/lib/utils';

const navItems = [
  { name: 'Asosiy', path: '/', icon: Landmark },
  { name: 'Resurslar', path: '/resources', icon: BookOpen },
  { name: 'AI Maslahatchi', path: '/ai-assistant', icon: MessageSquare },
  { name: 'Tadbirlar', path: '/events', icon: Calendar },
  { name: 'Jamiyat', path: '/community', icon: Users },
];

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 bg-brand-bg/80 backdrop-blur-md border-b border-brand-primary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-brand-primary rounded-full flex items-center justify-center">
                <Landmark className="text-white w-6 h-6" />
              </div>
              <span className="text-2xl font-serif font-bold tracking-tight">Siyosiy Ayol</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-brand-primary",
                  location.pathname === item.path ? "text-brand-primary border-b-2 border-brand-primary" : "text-brand-ink/60"
                )}
              >
                {item.name}
              </Link>
            ))}
            <button className="bg-brand-primary text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-brand-primary/90 transition-all">
              Kirish
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-brand-ink">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-brand-primary/10"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "flex items-center space-x-3 px-3 py-3 rounded-lg text-base font-medium",
                    location.pathname === item.path ? "bg-brand-primary/10 text-brand-primary" : "text-brand-ink/60"
                  )}
                >
                  <item.icon size={20} />
                  <span>{item.name}</span>
                </Link>
              ))}
              <div className="pt-4">
                <button className="w-full bg-brand-primary text-white px-6 py-3 rounded-full text-sm font-medium">
                  Kirish
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export function Footer() {
  return (
    <footer className="bg-white border-t border-brand-primary/10 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-brand-primary rounded-full flex items-center justify-center">
                <Landmark className="text-white w-5 h-5" />
              </div>
              <span className="text-xl font-serif font-bold">Siyosiy Ayol</span>
            </div>
            <p className="text-brand-ink/60 max-w-md">
              Ayollarning siyosiy madaniyati va huquqiy savodxonligini oshirish, ularning jamiyatdagi rolini kuchaytirishga qaratilgan innovatsion platforma.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Bo'limlar</h4>
            <ul className="space-y-2 text-brand-ink/60 text-sm">
              <li><Link to="/resources">Resurslar</Link></li>
              <li><Link to="/ai-assistant">AI Maslahatchi</Link></li>
              <li><Link to="/events">Tadbirlar</Link></li>
              <li><Link to="/community">Jamiyat</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Bog'lanish</h4>
            <ul className="space-y-2 text-brand-ink/60 text-sm">
              <li>info@siyosiyayol.uz</li>
              <li>+998 71 123 45 67</li>
              <li>Toshkent sh., O'zbekiston</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-brand-primary/5 text-center text-brand-ink/40 text-xs">
          © {new Date().getFullYear()} Siyosiy Ayol platformasi. Barcha huquqlar himoyalangan.
        </div>
      </div>
    </footer>
  );
}
