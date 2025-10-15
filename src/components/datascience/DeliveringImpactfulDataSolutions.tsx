const impactfulSolutions = [
  {
    title: "Data Audit &",
    subtitle: "Consultation",
    description:
      "Comprehensive data assessment and strategic consultation to optimize your data strategy.",
    image:
      "https://res.cloudinary.com/drdjii8fe/image/upload/v1759855342/1._Data_Audit_Consultation_ugoyhl.png",
    features: [
      "Data Assessment",
      "Strategy Development",
      "Best Practices",
      "Implementation Roadmap",
    ],
  },
  {
    title: "Data Warehousing &",
    subtitle: "Automation",
    description:
      "Build intelligent data warehouses with automated processes for maximum efficiency.",
    image:
      "https://res.cloudinary.com/drdjii8fe/image/upload/v1759855342/2._Data_Warehousing_Automation_rb9b2h.png",
    features: [
      "Data Warehouse Design",
      "Process Automation",
      "Data Integration",
      "Performance Optimization",
    ],
  },
  {
    title: "Advanced Dashboards &",
    subtitle: "Predictive Insights",
    description: "Create powerful dashboards with predictive analytics to drive informed decision-making.",
    image: "https://res.cloudinary.com/drdjii8fe/image/upload/v1759855343/3._Advanced_Dashboards_Predictive_Insights_h2qivu.png",
    features: [
      "Interactive Dashboards",
      "Predictive Analytics",
      "Real-time Insights",
      "Custom Visualizations",
    ],
  },
];

const DeliveringImpactfulDataSolutions = () => {
  return (
    <div className="bg-black text-white py-16">
      <div className="wrapper">
        {/* Main Title Section */}
        <div className="text-start mb-16">
          <div className="border-y-2 border-white py-3 w-fit">
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="text-white">Delivering Impactful </span>
              <span className="bg-yellowClr text-black px-4 py-1">
                Data Solutions
              </span>
            </h2>
          </div>
          <p className="text-lg leading-relaxed text-gray-300 mt-6 max-w-4xl">
            Transform your data into powerful business assets with our
            comprehensive data solutions.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="space-y-16">
          {impactfulSolutions.map((solution, index) => (
            <div key={index} className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Section - Content */}
              <div className="space-y-6">
                {/* Solution Title */}
                <div className="space-y-4">
                  <div className="border-t border-white"></div>
                  <h3 className="text-3xl md:text-4xl font-bold text-yellowClr">
                    {solution.title} {solution.subtitle}
                  </h3>
                  <div className="border-t border-white"></div>
                </div>

                {/* Solution Description */}
                <p className="text-lg text-white leading-relaxed">
                  {solution.description}
                </p>

                {/* Features List */}
                <div className="space-y-4">
                  {solution.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-yellowClr rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-white text-sm leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Section - Solution Image */}
              <div className="relative">
                <div className="relative w-full h-96">
                  <img
                    src={solution.image}
                    alt={`${solution.title} ${solution.subtitle}`}
                    className="w-full h-full object-contain opacity-80"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DeliveringImpactfulDataSolutions;
