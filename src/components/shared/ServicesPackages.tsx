interface Package {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  features: string[];
}

interface ServicesPackagesProps {
  showDescription?: boolean;
  showHeading?: boolean;
  heading?: string;
  description?: string;
  packages?: Package[];
}

const ServicesPackages = ({
  showDescription = true,
  showHeading = true,
  heading = "Services We Build",
  description = "From simple solutions to advanced platforms, we craft products that fit your specs and support your business growth.",
  packages = []
}: ServicesPackagesProps) => {
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
                        {heading}
                      </span>
                    </p>
                  </h2>
                </div>
              )}
              {showDescription && (
                <p className="text-lg leading-relaxed text-gray-700">
                  {description}
                </p>
              )}
            </div>
          </div>

          {/* Package Cards */}
          {packages.map((pkg, index) => (
            <div key={index} className="flip-card">
              <div className="flip-card-inner">
                {/* Front - Package Details */}
                <div className="flip-card-front">
                  <div className="relative h-full">
                    <div className={`${index % 2 === 0 ? 'translate-x-4' : '-translate-x-4'} -translate-y-4 bg-yellowClr w-full h-full absolute inset-0 z-[-2] rounded-3xl`} />
                    <div className="h-full">
                      <div className="bg-white h-full border-2 border-black rounded-3xl shadow-lg">
                        <div className="space-y-6 z-[10] p-8">
                          <div>
                            <h3 className="text3 !font-normal mb-2 border-y-2 border-black py-2 w-fit">
                              <span className="relative">
                                {pkg.title}{" "}
                                <span className="bg-yellowClr">{pkg.subtitle}</span>
                              </span>
                            </h3>
                            <p className="text-gray-600">
                              {pkg.description}
                            </p>
                          </div>

                          <div className="space-y-3">
                            {pkg.features.map((feature, featureIndex) => (
                              <div key={featureIndex} className="flex items-start gap-3">
                                <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                                <span className={`text-sm ${featureIndex === pkg.features.length - 1 ? 'font-semibold' : ''}`}>
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

                {/* Back - Package Image */}
                <div className="flip-card-back">
                  <div className="mx-auto relative h-full">
                    <div className={`${index % 2 === 0 ? '-translate-x-4' : 'translate-x-4'} -translate-y-4 bg-yellowClr w-full h-full absolute inset-0 z-[-2] rounded-3xl`} />
                    <img
                      src={pkg.image}
                      alt={`${pkg.title} ${pkg.subtitle}`}
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

export default ServicesPackages;


