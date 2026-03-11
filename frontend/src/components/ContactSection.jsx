import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, Phone, MessageCircle } from 'lucide-react';

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', phone: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 900);
  };

  return (
    <section id="contact" data-testid="contact-section" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">

          {/* Left: Info */}
          <motion.div
            className="flex-1 max-w-sm"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-bold text-[#D4AF37] uppercase tracking-[0.2em] mb-3">Contact Us</p>
            <h2 className="text-4xl sm:text-5xl font-bold text-[#1A1A1A] mb-5" style={{ fontFamily: 'Playfair Display, serif' }}>
              We'd Love to<br />Hear From You
            </h2>
            <p className="text-[#5A5A5A] mb-8 leading-relaxed">
              Have a question about our cats, grooming services, or products? Reach out and we'll get back to you quickly.
            </p>

            <div className="space-y-4">
              <a
                href="tel:+966595227853"
                data-testid="contact-phone-link"
                className="flex items-center gap-4 bg-[#F5F0EB] rounded-2xl p-4 hover:bg-[#EDE5DC] transition-colors duration-200"
              >
                <div className="w-10 h-10 bg-[#D4AF37]/10 rounded-xl flex items-center justify-center">
                  <Phone size={18} className="text-[#D4AF37]" />
                </div>
                <div>
                  <p className="text-xs text-[#5A5A5A] font-medium">Call us at</p>
                  <p className="text-[#1A1A1A] font-bold">+966 59 522 7853</p>
                </div>
              </a>
              <a
                href="https://wa.me/966595227853"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="contact-whatsapp-link"
                className="flex items-center gap-4 bg-[#F5F0EB] rounded-2xl p-4 hover:bg-[#EDE5DC] transition-colors duration-200"
              >
                <div className="w-10 h-10 bg-[#25D366]/10 rounded-xl flex items-center justify-center">
                  <MessageCircle size={18} className="text-[#25D366]" />
                </div>
                <div>
                  <p className="text-xs text-[#5A5A5A] font-medium">WhatsApp</p>
                  <p className="text-[#1A1A1A] font-bold">Chat with us</p>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            className="flex-1 w-full max-w-lg"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {submitted ? (
              <motion.div
                data-testid="contact-success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-[#F5F0EB] rounded-3xl p-12 text-center"
              >
                <div className="w-16 h-16 bg-[#D4AF37]/10 rounded-full flex items-center justify-center mx-auto mb-5">
                  <CheckCircle size={36} className="text-[#D4AF37]" />
                </div>
                <h3 className="text-2xl font-bold text-[#1A1A1A] mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
                  Message Sent!
                </h3>
                <p className="text-[#5A5A5A]">
                  Thank you for reaching out. We'll get back to you as soon as possible.
                </p>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                data-testid="contact-form"
                className="bg-[#F5F0EB] rounded-3xl p-8 space-y-5"
              >
                <div>
                  <label className="block text-sm font-semibold text-[#1A1A1A] mb-2">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="e.g. Ahmed Abdullah"
                    data-testid="contact-name-input"
                    className="w-full bg-white border border-transparent focus:border-[#D4AF37] focus:ring-0 rounded-xl px-4 py-3 text-[#1A1A1A] placeholder-[#9A9A9A] outline-none text-sm transition-colors duration-200"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#1A1A1A] mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    required
                    placeholder="+966 5X XXX XXXX"
                    data-testid="contact-phone-input"
                    className="w-full bg-white border border-transparent focus:border-[#D4AF37] focus:ring-0 rounded-xl px-4 py-3 text-[#1A1A1A] placeholder-[#9A9A9A] outline-none text-sm transition-colors duration-200"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#1A1A1A] mb-2">Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    placeholder="How can we help you?"
                    data-testid="contact-message-input"
                    className="w-full bg-white border border-transparent focus:border-[#D4AF37] focus:ring-0 rounded-xl px-4 py-3 text-[#1A1A1A] placeholder-[#9A9A9A] outline-none text-sm resize-none transition-colors duration-200"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  data-testid="contact-submit-btn"
                  className="w-full bg-[#D4AF37] hover:bg-[#C09B2A] text-white py-4 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition-colors duration-200 disabled:opacity-60"
                >
                  {loading ? (
                    <span className="inline-block w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      <Send size={16} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
