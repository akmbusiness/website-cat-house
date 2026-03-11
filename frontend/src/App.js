import { useEffect } from 'react';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import BrandsMarquee from './components/BrandsMarquee';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import ReviewsSection from './components/ReviewsSection';
import GallerySection from './components/GallerySection';
import LocationSection from './components/LocationSection';
import ContactSection from './components/ContactSection';
import WhatsAppButton from './components/WhatsAppButton';
import Footer from './components/Footer';
import './App.css';

function App() {
  useEffect(() => {
    const lenis = new Lenis({ duration: 1.2 });
    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);
    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="App">
      <Navbar />
      <main>
        <HeroSection />
        <BrandsMarquee />
        <AboutSection />
        <ServicesSection />
        <ReviewsSection />
        <GallerySection />
        <LocationSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
