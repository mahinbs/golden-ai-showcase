const designSolutions = [
  {
    title: "Website",
    subtitle: "Design",
    description: "Create stunning, responsive website designs that engage users and drive conversions.",
    image: "https://res.cloudinary.com/drdjii8fe/image/upload/v1760375429/1._Website_Design_wmnirl.png",
    features: [
      "Responsive Web Design",
      "Landing Page Design",
      "E-commerce Design",
      "Portfolio Websites",
    ],
  },
  {
    title: "Mobile App",
    subtitle: "Design",
    description: "Design intuitive, user-friendly mobile apps for iOS and Android platforms.",
    image: "https://res.cloudinary.com/drdjii8fe/image/upload/v1760375461/2._Mobile_App_Design_stpevi.png",
    features: [
      "iOS App Design",
      "Android App Design",
      "Cross-Platform Design",
      "App Prototyping",
    ],
  },
  {
    title: "User",
    subtitle: "Research",
    description: "Conduct comprehensive user research to understand user needs and behaviors.",
    image: "https://res.cloudinary.com/drdjii8fe/image/upload/v1760375432/3._User_Research_d6sr6t.png",
    features: [
      "User Interviews",
      "Surveys & Analytics",
      "Persona Development",
      "Usability Testing",
    ],
  },
  {
    title: "Wireframing &",
    subtitle: "Prototyping",
    description: "Create detailed wireframes and interactive prototypes to visualize your product.",
    image: "https://res.cloudinary.com/drdjii8fe/image/upload/v1760375426/4._Wireframing_Prototyping_tyevgg.png",
    features: [
      "Low-Fidelity Wireframes",
      "High-Fidelity Prototypes",
      "Interactive Mockups",
      "Design Specifications",
    ],
  },
  {
    title: "Interaction",
    subtitle: "Design",
    description: "Design seamless interactions that guide users through your product effortlessly.",
    image: "https://res.cloudinary.com/drdjii8fe/image/upload/v1760375443/5._Interaction_Design_e48vuc.png",
    features: [
      "Micro-interactions",
      "Animation Design",
      "User Flow Design",
      "Navigation Design",
    ],
  },
  {
    title: "Visual",
    subtitle: "Design",
    description: "Craft visually stunning designs that align with your brand and captivate users.",
    image: "https://res.cloudinary.com/drdjii8fe/image/upload/v1760375438/6._Visual_Design_najmck.png",
    features: [
      "Brand Identity Design",
      "Color Palette Design",
      "Typography Design",
      "Icon Design",
    ],
  },
  {
    title: "UX",
    subtitle: "Writing",
    description: "Write clear, concise copy that guides users and enhances their experience.",
    image: "https://res.cloudinary.com/drdjii8fe/image/upload/v1760375452/7._UX_Writing_hezemz.png",
    features: [
      "Content Strategy",
      "Microcopy Writing",
      "Error Message Design",
      "Help & Documentation",
    ],
  },
];

const DesignSolutionsWeDeliver = () => {
  return (
    <div className="bg-black text-white py-16">
      <div className="wrapper">
        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8 items-center">
          {/* Left Section - Description */}
          <div className="space-y-6 lg:col-span-3 text-center flex flex-col items-center w-full">
            <div className="space-y-4 pb-6">
              <div className="border-y-2 border-white py-3 w-fit mx-auto">
                <h2 className="text1 z-[2] relative">
                  <p className="pl-4">
                    <span className="relative z-[1] font-glacial">
                      Design Solutions{" "}
                      <span className="bg-yellowClr text-black p-1">
                        We Deliver
                      </span>
                    </span>
                  </p>
                </h2>
              </div>
              <p className="text-lg leading-relaxed text-gray-300">
                From website design to mobile apps, we deliver comprehensive design solutions that
                fit your specs and exceed your expectations.
              </p>
            </div>
          </div>

          {/* Design Solution Cards */}
          {designSolutions.map((solution, index) => (
            <div key={index} className="flip-card !h-[25rem] pr-5">
              <div className="flip-card-inner">
                {/* Front - Solution Details */}
                <div className="flip-card-front">
                  <div className="relative h-full">
                    <div
                      className={`${
                        index % 2 === 0 ? "translate-x-4" : "-translate-x-4"
                      } -translate-y-4 bg-yellowClr w-full h-full absolute inset-0 z-[-2] rounded-3xl`}
                    />
                    <div className="h-full">
                      <div className="bg-black h-full border-2 border-white rounded-3xl shadow-lg">
                        <div className="space-y-6 z-[10] p-8">
                          <div>
                            <h3 className="text3 !font-normal mb-2 border-y-2 border-white py-2 w-fit">
                              <span className="relative text-white">
                                {solution.title}{" "}
                                <span className="bg-yellowClr text-black">
                                  {solution.subtitle}
                                </span>
                              </span>
                            </h3>
                            <p className="text-gray-300 text-start">
                              {solution.description}
                            </p>
                          </div>

                          <div className="space-y-3">
                            {solution.features.map((feature, featureIndex) => (
                              <div
                                key={featureIndex}
                                className="flex items-start text-start gap-3"
                              >
                                <div className="w-2 h-2 bg-yellowClr rounded-full mt-2 flex-shrink-0"></div>
                                <span
                                  className={`text-sm text-gray-300 ${
                                    featureIndex === solution.features.length - 1
                                      ? "font-semibold"
                                      : ""
                                  }`}
                                >
                                  {feature}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Back - Solution Image */}
                <div className="flip-card-back">
                  <div className="mx-auto relative h-full overflow-hidden rounded-3xl">
                    <div
                      className={`${
                        index % 2 === 0 ? "-translate-x-4" : "translate-x-4"
                      } -translate-y-4 bg-yellowClr w-full h-full absolute inset-0 z-[-2]`}
                    />
                    <img
                      src={solution.image}
                      alt={`${solution.title} ${solution.subtitle}`}
                      className="h-full w-full object-cover object-center z-[-1] relative scale-125"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DesignSolutionsWeDeliver;

