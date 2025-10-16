import React, { useState } from "react";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import ContactSection from "@/components/ContactSection";
import { Link } from "react-router-dom";
import { ourServices } from "../content/ourServices";
import heroImg from '../assets/blogs-hero.webp'; // Using the same hero image for consistency

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

      {/* Services Grid Section */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our <span className="text-yellow-400">Services</span>
            </h2>
            <p className="text-white text-lg max-w-3xl mx-auto">
              Explore our comprehensive range of technology services designed to drive your business forward.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ourServices.map((service, index) => (
              <Link
                key={service.id}
                to={`${service.title.toLowerCase().replace(/\s+/g, '-').replace('&', 'and')}`}
                className="group block"
              >
                <div className="bg-black rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-white/20 hover:border-yellow-400 group-hover:scale-105 h-full">
                  <div className="aspect-w-16 aspect-h-9">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="bg-yellow-400 text-black px-2 py-1 rounded-full text-xs font-medium">
                        Service
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-white mb-4 line-clamp-3">
                      {service.desc}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-yellow-400 hover:text-yellow-500 font-medium group-hover:translate-x-1 transition-all duration-300">
                        Learn More →
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Why Choose <span className="text-yellow-400 bg-black">Our Services</span>
            </h2>
            <p className="text-black text-lg max-w-3xl mx-auto">
              We deliver exceptional results through our proven approach and commitment to excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-black mb-2">Fast Delivery</h3>
              <p className="text-black text-sm">Quick turnaround times without compromising quality</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-black mb-2">Quality Assured</h3>
              <p className="text-black text-sm">Rigorous testing and quality control processes</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-black mb-2">Expert Team</h3>
              <p className="text-black text-sm">Skilled professionals with years of experience</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-black mb-2">24/7 Support</h3>
              <p className="text-black text-sm">Round-the-clock assistance and maintenance</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our <span className="text-yellow-400">Process</span>
            </h2>
            <p className="text-white text-lg max-w-3xl mx-auto">
              We follow a structured approach to ensure successful project delivery.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4 text-black font-bold text-xl">
                1
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Discovery</h3>
              <p className="text-white text-sm">Understanding your requirements and goals</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4 text-black font-bold text-xl">
                2
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Planning</h3>
              <p className="text-white text-sm">Creating detailed project roadmap and timeline</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4 text-black font-bold text-xl">
                3
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Development</h3>
              <p className="text-white text-sm">Building and implementing your solution</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4 text-black font-bold text-xl">
                4
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Launch</h3>
              <p className="text-white text-sm">Deploying and supporting your project</p>
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
