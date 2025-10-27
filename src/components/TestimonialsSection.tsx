import { Star, Quote } from "lucide-react";
import { Card } from "@/components/ui/card";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Aishwarya Patel",
      position: "CMO",
      company: "HealthBridge India",
      image: "/assets/testimonials/1.jpg",
      content:
        "Specslo helped us rebuild our patient portal with a clean UX and secure integrations. Sign‑ups grew 38% in 8 weeks and support tickets dropped noticeably.",
      rating: 5,
    },
    {
      name: "Rohan Mehta",
      position: "Head of Operations",
      company: "FinEdge Capital",
      image: "/assets/testimonials/2.jpg",
      content:
        "Their team automated our internal reporting with reliable dashboards. Turnaround time for monthly ops reviews went from 3 days to a few hours.",
      rating: 5,
    },
    {
      name: "Surendhar Kumar",
      position: "VP, Digital",
      company: "ShopKart",
      image: "/assets/testimonials/3.jpg",
      content:
        "We migrated to a modern stack without downtime. Conversion improved by 22% and our content team can now ship updates 2x faster.",
      rating: 5,
    },
    {
      name: "Arjun Singh",
      position: "CEO",
      company: "TechNova Labs",
      image: "/assets/testimonials/4.jpg",
      content:
        "Specslo delivered exactly as promised—clear communication, predictable sprints, and code we could scale. Great partner for product builds.",
      rating: 5,
    },
    {
      name: "Rahul Sreekumar",
      position: "CTO",
      company: "DataVista Analytics",
      image: "/assets/testimonials/5.jpg",
      content:
        "Their data engineering team set up a robust ELT pipeline and observability. Our analysts finally trust the numbers.",
      rating: 5,
    },
    {
      name: "Vikram Desai",
      position: "Head of Innovation",
      company: "FutureWorks",
      image:
        "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=300&h=400",
      content:
        "From prototype to launch, the collaboration was smooth. The team is proactive, detail‑oriented, and fast.",
      rating: 5,
    },
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${
          index < rating ? "text-black fill-black" : "text-gray-400"
        }`}
      />
    ));
  };

  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 animate-fade-in">
          {/* Main headline with yellow vertical bar */}
          <div className="relative">
            <div className="absolute left-0 top-0 w-8 h-full bg-[#ffd63c]"></div>
            <div className="pl-4">
              <h2 className="text-4xl md:text-6xl font-bold text-black leading-tight relative z-10">
                <div>Client</div>
                <div>Success</div>
                <div>Stories</div>
              </h2>
            </div>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed mt-8 max-w-4xl">
            Hear from industry leaders who've transformed their businesses with
            our AI solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative max-w-3xl w-full animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Big rounded stroke (black) around the yellow card */}
              <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                <svg
                  viewBox="0 0 1200 700"
                  className="w-full h-full"
                  preserveAspectRatio="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M80 120 h420 a80 80 0 0 1 80 80 v360 a80 80 0 0 1 -80 80 h-420"
                    fill="none"
                    stroke="#000"
                    strokeWidth="18"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M1120 580 h-420 a80 80 0 0 1 -80 -80 v-360 a80 80 0 0 1 80 -80 h420"
                    fill="none"
                    stroke="#000"
                    strokeWidth="18"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              {/* Yellow inner rectangle */}
              <div className="relative bg-yellow-300 rounded-md shadow-md z-10 px-10 py-16">
                {/* top centered opening quote */}
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-20">
                  <svg
                    width="48"
                    height="36"
                    viewBox="0 0 48 36"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <text
                      x="0"
                      y="28"
                      fontSize="36"
                      fontWeight="700"
                      fill="#000"
                    >
                      "
                    </text>
                  </svg>
                </div>

                {/* Review text */}
                <div className="text-center">
                  <p className="text-gray-900 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
                    {testimonial.content}
                  </p>

                  {/* stars */}
                  <div className="mt-8 flex justify-center space-x-2">
                    {Array.from({ length: 5 }, (_, starIndex) => (
                      <svg
                        key={starIndex}
                        className="w-7 h-7 text-black"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M12 .587l3.668 7.431L23 9.75l-5.5 5.363L18.335 24 12 20.02 5.665 24 7.5 15.113 2 9.75l7.332-1.732z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>

              {/* Polaroid photo (rotated) with paperclip */}
              <div className="absolute -top-12 right-0 transform rotate-6 z-30">
                <div className="relative">
                  <div
                    className="bg-white p-2 rounded-md shadow-lg"
                    style={{ width: "120px" }}
                  >
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-28 object-cover rounded-sm block"
                      onError={(e) => {
                        e.currentTarget.src =
                          "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=300&h=400";
                      }}
                    />
                    <div className="mt-2 text-xs text-gray-600 text-center">
                      {testimonial.name}
                    </div>
                  </div>

                  {/* paperclip SVG */}
                  <svg
                    className="absolute -top-4 -right-3 w-8 h-8"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21 11.5v5a4 4 0 0 1-4 4h-6a5 5 0 0 1-5-5v-9a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v7"
                      stroke="#111827"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9 3v4"
                      stroke="#111827"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-primary text-primary-foreground rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="animate-fade-in">
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">
                500+
              </div>
              <div className="text-primary-foreground/80">
                Projects Completed
              </div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">
                98%
              </div>
              <div className="text-primary-foreground/80">
                Client Satisfaction
              </div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">
                25+
              </div>
              <div className="text-primary-foreground/80">
                Industries Served
              </div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">
                24/7
              </div>
              <div className="text-primary-foreground/80">
                Support Available
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
