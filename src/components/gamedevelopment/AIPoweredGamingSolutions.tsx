const aiFeatures = [
  {
    title: "Player Behavior Analytics",
    description: "Leverage AI to analyze player actions, preferences, and patterns, enabling personalized gameplay and smarter monetization strategies.",
  },
  {
    title: "AI-Enhanced AR/VR",
    description: "Use AI for gesture recognition, real-time rendering, and adaptive environments to create unforgettable AR/VR gaming experiences.",
  },
  {
    title: "AI-Driven Game Development",
    description: "Incorporate deep learning and adaptive AI for intelligent NPCs and dynamic game scenarios that keep players coming back.",
  },
];

const aiCapabilities = [
  {
    title: "Anti-Cheat Systems",
    description: "Protect your games with AI-powered cheat detection to ensure a fair and secure gaming environment.",
  },
  {
    title: "Dynamic NPCs",
    description: "Create versatile NPCs that adapt to player decisions, making gameplay richer and more engaging.",
  },
  {
    title: "AI-Based Game Testing",
    description: "Automate testing with machine learning for efficient bug detection and smoother gameplay.",
  },
];

const AIPoweredGamingSolutions = () => {
  return (
    <div className="bg-black text-white py-16">
      <div className="wrapper">
        <div className="space-y-12">
          {/* Title Section */}
          <div className="text-start space-y-6">
            <div className="border-y-2 border-white py-4 w-fit">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-glacial !leading-tight">
                AI-Powered
                <br />
                Gaming
                <br />
                <span className="bg-[#ffd63c] text-black px-2">
                  Solutions
                </span>
              </h2>
            </div>
            <p className="text-lg text-gray-300 max-w-3xl leading-relaxed">
              At Specslo, we integrate advanced AI into your games to create dynamic worlds, intelligent NPCs, and data-driven
              gameplay that keeps players engaged and your game evolving.
            </p>
          </div>

          {/* Main AI Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {aiFeatures.map((feature, index) => (
              <div
                key={index}
                className="group"
              >
                <div className="relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 hover:border-[#ffd63c] transition-all duration-300 p-8 h-full">
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-[#ffd63c] group-hover:text-white transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <div className="border-t border-[#ffd63c] w-16 group-hover:w-full transition-all duration-500"></div>
                    <p className="text-base text-gray-300 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>

                  {/* Hover Effect Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#ffd63c]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl"></div>
                </div>
              </div>
            ))}
          </div>

          {/* AI Capabilities */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {aiCapabilities.map((capability, index) => (
              <div
                key={index}
                className="group"
              >
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#ffd63c]/20 to-[#ffd63c]/5 border border-[#ffd63c]/30 hover:border-[#ffd63c] transition-all duration-300 p-8 h-full">
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-white">
                      {capability.title}
                    </h3>
                    <p className="text-sm text-gray-300 leading-relaxed">
                      {capability.description}
                    </p>
                  </div>

                  {/* Hover Effect Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#ffd63c]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIPoweredGamingSolutions;

