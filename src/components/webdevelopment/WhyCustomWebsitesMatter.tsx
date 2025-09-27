import img1 from "../../assets/Why Custom Websites Matter/1.png";
import img2 from "../../assets/Why Custom Websites Matter/2.png";
import img3 from "../../assets/Why Custom Websites Matter/3.png";
import img4 from "../../assets/Why Custom Websites Matter/4.png";
import img5 from "../../assets/Why Custom Websites Matter/5.png";
import img6 from "../../assets/Why Custom Websites Matter/6.png";

const data = [
  {
    img: img1,
    title: "Boost Conversions",
    desc: "User-centered design guides visitors to take action.",
  },
  {
    img: img2,
    title: "Load Faster, Engage More",
    desc: "Speed improves retention and lowers bounce rates.",
  },
  {
    img: img3,
    title: "Automate Daily Tasks",
    desc: "Free up your team with online bookings, lead capture, and customer forms.",
  },
  {
    img: img4,
    title: "Centralize Data",
    desc: "Connect your CRM, marketing, and analytics for clear insights.",
  },
  {
    img: img5,
    title: "Build Trust and Credibility",
    desc: "A unique, modern design positions you as a leader in your industry.",
  },
  {
    img: img6,
    title: "Scale With Ease",
    desc: "Easily add AI chat, e-commerce, or integrations as you grow.",
  },
];

const WhyCustomWebsitesMatter = () => {
  return (
    <div className="py-[5rem] bg-white text-black">
      <div className="wrapper grid lg:grid-cols-[35%,1fr] gap-10">
        <div className="space-y-4">
          <div className="border-y-2 border-black py-3 w-fit">
            <h2 className="text1 z-[2] relative">
              <div className="absolute left-0 top-0 w-[3rem] h-full bg-yellowClr z-0"></div>
              <p className="pl-4">
                <span className="relative z-[1] font-glacial">
                  Why Custom Websites Matter
                </span>
              </p>
            </h2>
          </div>
          <p className="desc">
            A custom website fits your workflows, scales with your growth, and
            delivers a fast, secure user experience helping your business
            attract customers and thrive online.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {data.map((item, index) => (
            <div key={index} className="space-y-2 text-center">
              <img src={item.img} alt={item.title} />
              <h3 className="text-lg font-bold">{item.title}</h3>
              <p className="desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyCustomWebsitesMatter;
