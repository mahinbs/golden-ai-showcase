import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Sparkles, Zap, Brain } from "lucide-react";
import { useLocation } from "react-router-dom";
import heroImage from "@/assets/banners/home-banner.png";
import Logo3D from "./Logo3D";

interface HeroSectionProps {
  // Main headline props
  mainHeadline?: string;
  highlightedWord?: string;
  headlineAfterHighlight?: string;
  
  // Subheadline props
  subHeadline?: string;
  
  // Call to action text (optional, shown on home page)
  ctaText?: string;
  
  // Button text
  primaryButtonText?: string;
  secondaryButtonText?: string;
  
  // Stats
  stat1Value?: string;
  stat1Label?: string;
  stat2Value?: string;
  stat2Label?: string;
  stat3Value?: string;
  stat3Label?: string;
  
  // Bottom section text
  bottomSectionText?: string;
  bottomHighlightedWord?: string;
  
  // Background image
  backgroundImage?: string;
  
  // Show/hide elements
  showSecondaryButton?: boolean;
  showCtaText?: boolean;
  show3DLogo?: boolean;
}

const HeroSection = ({
  mainHeadline = "You've Got",
  highlightedWord = "Specs",
  headlineAfterHighlight = "",
  subHeadline = "But No One Gets It Right ?",
  ctaText = "We'll Build What Matters.",
  primaryButtonText = "Explore Our Services",
  secondaryButtonText = "View Our Work",
  stat1Value = "100+",
  stat1Label = "Projects Delivered",
  stat2Value = "50+",
  stat2Label = "Happy Clients",
  stat3Value = "99%",
  stat3Label = "Success Rate",
  bottomSectionText = "What You Can Expect From Us?",
  bottomHighlightedWord = "Expect",
  backgroundImage = heroImage,
  showSecondaryButton = true,
  showCtaText = true,
  show3DLogo = true
}: HeroSectionProps = {}) => {
  const location = useLocation();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <section
        id="hero"
        className="relative min-h-screen pt-10 flex flex-col items-start justify-center overflow-hidden"
      >
        <img
          src={backgroundImage}
          className="absolute inset-0 h-full w-full z-0 object-cover"
          alt=""
        />

        {/* Completely Black Background */}
        <div className="absolute inset-0 z-10 bg-black/80"></div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col-reverse lg:grid grid-cols-2 items-center gap-5 min-h-[85vh] pt-16">
          {/* <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between min-h-screen"> */}
            {/* Left Content */}
            <div className="flex-1 flex flex-col justify-center text-left animate-fade-in">
            {/* Main Headline */}
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight animate-slide-up">
              {mainHeadline}{" "}
              <span className="bg-[#ffd63c] text-black px-4 py-1 rounded-lg">
                {highlightedWord}
              </span>
              {headlineAfterHighlight && (
                <>
                  <br />
                  {headlineAfterHighlight}
                </>
              )}
            </h1>

            {/* Yellow Separator Line */}
            <div
              className="max-w-[32rem] w-full h-1 bg-[#ffd63c] mb-6 animate-slide-up"
              style={{ animationDelay: "0.2s" }}
            ></div>

            {/* Sub-headline */}
            <h2
              className="font-bold text-white mb-6 animate-slide-up text-base md:text-xl lg:text-2xl"
              style={{ animationDelay: "0.3s" }}
            >
              {subHeadline}
            </h2>

            {/* Call to Action */}
            {showCtaText && ctaText && (
              <div
                className="text-2xl md:text-4xl font-bold text-[#ffd63c] mb-6 animate-slide-up"
                style={{ animationDelay: "0.4s" }}
              >
                {ctaText}
              </div>
            )}

            {/* Enhanced Buttons */}
            <div
              className="flex flex-col sm:flex-row gap-4 justify-start items-start mb-12 animate-slide-up"
              style={{ animationDelay: "0.4s" }}
            >
              <Button
                variant="hero"
                size="xl"
                onClick={() => scrollToSection("services")}
                className="group relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  {primaryButtonText}
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Button>
              {showSecondaryButton && (
                <Button
                  variant="outline"
                  size="xl"
                  onClick={() => scrollToSection("portfolio")}
                  className="bg-foreground/10 border-foreground/50 text-foreground hover:bg-foreground hover:text-background backdrop-blur-sm group relative overflow-hidden"
                >
                  <span className="relative z-10 flex items-center">
                    <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                    {secondaryButtonText}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-foreground/5 to-foreground/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Button>
              )}
            </div>

            {/* Enhanced Stats with Animations */}
            <div
              className="grid grid-cols-3 gap-8 max-w-2xl animate-slide-up"
              style={{ animationDelay: "0.6s" }}
            >
              <div className="text-left group">
                <div className="text-3xl md:text-4xl font-bold text-accent mb-2 animate-count-up group-hover:scale-110 transition-transform duration-300">
                  {stat1Value}
                </div>
                <div className="text-foreground/80 text-sm md:text-base group-hover:text-foreground transition-colors duration-300">
                  {stat1Label}
                </div>
              </div>
              <div
                className="text-left group"
                style={{ animationDelay: "0.1s" }}
              >
                <div className="text-3xl md:text-4xl font-bold text-accent mb-2 animate-count-up group-hover:scale-110 transition-transform duration-300">
                  {stat2Value}
                </div>
                <div className="text-foreground/80 text-sm md:text-base group-hover:text-foreground transition-colors duration-300">
                  {stat2Label}
                </div>
              </div>
              <div
                className="text-left group"
                style={{ animationDelay: "0.2s" }}
              >
                <div className="text-3xl md:text-4xl font-bold text-accent mb-2 animate-count-up group-hover:scale-110 transition-transform duration-300">
                  {stat3Value}
                </div>
                <div className="text-foreground/80 text-sm md:text-base group-hover:text-foreground transition-colors duration-300">
                  {stat3Label}
                </div>
              </div>
            </div>
            </div>

            {/* Right Content - 3D Logo */}
            {show3DLogo && (
              <div className="flex-1 lg:max-w-lg xl:max-w-xl h-[400px] lg:h-[600px] flex items-center justify-center translate-y-24 sm:translate-y-0">
                <Logo3D 
                  className="w-full h-full"
                  scale={2.8}
                  position={[0, 0, 0]}
                  autoRotate={true}
                  enableControls={false}
                />
              </div>
            )}
          </div>
        </div>

         {/* What to expect section */}
      <div className="relative z-10 w-full py-[2rem] wrapper text-center bg-gradient-to-b from-transparent to-black">
        <h2 className="text2">
          {(() => {
            // Support multiple highlighted words separated by comma
            const wordsToHighlight = bottomHighlightedWord.split(',').map(w => w.trim());
            
            // Create a regex pattern for all words to highlight
            const pattern = new RegExp(`(${wordsToHighlight.join('|')})`, 'gi');
            const parts = bottomSectionText.split(pattern);
            
            return parts.map((part, index) => {
              // Check if this part should be highlighted
              const shouldHighlight = wordsToHighlight.some(
                word => part.toLowerCase() === word.toLowerCase()
              );
              
              if (shouldHighlight) {
                return (
                  <span key={index} className="text-yellowClr font-glacial">
                    {part}
                  </span>
                );
              }
              return <span key={index}>{part}</span>;
            });
          })()}
        </h2>
      </div>

        {/* Animated Background Grid */}
        <div className="absolute inset-0 z-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,215,0,0.3) 1px, transparent 0)`,
              backgroundSize: "20px 20px",
            }}
          ></div>
        </div>
      </section>
     
    </>
  );
};

export default HeroSection;
