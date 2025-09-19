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
      title: "FinTech & Banking",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=400&fit=crop&crop=center"
    },
    {
      title: "Healthcare & Biotech",
      image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=400&fit=crop&crop=center"
    },
    {
      title: "E-commerce & Retail",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=400&fit=crop&crop=center"
    },
    {
      title: "Gaming & Entertainment",
      image: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=400&h=400&fit=crop&crop=center"
    },
    {
      title: "Logistics & Supply Chain",
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=400&fit=crop&crop=center"
    },
    {
      title: "Education & E-Learning",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=400&fit=crop&crop=center"
    }
  ];

  return (
    <section id="industries" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 animate-fade-in text-center">
          {/* Main headline */}
          <div className="text-center mb-6">
            <h2 className="text-4xl md:text-6xl font-bold inline-block relative">
              <span className="text-[#ffd63c]">Specs</span>{" "}
              <span className="text-white">That Fit Every</span>{" "}
              <span className="text-[#ffd63c]">Industry</span>
              {/* Underline that matches text width */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#ffd63c]"></div>
            </h2>
          </div>
          
          {/* Description */}
          <p className="text-lg md:text-xl text-white text-center max-w-4xl mx-auto">
            We decode your specs and build tech that aligns with your industry's unique demands.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => (
            <Card 
              key={index}
              className="relative aspect-square overflow-hidden hover:shadow-lg transition-all duration-300 group cursor-pointer animate-scale-in border-0 bg-[#ffd63c]"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Industry Image */}
              <div className="absolute inset-0">
                <img 
                  src={industry.image} 
                  alt={industry.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              {/* Industry Title Overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-black/80 backdrop-blur-sm p-4">
                <h3 className="text-white font-bold text-lg text-center">
                  {industry.title}
                </h3>
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