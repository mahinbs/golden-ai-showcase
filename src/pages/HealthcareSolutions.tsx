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
import WhyChooseSpecslo from "@/components/healthcare/WhyChooseSpecslo";
import WhoWeHelp from "@/components/healthcare/WhoWeHelp";
import DataScienceHealthcare from "@/components/healthcare/DataScienceHealthcare";
import ITSolutionsFlipCards from "@/components/healthcare/ITSolutionsFlipCards";
import line from "../assets/health-line.png";
import heroImg from "../assets/healthcare-hero.webp";

const HealthcareSolutions = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <HeroSection
        backgroundImage={heroImg}
        mainHeadline=""
        highlightedWord="Healthcare"
        headlineAfterHighlight="Solutions"
        subHeadline="From AI-powered patient portals to clinic automation, we build healthcare solutions that fit your workflows and improve patient care."
        primaryButtonText="Request a Free Quote"
        showSecondaryButton={false}
        showCtaText={false}
        stat1Value="65%"
        stat1Label="Increase in Patient Engagement"
        stat2Value="70%"
        stat2Label="Improvement in Operational Efficiency"
        stat3Value="80%"
        stat3Label="Reduction in Appointment no-shows"
        bottomSectionText="Digital Healthcare Built Around Your Specs"
        bottomHighlightedWord="Healthcare"
        show3DLogo={false}
      />
      <StatsSection
        missionText="At Specslo, we turn your specs into intuitive, patient-centered Healthcare solutions that transform care delivery and streamline operations."
        highlightedWord="Specslo, Healthcare, solutions"
        stat1Value="65%"
        stat1Label="Increase in Patient Engagement"
        stat2Value="70%"
        stat2Label="Improvement in Operational Efficiency"
        stat3Value="80%"
        stat3Label="Reduction in Appointment no-shows"
        characterImage=""
        lineImg={line}
      />

      <WhyChooseSpecslo />

      <div className="border-y">
        <WhoWeHelp />
      </div>

      <ITSolutionsFlipCards />
      <DataScienceHealthcare />
      <div id="how-we-build" className="border-y">
        <HowWeBuild
          title="How We Build Healthcare Solutions"
          description="At Specslo, every healthcare project follows a clear, collaborative process — turning your specs into intelligent, patient-centered solutions, step by step."
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
        <FAQSection isWebDevelopment={false} />
      </div>
      <ContactSection />
      <KeyFeatures
        title="Looking to transform your healthcare operations?"
        subtitle=""
        showCards={false}
        showImage={true}
        characterImage="https://res.cloudinary.com/drdjii8fe/image/upload/v1760377285/2._Underline_lftjhb.png"
      />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default HealthcareSolutions;
