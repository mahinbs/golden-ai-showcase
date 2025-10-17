const whoWeHelp = [
  {
    title: "Hospitals, & Medical centers",
    image: "https://res.cloudinary.com/drdjii8fe/image/upload/v1760377597/3._Hospitals_Medical_centers_b9curr.png",
  },
  {
    title: "Medical Practices",
    image: "https://res.cloudinary.com/drdjii8fe/image/upload/v1760377597/4._Medical_Practices_rrr4f7.png",
  },
  {
    title: "Healthcare Software Providers",
    image: "https://res.cloudinary.com/drdjii8fe/image/upload/v1760377598/5._Healthcare_Software_Providers_mwiz3p.png",
  },
  {
    title: "Healthtech Startups",
    image: "https://res.cloudinary.com/drdjii8fe/image/upload/v1760377599/6._Healthtech_Startups_x8jzfg.png",
  },
  {
    title: "Mental Health Providers",
    image: "https://res.cloudinary.com/drdjii8fe/image/upload/v1760377600/7._Mental_Health_Providers_asbmcl.png",
  },
  {
    title: "Nursing Homes & Assisted Livings",
    image: "https://res.cloudinary.com/drdjii8fe/image/upload/v1760377604/8._Nursing_Homes_Assisted_Livings_hp8ub0.png",
  },
  {
    title: "Home Care providers",
    image: "https://res.cloudinary.com/drdjii8fe/image/upload/v1760377702/9._Home_Care_providers_mplf54.png",
  },
  {
    title: "Veterinary Clinics and Hospitals",
    image: "https://res.cloudinary.com/drdjii8fe/image/upload/v1760377604/10._Veterinary_Clinics_and_Hospitals_q868su.png",
  },
  {
    title: "Medical Laboratories",
    image: "https://res.cloudinary.com/drdjii8fe/image/upload/v1760377604/11._Medical_Laboratories_fbzeor.png",
  },
  {
    title: "Medical Device Manufacturers",
    image: "https://res.cloudinary.com/drdjii8fe/image/upload/v1760377631/12._Medical_Device_Manufacturers_br3urc.png",
  },
  {
    title: "Pharmaceutical companies",
    image: "https://res.cloudinary.com/drdjii8fe/image/upload/v1760377700/13._Pharmaceutical_companies_w2bmt2.png",
  },
  {
    title: "Medical biotech companies",
    image: "https://res.cloudinary.com/drdjii8fe/image/upload/v1760377699/14.Medical_biotech_companies_mjdjrb.png",
  },
  {
    title: "Health insurance companies",
    image: "https://res.cloudinary.com/drdjii8fe/image/upload/v1760377701/15._Health_insurance_companies_gpuoel.png",
  },
  {
    title: "Healthcare NGOs and GOs",
    image: "https://res.cloudinary.com/drdjii8fe/image/upload/v1760377699/16._Healthcare_NGOs_and_GOs_xb6uzv.png",
  },
  {
    title: "Fitness and wellness companies",
    image: "https://res.cloudinary.com/drdjii8fe/image/upload/v1760377700/17._Fitness_and_wellness_companies_zfyxlu.png",
  },
];

const WhoWeHelp = () => {
  return (
    <div className="bg-white text-black py-16">
      <div className="wrapper">
        <div className="lg:grid flex flex-col-reverse grid-cols-[40%,1fr] gap-12 items-start pt-5 lg:pt-10">
          {/* Left Section - Title, Description, and Illustration */}
          <div className="space-y-8">
            

            <div className="border-t border-black"></div>
            {/* Heading */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl !leading-tight font-bold">
              <span className="bg-yellowClr text-black px-2 py-1">Who We</span>
              <br />
              <span className="text-black">Help ?</span>
            </h2>

            {/* Description */}
            <p className="text-lg text-black leading-relaxed">
              We partner with healthcare providers, innovators, and organizations to build technology that fits their workflows, empowers care delivery, and drives better outcomes.
            </p>

            {/* Horizontal Lines */}
            <div className="space-y-2">
              <div className="border-t border-black"></div>
            </div>

            {/* Illustration */}
            <div className="flex justify-center lg:justify-start">
              <img
                src="https://res.cloudinary.com/drdjii8fe/image/upload/v1760377597/1._Under_Titile_g8nzha.png"
                alt="Who We Help Illustration"
                className="max-w-sm w-full object-contain"
              />
            </div>
          </div>

          {/* Right Section - Healthcare Categories Grid */}
          <div className="grid grid-cols-3 lg:grid-cols-5 gap-4 pt-10">
            {whoWeHelp.map((category, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="bg-yellowClr rounded-2xl p-4 border border-black hover:shadow-lg transition-all duration-300 group-hover:scale-105 h-full">
                  {/* Category Image */}
                  <div className="mb-4">
                    <img
                      src={category.image}
                      alt={category.title}
                      className="w-full h-16 object-contain rounded-lg bg-white p-2"
                    />
                  </div>

                  {/* Separator Line */}
                  <div className="border-t border-black mb-3"></div>

                  {/* Category Title */}
                  <h3 className="text-xs font-bold text-center text-black">
                    {category.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeHelp;
