import { Mail, Phone, MapPin, ArrowUp, MessageCircle, Instagram, Linkedin, Youtube, Twitter, Facebook, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const quickLinks = [
    { label: "Services", id: "services" },
    { label: "Industries", id: "industries" },
    { label: "Portfolio", id: "portfolio" },
    { label: "Blog", id: "blog" },
    { label: "Testimonials", id: "testimonials" },
    { label: "Contact", id: "contact" }
  ];

  const services = [
    "AI Consulting",
    "Machine Learning",
    "Data Analytics",
    "Automation",
    "Chatbot Development",
    "Business Intelligence"
  ];

  const industries = [
    "Healthcare",
    "Finance",
    "E-commerce",
    "Manufacturing",
    "Education",
    "Automotive"
  ];

  const socialLinks = [
    { name: "WhatsApp", url: "https://api.whatsapp.com/send/?phone=917597406130&text&type=phone_number&app_absent=0", icon: <MessageCircle className="w-4 h-4" /> },
    { name: "Instagram", url: "https://www.instagram.com/specslo", icon: <Instagram className="w-4 h-4" /> },
    { name: "LinkedIn", url: "https://www.linkedin.com/company/specslo/", icon: <Linkedin className="w-4 h-4" /> },
    { name: "YouTube", url: "https://www.youtube.com/@speccslo", icon: <Youtube className="w-4 h-4" /> },
    { name: "X (Twitter)", url: "https://x.com/specslo", icon: <Twitter className="w-4 h-4" /> },
    { name: "Facebook", url: "https://www.facebook.com/specslo", icon: <Facebook className="w-4 h-4" /> },
    { name: "Linktree", url: "https://linktr.ee/specslo_", icon: <ExternalLink className="w-4 h-4" /> }
  ];

  return (
    <footer className="bg-black border-t border-border">
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
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Leading AI solutions provider delivering innovative technology 
              that transforms businesses and drives growth across industries.
            </p>
            <div className="space-y-3">
              <div className="flex items-center">
                <Mail className="w-4 h-4 text-accent mr-3" />
                <span className="text-sm text-muted-foreground">support@specslo.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 text-accent mr-3" />
                <span className="text-sm text-muted-foreground">+91-7597406130</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 text-accent mr-3" />
                <span className="text-sm text-muted-foreground">Jupiter Plaza, Sector-4, Udaipur, India</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-muted-foreground hover:text-accent transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-muted-foreground text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-6">Industries</h3>
            <ul className="space-y-3">
              {industries.map((industry, index) => (
                <li key={index}>
                  <span className="text-muted-foreground text-sm">{industry}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
              <p className="text-sm text-muted-foreground">
                © 2024 SpecsLo. All rights reserved.
              </p>
              <div className="flex space-x-6">
                <a href="#" className="text-sm text-muted-foreground hover:text-accent transition-colors duration-300">
                  Privacy Policy
                </a>
                <a href="#" className="text-sm text-muted-foreground hover:text-accent transition-colors duration-300">
                  Terms of Service
                </a>
                <a href="#" className="text-sm text-muted-foreground hover:text-accent transition-colors duration-300">
                  Cookie Policy
                </a>
              </div>
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
