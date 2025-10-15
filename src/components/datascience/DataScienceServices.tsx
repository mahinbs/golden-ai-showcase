const dataScienceServices = [
  {
    title: "Advanced",
    subtitle: "Analytics",
    description:
      "Leverage cutting-edge analytics to uncover hidden patterns and drive strategic decisions.",
    image:
      "https://res.cloudinary.com/drdjii8fe/image/upload/v1759854910/1._Advanced_Analytics_d9pzxd.png",
    features: [
      "Statistical Analysis",
      "Pattern Recognition",
      "Predictive Insights",
      "Advanced Modeling",
    ],
  },
  {
    title: "Predictive",
    subtitle: "Modeling",
    description:
      "Build accurate predictive models to forecast trends and optimize business outcomes.",
    image:
      "https://res.cloudinary.com/drdjii8fe/image/upload/v1759854911/2._Predictive_Modeling_ruqpk1.png",
    features: [
      "Forecasting Models",
      "Risk Assessment",
      "Scenario Planning",
      "Model Validation",
    ],
  },
  {
    title: "Machine",
    subtitle: "Learning",
    description:
      "Implement intelligent algorithms that learn and adapt to improve business processes.",
    image:
      "https://res.cloudinary.com/drdjii8fe/image/upload/v1759854911/3._Machine_Learning_twfnu9.png",
    features: [
      "Algorithm Development",
      "Model Training",
      "Feature Engineering",
      "Performance Optimization",
    ],
  },
  {
    title: "Natural Language",
    subtitle: "Processing (NLP)",
    description:
      "Extract insights from text data with advanced NLP and language understanding capabilities.",
    image:
      "https://res.cloudinary.com/drdjii8fe/image/upload/v1759854911/4._Natural_Language_Processing_NLP_opzqf6.png",
    features: [
      "Text Analysis",
      "Sentiment Analysis",
      "Language Translation",
      "Chatbot Development",
    ],
  },
];

const DataScienceServices = () => {
  return (
    <div className="bg-white text-black pb-16">
      <div className="wrapper">
        <div className="lg:grid flex flex-col-reverse grid-cols-[1fr,40%] gap-12 items-start pt-5 lg:pt-10">
          {/* Right Section - Service Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 pt-10">
            {dataScienceServices.map((service, index) => (
              <div key={index} className="pt-10 group">
                <div className="bg-yellowClr rounded-2xl p-6 hover:shadow-lg transition-all duration-300 relative h-full group-hover:scale-105">
                  {/* Animated Border */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-yellowClr via-yellow-400 to-yellowClr opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
                  <div className="absolute inset-[2px] bg-yellowClr rounded-2xl"></div>

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="absolute left-1/2 -translate-x-1/2  flex justify-center mb-4 -translate-y-full">
                      <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center overflow-hidden group-hover:scale-110 transition-transform duration-300">
                        <img
                          src={service.image}
                          alt={`${service.title} ${service.subtitle}`}
                          className="w-full h-full object-contain rounded-full scale-125"
                        />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-black text-center mb-2 pt-4 group-hover:text-gray-800 transition-colors duration-300">
                      {service.title} {service.subtitle}
                    </h3>

                    {/* Separator Line */}
                    <div className="w-full h-0.5 bg-black mb-4 group-hover:bg-gray-700 transition-colors duration-300"></div>

                    {/* Description */}
                    <p className="text-black text-center group-hover:text-gray-700 transition-colors duration-300">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Left Section - Title, Description, and Illustration */}
          <div className="space-y-8">
            {/* Data Science Label */}
            <div className="bg-yellowClr px-4 py-2 rounded-lg inline-block">
              <span className="text-lg font-bold text-black">Data Science</span>
            </div>

            <div className="border-t border-gray-300"></div>
            {/* Heading */}
            <h2 className="text-3xl md:text-4xl font-bold">
              Predict, personalize, and grow.
            </h2>

            {/* Description */}
            <p className="text-lg text-gray-700 leading-relaxed">
              We analyze your data to uncover trends, optimize operations, and
              guide your business strategy with clear, actionable insights.
            </p>

            {/* Horizontal Lines */}
            <div className="space-y-2">
              <div className="border-t border-gray-300"></div>
            </div>

            {/* Illustration */}
            <div className="flex justify-center lg:justify-start">
              <img
                src="https://res.cloudinary.com/drdjii8fe/image/upload/v1759854911/Under_Heading_pcsoii.png"
                alt="Data Science Illustration"
                className="max-w-sm w-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataScienceServices;
