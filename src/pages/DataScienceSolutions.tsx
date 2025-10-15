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
import DataAnalyticsServices from "@/components/datascience/DataAnalyticsServices";
import DataScienceServices from "@/components/datascience/DataScienceServices";
import DataEngineeringServices from "@/components/datascience/DataEngineeringServices";
import DeliveringImpactfulDataSolutions from "@/components/datascience/DeliveringImpactfulDataSolutions";
import WhereDataWorks from "@/components/datascience/WhereDataWorks";
import heroImg from "../assets/datascience-hero.webp";

const DataScienceSolutions = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <HeroSection
        backgroundImage={heroImg}
        mainHeadline=""
        highlightedWord="Data Analytics &"
        headlineAfterHighlight="Science Solutions"
        subHeadline="Unlock the power of your data with advanced analytics, machine learning, and intelligent insights."
        primaryButtonText="Request a Free Quote"
        showSecondaryButton={false}
        showCtaText={false}
        stat1Value="100+"
        stat1Label="Data Projects Delivered"
        stat2Value="95%"
        stat2Label="Accuracy Rate"
        stat3Value="3x"
        stat3Label="ROI Improvement"
        bottomSectionText="Data insights Built Around You"
        bottomHighlightedWord="Data"
        show3DLogo={false}
      />
      <StatsSection
        missionText="At Specslo, we unlock the power of your data with advanced analytics, machine learning, and intelligent insights that drive business growth."
        highlightedWord="Specslo, data, analytics"
        stat1Value="100+"
        stat1Label="Data Projects Delivered"
        stat2Value="95%"
        stat2Label="Accuracy Rate"
        stat3Value="3x"
        stat3Label="ROI Improvement"
        characterImage="https://res.cloudinary.com/drdjii8fe/image/upload/v1759854575/2_obt3uh.png"
      />

      <DataAnalyticsServices />

      <DataScienceServices />

      <DataEngineeringServices />

      <DeliveringImpactfulDataSolutions />

      <WhereDataWorks />

      <div id="how-we-build">
        <HowWeBuild
          title="How We Build Data Solutions"
          description="At Specslo, every data project follows a clear, collaborative process — turning your specs into intelligent, actionable insights, step by step."
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
        title="Looking to unlock the power of your data ?"
        subtitle=""
        showCards={false}
        showImage={true}
        characterImage="https://res.cloudinary.com/drdjii8fe/image/upload/v1759855659/CTA_2_nzwvks.png"
      />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default DataScienceSolutions;
