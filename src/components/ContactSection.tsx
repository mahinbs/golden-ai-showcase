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
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
              <div>Ready to Share</div>
              <div>Your <span className="text-[#ffd63c]">Specs</span> ?</div>
            </h2>
            
            {/* Yellow separator line */}
            <div className="w-full h-0.5 bg-[#ffd63c] mb-8"></div>
            
            <p className="text-lg md:text-xl text-white mb-8 leading-relaxed">
              Talk to us about your next project and see how we
              turn ideas into scalable, high-impact digital products.
            </p>

            <div className="space-y-8 mb-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#ffd63c] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-bold text-white text-lg">Email us</p>
                  <p className="text-white">support@specslo.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#ffd63c] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-bold text-white text-lg">Call us</p>
                  <p className="text-white">+91-7597406130</p>
                </div>
              </div>

              <a 
                href="https://api.whatsapp.com/send/?phone=917597406130&text&type=phone_number&app_absent=0" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-start space-x-4 hover:opacity-80 transition-opacity duration-300"
              >
                <div className="w-12 h-12 bg-[#ffd63c] rounded-lg flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-bold text-white text-lg">WhatsApp us</p>
                  <p className="text-white">Quick chat support</p>
                </div>
              </a>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#ffd63c] rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-bold text-white text-lg">Visit us</p>
                  <p className="text-white">Jupiter Plaza, Sector-4, Udaipur, India</p>
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