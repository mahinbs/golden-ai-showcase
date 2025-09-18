import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/ai-hero-bg.jpg";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="AI Technology Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-primary opacity-80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-background mb-6 leading-tight">
            Transform Your Business
            <br />
            with <span className="text-accent">AI Innovation</span>
          </h1>
          <p className="text-xl md:text-2xl text-background/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            We build cutting-edge AI solutions that drive growth, automate processes, 
            and unlock new possibilities for forward-thinking companies.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              variant="hero" 
              size="xl"
              onClick={() => scrollToSection("services")}
              className="group"
            >
              Explore Our Services
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="xl"
              onClick={() => scrollToSection("portfolio")}
              className="bg-background/10 border-background/30 text-background hover:bg-background hover:text-foreground"
            >
              <Play className="mr-2 h-5 w-5" />
              View Our Work
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center animate-slide-up">
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">100+</div>
              <div className="text-background/80 text-sm md:text-base">Projects Delivered</div>
            </div>
            <div className="text-center animate-slide-up" style={{ animationDelay: "0.1s" }}>
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">50+</div>
              <div className="text-background/80 text-sm md:text-base">Happy Clients</div>
            </div>
            <div className="text-center animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">99%</div>
              <div className="text-background/80 text-sm md:text-base">Success Rate</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-background/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-accent rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;