import { Phone, MapPin, Instagram } from 'lucide-react';

const LOGO_URL = "https://customer-assets.emergentagent.com/job_whisker-store-1/artifacts/2cglqc7d_Screenshot%202026-03-09%20045907.png";

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  const scrollTo = (href) => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer data-testid="footer" className="bg-[#1A1A1A] text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 rounded-xl overflow-hidden flex-shrink-0">
                <img src={LOGO_URL} alt="Cat House" className="w-full h-full object-cover" />
              </div>
              <div>
                <p className="font-bold text-xl text-white" style={{ fontFamily: 'Playfair Display, serif' }}>Cat House</p>
                <p className="text-white/50 text-xs">منزل القط</p>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-5">
              Riyadh's most loved cat store. Premium cats, expert grooming, and everything your feline companion needs.
            </p>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-[#D4AF37] fill-[#D4AF37]" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-white font-semibold text-sm">4.8 / 5</span>
              <span className="text-white/40 text-xs">· Google Reviews</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white mb-5 uppercase text-xs tracking-widest text-[#D4AF37]">Quick Links</h4>
            <ul className="space-y-3">
              {navLinks.map((l) => (
                <li key={l.label}>
                  <button
                    onClick={() => scrollTo(l.href)}
                    className="text-white/60 hover:text-white text-sm transition-colors duration-200"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-white mb-5 uppercase text-xs tracking-widest text-[#D4AF37]">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-[#D4AF37] flex-shrink-0 mt-0.5" />
                <p className="text-white/60 text-sm leading-relaxed">
                  Umar Ibn Abdul Aziz Branch Rd,<br />Az Zahra, Riyadh 12812,<br />Saudi Arabia
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-[#D4AF37] flex-shrink-0" />
                <a href="tel:+966595227853" className="text-white/60 hover:text-white text-sm transition-colors">
                  +966 59 522 7853
                </a>
              </div>
            </div>

            <div className="mt-6">
              <h4 className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest mb-3">Hours</h4>
              <p className="text-white/60 text-sm">Sat–Thu: 9AM – 11PM</p>
              <p className="text-white/60 text-sm">Fri: 2PM – 11PM</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs text-center sm:text-left">
            © {new Date().getFullYear()} Cat House (منزل القط) · Az Zahra, Riyadh, Saudi Arabia. All rights reserved.
          </p>
          <p className="text-white/30 text-xs">
            Optimized for: cat store Riyadh · cat grooming Riyadh · pet shop Riyadh
          </p>
        </div>
      </div>
    </footer>
  );
}
