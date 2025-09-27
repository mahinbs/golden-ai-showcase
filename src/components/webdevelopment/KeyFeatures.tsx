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

const KeyFeatures = ({ 
  title = "Key Features of Our", 
  subtitle = "Web Development",
  titleSize = "text2",
  description = "",
  showImage = true,
  showCards = true,
  showTechStack = false,
  characterImage: customCharacterImage
}: { 
  title?: string; 
  subtitle?: string;
  titleSize?: string;
  description?: string;
  showImage?: boolean;
  showCards?: boolean;
  showTechStack?: boolean;
  characterImage?: string;
}) => {
  return (
    <div className="bg-black text-white py-16">
      <div className="wrapper">
        <div className={`grid ${showImage && !showCards ? 'lg:grid-cols-[1fr,38%]' : showImage ? 'lg:grid-cols-[38%,1fr]' : showTechStack ? 'lg:grid-cols-[50%,1fr]' : 'lg:grid-cols-1'} gap-12 items-start`}>
          {/* Left Side - Title */}
          <div className="space-y-8">
            {/* Title Section */}
            <div className="space-y-4 border-y w-fit border-white py-2">
              <h2 className={`${titleSize} mb-2`}>
                <span className="block">{title}</span>
                <span className="block">
                  <span className="bg-yellowClr text-black px-3 py-1 inline-block">
                    {subtitle}
                  </span>
                </span>
              </h2>
              {description && (
                <p className="text-lg text-gray-300 mt-4 max-w-md">
                  {description}
                </p>
              )}
            </div>

            {/* Character Image - Left side when cards are shown */}
            {showImage && showCards && (
              <div className="flex justify-center lg:justify-start">
                <img
                  src={customCharacterImage || characterImage}
                  alt="character"
                  className="max-w-[20rem] w-full object-contain"
                />
              </div>
            )}

            {/* Book a Call Button - Show when no cards and no tech stack */}
            {!showCards && !showTechStack && (
              <div className="mt-8">
                <p className="text-white text-lg mb-4">Let's talk details</p>
                <button 
                  onClick={() => {
                    const contactSection = document.getElementById('contact');
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="bg-yellowClr text-black px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-400 transition-colors duration-300 shadow-lg hover:shadow-xl"
                >
                  Book a Call
                </button>
              </div>
            )}
          </div>

          {/* Right Side - Feature Cards or Image */}
          {showCards ? (
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
          ) : showImage && !showCards ? (
            <div className="flex justify-center lg:justify-end">
              <img
                src={customCharacterImage || characterImage}
                alt="character"
                className="max-w-[20rem] w-full object-contain"
              />
            </div>
          ) : null}

          {/* Tech Stack Circles */}
          {showTechStack && (
            <div className="flex justify-center lg:justify-start">
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 max-w-4xl">
                {/* Row 1 */}
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center p-3 shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300 cursor-pointer group">
                  <img 
                    src="https://res.cloudinary.com/dknafpppp/image/upload/v1758910482/React-icon.svg_scujff.png" 
                    alt="React" 
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center p-3 shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300 cursor-pointer group">
                  <img 
                    src="https://res.cloudinary.com/dknafpppp/image/upload/v1758910482/nextjs_lynktt.webp" 
                    alt="Next.js" 
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center p-3 shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300 cursor-pointer group">
                  <img 
                    src="https://res.cloudinary.com/dknafpppp/image/upload/v1758910482/logo-vertical_vyof3n.png" 
                    alt="Vue.js" 
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center p-3 shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300 cursor-pointer group">
                  <img 
                    src="https://res.cloudinary.com/dknafpppp/image/upload/v1758910482/unnamed_sbtbfm.webp" 
                    alt="Angular" 
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center p-3 shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300 cursor-pointer group">
                  <img 
                    src="https://res.cloudinary.com/dknafpppp/image/upload/v1758910481/aws_logo_smile_1200x630_lo2mgm.png" 
                    alt="AWS" 
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center p-3 shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300 cursor-pointer group">
                  <img 
                    src="https://res.cloudinary.com/dknafpppp/image/upload/v1758910481/unnamed_uleekm.png" 
                    alt="MongoDB" 
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                
                {/* Row 2 */}
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center p-3 shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300 cursor-pointer group">
                  <img 
                    src="https://res.cloudinary.com/dknafpppp/image/upload/v1758910481/twitter-card_m60kuj.png" 
                    alt="Tailwind CSS" 
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center p-3 shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300 cursor-pointer group">
                  <img 
                    src="https://res.cloudinary.com/dknafpppp/image/upload/v1758910481/channels4_profile_1_sqw72d.jpg" 
                    alt="JavaScript" 
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center p-3 shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300 cursor-pointer group">
                  <img 
                    src="https://res.cloudinary.com/dknafpppp/image/upload/v1758910481/Typescript.svg_jg1vfl.png" 
                    alt="TypeScript" 
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center p-3 shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300 cursor-pointer group">
                  <img 
                    src="https://res.cloudinary.com/dknafpppp/image/upload/v1758910480/node-js_q5uzib.svg" 
                    alt="Node.js" 
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center p-3 shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300 cursor-pointer group">
                  <img 
                    src="https://res.cloudinary.com/dknafpppp/image/upload/v1758910480/Java-Logo_vvatup.png" 
                    alt="Java" 
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center p-3 shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300 cursor-pointer group">
                  <img 
                    src="https://res.cloudinary.com/dknafpppp/image/upload/v1758910481/channels4_profile_gsdhtk.jpg" 
                    alt="Django" 
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                
                {/* Row 3 */}
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center p-3 shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300 cursor-pointer group">
                  <img 
                    src="https://res.cloudinary.com/dknafpppp/image/upload/v1758910480/images_txfqyq.png" 
                    alt="Firebase" 
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center p-3 shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300 cursor-pointer group">
                  <img 
                    src="https://res.cloudinary.com/dknafpppp/image/upload/v1758910480/images_m9covy.jpg" 
                    alt="Razorpay" 
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center p-3 shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300 cursor-pointer group">
                  <img 
                    src="https://res.cloudinary.com/dknafpppp/image/upload/v1758910480/images_1_iyijxv.png" 
                    alt="Stripe" 
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center p-3 shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300 cursor-pointer group">
                  <img 
                    src="https://res.cloudinary.com/dknafpppp/image/upload/v1758910747/download_qhhvd2.png" 
                    alt="DigitalOcean" 
                    className="w-full h-full object-cover rounded-full group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center p-3 shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300 cursor-pointer group">
                  <img 
                    src="https://res.cloudinary.com/dknafpppp/image/upload/v1758910748/0925-3D_Data_Visualization_with_Open_Source_Tools_A_Tutorial_Using_VTK_Dan_Newsletter_cdtabp.png" 
                    alt="Vercel" 
                    className="w-full h-full object-cover rounded-full group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center p-3 shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300 cursor-pointer group">
                  <img 
                    src="https://res.cloudinary.com/dknafpppp/image/upload/v1758910747/unnamed_aafjkn.jpg" 
                    alt="Docker" 
                    className="w-full h-full object-cover rounded-full group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default KeyFeatures;
