import img1 from "../../assets/websites we build/1. Essential Website.png";

const WebDevelopmentServices = ({ showDescription = true, showHeading = true }: { showDescription?: boolean; showHeading?: boolean }) => {
  return (
    <div className="bg-white text-black py-16">
      <div className="wrapper">
        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-[35%,1fr] gap-8 items-start">
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

          <div className="grid sm:grid-cols-2 gap-10">
            {/* Middle Section - Essential Website Package */}
            <div className="relative">
              <div className="translate-x-4 -translate-y-4 bg-yellowClr w-full h-full absolute inset- z-[1] rounded-3xl" />
              <div className="relative z-[2]">
                <div className="bg-white border-2 border-black rounded-3xl p-8 shadow-lg relative">
                  <div className="space-y-6 relative z-[10]">
                    <div>
                      <h3 className="text3 !font-normal mb-2 border-y-2 border-black py-2 w-fit">
                        <span className="relative">
                          Essential{" "}
                          <span className="bg-yellowClr">Website</span>
                        </span>
                      </h3>
                      <p className="text-gray-600">
                        For businesses establishing a credible online presence.
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

            {/* Right Section - Tablet Visual */}
            <div className="relative mx-auto">
              <div className="translate-x-4 -translate-y-4 bg-yellowClr w-full h-full absolute inset-0 z-[1] rounded-3xl" />
              <img
                src={img1}
                alt="Essential Website"
                className="h-full w-full aspect-[4/3] object-cover rounded-3xl z-[2] relative"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebDevelopmentServices;
