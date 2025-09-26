import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import WebDevelopmentServices from "@/components/webdevelopment/WebDevelopmentServices";
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
      <WebDevelopmentServices />
      <KeyFeatures />
      <IndustriesSection />
      <PortfolioSection />
      <BlogSection />
      <TestimonialsSection />
      <HealthcareSection />
      <FAQSection />
      <BrochureSection />
      <ContactSection />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default WebDevelopment;
