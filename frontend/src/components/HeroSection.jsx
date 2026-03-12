import { motion } from 'framer-motion';
import { MapPin, Phone, Star } from 'lucide-react';

const HERO_CAT = 'https://images.unsplash.com/photo-1621438506251-ff57c10a9969?crop=entropy&cs=srgb&fm=jpg&q=85';

export default function HeroSection() {
  const scrollTo = (id) => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="hero" data-testid="hero-section" className="min-h-screen pt-[100px] md:pt-[68px] flex items-center bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-16 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          {/* Left: Text */}
          <motion.div
            className="flex-1 max-w-xl"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-[#F5F0EB] rounded-full px-4 py-2 mb-6"
            >
              <MapPin size={14} className="text-[#D4AF37]" />
              <span className="text-sm font-medium text-[#5A5A5A]">Az Zahra, Riyadh, Saudi Arabia</span>
            </motion.div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[#1A1A1A] leading-[1.1] mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
              Riyadh's
              <br />
              <span className="text-[#D4AF37]">Favorite</span>
              <br />
              Cat Store
            </h1>

            <p className="text-base lg:text-lg text-[#5A5A5A] mb-8 leading-relaxed">
              Premium cats, grooming, and supplies — all under one roof. Where Riyadh's cat lovers come for everything their feline friends deserve.
            </p>

            <div className="flex items-center gap-2 mb-10">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} className="text-[#D4AF37] fill-[#D4AF37]" />
                ))}
              </div>
              <span className="text-[#1A1A1A] font-bold ml-1">4.8</span>
              <span className="text-[#5A5A5A] text-sm">· 40+ happy customers</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                data-testid="hero-visit-btn"
                onClick={() => scrollTo('#location')}
                className="bg-[#1A1A1A] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#333] transition-colors duration-200 text-sm"
              >
                Visit Our Store
              </button>
              <a
                href="tel:+966595227853"
                data-testid="hero-call-btn"
                className="inline-flex items-center justify-center gap-2 border-2 border-[#D4AF37] text-[#D4AF37] px-8 py-4 rounded-full font-semibold hover:bg-[#D4AF37] hover:text-white transition-all duration-200 text-sm"
              >
                <Phone size={16} />
                Call Now
              </a>
            </div>
          </motion.div>

          {/* Right: Cat Image */}
          <motion.div
            className="flex-1 relative w-full max-w-xl lg:max-w-none"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
          >
            <div className="relative">
              <img
                src={HERO_CAT}
                alt="Beautiful cat at Cat House Riyadh"
                className="w-full h-[420px] sm:h-[500px] lg:h-[580px] object-cover rounded-3xl shadow-2xl"
              />

              {/* Floating rating card */}
              <motion.div
                className="absolute -bottom-5 -left-5 bg-white rounded-2xl shadow-xl px-5 py-4 hidden sm:block"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.5 }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#D4AF37]/10 rounded-xl flex items-center justify-center">
                    <Star size={20} className="text-[#D4AF37] fill-[#D4AF37]" />
                  </div>
                  <div>
                    <p className="text-[#1A1A1A] font-bold text-lg leading-none" style={{ fontFamily: 'Playfair Display, serif' }}>4.8 / 5</p>
                    <p className="text-[#5A5A5A] text-xs mt-0.5">Google Rating</p>
                  </div>
                </div>
              </motion.div>

              {/* Floating services badge */}
              <motion.div
                className="absolute -top-4 -right-4 bg-[#D4AF37] rounded-2xl px-4 py-3 hidden sm:block"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1, duration: 0.5 }}
              >
                <p className="text-white font-bold text-sm leading-none">Premium</p>
                <p className="text-white/80 text-xs mt-0.5">Cat Care</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
