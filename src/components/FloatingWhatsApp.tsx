import { MessageCircle, X } from "lucide-react";
import { useState } from "react";

const FloatingWhatsApp = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleWhatsAppClick = () => {
    window.open(
      "https://api.whatsapp.com/send/?phone=917597406130&text&type=phone_number&app_absent=0",
      "_blank",
      "noopener,noreferrer"
    );
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50">
      {/* Close Button */}
      <button
        onClick={() => setIsVisible(false)}
        className="absolute -top-2 -right-2 w-5 h-5 sm:w-6 sm:h-6 bg-red-500 text-white rounded-full flex items-center justify-center text-xs hover:bg-red-600 transition-colors duration-200 z-10"
        aria-label="Close WhatsApp button"
      >
        <X className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
      </button>

      {/* WhatsApp Button */}
      <button
        onClick={handleWhatsAppClick}
        className="group relative p-0 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 animate-pulse cursor-pointer z-40"
        aria-label="Chat with us on WhatsApp"
      >
        {/* WhatsApp Logo */}
        <img 
          src="https://res.cloudinary.com/dknafpppp/image/upload/v1758192024/3d-icon-social-media-app_23-2150049563_zio3jy.avif"
          alt="WhatsApp Logo"
          className="w-12 h-12 sm:w-16 sm:h-16 object-contain rounded-full"
        />
        
        {/* Ripple Effect */}
        <div className="absolute inset-0 rounded-full bg-green-400 opacity-0 group-hover:opacity-20 group-hover:scale-150 transition-all duration-500"></div>
        
        {/* Tooltip - Hidden on mobile */}
        <div className="hidden sm:block absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white text-sm px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          Chat with us on WhatsApp
          <div className="absolute left-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-l-gray-900"></div>
        </div>
      </button>

      {/* Floating Animation */}
      <div className="absolute inset-0 rounded-full bg-green-400 opacity-20 animate-ping"></div>
    </div>
  );
};

export default FloatingWhatsApp;
