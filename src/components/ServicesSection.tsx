import { Brain, Bot, Database, Zap, Code, BarChart3 } from "lucide-react";
import { Card } from "@/components/ui/card";

const ServicesSection = () => {
  const services = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Machine Learning",
      description: "Custom ML models that learn from your data to predict outcomes and automate decision-making processes.",
      features: ["Predictive Analytics", "Pattern Recognition", "Automated Classification"]
    },
    {
      icon: <Bot className="w-8 h-8" />,
      title: "AI Chatbots & Assistants",
      description: "Intelligent conversational AI that enhances customer experience and streamlines support operations.",
      features: ["Natural Language Processing", "24/7 Support", "Multi-platform Integration"]
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Data Intelligence",
      description: "Transform raw data into actionable insights with advanced analytics and visualization tools.",
      features: ["Real-time Analytics", "Custom Dashboards", "Automated Reporting"]
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Process Automation",
      description: "Streamline workflows and eliminate repetitive tasks with intelligent automation solutions.",
      features: ["Workflow Optimization", "Task Automation", "Integration APIs"]
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "AI Integration",
      description: "Seamlessly integrate AI capabilities into existing systems and applications.",
      features: ["API Development", "System Integration", "Legacy Modernization"]
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Business Intelligence",
      description: "Advanced BI solutions that provide deep insights and drive strategic decision-making.",
      features: ["Performance Metrics", "Trend Analysis", "Predictive Forecasting"]
    }
  ];

  return (
    <section id="services" className="py-24 bg-background">
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
              className="p-8 hover:shadow-card transition-all duration-300 group cursor-pointer animate-slide-up border-border hover:border-accent/20"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-accent/10 rounded-lg group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground ml-4 group-hover:text-accent transition-colors duration-300">
                  {service.title}
                </h3>
              </div>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>

              <div className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                    {feature}
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-border group-hover:border-accent/20 transition-colors duration-300">
                <span className="text-accent font-semibold group-hover:underline">
                  Learn More →
                </span>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;