import React from "react";

interface StatsSectionProps {
  missionText?: string;
  highlightedWord?: string;
  stat1Value?: string;
  stat1Label?: string;
  stat2Value?: string;
  stat2Label?: string;
  stat3Value?: string;
  stat3Label?: string;
  characterImage?: string;
  lineImg?: string;
}

const StatsSection = ({
  missionText = "At Specslo, we build secure, scalable websites crafted around your specs to drive business growth.",
  highlightedWord = "Specslo",
  stat1Value = "70+",
  stat1Label = "Web Solutions Delivered",
  stat2Value = "2x",
  stat2Label = "Faster Load Times",
  stat3Value = "60%",
  stat3Label = "SEO Visibility Boost",
  characterImage = "https://res.cloudinary.com/dknafpppp/image/upload/v1758908591/Screenshot_2025-09-27_at_12.42.42_AM_pc2e1e.png",
  lineImg = "",
}: StatsSectionProps) => {
  // Function to highlight specific words in the mission text
  const highlightText = (text: string, wordToHighlight: string) => {
    // Support multiple highlighted words separated by comma
    const wordsToHighlight = wordToHighlight.split(",").map((w) => w.trim());

    // Always include 'specs' as a highlighted word
    if (!wordsToHighlight.some((w) => w.toLowerCase() === "specs")) {
      wordsToHighlight.push("specs");
    }

    // Create a regex pattern for all words to highlight
    const pattern = new RegExp(`(${wordsToHighlight.join("|")})`, "gi");
    const parts = text.split(pattern);

    return parts.map((part, index) => {
      // Check if this part should be highlighted
      const shouldHighlight = wordsToHighlight.some(
        (word) => part.toLowerCase() === word.toLowerCase()
      );

      if (shouldHighlight) {
        return (
          <span key={index} className="text-[#ffd63c]">
            {part}
          </span>
        );
      }
      return part;
    });
  };

  return (
    <div className="bg-black text-white py-32 relative">
      <div className="wrapper">
        {/* Centered Content */}
        <div className="text-center space-y-12 relative z-[2]">
          {/* Mission Statement */}
          <div>
            <p className="text-3xl lg:text-4xl xl:text-5xl leading-relaxed">
              {highlightText(missionText, highlightedWord)}
            </p>
          </div>

          {/* Separator Line */}
          {lineImg ? (
            <img src={lineImg} alt="line" className="w-full object-contain" />
          ) : (
            <div className="w-full h-px bg-white max-w-4xl mx-auto"></div>
          )}

          {/* Statistics */}
          <div className="grid grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl lg:text-7xl font-bold text-gray-300 mb-3">
                {stat1Value}
              </div>
              <div className="text-base lg:text-lg text-gray-400">
                {stat1Label}
              </div>
            </div>
            <div className="text-center border-l border-r border-gray-600 px-8">
              <div className="text-4xl lg:text-7xl font-bold text-gray-300 mb-3">
                {stat2Value}
              </div>
              <div className="text-base lg:text-lg text-gray-400">
                {stat2Label}
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-7xl font-bold text-gray-300 mb-3">
                {stat3Value}
              </div>
              <div className="text-base lg:text-lg text-gray-400">
                {stat3Label}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Right Character Illustration */}
        {characterImage && (
          <div className="lg:block hidden absolute bottom-8 right-8">
            <div className="relative max-w-xs">
              <img
                src={characterImage}
                alt="Character working at computer"
                className="w-full h-auto max-h-[17rem] object-contain"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default StatsSection;
