import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ServicesPackages from "@/components/shared/ServicesPackages";
import StatsSection from "@/components/webdevelopment/StatsSection";
import PortfolioSection from "@/components/PortfolioSection";
import BlogSection from "@/components/BlogSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import KeyFeatures from "@/components/webdevelopment/KeyFeatures";
import WhyCustomWebsitesMatter from "@/components/webdevelopment/WhyCustomWebsitesMatter";
import HowWeBuild from "@/components/webdevelopment/HowWeBuild";
import SolutionFocusedServices from "@/components/softwaredevelopment/SolutionFocusedServices";

const SoftwareDevelopment = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <HeroSection
        backgroundImage="https://res.cloudinary.com/drdjii8fe/image/upload/v1759322510/1._Hero_Section_vjqad7.png"
        mainHeadline="Custom"
        highlightedWord="Software"
        headlineAfterHighlight="Development Solutions"
        subHeadline="We build scalable, secure software tailored to your specs and business needs."
        primaryButtonText="Request a Free Quote"
        showSecondaryButton={false}
        showCtaText={false}
        stat1Value="80+"
        stat1Label="Software Solutions Delivered"
        stat2Value="3x"
        stat2Label="Process Efficiency"
        stat3Value="70%"
        stat3Label="Cost Reduction"
        bottomSectionText="Software Built Around Your Specs"
        bottomHighlightedWord="Software, Specs"
        show3DLogo={false}
      />
      <StatsSection
        missionText="At Specslo, we build custom software solutions crafted around your specs, streamlining operations and driving business growth."
        highlightedWord="Specslo, custom software, specs"
        stat1Value="80+"
        stat1Label="Software Solutions Delivered"
        stat2Value="3x"
        stat2Label="Process Efficiency"
        stat3Value="70%"
        stat3Label="Cost Reduction"
        characterImage="https://res.cloudinary.com/dknafpppp/image/upload/v1758908591/Screenshot_2025-09-27_at_12.42.42_AM_pc2e1e.png"
      />
      <div id="services">
        <ServicesPackages
          heading="Software We Build"
          description="From essential business tools to enterprise-grade platforms, we create custom software that automates workflows, integrates seamlessly, and scales with your growth."
          packages={[
            {
              title: "Starter",
              subtitle: "Solution",
              description:
                "For businesses looking to automate core processes.",
              image:
                "https://res.cloudinary.com/drdjii8fe/image/upload/v1759322665/1._Business_Project_Management_swtppy.png",
              features: [
                "Custom Workflow Automation",
                "User & Role Management",
                "Basic Reporting & Analytics",
                "Cloud-Based or On-Premise Deployment",
                "API Integration (1-2 Core Systems)",
                "Responsive Web Interface",
                "Security & Data Encryption",
                "Testing & Quality Assurance",
                "3 Months Free Support",
              ],
            },
            {
              title: "Business",
              subtitle: "Platform",
              description:
                "For growing businesses needing integrated, scalable solutions.",
              image:
                "https://res.cloudinary.com/drdjii8fe/image/upload/v1759322676/2._Sourcing_Stock_Management_bk3z3g.png",
              features: [
                "Everything in Starter Solution, plus:",
                "Advanced Workflow Automation",
                "Custom Dashboard & Reporting",
                "Multi-Module Integration",
                "Third-Party API Integrations (Multiple)",
                "Role-Based Access Control",
                "Real-time Data Sync",
                "Mobile-Responsive Interface",
                "Advanced Analytics & Insights",
                "6 Months Free Support & Updates",
              ],
            },
            {
              title: "Enterprise",
              subtitle: "Suite",
              description:
                "For organizations requiring comprehensive, mission-critical software.",
              image:
                "https://res.cloudinary.com/drdjii8fe/image/upload/v1759322684/3._Asset_Management_jaxh0c.png",
              features: [
                "Everything in Business Platform, plus:",
                "Full ERP/CRM Integration",
                "AI & Machine Learning Features",
                "Advanced Security & Compliance (SOC 2, HIPAA, GDPR)",
                "Custom Admin Panel with Full Control",
                "Multi-tenant Architecture",
                "Real-time Collaboration Tools",
                "Advanced Data Visualization",
                "Microservices Architecture",
                "DevOps & CI/CD Integration",
                "Dedicated Support Team",
                "12 Months Free Support & Maintenance",
              ],
            },
          ]}
        />
      </div>
      <div id="key-features">
        <SolutionFocusedServices
          title="Solution-Focused"
          subtitle="Services"
          description="We build software solutions that solve real business challenges across every department."
        />
      </div>
      <div id="tech-stack">
        <KeyFeatures
          title="Our Tech"
          subtitle="Stack"
          titleSize="text-4xl md:text-5xl lg:text-6xl"
          description="Software Development Tools We Are Specialized In"
          showImage={false}
          showCards={false}
          showTechStack={true}
        />
      </div>

      <div id="how-we-build">
        <HowWeBuild
          title="How We Build"
          description="At Specslo, every software project follows a clear, collaborative process — turning your specs into a scalable, production-ready solution, step by step."
        />
      </div>

      <WhyCustomWebsitesMatter
        title="Why Custom Software Matters"
        description="Custom software aligns with your unique workflows, scales with your growth, and delivers secure, efficient operations — helping your business save time, reduce costs, and stay competitive."
        benefits={[
          {
            image:
              "https://res.cloudinary.com/drdjii8fe/image/upload/v1759323145/1._Process_Automation_jvoo5c.png",
            title: "Process Automation",
            description: "Automate repetitive tasks and free up your team for strategic work.",
          },
          {
            image:
              "https://res.cloudinary.com/drdjii8fe/image/upload/v1759323145/2._Data-Driven_Decisions_w6ejdx.png",
            title: "Data-Driven Decisions",
            description: "Get real-time insights to make informed business decisions.",
          },
          {
            image:
              "https://res.cloudinary.com/drdjii8fe/image/upload/v1759323145/3._Scalable_Infrastructure_sapd3t.png",
            title: "Scalable Infrastructure",
            description: "Grow without limits — your software scales with your business.",
          },
          {
            image:
              "https://res.cloudinary.com/drdjii8fe/image/upload/v1759323145/4._Secure_Compliant_ao1mo6.png",
            title: "Secure & Compliant",
            description: "Enterprise-grade security and compliance built in from day one.",
          },
          {
            image:
              "https://res.cloudinary.com/drdjii8fe/image/upload/v1759323145/5._Operational_Efficiency_yvnkzm.png",
            title: "Operational Efficiency",
            description: "Streamline operations and reduce manual errors significantly.",
          },
          {
            image:
              "https://res.cloudinary.com/drdjii8fe/image/upload/v1759323146/6._Smart_Integrations_rptr4h.png",
            title: "Smart Integrations",
            description: "Connect all your tools and systems in one unified platform.",
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
        title="Looking to build Software that actually fits your business ?"
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

export default SoftwareDevelopment;

