import { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";

const FAQSection = ({ 
  isWebDevelopment = false 
}: { 
  isWebDevelopment?: boolean 
}) => {
  const [openIndex, setOpenIndex] = useState(1); // Second item open by default

  const generalFaqs = [
    {
      question: "Why Is SEO Important For Small Business?",
      answer: "SEO is crucial for small businesses because it helps them compete with larger companies by improving their online visibility. It drives organic traffic, builds credibility, and provides long-term marketing value at a fraction of the cost of paid advertising."
    },
    {
      question: "How Do I Choose The Best SEO Agency?",
      answer: "Look for agencies with proven track records, transparent reporting, and experience in your industry. Check their case studies, client testimonials, and ask about their methodology. Ensure they follow white-hat SEO practices and provide clear communication about their strategies."
    },
    {
      question: "Better Security And Faster Server?",
      answer: "We provide enterprise-grade security with SSL certificates, regular backups, and monitoring. Our optimized servers ensure fast loading times with CDN integration, caching, and performance optimization to deliver the best user experience."
    },
    {
      question: "Deployment Within Few Minutes",
      answer: "Our automated deployment pipeline allows for quick and reliable deployments. We use modern CI/CD practices to ensure your applications are deployed safely and efficiently, with rollback capabilities if needed."
    },
    {
      question: "How To Install WordPress Theme On CPanel?",
      answer: "Installing a WordPress theme on cPanel is straightforward. Upload the theme files via File Manager, extract them in the wp-content/themes directory, then activate the theme from your WordPress admin dashboard under Appearance > Themes."
    },
    {
      question: "What Technologies Do You Use?",
      answer: "We use modern technologies including React, Node.js, Python, AI/ML frameworks, cloud platforms like AWS and Azure, and various databases. Our tech stack is chosen based on your project requirements and scalability needs."
    }
  ];

  const webDevelopmentFaqs = [
    {
      question: "What Types of Websites Do You Build?",
      answer: "We build all types of websites including business websites, e-commerce stores, portfolios, blogs, corporate sites, and custom web applications. From simple brochure sites to complex web platforms, we handle projects of any size and complexity."
    },
    {
      question: "How Long Does Web Development Take?",
      answer: "Development time varies based on project complexity. Simple websites take 2-4 weeks, while complex applications can take 2-6 months. We provide detailed timelines during consultation and keep you updated throughout the development process."
    },
    {
      question: "Do You Provide Website Maintenance?",
      answer: "Yes, we offer comprehensive maintenance packages including security updates, content updates, performance monitoring, backups, and technical support. Our maintenance plans ensure your website stays secure, fast, and up-to-date."
    },
    {
      question: "What Technologies Do You Use for Web Development?",
      answer: "We use modern technologies like React, Next.js, Vue.js, Node.js, Python, and various databases. Our tech stack includes cloud platforms (AWS, Azure), payment gateways (Stripe, Razorpay), and deployment tools (Docker, Vercel) to build scalable, secure applications."
    },
    {
      question: "Can You Help with SEO and Performance?",
      answer: "Absolutely! We build SEO-friendly websites with optimized performance, fast loading times, mobile responsiveness, and proper meta tags. We also provide ongoing SEO services to improve your search engine rankings and online visibility."
    },
    {
      question: "Do You Offer Custom Web Applications?",
      answer: "Yes, we specialize in custom web applications tailored to your business needs. From CRM systems to inventory management, we build scalable applications that integrate with your existing systems and workflows."
    }
  ];

  const faqs = isWebDevelopment ? webDevelopmentFaqs : generalFaqs;

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Heading and Illustration */}
          <div className="animate-fade-in">
            {/* Main headline with yellow vertical bar */}
            <div className="relative">
              <div className="absolute left-0 top-0 w-8 h-full bg-[#ffd63c]"></div>
              <div className="pl-4">
                <h2 className="text-4xl md:text-6xl font-bold text-black leading-tight relative z-10">
                  <div>Frequently Asked</div>
                  <div>Questions</div>
                </h2>
              </div>
            </div>

            {/* Illustration */}
            <div className="mt-12 relative">
              {/* Person illustration */}
              <div className="relative w-64 h-80 mx-auto">
                {/* Person (from behind) */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
                  {/* Head */}
                  <div className="w-16 h-16 bg-[#ffd63c] rounded-full mx-auto mb-2"></div>
                  
                  {/* Body */}
                  <div className="w-20 h-32 bg-[#ffd63c] rounded-t-full mx-auto relative">
                    {/* Arms */}
                    <div className="absolute top-4 -left-6 w-6 h-12 bg-[#ffd63c] rounded-full transform rotate-12"></div>
                    <div className="absolute top-4 -right-6 w-6 h-12 bg-[#ffd63c] rounded-full transform -rotate-12"></div>
                  </div>
                </div>

                {/* Browser window */}
                <div className="absolute top-8 right-8 w-48 h-32 bg-white border-2 border-gray-300 rounded-lg shadow-lg">
                  {/* Browser header */}
                  <div className="h-6 bg-gray-200 rounded-t-lg flex items-center px-2">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    </div>
                  </div>
                  
                  {/* Browser content */}
                  <div className="p-3">
                    {/* Question marks */}
                    <div className="flex space-x-2 mb-2">
                      <div className="w-4 h-4 bg-[#ffd63c] rounded-full"></div>
                      <div className="w-4 h-4 bg-[#ffd63c] rounded-full"></div>
                      <div className="w-4 h-4 bg-[#ffd63c] rounded-full"></div>
                    </div>
                    
                    {/* Text lines */}
                    <div className="space-y-1">
                      <div className="h-1 bg-gray-300 rounded w-3/4"></div>
                      <div className="h-1 bg-gray-300 rounded w-1/2"></div>
                      <div className="h-1 bg-gray-300 rounded w-2/3"></div>
                    </div>
                  </div>
                </div>

                {/* Gear icons */}
                <div className="absolute top-4 right-12 w-6 h-6 bg-gray-400 rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 border border-white rounded-full"></div>
                </div>
                <div className="absolute bottom-16 left-8 w-6 h-6 bg-gray-400 rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 border border-white rounded-full"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - FAQ List */}
          <div className="animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className={`bg-white border border-gray-200 rounded-lg shadow-sm transition-all duration-300 cursor-pointer ${
                    openIndex === index 
                      ? 'bg-purple-50 border-purple-200' 
                      : 'hover:shadow-md'
                  }`}
                  onClick={() => toggleFAQ(index)}
                >
                  <div className="p-6 flex items-center justify-between">
                    <h3 className={`text-lg font-semibold ${
                      openIndex === index ? 'text-purple-800' : 'text-black'
                    }`}>
                      {faq.question}
                    </h3>
                    <div className="ml-4">
                      {openIndex === index ? (
                        <ChevronDown className="w-5 h-5 text-purple-600" />
                      ) : (
                        <ChevronRight className="w-5 h-5 text-gray-400" />
                      )}
                    </div>
                  </div>
                  
                  {openIndex === index && (
                    <div className="px-6 pb-6">
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
