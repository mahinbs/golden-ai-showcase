const whyChooseSpecslo = [
  {
    title: "Patient-Centered Design",
    description: "Our healthcare solutions focus on improving patient experience, enhancing accessibility, and fostering stronger patient-provider connections through intuitive digital tools.",
    image: "https://res.cloudinary.com/drdjii8fe/image/upload/v1760377473/1._Patient_Centered_Design_gmzvxu.png",
  },
  {
    title: "Built-In Security & Compliance",
    description: "We prioritize HIPAA, GDPR, and industry-specific standards to ensure your systems remain secure, compliant, and ready for evolving regulations.",
    image: "https://res.cloudinary.com/drdjii8fe/image/upload/v1760377474/2._Built-In_Security_Compliance_tkjaol.png",
  },
  {
    title: "Data-Driven Healthcare",
    description: "Leverage advanced analytics and AI to transform patient data into actionable insights, enabling smarter decisions, personalized care, and operational improvements.",
    image: "https://res.cloudinary.com/drdjii8fe/image/upload/v1760377474/3._Data-Driven_Healthcare_uv8z4a.png",
  },
  {
    title: "Comprehensive Healthcare Solutions",
    description: "From patient portals and EHR systems to telemedicine and workflow automation, we build solutions that fit your specs and seamlessly integrate into your operations.",
    image: "https://res.cloudinary.com/drdjii8fe/image/upload/v1760377474/4._Comprehensive_Healthcare_Solutions_myuj5e.png",
  },
];

const WhyChooseSpecslo = () => {
  return (
    <div className="bg-white text-black py-16">
      <div className="wrapper">
        <div className="lg:grid flex flex-col-reverse grid-cols-[1fr,40%] gap-12 items-start pt-5 lg:pt-10">
          {/* Right Section - Feature Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-10">
            {whyChooseSpecslo.map((feature, index) => (
              <div key={index} className="pt-10 group">
                <div className="bg-yellowClr rounded-2xl p-6 hover:shadow-lg transition-all duration-300 relative h-full group-hover:scale-105">
                  {/* Animated Border */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-yellowClr via-yellow-400 to-yellowClr opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
                  <div className="absolute inset-[2px] bg-yellowClr rounded-2xl"></div>

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="absolute left-1/2 -translate-x-1/2 flex justify-center mb-4 -translate-y-full">
                      <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center overflow-hidden group-hover:scale-110 transition-transform duration-300">
                        <img
                          src={feature.image}
                          alt={feature.title}
                          className="w-full h-full object-contain rounded-full scale-125"
                        />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-black text-center mb-2 pt-4 group-hover:text-gray-800 transition-colors duration-300">
                      {feature.title}
                    </h3>

                    {/* Separator Line */}
                    <div className="w-full h-0.5 bg-black mb-4 group-hover:bg-gray-700 transition-colors duration-300"></div>

                    {/* Description */}
                    <p className="text-black text-center group-hover:text-gray-700 transition-colors duration-300">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Left Section - Title, Description, and Illustration */}
          <div className="space-y-8">
            {/* Why Choose Specslo Label */}
            <div className="bg-yellowClr px-4 py-2 rounded-lg inline-block">
              <span className="text-lg font-bold text-black">Why Choose Specslo</span>
            </div>

            <div className="border-t border-gray-300"></div>
            {/* Heading */}
            <h2 className="text-3xl md:text-4xl font-bold">
              <span className="text-black">for </span>
              <span className="bg-yellowClr text-black px-2 py-1">Healthcare Solutions</span>
              <span className="text-black">?</span>
            </h2>

            {/* Description */}
            <p className="text-lg text-gray-700 leading-relaxed">
              We empower healthcare providers with scalable, secure, and innovative digital solutions designed around your workflows.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              At Specslo, we build technology that enhances patient care and operational efficiency.
            </p>

            {/* Horizontal Lines */}
            <div className="space-y-2">
              <div className="border-t border-gray-300"></div>
            </div>

            {/* Illustration */}
            <div className="flex justify-center lg:justify-start">
              <img
                src="https://res.cloudinary.com/drdjii8fe/image/upload/v1760377474/Under_title_k534l1.png"
                alt="Healthcare Illustration"
                className="max-w-sm w-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseSpecslo;
