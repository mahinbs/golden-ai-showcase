const dataScienceServices = [
  {
    title: "Predictive Analytics",
    description:
      "Forecast patient admissions, disease progression, and resource needs to optimize planning.",
    image:
      "https://res.cloudinary.com/drdjii8fe/image/upload/v1760378167/2._Predictive_Analytics_jqjctd.png",
  },
  {
    title: "Decision Support",
    description:
      "Analyze patient data to assist clinicians in accurate, data-backed treatment decisions.",
    image:
      "https://res.cloudinary.com/drdjii8fe/image/upload/v1760378301/3.Decision_Support_nsvuh0.png",
  },
  {
    title: "Health Analytics",
    description:
      "Track and analyze health trends across populations to improve care strategies.",
    image:
      "https://res.cloudinary.com/drdjii8fe/image/upload/v1760378305/4._Health_Analytics_yxuckr.png",
  },
  {
    title: "Data Visualization",
    description:
      "Convert complex medical data into clear, actionable insights for your teams.",
    image:
      "https://res.cloudinary.com/drdjii8fe/image/upload/v1760378305/5._Data_Visualization_ld1ugo.png",
  },
  {
    title: "Medical Image Analysis",
    description:
      "Apply AI models to detect anomalies and patterns in medical imaging data.",
    image:
      "https://res.cloudinary.com/drdjii8fe/image/upload/v1760378302/6._Medical_Image_Analysis_rijctq.png",
  },
  {
    title: "Patient Segmentation",
    description:
      "Use advanced analytics to personalize care and improve patient outcomes.",
    image:
      "https://res.cloudinary.com/drdjii8fe/image/upload/v1760378302/7._Patient_Segmentation_mytq8l.png",
  },
];

const DataScienceHealthcare = () => {
  return (
    <div className="bg-white text-black py-16">
      <div className="wrapper">
        {/* Main Content Section */}
        <div className="lg:grid flex flex-col-reverse grid-cols-[40%,1fr] gap-12 items-start pt-5 lg:pt-10 mb-16">
          {/* Left Section - Title, Description, and Illustration */}
          <div className="space-y-8">
            {/* Data Science Label */}
            <div className="bg-yellowClr px-4 py-2 rounded-lg inline-block">
              <span className="text-lg font-bold text-black">
                Data Science for Healthcare
              </span>
            </div>

            <div className="border-t border-black"></div>
            {/* Heading */}
            <h2 className="text-3xl md:text-4xl font-bold">
              <span className="bg-yellowClr text-black px-2 py-1">Data</span>
              <span className="text-black"> Science for </span>
              <span className="bg-yellowClr text-black px-2 py-1">
                Healthcare
              </span>
            </h2>

            {/* Description */}
            <p className="text-lg text-black leading-relaxed">
              Transform raw healthcare data into actionable insights, enabling
              smarter decisions, personalized care, and operational efficiency.
            </p>

            {/* Horizontal Lines */}
            <div className="space-y-2">
              <div className="border-t border-black"></div>
            </div>

            {/* Illustration */}
            <div className="flex justify-center lg:justify-start">
              <img
                src="https://res.cloudinary.com/drdjii8fe/image/upload/v1760378127/1._Under_title_viqlhl.png"
                alt="Data Science Illustration"
                className="max-w-sm w-full object-contain"
              />
            </div>
          </div>

          {/* Right Section - Service Cards (2x3 Grid) */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 pt-10">
            {dataScienceServices.map((service, index) => (
              <div key={index} className="group">
                <div className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 group-hover:scale-105 overflow-hidden h-full">
                  {/* Yellow Header */}
                  <div className="bg-yellowClr px-4 py-3">
                    <h3 className="text-lg font-bold text-black text-center">
                      {service.title}
                    </h3>
                  </div>

                  {/* Content Area */}
                  <div className="p-6 relative">
                    {/* Illustration */}
                    <div className="mb-4">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-20 object-contain"
                      />
                    </div>

                    {/* Description */}
                    <p className="text-sm text-black leading-relaxed">
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

export default DataScienceHealthcare;
