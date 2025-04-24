import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ProductsSection from "@/components/ProductsSection";
import MarketplaceSection from "@/components/MarketplaceSection";
import LogisticsSection from "@/components/LogisticsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Hero />
      <AboutSection />
      <ServicesSection />
      <ProductsSection />
      <MarketplaceSection />
      <LogisticsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;