const solutionServices = [
  {
    label: "Business & Project Management",
    desc: "Streamline workflows, track milestones, and manage teams efficiently.",
    img: "https://res.cloudinary.com/drdjii8fe/image/upload/v1759322665/1._Business_Project_Management_swtppy.png",
  },
  {
    label: "Sourcing & Stock Management",
    desc: "Optimize inventory, automate ordering, and track stock in real-time.",
    img: "https://res.cloudinary.com/drdjii8fe/image/upload/v1759322676/2._Sourcing_Stock_Management_bk3z3g.png",
  },
  {
    label: "Asset Management",
    desc: "Track, maintain, and optimize all your business assets from one platform.",
    img: "https://res.cloudinary.com/drdjii8fe/image/upload/v1759322684/3._Asset_Management_jaxh0c.png",
  },
  {
    label: "Sales, Marketing & Customer Service",
    desc: "Manage leads, campaigns, and customer relationships all in one place.",
    img: "https://res.cloudinary.com/drdjii8fe/image/upload/v1759322681/4._Sales_Marketing_Customer_Service_v8myzx.png",
  },
  {
    label: "Corporate Finance Management",
    desc: "Handle accounting, budgeting, and financial reporting with precision.",
    img: "https://res.cloudinary.com/drdjii8fe/image/upload/v1759322683/5._Corporate_Finance_Management_xmkq7p.png",
  },
  {
    label: "Business Analytics",
    desc: "Turn data into actionable insights with advanced analytics and reporting.",
    img: "https://res.cloudinary.com/drdjii8fe/image/upload/v1759322678/6._Business_Analytics_omuni8.png",
  },
  {
    label: "HR, Talent & Productivity Management",
    desc: "Manage recruitment, onboarding, performance tracking, and team productivity.",
    img: "https://res.cloudinary.com/drdjii8fe/image/upload/v1759322682/7._HR_Talent_Productivity_Management_fl6dbf.png",
  },
  {
    label: "Communication Tools",
    desc: "Enable seamless internal and external communication across your organization.",
    img: "https://res.cloudinary.com/drdjii8fe/image/upload/v1759322683/8._Communication_Tools_v79zqa.png",
  },
];

const SolutionFocusedServices = ({
  title = "Solution-Focused",
  subtitle = "Services",
  titleSize = "text2",
  description = "We build software solutions that solve real business challenges across every department.",
}: {
  title?: string;
  subtitle?: string;
  titleSize?: string;
  description?: string;
}) => {
  return (
    <div className="bg-black text-white py-16">
      <div className="wrapper">
        <div className="space-y-12">
          {/* Title Section */}
          <div className="space-y-4 border-y w-fit border-white py-2">
            <h2 className={`${titleSize} mb-2`}>
              <span className="block">{title}</span>
              <span className="block">
                <span className="bg-yellowClr text-black px-3 py-1 inline-block">
                  {subtitle}
                </span>
              </span>
            </h2>
            {description && (
              <p className="text-lg text-gray-300 mt-4 max-w-md">
                {description}
              </p>
            )}
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {solutionServices.map((service, index) => (
              <div
                key={index}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 hover:border-[#ffd63c] transition-all duration-300 h-full">
                  {/* Image */}
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={service.img}
                      alt={service.label}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  
                  {/* Content */}
                  <div className="p-6 space-y-3">
                    <h3 className="text-lg font-bold text-white group-hover:text-[#ffd63c] transition-colors duration-300">
                      {service.label}
                    </h3>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      {service.desc}
                    </p>
                  </div>

                  {/* Hover Effect Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#ffd63c]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionFocusedServices;

