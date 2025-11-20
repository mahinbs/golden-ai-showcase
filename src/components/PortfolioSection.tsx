import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  getAllPortfolioItems,
  getPortfolioByCategory,
} from "@/content/portfolioData";
import { useState, useEffect, useRef, useCallback } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

interface PortfolioSectionProps {
  isSlider?: boolean;
}

const PortfolioSection = ({ isSlider = false }: PortfolioSectionProps) => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const allProjects = getAllPortfolioItems();
  const projects =
    selectedCategory === "all"
      ? allProjects
      : getPortfolioByCategory(selectedCategory);

  const autoplayIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const sliderInstanceRef = useRef<typeof instanceRef.current>(null);

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "free-snap",
    slides: {
      perView: 1.2,
      spacing: 24,
    },
    breakpoints: {
      "(min-width: 768px)": {
        slides: {
          perView: 2.2,
          spacing: 24,
        },
      },
      "(min-width: 1024px)": {
        slides: {
          perView: 3.2,
          spacing: 24,
        },
      },
    },
    created(slider) {
      // Store slider instance
      sliderInstanceRef.current = slider;
      // Start autoplay when slider is created
      if (isSlider) {
        // Clear any existing interval
        if (autoplayIntervalRef.current) {
          clearInterval(autoplayIntervalRef.current);
        }
        // Setup autoplay
        autoplayIntervalRef.current = setInterval(() => {
          if (sliderInstanceRef.current) {
            sliderInstanceRef.current.next();
          }
        }, 3000);
      }
    },
  });

  // Setup autoplay when slider is ready or category changes
  useEffect(() => {
    if (!isSlider) {
      // Clear autoplay if slider is disabled
      if (autoplayIntervalRef.current) {
        clearInterval(autoplayIntervalRef.current);
        autoplayIntervalRef.current = null;
      }
      return;
    }

    // Wait a bit for slider to initialize after category change
    const timeoutId = setTimeout(() => {
      // Clear any existing interval
      if (autoplayIntervalRef.current) {
        clearInterval(autoplayIntervalRef.current);
      }
      // Setup autoplay
      if (sliderInstanceRef.current) {
        autoplayIntervalRef.current = setInterval(() => {
          if (sliderInstanceRef.current) {
            sliderInstanceRef.current.next();
          }
        }, 3000);
      }
    }, 100);

    // Cleanup function
    return () => {
      clearTimeout(timeoutId);
    };
  }, [isSlider, selectedCategory]); // Restart autoplay when category changes

  // Update slider instance ref and reset slider when category changes
  useEffect(() => {
    if (instanceRef.current) {
      sliderInstanceRef.current = instanceRef.current;
    }
    if (isSlider && instanceRef.current) {
      instanceRef.current.update();
    }
  }, [selectedCategory, isSlider, instanceRef]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (autoplayIntervalRef.current) {
        clearInterval(autoplayIntervalRef.current);
        autoplayIntervalRef.current = null;
      }
    };
  }, []);

  const categories = [
    { id: "all", name: "All Projects" },
    { id: "web-development", name: "Web Development" },
    { id: "saas", name: "SaaS" },
    { id: "ecommerce-websites", name: "E-commerce Websites" },
    { id: "app-development", name: "App Development" },
    { id: "ai", name: "AI Projects" },
    { id: "chatbot", name: "Chatbot Projects" },
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
          {!isSlider && (
            <p className="text-sm text-gray-400 mb-8">
              Showing {projects.length} project
              {projects.length !== 1 ? "s" : ""}
              {selectedCategory !== "all" &&
                ` in ${
                  categories.find((c) => c.id === selectedCategory)?.name
                }`}
            </p>
          )}

          {/* Category Filter */}
          {!isSlider && (
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
          )}
        </div>

        {isSlider ? (
          <div ref={sliderRef} className="keen-slider">
            {projects.concat(projects, projects, projects).map((project) => {
              const subcategoryTags =
                project.subcategory
                  ?.split("/")
                  .map((tag) => tag.trim())
                  .filter(Boolean) ?? [];
              const technologyTags = project.technologies ?? [];
              const typeTags = project.type ? [project.type] : [];
              const chips = [
                ...subcategoryTags,
                ...technologyTags,
                ...typeTags,
              ];

              return (
                <div
                  key={`${project.title}-${project.id}`}
                  className="keen-slider__slide"
                >
                  <Card className="overflow-hidden hover:shadow-card transition-all duration-300 group cursor-pointer border-border hover:border-accent/20 h-full">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = "/placeholder.svg";
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
                      {chips.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-4">
                          {chips.map((chip, chipIndex) => (
                            <span
                              key={`${project.title}-${chip}-${chipIndex}`}
                              className="text-xs bg-accent/10 text-accent px-2 py-1 rounded-full"
                            >
                              {chip}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </Card>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {projects.map((project, index) => {
              const subcategoryTags =
                project.subcategory
                  ?.split("/")
                  .map((tag) => tag.trim())
                  .filter(Boolean) ?? [];
              const technologyTags = project.technologies ?? [];
              const typeTags = project.type ? [project.type] : [];
              const chips = [
                ...subcategoryTags,
                ...technologyTags,
                ...typeTags,
              ];

              return (
                <Card
                  key={`${project.title}-${project.id}`}
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
                        target.src = "/placeholder.svg";
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
                    {chips.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {chips.map((chip, chipIndex) => (
                          <span
                            key={`${project.title}-${chip}-${chipIndex}`}
                            className="text-xs bg-accent/10 text-accent px-2 py-1 rounded-full"
                          >
                            {chip}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </Card>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default PortfolioSection;
