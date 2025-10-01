import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  // Different navigation items based on current page
  const getNavItems = () => {
    if (location.pathname === "/about") {
      return [
        { label: "Our Story", id: "about-story" },
        { label: "Why We Started", id: "why-we-started" },
        { label: "Partnership", id: "partnership" },
        { label: "Vision", id: "vision" },
        { label: "Founder", id: "founder" },
      ];
    }
    if (location.pathname === "/web-development") {
      return [
        { label: "Services", id: "services" },
        // { label: "Key Features", id: "key-features" },
        { label: "Portfolio", id: "portfolio" },
        { label: "Blog", id: "blog" },
        { label: "Testimonials", id: "testimonials" },
        { label: "FAQ", id: "faq" },
      ];
    }
    return [
      { label: "Services", id: "services" },
      { label: "Industries", id: "industries" },
      { label: "Portfolio", id: "portfolio" },
      { label: "Blog", id: "blog" },
      { label: "Testimonials", id: "testimonials" },
    ];
  };

  const navItems = getNavItems();

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-card"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div
            className="flex items-center cursor-pointer hover:opacity-80 transition-opacity duration-300"
            onClick={() => {
              if (location.pathname === "/about") {
                scrollToSection("about-story");
              } else {
                scrollToSection("hero");
              }
            }}
          >
            <img
              src="https://res.cloudinary.com/dknafpppp/image/upload/v1758189905/LOGO_SpecsLo_rectangle_no_bg_ot6afi.png"
              alt="SpecsLo Logo"
              className="h-20 w-auto max-h-full object-contain"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {location.pathname === "/about" || location.pathname === "/" ? (
              <Link
                to="/"
                className="text-foreground hover:text-accent transition-colors duration-300 font-medium"
              >
                Home
              </Link>
            ) : (
              ""
            )}
            {location.pathname !== "/about" && (
              <Link
                to="/about"
                className="text-foreground hover:text-accent transition-colors duration-300 font-medium"
              >
                Who We Are
              </Link>
            )}

            {location.pathname !== "/web-development" ? (
              <Link
                to="/web-development"
                className="text-foreground hover:text-accent transition-colors duration-300 font-medium"
              >
                Web Development
              </Link>
            ) : (
              ""
            )}
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-foreground hover:text-accent transition-colors duration-300 font-medium"
              >
                {item.label}
              </button>
            ))}
            <Button
              variant="hero"
              onClick={() => scrollToSection("contact")}
              className="ml-4"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-background/95 backdrop-blur-md border-t border-border animate-slide-up">
            <div className="px-4 py-4 space-y-4">
              {location.pathname === "/about" ||
              location.pathname === "/web-development" ? (
                <Link
                  to="/"
                  className="block w-full text-left text-foreground hover:text-accent transition-colors duration-300 font-medium py-2"
                >
                  Home
                </Link>
              ) : (
                ""
              )}
              {location.pathname !== "/about" && (
                <Link
                  to="/about"
                  className="block w-full text-left text-foreground hover:text-accent transition-colors duration-300 font-medium py-2"
                >
                  Who We Are
                </Link>
              )}
              <Link
                to="/web-development"
                className="block w-full text-left text-foreground hover:text-accent transition-colors duration-300 font-medium py-2"
              >
                Web Development
              </Link>
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left text-foreground hover:text-accent transition-colors duration-300 font-medium py-2"
                >
                  {item.label}
                </button>
              ))}
              <Button
                variant="hero"
                className="w-full mt-4"
                onClick={() => scrollToSection("contact")}
              >
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
