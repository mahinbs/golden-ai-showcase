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
    <section id="services" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            AI Development <span className="text-accent">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We offer comprehensive AI solutions tailored to your business needs, 
            from concept to deployment and beyond.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="overflow-hidden hover:shadow-yellow transition-all duration-300 group cursor-pointer animate-slide-up border-border hover:border-accent/30 bg-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent"></div>
                <div className="absolute bottom-4 left-4 flex items-center">
                  <div className="p-3 bg-accent/90 rounded-lg group-hover:bg-accent transition-all duration-300">
                    {service.icon}
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                  {service.description}
                </p>

                <div className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-accent rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-border group-hover:border-accent/30 transition-colors duration-300">
                  <span className="text-accent font-semibold group-hover:underline text-sm">
                    Learn More →
                  </span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;