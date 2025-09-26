import img1 from "../../assets/websites we build/1. Essential Website.png"; // Placeholder, actual image not provided

const AdvancedWebsite = () => {
  return (
    <div className="bg-white text-black py-16">
      <div className="wrapper">
        <div className="grid lg:grid-cols-[35%,1fr] gap-8 items-start">
          <div className="space-y-6">
            <div className="space-y-4">
              {/* No heading or description for this section */}
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-10">
            {/* Left Section - Advanced Website Package */}
            <div className="relative">
              <div className="translate-x-4 -translate-y-4 bg-yellowClr w-full h-full absolute inset-0 z-[1] rounded-3xl" />
              <div className="relative z-[2]">
                <div className="bg-white border-2 border-black rounded-3xl p-8 shadow-lg relative">
                  <div className="space-y-6 relative z-[10]">
                    <div>
                      <h3 className="text3 !font-normal mb-2 border-y-2 border-black py-2 w-fit">
                        <span className="relative">
                          Advanced{" "}
                          <span className="bg-yellowClr">Website</span>
                        </span>
                      </h3>
                      <p className="text-gray-600">
                        For scaling brands, digital products, and growth driven businesses.
                      </p>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm">
                          Everything in Interactive Website, plus:
                        </span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm">
                          20+ Pages
                        </span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm">
                          Role-Based Content Management
                        </span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm">
                          Advanced SEO Tools Integration
                        </span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm">
                          AI Chatbot/AI Features Integration
                        </span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm">
                          E-commerce or Membership Functionality
                        </span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm">
                          Blog Categorization & Search System
                        </span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm">
                          Free Stock Images (up to 20)
                        </span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm">
                          Custom Theme (3–4 options)
                        </span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm">
                          Integration with CRM, Analytics, Marketing Tools
                        </span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm font-semibold">
                          Delivery: 8–12 weeks
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Section - Tablet Visual */}
            <div className="relative mx-auto">
              <div className="translate-x-4 -translate-y-4 bg-yellowClr w-full h-full absolute inset-0 z-[1] rounded-3xl" />
              <img
                src="https://res.cloudinary.com/dknafpppp/image/upload/v1758909475/Advanced-WordPress-web-development-crop-820x369_ly3deo.webp"
                alt="Advanced Website"
                className="h-full w-full aspect-[4/3] object-cover rounded-3xl z-[2] relative"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvancedWebsite;
