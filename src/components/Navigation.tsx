import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const location = useLocation();

  // Services data from App.tsx routes
  const services = [
    { name: "Website Development", path: "/web-development" },
    { name: "App Development", path: "/app-development" },
    { name: "Software Development", path: "/software-development" },
    { name: "AI Solutions", path: "/ai-solutions" },
    { name: "Game Development", path: "/game-development" },
    { name: "UI/UX Design", path: "/uiux-design" },
    { name: "Data Science Solutions", path: "/data-science-solutions" },
  ];

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
          <a
            href="/"
            className="flex items-center cursor-pointer hover:opacity-80 transition-opacity duration-300"
          >
            <img
              src="https://res.cloudinary.com/dknafpppp/image/upload/v1758189905/LOGO_SpecsLo_rectangle_no_bg_ot6afi.png"
              alt="SpecsLo Logo"
              className="h-20 w-auto max-h-full object-contain"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {/* Home */}
            <Link
              to="/"
              className={`text-foreground hover:text-accent transition-colors duration-300 font-medium ${
                location.pathname === "/" ? "text-accent" : ""
              }`}
            >
              Home
            </Link>

            {/* Who We Are */}
            <Link
              to="/about"
              className={`text-foreground hover:text-accent transition-colors duration-300 font-medium ${
                location.pathname === "/about" ? "text-accent" : ""
              }`}
            >
              Who We Are
            </Link>

            {/* What We Do - Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsServicesDropdownOpen(true)}
              onMouseLeave={() => setIsServicesDropdownOpen(false)}
            >
              <Link
                to="/services"
                className="flex items-center space-x-1 text-foreground hover:text-accent transition-colors duration-500 font-medium"
              >
                <span>What We Do</span>
                <ChevronDown size={16} />
              </Link>

              {/* Dropdown Menu */}
              {isServicesDropdownOpen && (
                <div className="absolute top-full left-0 mt-0 w-64 bg-background/95 backdrop-blur-md border border-border rounded-lg shadow-lg py-2 z-50 -translate-x-1/3">
                  <Link
                    to="/services"
                    className="block px-4 py-2 text-foreground hover:text-accent hover:bg-accent/10 transition-colors duration-300 border-b border-border"
                    onClick={() => setIsServicesDropdownOpen(false)}
                  >
                    View All Services
                  </Link>
                  {services.map((service) => (
                    <Link
                      key={service.path}
                      to={service.path}
                      className="block px-4 py-2 text-foreground hover:text-accent hover:bg-accent/10 transition-colors duration-300"
                      onClick={() => setIsServicesDropdownOpen(false)}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Healthcare Solutions */}
            <Link
              to="/healthcare-solutions"
              className={`text-foreground hover:text-accent transition-colors duration-300 font-medium ${
                location.pathname === "/healthcare-solutions"
                  ? "text-accent"
                  : ""
              }`}
            >
              Healthcare Solutions
            </Link>

            {/* Blogs */}
            <Link
              to="/blogs"
              className={`text-foreground hover:text-accent transition-colors duration-300 font-medium ${
                location.pathname === "/blogs" ? "text-accent" : ""
              }`}
            >
              Blogs
            </Link>

            {/* Contact Us */}
            <Link
              to="/contact"
              className={`text-foreground hover:text-accent transition-colors duration-300 font-medium ${
                location.pathname === "/contact" ? "text-accent" : ""
              }`}
            >
              Contact Us
            </Link>
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
              {/* Home */}
              <Link
                to="/"
                className={`block w-full text-left text-foreground hover:text-accent transition-colors duration-300 font-medium py-2 ${
                  location.pathname === "/" ? "text-accent" : ""
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>

              {/* Who We Are */}
              <Link
                to="/about"
                className={`block w-full text-left text-foreground hover:text-accent transition-colors duration-300 font-medium py-2 ${
                  location.pathname === "/about" ? "text-accent" : ""
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Who We Are
              </Link>

              {/* What We Do - Mobile Services */}
              <div className="space-y-4">
                <button
                  className={`flex items-center justify-between w-full text-left text-foreground hover:text-accent transition-colors duration-400 font-medium py-2 ${
                    location.pathname === "/services" ? "text-accent" : ""
                  }`}
                  onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                >
                  <span>What We Do</span>
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-400 ${
                      isMobileServicesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isMobileServicesOpen && (
                  <div className="ml-4 space-y-1">
                    <Link
                      to="/services"
                      className={`block w-full text-left text-foreground hover:text-accent transition-colors duration-400 py-1 ${
                        location.pathname === "/services" ? "text-accent" : ""
                      }`}
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        setIsMobileServicesOpen(false);
                      }}
                    >
                      View All Services
                    </Link>
                    {services.map((service) => (
                      <Link
                        key={service.path}
                        to={service.path}
                        className={`block w-full text-left text-foreground hover:text-accent transition-colors duration-300 py-1 ${
                          location.pathname === service.path
                            ? "text-accent"
                            : ""
                        }`}
                        onClick={() => {
                          setIsMobileMenuOpen(false);
                          setIsMobileServicesOpen(false);
                        }}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Healthcare Solutions */}
              <Link
                to="/healthcare-solutions"
                className={`block w-full text-left text-foreground hover:text-accent transition-colors duration-300 font-medium py-2 ${
                  location.pathname === "/healthcare-solutions"
                    ? "text-accent"
                    : ""
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Healthcare Solutions
              </Link>

              {/* Blogs */}
              <Link
                to="/blogs"
                className={`block w-full text-left text-foreground hover:text-accent transition-colors duration-300 font-medium py-2 ${
                  location.pathname === "/blogs" ? "text-accent" : ""
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Blogs
              </Link>

              {/* Contact Us */}
              <Link
                to="/contact"
                className={`block w-full text-left text-foreground hover:text-accent transition-colors duration-300 font-medium py-2 ${
                  location.pathname === "/contact" ? "text-accent" : ""
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
