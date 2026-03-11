import { motion } from 'framer-motion';
import { Heart, Scissors, ShoppingBag, Truck } from 'lucide-react';

const services = [
  {
    icon: Heart,
    title: 'Cat Sales',
    description: 'Healthy, well-cared-for cats ready for loving homes. We carry a variety of breeds with expert guidance to help you find your perfect companion.',
    badge: 'Available Now',
    img: 'https://images.unsplash.com/photo-1592194996308-7b43878e84a6?w=600&q=80',
  },
  {
    icon: Scissors,
    title: 'Grooming',
    description: 'Professional cat grooming services including bathing, trimming, and full coat care by experienced handlers who treat your cat with gentle love.',
    badge: 'Book Today',
    img: 'https://customer-assets.emergentagent.com/job_whisker-store-1/artifacts/qrvvt7ti_Screenshot%202026-03-09%20052559.png',
  },
  {
    icon: ShoppingBag,
    title: 'Pet Supplies',
    description: 'A huge selection of premium cat food, treats, litter, toys, beds, and accessories from top brands like Royal Canin, Hills, Brit, Whiskas, Cat Plus, Huraira, Loqma and Purina.',
    badge: '100s of Products',
    img: 'https://customer-assets.emergentagent.com/job_whisker-store-1/artifacts/4c77ck6o_Screenshot%202026-03-09%20052551.png',
  },
  {
    icon: Truck,
    title: 'Delivery',
    description: 'Convenient home delivery service across Riyadh. Order your cat supplies and have them delivered right to your doorstep.',
    badge: 'Riyadh-Wide',
    img: 'https://customer-assets.emergentagent.com/job_whisker-store-1/artifacts/b1b835gr_Screenshot%202026-03-09%20052538.png',
  },
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

export default function ServicesSection() {
  return (
    <section id="services" data-testid="services-section" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs font-bold text-[#D4AF37] uppercase tracking-[0.2em] mb-3">What We Offer</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#1A1A1A] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            Our Services
          </h2>
          <p className="text-[#5A5A5A] max-w-md mx-auto">
            Everything your cat needs — under one roof in the heart of Riyadh.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {services.map((s) => (
            <motion.div
              key={s.title}
              variants={item}
              data-testid={`service-card-${s.title.toLowerCase().replace(' ', '-')}`}
              className="group bg-[#F9F9F9] rounded-3xl overflow-hidden hover:-translate-y-2 transition-transform duration-300 hover:shadow-xl"
            >
              <div className="overflow-hidden h-48">
                <img
                  src={s.img}
                  alt={s.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 bg-[#D4AF37]/10 rounded-xl flex items-center justify-center">
                    <s.icon size={20} className="text-[#D4AF37]" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#D4AF37] bg-[#D4AF37]/10 px-2 py-1 rounded-full">
                    {s.badge}
                  </span>
                </div>
                <h3 className="font-bold text-[#1A1A1A] text-lg mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                  {s.title}
                </h3>
                <p className="text-sm text-[#5A5A5A] leading-relaxed">{s.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
