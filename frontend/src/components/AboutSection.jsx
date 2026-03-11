import { motion } from 'framer-motion';
import { Star, Users, Award, ShoppingBag } from 'lucide-react';

const STORE_IMG = 'https://customer-assets.emergentagent.com/job_whisker-store-1/artifacts/f5edhy80_Screenshot%202026-03-09%20052458.png';

const stats = [
  { icon: Star, value: '4.8★', label: 'Google Rating' },
  { icon: Users, value: '40+', label: 'Happy Customers' },
  { icon: Award, value: 'Expert', label: 'Cat Specialists' },
  { icon: ShoppingBag, value: '100s', label: 'Products In-Store' },
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

export default function AboutSection() {
  return (
    <section id="about" data-testid="about-section" className="py-24 bg-[#F5F0EB]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">

          {/* Left: Text */}
          <motion.div className="flex-1 max-w-xl" {...fadeUp}>
            <p className="text-xs font-bold text-[#D4AF37] uppercase tracking-[0.2em] mb-3">Our Story</p>
            <h2 className="text-4xl sm:text-5xl font-bold text-[#1A1A1A] mb-6 leading-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
              Riyadh's Home<br />for Cats
            </h2>
            <p className="text-[#5A5A5A] mb-5 leading-relaxed">
              At Cat House (منزل القط), our passion for cats drives everything we do. Located in the heart of Az Zahra, Riyadh, we've built a welcoming sanctuary for cat lovers and their feline companions.
            </p>
            <p className="text-[#5A5A5A] mb-8 leading-relaxed">
              Our knowledgeable staff are dedicated to helping you find the perfect companion, the best nutrition, and expert grooming — all in a clean, warm environment that cats (and their owners) love.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {stats.map(({ icon: Icon, value, label }) => (
                <div key={label} className="bg-white rounded-2xl p-4 flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#D4AF37]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon size={18} className="text-[#D4AF37]" />
                  </div>
                  <div>
                    <p className="font-bold text-[#1A1A1A] text-base leading-none" style={{ fontFamily: 'Playfair Display, serif' }}>{value}</p>
                    <p className="text-[#5A5A5A] text-xs mt-0.5">{label}</p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="tel:+966595227853"
              data-testid="about-call-btn"
              className="inline-flex items-center gap-2 bg-[#1A1A1A] text-white px-7 py-3.5 rounded-full font-semibold hover:bg-[#333] transition-colors duration-200 text-sm"
            >
              Get in Touch
            </a>
          </motion.div>

          {/* Right: Image */}
          <motion.div
            className="flex-1 w-full max-w-xl lg:max-w-none"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative">
              <img
                src={STORE_IMG}
                alt="Cat House store interior - Az Zahra Riyadh"
                className="w-full h-[420px] lg:h-[500px] object-cover rounded-3xl shadow-2xl"
              />
              <div className="absolute bottom-5 left-5 right-5 bg-white/90 backdrop-blur-sm rounded-2xl px-5 py-4">
                <div className="flex items-center gap-1 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="text-[#D4AF37] fill-[#D4AF37]" />
                  ))}
                  <span className="ml-1 text-sm font-bold text-[#1A1A1A]">4.8 / 5</span>
                </div>
                <p className="text-xs text-[#5A5A5A]">Rated by 40+ customers on Google</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
