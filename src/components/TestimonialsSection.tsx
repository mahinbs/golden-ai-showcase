import { Star, Quote } from "lucide-react";
import { Card } from "@/components/ui/card";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "CTO",
      company: "MedTech Solutions",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      content: "The AI diagnostic platform they built for us has revolutionized our patient care. We've seen a 40% improvement in diagnostic accuracy and our doctors can now focus more on patient interaction rather than manual analysis.",
      rating: 5,
      industry: "Healthcare"
    },
    {
      name: "Michael Chen",
      position: "Head of Operations", 
      company: "FinanceFlow Inc",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      content: "Their trading algorithm implementation exceeded our expectations. We achieved a 234% ROI in the first quarter and the risk management features have protected us from several market downturns.",
      rating: 5,
      industry: "Finance"
    },
    {
      name: "Emily Rodriguez",
      position: "VP of Digital Strategy",
      company: "RetailMax",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      content: "The recommendation engine boosted our conversion rates by 45% and customer engagement by 60%. The implementation was seamless and the support team was incredibly responsive throughout the project.",
      rating: 5,
      industry: "E-commerce"
    },
    {
      name: "David Park",
      position: "Manufacturing Director",
      company: "AutoParts Global",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      content: "The predictive maintenance system has transformed our operations. We've reduced unexpected downtime by 70% and maintenance costs by 40%. The ROI was evident within the first month of deployment.",
      rating: 5,
      industry: "Manufacturing"
    },
    {
      name: "Jennifer Kim",
      position: "Chief Innovation Officer",
      company: "EduTech Future",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      content: "Their adaptive learning platform has personalized education for over 50,000 students. Student engagement increased by 80% and learning outcomes improved significantly across all age groups.",
      rating: 5,
      industry: "Education"
    },
    {
      name: "Robert Thompson",
      position: "CEO",
      company: "LogiFlow Solutions",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      content: "The route optimization AI reduced our delivery costs by 35% and improved customer satisfaction scores. The system learns and adapts to traffic patterns, making our logistics incredibly efficient.",
      rating: 5,
      industry: "Logistics"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < rating ? 'text-accent fill-accent' : 'text-muted-foreground'
        }`}
      />
    ));
  };

  return (
    <section id="testimonials" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Client <span className="text-accent">Success Stories</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Hear from industry leaders who've transformed their businesses 
            with our AI solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="p-6 hover:shadow-card transition-all duration-300 group cursor-pointer animate-slide-up border-border hover:border-accent/20 relative"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute top-4 right-4 text-accent/20">
                <Quote className="w-8 h-8" />
              </div>

              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-foreground group-hover:text-accent transition-colors duration-300">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.position}
                  </p>
                  <p className="text-sm text-accent font-medium">
                    {testimonial.company}
                  </p>
                </div>
              </div>

              <div className="flex items-center mb-4">
                {renderStars(testimonial.rating)}
                <span className="ml-2 text-sm bg-accent/10 text-accent px-2 py-1 rounded-full">
                  {testimonial.industry}
                </span>
              </div>

              <p className="text-muted-foreground leading-relaxed italic">
                "{testimonial.content}"
              </p>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-primary text-primary-foreground rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="animate-fade-in">
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">500+</div>
              <div className="text-primary-foreground/80">Projects Completed</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">98%</div>
              <div className="text-primary-foreground/80">Client Satisfaction</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">25+</div>
              <div className="text-primary-foreground/80">Industries Served</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">24/7</div>
              <div className="text-primary-foreground/80">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;