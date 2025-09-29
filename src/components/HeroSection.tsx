import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Sparkles, Zap, Brain } from "lucide-react";
import { useLocation } from "react-router-dom";
import heroImage from "@/assets/banners/home-banner.png";
import Logo3D from "./Logo3D";

const HeroSection = () => {
  const location = useLocation();
  const isWebDevelopmentPage = location.pathname === "/web-development";

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
        className="relative min-h-screen flex items-center justify-start overflow-hidden"
      >
        <img
          src={heroImage}
          className="absolute inset-0 h-full w-full z-0 object-cover"
          alt=""
        />

        {/* Completely Black Background */}
        <div className="absolute inset-0 z-10 bg-black/90"></div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col-reverse lg:grid grid-cols-2 items-center gap-5 min-h-screen">
          {/* <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between min-h-screen"> */}
            {/* Left Content */}
            <div className="flex-1 flex flex-col justify-center text-left animate-fade-in">
            {/* Main Headline */}
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight animate-slide-up">
              {isWebDevelopmentPage ? (
                <>
                  Custom{" "}
                  <span className="bg-[#ffd63c] text-black px-4 py-1 rounded-lg">
                    Web
                  </span>
                  <br />
                  Development
                  <br />
                  Solution
                </>
              ) : (
                <>
                  You've Got{" "}
                  <span className="bg-[#ffd63c] text-black px-4 py-1 rounded-lg">
                    Specs
                  </span>
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
              className={`font-bold text-white mb-6 animate-slide-up ${
                isWebDevelopmentPage
                  ? "text-base md:text-xl"
                  : "text-2xl md:text-4xl"
              }`}
              style={{ animationDelay: "0.3s" }}
            >
              {isWebDevelopmentPage
                ? "websites that fit and perform, Crafted around your specs"
                : "But No One Gets It Right ?"}
            </h2>

            {/* Call to Action */}
            {!isWebDevelopmentPage && (
              <div
                className="text-2xl md:text-4xl font-bold text-[#ffd63c] mb-6 animate-slide-up"
                style={{ animationDelay: "0.4s" }}
              >
                We'll Build What Matters.
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
                  {isWebDevelopmentPage
                    ? "Request a Free Quote"
                    : "Explore Our Services"}
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Button>
              {!isWebDevelopmentPage && (
                <Button
                  variant="outline"
                  size="xl"
                  onClick={() => scrollToSection("portfolio")}
                  className="bg-foreground/10 border-foreground/50 text-foreground hover:bg-foreground hover:text-background backdrop-blur-sm group relative overflow-hidden"
                >
                  <span className="relative z-10 flex items-center">
                    <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                    View Our Work
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
                  100+
                </div>
                <div className="text-foreground/80 text-sm md:text-base group-hover:text-foreground transition-colors duration-300">
                  Projects Delivered
                </div>
              </div>
              <div
                className="text-left group"
                style={{ animationDelay: "0.1s" }}
              >
                <div className="text-3xl md:text-4xl font-bold text-accent mb-2 animate-count-up group-hover:scale-110 transition-transform duration-300">
                  50+
                </div>
                <div className="text-foreground/80 text-sm md:text-base group-hover:text-foreground transition-colors duration-300">
                  Happy Clients
                </div>
              </div>
              <div
                className="text-left group"
                style={{ animationDelay: "0.2s" }}
              >
                <div className="text-3xl md:text-4xl font-bold text-accent mb-2 animate-count-up group-hover:scale-110 transition-transform duration-300">
                  99%
                </div>
                <div className="text-foreground/80 text-sm md:text-base group-hover:text-foreground transition-colors duration-300">
                  Success Rate
                </div>
              </div>
            </div>
            </div>

            {/* Right Content - 3D Logo */}
            <div className="flex-1 lg:max-w-lg xl:max-w-xl h-[400px] lg:h-[600px] flex items-center justify-center translate-y-24 sm:translate-y-0">
              <Logo3D 
                className="w-full h-full"
                scale={isWebDevelopmentPage ? 2.8 : 2.8}
                position={[0, 0, 0]}
                autoRotate={true}
                enableControls={false}
              />
            </div>
          </div>
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
      {/* What to expect section */}
      <div className="relative z-10 w-full py-[2rem] wrapper text-center bg-gradient-to-b from-transparent to-black">
        <h2 className="text2">
          {isWebDevelopmentPage ? (
            <>
              <span className="text-yellowClr font-glacial">Websites</span> for
              Every <span className="text-yellowClr font-glacial">Specs</span>
            </>
          ) : (
            <>
              What You Can{" "}
              <span className="text-yellowClr font-glacial">Expect</span> From
              Us?
            </>
          )}
        </h2>
      </div>
    </>
  );
};

export default HeroSection;
