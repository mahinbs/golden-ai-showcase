import characterImage from "../../assets/Key Features of Our Web Development/1..png";
import img1 from "../../assets/Key Features of Our Web Development/2. Mobile First Design.png";
import img2 from "../../assets/Key Features of Our Web Development/3. Live Chat Integration.png";
import img3 from "../../assets/Key Features of Our Web Development/4. Reporting & Analytics.png";
import img4 from "../../assets/Key Features of Our Web Development/5. Web Push Notifications.png";
import img5 from "../../assets/Key Features of Our Web Development/6. Advanced Security.png";
import img6 from "../../assets/Key Features of Our Web Development/7. Secure Web Payments.png";

const features = [
  {
    label: "Mobile First Design",
    desc: "Deliver seamless, responsive experiences across all devices for today’s mobile-centric users.",
    img: img1,
  },
  {
    label: "Live Chat Integration",
    desc: "Enable instant customer support and interactive engagement to boost conversions.",
    img: img2,
  },
  {
    label: "Reporting & Analytics",
    desc: "Track performance and user behavior with actionable insights to refine your digital strategy.",
    img: img3,
  },
  {
    label: "Web Push Notifications",
    desc: "Keep visitors engaged with real-time updates, promotions, and reminders.",
    img: img4,
  },
  {
    label: "Advanced Security",
    desc: "Keep visitors engaged with real-time updates, promotions, and reminders.",
    img: img5,
  },
  {
    label: "Secure Web Payments",
    desc: "Facilitate smooth, secure online transactions with integrated payment solutions.",
    img: img6,
  },
];

const KeyFeatures = () => {
  return (
    <div className="bg-black text-white py-16">
      <div className="wrapper">
        <div className="grid lg:grid-cols-[38%,1fr] gap-12 items-start">
          {/* Left Side - Title and Character */}
          <div className="space-y-8">
            {/* Title Section */}
            <div className="space-y-4 border-y w-fit border-white py-2">
              <h2 className="text2 mb-2">
                <span className="block">Key Features of Our</span>
                <span className="block">
                  <span className="bg-yellowClr text-black px-3 py-1">
                    Web Development
                  </span>
                </span>
              </h2>
            </div>

            {/* Character Image */}
            <div className="flex justify-center lg:justify-start">
              <img
                src={characterImage}
                alt="character"
                className="max-w-[20rem] w-full object-contain"
              />
            </div>
          </div>

          {/* Right Side - Feature Cards */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {features.map(({ label, desc, img }, index) => (
              <div
                key={index}
                className="bg-white text-black rounded-2xl p-6 relative shadow-lg"
              >
                {/* Yellow Tab */}
                <div className="absolute -top-3 left-6">
                  <div className="bg-yellowClr text-black px-4 py-2 rounded-t-lg text-sm font-semibold">
                    {label}
                  </div>
                </div>

                {/* Content */}
                <div className="pt-4 space-y-4">
                  {/* Description */}
                  <p className="text-sm text-gray-700 leading-relaxed text-center">
                    {desc}
                  </p>
                  {/* Icon */}
                  <div className="flex justify-center">
                    <img
                      src={img}
                      alt={label}
                      className="w-16 h-16 object-contain"
                    />
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

export default KeyFeatures;
