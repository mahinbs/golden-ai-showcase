import { Mail, Phone, MapPin, Send, ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { ourServices } from "../content/ourServices";

const ContactSection = () => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      message: "",
      customService: "",
      requirements: [],
    },
    mode: "all",
  });

  // Watch the requirements field to conditionally show custom service input
  const watchedRequirements = watch("requirements");

  const onSubmit = async (values: {
    fullName: string;
    email: string;
    phone: string;
    message: string;
    customService: string;
    requirements: string[];
  }) => {
    try {
      // Build the basic contact information
      let body =
        "Full Name : " +
        values.fullName +
        "\n\n" +
        "Email : " +
        values.email +
        "\n\n" +
        "Phone : " +
        values.phone +
        "\n\n" +
        "Message : " +
        (values.message || "No message provided") +
        "\n\n" +
        "Selected Services : \n";

      // With react-hook-form and checkboxes, the requirements value will be an array of selected values
      // Each checkbox with the same name creates an entry in the array when checked
      const selectedServiceIds = Array.isArray(values.requirements)
        ? values.requirements
        : [values.requirements];

      // Find the selected services by matching IDs
      ourServices.forEach((service) => {
        if (selectedServiceIds.includes(service.id.toString())) {
          body += "• " + service.title + "\n";
        }
      });

      // Check if "Others" is selected and add custom service
      if (selectedServiceIds.includes("others")) {
        body += "• Others: " + (values.customService || "Not specified") + "\n";
      }

      body += "\n";

      // For now, just log the form data
      console.log("Form submitted:", body);
      alert("Form submitted successfully! We'll get back to you soon.");
      reset();
    } catch (err) {
      console.error("Form submission error:", err);
      alert("Something went wrong. Please try again.");
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section id="contact" className="py-24 bg-black text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Contact Info */}
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
              <div>Ready to Share</div>
              <div>Your <span className="text-[#ffd63c]">Specs</span> ?</div>
            </h2>
            
            {/* Yellow separator line */}
            <div className="w-full h-0.5 bg-[#ffd63c] mb-8"></div>
            
            <p className="text-lg md:text-xl text-white mb-8 leading-relaxed">
              Talk to us about your next project and see how we
              turn ideas into scalable, high-impact digital products.
            </p>

            <div className="space-y-8 mb-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#ffd63c] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-bold text-white text-lg">Email us</p>
                  <Link
                    to="mailto:support@specslo.com"
                    className="text-white hover:text-[#ffd63c] transition-colors"
                  >
                    support@specslo.com
                  </Link>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#ffd63c] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-bold text-white text-lg">Call us</p>
                  <Link
                    to="tel:+91-7597406130"
                    className="text-white hover:text-[#ffd63c] transition-colors"
                  >
                    +91-7597406130
                  </Link>
                </div>
              </div>

              <a 
                href="https://api.whatsapp.com/send/?phone=917597406130&text&type=phone_number&app_absent=0" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-start space-x-4 hover:opacity-80 transition-opacity duration-300"
              >
                <div className="w-12 h-12 bg-[#ffd63c] rounded-lg flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-bold text-white text-lg">WhatsApp us</p>
                  <p className="text-white">Quick chat support</p>
                </div>
              </a>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#ffd63c] rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-bold text-white text-lg">Visit us</p>
                  <p className="text-white">Jupiter Plaza, Sector-4, Udaipur, India</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="hero" 
                size="lg"
                className="group"
              >
                Schedule Consultation
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <Card className="p-8 animate-slide-up bg-background text-foreground">
            <h3 className="text-2xl font-bold mb-6">Get Started Today</h3>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-colors duration-300 bg-background"
                    placeholder="Enter your full name"
                    {...register("fullName", {
                      required: "Full Name is required",
                      validate: (value) => {
                        if (value.trim() === "") {
                          return "Full Name is required";
                        }
                      },
                    })}
                  />
                  {errors.fullName && (
                    <small className="text-red-500">
                      {errors.fullName.message}
                    </small>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-colors duration-300 bg-background"
                    placeholder="Enter your phone number"
                    {...register("phone", {
                      required: "Phone number is required",
                      pattern: {
                        value: /^\+?[\d\s\-()]{6,14}\d$/,
                        message: "Entered phone number is invalid",
                      },
                    })}
                  />
                  {errors.phone && (
                    <small className="text-red-500">{errors.phone.message}</small>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-colors duration-300 bg-background"
                  placeholder="Enter your email address"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                      message: "Invalid email address",
                    },
                  })}
                />
                {errors.email && (
                  <small className="text-red-500">{errors.email.message}</small>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-2">
                  Services Needed *
                </label>
                <div className="space-y-2 max-h-32 overflow-y-auto border border-border rounded-lg p-3 bg-background">
                  {ourServices.map((service) => (
                    <div key={service.id} className="flex items-center gap-2">
                      <input
                        id={service.id.toString()}
                        type="checkbox"
                        value={service.id.toString()}
                        className="rounded-md accent-primary1 w-4 h-4"
                        {...register("requirements", {
                          required: "Please select at least one requirement",
                        })}
                      />
                      <label htmlFor={service.id.toString()} className="cursor-pointer text-sm">
                        {service.title}
                      </label>
                    </div>
                  ))}
                  {/* Others option */}
                  <div className="flex items-center gap-2">
                    <input
                      id="others"
                      type="checkbox"
                      value="others"
                      className="rounded-md accent-primary1 w-4 h-4"
                      {...register("requirements", {
                        required: "Please select at least one requirement",
                      })}
                    />
                    <label htmlFor="others" className="cursor-pointer text-sm">
                      Others
                    </label>
                  </div>
                  {/* Conditional input for custom service */}
                  {watchedRequirements &&
                    Array.isArray(watchedRequirements) &&
                    watchedRequirements.includes("others") && (
                      <div className="ml-6 space-y-1">
                        <input
                          type="text"
                          placeholder="Please specify your service requirement"
                          className="w-full px-3 py-2 border border-border rounded-md text-sm bg-background"
                          {...register("customService", {
                            required: watchedRequirements?.includes("others")
                              ? "Please specify your service requirement"
                              : false,
                            validate: (value) => {
                              if (
                                watchedRequirements?.includes("others") &&
                                value.trim() === ""
                              ) {
                                return "Please specify your service requirement";
                              }
                            },
                          })}
                        />
                        {errors.customService && (
                          <small className="text-red-500 text-xs">
                            {errors.customService.message}
                          </small>
                        )}
                      </div>
                    )}
                </div>
                {errors.requirements && (
                  <small className="text-red-500">
                    {errors.requirements.message}
                  </small>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-colors duration-300 bg-background resize-none"
                  placeholder="Tell us about your project requirements, timeline, and any specific goals..."
                  {...register("message")}
                ></textarea>
              </div>

              <Button type="submit" variant="hero" size="lg" className="w-full group">
                Send Message
                <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </Card>
        </div>
      </div>

    </section>
  );
};

export default ContactSection;