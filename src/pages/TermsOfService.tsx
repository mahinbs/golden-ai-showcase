import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-black text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold !leading-tight mb-6">
            Terms of Service
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
                By accessing or using our website support@specslo.com and our digital services, you agree to be bound 
                by these Terms of Service. Please read them carefully before using our site or engaging our services.
              </p>
            </div>

            {/* Section 1 */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-black mb-4">1. Overview</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                This website is operated by Specslo Software Solutions LLP. Throughout the site, "we," "us," and "our" 
                refer to Specslo. We offer this website, including all information, tools, and services available from it, 
                to you, the user, conditioned upon your acceptance of all terms, conditions, and policies stated here.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Any new features or tools added to the current website shall also be subject to these Terms of Service. 
                We reserve the right to update or change these Terms at any time by posting updates on this page. 
                Continued use of the site after changes constitutes acceptance of the new Terms.
              </p>
            </div>

            {/* Section 2 */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-black mb-4">2. Eligibility</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                By agreeing to these Terms:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>You confirm that you are at least the age of majority in your place of residence.</li>
                <li>You agree to comply with all applicable laws and not engage in any unlawful or unauthorized activity while using our services.</li>
              </ul>
            </div>

            {/* Section 3 */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-black mb-4">3. General Conditions</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>We reserve the right to refuse service to anyone for any reason at any time.</li>
                <li>Your content (excluding credit card information) may be transferred unencrypted over networks. Credit card data is always encrypted.</li>
                <li>You agree not to reproduce, duplicate, copy, sell, resell, or exploit any part of our services without our written permission.</li>
              </ul>
            </div>

            {/* Section 4 */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-black mb-4">4. Accuracy of Information</h2>
              <p className="text-gray-700 leading-relaxed">
                We do our best to provide accurate and current information, but we do not guarantee that content on this 
                site is error-free or complete. The material is provided for general information and should not be solely relied 
                upon for decisions without consulting more reliable sources.
              </p>
            </div>

            {/* Section 5 */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-black mb-4">5. Products and Services</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Our digital solutions include website development, mobile app development, AI-powered products, branding, and more.</li>
                <li>All services are subject to availability and may change at our discretion.</li>
                <li>We reserve the right to limit the sale of services to any person or region, and to discontinue or modify services without prior notice.</li>
              </ul>
            </div>

            {/* Section 6 */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-black mb-4">6. Payments and Billing</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>All transactions must be completed through secure payment methods.</li>
                <li>We reserve the right to refuse or cancel orders if fraud or misuse is suspected.</li>
                <li>All billing and account information must be accurate and up to date.</li>
              </ul>
            </div>

            {/* Section 7 */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-black mb-4">7. Third-Party Tools and Links</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>We may provide access to third-party tools or links.</li>
                <li>We are not responsible for their content, accuracy, or policies.</li>
                <li>Your use of third-party tools is entirely at your own risk.</li>
              </ul>
            </div>

            {/* Section 8 */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-black mb-4">8. User Submissions</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you submit suggestions, ideas, or other content, you agree that:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>We may use, edit, or distribute your submissions without obligation.</li>
                <li>You will not submit unlawful, abusive, or infringing content.</li>
                <li>You are solely responsible for the accuracy of your submissions.</li>
              </ul>
            </div>

            {/* Section 9 */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-black mb-4">9. Prohibited Uses</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                You may not use our site or services for:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Any unlawful activity.</li>
                <li>Violating intellectual property rights.</li>
                <li>Harassment, discrimination, or abusive behavior.</li>
                <li>Uploading malicious code or attempting to bypass security features.</li>
                <li>Collecting personal data of others without consent.</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                We reserve the right to terminate your access if these rules are violated.
              </p>
            </div>

            {/* Section 10 */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-black mb-4">10. Disclaimer of Warranties</h2>
              <p className="text-gray-700 leading-relaxed">
                Our services are provided "as is" and "as available," without any express or implied warranties. We do 
                not guarantee uninterrupted or error-free operation. You agree that your use of the site is at your sole risk.
              </p>
            </div>

            {/* Section 11 */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-black mb-4">11. Limitation of Liability</h2>
              <p className="text-gray-700 leading-relaxed">
                In no case shall Specslo, its employees, partners, or affiliates be liable for any indirect, incidental, or 
                consequential damages, including loss of data, revenue, or profits, arising from your use of our website or services.
              </p>
            </div>

            {/* Section 12 */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-black mb-4">12. Indemnification</h2>
              <p className="text-gray-700 leading-relaxed">
                You agree to indemnify and hold harmless Specslo and its team from any claims, losses, damages, or 
                costs arising out of your breach of these Terms or your violation of any law or rights of a third party.
              </p>
            </div>

            {/* Section 13 */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-black mb-4">13. Severability</h2>
              <p className="text-gray-700 leading-relaxed">
                If any part of these Terms is found to be unlawful or unenforceable, the remaining sections will remain in full effect.
              </p>
            </div>

            {/* Section 14 */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-black mb-4">14. Termination</h2>
              <p className="text-gray-700 leading-relaxed">
                We may suspend or terminate your access to our site or services if you violate these Terms. Your 
                obligations for any outstanding payments or liabilities will survive termination.
              </p>
            </div>

            {/* Section 15 */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-black mb-4">15. Entire Agreement</h2>
              <p className="text-gray-700 leading-relaxed">
                These Terms, together with any additional agreements or policies referenced herein, constitute the 
                entire agreement between you and Specslo.
              </p>
            </div>

            {/* Section 16 */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-black mb-4">16. Governing Law</h2>
              <p className="text-gray-700 leading-relaxed">
                These Terms are governed by and construed under the laws of India. 
                Any disputes will be subject to the jurisdiction of the courts of Udaipur, Rajasthan.
              </p>
            </div>

            {/* Section 17 */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-black mb-4">17. Changes to Terms</h2>
              <p className="text-gray-700 leading-relaxed">
                We reserve the right to update or modify these Terms of Service at any time. 
                The latest version will always be available on this page. Continued use of our site after updates 
                constitutes acceptance of the new Terms.
              </p>
            </div>

            {/* Contact Information */}
            <div className="bg-gray-50 p-6 rounded-lg mt-12">
              <h3 className="text-xl font-bold text-black mb-4">Contact Us</h3>
              <p className="text-gray-700 leading-relaxed">
                If you have any questions about these Terms of Service, please contact us:
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

export default TermsOfService;
