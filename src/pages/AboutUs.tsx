import img1 from "../assets/aboutus/aboutus.webp";
import whyWeStarted1 from "../assets/aboutus/Why We Started 1.png";
import whyWeStarted2 from "../assets/aboutus/Why We Started 2.webp";
import founder from "../assets/Founder.webp";
import PageBanner from "../components/PageBanner";
import banner from "../assets/banners/whoweare.webp";
import partnership1 from "../assets/aboutus/Partnership 1.jpg";
import partnership2 from "../assets/aboutus/Partnership 2.png";

import visionForFuture from "../assets/aboutus/vision for future/Vision for Future.webp";

import visionForFuture1 from "../assets/aboutus/vision for future/Vision for the future 1.jpg";
import visionForFuture2 from "../assets/aboutus/vision for future/Vision for the future 2.jpg";
import visionForFuture3 from "../assets/aboutus/vision for future/Vision for the future 3.jpg";
import visionForFuture4 from "../assets/aboutus/vision for future/Vision for the future 4.jpg";
import visionForFuture5 from "../assets/aboutus/vision for future/Vision for the future 5.jpg";
import visionForFuture6 from "../assets/aboutus/vision for future/Vision for the future 6.jpg";
import CTA from "../components/CTA";
import Navigation from "@/components/Navigation";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const visionForFutureImgs = [
  visionForFuture1,
  visionForFuture2,
  visionForFuture3,
  visionForFuture4,
  visionForFuture5,
  visionForFuture6,
];

const AboutUs = () => {
  const section1Ref = useScrollAnimation({ threshold: 0.1 });
  const section2Ref = useScrollAnimation({ threshold: 0.1 });
  const section3Ref = useScrollAnimation({ threshold: 0.1 });
  const section4Ref = useScrollAnimation({ threshold: 0.1 });
  const section5Ref = useScrollAnimation({ threshold: 0.1 });
  const section6Ref = useScrollAnimation({ threshold: 0.1 });

  return (
    <>
      <Navigation />
      <PageBanner
        title="About Specslo"
        subtitle="Where your specs meet our solutions !"
        highlightedWord="Specslo"
        banner={banner}
        bottomText={
          "Our <span class='font-glacial text-yellowClr'>Story</span> Begins With Your <span class='font-glacial text-yellowClr'>Specs</span>."
        }
      />
      <section
        id="about-story"
        ref={section1Ref}
        className="py-14 relative z-0 opacity-0 translate-y-8 transition-all duration-1000"
      >
        <div className="wrapper space-y-4">
          <div className="grid md:grid-cols-[1fr,40%] gap-8 pt-10">
            <div className="space-y-6">
              <h2 className="text1 text-yellowClr border-b-2 border-yellowClr w-fit pb-2">
                Every Spec is a Story <br />
                <span className="font-glacial text-white">
                  Waiting to be Built
                </span>
              </h2>
              <p className="desc">
                At <span className="font-glacial text-yellowClr">Specslo</span>,
                we believe every specification is an opportunity to innovate.
                Founded on the idea that great technology starts with
                understanding, we transform your specs into impactful solutions
                that align with your vision and drive growth.
                <br />
                <br />
                Our name,{" "}
                <span className="font-glacial text-yellowClr">
                  “Specs”
                </span>{" "}
                (specifications) and{" "}
                <span className="font-glacial text-yellowClr">“Lo”</span>{" "}
                (“take” in Hindi), reflects our mission: to take your unique
                requirements and deliver future-ready solutions that empower you
                to thrive in an ever-evolving world.
              </p>
            </div>
            <div className="">
              <img
                loading="lazy"
                src={img1}
                className="w-full aspect-[4/3.5] object-contain"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      <section
        id="why-we-started"
        ref={section2Ref}
        className="py-14 bg-white text-black opacity-0 translate-y-8 transition-all duration-1000"
      >
        <div className="wrapper grid md:grid-cols-[1fr,35%] gap-8">
          <img
            src={whyWeStarted1}
            loading="lazy"
            className="object-contain mx-auto"
            alt=""
          />
          <div className="flex flex-col gap-5 items-end text-end">
            <div className="border-y-2 border-black py-3 w-fit">
              <h2 className="text1 z-[2] relative">
                <div className="absolute right-0 top-0 w-[3rem] h-full bg-yellowClr z-0"></div>
                <p className="pl-4">
                  <span className="relative z-[1] font-glacial">
                    Why We Started
                  </span>
                </p>
              </h2>
            </div>
            <p className="desc">
              Too many businesses settle for tools that almost fit. We saw
              founders and teams struggle with generic tech that misses the
              nuances of their workflows and ambitions.
            </p>
            <div className="flex flex-col items-end">
              <h5 className="text4">We knew there was a better way :</h5>
              <img src={whyWeStarted2} className="max-w-[20rem]" alt="" />
            </div>
          </div>
        </div>
      </section>
      <section
        id="partnership"
        ref={section3Ref}
        className="py-14 opacity-0 translate-y-8 transition-all duration-1000"
      >
        <div className="wrapper grid md:grid-cols-2 md:gap-8">
          <div className="space-y-4 mb-8 max-w-[30rem]">
            <div>
              <h4 className="text2">More Than Projects</h4>
              <h2 className="text1 border-b-2 pb-1 border-yellowClr w-fit">
                It’s a{" "}
                <span className="text-black bg-yellowClr px-1 font-glacial">
                  Partnership
                </span>
              </h2>
            </div>
            <p className="desc max-w-3xl">
              We deliver more than deliverables bringing clarity, quality, and
              care to every build so your specs evolve into solutions that grow
              with you.
            </p>
            <img
              src={partnership1}
              className="w-full object-contain !mt-10"
              loading="lazy"
              alt="Partnership"
            />
          </div>
          <img
            src={partnership2}
            className="w-full object-contain"
            loading="lazy"
            alt="Partnership"
          />
        </div>
      </section>

      <div
        id="vision"
        ref={section4Ref}
        className="py-14 bg-white text-black opacity-0 translate-y-8 transition-all duration-1000"
      >
        <div className="wrapper grid md:grid-cols-[1fr,30%] gap-8">
          <div className="grid grid-cols-3 max-w-[45rem]">
            {visionForFutureImgs.map((image, index) => (
              <div key={index}>
                <img
                  loading="lazy"
                  src={image}
                  className="w-full aspect-square object-contain mb-8"
                  alt="Vision for Future"
                />
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-5 items-end text-end">
            <div className="border-y-2 border-black py-3 w-fit">
              <h2 className="text1 z-[2] relative">
                <div className="absolute right-0 top-0 w-[3rem] h-full bg-yellowClr z-0"></div>
                <p className="pl-4">
                  <span className="relative z-[1] font-glacial">
                    Vision for the Future
                  </span>
                </p>
              </h2>
            </div>
            <p className="desc">
              We believe the future of technology lies in making work simpler
              and lives better. For us, that means using AI and intelligent
              systems to help businesses grow, teams work smarter, and,
              especially in healthcare, to empower better, more human care.
            </p>
            <div className="flex flex-col items-end">
              <img
                src={visionForFuture}
                className="max-w-[20rem]"
                alt="Vision for Future"
              />
            </div>
          </div>
        </div>
      </div>
      <section
        id="founder"
        ref={section5Ref}
        className="py-16 bg-black opacity-0 translate-y-8 transition-all duration-1000"
      >
        <div className="wrapper space-y-9">
          <div className="grid lg:grid-cols-[1fr,30%] gap-4 md:gap-8">
            <div className="space-y-3">
              <h2 className="text1 w-fit">
                From Our{" "}
                <span className="text-yellowClr font-glacial">Founder !</span>
                <hr className="border border-yellowClr" />
              </h2>
              <div className="space-y-5 py-3">
                <p className="desc pt-3">
                  Growing up, I was the kid who noticed the details others
                  missed. I played games under the name “Specs,” a reminder to
                  always focus and see what others overlook. Years later, my
                  brother Tanmay nudged me to take that mindset and build
                  something real. That is how Specslo was born.
                  <br />
                  <br />
                  As a data engineer turned founder, I saw too many businesses
                  wasting time on tech that almost fits but never truly serves
                  them. I wanted to change that.
                  <br />
                  <br />
                  Technology should not be about trends. It should help you
                  grow, adapt, and lead.
                </p>
                <br />
                <p className="desc text-yellowClr">
                  Ruchir Mandora <br />
                  Founder & CEO, Specslo
                </p>
              </div>
            </div>
            <div className="relative mx-auto before:translate-x-3 before:translate-y-3 before:bg-yellowClr before:w-full before:h-full before:absolute before:inset-0 before:z-[-1] before:rounded-3xl">
              <img
                src={founder}
                alt="Founder"
                className="h-full w-full border-4 border-black aspect-[4/3] object-cover rounded-3xl"
              />
            </div>
          </div>
        </div>
      </section>
      <section
        id="contact"
        ref={section6Ref}
        className="py-14 bg-white opacity-0 translate-y-8 transition-all duration-1000"
      >
        <CTA />
      </section>
      <ContactSection />
      <Footer />
    </>
  );
};

export default AboutUs;
