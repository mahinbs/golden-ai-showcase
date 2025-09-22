import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const BrochureSection = () => {
  const handleDownloadBrochure = () => {
    // You can replace this with actual brochure download logic
    window.open('/brochure.pdf', '_blank');
  };

  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <div className="animate-fade-in">
            {/* Top horizontal line */}
            <div className="w-full h-0.5 bg-[#ffd63c] mb-4"></div>
            
            {/* Main heading */}
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
              <div>Take the Next Step</div>
              <div>with Specslo</div>
            </h2>
            
            {/* Bottom horizontal line */}
            <div className="w-full h-0.5 bg-[#ffd63c] mb-8"></div>
            
            {/* Description */}
            <p className="text-lg md:text-xl text-white mb-8 leading-relaxed text-left">
              Download our brochure to see how we turn your specs into future-ready digital solutions, 
              with our services, approach, and vision inside.
            </p>
            
            {/* Download Button */}
            <Button 
              onClick={handleDownloadBrochure}
              className="bg-[#ffd63c] text-black hover:bg-[#ffd63c]/90 px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Brochure
            </Button>
          </div>
          
          {/* Right Side - Image */}
          <div className="relative animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <img 
              src="https://res.cloudinary.com/drdjii8fe/image/upload/v1758290483/6._CTA_-_2_xis82s.png" 
              alt="Take the Next Step with Specslo illustration"
              className="w-full h-auto max-w-lg mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrochureSection;
