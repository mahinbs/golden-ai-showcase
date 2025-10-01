const SmarterAppsWithAI = () => {
  const aiFeatures = [
    {
      title: "Personalized Shopping",
      description:
        "Recommend products users actually want, boosting sales in e-commerce apps.",
    },
    {
      title: "Smart Booking",
      description:
        "Auto-suggest times, manage availability, and reduce no-shows in service apps.",
    },
    {
      title: "Instant Support",
      description:
        "AI chatbots answer FAQs, guide users, and reduce support workload.",
    },
    {
      title: "Image & Document Scanning",
      description:
        "Enable instant uploads and processing in healthcare and productivity apps.",
    },
    {
      title: "Voice Commands",
      description: "Allow hands-free navigation and actions within your app.",
    },
  ];

  return (
    <div className="bg-black text-white py-16">
      <div className="wrapper">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Section - Title and Description */}
          <div className="space-y-6">
            <div className="border-t-2 border-b-2 border-white py-4 w-fit">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-glacial leading-tight">
                Smarter Apps 
                <span className="bg-[#ffd63c] text-black px-2 py-1">
                  with AI
                </span>
              </h2>
            </div>
            <p className="text-lg leading-relaxed text-gray-300">
              At Specslo, we integrate AI-powered features to make your apps
              smarter, faster, and more helpful for your users — while saving
              you time and resources.
            </p>
          </div>

          {/* Right Section - Features List */}
          <div className="space-y-6">
            <div className="mb-8">
              <p className="text-xl italic text-gray-300">
                Your app can do more than function — it can think.
              </p>
            </div>

            <div className="space-y-8">
              {aiFeatures.map((feature, index) => (
                <div key={index} className="space-y-2">
                  <h3 className="text-xl font-bold text-[#ffd63c]">
                    {feature.title}
                  </h3>
                  <div className="border-t border-[#ffd63c] w-full"></div>
                  <p className="text-base text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmarterAppsWithAI;
