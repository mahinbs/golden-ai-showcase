import { Brain, Bot, Database, Zap, Code, BarChart3 } from "lucide-react";
import { Card } from "@/components/ui/card";
import mlServiceImg from "@/assets/ml-service.jpg";
import chatbotServiceImg from "@/assets/chatbot-service.jpg";
import dataIntelligenceServiceImg from "@/assets/data-intelligence-service.jpg";
import automationServiceImg from "@/assets/automation-service.jpg";
import integrationServiceImg from "@/assets/integration-service.jpg";
import biServiceImg from "@/assets/bi-service.jpg";

const ServicesSection = () => {
  const services = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Machine Learning",
      description: "Custom ML models that learn from your data to predict outcomes and automate decision-making processes.",
      features: ["Predictive Analytics", "Pattern Recognition", "Automated Classification"],
      image: mlServiceImg
    },
    {
      icon: <Bot className="w-8 h-8" />,
      title: "AI Chatbots & Assistants",
      description: "Intelligent conversational AI that enhances customer experience and streamlines support operations.",
      features: ["Natural Language Processing", "24/7 Support", "Multi-platform Integration"],
      image: chatbotServiceImg
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Data Intelligence",
      description: "Transform raw data into actionable insights with advanced analytics and visualization tools.",
      features: ["Real-time Analytics", "Custom Dashboards", "Automated Reporting"],
      image: dataIntelligenceServiceImg
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Process Automation",
      description: "Streamline workflows and eliminate repetitive tasks with intelligent automation solutions.",
      features: ["Workflow Optimization", "Task Automation", "Integration APIs"],
      image: automationServiceImg
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "AI Integration",
      description: "Seamlessly integrate AI capabilities into existing systems and applications.",
      features: ["API Development", "System Integration", "Legacy Modernization"],
      image: integrationServiceImg
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Business Intelligence",
      description: "Advanced BI solutions that provide deep insights and drive strategic decision-making.",
      features: ["Performance Metrics", "Trend Analysis", "Predictive Forecasting"],
      image: biServiceImg
    }
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 animate-fade-in">
          {/* Top horizontal line */}
          <div className="w-full h-0.5 bg-black mb-6"></div>
          
          {/* Main headline with yellow vertical bar */}
          <div className="relative">
            <div className="absolute left-0 top-0 w-8 h-full bg-[#ffd63c]"></div>
            <div className="pl-4">
              <h2 className="text-4xl md:text-6xl font-bold text-black leading-tight relative z-10">
                <div>Specs</div>
                <div>Inspired</div>
                <div>Services</div>
              </h2>
            </div>
          </div>
          
          {/* Bottom horizontal line */}
          <div className="w-full h-0.5 bg-black mt-6 mb-8"></div>
          
          {/* Description */}
          <div className="text-left">
            <p className="text-lg md:text-xl text-black leading-relaxed">
              We don't believe in one-size-fits-all.
            </p>
            <p className="text-lg md:text-xl text-black leading-relaxed">
              Your specs shape every service we offer
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="overflow-hidden hover:shadow-lg transition-all duration-300 group cursor-pointer animate-slide-up border-2 border-[#ffd63c] bg-white"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image Section */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              {/* Text Section - Black Background */}
              <div className="bg-black p-6">
                {/* Title */}
                <h3 className="text-xl font-bold text-[#ffd63c] mb-3">
                  {service.title}
                </h3>
                
                {/* Yellow Separator Line */}
                <div className="w-12 h-0.5 bg-[#ffd63c] mb-4"></div>
                
                {/* Description */}
                <p className="text-white text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;