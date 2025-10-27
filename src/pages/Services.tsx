import React from "react";
import Navigation from "@/components/Navigation";
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

      {/* Custom Hero Section */}
      <section className="relative min-h-screen flex items-center justify-start overflow-hidden">
        {/* Background Image */}
        <img
          src={heroImg}
          className="absolute inset-0 h-full w-full z-0 object-cover"
          alt="Services Hero Background"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 z-10 bg-black/80"></div>

        {/* Content */}
        <div className="relative z-20 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            {/* Main Heading */}
            <h1 className="text-6xl md:text-8xl font-bold text-[#ffd63c] mb-6 leading-tight">
              Solutions
            </h1>

            {/* Sub-heading */}
            <h2 className="text-2xl md:text-3xl font-medium text-white mb-6">
              Built Around Your Specs.
            </h2>

            {/* Yellow Separator Line */}
            <div className="h-1 max-w-md w-full bg-[#ffd63c] mb-8"></div>

            {/* Description */}
            <p className="text-lg md:text-xl text-white mb-8 leading-relaxed max-w-3xl">
              From AI-powered systems to scalable apps, websites, and custom
              software, we craft future-ready digital solutions that fit your
              workflows, goals, and vision.
            </p>

            {/* CTA Button */}
            <Link
              to="/contact"
              className="inline-block bg-[#ffd63c] text-black px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#e6c035] transition-colors duration-300"
            >
              Request a free quote
            </Link>
          </div>
        </div>

        {/* Bottom Tagline */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 text-center">
          <p className="text-white text2">
            <span className="text-white">What We Build,</span>{" "}
            <span className="text-[#ffd63c] font-semibold">
              We Build to Fit
            </span>
          </p>
        </div>
      </section>

      <ServicesSection />

      {/* Our Delivery Excellence Section */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Section - Our Delivery Excellence */}
            <div className="space-y-8">
              {/* Title with yellow highlight */}
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-bold !leading-tight text-white">
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
                <h2 className="text-4xl md:text-5xl font-bold !leading-tight text-black">
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
