import { MotionConfig } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ProductsSection } from './components/ProductsSection';
import { ServicesSection } from './components/ServicesSection';
import { FounderSection } from './components/FounderSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen overflow-x-hidden bg-white text-[#063B85]">
        <Navbar />
        <main>
          <HeroSection />
          <ProductsSection />
          <ServicesSection />
          <FounderSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </MotionConfig>
  );
}

export default App;
