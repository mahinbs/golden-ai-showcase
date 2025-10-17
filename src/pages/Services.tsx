import React from "react";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import ContactSection from "@/components/ContactSection";
import { Link } from "react-router-dom";
import { ourServices } from "../content/ourServices";
import heroImg from "../assets/services-hero.webp";
import ServicesSection from "@/components/ServicesSection";
import IndustriesSection from "@/components/IndustriesSection";

const Services = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />

      {/* Hero Section */}
      <HeroSection
        backgroundImage={heroImg}
        mainHeadline=""
        highlightedWord="What We"
        headlineAfterHighlight="Do"
        subHeadline="Comprehensive technology solutions tailored to your business needs. From web development to AI solutions, we transform your ideas into reality."
        primaryButtonText="Get Started Today"
        showSecondaryButton={false}
        showCtaText={false}
        stat1Value="7+"
        stat1Label="Service Categories"
        stat2Value="100+"
        stat2Label="Projects Completed"
        stat3Value="99%"
        stat3Label="Client Satisfaction"
        bottomSectionText="Innovation Through Technology"
        bottomHighlightedWord="Innovation"
        show3DLogo={false}
      />

      <ServicesSection />

      {/* Our Delivery Excellence Section */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Section - Our Delivery Excellence */}
            <div className="space-y-8">
              {/* Title with yellow highlight */}
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-bold text-white">
                  Our{" "}
                  <span className="bg-yellow-400 text-black px-2 py-1">
                    Delivery
                  </span>{" "}
                  Excellence
                </h2>

                <div className="h-0.5 w-16 bg-yellow-400"></div>
              </div>

              {/* Description */}
              <div className="space-y-4">
                <p className="text-white text-lg">
                  We deliver more than just projects;
                </p>
                <p className="text-white text-lg">
                  We deliver quality, security, and support.
                </p>
              </div>

              {/* Left side illustration */}
              <div className="flex justify-center lg:justify-start">
                <img
                  src="https://res.cloudinary.com/drdjii8fe/image/upload/v1760614043/2.1_jb1ufo.png"
                  alt="Delivery Excellence Illustration"
                  className="max-w-sm w-full object-contain"
                />
              </div>
            </div>

            {/* Right Section - Four-Step Process */}
            <div className="flex justify-center lg:justify-end">
              <img
                src="https://res.cloudinary.com/drdjii8fe/image/upload/v1760614035/2.2_xxgflq.png"
                alt="Four-Step Process"
                className="max-w-lg w-full object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      <IndustriesSection />

      {/* Client Support Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col-reverse lg:grid grid-cols-[60%,1fr] gap-12 items-center">
            {/* Left Section - Client Support Process */}

            <div className="flex gap-4">
              <div className="lg:flex-shrink-0">
                <img
                  src="https://res.cloudinary.com/drdjii8fe/image/upload/v1760614035/3._Client_Support_1_cke3cs.png"
                  alt="Always There for You"
                  className="w-full max-w-xl object-contain"
                />
              </div>
            </div>

            {/* Right Section - Client Support Benefits */}
            <div className="space-y-8">
              {/* Title with yellow highlight */}
              <div className="space-y-4">
                <div className="h-0.5 w-full bg-black"></div>
                <h2 className="text-4xl md:text-5xl font-bold text-black">
                  Client{" "}
                  <span className="bg-yellow-400 text-black px-2 py-1">
                    Support
                  </span>
                </h2>
                <div className="h-0.5 w-full bg-black"></div>
              </div>

              {/* Benefits List */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-black rounded-full"></div>
                  <span className="text-black text-lg">
                    3 months free maintenance
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-black rounded-full"></div>
                  <span className="text-black text-lg">
                    2 free revisions post-launch
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-black rounded-full"></div>
                  <span className="text-black text-lg">
                    Paid support for future growth
                  </span>
                </div>
              </div>

              {/* Right side illustration */}
              <div className="flex justify-center lg:justify-end">
                <img
                  src="https://res.cloudinary.com/drdjii8fe/image/upload/v1760614034/3._Client_Support_2_qqybfk.png"
                  alt="Client Support Illustration"
                  className="max-w-[17rem] w-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactSection />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Services;
