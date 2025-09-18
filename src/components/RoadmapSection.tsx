import { 
  Search, 
  ClipboardList, 
  Palette, 
  Camera, 
  Laptop, 
  TestTube, 
  Rocket, 
  Server, 
  Headphones 
} from "lucide-react";

const RoadmapSection = () => {
  const steps = [
    {
      id: 1,
      title: "Discovery",
      description: "We dive deep into your specs, goals, and business challenges to understand exactly what you need.",
      icon: <Search className="w-6 h-6" />,
      side: "right"
    },
    {
      id: 2,
      title: "Planning",
      description: "We turn specs into a solid strategy — outlining timelines, tech stacks, and milestones.",
      icon: <ClipboardList className="w-6 h-6" />,
      side: "left"
    },
    {
      id: 3,
      title: "Design",
      description: "UI/UX designs that reflect your vision and align with your audience.",
      icon: <Palette className="w-6 h-6" />,
      side: "right"
    },
    {
      id: 4,
      title: "Prototyping",
      description: "Interactive prototypes that bring your idea to life — fast feedback, faster decisions.",
      icon: <Camera className="w-6 h-6" />,
      side: "left"
    },
    {
      id: 5,
      title: "Development",
      description: "We code your solution with precision — scalable, secure, and built to perform.",
      icon: <Laptop className="w-6 h-6" />,
      side: "right"
    },
    {
      id: 6,
      title: "Testing",
      description: "Every feature is tested across devices to ensure performance, security, and usability.",
      icon: <TestTube className="w-6 h-6" />,
      side: "left"
    },
    {
      id: 7,
      title: "Launch",
      description: "Your solution goes live — with a smooth, stress-free rollout.",
      icon: <Rocket className="w-6 h-6" />,
      side: "right"
    },
    {
      id: 8,
      title: "Deployment",
      description: "We deploy across environments — ready for scale and real-world use.",
      icon: <Server className="w-6 h-6" />,
      side: "left"
    },
    {
      id: 9,
      title: "Post-Launch Support",
      description: "Your specs evolve, and so do we. We offer updates, maintenance, and optimization to keep everything running at its best.",
      icon: <Headphones className="w-6 h-6" />,
      side: "right"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-background via-background to-secondary/20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,215,0,0.03),transparent_50%)]"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold text-accent bg-accent/10 px-4 py-2 rounded-full border border-accent/20">
              Our Process
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text">
            How We Bring <span className="text-transparent bg-gradient-to-r from-accent to-accent/80 bg-clip-text">Specs to Life</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our proven process ensures your vision becomes reality through 
            systematic planning, execution, and continuous support.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Central Line with Gradient */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full hidden lg:block">
            <div className="w-full h-full bg-gradient-to-b from-accent/20 via-accent to-accent/20 rounded-full"></div>
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-accent rounded-full animate-pulse"></div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-accent rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
          </div>
          
          {/* Steps */}
          <div className="space-y-12">
            {steps.map((step, index) => (
              <div 
                key={step.id}
                className="relative flex items-center justify-center"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Content Card */}
                <div className={`w-full lg:w-5/12 ${step.side === 'left' ? 'lg:pr-8' : 'lg:pl-8'}`}>
                  <div className="group relative">
                    {/* Card Glow Effect */}
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-accent/20 via-accent/10 to-accent/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Main Card */}
                    <div className="relative bg-background/95 backdrop-blur-sm border border-accent/20 rounded-lg p-6 hover:border-accent/40 transition-all duration-500 hover:shadow-xl hover:shadow-accent/10 group-hover:scale-[1.01]">
                      {/* Card Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-gradient-to-br from-accent to-accent/80 rounded-lg flex items-center justify-center text-background shadow-md group-hover:scale-105 transition-transform duration-300">
                            {step.icon}
                          </div>
                          <div>
                            <h3 className="text-lg font-bold bg-gradient-to-r from-accent to-accent/80 bg-clip-text text-transparent group-hover:from-accent group-hover:to-accent transition-all duration-300">
                              {step.title}
                            </h3>
                            <div className="w-6 h-0.5 bg-gradient-to-r from-accent to-transparent mt-1"></div>
                          </div>
                        </div>
                        
                        {/* Step Number */}
                        <div className="relative">
                          <div className="w-7 h-7 bg-gradient-to-br from-accent to-accent/80 rounded-full flex items-center justify-center text-background font-bold text-sm shadow-md group-hover:scale-105 transition-transform duration-300">
                            {step.id}
                          </div>
                          <div className="absolute -inset-0.5 bg-gradient-to-br from-accent/30 to-accent/10 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                      </div>
                      
                      {/* Description */}
                      <p className="text-muted-foreground leading-relaxed text-sm group-hover:text-foreground/90 transition-colors duration-300">
                        {step.description}
                      </p>
                      
                      {/* Progress Indicator */}
                      <div className="mt-4 flex items-center space-x-2">
                        <div className="flex space-x-1">
                          {Array.from({ length: 3 }, (_, i) => (
                            <div 
                              key={i}
                              className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                                i < (step.id % 3) + 1 
                                  ? 'bg-accent' 
                                  : 'bg-accent/20'
                              }`}
                            ></div>
                          ))}
                        </div>
                        <span className="text-xs text-muted-foreground ml-2">Step {step.id}</span>
                      </div>
                    </div>
                  </div>
                </div>


                {/* Mobile Spacer */}
                <div className="lg:hidden w-full"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Call to Action */}
        <div className="text-center mt-20 animate-fade-in">
          <div className="relative inline-block">
            <div className="absolute -inset-1 bg-gradient-to-r from-accent/20 via-accent/10 to-accent/20 rounded-2xl blur opacity-75"></div>
            <div className="relative bg-background/95 backdrop-blur-sm border border-accent/20 rounded-2xl p-8">
              <p className="text-muted-foreground mb-6 text-lg">
                Ready to start your project? Let's discuss your requirements and create something amazing together.
              </p>
              <button 
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="group relative bg-gradient-to-r from-accent to-accent/80 text-accent-foreground px-8 py-4 rounded-xl font-semibold text-lg hover:from-accent/90 hover:to-accent/70 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-accent/25"
              >
                <span className="relative z-10">Start Your Project</span>
                <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-accent/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;
