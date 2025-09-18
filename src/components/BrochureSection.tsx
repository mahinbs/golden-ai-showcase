import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const BrochureSection = () => {
  const handleDownloadBrochure = () => {
    // You can replace this with actual brochure download logic
    window.open('/brochure.pdf', '_blank');
  };

  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Top Yellow Bar */}
      <div className="absolute top-0 left-0 w-full h-1 bg-yellow-400"></div>
      
      {/* Background with subtle texture */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 to-black"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <div className="animate-fade-in">
            {/* Top horizontal line */}
            <div className="w-16 h-0.5 bg-yellow-400 mb-4"></div>
            
            {/* Main heading */}
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
              <div>Take the Next Step</div>
              <div>with Specslo</div>
            </h2>
            
            {/* Bottom horizontal line */}
            <div className="w-16 h-0.5 bg-yellow-400 mb-8"></div>
            
            {/* Description */}
            <p className="text-lg md:text-xl text-white mb-8 leading-relaxed text-left">
              Download our brochure to see how we turn your specs into future-ready digital solutions, 
              with our services, approach, and vision inside.
            </p>
            
            {/* Download Button */}
            <Button 
              onClick={handleDownloadBrochure}
              className="bg-yellow-400 text-black hover:bg-yellow-500 px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Brochure
            </Button>
          </div>
          
          {/* Right Side - Illustration */}
          <div className="relative animate-slide-up" style={{ animationDelay: '0.3s' }}>
            {/* Character and Scene */}
            <div className="relative">
              {/* Person */}
              <div className="relative z-20">
                {/* Body */}
                <div className="w-32 h-40 bg-yellow-400 rounded-t-full mx-auto relative">
                  {/* Head */}
                  <div className="w-16 h-16 bg-yellow-300 rounded-full absolute -top-8 left-1/2 transform -translate-x-1/2">
                    {/* Eyes */}
                    <div className="absolute top-4 left-3 w-2 h-2 bg-black rounded-full"></div>
                    <div className="absolute top-4 right-3 w-2 h-2 bg-black rounded-full"></div>
                    {/* Smile */}
                    <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-6 h-3 border-2 border-black border-t-0 rounded-b-full"></div>
                  </div>
                  
                  {/* Arms holding phone */}
                  <div className="absolute top-8 -left-4 w-8 h-16 bg-yellow-400 rounded-full transform rotate-12"></div>
                  <div className="absolute top-8 -right-4 w-8 h-16 bg-yellow-400 rounded-full transform -rotate-12"></div>
                  
                  {/* Phone */}
                  <div className="absolute top-12 left-1/2 transform -translate-x-1/2 w-6 h-10 bg-black rounded-lg"></div>
                </div>
                
                {/* Chair */}
                <div className="w-40 h-8 bg-gray-600 rounded-lg mx-auto mt-2"></div>
              </div>
              
              {/* Table */}
              <div className="absolute top-20 left-8 w-24 h-24 bg-gray-600 rounded-full"></div>
              
              {/* Laptop on table */}
              <div className="absolute top-16 left-12 w-16 h-10 bg-gray-800 rounded">
                {/* Screen */}
                <div className="w-14 h-8 bg-yellow-400 rounded mx-auto mt-1 flex items-center justify-center">
                  <div className="w-2 h-2 bg-black rounded-full"></div>
                </div>
              </div>
              
              {/* Coffee cup */}
              <div className="absolute top-18 left-20 w-4 h-6 bg-yellow-400 rounded-full"></div>
              
              {/* Plants */}
              <div className="absolute top-24 right-8 w-6 h-8 bg-yellow-400 rounded-full">
                <div className="w-4 h-4 bg-green-500 rounded-full absolute -top-2 left-1/2 transform -translate-x-1/2"></div>
              </div>
              
              {/* Floating download icons */}
              <div className="absolute top-8 left-16 animate-float">
                <div className="w-8 h-10 bg-white rounded flex items-center justify-center">
                  <Download className="w-4 h-4 text-yellow-400" />
                </div>
              </div>
              
              <div className="absolute top-12 right-12 animate-float" style={{ animationDelay: '1s' }}>
                <div className="w-6 h-8 bg-black rounded flex items-center justify-center">
                  <Download className="w-3 h-3 text-yellow-400" />
                </div>
              </div>
            </div>
            
            {/* Yellow ground plane */}
            <div className="absolute bottom-0 left-0 w-full h-8 bg-yellow-400 rounded-t-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrochureSection;
