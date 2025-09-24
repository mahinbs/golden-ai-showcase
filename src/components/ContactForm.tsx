import { useContext } from "react";
import { SpinnerContext } from "./SpinnerContext";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { companyDetails, logo } from "../../content/constant";
import axios from "axios";
import toast from "react-hot-toast";
import { ImPhone } from "react-icons/im";
import { IoLocation, IoMail } from "react-icons/io5";
import { ourServices } from "../../content/ourServices";

const ContactForm = () => {
  const { setLoading } = useContext(SpinnerContext);
  const navigate = useNavigate();
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
    },
    mode: "all",
  });

  // Watch the requirements field to conditionally show custom service input
  const watchedRequirements = watch("requirements");

  const onSubmit = async (values) => {
    setLoading(true);
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

      const data = {
        body,
        name: "SPECSLO",
        subject: "New Contact Form Submission - Specslo",
        to: companyDetails.email,
      };

      const res = await axios.post(
        "https://send-mail-redirect-boostmysites.vercel.app/send-email",
        data
      );

      if (res.data.success) {
        toast.success(res.data.message);
        reset();
        navigate("/thank-you");
      } else {
        toast.error(res.data.message);
      }
    } catch (err) {
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };
  return (
    <section className="py-14">
      <div className="wrapper flex flex-col-reverse md:grid grid-cols-[1fr,1rem,1fr] gap-7">
        <form
          onSubmit={handleSubmit(onSubmit)}
          data-aos="fade-right"
          className="space-y-4"
        >
          <div className="grid sm:grid-cols-2 md:grid-cols-1 xl:grid-cols-2 gap-4">
            <div className="space-y-1 grid">
              <input
                type="text"
                className="p-3 outline-none border-2 border-white bg-transparent w-full"
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
            <div className="space-y-1 grid">
              <input
                type="email"
                className="p-3 outline-none border-2 border-white bg-transparent w-full"
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
          </div>
          <div className="space-y-1 grid">
            <input
              type="tel"
              className="p-3 outline-none border-2 border-white bg-transparent w-full"
              placeholder="Enter your phone number"
              {...register("phone", {
                required: "Phone number is required",
                pattern: {
                  value: /^\+?[\d\s\-()]{6,14}\d$/,
                  message: "Entered phone number is invalid",
                },
              })}
            />
            <small className="text-red-500">{errors.phone?.message}</small>
          </div>
          <div className="space-y-1 grid">
            <div className="space-y-2">
              {ourServices.map((service) => (
                <div key={service.id} className="flex items-center gap-2">
                  <input
                    id={service.id}
                    type="checkbox"
                    value={service.id}
                    className="rounded-md accent-primary1 w-4 h-4"
                    {...register("requirements", {
                      required: "Please select at least one requirement",
                    })}
                  />
                  <label htmlFor={service.id} className="cursor-pointer">
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
                <label htmlFor="others" className="cursor-pointer">
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
                      className="p-3 outline-none border-2 border-white bg-transparent w-full"
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
                      <small className="text-red-500">
                        {errors.customService.message}
                      </small>
                    )}
                  </div>
                )}
            </div>
            {errors.requirements && errors.requirements && (
              <small className="text-red-500">
                {errors.requirements.message}
              </small>
            )}
          </div>
          <button
            type="submit"
            className="btn bg-primary border border-primary text-black hover:bg-black w-full hover:text-white"
          >
            Submit Now
          </button>
        </form>
        <div className="h-full w-0.5 bg-primary" />
        <div className="flex-1 grid grid-cols-[1fr,12rem] gap-5">
          <div data-aos="fade-up" className="space-y-4 h-full col-span-2">
            <h2 className="text1">
              Ready to Share Your{" "}
              <span className="text-primary font-glacial">Specs</span> ?
            </h2>
            <div className="h-0.5 w-full bg-primary"></div>
            <p className="desc">
              Talk to us about your next project and see how we turn ideas into
              scalable, high-impact digital products.
            </p>
            <div className="space-y-4 grid sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 min-w-12 rounded-full flex items-center justify-center bg-white">
                  <ImPhone size={24} className="text-black" />
                </div>
                <Link
                  to={`tel:${companyDetails.phone}`}
                  className="desc hover:text-primary"
                >
                  {companyDetails.phone}
                </Link>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-12 h-12 min-w-12 rounded-full flex items-center justify-center bg-white">
                  <IoLocation size={28} className="text-black" />
                </div>
                <p className="desc max-w-[16rem]">{companyDetails.location}</p>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-12 h-12 min-w-12 rounded-full flex items-center justify-center bg-white">
                  <IoMail size={24} className="text-black" />
                </div>
                <Link
                  to={`mailto:${companyDetails.email}`}
                  className="desc hover:text-primary"
                >
                  {companyDetails.email}
                </Link>
              </div>
            </div>
          </div>
          <img src={logo} className="w-[12rem] col-span-1 sm:col-start-2" alt="" />
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
