import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  getAllPortfolioItems,
  getPortfolioByCategory,
} from "@/content/portfolioData";
import { useState } from "react";

const PortfolioSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const allProjects = getAllPortfolioItems();
  const projects =
    selectedCategory === "all"
      ? allProjects
      : getPortfolioByCategory(selectedCategory);

  const categories = [
    { id: "all", name: "All Projects" },
    { id: "web-development", name: "Web Development" },
    { id: "app-development", name: "App Development" },
    { id: "game-development", name: "Game Development" },
    { id: "blockchain", name: "Blockchain" },
  ];

  return (
    <section id="portfolio" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 animate-fade-in">
          <div className="mb-6">
            <h2 className="text-4xl md:text-6xl font-bold inline-block">
              <span className="text-white">Our</span>{" "}
              <span className="bg-[#ffd63c] text-black px-4 py-2 rounded-lg">
                Builds
              </span>
            </h2>
          </div>
          <p className="text-lg md:text-xl text-white max-w-4xl mb-4">
            A showcase of solutions crafted to fit and perform.
          </p>
          <p className="text-sm text-gray-400 mb-8">
            Showing {projects.length} project{projects.length !== 1 ? "s" : ""}
            {selectedCategory !== "all" &&
              ` in ${categories.find((c) => c.id === selectedCategory)?.name}`}
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-3 mb-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? "bg-[#ffd63c] text-black"
                    : "bg-white/10 text-white hover:bg-white/20"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-card transition-all duration-300 group cursor-pointer animate-slide-up border-border hover:border-accent/20"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "/src/assets/portfolio-bg.jpg";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-primary opacity-60 group-hover:opacity-40 transition-opacity duration-300"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {project.link && project.link !== "#" && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-background/20 backdrop-blur-sm rounded-full hover:bg-accent hover:text-accent-foreground transition-colors cursor-pointer"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

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
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
