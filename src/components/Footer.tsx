import {
  Mail,
  Phone,
  MapPin,
  ArrowUp,
  MessageCircle,
  Instagram,
  Linkedin,
  Youtube,
  Twitter,
  Facebook,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const quickLinks = [
    { label: "Who We Are", to: "/about" },
    { label: "What We Do", to: "/services" },
    { label: "Healthcare Solutions", to: "/healthcare-solutions" },
    { label: "Blogs", to: "/blogs" },
    { label: "Talk to Specslo", to: "/contact" },
  ];

  const services = [
    { label: "Web Dev", to: "/web-development" },
    { label: "App Dev", to: "/app-development" },
    { label: "Software Dev", to: "/software-development" },
    { label: "AI Solutions", to: "/ai-solutions" },
    { label: "Data Science", to: "/data-science-solutions" },
    { label: "Game Dev", to: "/game-development" },
    { label: "UI/UX Design", to: "/uiux-design" },
  ];

  const capabilities = [
    "Workflow Optimization",
    "AI & Automation Solutions",
    "Cloud Infrastructure Setup",
    "Real-time Data Dashboards",
    "Chatbot & Voicebot Systems",
    "Scalable MVP Launch Support",
    "End-to-End Product Development",
  ];

  const socialLinks = [
    {
      name: "WhatsApp",
      url: "https://api.whatsapp.com/send/?phone=917597406130&text&type=phone_number&app_absent=0",
      icon: <MessageCircle className="w-4 h-4" />,
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/specslo",
      icon: <Instagram className="w-4 h-4" />,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/company/specslo/",
      icon: <Linkedin className="w-4 h-4" />,
    },
    {
      name: "YouTube",
      url: "https://www.youtube.com/@speccslo",
      icon: <Youtube className="w-4 h-4" />,
    },
    {
      name: "X (Twitter)",
      url: "https://x.com/specslo",
      icon: <Twitter className="w-4 h-4" />,
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/specslo",
      icon: <Facebook className="w-4 h-4" />,
    },
    {
      name: "Linktree",
      url: "https://linktr.ee/specslo_",
      icon: <ExternalLink className="w-4 h-4" />,
    },
  ];

  return (
    <footer className="bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div
              className="flex items-center mb-6 cursor-pointer hover:opacity-80 transition-opacity duration-300"
              onClick={scrollToTop}
            >
              <img
                src="https://res.cloudinary.com/dknafpppp/image/upload/v1758189905/LOGO_SpecsLo_rectangle_no_bg_ot6afi.png"
                alt="SpecsLo Logo"
                className="h-12 w-auto"
              />
            </div>
            <p className="text-white mb-6 leading-relaxed text-sm">
              Your Specs. Our Solutions.
              <br />
              AI-powered solutions built from
              <br />
              your specs made to scale smarter.
            </p>
            <div className="space-y-3">
              <div className="flex items-center">
                <Mail className="w-4 h-4 text-white mr-3" />
                <span className="text-sm text-white">support@specslo.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 text-white mr-3" />
                <span className="text-sm text-white">+91-7597406130</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 text-white mr-3" />
                <span className="text-sm text-white">
                  Jupiter Plaza, Sector-4, Udaipur, India
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-[#ffd63c] mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-white hover:text-[#ffd63c] transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-[#ffd63c] mb-6">
              Services
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.to}>
                  <Link
                    to={service.to}
                    className="text-white hover:text-[#ffd63c] transition-colors duration-300 text-sm"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Capabilities */}
          <div>
            <h3 className="text-lg font-semibold text-[#ffd63c] mb-6">
              Capabilities
            </h3>
            <ul className="space-y-3">
              {capabilities.map((capability, index) => (
                <li key={index}>
                  <span className="text-white text-sm">{capability}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
              <p className="text-sm text-white">
                © {new Date().getFullYear()} Specslo Software Solutions LLP. All
                rights reserved.{" "}
                <Link to="/privacy-policy" className="text-[#ffd63c] hover:underline">
                  Privacy Policy
                </Link>{" "}
                |{" "}
                <Link to="/terms-of-service" className="text-[#ffd63c] hover:underline">
                  Terms of Service
                </Link>{" "}
                |{" "}
                <Link to="/disclaimer" className="text-[#ffd63c] hover:underline">
                  Disclaimer
                </Link>
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center gap-4 mt-4 md:mt-0">
              {socialLinks.slice(0, 5).map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-[#ffd63c] rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 group"
                  aria-label={social.name}
                >
                  <div className="text-black group-hover:text-black/80">
                    {social.icon}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Back to Top Button */}
        <div className="flex justify-center pb-6">
          <Button
            variant="outline"
            size="sm"
            onClick={scrollToTop}
            className="group"
          >
            <ArrowUp className="w-4 h-4 mr-2 group-hover:-translate-y-1 transition-transform duration-300" />
            Back to Top
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
