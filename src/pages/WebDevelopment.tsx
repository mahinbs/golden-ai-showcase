import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ServicesPackages from "@/components/shared/ServicesPackages";
import StatsSection from "@/components/webdevelopment/StatsSection";
import img1 from "@/assets/websites we build/1. Essential Website.png";
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
import heroImage from "@/assets/banners/home-banner.png";

const WebDevelopment = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <HeroSection
        backgroundImage={heroImage}
        mainHeadline="Custom"
        highlightedWord="Web"
        headlineAfterHighlight="Development Solution"
        subHeadline="Websites that fit and perform, crafted around your specs"
        primaryButtonText="Request a Free Quote"
        showSecondaryButton={false}
        showCtaText={false}
        bottomSectionText="Websites for Every Specs"
        bottomHighlightedWord="Websites"
      />
      <StatsSection missionText="At Specslo, we build secure, scalable websites crafted around your specs to drive business growth." />
      <div id="services">
        <ServicesPackages 
          heading="Websites We Build"
          description="From simple brand presence sites to advanced platforms with AI and workflow automation, we craft websites that fit your specs and support your business growth."
          packages={[
            {
              title: "Essential",
              subtitle: "Website",
              description: "For businesses establishing a credible online presence.",
              image: img1,
              features: [
                "Up to 10 Pages to showcase services clearly.",
                "Lead Capture Forms to start conversations.",
                "Mobile-Responsive Design for all devices.",
                "SSL Security & Core SEO Optimization.",
                "Fast Loading & Clean User Experience.",
                "Chat & WhatsApp Widget Integration",
                "Custom Design (1-2 style options).",
                "Delivery: 2-3 weeks"
              ]
            },
            {
              title: "Interactive",
              subtitle: "Website",
              description: "For brands ready to engage visitors and build authority.",
              image: "https://res.cloudinary.com/drdjii8fe/image/upload/v1758983823/2._Interactive_Website_ab0s0h.png",
              features: [
                "Everything in Essential Website, plus:",
                "10 to 25 Pages",
                "CMS Integration (WordPress/Headless Options)",
                "Blog & Content Management",
                "Google Optimization & Search Submission",
                "Multilingual Support",
                "Free Stock Images (up to 10)",
                "Lead Magnet Integration",
                "Custom Theme (2-3 options)",
                "Delivery: 4-6 weeks"
              ]
            },
            {
              title: "Advanced",
              subtitle: "Website",
              description: "For scaling brands, digital products, and growth driven businesses.",
              image: "https://res.cloudinary.com/drdjii8fe/image/upload/v1758986306/3._Advanced_Website_ky2shk.png",
              features: [
                "Everything in Interactive Website, plus:",
                "20+ Pages",
                "Role-Based Content Management",
                "Advanced SEO Tools Integration",
                "AI Chatbot/AI Features Integration",
                "E-commerce or Membership Functionality",
                "Blog Categorization & Search System",
                "Free Stock Images (up to 20)",
                "Custom Theme (3–4 options)",
                "Integration with CRM, Analytics, Marketing Tools",
                "Delivery: 8–12 weeks"
              ]
            }
          ]}
        />
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
        <PortfolioSection isSlider={true} />
      </div>
      <div id="blog">
        <BlogSection />
      </div>
      <div id="testimonials">
        <TestimonialsSection />
      </div>
      <div id="faq">
        <FAQSection serviceType="web-development" />
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
