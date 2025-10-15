const dataAnalyticsServices = [
  {
    title: "Business",
    subtitle: "Intelligence",
    description:
      "Transform raw data into actionable business insights with comprehensive BI solutions.",
    image:
      "https://res.cloudinary.com/drdjii8fe/image/upload/v1759854677/1._Business_Intelligence_hdwhey.png",
    features: [
      "Interactive Dashboards",
      "KPI Monitoring",
      "Executive Reporting",
      "Data Visualization",
    ],
  },
  {
    title: "Performance",
    subtitle: "Analytics",
    description:
      "Track and optimize business performance with advanced analytics and real-time monitoring.",
    image:
      "https://res.cloudinary.com/drdjii8fe/image/upload/v1759854676/2._Performance_Analytics_wslv7l.png",
    features: [
      "Real-time Monitoring",
      "Performance Metrics",
      "Trend Analysis",
      "Optimization Insights",
    ],
  },
  {
    title: "Customer",
    subtitle: "Insights",
    description:
      "Understand your customers better with deep analytics and behavioral insights.",
    image:
      "https://res.cloudinary.com/drdjii8fe/image/upload/v1759854677/3._Customer_Insights_i91iie.png",
    features: [
      "Customer Segmentation",
      "Behavioral Analysis",
      "Churn Prediction",
      "Personalization",
    ],
  },
  {
    title: "Automated",
    subtitle: "Reporting",
    description:
      "Streamline reporting processes with automated, intelligent report generation.",
    image:
      "https://res.cloudinary.com/drdjii8fe/image/upload/v1759854677/4._Automated_Reporting_tnodrz.png",
    features: [
      "Scheduled Reports",
      "Custom Templates",
      "Email Automation",
      "Data Validation",
    ],
  },
];

const DataAnalyticsServices = () => {
  return (
    <div className="bg-white text-black py-16">
      <div className="wrapper">
        {/* Title */}
        <div className="text-center w-fit mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Unlock the Power of Your Data
            <div className="w-full h-1 bg-yellowClr mt-2"></div>
          </h1>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-[40%,1fr] gap-12 items-start pt-5 lg:pt-10">
          {/* Left Section - Title, Description, and Illustration */}
          <div className="space-y-8">
            {/* Data Analytics Label */}
            <div className="bg-yellowClr px-4 py-2 rounded-lg inline-block">
              <span className="text-lg font-bold text-black">
                Data Analytics
              </span>
            </div>

            <div className="border-t border-gray-300"></div>
            {/* Heading */}
            <h2 className="text-3xl md:text-4xl font-bold">
              Turn your data into decisions.
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
                src="https://res.cloudinary.com/drdjii8fe/image/upload/v1759854677/Under_Heading_wq5irl.png"
                alt="Data Analytics Illustration"
                className="max-w-sm w-full object-contain"
              />
            </div>
          </div>

          {/* Right Section - Service Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 pt-10">
            {dataAnalyticsServices.map((service, index) => (
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
        </div>
      </div>
    </div>
  );
};

export default DataAnalyticsServices;
