import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    name: 'Ahmed K.',
    location: 'Riyadh',
    rating: 5,
    text: 'Good and affordable cats. Polite workers and good behaviour. Very clean store with a great selection of cat breeds.',
    initials: 'AK',
  },
  {
    name: 'Sarah M.',
    location: 'Az Zahra',
    rating: 5,
    text: 'Friendly and knowledgeable staff, clean store, great grooming services. My cat always comes out looking amazing!',
    initials: 'SM',
  },
  {
    name: 'Mohammed A.',
    location: 'Riyadh',
    rating: 5,
    text: 'Accessible location, accommodating crew, very clean shop. They really know their cats and give great advice.',
    initials: 'MA',
  },
  {
    name: 'Fatima H.',
    location: 'Riyadh',
    rating: 5,
    text: 'Best cat store in Riyadh! They helped me choose the perfect Persian kitten. Prices are fair and service is outstanding.',
    initials: 'FH',
  },
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 25 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

export default function ReviewsSection() {
  return (
    <section id="reviews" data-testid="reviews-section" className="py-24 bg-[#F5F0EB]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs font-bold text-[#D4AF37] uppercase tracking-[0.2em] mb-3">Testimonials</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#1A1A1A] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            What Our Customers Say
          </h2>
          <div className="flex items-center justify-center gap-2 mt-3">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} className="text-[#D4AF37] fill-[#D4AF37]" />
              ))}
            </div>
            <span className="text-[#1A1A1A] font-bold text-lg" style={{ fontFamily: 'Playfair Display, serif' }}>4.8</span>
            <span className="text-[#5A5A5A]">on Google</span>
          </div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {reviews.map((r) => (
            <motion.div
              key={r.name}
              variants={item}
              data-testid={`review-card-${r.name.toLowerCase().replace(' ', '-').replace('.', '')}`}
              className="bg-white rounded-3xl p-7 hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-start justify-between mb-5">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 bg-[#D4AF37] rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    {r.initials}
                  </div>
                  <div>
                    <p className="font-semibold text-[#1A1A1A]">{r.name}</p>
                    <p className="text-xs text-[#5A5A5A]">{r.location}</p>
                  </div>
                </div>
                <Quote size={24} className="text-[#D4AF37]/30 flex-shrink-0" />
              </div>

              <div className="flex mb-4">
                {[...Array(r.rating)].map((_, i) => (
                  <Star key={i} size={14} className="text-[#D4AF37] fill-[#D4AF37]" />
                ))}
              </div>

              <p className="text-[#5A5A5A] text-sm leading-relaxed italic">"{r.text}"</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
