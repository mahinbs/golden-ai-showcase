import { Mail, Phone, MapPin, Send, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const ContactSection = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted");
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section id="contact" className="py-24 bg-gradient-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Contact Info */}
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your
              <br />
              <span className="text-accent">Business with AI?</span>
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              Let's discuss how our AI solutions can drive innovation and growth 
              for your organization. Get in touch for a free consultation.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-center group">
                <div className="p-3 bg-accent rounded-lg group-hover:bg-accent/90 transition-colors duration-300">
                  <Mail className="w-6 h-6 text-accent-foreground" />
                </div>
                <div className="ml-4">
                  <p className="font-semibold">Email us</p>
                  <p className="text-primary-foreground/80">hello@aidev.com</p>
                </div>
              </div>

              <div className="flex items-center group">
                <div className="p-3 bg-accent rounded-lg group-hover:bg-accent/90 transition-colors duration-300">
                  <Phone className="w-6 h-6 text-accent-foreground" />
                </div>
                <div className="ml-4">
                  <p className="font-semibold">Call us</p>
                  <p className="text-primary-foreground/80">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-center group">
                <div className="p-3 bg-accent rounded-lg group-hover:bg-accent/90 transition-colors duration-300">
                  <MapPin className="w-6 h-6 text-accent-foreground" />
                </div>
                <div className="ml-4">
                  <p className="font-semibold">Visit us</p>
                  <p className="text-primary-foreground/80">San Francisco, CA</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="hero" 
                size="lg"
                className="group"
              >
                Schedule Consultation
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-foreground"
              >
                Download Portfolio
              </Button>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <Card className="p-8 animate-slide-up bg-background text-foreground">
            <h3 className="text-2xl font-bold mb-6">Get Started Today</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-colors duration-300 bg-background"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-colors duration-300 bg-background"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-colors duration-300 bg-background"
                  placeholder="john@company.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-2">
                  Company
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-colors duration-300 bg-background"
                  placeholder="Your Company"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-2">
                  Project Type
                </label>
                <select className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-colors duration-300 bg-background">
                  <option>Select a service</option>
                  <option>Machine Learning</option>
                  <option>AI Chatbots</option>
                  <option>Data Intelligence</option>
                  <option>Process Automation</option>
                  <option>Custom AI Solution</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-2">
                  Project Details
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-colors duration-300 bg-background resize-none"
                  placeholder="Tell us about your project requirements..."
                ></textarea>
              </div>

              <Button type="submit" variant="hero" size="lg" className="w-full group">
                Send Message
                <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </Card>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-24 pt-12 border-t border-primary-foreground/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div 
              className="text-2xl font-bold mb-4 md:mb-0 cursor-pointer hover:text-accent transition-colors duration-300"
              onClick={scrollToTop}
            >
              AI<span className="text-accent">.Dev</span>
            </div>
            
            <div className="flex items-center space-x-8 text-sm">
              <span className="text-primary-foreground/80">
                © 2024 AI.Dev. All rights reserved.
              </span>
              <div className="hidden md:flex space-x-6">
                <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors duration-300">
                  Privacy Policy
                </a>
                <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors duration-300">
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default ContactSection;