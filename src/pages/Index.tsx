import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import KPIsSection from "@/components/KPIsSection";
import VisionSection from "@/components/VisionSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <KPIsSection />
      <VisionSection />
      <Footer />
    </div>
  );
};

export default Index;
