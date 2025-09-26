import React from "react";

const InteractiveWebsite = () => {
  return (
    <div className="bg-white text-black py-16">
      <div className="wrapper">
        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-[35%,1fr] gap-8 items-start">
          {/* Left Section - Description */}
          <div className="space-y-6">
            <div className="space-y-4">
              {/* No heading or description for this section */}
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-10">
            {/* Left Section - Tablet Visual */}
            <div className="relative mx-auto">
              <div className="translate-x-4 -translate-y-4 bg-yellowClr w-full h-full absolute inset-0 z-[1] rounded-3xl" />
              <img
                src="https://res.cloudinary.com/dknafpppp/image/upload/v1758908591/Screenshot_2025-09-27_at_12.42.42_AM_pc2e1e.png"
                alt="Interactive Website"
                className="h-full w-full aspect-[4/3] object-cover rounded-3xl z-[2] relative"
              />
            </div>

            {/* Right Section - Interactive Website Package */}
            <div className="relative">
              <div className="translate-x-4 -translate-y-4 bg-yellowClr w-full h-full absolute inset-0 z-[1] rounded-3xl" />
              <div className="relative z-[2]">
                <div className="bg-white border-2 border-black rounded-3xl p-8 shadow-lg relative">
                  <div className="space-y-6 relative z-[10]">
                    <div>
                      <h3 className="text3 !font-normal mb-2 border-y-2 border-black py-2 w-fit">
                        <span className="relative">
                          Interactive{" "}
                          <span className="bg-yellowClr">Website</span>
                        </span>
                      </h3>
                      <p className="text-gray-600">
                        For brands ready to engage visitors and build authority.
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
                        <span className="text-sm">
                          10 to 25 Pages
                        </span>
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
        </div>
      </div>
    </div>
  );
};

export default InteractiveWebsite;
