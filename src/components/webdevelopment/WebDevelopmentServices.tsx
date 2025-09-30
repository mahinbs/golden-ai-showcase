import img1 from "../../assets/websites we build/1. Essential Website.png";
import AdvancedWebsite from "./AdvancedWebsite";
import InteractiveWebsite from "./InteractiveWebsite";

const WebDevelopmentServices = ({
  showDescription = true,
  showHeading = true,
}: {
  showDescription?: boolean;
  showHeading?: boolean;
}) => {
  return (
    <div className="bg-white text-black py-16">
      <div className="wrapper">
        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Left Section - Description */}
          <div className="space-y-6">
            <div className="space-y-4">
              {showHeading && (
                <div className="border-y-2 border-black py-3 w-fit">
                  <h2 className="text1 z-[2] relative">
                    <div className="absolute left-0 top-0 w-[3rem] h-full bg-yellowClr z-0"></div>
                    <p className="pl-4">
                      <span className="relative z-[1] font-glacial">
                        Websites We Build
                      </span>
                    </p>
                  </h2>
                </div>
              )}
              {showDescription && (
                <p className="text-lg leading-relaxed text-gray-700">
                  From simple brand presence sites to advanced platforms with AI
                  and workflow automation, we craft websites that fit your specs
                  and support your business growth.
                </p>
              )}
            </div>
          </div>

          <div className="flip-card">
            <div className="flip-card-inner">
              {/* Middle Section - Essential Website Package */}
              <div className="flip-card-front">
                <div className="relative h-full">
                  <div className="translate-x-4 -translate-y-4 bg-yellowClr w-full h-full absolute inset-0 z-[-2] rounded-3xl" />
                  <div className="h-full">
                    <div className="bg-white h-full border-2 border-black rounded-3xl shadow-lg">
                      <div className="space-y-6 z-[10] p-8">
                        <div>
                          <h3 className="text3 !font-normal mb-2 border-y-2 border-black py-2 w-fit">
                            <span className="">
                              Essential{" "}
                              <span className="bg-yellowClr">Website</span>
                            </span>
                          </h3>
                          <p className="text-gray-600">
                            For businesses establishing a credible online
                            presence.
                          </p>
                        </div>

                        <div className="space-y-3">
                          <div className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-sm">
                              Up to 10 Pages to showcase services clearly.
                            </span>
                          </div>
                          <div className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-sm">
                              Lead Capture Forms to start conversations.
                            </span>
                          </div>
                          <div className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-sm">
                              Mobile-Responsive Design for all devices.
                            </span>
                          </div>
                          <div className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-sm">
                              SSL Security & Core SEO Optimization.
                            </span>
                          </div>
                          <div className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-sm">
                              Fast Loading & Clean User Experience.
                            </span>
                          </div>
                          <div className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-sm">
                              Chat & WhatsApp Widget Integration
                            </span>
                          </div>
                          <div className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-sm">
                              Custom Design (1-2 style options).
                            </span>
                          </div>
                          <div className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-sm font-semibold">
                              Delivery: 2-3 weeks
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Section - Tablet Visual */}
              <div className="flip-card-back">
                <div className="mx-auto relative h-full">
                  <div className="-translate-x-4 -translate-y-4 bg-yellowClr w-full h-full absolute inset-0 z-[-2] rounded-3xl" />
                  <img
                    src={img1}
                    alt="Essential Website"
                    className="h-full w-full object-cover object-center rounded-3xl z-[-1] relative"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flip-card">
            <div className="flip-card-inner">
             
              <div className="flip-card-front">
                <div className="relative h-full">
                  <div className="translate-x-4 -translate-y-4 bg-yellowClr w-full h-full absolute inset-0 z-[-2] rounded-3xl" />
                  <div className="h-full">
                    <div className="bg-white h-full border-2 border-black rounded-3xl shadow-lg">
                      <div className="space-y-6 z-[10] p-8">
                        <div>
                          <h3 className="text3 !font-normal mb-2 border-y-2 border-black py-2 w-fit">
                            <span className="relative">
                              Interactive{" "}
                              <span className="bg-yellowClr">Website</span>
                            </span>
                          </h3>
                          <p className="text-gray-600">
                            For brands ready to engage visitors and build
                            authority.
                          </p>
                        </div>

                        <div className="space-y-3">
                          <div className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-sm">
                              Everything in Essential Website, plus:
                            </span>
                          </div>
                          <div className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-sm">10 to 25 Pages</span>
                          </div>
                          <div className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-sm">
                              CMS Integration (WordPress/Headless Options)
                            </span>
                          </div>
                          <div className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-sm">
                              Blog & Content Management
                            </span>
                          </div>
                          <div className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-sm">
                              Google Optimization & Search Submission
                            </span>
                          </div>
                          <div className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-sm">
                              Multilingual Support
                            </span>
                          </div>
                          <div className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-sm">
                              Free Stock Images (up to 10)
                            </span>
                          </div>
                          <div className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-sm">
                              Lead Magnet Integration
                            </span>
                          </div>
                          <div className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-sm">
                              Custom Theme (2-3 options)
                            </span>
                          </div>
                          <div className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-sm font-semibold">
                              Delivery: 4-6 weeks
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Section - Tablet Visual */}
              <div className="flip-card-back">
                <div className="mx-auto relative h-full">
                  <div className="-translate-x-4 -translate-y-4 bg-yellowClr w-full h-full absolute inset-0 z-[-2] rounded-3xl" />
                  <img
                    src="https://res.cloudinary.com/drdjii8fe/image/upload/v1758983823/2._Interactive_Website_ab0s0h.png"
                    alt="Interactive Website"
                    className="h-full w-full object-cover object-center rounded-3xl z-[-1] relative"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flip-card">
            <div className="flip-card-inner">
              
              <div className="flip-card-front">
                <div className="relative h-full">
                  <div className="translate-x-4 -translate-y-4 bg-yellowClr w-full h-full absolute inset-0 z-[-2] rounded-3xl" />
                  <div className="h-full">
                    <div className="bg-white h-full border-2 border-black rounded-3xl shadow-lg">
                      <div className="space-y-6 z-[10] p-8">
                        <div>
                        <h3 className="text3 !font-normal mb-2 border-y-2 border-black py-2 w-fit">
                            <span className="relative">
                              Advanced{" "}
                              <span className="bg-yellowClr">Website</span>
                            </span>
                          </h3>
                          <p className="text-gray-600">
                            For scaling brands, digital products, and growth
                            driven businesses.
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
                            <span className="text-sm">20+ Pages</span>
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
              </div>

              {/* Right Section - Tablet Visual */}
              <div className="flip-card-back">
                <div className="mx-auto relative h-full">
                  <div className="-translate-x-4 -translate-y-4 bg-yellowClr w-full h-full absolute inset-0 z-[-2] rounded-3xl" />
                  <img
                    src="https://res.cloudinary.com/drdjii8fe/image/upload/v1758986306/3._Advanced_Website_ky2shk.png"
                    alt="Advanced Website"
                    className="h-full w-full object-cover object-center rounded-3xl z-[-1] relative"
                  />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default WebDevelopmentServices;
