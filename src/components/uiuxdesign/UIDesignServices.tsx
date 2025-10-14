const uiDesignServices = [
  {
    title: "User Interface",
    subtitle: "(UI)",
    description:
      "Crafting visually stunning, intuitive interfaces that engage users and drive conversions.",
    image:
      "https://res.cloudinary.com/drdjii8fe/image/upload/v1760375300/3._User_Interface_UI_fpmxpg.png",
    features: [
      "Visual Design & Branding",
      "Responsive Layout Design",
      "Interactive Components",
      "Design System Creation",
    ],
  },
  {
    title: "User Experience",
    subtitle: "(UX)",
    description:
      "Designing seamless, user-centered experiences that delight users and achieve business goals.",
    image:
      "https://res.cloudinary.com/drdjii8fe/image/upload/v1760375297/3._User_Experience_UX_xlpofe.png",
    features: [
      "User Research & Analysis",
      "Information Architecture",
      "Usability Testing",
      "User Journey Mapping",
    ],
  },
];

const UIDesignServices = () => {
  return (
    <div className="bg-white text-black py-16">
      <div className="wrapper">
        <div className="space-y-16">
          {/* UI Section */}
          <div className="grid grid-cols-1 lg:grid-cols-[40%,1fr] gap-8 lg:gap-12 items-center">
            {/* Left - Image */}
            <div className="order-1 lg:order-1">
              <img
                src={uiDesignServices[0].image}
                alt={uiDesignServices[0].title}
                className="w-full max-w-md mx-auto lg:mx-0 object-contain aspect-video"
              />
            </div>

            {/* Right - Content */}
            <div className="order-2 lg:order-2 space-y-6">
              {/* Title Banner */}
              <div className="bg-yellowClr px-4 py-2 inline-block">
                <h3 className="text-2xl font-bold text-black">
                  {uiDesignServices[0].title} {uiDesignServices[0].subtitle}
                </h3>
              </div>

              {/* Headline */}
              <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                Your product's look, aligned with your specs.
              </h2>

              {/* Description */}
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                UI is the visual layer : buttons, colors, typography, layouts that users interact with. It ensures your product is clean, on-brand, and intuitive.
              </p>

              {/* Divider */}
              <div className="border-t border-black"></div>
            </div>
          </div>

          {/* UX Section */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr,40%] gap-8 lg:gap-12 items-center">
            {/* Left - Content */}
            <div className="order-2 lg:order-1 space-y-6">
              {/* Title Banner */}
              <div className="bg-yellowClr px-4 py-2 inline-block">
                <h3 className="text-2xl font-bold text-black">
                  {uiDesignServices[1].title} {uiDesignServices[1].subtitle}
                </h3>
              </div>

              {/* Headline */}
              <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                Your product's flow, designed for your workflows.
              </h2>

              {/* Description */}
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                UX is how your product works, mapping user journeys to ensure tasks are completed easily and your product feels seamless.
              </p>

              {/* Divider */}
              <div className="border-t border-black"></div>
            </div>

            {/* Right - Image */}
            <div className="order-1 lg:order-2">
              <img
                src={uiDesignServices[1].image}
                alt={uiDesignServices[1].title}
                className="w-full max-w-md mx-auto lg:mx-0 object-contain aspect-video"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UIDesignServices;
