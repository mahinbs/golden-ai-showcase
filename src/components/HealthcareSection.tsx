import { Button } from "@/components/ui/button";

const HealthcareSection = () => {
  const handleRequestQuote = () => {
    // You can replace this with actual quote request logic
    window.open('#contact', '_self');
  };

  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div className="animate-fade-in">
            {/* Main heading */}
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
              <div className="inline-block">
                <span className="bg-[#ffd63c] text-black px-4 rounded-lg">Healthcare</span>
              </div>
              <div className="text-white mt-2">Solutions</div>
            </h2>
            
            {/* Yellow separator line */}
            <div className="w-full h-0.5 bg-[#ffd63c] mb-8"></div>
            
            {/* Description */}
            <p className="text-lg md:text-xl text-white mb-8 leading-relaxed">
              From AI-powered patient portals to clinic automation, we build healthcare solutions 
              that fit your workflows and improve patient care.
            </p>
            
            {/* CTA Button */}
            <Button 
              onClick={handleRequestQuote}
              className="bg-[#ffd63c] text-black hover:bg-[#ffd63c]/90 px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105"
            >
              Request a free quote
            </Button>
          </div>
          
          {/* Right Side - AI in Healthcare Image */}
          <div className="relative animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <img 
              src="https://res.cloudinary.com/drdjii8fe/image/upload/v1758619021/Healthcare_Solution_ehkweg.jpg" 
              alt="AI in Healthcare - Smart healthcare solutions and technology"
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
            {/* Overlay for better text readability if needed */}
            <div className="absolute inset-0 bg-black/20 rounded-lg"></div>
          </div>
        </div>
        
        {/* Bottom Tagline */}
        <div className="text-center mt-16 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <p className="text-[#ffd63c] text-xl md:text-2xl font-semibold">
            Digital Healthcare Built Around Your Specs
          </p>
        </div>
      </div>
    </section>
  );
};

export default HealthcareSection;
