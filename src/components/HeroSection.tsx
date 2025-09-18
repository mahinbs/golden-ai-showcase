import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Sparkles, Zap, Brain } from "lucide-react";
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
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        {/* Floating Particles */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-accent/30 rounded-full animate-float" style={{ animationDelay: '0s', animationDuration: '6s' }}></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-accent/20 rounded-full animate-float" style={{ animationDelay: '2s', animationDuration: '8s' }}></div>
        <div className="absolute bottom-40 left-20 w-1 h-1 bg-accent/40 rounded-full animate-float" style={{ animationDelay: '4s', animationDuration: '7s' }}></div>
        <div className="absolute top-60 right-40 w-2 h-2 bg-accent/25 rounded-full animate-float" style={{ animationDelay: '1s', animationDuration: '9s' }}></div>
        <div className="absolute bottom-60 right-10 w-1 h-1 bg-accent/35 rounded-full animate-float" style={{ animationDelay: '3s', animationDuration: '5s' }}></div>
        
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Completely Black Background */}
      <div className="absolute inset-0 z-0 bg-black"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          {/* Animated Badge */}
          <div className="inline-block mb-6 animate-slide-up">
            <div className="flex items-center space-x-2 bg-accent/10 backdrop-blur-md border border-accent/20 rounded-full px-4 py-2 text-sm font-medium text-accent">
              <Sparkles className="w-4 h-4 animate-spin" style={{ animationDuration: '3s' }} />
              <span>AI-Powered Solutions</span>
              <Zap className="w-4 h-4 animate-pulse" />
            </div>
          </div>

          {/* Animated Title */}
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight animate-slide-up">
            Transform Your Business
            <br />
            with <span className="text-transparent bg-gradient-to-r from-accent via-accent/80 to-accent bg-clip-text animate-gradient-x">AI Innovation</span>
          </h1>
          
          {/* Animated Subtitle */}
          <p className="text-xl md:text-2xl text-foreground/90 mb-8 max-w-3xl mx-auto leading-relaxed animate-slide-up" style={{ animationDelay: '0.2s' }}>
            We build cutting-edge AI solutions that drive growth, automate processes, 
            and unlock new possibilities for forward-thinking companies.
          </p>
          
          {/* Enhanced Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <Button 
              variant="hero" 
              size="xl"
              onClick={() => scrollToSection("services")}
              className="group relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center">
                Explore Our Services
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Button>
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
          </div>

          {/* Enhanced Stats with Animations */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <div className="text-center group">
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2 animate-count-up group-hover:scale-110 transition-transform duration-300">100+</div>
              <div className="text-foreground/80 text-sm md:text-base group-hover:text-foreground transition-colors duration-300">Projects Delivered</div>
            </div>
            <div className="text-center group" style={{ animationDelay: "0.1s" }}>
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2 animate-count-up group-hover:scale-110 transition-transform duration-300">50+</div>
              <div className="text-foreground/80 text-sm md:text-base group-hover:text-foreground transition-colors duration-300">Happy Clients</div>
            </div>
            <div className="text-center group" style={{ animationDelay: "0.2s" }}>
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2 animate-count-up group-hover:scale-110 transition-transform duration-300">99%</div>
              <div className="text-foreground/80 text-sm md:text-base group-hover:text-foreground transition-colors duration-300">Success Rate</div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-foreground/50 rounded-full flex justify-center group cursor-pointer hover:border-accent transition-colors duration-300">
          <div className="w-1 h-3 bg-accent rounded-full mt-2 animate-bounce group-hover:bg-accent/80 transition-colors duration-300"></div>
        </div>
        <div className="text-xs text-foreground/60 mt-2 text-center animate-pulse">Scroll to explore</div>
      </div>

      {/* Animated Background Grid */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,215,0,0.3) 1px, transparent 0)`,
          backgroundSize: '20px 20px'
        }}></div>
      </div>
    </section>
  );
};

export default HeroSection;