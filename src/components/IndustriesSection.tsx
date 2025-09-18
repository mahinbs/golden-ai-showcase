import { 
  Heart, 
  Building2, 
  ShoppingCart, 
  Factory, 
  GraduationCap, 
  Car,
  Landmark,
  Plane
} from "lucide-react";
import { Card } from "@/components/ui/card";

const IndustriesSection = () => {
  const industries = [
    {
      icon: <Heart className="w-10 h-10" />,
      title: "Healthcare",
      description: "AI-powered diagnostics, patient management, and medical research solutions.",
      use_cases: ["Medical Imaging", "Drug Discovery", "Patient Analytics"],
      color: "bg-red-50 hover:bg-red-100",
      backgroundImage: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop&crop=center",
      bgColor: "bg-red-500/10"
    },
    {
      icon: <Landmark className="w-10 h-10" />,
      title: "Finance",
      description: "Fraud detection, algorithmic trading, and risk assessment solutions.",
      use_cases: ["Fraud Prevention", "Credit Scoring", "Automated Trading"],
      color: "bg-blue-50 hover:bg-blue-100",
      backgroundImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&crop=center",
      bgColor: "bg-blue-500/10"
    },
    {
      icon: <ShoppingCart className="w-10 h-10" />,
      title: "E-commerce",
      description: "Personalized recommendations, inventory optimization, and customer insights.",
      use_cases: ["Product Recommendations", "Price Optimization", "Customer Segmentation"],
      color: "bg-green-50 hover:bg-green-100",
      backgroundImage: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop&crop=center",
      bgColor: "bg-green-500/10"
    },
    {
      icon: <Factory className="w-10 h-10" />,
      title: "Manufacturing",
      description: "Predictive maintenance, quality control, and supply chain optimization.",
      use_cases: ["Predictive Maintenance", "Quality Control", "Supply Chain"],
      color: "bg-orange-50 hover:bg-orange-100",
      backgroundImage: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop&crop=center",
      bgColor: "bg-orange-500/10"
    },
    {
      icon: <GraduationCap className="w-10 h-10" />,
      title: "Education",
      description: "Personalized learning, automated grading, and student performance analytics.",
      use_cases: ["Adaptive Learning", "Performance Analytics", "Content Generation"],
      color: "bg-purple-50 hover:bg-purple-100",
      backgroundImage: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop&crop=center",
      bgColor: "bg-purple-500/10"
    },
    {
      icon: <Car className="w-10 h-10" />,
      title: "Automotive",
      description: "Autonomous driving, predictive maintenance, and smart manufacturing.",
      use_cases: ["Autonomous Systems", "Fleet Management", "Smart Manufacturing"],
      color: "bg-gray-50 hover:bg-gray-100",
      backgroundImage: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=300&fit=crop&crop=center",
      bgColor: "bg-gray-500/10"
    },
    {
      icon: <Building2 className="w-10 h-10" />,
      title: "Real Estate",
      description: "Property valuation, market analysis, and investment optimization.",
      use_cases: ["Property Valuation", "Market Trends", "Investment Analysis"],
      color: "bg-indigo-50 hover:bg-indigo-100",
      backgroundImage: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=300&fit=crop&crop=center",
      bgColor: "bg-indigo-500/10"
    },
    {
      icon: <Plane className="w-10 h-10" />,
      title: "Transportation",
      description: "Route optimization, fleet management, and logistics automation.",
      use_cases: ["Route Optimization", "Fleet Tracking", "Demand Forecasting"],
      color: "bg-cyan-50 hover:bg-cyan-100",
      backgroundImage: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=300&fit=crop&crop=center",
      bgColor: "bg-cyan-500/10"
    }
  ];

  return (
    <section id="industries" className="py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Industries We <span className="text-accent">Serve</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our AI solutions span across multiple industries, delivering 
            tailored innovations that drive measurable results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry, index) => (
            <Card 
              key={index}
              className={`relative p-6 hover:shadow-card transition-all duration-300 group cursor-pointer animate-scale-in border-border hover:border-accent/20 ${industry.color} overflow-hidden`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Background Image with Overlay */}
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50 group-hover:opacity-60 transition-opacity duration-300"
                style={{ backgroundImage: `url(${industry.backgroundImage})` }}
              />
              <div className={`absolute inset-0 ${industry.bgColor} group-hover:opacity-80 transition-opacity duration-300`} />
              
              {/* Content */}
              <div className="relative z-10 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="p-4 bg-background/90 backdrop-blur-sm rounded-full group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300 shadow-sm">
                    {industry.icon}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-background mb-3 group-hover:text-accent transition-colors duration-300">
                  {industry.title}
                </h3>
                
                <p className="text-background/90 text-sm mb-4 leading-relaxed">
                  {industry.description}
                </p>

                <div className="space-y-2 flex flex-col items-center">
                  {industry.use_cases.map((useCase, useCaseIndex) => (
                    <div key={useCaseIndex} className="text-xs text-background bg-accent/20 backdrop-blur-md px-3 py-1 rounded-full border border-accent/30 font-medium text-center hover:bg-accent/30 hover:border-accent/50 transition-all duration-300 shadow-lg shadow-accent/10">
                      {useCase}
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Don't see your industry? We work with businesses across all sectors.
          </p>
          <button className="text-accent font-semibold hover:underline">
            Contact us to discuss your specific needs →
          </button>
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;