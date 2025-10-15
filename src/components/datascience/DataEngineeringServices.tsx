const dataEngineeringServices = [
  {
    title: "ETL & Data",
    subtitle: "Pipelines",
    description: "Build robust data pipelines to extract, transform, and load data efficiently across your organization.",
    image: "https://res.cloudinary.com/drdjii8fe/image/upload/v1759855114/1._ETL_Data_Pipelines_kzpxll.png",
    features: [
      "Data Extraction",
      "Data Transformation",
      "Data Loading",
      "Pipeline Monitoring",
    ],
  },
  {
    title: "Scalable Data",
    subtitle: "Architecture",
    description: "Design and implement scalable data architectures that grow with your business needs.",
    image: "https://res.cloudinary.com/drdjii8fe/image/upload/v1759855114/2._Scalable_Data_Architecture_mgwime.png",
    features: [
      "Cloud Architecture",
      "Data Lakes",
      "Data Warehouses",
      "Microservices",
    ],
  },
  {
    title: "Cloud Data",
    subtitle: "Migration",
    description: "Seamlessly migrate your data infrastructure to the cloud with minimal downtime and maximum efficiency.",
    image: "https://res.cloudinary.com/drdjii8fe/image/upload/v1759855114/3._Cloud_Data_Migration_tcqbmu.png",
    features: [
      "Cloud Migration",
      "Data Security",
      "Performance Optimization",
      "Cost Management",
    ],
  },
  {
    title: "Data Quality &",
    subtitle: "Governance",
    description: "Ensure data integrity and compliance with comprehensive quality management and governance frameworks.",
    image: "https://res.cloudinary.com/drdjii8fe/image/upload/v1759855115/4._Data_Quality_Governance_w8tiic.png",
    features: [
      "Data Validation",
      "Quality Monitoring",
      "Compliance Management",
      "Data Lineage",
    ],
  },
];

const DataEngineeringServices = () => {
  return (
    <div className="bg-white text-black pb-16">
      <div className="wrapper">
        <div className="lg:grid flex flex-col-reverse grid-cols-[40%,1fr] gap-12 items-start pt-5 lg:pt-10">
          
          {/* Left Section - Title, Description, and Illustration */}
          <div className="space-y-8">
            {/* Data Engineering Label */}
            <div className="bg-yellowClr px-4 py-2 rounded-lg inline-block">
              <span className="text-lg font-bold text-black">Data Engineering</span>
            </div>

            <div className="border-t border-gray-300"></div>
            {/* Heading */}
            <h2 className="text-3xl md:text-4xl font-bold">
              Build a strong data backbone.
            </h2>

            {/* Description */}
            <p className="text-lg text-gray-700 leading-relaxed">
              We design and implement scalable, clean data pipelines and infrastructures that make your data ready for analytics and AI.
            </p>

            {/* Horizontal Lines */}
            <div className="space-y-2">
              <div className="border-t border-gray-300"></div>
            </div>

            {/* Illustration */}
            <div className="flex justify-center lg:justify-start">
              <img
                src="https://res.cloudinary.com/drdjii8fe/image/upload/v1759855115/Under_Heading_jxfvjw.png"
                alt="Data Engineering Illustration"
                className="max-w-sm w-full object-contain"
              />
            </div>
          </div>
          {/* Right Section - Service Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 pt-10">
            {dataEngineeringServices.map((service, index) => (
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

export default DataEngineeringServices;
