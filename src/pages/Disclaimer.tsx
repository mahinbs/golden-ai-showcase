import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const Disclaimer = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-black text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold !leading-tight mb-6">
            Disclaimer
          </h1>
          <p className="text-xl text-gray-300">
            Specslo Software Solutions LLP
          </p>
          <p className="text-sm text-gray-400 mt-4">
            Last Updated: {new Date().toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            
            {/* Main Disclaimer */}
            <div className="mb-8">
              <p className="text-gray-700 leading-relaxed">
                The information provided on this website www.specslo.com by Specslo Software Solutions LLP ("Specslo," "we," "our," or "us") 
                is for general informational purposes only. While we make every effort to keep the content accurate and current, 
                we make no guarantees of any kind regarding accuracy, reliability, or completeness.
              </p>
            </div>

            {/* Liability Disclaimer */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-black mb-4">Liability Disclaimer</h2>
              <p className="text-gray-700 leading-relaxed">
                Specslo is not liable for any loss or damage arising from the use of our website or reliance on any 
                information provided. All use of this site is at your own risk.
              </p>
            </div>

            {/* External Links Disclaimer */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-black mb-4">External Links</h2>
              <p className="text-gray-700 leading-relaxed">
                Our website may contain external links to third-party websites. We have no control over their content and 
                do not endorse or accept responsibility for their policies or actions.
              </p>
            </div>

            {/* Professional Advice Disclaimer */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-black mb-4">Professional Advice</h2>
              <p className="text-gray-700 leading-relaxed">
                Nothing on this site should be interpreted as legal, financial, or professional advice. For any specific 
                matters, we recommend seeking qualified professional guidance.
              </p>
            </div>

            {/* Updates Disclaimer */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-black mb-4">Policy Updates</h2>
              <p className="text-gray-700 leading-relaxed">
                We may update this Disclaimer at any time. Continued use of our website signifies your acceptance of 
                the latest version.
              </p>
            </div>

            {/* Additional Disclaimers */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-black mb-4">Additional Disclaimers</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-black mb-2">Service Availability</h3>
                  <p className="text-gray-700 leading-relaxed">
                    While we strive to maintain continuous service availability, we do not guarantee uninterrupted access to our website or services. 
                    We reserve the right to modify, suspend, or discontinue any part of our services without prior notice.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-black mb-2">Technical Information</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Technical specifications, pricing, and service descriptions are subject to change without notice. 
                    We recommend contacting us directly for the most current information regarding our services.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-black mb-2">Project Outcomes</h3>
                  <p className="text-gray-700 leading-relaxed">
                    While we are committed to delivering high-quality solutions, project outcomes may vary based on client requirements, 
                    technical constraints, and other factors beyond our control. We cannot guarantee specific results or performance metrics.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-black mb-2">Third-Party Content</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Any third-party content, testimonials, or case studies featured on our website represent individual experiences 
                    and may not be typical of all clients. Results may vary.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-gray-50 p-6 rounded-lg mt-12">
              <h3 className="text-xl font-bold text-black mb-4">Contact Us</h3>
              <p className="text-gray-700 leading-relaxed">
                If you have any questions about this Disclaimer, please contact us:
              </p>
              <div className="mt-4 space-y-2">
                <p className="text-gray-700">
                  <strong>Email:</strong>{" "}
                  <a href="mailto:support@specslo.com" className="text-[#ffd63c] hover:underline">
                    support@specslo.com
                  </a>
                </p>
                <p className="text-gray-700">
                  <strong>Phone:</strong> +91-7597406130
                </p>
                <p className="text-gray-700">
                  <strong>Address:</strong> Jupiter Plaza, Sector-4, Udaipur, India
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Disclaimer;
