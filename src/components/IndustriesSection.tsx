import { industries } from "@/content/industries";
import useScrollTriggerAnimations from "../hooks/useScrollTriggerAnimations";

const IndustriesSection = () => {
  const scrollRef = useScrollTriggerAnimations();
  return (
    <section
      ref={scrollRef}
      className="max-h-fit bg-black relative overflow-hidden"
    >
      <div className="pt-14 wrapper">
        <div data-aos="fade-up" className="z-0 relative text-center space-y-3">
          <h2 className="text1 border-b w-fit mx-auto pb-2 border-yellowClr">
            <span className="font-glacial text-yellowClr">Specs</span> That Fit
            Every <span className="font-glacial text-yellowClr">Industry</span>
          </h2>
          <p className="desc max-w-4xl mx-auto">
            We decode your specs and build tech that aligns with your industry's
            unique demands.
          </p>
        </div>
      </div>
      <div className="relative h-full pb-7 xl:pb-10">
        <div className="wrapper flex flex-wrap justify-center gap-7 pt-10">
          {industries.map((item) => (
            <div
              key={item.id}
              data-aos="fade-up"
              className="overflow-hidden w-full sm:w-[calc(100%/2-1.75rem)] xl:w-[calc(100%/4-1.75rem)]"
            >
              <div className="relative group backdrop-blur-lg space-y-5 border border-white/20 p-5 shadow-large shadow-black/20 hover:bg-yellowClr hover:text-black transition-all duration-500 aspect-square">
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover z-[-1] grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <h6 className="text4 text-yellowClr py-2 text-center">
                {item.title}
              </h6>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
