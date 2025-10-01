import img1 from "../../assets/Why Custom Websites Matter/1.png";
import img2 from "../../assets/Why Custom Websites Matter/2.png";
import img3 from "../../assets/Why Custom Websites Matter/3.png";
import img4 from "../../assets/Why Custom Websites Matter/4.png";
import img5 from "../../assets/Why Custom Websites Matter/5.png";
import img6 from "../../assets/Why Custom Websites Matter/6.png";

const defaultData = [
  {
    image: img1,
    title: "Boost Conversions",
    description: "User-centered design guides visitors to take action.",
  },
  {
    image: img2,
    title: "Load Faster, Engage More",
    description: "Speed improves retention and lowers bounce rates.",
  },
  {
    image: img3,
    title: "Automate Daily Tasks",
    description: "Free up your team with online bookings, lead capture, and customer forms.",
  },
  {
    image: img4,
    title: "Centralize Data",
    description: "Connect your CRM, marketing, and analytics for clear insights.",
  },
  {
    image: img5,
    title: "Build Trust and Credibility",
    description: "A unique, modern design positions you as a leader in your industry.",
  },
  {
    image: img6,
    title: "Scale With Ease",
    description: "Easily add AI chat, e-commerce, or integrations as you grow.",
  },
];

interface Benefit {
  image: string;
  title: string;
  description: string;
}

interface WhyCustomWebsitesMatterProps {
  title?: string;
  description?: string;
  benefits?: Benefit[];
}

const WhyCustomWebsitesMatter = ({
  title = "Why Custom Websites Matter",
  description = "A custom website fits your workflows, scales with your growth, and delivers a fast, secure user experience helping your business attract customers and thrive online.",
  benefits = defaultData
}: WhyCustomWebsitesMatterProps) => {
  return (
    <div className="py-[5rem] bg-white text-black">
      <div className="wrapper grid lg:grid-cols-[35%,1fr] gap-10">
        <div className="space-y-4">
          <div className="border-y-2 border-black py-3 w-fit">
            <h2 className="text1 z-[2] relative">
              <div className="absolute left-0 top-0 w-[3rem] h-full bg-yellowClr z-0"></div>
              <p className="pl-4">
                <span className="relative z-[1] font-glacial">
                  {title}
                </span>
              </p>
            </h2>
          </div>
          <p className="desc">
            {description}
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {benefits.map((item, index) => (
            <div key={index} className="space-y-2 text-center">
              <img src={item.image} alt={item.title} />
              <h3 className="text-lg font-bold">{item.title}</h3>
              <p className="desc">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyCustomWebsitesMatter;
