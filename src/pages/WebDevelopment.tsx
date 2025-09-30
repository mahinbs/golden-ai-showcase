import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import WebDevelopmentServices from "@/components/webdevelopment/WebDevelopmentServices";
import StatsSection from "@/components/webdevelopment/StatsSection";
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
import WhyCustomWebsitesMatter from "@/components/webdevelopment/WhyCustomWebsitesMatter";
import HowWeBuild from "@/components/webdevelopment/HowWeBuild";

const WebDevelopment = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <HeroSection />
      <StatsSection />
      <div id="services">
        <WebDevelopmentServices />
      </div>
      <div id="key-features">
        <KeyFeatures />
      </div>
      <div id="how-we-build">
        <HowWeBuild />
      </div>
      <div id="tech-stack">
        <KeyFeatures
          title="Our Tech"
          subtitle="Stack"
          titleSize="text-4xl md:text-5xl lg:text-6xl"
          description="Website Development Tools We Are Specialized In"
          showImage={false}
          showCards={false}
          showTechStack={true}
        />
      </div>
      <WhyCustomWebsitesMatter />
      <div id="portfolio">
        <PortfolioSection />
      </div>
      <div id="blog">
        <BlogSection />
      </div>
      <div id="testimonials">
        <TestimonialsSection />
      </div>
      <div id="faq">
        <FAQSection isWebDevelopment={true} />
      </div>
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
