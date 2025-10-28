const gameWorlds = [
  {
    title: "Unity Game",
    subtitle: "Development",
    description:
      "Build immersive, high-performing games with Specslo's Unity expertise, crafted around your specs for seamless player experiences.",
    image:
      "https://res.cloudinary.com/drdjii8fe/image/upload/v1760355114/1._Unity_Game_Development_e9nyri.png",
    features: [
      "Unity Cross-Platform Gaming",
      "Unity Multiplayer Game Development",
      "Unity Game Maintenance and Update",
    ],
  },
  {
    title: "Unreal Engine Game",
    subtitle: "Development",
    description:
      "Create stunning, real-time 3D games with photoreal visuals, built around your specs using Unreal Engine.",
    image:
      "https://res.cloudinary.com/drdjii8fe/image/upload/v1760355113/2._Unreal_Engine_Game_Development_igltuc.png",
    features: [
      "Unreal Engine Animation",
      "AR/VR Game Development",
      "Cross-platform Game Development",
      "Unreal Engine AAA Game Development",
    ],
  },
  {
    title: "Metaverse Game",
    subtitle: "Development",
    description:
      "Craft immersive metaverse worlds aligned with your specs, turning your vision into engaging, scalable virtual experiences.",
    image:
      "https://res.cloudinary.com/drdjii8fe/image/upload/v1760355121/3._Metaverse_Game_Development_xzwib1.png",
    features: [
      "Metaverse Game Conceptualization",
      "Metaverse World & Environment Design",
      "Play-to-Earn & Move-to-Earn Games",
      "Metaverse Avatar Creation",
    ],
  },
  {
    title: "2D & 3D Game",
    subtitle: "Development",
    description:
      "Build engaging 2D and immersive 3D games crafted around your specs, ready for native and cross-platform play.",
    image:
      "https://res.cloudinary.com/drdjii8fe/image/upload/v1760355109/4._2D_3D_Game_Development_vdrozi.jpg",
    features: [
      "Game Art Asset Creation",
      "2D Game Development",
      "3D Game Development",
      "2D / 3D Environment Design & Modelling",
    ],
  },
  {
    title: "AR/VR Game",
    subtitle: "Development",
    description:
      "Build immersive AR/VR games crafted around your specs, delivering unforgettable player experiences.",
    image:
      "https://res.cloudinary.com/drdjii8fe/image/upload/v1760355135/5._ARVR_Game_Development_dteye0.png",
    features: [
      "AR/VR Game Conceptualization",
      "AR/VR Game Prototyping",
      "AR/VR Art Asset Creation",
      "AR/VR Optimization Support",
      "AI/ML Game Mechanics Design",
    ],
  },
  {
    title: "AI/ML-Powered Game",
    subtitle: "Development",
    description:
      "Enhance your games with AI and machine learning, delivering smarter, more engaging player experiences.",
    image:
      "https://res.cloudinary.com/drdjii8fe/image/upload/v1760355122/6._AIML-Powered_Game_Development_te6mj7.png",
    features: [
      "AI-driven NPC Behavior Design",
      "Real-time AI-driven Adaptation",
      "AI-assisted Game Enablement",
    ],
  },
  {
    title: "Cross-Platform Game",
    subtitle: "Development",
    description:
      "Build games that deliver a seamless player experience across PC, console, mobile, and web crafted around your specs.",
    image:
      "https://res.cloudinary.com/drdjii8fe/image/upload/v1760355128/7._Cross-Platform_Game_Development_gkx70s.png",
    features: [
      "Game Architecture Design",
      "Cloud Game Development",
      "Cross-platform Multiplayer Integration",
      "Cross-platform Game Testing",
    ],
  },
  {
    title: "HTML5 Game",
    subtitle: "Development",
    description:
      "Build responsive, cross-platform games that run seamlessly across browsers and devices—crafted around your specs.",
    image:
      "https://res.cloudinary.com/drdjii8fe/image/upload/v1760355118/8._HTML5_Game_Development_azhgwt.png",
    features: [
      "Browser-Based Game Development",
      "Responsive Game Design",
      "WebGL Integration",
      "Cross-Browser Compatibility",
    ],
  },
];

const GameWorldsWeBuild = () => {
  return (
    <div className="bg-black text-white py-16">
      <div className="wrapper">
        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Section - Description */}
          <div className="space-y-6 lg:col-span-2 text-center flex flex-col items-center w-full">
            <div className="space-y-4 pb-6">
              <div className="border-y-2 border-white py-3 w-fit mx-auto">
                <h2 className="text1 z-[2] relative">
                  <p className="pl-4">
                    <span className="relative z-[1] font-glacial">
                      Game Worlds{" "}
                      <span className="bg-yellowClr text-black p-1">
                        We Build
                      </span>
                    </span>
                  </p>
                </h2>
              </div>
              <p className="text-lg leading-relaxed text-gray-300">
                From Unity to Unreal Engine, we build immersive game worlds that
                fit your specs and deliver engaging player experiences across
                all platforms.
              </p>
            </div>
          </div>

          {/* Game World Cards */}
          {gameWorlds.map((world, index) => (
            <div key={index} className="flip-card !h-[25rem] pr-5 group">
              <div className="flip-card-inner relative w-full h-full">
                {/* Front - Game World Details */}
                <div className="flip-card-front absolute inset-0 w-full h-full">
                  <div className="relative h-full w-full">
                    <div
                      className={`-translate-y-4 bg-yellowClr w-full h-full absolute inset-0 z-[-2] rounded-3xl`}
                    />
                    <div className="h-full w-full">
                      <div className="bg-black h-full border-2 border-white rounded-3xl shadow-lg">
                        <div className="space-y-6 z-[10] p-8">
                          <div>
                            <h3 className="text3 !font-normal mb-2 border-y-2 border-white py-2 w-fit">
                              <span className="relative text-white">
                                {world.title}{" "}
                                <span className="bg-yellowClr text-black">
                                  {world.subtitle}
                                </span>
                              </span>
                            </h3>
                            <p className="text-gray-300 text-start">
                              {world.description}
                            </p>
                          </div>

                          <div className="space-y-3">
                            {world.features.map((feature, featureIndex) => (
                              <div
                                key={featureIndex}
                                className="flex items-start text-start gap-3"
                              >
                                <div className="w-2 h-2 bg-yellowClr rounded-full mt-2 flex-shrink-0"></div>
                                <span
                                  className={`text-sm text-gray-300 ${
                                    featureIndex === world.features.length - 1
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

                {/* Back - Game World Image */}
                <div className="flip-card-back absolute inset-0 w-full h-full">
                  <div className="mx-auto relative h-full w-full">
                    <div
                      className={`${
                        index % 2 === 0 ? "-translate-x-4" : "translate-x-4"
                      } -translate-y-4 bg-yellowClr w-full h-full absolute inset-0 z-[-2] rounded-3xl`}
                    />
                    <img
                      src={world.image}
                      alt={`${world.title} ${world.subtitle}`}
                      className="h-full w-full object-cover object-center rounded-3xl z-[-1] relative"
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

export default GameWorldsWeBuild;
