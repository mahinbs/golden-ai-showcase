import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import portfolioImage from "@/assets/portfolio-bg.jpg";

const PortfolioSection = () => {
  const projects = [
    {
      title: "HealthAI Diagnostics Platform",
      category: "Healthcare",
      description: "AI-powered medical imaging analysis that improved diagnostic accuracy by 40% and reduced analysis time from hours to minutes.",
      technologies: ["TensorFlow", "Computer Vision", "React", "Python"],
      metrics: {
        accuracy: "96%",
        timeReduction: "85%",
        patientsServed: "10K+"
      },
      image: portfolioImage
    },
    {
      title: "FinanceBot Trading Assistant",
      category: "Finance", 
      description: "Intelligent trading bot using machine learning to analyze market patterns and execute optimal trades with risk management.",
      technologies: ["PyTorch", "NLP", "REST APIs", "Node.js"],
      metrics: {
        roi: "234%",
        accuracy: "87%",
        volume: "$2M+"
      },
      image: portfolioImage
    },
    {
      title: "RetailSense Recommendation Engine",
      category: "E-commerce",
      description: "Personalized product recommendation system that increased conversion rates and customer satisfaction significantly.",
      technologies: ["Apache Spark", "Collaborative Filtering", "AWS", "MongoDB"],
      metrics: {
        conversion: "+45%",
        engagement: "+60%",
        revenue: "+$1.2M"
      },
      image: portfolioImage
    },
    {
      title: "ManufactureAI Predictive Maintenance",
      category: "Manufacturing",
      description: "IoT-integrated predictive maintenance system that prevents equipment failures and optimizes production schedules.",
      technologies: ["IoT Sensors", "Time Series Analysis", "Docker", "PostgreSQL"],
      metrics: {
        downtime: "-70%",
        costs: "-40%",
        efficiency: "+25%"
      },
      image: portfolioImage
    }
  ];

  return (
    <section id="portfolio" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 animate-fade-in">
          <div className="mb-6">
            <h2 className="text-4xl md:text-6xl font-bold inline-block">
              <span className="text-white">Our</span>{" "}
              <span className="bg-[#ffd63c] text-black px-4 py-2 rounded-lg">Builds</span>
            </h2>
          </div>
          <p className="text-lg md:text-xl text-white max-w-4xl">
            A showcase of solutions crafted to fit and perform.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="overflow-hidden hover:shadow-card transition-all duration-300 group cursor-pointer animate-slide-up border-border hover:border-accent/20"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-primary opacity-60 group-hover:opacity-40 transition-opacity duration-300"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="p-2 bg-background/20 backdrop-blur-sm rounded-full hover:bg-accent hover:text-accent-foreground transition-colors cursor-pointer">
                    <ExternalLink className="w-4 h-4" />
                  </div>
                  <div className="p-2 bg-background/20 backdrop-blur-sm rounded-full hover:bg-accent hover:text-accent-foreground transition-colors cursor-pointer">
                    <Github className="w-4 h-4" />
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4 mb-4 p-4 bg-secondary/50 rounded-lg">
                  {Object.entries(project.metrics).map(([key, value], metricIndex) => (
                    <div key={metricIndex} className="text-center">
                      <div className="text-lg font-bold text-accent">{value}</div>
                      <div className="text-xs text-muted-foreground capitalize">{key.replace(/([A-Z])/g, ' $1')}</div>
                    </div>
                  ))}
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="text-xs bg-accent/10 text-accent px-2 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center pt-4 border-t border-border">
                  <span className="text-sm text-muted-foreground">Case Study</span>
                  <ArrowRight className="w-4 h-4 text-accent group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg" className="group">
            View All Projects
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;