"use client";

import Link from "next/link";
import { useState } from "react";
import { FaInstagram, FaFacebook, FaXTwitter, FaTiktok } from "react-icons/fa6";
import { motion } from "framer-motion";
import { ChevronDownIcon, ChevronUpIcon } from "lucide-react";
const socialLinks = [
  {
    name: "Facebook",
    icon: <FaFacebook />,
    link: "#",
  },
  {
    name: "Instagram",
    icon: <FaInstagram />,
    link: "#",
  },
  {
    name: "Twitter X",
    icon: <FaXTwitter />,
    link: "#",
  },
  {
    name: "TikTok",
    icon: <FaTiktok />,
    link: "#",
  },
];

const faqData = [
  {
    question: "What social platforms can Chatingo connect with?",
    answer:
      "Right now, Chatingo works seamlessly with Instagram DMs and WhatsApp — where most influencers connect with their fans. We're working on adding more platforms soon.",
  },
  {
    question: "What if I need help setting things up or troubleshooting?",
    answer:
      "Our support squad is ready to help anytime via chat or email. Plus, we have easy-to-follow guides and tutorials to get you started fast.",
  },
  {
    question:
      "Is Chatingo suitable for agencies managing multiple influencer accounts?",
    answer:
      "Absolutely. Chatingo is built to scale, letting agencies manage multiple clients, campaigns, and funnels from one dashboard without hassle.",
  },
  {
    question: "Can Chatingo help me track ROI on my campaigns?",
    answer:
      "Yes! Chatingo provides detailed revenue reports so you can see exactly how much each campaign is making and optimize for better profits.",
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="mx-auto px-4 py-12 text-white relative bg-white lg:p-16  
                 transition-all duration-1000 ease-out
                 backdrop-blur-sm rounded-t-[50px] lg:rounded-t-[100px] border-t-2 border-white/50"
      style={{
        background: "linear-gradient(135deg, #000000 0%, #000000 100%)",
        boxShadow:
          "0 -20px 50px rgba(0, 0, 0, 0.8), 0 -5px 20px rgba(255, 255, 255, 0.1)",
      }}
    >
      {/* Animated header */}
      {/* <div
        className="text-7xl text-center py-5 lg:py-10 
                      bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent
                      animate-pulse"
      >
        Let's goooo...
      </div> */}

      {/* Social links section with hover effects */}
      <div className="py-10 flex flex-col md:flex-row gap-4 justify-between items-center socials">
        <div className="text-sm text-gray-400 transition-colors duration-300 hover:text-white">
          connect@chatingo.com
        </div>
        <div className="flex gap-4">
          {socialLinks.map((item, index) => (
            <motion.a
              href={item.link}
              target="_blank"
              key={index}
              whileHover={{
                scale: 1.5,
                rotate: [0, 10, -10, 0],
                boxShadow: "0px 0px 15px rgba(255,255,255,0.5)",
                transition: { type: "spring", stiffness: 300, damping: 10 },
              }}
              whileTap={{ scale: 0.95 }}
              className="text-white border border-white/20 w-10 h-10 flex items-center justify-center 
                 rounded-full text-xl backdrop-blur-sm
                 transition-all duration-300 hover:bg-white/10"
            >
              {item.icon}
            </motion.a>
          ))}
        </div>
      </div>

      {/* FAQ Title with gradient */}
      <h2
        className="text-center text-4xl sm:text-3xl font-semibold mb-10
                     bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent
                     transform transition-all duration-500 hover:scale-105"
      >
        Frequently Asked Questions
      </h2>

      {/* FAQ Items with enhanced animations */}
      {faqData.map((faq, index) => (
        <div
          key={index}
          className="bg-gradient-to-r from-[#151515] to-[#1a1a1a] rounded-xl mb-8 
                     transition-all duration-500 overflow-hidden
                     hover:shadow-2xl hover:shadow-white/10
                     border border-gray-800/50 hover:border-gray-700/70
                     transform hover:scale-[1.02] hover:-translate-y-1"
          style={{
            boxShadow:
              openIndex === index
                ? "0 10px 30px rgba(255, 255, 255, 0.1), 0 0 20px rgba(255, 255, 255, 0.05)"
                : "0 5px 15px rgba(0, 0, 0, 0.3)",
          }}
        >
          <button
            className="w-full text-left flex justify-between items-center px-6 py-5 text-xl sm:text-base font-semibold cursor-pointer
                       transition-all duration-300 hover:bg-gradient-to-r hover:from-[#1a1a1a] hover:to-[#202020]"
            onClick={() => toggleFAQ(index)}
          >
            <span className="transition-colors duration-300 hover:text-gray-200">
              {faq.question}
            </span>
            <span
              className={`transition-all duration-500 text-lg sm:text-sm
                         ${
                           openIndex === index
                             ? " text-white scale-110"
                             : " text-gray-400 hover:text-white hover:scale-110"
                         }`}
            >
              {openIndex === index ? (
                <ChevronUpIcon className="w-6 h-6" />
              ) : (
                <ChevronDownIcon className="w-6 h-6" />
              )}
            </span>
          </button>

          <div
            className={`px-6 text-sm  text-gray-300 transition-all duration-700 ease-out
                       ${
                         openIndex === index
                           ? "max-h-[400px] py-4 opacity-100 transform translate-y-0"
                           : "max-h-0 overflow-hidden py-0 opacity-0 transform -translate-y-2"
                       }`}
          >
            <div className="leading-relaxed">{faq.answer}</div>
          </div>
        </div>
      ))}

      {/* Bottom gradient fade effect */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 
                      bg-gradient-to-t from-black via-black/80 to-transparent 
                      pointer-events-none"
      ></div>
    </section>
  );
};

export default Faq;
