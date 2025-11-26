import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-black text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold !leading-tight mb-6">
            Privacy Policy
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
            
            {/* Introduction */}
            <div className="mb-8">
              <p className="text-gray-700 leading-relaxed">
                Welcome to Specslo Software Solutions LLP ("Specslo," "we," "our," or "us").
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                We value your privacy and are committed to protecting your personal information. 
                This Privacy Policy explains how we collect, use, share, and protect your data when you use our website 
                support@specslo.com and our digital services, including software development, website development, 
                app development, AI solutions, and related offerings.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                By using our website, you agree to the terms outlined in this Privacy Policy.
              </p>
            </div>

            {/* Section 1 */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-black mb-4">1. Information We Collect</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We collect information to provide better services and a personalized experience:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>Personal Information:</strong> Name, email address, phone number, company name, billing details, and other data provided through forms, chat, or checkout.</li>
                <li><strong>Technical Data:</strong> IP address, browser type, device information, and behavior patterns collected through cookies and analytics tools.</li>
                <li><strong>Transaction Data:</strong> Details required for secure payment processing (if applicable).</li>
                <li><strong>Marketing Consent Data:</strong> Preferences shared when subscribing to newsletters or opting in for updates.</li>
                <li><strong>Project Details:</strong> Information you share for service estimation or project onboarding.</li>
              </ul>
            </div>

            {/* Section 2 */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-black mb-4">2. How We Use Your Information</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We use collected information to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Deliver and manage services including software, app, and website development.</li>
                <li>Communicate with you regarding projects, support, or marketing updates.</li>
                <li>Improve website performance, security, and user experience.</li>
                <li>Personalize content and service recommendations.</li>
                <li>Fulfill legal and compliance obligations.</li>
              </ul>
            </div>

            {/* Section 3 */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-black mb-4">3. Consent and Control</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-black mb-2">How you give consent:</h3>
                  <p className="text-gray-700 leading-relaxed">
                    By providing your details during project inquiries, purchases, or subscriptions, you consent to our collection 
                    and use of your data for that purpose.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-black mb-2">How to withdraw consent:</h3>
                  <p className="text-gray-700 leading-relaxed">
                    You can withdraw your consent or opt out of communications anytime by emailing us at{" "}
                    <a href="mailto:support@specslo.com" className="text-[#ffd63c] hover:underline">
                      support@specslo.com
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Section 4 */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-black mb-4">4. Payment Security</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>If you make a payment, your transaction is processed through secure third-party payment gateways compliant with PCI-DSS standards.</li>
                <li>We do not store your credit or debit card details after the transaction is completed.</li>
              </ul>
            </div>

            {/* Section 5 */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-black mb-4">5. Third-Party Services</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>We may share data with trusted third-party providers who support our operations (e.g., hosting, analytics, payment processing).</li>
                <li>These providers are authorized to use your personal information only as needed to provide their services.</li>
                <li>Once you leave our site or are redirected to a third-party website, their privacy policy will apply.</li>
              </ul>
            </div>

            {/* Section 6 */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-black mb-4">6. Disclosure of Information</h2>
              <p className="text-gray-700 leading-relaxed">
                We may disclose your personal information if required by law, to comply with legal processes, or if 
                you violate our Terms of Service.
              </p>
            </div>

            {/* Section 7 */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-black mb-4">7. Cookies and Tracking Technologies</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We use cookies to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Enhance user experience and keep sessions active.</li>
                <li>Analyze site traffic and usage to improve services.</li>
                <li>Personalize website content.</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                You can disable cookies through your browser settings, but some site features may not function as intended.
              </p>
            </div>

            {/* Section 8 */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-black mb-4">8. Data Security</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>We use encryption, firewalls, and secure hosting to protect personal data.</li>
                <li>Access is limited to authorized personnel only.</li>
                <li>Regular security checks help keep your data safe from misuse or unauthorized access.</li>
              </ul>
            </div>

            {/* Section 9 */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-black mb-4">9. External Links</h2>
              <p className="text-gray-700 leading-relaxed">
                Our website may contain links to external platforms. We are not responsible for the privacy practices 
                of these third-party websites. We encourage you to read their privacy policies before sharing any information.
              </p>
            </div>

            {/* Section 10 */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-black mb-4">10. Age of Consent</h2>
              <p className="text-gray-700 leading-relaxed">
                By using this site, you confirm that you are at least the age of majority in your location or have 
                parental consent to use the site.
              </p>
            </div>

            {/* Section 11 */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-black mb-4">11. Policy Updates</h2>
              <p className="text-gray-700 leading-relaxed">
                We may update this Privacy Policy periodically to reflect legal, technical, or business changes. 
                The latest version will always be posted here with an updated "Last Updated" date.
              </p>
            </div>

            {/* Section 12 */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-black mb-4">12. Your Rights</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                You have the right to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Access, update, or delete your personal data.</li>
                <li>Opt out of marketing communications.</li>
                <li>Request clarification on how your data is stored or used.</li>
                <li>Withdraw consent at any time.</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                To exercise your rights, contact us at{" "}
                <a href="mailto:support@specslo.com" className="text-[#ffd63c] hover:underline">
                  support@specslo.com
                </a>
              </p>
            </div>

            {/* Contact Information */}
            <div className="bg-gray-50 p-6 rounded-lg mt-12">
              <h3 className="text-xl font-bold text-black mb-4">Contact Us</h3>
              <p className="text-gray-700 leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us:
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

export default PrivacyPolicy;
