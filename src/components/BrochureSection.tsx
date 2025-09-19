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
          
          {/* Right Side - Illustration */}
          <div className="relative animate-slide-up" style={{ animationDelay: '0.3s' }}>
            {/* Character and Scene */}
            <div className="relative h-96">
              {/* Person sitting on chair */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
                {/* Chair */}
                <div className="w-32 h-8 bg-gray-600 rounded-lg mb-2"></div>
                
                {/* Person */}
                <div className="relative">
                  {/* Head */}
                  <div className="w-16 h-16 bg-[#ffd63c] rounded-full mx-auto mb-2 relative">
                    {/* Eyes */}
                    <div className="absolute top-4 left-3 w-2 h-2 bg-black rounded-full"></div>
                    <div className="absolute top-4 right-3 w-2 h-2 bg-black rounded-full"></div>
                    {/* Smile */}
                    <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-6 h-3 border-2 border-black border-t-0 rounded-b-full"></div>
                  </div>
                  
                  {/* Body */}
                  <div className="w-20 h-24 bg-[#ffd63c] rounded-t-full mx-auto relative">
                    {/* Arms holding phone */}
                    <div className="absolute top-4 -left-6 w-6 h-12 bg-[#ffd63c] rounded-full transform rotate-12"></div>
                    <div className="absolute top-4 -right-6 w-6 h-12 bg-[#ffd63c] rounded-full transform -rotate-12"></div>
                    
                    {/* Phone */}
                    <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-5 h-8 bg-black rounded-lg"></div>
                  </div>
                </div>
              </div>
              
              {/* Table with laptop */}
              <div className="absolute bottom-16 left-8">
                {/* Table */}
                <div className="w-20 h-4 bg-gray-600 rounded-lg relative">
                  {/* Table legs */}
                  <div className="absolute -bottom-2 left-2 w-1 h-2 bg-gray-600"></div>
                  <div className="absolute -bottom-2 right-2 w-1 h-2 bg-gray-600"></div>
                </div>
                
                {/* Laptop */}
                <div className="absolute -top-4 left-2 w-16 h-10 bg-gray-800 rounded">
                  {/* Screen */}
                  <div className="w-14 h-8 bg-white rounded mx-auto mt-1 flex items-center justify-center">
                    <div className="w-3 h-3 bg-[#ffd63c] rounded"></div>
                  </div>
                </div>
                
                {/* Coffee cup */}
                <div className="absolute -top-2 right-2 w-3 h-4 bg-[#ffd63c] rounded-full"></div>
              </div>
              
              {/* Plants */}
              <div className="absolute bottom-8 left-4 w-4 h-6 bg-[#ffd63c] rounded-full">
                <div className="w-3 h-3 bg-gray-600 rounded-full absolute -top-1 left-1/2 transform -translate-x-1/2"></div>
              </div>
              
              <div className="absolute bottom-8 right-4 w-4 h-6 bg-[#ffd63c] rounded-full">
                <div className="w-3 h-3 bg-gray-600 rounded-full absolute -top-1 left-1/2 transform -translate-x-1/2"></div>
              </div>
              
              {/* Floating download document */}
              <div className="absolute top-8 right-8 animate-bounce">
                <div className="w-8 h-10 bg-white rounded flex items-center justify-center shadow-lg">
                  <Download className="w-4 h-4 text-[#ffd63c]" />
                </div>
                {/* Large download arrow */}
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
                  <div className="w-0 h-0 border-l-4 border-r-4 border-b-6 border-l-transparent border-r-transparent border-b-[#ffd63c]"></div>
                </div>
              </div>
              
              {/* Small download arrow */}
              <div className="absolute top-16 right-12 animate-bounce" style={{ animationDelay: '0.5s' }}>
                <div className="w-0 h-0 border-l-2 border-r-2 border-b-3 border-l-transparent border-r-transparent border-b-[#ffd63c]"></div>
              </div>
            </div>
            
            {/* Yellow ground plane */}
            <div className="absolute bottom-0 left-0 w-full h-12 bg-[#ffd63c] rounded-t-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrochureSection;
