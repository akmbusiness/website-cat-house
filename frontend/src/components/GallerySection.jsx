import { motion } from 'framer-motion';

const images = [
  { url: 'https://customer-assets.emergentagent.com/job_whisker-store-1/artifacts/f5edhy80_Screenshot%202026-03-09%20052458.png', label: 'Store Interior' },
  { url: 'https://customer-assets.emergentagent.com/job_whisker-store-1/artifacts/4c77ck6o_Screenshot%202026-03-09%20052551.png', label: 'Cat Food' },
  { url: 'https://customer-assets.emergentagent.com/job_whisker-store-1/artifacts/poalub0a_Screenshot%202026-03-09%20052448.png', label: 'Premium Brands' },
  { url: 'https://customer-assets.emergentagent.com/job_whisker-store-1/artifacts/ur2q3s8w_Screenshot%202026-03-09%20052544.png', label: 'Dry Food' },
  { url: 'https://customer-assets.emergentagent.com/job_whisker-store-1/artifacts/448al32b_Screenshot%202026-03-09%20052533.png', label: 'Wet Food' },
  { url: 'https://customer-assets.emergentagent.com/job_whisker-store-1/artifacts/b1b835gr_Screenshot%202026-03-09%20052538.png', label: 'Treats & Snacks' },
  { url: 'https://customer-assets.emergentagent.com/job_whisker-store-1/artifacts/d6h44mdq_Screenshot%202026-03-09%20052441.png', label: 'Cat Litter' },
  { url: 'https://customer-assets.emergentagent.com/job_whisker-store-1/artifacts/qrvvt7ti_Screenshot%202026-03-09%20052559.png', label: 'Care Products' },
  { url: 'https://customer-assets.emergentagent.com/job_whisker-store-1/artifacts/51zktaiw_Screenshot%202026-03-09%20052519.png', label: 'Accessories' },
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.07 } },
};

const item = {
  hidden: { opacity: 0, scale: 0.95 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

export default function GallerySection() {
  return (
    <section id="gallery" data-testid="gallery-section" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs font-bold text-[#D4AF37] uppercase tracking-[0.2em] mb-3">Inside the Store</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#1A1A1A] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            Our Store Gallery
          </h2>
          <p className="text-[#5A5A5A] max-w-md mx-auto">
            A clean, stocked, and welcoming environment for you and your cat.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 gap-4"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {images.map((img, i) => (
            <motion.div
              key={i}
              variants={item}
              data-testid={`gallery-item-${i}`}
              className="group relative overflow-hidden rounded-2xl aspect-square cursor-pointer"
            >
              <img
                src={img.url}
                alt={img.label}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-[#1A1A1A]/0 group-hover:bg-[#1A1A1A]/40 transition-all duration-300 flex items-end">
                <div className="w-full px-4 py-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-white text-sm font-semibold">{img.label}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
