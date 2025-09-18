import { Mail, Phone, MapPin, Send, ArrowRight, MessageCircle } from "lucide-react";
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
    <section id="contact" className="py-24 bg-black text-primary-foreground">
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
                  <p className="text-primary-foreground/80">support@specslo.com</p>
                </div>
              </div>

              <div className="flex items-center group">
                <div className="p-3 bg-accent rounded-lg group-hover:bg-accent/90 transition-colors duration-300">
                  <Phone className="w-6 h-6 text-accent-foreground" />
                </div>
                <div className="ml-4">
                  <p className="font-semibold">Call us</p>
                  <p className="text-primary-foreground/80">+91-7597406130</p>
                </div>
              </div>

              <a 
                href="https://api.whatsapp.com/send/?phone=917597406130&text&type=phone_number&app_absent=0" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center group hover:bg-accent/10 rounded-lg p-2 transition-colors duration-300"
              >
                <div className="p-3 bg-accent rounded-lg group-hover:bg-accent/90 transition-colors duration-300">
                  <MessageCircle className="w-6 h-6 text-accent-foreground" />
                </div>
                <div className="ml-4">
                  <p className="font-semibold">WhatsApp us</p>
                  <p className="text-primary-foreground/80">Quick chat support</p>
                </div>
              </a>

              <div className="flex items-center group">
                <div className="p-3 bg-accent rounded-lg group-hover:bg-accent/90 transition-colors duration-300">
                  <MapPin className="w-6 h-6 text-accent-foreground" />
                </div>
                <div className="ml-4">
                  <p className="font-semibold">Visit us</p>
                  <p className="text-primary-foreground/80">Jupiter Plaza, Sector-4, Udaipur, India</p>
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
                  Services Needed *
                </label>
                <select 
                  className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-colors duration-300 bg-background"
                  required
                >
                  <option value="">Select a service you need</option>
                  <option value="machine-learning">Machine Learning</option>
                  <option value="ai-chatbots">AI Chatbots & Assistants</option>
                  <option value="data-intelligence">Data Intelligence</option>
                  <option value="process-automation">Process Automation</option>
                  <option value="ai-integration">AI Integration</option>
                  <option value="business-intelligence">Business Intelligence</option>
                  <option value="custom-solution">Custom AI Solution</option>
                  <option value="consultation">AI Consultation</option>
                  <option value="multiple-services">Multiple Services</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-2">
                  Budget Range
                </label>
                <select className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-colors duration-300 bg-background">
                  <option value="">Select budget range</option>
                  <option value="under-10k">Under $10,000</option>
                  <option value="10k-25k">$10,000 - $25,000</option>
                  <option value="25k-50k">$25,000 - $50,000</option>
                  <option value="50k-100k">$50,000 - $100,000</option>
                  <option value="100k-plus">$100,000+</option>
                  <option value="discuss">Let's discuss</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-2">
                  Project Details
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-colors duration-300 bg-background resize-none"
                  placeholder="Tell us about your project requirements, timeline, and any specific goals..."
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

    </section>
  );
};

export default ContactSection;