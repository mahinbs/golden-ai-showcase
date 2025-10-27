import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/webdevelopment/StatsSection";
import PortfolioSection from "@/components/PortfolioSection";
import BlogSection from "@/components/BlogSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import KeyFeatures from "@/components/webdevelopment/KeyFeatures";
import HowWeBuild from "@/components/webdevelopment/HowWeBuild";
import UIDesignServices from "@/components/uiuxdesign/UIDesignServices";
import DesignSolutionsWeDeliver from "@/components/uiuxdesign/DesignSolutionsWeDeliver";
import WhyYouNeedRedesign from "@/components/uiuxdesign/WhyYouNeedRedesign";
import heroImg from "../assets/uiuxhero.webp";

const UIUXDesign = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <HeroSection
        backgroundImage={heroImg}
        mainHeadline=""
        highlightedWord="UI/UX"
        headlineAfterHighlight="Design Solutions"
        subHeadline="Crafting intuitive, user-centered designs that transform your vision into engaging digital experiences."
        primaryButtonText="Request a Free Quote"
        showSecondaryButton={false}
        showCtaText={false}
        stat1Value="200+"
        stat1Label="Designs Delivered"
        stat2Value="95%"
        stat2Label="Client Satisfaction"
        stat3Value="4.8★"
        stat3Label="Average Rating"
        bottomSectionText="Designs Built Around Your Specs"
        bottomHighlightedWord="Designs, Specs"
        show3DLogo={false}
      />
      <StatsSection
        missionText="At Specslo, we craft intuitive, user-centered designs that transform your specs into engaging digital experiences that users love."
        highlightedWord="Specslo, specs, designs"
        stat1Value="200+"
        stat1Label="Designs Delivered"
        stat2Value="95%"
        stat2Label="Client Satisfaction"
        stat3Value="4.8★"
        stat3Label="Average Rating"
        characterImage="https://res.cloudinary.com/drdjii8fe/image/upload/v1760375301/2._ere1p9.png"
      />

      <UIDesignServices />

      <DesignSolutionsWeDeliver />

      <WhyYouNeedRedesign />

      <div id="how-we-build">
        <HowWeBuild
          title="How We Design"
          description="At Specslo, every design project follows a clear, collaborative process — turning your specs into pixel-perfect, user-centered designs, step by step."
        />
      </div>

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
        <FAQSection serviceType="uiux-design" />
      </div>
      <ContactSection />
      <KeyFeatures
        title="Looking to create designs that actually fit your vision ?"
        subtitle=""
        showCards={false}
        showImage={true}
        characterImage="https://res.cloudinary.com/dknafpppp/image/upload/v1758912017/Screenshot_2025-09-27_at_1.40.08_AM_heawgv.png"
      />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default UIUXDesign;
