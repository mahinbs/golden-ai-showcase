import React from "react";

const InteractiveWebsite = () => {
  return (
    <div className="bg-white text-black pb-10">
      <div className="wrapper">
        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-[35%,1fr] gap-8 items-start">
          {/* Left Section - Description */}
          <div className="space-y-6">
            <div className="space-y-4">
              {/* No heading or description for this section */}
            </div>
          </div>

          <div className="flip-card h-fit">
            <div className="flip-card-inner">
              {/* Front - Interactive Website Package */}
              <div className="flip-card-front">
                <div className="relative">
                  <div className="translate-x-4 -translate-y-4 bg-yellowClr w-full h-full absolute inset-0 z-[-2] rounded-3xl" />
                  <div className="relative z-[-1]">
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

              {/* Back - Tablet Visual */}
              <div className="flip-card-back">
                <div className="mx-auto overflow-hidden">
                  <img
                    src="https://res.cloudinary.com/drdjii8fe/image/upload/v1758983823/2._Interactive_Website_ab0s0h.png"
                    alt="Interactive Website"
                    className="h-full w-full object-cover rounded-3xl z-[-1] relative"
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

export default InteractiveWebsite;
