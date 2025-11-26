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
import WhereAIFitsBest from "@/components/aisolutions/WhereAIFitsBest";
import bgImg from "../assets/ai-solutions.webp";

const AISolutions = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <HeroSection
        backgroundImage={bgImg}
        mainHeadline="Custom"
        highlightedWord="AI"
        headlineAfterHighlight="Solutions"
        subHeadline="We build intelligent AI systems tailored to your specs and business workflows."
        primaryButtonText="Request a Free Quote"
        showSecondaryButton={false}
        showCtaText={false}
        stat1Value="50+"
        stat1Label="AI Solutions Deployed"
        stat2Value="5x"
        stat2Label="Productivity Boost"
        stat3Value="80%"
        stat3Label="Automation Rate"
        bottomSectionText="AI Solutions Built Around Your Specs"
        bottomHighlightedWord="AI, Specs"
        show3DLogo={false}
      />
      <StatsSection
        missionText="At Specslo, we build AI-powered solutions crafted around your specs, automating workflows and unlocking new possibilities for your business."
        highlightedWord="Specslo, AI-powered, specs"
        stat1Value="50+"
        stat1Label="AI Solutions Deployed"
        stat2Value="5x"
        stat2Label="Productivity Boost"
        stat3Value="80%"
        stat3Label="Automation Rate"
        characterImage="https://res.cloudinary.com/drdjii8fe/image/upload/v1759853517/2_eywihc.png"
      />
      <div id="services">
        <ServicesPackages
          heading="AI Solutions We Build"
          description="From intelligent automation to advanced AI agents, we create custom AI solutions that transform how your business operates and serves customers."
          packages={[
            {
              title: "Agentic",
              subtitle: "AI",
              description:
                "AI agents that act autonomously to complete tasks and make decisions.",
              image:
                "https://res.cloudinary.com/drdjii8fe/image/upload/v1759853519/Agentic_AI_nxsfzy.png",
              features: [
                "Custom AI Agents for Specific Tasks",
                "Autonomous Decision-Making Systems",
                "Multi-Agent Collaboration",
                "Task Planning & Execution",
                "Integration with Existing Workflows",
                "Real-time Learning & Adaptation",
                "Performance Monitoring & Analytics",
                "API Integration with Business Tools",
                "3 Months Free Support & Optimization",
              ],
            },
            {
              title: "Generative",
              subtitle: "AI",
              description:
                "AI systems that create content, generate insights, and enhance creativity.",
              image:
                "https://res.cloudinary.com/drdjii8fe/image/upload/v1759853528/Generative_AI_fg7s7h.png",
              features: [
                "Custom AI Models for Content Generation",
                "Text, Image, and Code Generation",
                "Fine-tuned LLMs for Your Domain",
                "RAG (Retrieval-Augmented Generation)",
                "Custom Training on Your Data",
                "Multi-modal AI Capabilities",
                "API Integration & Deployment",
                "Prompt Engineering & Optimization",
                "Continuous Model Improvement",
                "6 Months Free Support & Updates",
              ],
            },
          ]}
        />
      </div>
      <div id="key-features">
        <WhereAIFitsBest
          title="Where AI"
          subtitle="Fits Best"
          description="Discover how AI can transform different aspects of your business operations."
        />
      </div>
      <div id="tech-stack">
        <KeyFeatures
          title="Our Tech"
          subtitle="Stack"
          titleSize="text-4xl md:text-5xl lg:text-6xl"
          description="AI Development Tools & Frameworks We Are Specialized In"
          showImage={false}
          showCards={false}
          showTechStack={true}
        />
      </div>

      <div id="how-we-build">
        <HowWeBuild
          title="How We Build AI"
          description="At Specslo, every AI project follows a clear, data-driven process — from understanding your specs to deploying production-ready AI solutions."
        />
      </div>

      {/* <WhyCustomWebsitesMatter
        title="Why Custom AI Matters"
        description="Custom AI solutions understand your unique business context, adapt to your workflows, and deliver intelligent automation that off-the-shelf tools simply can't match."
        benefits={[
          {
            image:
              "https://res.cloudinary.com/drdjii8fe/image/upload/v1759853523/Automation_ajufg9.png",
            title: "Automation",
            description:
              "Automate complex tasks that previously required human intervention.",
          },
          {
            image:
              "https://res.cloudinary.com/drdjii8fe/image/upload/v1759853529/Workflows_fal5ov.png",
            title: "Workflows",
            description:
              "Streamline entire workflows with intelligent decision-making.",
          },
          {
            image:
              "https://res.cloudinary.com/drdjii8fe/image/upload/v1759853521/AI_Agents_krwe6y.png",
            title: "AI Agents",
            description:
              "Deploy autonomous agents that work 24/7 to achieve your goals.",
          },
          {
            image:
              "https://res.cloudinary.com/drdjii8fe/image/upload/v1759853524/button_2_laoowx.png",
            title: "Smart Integration",
            description:
              "Connect AI seamlessly with your existing systems and tools.",
          },
          {
            image:
              "https://res.cloudinary.com/drdjii8fe/image/upload/v1759853523/Automation_ajufg9.png",
            title: "Predictive Insights",
            description:
              "Make data-driven decisions with AI-powered predictions.",
          },
          {
            image:
              "https://res.cloudinary.com/drdjii8fe/image/upload/v1759853529/Workflows_fal5ov.png",
            title: "Continuous Learning",
            description: "AI that improves over time with your business data.",
          },
        ]}
      /> */}

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
        <FAQSection serviceType="ai-solutions" />
      </div>
      <ContactSection />
      <KeyFeatures
        title="Looking to integrate AI that actually fits your business ?"
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

export default AISolutions;
