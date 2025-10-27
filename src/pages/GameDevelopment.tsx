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
import PlatformsWeBuildFor from "@/components/gamedevelopment/PlatformsWeBuildFor";
import GameWorldsWeBuild from "@/components/gamedevelopment/GameWorldsWeBuild";
import GameGenres from "@/components/gamedevelopment/GameGenres";
import AIPoweredGamingSolutions from "@/components/gamedevelopment/AIPoweredGamingSolutions";
import heroImg from '../assets/game dev hero.webp'

const GameDevelopment = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <HeroSection
        backgroundImage={heroImg}
        mainHeadline=""
        highlightedWord="Game"
        headlineAfterHighlight="Development Solutions"
        subHeadline="From mobile games to AR/VR, we build games that fit your vision and engage your audience."
        primaryButtonText="Request a Free Quote"
        showSecondaryButton={false}
        showCtaText={false}
        stat1Value="50+"
        stat1Label="Games Delivered"
        stat2Value="1M+"
        stat2Label="Active Players"
        stat3Value="4.5★"
        stat3Label="Average Rating"
        bottomSectionText="Games Built Around Your Specs"
        bottomHighlightedWord="Games, Specs"
        show3DLogo={false}
      />
      <StatsSection
        missionText="At Specslo, we turn your specs into engaging, player-centered Games that transform ideas into immersive digital experiences."
        highlightedWord="Specslo, specs, Games"
        stat1Value="50+"
        stat1Label="Games Delivered"
        stat2Value="1M+"
        stat2Label="Active Players"
        stat3Value="4.5★"
        stat3Label="Average Rating"
        characterImage="https://res.cloudinary.com/drdjii8fe/image/upload/v1760354680/2._kxdmzd.png"
      />
      
      <PlatformsWeBuildFor />
      
      <GameWorldsWeBuild />
      
      <GameGenres />
      
      <div id="tech-stack">
        <KeyFeatures
          title="Our Tech"
          subtitle="Stack"
          titleSize="text-4xl md:text-5xl lg:text-6xl"
          description="Game Development Tools & Engines We Are Specialized In"
          showImage={false}
          showCards={false}
          showTechStack={true}
        />
      </div>

      <div id="how-we-build">
        <HowWeBuild
          title="How We Build Games"
          description="At Specslo, every game project follows a clear, collaborative process — turning your specs into an immersive, polished gaming experience, step by step."
        />
      </div>

      <AIPoweredGamingSolutions />

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
        <FAQSection serviceType="game-development" />
      </div>
      <ContactSection />
      <KeyFeatures
        title="Looking to build a Game that actually fits your vision ?"
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

export default GameDevelopment;

