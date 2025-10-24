import { Link } from "react-router-dom";
import { CheckCircle, ArrowLeft, Home } from "lucide-react";
import { Button } from "@/components/ui/button";

const ThankYou = () => {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        <div className="mb-8">
          <CheckCircle className="w-24 h-24 text-[#ffd63c] mx-auto mb-6" />
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Thank You!
          </h1>
          <div className="w-24 h-1 bg-[#ffd63c] mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 mb-8">
            Your message has been sent successfully. We'll get back to you within 24 hours.
          </p>
        </div>

        <div className="space-y-4">
          <p className="text-lg text-gray-400">
            While you wait, feel free to explore our services or check out our latest work.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link to="/">
              <Button 
                variant="hero" 
                size="lg"
                className="group"
              >
                <Home className="mr-2 h-5 w-5" />
                Back to Home
              </Button>
            </Link>
            
            <Link to="/services">
              <Button 
                variant="outline" 
                size="lg"
                className="group border-[#ffd63c] text-[#ffd63c] hover:bg-[#ffd63c] hover:text-black"
              >
                <ArrowLeft className="mr-2 h-5 w-5 group-hover:-translate-x-1 transition-transform" />
                View Our Services
              </Button>
            </Link>
          </div>
        </div>

        <div className="mt-12 p-6 bg-gray-900 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">What happens next?</h3>
          <div className="space-y-3 text-left">
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-[#ffd63c] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-black font-bold text-sm">1</span>
              </div>
              <p className="text-gray-300">We'll review your requirements and prepare a detailed response</p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-[#ffd63c] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-black font-bold text-sm">2</span>
              </div>
              <p className="text-gray-300">Our team will contact you within 24 hours to discuss your project</p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-[#ffd63c] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-black font-bold text-sm">3</span>
              </div>
              <p className="text-gray-300">We'll schedule a consultation to understand your needs better</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
