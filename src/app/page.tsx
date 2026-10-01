import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ProductGrid from '@/components/ProductGrid';
import TestimonialsSection from '@/components/TestimonialsSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import BeforeAfterToggle from '@/components/BeforeAfterToggle';
import StickyWhatsApp from '@/components/StickyWhatsApp';

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <ProductGrid />
      <TestimonialsSection />
      <CTASection />
      <Footer />
      {/* Floating UI */}
      <BeforeAfterToggle />
      <StickyWhatsApp />
    </main>
  );
}
