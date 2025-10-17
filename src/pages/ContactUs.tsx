import React from "react";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import ContactSection from "@/components/ContactSection";
import { Mail, Phone, MapPin, Clock, MessageCircle } from "lucide-react";
import contactHeroImg from "../assets/contact-hero.webp";

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />

      {/* Hero Section */}
      <HeroSection
        backgroundImage={contactHeroImg}
        mainHeadline=""
        highlightedWord="Talk"
        headlineAfterHighlight="to Specslo"
        subHeadline=""
        showSecondaryButton={false}
        showCtaText={false}
        stat1Value=""
        stat1Label=""
        stat2Value=""
        stat2Label=""
        stat3Value=""
        stat3Label=""
        bottomSectionText="Our Story Begins With Your Specs"
        bottomHighlightedWord="Specs"
        show3DLogo={false}
      />

      {/* Contact Form Section */}
      <ContactSection />

      {/* Map Section */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Find Us <span className="text-yellow-400">Here</span>
            </h2>
            <p className="text-white text-lg max-w-3xl mx-auto">
              Visit our office in the heart of Udaipur. We're always happy to
              meet in person and discuss your project.
            </p>
          </div>

          <div className="bg-white rounded-lg overflow-hidden shadow-lg">
            <div className="h-96 w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3624.7712345678901!2d73.7124!3d24.5854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3967e5c8c8c8c8c8%3A0x8c8c8c8c8c8c8c8c!2sJupiter%20Plaza%2C%20Sector-4%2C%20Udaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                width="100%"
                height="100%"
                className="grayscale outline-none border-none"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Specslo Office Location"
              ></iframe>
            </div>
            <div className="p-6 bg-white">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-6 h-6 text-yellow-400" />
                <h3 className="text-xl font-bold text-black">Our Office</h3>
              </div>
              <p className="text-black mb-2">
                <strong>Address:</strong> Jupiter Plaza, Sector-4, Udaipur,
                Rajasthan, India
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp Contact Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-black rounded-lg p-8">
            <div className="flex items-center justify-center gap-3 mb-6">
              <MessageCircle className="w-8 h-8 text-yellow-400" />
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                Quick Chat on <span className="text-yellow-400">WhatsApp</span>
              </h2>
            </div>
            <p className="text-white mb-6">
              Need immediate assistance? Chat with us on WhatsApp for instant
              support and quick project discussions.
            </p>
            <a
              href="https://api.whatsapp.com/send/?phone=917597406130&text&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-yellow-400 text-black px-6 py-3 rounded-lg font-bold hover:bg-yellow-500 transition-colors duration-300"
            >
              <MessageCircle className="w-5 h-5" />
              Start WhatsApp Chat
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default ContactUs;
