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
      color: "bg-red-50 hover:bg-red-100"
    },
    {
      icon: <Landmark className="w-10 h-10" />,
      title: "Finance",
      description: "Fraud detection, algorithmic trading, and risk assessment solutions.",
      use_cases: ["Fraud Prevention", "Credit Scoring", "Automated Trading"],
      color: "bg-blue-50 hover:bg-blue-100"
    },
    {
      icon: <ShoppingCart className="w-10 h-10" />,
      title: "E-commerce",
      description: "Personalized recommendations, inventory optimization, and customer insights.",
      use_cases: ["Product Recommendations", "Price Optimization", "Customer Segmentation"],
      color: "bg-green-50 hover:bg-green-100"
    },
    {
      icon: <Factory className="w-10 h-10" />,
      title: "Manufacturing",
      description: "Predictive maintenance, quality control, and supply chain optimization.",
      use_cases: ["Predictive Maintenance", "Quality Control", "Supply Chain"],
      color: "bg-orange-50 hover:bg-orange-100"
    },
    {
      icon: <GraduationCap className="w-10 h-10" />,
      title: "Education",
      description: "Personalized learning, automated grading, and student performance analytics.",
      use_cases: ["Adaptive Learning", "Performance Analytics", "Content Generation"],
      color: "bg-purple-50 hover:bg-purple-100"
    },
    {
      icon: <Car className="w-10 h-10" />,
      title: "Automotive",
      description: "Autonomous driving, predictive maintenance, and smart manufacturing.",
      use_cases: ["Autonomous Systems", "Fleet Management", "Smart Manufacturing"],
      color: "bg-gray-50 hover:bg-gray-100"
    },
    {
      icon: <Building2 className="w-10 h-10" />,
      title: "Real Estate",
      description: "Property valuation, market analysis, and investment optimization.",
      use_cases: ["Property Valuation", "Market Trends", "Investment Analysis"],
      color: "bg-indigo-50 hover:bg-indigo-100"
    },
    {
      icon: <Plane className="w-10 h-10" />,
      title: "Transportation",
      description: "Route optimization, fleet management, and logistics automation.",
      use_cases: ["Route Optimization", "Fleet Tracking", "Demand Forecasting"],
      color: "bg-cyan-50 hover:bg-cyan-100"
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
              className={`p-6 hover:shadow-card transition-all duration-300 group cursor-pointer animate-scale-in border-border hover:border-accent/20 ${industry.color}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-center">
                <div className="mb-4 flex justify-center">
                  <div className="p-4 bg-background rounded-full group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300 shadow-sm">
                    {industry.icon}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors duration-300">
                  {industry.title}
                </h3>
                
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {industry.description}
                </p>

                <div className="space-y-2">
                  {industry.use_cases.map((useCase, useCaseIndex) => (
                    <div key={useCaseIndex} className="text-xs text-muted-foreground bg-background/50 px-3 py-1 rounded-full">
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