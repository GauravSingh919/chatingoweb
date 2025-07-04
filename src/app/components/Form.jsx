import { useState, useEffect } from "react";
import { X } from "lucide-react";

export default function ModernGlowingForm({ setShowForm }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    city: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    city: "",
  });

  const [isVisible, setIsVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  // Trigger entrance animation immediately
  useEffect(() => {
    requestAnimationFrame(() => {
      setIsVisible(true);
    });
  }, []);

  const validate = () => {
    const newErrors = {
      name: "",
      city: "",
      email:
        formData.email.trim() === ""
          ? "Email is required"
          : !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
          ? "Invalid email address"
          : "",
    };
    setErrors(newErrors);
    return Object.values(newErrors).every((e) => e === "");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    console.log("Submitted:", formData);
  };

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setShowForm(false);
    }, 300); // Reduced to match animation duration
  };

  return (
    <div 
      className={`fixed inset-0 z-50 flex items-center justify-center px-4 transition-all duration-500 ease-out ${
        isVisible && !isClosing
          ? 'opacity-100 backdrop-blur-sm bg-black/50' 
          : 'opacity-0 backdrop-blur-none bg-black/0'
      }`}
    >
      <style jsx>{`
        @keyframes border-glow {
          0% {
            box-shadow: 0 0 20px rgba(255, 165, 0, 0.8),
              0 0 40px rgba(255, 165, 0, 0.4),
              inset 0 0 20px rgba(255, 165, 0, 0.1);
          }
          25% {
            box-shadow: 0 0 20px rgba(255, 20, 147, 0.8),
              0 0 40px rgba(255, 20, 147, 0.4),
              inset 0 0 20px rgba(255, 20, 147, 0.1);
          }
          50% {
            box-shadow: 0 0 20px rgba(0, 255, 255, 0.8),
              0 0 40px rgba(0, 255, 255, 0.4),
              inset 0 0 20px rgba(0, 255, 255, 0.1);
          }
          75% {
            box-shadow: 0 0 20px rgba(50, 255, 50, 0.8),
              0 0 40px rgba(50, 255, 50, 0.4),
              inset 0 0 20px rgba(50, 255, 50, 0.1);
          }
          100% {
            box-shadow: 0 0 20px rgba(255, 165, 0, 0.8),
              0 0 40px rgba(255, 165, 0, 0.4),
              inset 0 0 20px rgba(255, 165, 0, 0.1);
          }
        }

        @keyframes border-color {
          0% {
            border-color: rgba(255, 165, 0, 0.8);
          }
          25% {
            border-color: rgba(255, 20, 147, 0.8);
          }
          50% {
            border-color: rgba(0, 255, 255, 0.8);
          }
          75% {
            border-color: rgba(50, 255, 50, 0.8);
          }
          100% {
            border-color: rgba(255, 165, 0, 0.8);
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

        @keyframes slideOutDown {
          0% {
            transform: scale(1) translateY(0);
            opacity: 1;
          }
          100% {
            transform: scale(0.9) translateY(-40px);
            opacity: 0;
          }
        }

        @keyframes fadeInStagger {
          0% {
            opacity: 0;
            transform: translateY(10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeOutStagger {
          0% {
            opacity: 1;
            transform: translateY(0);
          }
          100% {
            opacity: 0;
            transform: translateY(-10px);
          }
        }

        .glow-border {
          animation: border-glow 4s ease-in-out infinite,
            border-color 4s ease-in-out infinite;
        }

        .form-container {
          animation: ${isClosing 
            ? 'slideOutDown 0.3s cubic-bezier(0.4, 0, 0.6, 1) forwards' 
            : isVisible 
              ? 'slideInUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards' 
              : 'none'};
        }

        .content-enter {
          animation: fadeInStagger 0.3s ease-out forwards;
        }

        .content-exit {
          animation: fadeOutStagger 0.2s ease-out forwards;
        }

        .content-item {
          opacity: 0;
        }

        .content-item.animate-in {
          animation: fadeInStagger 0.3s ease-out forwards;
        }

        .content-item.animate-out {
          animation: fadeOutStagger 0.15s ease-out forwards;
        }

        .content-item:nth-child(1) { 
          animation-delay: ${isClosing ? '0s' : '0.1s'}; 
        }
        .content-item:nth-child(2) { 
          animation-delay: ${isClosing ? '0s' : '0.15s'}; 
        }
        .content-item:nth-child(3) { 
          animation-delay: ${isClosing ? '0s' : '0.2s'}; 
        }
        .content-item:nth-child(4) { 
          animation-delay: ${isClosing ? '0s' : '0.25s'}; 
        }
        .content-item:nth-child(5) { 
          animation-delay: ${isClosing ? '0s' : '0.3s'}; 
        }

        .input-focus-glow:focus {
          box-shadow: 0 0 0 2px rgba(0, 255, 255, 0.5);
          border-color: rgba(0, 255, 255, 0.8);
          transform: translateY(-1px);
        }

        .input-focus-glow {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .submit-button {
          background: linear-gradient(135deg, #84cc16, #65a30d);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }

        .submit-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transition: left 0.4s ease;
        }

        .submit-button:hover::before {
          left: 100%;
        }

        .submit-button:hover {
          background: linear-gradient(135deg, #65a30d, #84cc16);
          transform: translateY(-2px);
          box-shadow: 0 10px 20px rgba(132, 204, 22, 0.3);
        }

        .close-button {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .close-button:hover {
          transform: scale(1.1) rotate(90deg);
          background: rgba(255, 255, 255, 0.1);
          border-color: rgba(255, 255, 255, 0.8);
        }

        .close-container {
          opacity: 0;
          animation: ${isClosing 
            ? 'fadeOutStagger 0.15s ease-out forwards' 
            : isVisible 
              ? 'fadeInStagger 0.3s ease-out 0.35s forwards' 
              : 'none'};
        }
      `}</style>

      <div className="w-full max-w-sm form-container">
        <div className="relative rounded-2xl p-8 border-2 glow-border bg-neutral-900/95 backdrop-blur-lg">
          <div className={`text-center mb-6 content-item ${isClosing ? 'animate-out' : 'animate-in'}`}>
            <h2 className="text-2xl font-bold text-white mb-2">
              Stay in the loop!
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              Get the good stuff before everyone else.
              <br />
              New features, drops, and creator hacks.
            </p>
          </div>

          <div className="space-y-4">
            {/* Name */}
            <div className={`content-item ${isClosing ? 'animate-out' : 'animate-in'}`}>
              <input
                type="text"
                name="name"
                autoComplete="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-4 py-3 bg-neutral-800/80 backdrop-blur-sm border ${
                  errors.name ? "border-red-500" : "border-neutral-700"
                } rounded-lg text-white placeholder-gray-400 focus:outline-none input-focus-glow`}
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>

            {/* Email */}
            <div className={`content-item ${isClosing ? 'animate-out' : 'animate-in'}`}>
              <input
                type="email"
                name="email"
                autoComplete="email"
                placeholder="Your email*"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-3 bg-neutral-800/80 backdrop-blur-sm border ${
                  errors.email ? "border-red-500" : "border-neutral-700"
                } rounded-lg text-white placeholder-gray-400 focus:outline-none input-focus-glow`}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            {/* City */}
            <div className={`content-item ${isClosing ? 'animate-out' : 'animate-in'}`}>
              <input
                type="text"
                name="city"
                autoComplete="address-level2"
                placeholder="Your City"
                value={formData.city}
                onChange={handleChange}
                className={`w-full px-4 py-3 bg-neutral-800/80 backdrop-blur-sm border ${
                  errors.city ? "border-red-500" : "border-neutral-700"
                } rounded-lg text-white placeholder-gray-400 focus:outline-none input-focus-glow`}
              />
              {errors.city && (
                <p className="text-red-500 text-sm mt-1">{errors.city}</p>
              )}
            </div>

            <button
              type="submit"
              onClick={handleSubmit}
              className={`w-full py-3 px-6 text-black hover:text-white font-semibold rounded-xl submit-button cursor-pointer content-item ${isClosing ? 'animate-out' : 'animate-in'}`}
            >
              Submit
            </button>
          </div>
        </div>

        {/* Close Button */}
        <div className="flex justify-center mt-6 close-container">
          <button
            onClick={handleClose}
            className="text-white w-10 h-10 rounded-full flex items-center justify-center bg-transparent border border-white/30 hover:border-white/60 close-button cursor-pointer"
          >
            <X size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}