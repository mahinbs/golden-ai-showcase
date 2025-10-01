import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/webdevelopment/StatsSection";
import PortfolioSection from "@/components/PortfolioSection";
import BlogSection from "@/components/BlogSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import BrochureSection from "@/components/BrochureSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import KeyFeatures from "@/components/appdevelopment/KeyFeatures";
import WhyCustomWebsitesMatter from "@/components/webdevelopment/WhyCustomWebsitesMatter";
import HowWeBuild from "@/components/webdevelopment/HowWeBuild";
import ServicesPackages from "@/components/shared/ServicesPackages";
import SmarterAppsWithAI from "@/components/appdevelopment/SmarterAppsWithAI";

const AppDevelopment = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <HeroSection
        backgroundImage="https://res.cloudinary.com/drdjii8fe/image/upload/v1759220174/1._Hero_Image_dol3if.png"
        mainHeadline="Custom"
        highlightedWord="App"
        headlineAfterHighlight="Development Solutions"
        subHeadline="We build scalable, user-friendly mobile apps that fit your specs."
        primaryButtonText="Request a Free Quote"
        showSecondaryButton={false}
        showCtaText={false}
        stat1Value="70+"
        stat1Label="Apps Delivered"
        stat2Value="2x"
        stat2Label="User Retention"
        stat3Value="65%"
        stat3Label="Improved User Stickiness"
        bottomSectionText="Apps Built Around Your Specs"
        bottomHighlightedWord="Apps, Specs"
      />
      <StatsSection
        missionText="At Specslo, we build Mobile Apps crafted around your specs, ensuring intuitive interfaces and scalable performance."
        highlightedWord="Specslo, Mobile Apps, specs"
        stat1Value="70+"
        stat1Label="Apps Delivered"
        stat2Value="2x"
        stat2Label="User Retention"
        stat3Value="65%"
        stat3Label="Improved User Stickiness"
        characterImage="https://res.cloudinary.com/drdjii8fe/image/upload/v1759220178/2._h7yc53.png"
      />
      <div id="services">
        <ServicesPackages
          heading="Apps We Build"
          description="From on-demand platforms to AI-powered tools, we build apps that match your mission and drive your business forward."
          packages={[
            {
              title: "LaunchPad",
              subtitle: "App",
              description:
                "For validating your idea with a clean, functional app.",
              image:
                "https://res.cloudinary.com/drdjii8fe/image/upload/v1759219901/1._LaunchPad_App_vyzrhc.png",
              features: [
                "5–8 Core Screens (Login, Dashboard, Profile, etc.)",
                "UI/UX Design Aligned with Your Brand",
                "Android OR iOS Deployment",
                "Basic Analytics Integration",
                "Push Notifications",
                "API Integration (1–2 Core APIs)",
                "Testing & Bug Fixing",
                "3 Months Free Support",
              ],
            },
            {
              title: "Growth Engine",
              subtitle: "App",
              description:
                "For businesses ready to launch and scale user engagement.",
              image:
                "https://res.cloudinary.com/drdjii8fe/image/upload/v1759219897/2._Growth_Engine_App_t9rw79.png",
              features: [
                "10–20 Custom Screens with Advanced UI/UX",
                "Android AND iOS Deployment",
                "Advanced Analytics & Tracking",
                "Push Notifications & In-App Messaging",
                "Payment Gateway Integration",
                "Multi-language Support",
                "API Integrations (Multiple)",
                "Admin Dashboard (Web)",
                "Testing on Multiple Devices",
                "3 Months Free Support",
              ],
            },
            {
              title: "Impact Lead",
              subtitle: "App",
              description:
                "For organizations requiring a scalable, feature-rich app.",
              image:
                "https://res.cloudinary.com/drdjii8fe/image/upload/v1759219898/3._Impact_Lead_App_xtdmcl.png",
              features: [
                "20+ Screens with Premium Custom UI/UX",
                "Android AND iOS Deployment",
                "Advanced Analytics & AI Insights",
                "In-App Chat & Video Calls",
                "Payment, Subscription, & Wallet Integrations",
                "Custom Admin Panel & User Management",
                "IoT & Wearable Device Integration (if required)",
                "AI Features (Chatbots, Recommendations, Predictive Analytics)",
                "Security & Compliance (HIPAA/GDPR Ready)",
                "Comprehensive Testing & Optimization",
                "6 Months Free Support & Maintenance",
              ],
            },
          ]}
        />
      </div>
      <div id="key-features">
        <KeyFeatures
          title="App Types We "
          subtitle="Build"
          description="From on-demand platforms to 
AI-powered tools, we build apps that match your mission and drive your business forward."
        />
      </div>

      <div id="tech-stack">
        <KeyFeatures
          title="Our Tech"
          subtitle="Stack"
          titleSize="text-4xl md:text-5xl lg:text-6xl"
          description="Mobile App Development Tools We Are Specialized In"
          showImage={false}
          showCards={false}
          showTechStack={true}
        />
      </div>

      <div id="how-we-build">
        <HowWeBuild
          title="How We Build"
          description="At Specslo, every project follows a clear, collaborative process turning your specs into a scalable solution, step by step."
        />
      </div>

      <SmarterAppsWithAI />

      <WhyCustomWebsitesMatter
        title="Why Custom Apps Matter"
        description="A custom app aligns with your workflows, scales with your growth, and delivers a fast, intuitive experience that keeps users engaged and your business ahead."
        benefits={[
          {
            image:
              "https://res.cloudinary.com/drdjii8fe/image/upload/v1759220024/1_Workflow_Fit_qykrfz.png",
            title: "Workflow Fit",
            description: "",
          },
          {
            image:
              "https://res.cloudinary.com/drdjii8fe/image/upload/v1759220026/2_Performance_Speed_dv3brj.png",
            title: "Performance & Speed",
            description: "",
          },
          {
            image:
              "https://res.cloudinary.com/drdjii8fe/image/upload/v1759220024/3_Seamless_Experience_alteuw.png",
            title: "Seamless Experience",
            description: "",
          },
          {
            image:
              "https://res.cloudinary.com/drdjii8fe/image/upload/v1759220024/4_Scalability_ah9fg1.png",
            title: "Scalability",
            description: "",
          },
          {
            image:
              "https://res.cloudinary.com/drdjii8fe/image/upload/v1759220025/5_Data-Driven_Insights_xmjckk.png",
            title: "Data-Driven Insights",
            description: "",
          },
          {
            image:
              "https://res.cloudinary.com/drdjii8fe/image/upload/v1759220025/6_Smart_Integrations_vxnzik.png",
            title: "Smart Integrations",
            description: "",
          },
        ]}
      />

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
        title="Looking to build a App that actually fits your business ?"
        subtitle=""
        showCards={false}
        showImage={true}
        characterImage="https://res.cloudinary.com/drdjii8fe/image/upload/v1759220176/CTA_2_bbgw3d.png"
      />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default AppDevelopment;
