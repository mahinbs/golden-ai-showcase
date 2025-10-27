const platforms = [
  {
    label: "PC",
    description:
      "Full-cycle game development for Windows and macOS with optimized performance.",
    img: "https://res.cloudinary.com/drdjii8fe/image/upload/v1760354935/1._PC_hc0ph9.png",
  },
  {
    label: "Console",
    description:
      "High-quality games for PlayStation, Xbox, and Nintendo platforms.",
    img: "https://res.cloudinary.com/drdjii8fe/image/upload/v1760354936/2._Console_z73a0j.png",
  },
  {
    label: "Mobile",
    description: "Engaging, smooth games for iOS and Android devices.",
    img: "https://res.cloudinary.com/drdjii8fe/image/upload/v1760354936/3._Mobile_es1zg2.png",
  },
  {
    label: "AR/VR",
    description: "Immersive, interactive gameplay experiences.",
    img: "https://res.cloudinary.com/drdjii8fe/image/upload/v1760354938/4._ARVR_dddzzs.png",
  },
];

const PlatformsWeBuildFor = () => {
  return (
    <div className="bg-white text-black py-16">
      <div className="wrapper">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Section - Title, Description, and Illustration */}
          <div className="space-y-8">
            {/* Title */}
            <div className="space-y-4">
              <h2 data-aos="fade-right" className="text1 z-[2] relative">
                <div
                  data-aos="fade-right"
                  className="absolute left-0 top-0 w-[3rem] h-full bg-yellowClr z-0"
                ></div>
                <span className="">
                  <span className="relative z-[1] font-glacial">
                    Platforms We Build <br />
                    Games For
                  </span>
                </span>
              </h2>
            </div>

            {/* Description */}
            <p className="text-lg text-gray-700 leading-relaxed">
              We craft games that fit your specs and perform seamlessly across
              all major platforms, ensuring an engaging experience for every
              player.
            </p>

            {/* Illustration */}
            <div className="flex justify-center lg:justify-start">
              <img
                src="https://res.cloudinary.com/drdjii8fe/image/upload/v1760354937/Under_Title_u2spkj.png"
                alt="Game development illustration"
                className="max-w-md w-full object-contain"
              />
            </div>
          </div>

          {/* Right Section - Platform List */}
          <div className="space-y-6">
            {platforms.map((platform, index) => (
              <div
                key={index}
                className="group cursor-pointer border-b border-gray-200 pb-6 last:border-b-0 last:pb-0"
              >
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div className="w-16 h-16 bg-[#ffd63c] rounded-full flex items-center justify-center flex-shrink-0">
                    <img
                      src={platform.img}
                      alt={platform.label}
                      className="w-16 h-16 object-contain group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-black group-hover:text-[#ffd63c] transition-colors duration-300 mb-2">
                      {platform.label}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {platform.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlatformsWeBuildFor;
