import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  return (
    <motion.div
      className="fixed bottom-6 right-6 z-50"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, duration: 0.4, type: 'spring' }}
    >
      {/* Pulse ring */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 animate-ping" />

      <a
        href="https://wa.me/966595227853"
        target="_blank"
        rel="noopener noreferrer"
        data-testid="whatsapp-btn"
        aria-label="Chat on WhatsApp"
        className="relative flex items-center gap-2 bg-[#25D366] hover:bg-[#20B85A] text-white px-4 py-3.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 font-semibold text-sm"
      >
        <MessageCircle size={22} />
        <span className="hidden sm:inline">Chat on WhatsApp</span>
      </a>
    </motion.div>
  );
}
