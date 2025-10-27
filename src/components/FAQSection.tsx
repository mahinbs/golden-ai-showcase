import { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";

type ServiceType = 
  | "general" 
  | "web-development" 
  | "app-development" 
  | "software-development" 
  | "ai-solutions" 
  | "game-development" 
  | "uiux-design" 
  | "data-science" 
  | "healthcare";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQSection = ({ 
  serviceType = "general"
}: { 
  serviceType?: ServiceType 
}) => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqData: Record<ServiceType, FAQItem[]> = {
    "general": [
      {
        question: "What makes Specslo different from other development companies?",
        answer: "At Specslo, we build everything around your specific requirements and business goals. Unlike one-size-fits-all solutions, we craft custom digital products that perfectly fit your specs, ensuring maximum efficiency and growth for your business."
      },
      {
        question: "How do you ensure project quality and timely delivery?",
        answer: "We follow a structured development process with regular checkpoints, transparent communication, and agile methodologies. Our experienced team uses modern tools and best practices to ensure high-quality deliverables within agreed timelines."
      },
      {
        question: "Do you provide ongoing support after project completion?",
        answer: "Yes, we offer comprehensive post-launch support including maintenance, updates, bug fixes, and feature enhancements. Our support packages are tailored to your needs and ensure your digital products continue to perform optimally."
      },
      {
        question: "What technologies and platforms do you work with?",
        answer: "We work with modern technologies including React, Node.js, Python, AI/ML frameworks, cloud platforms (AWS, Azure), mobile development (React Native, Flutter), and various databases. Our tech stack is chosen based on your specific requirements."
      },
      {
        question: "How do you handle data security and privacy?",
        answer: "We implement enterprise-grade security measures including SSL certificates, data encryption, secure authentication, regular security audits, and compliance with industry standards. Your data and your users' privacy are our top priorities."
      },
      {
        question: "Can you work with our existing systems and integrate new solutions?",
        answer: "Absolutely! We specialize in integrating new solutions with existing systems. Our team analyzes your current infrastructure and ensures seamless integration without disrupting your ongoing operations."
      }
    ],
    "web-development": [
      {
        question: "What types of websites do you build?",
        answer: "We build all types of websites including business websites, e-commerce stores, portfolios, blogs, corporate sites, and custom web applications. From simple brochure sites to complex platforms with AI integration, we handle projects of any size and complexity."
      },
      {
        question: "How long does web development take?",
        answer: "Development time varies based on project complexity. Simple websites take 2-4 weeks, while complex applications can take 2-6 months. We provide detailed timelines during consultation and keep you updated throughout the development process."
      },
      {
        question: "Do you provide website maintenance and support?",
        answer: "Yes, we offer comprehensive maintenance packages including security updates, content updates, performance monitoring, backups, and technical support. Our maintenance plans ensure your website stays secure, fast, and up-to-date."
      },
      {
        question: "What technologies do you use for web development?",
        answer: "We use modern technologies like React, Next.js, Vue.js, Node.js, Python, and various databases. Our tech stack includes cloud platforms (AWS, Azure), payment gateways (Stripe, Razorpay), and deployment tools (Docker, Vercel) to build scalable, secure applications."
      },
      {
        question: "Can you help with SEO and performance optimization?",
        answer: "Absolutely! We build SEO-friendly websites with optimized performance, fast loading times, mobile responsiveness, and proper meta tags. We also provide ongoing SEO services to improve your search engine rankings and online visibility."
      },
      {
        question: "Do you offer e-commerce solutions?",
        answer: "Yes, we build comprehensive e-commerce solutions including product catalogs, shopping carts, payment processing, inventory management, order tracking, and customer management systems. We integrate with popular payment gateways and shipping providers."
      }
    ],
    "app-development": [
      {
        question: "Do you develop both iOS and Android apps?",
        answer: "Yes, we develop native and cross-platform mobile applications for both iOS and Android. We use React Native and Flutter for cross-platform development, ensuring consistent performance and user experience across both platforms."
      },
      {
        question: "How long does mobile app development take?",
        answer: "App development typically takes 3-6 months depending on complexity. Simple apps take 2-3 months, while complex applications with advanced features can take 4-6 months. We provide detailed timelines during the planning phase."
      },
      {
        question: "Do you handle app store submissions?",
        answer: "Yes, we handle the complete app store submission process including preparing app store listings, creating screenshots and descriptions, managing the review process, and ensuring compliance with store guidelines for both Apple App Store and Google Play Store."
      },
      {
        question: "What about app maintenance and updates?",
        answer: "We provide ongoing maintenance services including bug fixes, feature updates, security patches, and compatibility updates. Our maintenance packages ensure your app stays current with the latest OS versions and continues to perform optimally."
      },
      {
        question: "Can you integrate mobile apps with existing systems?",
        answer: "Absolutely! We specialize in integrating mobile apps with existing backend systems, APIs, databases, and third-party services. We ensure seamless data flow and functionality between your app and existing infrastructure."
      },
      {
        question: "Do you provide UI/UX design for mobile apps?",
        answer: "Yes, our team includes experienced UI/UX designers who create intuitive, user-friendly mobile app interfaces. We follow mobile design best practices and ensure your app provides an excellent user experience across all devices."
      }
    ],
    "software-development": [
      {
        question: "What types of custom software do you develop?",
        answer: "We develop various types of custom software including CRM systems, ERP solutions, inventory management systems, workflow automation tools, data management platforms, and business process management software tailored to your specific needs."
      },
      {
        question: "How do you ensure software scalability?",
        answer: "We design software with scalability in mind from the start, using modular architecture, cloud-native technologies, and scalable databases. Our solutions can handle growing user loads and data volumes without performance degradation."
      },
      {
        question: "Do you provide software testing and quality assurance?",
        answer: "Yes, we have a comprehensive testing process including unit testing, integration testing, performance testing, and user acceptance testing. Our QA team ensures your software is bug-free, secure, and meets all requirements before deployment."
      },
      {
        question: "Can you migrate existing software to modern platforms?",
        answer: "Absolutely! We specialize in software modernization and migration services. We can help migrate legacy systems to modern platforms, update outdated technologies, and improve performance while maintaining data integrity."
      },
      {
        question: "What about software documentation and training?",
        answer: "We provide comprehensive documentation including user manuals, technical documentation, API documentation, and admin guides. We also offer training sessions for your team to ensure smooth adoption and effective use of the software."
      },
      {
        question: "Do you offer cloud deployment and hosting solutions?",
        answer: "Yes, we provide cloud deployment services using AWS, Azure, or Google Cloud. We handle server setup, database configuration, security implementation, and ongoing cloud management to ensure reliable and secure software hosting."
      }
    ],
    "ai-solutions": [
      {
        question: "What AI technologies do you work with?",
        answer: "We work with various AI technologies including machine learning, natural language processing, computer vision, predictive analytics, chatbots, recommendation systems, and custom AI models. We use frameworks like TensorFlow, PyTorch, and cloud AI services."
      },
      {
        question: "How can AI benefit my business?",
        answer: "AI can automate repetitive tasks, improve decision-making with data insights, enhance customer experience through chatbots, optimize operations, predict trends, and provide personalized recommendations. We help identify the best AI opportunities for your specific business needs."
      },
      {
        question: "Do you provide AI model training and customization?",
        answer: "Yes, we develop and train custom AI models based on your specific data and requirements. We also fine-tune existing models and integrate pre-trained models to provide the most effective AI solutions for your business."
      },
      {
        question: "How do you ensure AI solution accuracy and reliability?",
        answer: "We implement rigorous testing and validation processes, use high-quality training data, perform continuous monitoring, and provide model explainability. We also establish feedback loops to continuously improve AI performance and accuracy."
      },
      {
        question: "Can you integrate AI with existing systems?",
        answer: "Absolutely! We specialize in integrating AI solutions with existing business systems, databases, and workflows. We ensure seamless data flow and functionality while maintaining system compatibility and performance."
      },
      {
        question: "What about AI ethics and compliance?",
        answer: "We follow AI ethics best practices and ensure compliance with relevant regulations. We implement bias detection, data privacy protection, transparent decision-making processes, and regular audits to maintain ethical AI practices."
      }
    ],
    "game-development": [
      {
        question: "What types of games do you develop?",
        answer: "We develop various types of games including mobile games, web games, casual games, puzzle games, action games, and educational games. We work on both 2D and 3D games across different platforms and genres."
      },
      {
        question: "What game engines and technologies do you use?",
        answer: "We use popular game engines like Unity, Unreal Engine, and custom web-based engines. Our tech stack includes C#, JavaScript, HTML5, WebGL, and various game development frameworks to create engaging and performant games."
      },
      {
        question: "Do you handle game art and animation?",
        answer: "Yes, our team includes skilled game artists and animators who create characters, environments, UI elements, and animations. We provide complete game art services from concept to final implementation."
      },
      {
        question: "Can you develop multiplayer games?",
        answer: "Absolutely! We develop multiplayer games with real-time gameplay, matchmaking systems, leaderboards, and social features. We handle server-side development, networking, and ensure smooth multiplayer experiences."
      },
      {
        question: "Do you provide game monetization strategies?",
        answer: "Yes, we help implement various monetization strategies including in-app purchases, advertisements, premium versions, and subscription models. We ensure monetization enhances rather than detracts from the gaming experience."
      },
      {
        question: "What about game testing and quality assurance?",
        answer: "We provide comprehensive game testing including functionality testing, performance testing, compatibility testing, and user experience testing. Our QA process ensures games are bug-free, performant, and provide excellent user experience."
      }
    ],
    "uiux-design": [
      {
        question: "What design services do you offer?",
        answer: "We offer comprehensive UI/UX design services including user research, wireframing, prototyping, visual design, interaction design, design systems, and usability testing. We create designs that are both beautiful and functional."
      },
      {
        question: "How do you ensure designs meet user needs?",
        answer: "We start with user research to understand your target audience, their needs, and pain points. We create user personas, conduct usability testing, and iterate based on feedback to ensure designs truly serve your users."
      },
      {
        question: "Do you create design systems and style guides?",
        answer: "Yes, we create comprehensive design systems including color palettes, typography, component libraries, and style guides. This ensures consistency across all touchpoints and makes future design work more efficient."
      },
      {
        question: "What tools and technologies do you use?",
        answer: "We use industry-standard tools like Figma, Adobe Creative Suite, Sketch, and prototyping tools. We also work with development teams to ensure designs are properly implemented and maintain design integrity."
      },
      {
        question: "Can you redesign existing products?",
        answer: "Absolutely! We specialize in redesigning existing products to improve usability, modernize aesthetics, and enhance user experience. We analyze current issues and create solutions that address user pain points while maintaining brand consistency."
      },
      {
        question: "Do you provide ongoing design support?",
        answer: "Yes, we offer ongoing design support including design updates, new feature designs, A/B testing, and design maintenance. We ensure your products continue to evolve and improve based on user feedback and business needs."
      }
    ],
    "data-science": [
      {
        question: "What data science services do you provide?",
        answer: "We provide comprehensive data science services including data analysis, predictive modeling, machine learning, data visualization, business intelligence, data engineering, and custom analytics solutions tailored to your business needs."
      },
      {
        question: "How do you handle data quality and preparation?",
        answer: "We implement robust data cleaning and preprocessing pipelines, handle missing data, detect outliers, and ensure data quality. We also create automated data validation processes to maintain data integrity throughout your analytics workflow."
      },
      {
        question: "What types of predictive models can you build?",
        answer: "We build various predictive models including classification, regression, time series forecasting, clustering, and recommendation systems. We use appropriate algorithms based on your data characteristics and business objectives."
      },
      {
        question: "Do you provide data visualization and reporting?",
        answer: "Yes, we create interactive dashboards, reports, and data visualizations using tools like Tableau, Power BI, and custom web-based solutions. We ensure insights are presented in clear, actionable formats for different stakeholders."
      },
      {
        question: "Can you integrate data science solutions with existing systems?",
        answer: "Absolutely! We specialize in integrating data science solutions with existing business systems, databases, and workflows. We create APIs and automated pipelines to ensure seamless data flow and real-time insights."
      },
      {
        question: "What about data security and compliance?",
        answer: "We implement strict data security measures including encryption, access controls, and compliance with data protection regulations. We ensure your data science solutions maintain the highest standards of security and privacy."
      }
    ],
    "healthcare": [
      {
        question: "What healthcare software solutions do you develop?",
        answer: "We develop comprehensive healthcare solutions including EHR systems, patient management systems, telemedicine platforms, medical device software, health analytics, compliance management, and custom healthcare applications for various medical specialties."
      },
      {
        question: "How do you ensure HIPAA compliance?",
        answer: "We implement strict HIPAA compliance measures including data encryption, access controls, audit trails, secure authentication, and regular compliance audits. We ensure all healthcare software meets or exceeds HIPAA requirements."
      },
      {
        question: "Can you integrate with existing healthcare systems?",
        answer: "Yes, we specialize in healthcare system integration including EHR integration, HL7/FHIR compliance, medical device integration, and interoperability with existing healthcare infrastructure. We ensure seamless data exchange and workflow integration."
      },
      {
        question: "Do you provide medical device software development?",
        answer: "Yes, we develop software for medical devices including mobile health apps, diagnostic tools, monitoring systems, and SaMD (Software as a Medical Device) solutions. We ensure compliance with FDA regulations and medical device standards."
      },
      {
        question: "What about healthcare data analytics and insights?",
        answer: "We provide healthcare analytics solutions including patient outcome analysis, operational efficiency metrics, predictive health analytics, and population health management. We help healthcare organizations make data-driven decisions to improve patient care."
      },
      {
        question: "Do you offer telemedicine and remote care solutions?",
        answer: "Absolutely! We develop telemedicine platforms, remote patient monitoring systems, virtual consultation tools, and mobile health applications. Our solutions enable healthcare providers to deliver care remotely while maintaining quality and compliance."
      }
    ]
  };

  const faqs = faqData[serviceType];

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
                      ? 'bg-yellow-50 border-yellow-200' 
                      : 'hover:shadow-md'
                  }`}
                  onClick={() => toggleFAQ(index)}
                >
                  <div className="p-6 flex items-center justify-between">
                    <h3 className={`text-lg font-semibold ${
                      openIndex === index ? 'text-yellow-800' : 'text-black'
                    }`}>
                      {faq.question}
                    </h3>
                    <div className="ml-4">
                      {openIndex === index ? (
                        <ChevronDown className="w-5 h-5 text-yellow-600" />
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
