import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Menu, X } from 'lucide-react';

const LOGO_URL = "https://customer-assets.emergentagent.com/job_whisker-store-1/artifacts/2cglqc7d_Screenshot%202026-03-09%20045907.png";
const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (href) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.header
      data-testid="navbar"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/96 backdrop-blur-md shadow-sm' : 'bg-white/90 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-[68px] flex items-center justify-between">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-3"
          data-testid="nav-logo"
        >
          <div className="w-10 h-10 rounded-xl overflow-hidden flex-shrink-0">
            <img src={LOGO_URL} alt="Cat House" className="w-full h-full object-cover" />
          </div>
          <span className="text-[#1A1A1A] font-bold text-lg hidden sm:block" style={{ fontFamily: 'Playfair Display, serif' }}>
            Cat House
          </span>
        </button>

        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((l) => (
            <button
              key={l.label}
              onClick={() => scrollTo(l.href)}
              className="text-sm font-medium text-[#5A5A5A] hover:text-[#1A1A1A] transition-colors duration-200"
              data-testid={`nav-${l.label.toLowerCase()}`}
            >
              {l.label}
            </button>
          ))}
          <a
            href="tel:+966595227853"
            data-testid="nav-call-btn"
            className="inline-flex items-center gap-2 bg-[#D4AF37] hover:bg-[#C09B2A] text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors duration-200"
          >
            <Phone size={14} />
            Call Us
          </a>
        </nav>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-[#F5F0EB] transition-colors"
          data-testid="mobile-menu-toggle"
        >
          {menuOpen ? <X size={22} color="#1A1A1A" /> : <Menu size={22} color="#1A1A1A" />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden overflow-hidden bg-white border-t border-[#F0EBE5]"
          >
            <div className="px-6 py-4 space-y-1">
              {navLinks.map((l) => (
                <button
                  key={l.label}
                  onClick={() => scrollTo(l.href)}
                  className="block w-full text-left px-3 py-3 rounded-lg text-[#1A1A1A] font-medium hover:bg-[#F5F0EB] transition-colors"
                  data-testid={`mobile-nav-${l.label.toLowerCase()}`}
                >
                  {l.label}
                </button>
              ))}
              <a
                href="tel:+966595227853"
                className="flex items-center gap-2 bg-[#D4AF37] text-white px-4 py-3 rounded-xl font-semibold mt-2"
                data-testid="mobile-call-btn"
              >
                <Phone size={16} />
                +966 59 522 7853
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
