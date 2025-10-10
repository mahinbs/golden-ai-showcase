const aiFitCategories = [
  {
    label: "Automation",
    description:
      "Automate repetitive tasks, data entry, and complex processes to free up your team for strategic work.",
    examples: [
      "Document Processing",
      "Data Entry",
      "Email Responses",
      "Report Generation",
    ],
    img: "https://res.cloudinary.com/drdjii8fe/image/upload/v1759853523/Automation_ajufg9.png",
  },
  {
    label: "Workflows",
    description:
      "Streamline entire business workflows with intelligent decision-making and automated approvals.",
    examples: [
      "Approval Chains",
      "Task Routing",
      "Quality Checks",
      "Compliance Monitoring",
    ],
    img: "https://res.cloudinary.com/drdjii8fe/image/upload/v1759853529/Workflows_fal5ov.png",
  },
  {
    label: "AI Agents",
    description:
      "Deploy autonomous agents that work 24/7 to handle customer service, sales, and operations.",
    examples: [
      "Customer Support",
      "Sales Assistance",
      "Data Analysis",
      "Scheduling",
    ],
    img: "https://res.cloudinary.com/drdjii8fe/image/upload/v1759853521/AI_Agents_krwe6y.png",
  },
];

const WhereAIFitsBest = ({
  title = "Where AI",
  subtitle = "Fits Best",
  description = "Discover how AI can transform different aspects of your business operations.",
}: {
  title?: string;
  subtitle?: string;
  description?: string;
}) => {
  return (
    <div className="bg-black text-white py-16">
      <div className="wrapper">
        <div className="space-y-12">
          {/* Title Section */}
          <div className="text-center space-y-4">
            <div className="border-y-2 border-white py-3 w-fit mx-auto">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-glacial">
                {title}{" "}
                <span className="bg-yellowClr text-black px-3 py-1">
                  {subtitle}
                </span>
              </h2>
            </div>
            {description && (
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                {description}
              </p>
            )}
          </div>

          {/* Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {aiFitCategories.map((category, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 hover:border-[#ffd63c] transition-all duration-300 p-8 text-center h-full flex flex-col">
                  {/* Icon */}
                  <div className="mb-6 flex aspect-square bg-white h-32 w-32 items-center mx-auto justify-center rounded overflow-hidden">
                    <img
                      src={category.img}
                      alt={category.label}
                      className="h-full w-auto object-contain group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  {/* Label */}
                  <h3 className="text-2xl font-bold text-white group-hover:text-[#ffd63c] transition-colors duration-300 mb-4">
                    {category.label}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gray-400 mb-6 leading-relaxed">
                    {category.description}
                  </p>

                  {/* Examples */}
                  <div className="mt-auto space-y-2">
                    <p className="text-xs text-[#ffd63c] font-semibold uppercase tracking-wide mb-3">
                      Use Cases:
                    </p>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {category.examples.map((example, exIdx) => (
                        <span
                          key={exIdx}
                          className="text-xs bg-white/10 px-3 py-1 rounded-full text-gray-300 group-hover:bg-[#ffd63c]/20 group-hover:text-white transition-colors duration-300"
                        >
                          {example}
                        </span>
                      ))}
                    </div>
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

export default WhereAIFitsBest;
