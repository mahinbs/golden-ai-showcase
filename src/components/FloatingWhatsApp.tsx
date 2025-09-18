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
    <div className="fixed bottom-6 right-6 z-50">
      {/* Close Button */}
      <button
        onClick={() => setIsVisible(false)}
        className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center text-xs hover:bg-red-600 transition-colors duration-200 z-10"
        aria-label="Close WhatsApp button"
      >
        <X className="w-3 h-3" />
      </button>

      {/* WhatsApp Button */}
      <button
        onClick={handleWhatsAppClick}
        className="group relative bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 animate-pulse"
        aria-label="Chat with us on WhatsApp"
      >
        {/* WhatsApp Logo */}
        <img 
          src="https://res.cloudinary.com/dknafpppp/image/upload/v1758191674/whatsapp-vector-logo-icon-logotype-vector-social-media_901408-406_szipyq.avif"
          alt="WhatsApp Logo"
          className="w-8 h-8 object-contain"
        />
        
        {/* Ripple Effect */}
        <div className="absolute inset-0 rounded-full bg-green-400 opacity-0 group-hover:opacity-30 group-hover:scale-150 transition-all duration-500"></div>
        
        {/* Tooltip */}
        <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white text-sm px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
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
