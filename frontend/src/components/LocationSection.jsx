import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, Navigation } from 'lucide-react';

const info = [
  { icon: MapPin, label: 'Address', value: 'Umar Ibn Abdul Aziz Branch Rd, Az Zahra, Riyadh 12812, Saudi Arabia' },
  { icon: Phone, label: 'Phone', value: '+966 59 522 7853' },
  { icon: Clock, label: 'Hours', value: 'Sat–Thu: 9AM–11PM\nFri: 2PM–11PM' },
];

export default function LocationSection() {
  return (
    <section id="location" data-testid="location-section" className="py-24 bg-[#F5F0EB]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs font-bold text-[#D4AF37] uppercase tracking-[0.2em] mb-3">Find Us</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#1A1A1A] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            Visit Our Store
          </h2>
          <p className="text-[#5A5A5A] max-w-md mx-auto">
            We're located in Az Zahra, Riyadh. Come visit us — we'd love to meet you and your cat!
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8 items-stretch">
          {/* Map */}
          <motion.div
            className="flex-1 lg:flex-[1.4]"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="rounded-3xl overflow-hidden shadow-xl h-[380px] lg:h-full min-h-[380px]">
              <iframe
                data-testid="google-map"
                title="Cat House Location"
                src="https://maps.google.com/maps?q=Cat+House+Pet+Store+Az+Zahra+Riyadh+Saudi+Arabia&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '380px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>

          {/* Info */}
          <motion.div
            className="flex-1 flex flex-col justify-center gap-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {info.map(({ icon: Icon, label, value }) => (
              <div key={label} className="bg-white rounded-2xl p-5 flex gap-4">
                <div className="w-11 h-11 bg-[#D4AF37]/10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Icon size={20} className="text-[#D4AF37]" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#D4AF37] uppercase tracking-wider mb-1">{label}</p>
                  <p className="text-[#1A1A1A] font-medium text-sm whitespace-pre-line leading-relaxed">{value}</p>
                </div>
              </div>
            ))}

            <div className="flex flex-col sm:flex-row gap-3 mt-2">
              <a
                href="https://maps.google.com/?q=Cat+House+Pet+Store+Az+Zahra+Riyadh"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="get-directions-btn"
                className="flex items-center justify-center gap-2 bg-[#1A1A1A] text-white px-6 py-3.5 rounded-full font-semibold text-sm hover:bg-[#333] transition-colors duration-200"
              >
                <Navigation size={16} />
                Get Directions
              </a>
              <a
                href="tel:+966595227853"
                data-testid="location-call-btn"
                className="flex items-center justify-center gap-2 border-2 border-[#D4AF37] text-[#D4AF37] px-6 py-3.5 rounded-full font-semibold text-sm hover:bg-[#D4AF37] hover:text-white transition-all duration-200"
              >
                <Phone size={16} />
                Call Store
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
