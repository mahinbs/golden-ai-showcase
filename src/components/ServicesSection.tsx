import React from "react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";
import { Link } from "react-router-dom";
import { useKeenSlider } from "keen-slider/react";
// import { createUrlParam } from "../../utils/helper";
import { ourServices } from "../content/ourServices";
import useScrollTriggerAnimations from "../hooks/useScrollTriggerAnimations";

const animation = { duration: 40000, easing: (t) => t };

const ServicesSection = () => {
  const scrollRef = useScrollTriggerAnimations();
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    renderMode: "performance",
    drag: true,
    slides: {
      perView: 2,
      spacing: 20,
      origin: "auto",
    },
    breakpoints: {
      "(max-width: 650px)": {
        slides: {
          perView: 1,
          spacing: 10,
        },
      },
      "(min-width: 651px)": {
        slides: {
          perView: 1.5,
          spacing: 20,
        },
      },
      "(min-width: 1024px)": {
        slides: {
          perView: 3,
          spacing: 20,
        },
      },
    },
    created(s) {
      s.moveToIdx(5, true, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
  });

  const prevClick = () => {
    if (instanceRef.current) {
      instanceRef.current.prev();
    }
  };

  const nextClick = () => {
    if (instanceRef.current) {
      instanceRef.current.next();
    }
  };
  return (
    <div className="bg-white text-black py-14">
      <div className="py-3">
        <div
          data-aos="fade-right"
          className="wrapper flex justify-between items-center gap-7"
        >
          <p className="text3 font-ibmPlex bg-yellowClr p-2 rounded-lg">
            Services
          </p>
          {/* <Link
            to="/services"
            className="w-10 h-10 flex items-center justify-center bg-yellowClr rounded-full hover:bg-black hover:text-yellowClr transition-all duration-200"
          >
            <PiCaretRightBold strokeWidth={0.5} size={30} />
          </Link> */}
        </div>
      </div>
      <div
        ref={scrollRef}
        className="wrapper pt-10 grid lg:grid-cols-[25%_1fr] gap-6"
      >
        <div className="relative space-y-4">
          <div className="h-[2px] w-full bg-black"></div>
          <h2 data-aos="fade-right" className="text1 z-[2] relative">
            <div
              data-aos="fade-right"
              className="absolute left-0 top-0 w-[3rem] h-full bg-yellowClr z-0"
            ></div>
            <span className="pl-4">
              <span className="relative z-[1] font-glacial">
                Specs <br />
                Inspired <br />
                Services
              </span>
            </span>
          </h2>
          <div className="h-[1.5px] w-full bg-black"></div>
          <p className="desc z-[2] relative">
            We don’t believe in one-size-fits-all. Your specs shape every
            service we offer
          </p>
          <div
            data-aos="fade-right"
            className="flex ml-10 gap-5 z-[2] relative"
          >
            <button
              onClick={prevClick}
              className="w-10 h-10 flex items-center justify-center rounded-full btn text-black btn hover:bg-black hover:text-yellowClr bg-yellowClr"
            >
              <PiCaretLeftBold strokeWidth={0.5} size={30} />
            </button>
            <button
              onClick={nextClick}
              className="w-10 h-10 flex items-center justify-center rounded-full btn text-black btn hover:bg-black hover:text-yellowClr bg-yellowClr"
            >
              <PiCaretRightBold strokeWidth={0.5} size={30} />
            </button>
          </div>
        </div>
        <div data-aos="fade-up" ref={sliderRef} className="keen-slider w-full">
          {ourServices.map((item) => (
            <div
              // to={`/services/${createUrlParam(item.title)}`}
              key={item.title}
              className="keen-slider__slide border-4 border-yellowClr"
            >
              <div className="bg-black hover:text-black text-white h-full px-4 py-2 shadow-large space-y-3 hover:bg-yellowClr transition-all duration-300 shadow-black/20">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="aspect-square object-cover"
                />
                <div className="space-y-2 py-2 px-1">
                  <h4 className="text3">{item.title}</h4>
                  <p className="desc">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
