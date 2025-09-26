import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import WebDevelopmentServices from "@/components/webdevelopment/WebDevelopmentServices";
import StatsSection from "@/components/webdevelopment/StatsSection";
import InteractiveWebsite from "@/components/webdevelopment/InteractiveWebsite";
import AdvancedWebsite from "@/components/webdevelopment/AdvancedWebsite";
import RoadmapSection from "@/components/RoadmapSection";
import IndustriesSection from "@/components/IndustriesSection";
import PortfolioSection from "@/components/PortfolioSection";
import BlogSection from "@/components/BlogSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import HealthcareSection from "@/components/HealthcareSection";
import FAQSection from "@/components/FAQSection";
import BrochureSection from "@/components/BrochureSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import KeyFeatures from "@/components/webdevelopment/KeyFeatures";

const WebDevelopment = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <HeroSection />
      <StatsSection />
      <WebDevelopmentServices />
      <InteractiveWebsite />
      <AdvancedWebsite />
      <KeyFeatures />
      <KeyFeatures 
        title="Our Tech" 
        subtitle="Stack" 
        titleSize="text-4xl md:text-5xl lg:text-6xl"
        description="Website Development Tools We Are Specialized In"
        showImage={false}
        showCards={false}
        showTechStack={true}
      />
      <PortfolioSection />
      <BlogSection />
      <TestimonialsSection />
      <FAQSection isWebDevelopment={true} />
      <BrochureSection />
      <ContactSection />
      <KeyFeatures 
        title="Looking to build a Website" 
        subtitle="that actually fits your business ?"
        showCards={false}
        showImage={true}
        characterImage="https://res.cloudinary.com/dknafpppp/image/upload/v1758912017/Screenshot_2025-09-27_at_1.40.08_AM_heawgv.png"
      />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default WebDevelopment;
