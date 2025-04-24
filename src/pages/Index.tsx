import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ProductsSection from "@/components/ProductsSection";
import MarketplaceSection from "@/components/MarketplaceSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen font-furniture">
      <Header />
      <main>
        <Hero />
        <AboutSection />
        <ServicesSection />
        <ProductsSection />
        <MarketplaceSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;