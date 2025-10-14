const redesignReasons = [
  {
    label: "First Impressions",
    statistic: "68%",
    description: "of visitors leave if the site has a bad design.",
  },
  {
    label: "Business Decisions",
    statistic: "46%",
    description: "base decisions on how the site looks.",
  },
  {
    label: "Profit Impact",
    statistic: "$1.73B",
    description: "Slow sites lose $1.73B in revenue annually.",
  },
];

const WhyYouNeedRedesign = () => {
  return (
    <div className="bg-black text-white py-16">
      <div className="wrapper">
        <div className="">
          {/* Title */}
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-glacial mb-4">
              Why You Need a Website{" "}
              <span className="relative">
                Redesign?
                <div className="absolute bottom-0 left-0 w-full h-1 bg-yellowClr"></div>
              </span>
            </h2>
          </div>

          {/* Intro Text */}
          <p className="text-center text-lg text-gray-300 mb-12">
            A website redesign is crucial because :
          </p>

          {/* Reasons Grid */}
          <div className="grid lg:grid-cols-3 gap-8">
            {redesignReasons.map((reason, index) => (
              <div key={index} className="last:border-r-0 border-b lg:border-r border-white/50 px-8 flex flex-col items-center">
                {/* Label */}
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
                  {reason.label}
                </h3>

                {/* Statistic */}
                <div className="mb-4">
                  <span className="text-5xl md:text-6xl lg:text-7xl font-bold text-yellowClr">
                    {reason.statistic}
                  </span>
                </div>

                {/* Description */}
                <p className="text-base md:text-lg text-gray-300 mb-6">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyYouNeedRedesign;
