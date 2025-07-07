import { useState, useEffect } from "react";

export default function FormSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [isVisible, setIsVisible] = useState(false);

  // Trigger entrance animation on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const validate = () => {
    const newErrors = {
      name:
        formData.name.trim() === ""
          ? "Name is required"
          : formData.name.trim().length < 3
          ? "Name must be at least 3 characters"
          : "",
      email:
        formData.email.trim() === ""
          ? "Email is required"
          : !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
          ? "Invalid email address"
          : "",
      phone:
        formData.phone.trim() === ""
          ? "Phone number is required"
          : !/^\d{10}$/.test(formData.phone.trim())
          ? "Phone must be 10 digits"
          : "",
    };
    setErrors(newErrors);
    return Object.values(newErrors).every((e) => e === "");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const sanitizedValue = name === "name" ? value.replace(/^\s+/, "") : value;
    setFormData((prev) => ({ ...prev, [name]: sanitizedValue }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    console.log("Submitted:", formData);
  };

  return (
    <section data-form-section  className="py-10 px-4 min-h-screen  flex items-center justify-center relative overflow-hidden">
      <style jsx>{`
        @keyframes border-glow {
          0% {
            box-shadow: 0 0 20px #ffffff80, 0 0 40px #ffffff40,
              inset 0 0 20px #ffffff10;
          }
          25% {
            box-shadow: 0 0 20px #fe474780, 0 0 40px #fe474740,
              inset 0 0 20px #fe474710;
          }
          50% {
            box-shadow: 0 0 20px #00bdb780, 0 0 40px #00bdb740,
              inset 0 0 20px #00bdb710;
          }
          75% {
            box-shadow: 0 0 20px #e4ef3180, 0 0 40px #e4ef3140,
              inset 0 0 20px #e4ef3110;
          }
          100% {
            box-shadow: 0 0 20px #ffffff80, 0 0 40px #ffffff40,
              inset 0 0 20px #ffffff10;
          }
        }

        @keyframes border-color {
          0% {
            border-color: #ffffff80;
          }
          25% {
            border-color: #fe474780;
          }
          50% {
            border-color: #00bdb780;
          }
          75% {
            border-color: #e4ef3180;
          }
          100% {
            border-color: #ffffff80;
          }
        }

        @keyframes slideInUp {
          0% {
            transform: scale(0.9) translateY(40px);
            opacity: 0;
          }
          100% {
            transform: scale(1) translateY(0);
            opacity: 1;
          }
        }

        @keyframes fadeInStagger {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 0.4;
          }
          50% {
            opacity: 0.8;
          }
        }

        .glow-border {
          animation: border-glow 4s ease-in-out infinite,
            border-color 4s ease-in-out infinite;
        }

        .form-container {
          animation: ${isVisible ? "slideInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards" : "none"};
        }

        .content-item {
          opacity: 0;
          animation: ${isVisible ? "fadeInStagger 0.6s ease-out forwards" : "none"};
        }

        .content-item:nth-child(1) {
          animation-delay: 0.2s;
        }
        .content-item:nth-child(2) {
          animation-delay: 0.3s;
        }
        .content-item:nth-child(3) {
          animation-delay: 0.4s;
        }
        .content-item:nth-child(4) {
          animation-delay: 0.5s;
        }
        .content-item:nth-child(5) {
          animation-delay: 0.6s;
        }

        .input-focus-glow:focus {
          box-shadow: 0 0 0 2px #00bdb780;
          border-color: #00bdb780;
          transform: translateY(-2px);
        }

        .input-focus-glow {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .submit-button {
          background: linear-gradient(135deg, #00bdb7, #00a39d);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }

        .submit-button::before {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, #00e6de, #00bdb7);
          transition: left 0.4s ease;
        }

        .submit-button:hover::before {
          left: 100%;
        }

        .submit-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px #00bdb740;
        }

        .bg-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(60px);
          animation: float 6s ease-in-out infinite, pulse 4s ease-in-out infinite;
        }

        .bg-orb-1 {
          width: 300px;
          height: 300px;
          background: radial-gradient(circle, #00bdb760, transparent);
          top: 10%;
          left: 10%;
          animation-delay: 0s;
        }

        .bg-orb-2 {
          width: 200px;
          height: 200px;
          background: radial-gradient(circle, #fe474760, transparent);
          top: 60%;
          right: 15%;
          animation-delay: 2s;
        }

        .bg-orb-3 {
          width: 250px;
          height: 250px;
          background: radial-gradient(circle, #e4ef3160, transparent);
          bottom: 10%;
          left: 20%;
          animation-delay: 4s;
        }
      `}</style>



      <div className="w-full max-w-6xl relative z-10 form-container">
        <div className="flex flex-col md:flex-row items-center relative rounded-2xl p-5 lg:p-10 border-2 glow-border ">
          <div className="md:w-[50%] mb-8 content-item text-left">
            <h2 className="text-4xl font-bold text-white mb-3 AvantGarde-Bold">
              Stay in the loop!
            </h2>
            <p className="text-gray-400 text-base leading-relaxed AvantGarde-Bold">
              Get the good stuff before everyone else.
              <br />
              New features, drops, and creator hacks.
            </p>
          </div>

          <div className="w-full md:w-[50%] space-y-6">
            {/* Name */}
            <div className="content-item">
              <input
                type="text"
                name="name"
                autoComplete="off"
                placeholder="Your name*"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-4 py-3 bg-neutral-800/80 backdrop-blur-sm border ${
                  errors.name ? "border-red-500" : "border-neutral-700"
                } rounded-lg text-white placeholder-gray-400 focus:outline-none input-focus-glow`}
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-2">{errors.name}</p>
              )}
            </div>

            {/* Email */}
            <div className="content-item">
              <input
                type="email"
                name="email"
                autoComplete="off"
                placeholder="Your Email*"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-3 bg-neutral-800/80 backdrop-blur-sm border ${
                  errors.email ? "border-red-500" : "border-neutral-700"
                } rounded-lg text-white placeholder-gray-400 focus:outline-none input-focus-glow`}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-2">{errors.email}</p>
              )}
            </div>

            {/* Phone */}
            <div className="content-item">
              <input
                type="text"
                name="phone"
                inputMode="numeric"
                pattern="\d*"
                autoComplete="off"
                placeholder="Your Phone Number*"
                value={formData.phone}
                onChange={(e) => {
                  const numeric = e.target.value.replace(/\D/g, "");
                  if (numeric.length <= 10) {
                    setFormData((prev) => ({ ...prev, phone: numeric }));
                    setErrors((prev) => ({ ...prev, phone: "" }));
                  }
                }}
                onKeyDown={(e) => {
                  const invalidChars = ["e", "E", "+", "-", ".", ","];
                  if (invalidChars.includes(e.key)) {
                    e.preventDefault();
                  }
                }}
                className={`w-full px-4 py-3 bg-neutral-800/80 backdrop-blur-sm border ${
                  errors.phone ? "border-red-500" : "border-neutral-700"
                } rounded-lg text-white placeholder-gray-400 focus:outline-none input-focus-glow`}
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-2">{errors.phone}</p>
              )}
            </div>

            <button
              type="submit"
              onClick={handleSubmit}
              className="w-full py-3 px-6 text-black hover:text-white font-semibold rounded-xl submit-button cursor-pointer content-item relative z-10"
            >
              <span className="relative z-10">Submit</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}