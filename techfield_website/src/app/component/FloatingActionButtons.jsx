"use client";
import { useState, useEffect } from "react";
import { ArrowUp, Phone } from "lucide-react";
import { phoneNumber } from "@/data/info";

export default function FloatingActionButtons() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isCallPulsing, setIsCallPulsing] = useState(true);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show buttons when page is scrolled down 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      // Calculate scroll progress
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const scrollPercentage =
        (scrollTop / (documentHeight - windowHeight)) * 100;
      setScrollProgress(scrollPercentage);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Stop call button pulsing after 10 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsCallPulsing(false);
    }, 10000);
    return () => clearTimeout(timer);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const makeCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-4">
      {/* Call Button - Always visible */}
      <div className="relative">
        {/* Pulsing rings */}
        {isCallPulsing && (
          <>
            <span className="absolute inset-0 rounded-full bg-green-500 opacity-75 animate-ping"></span>
            <span className="absolute inset-0 rounded-full bg-green-500 opacity-50 animate-pulse"></span>
          </>
        )}

        <button
          onClick={makeCall}
          className="relative w-14 h-14 rounded-full bg-gradient-to-br from-green-500 to-green-600 text-white shadow-2xl hover:shadow-green-500/50 transition-all duration-300 flex items-center justify-center group hover:scale-110"
          aria-label="Call us"
          title={`Call ${phoneNumber}`}>
          <Phone className="w-6 h-6 relative z-10 group-hover:scale-110 transition-transform duration-300" />

          {/* Ripple effect on hover */}
          <span className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 group-hover:scale-150 transition-all duration-500"></span>
        </button>

        {/* Tooltip */}
        <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300 whitespace-nowrap">
          <div className="bg-gray-900 text-white text-sm px-3 py-2 rounded-lg shadow-lg">
            Call {phoneNumber}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 rotate-45 w-2 h-2 bg-gray-900"></div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button - Shows after scrolling */}
      <button
        onClick={scrollToTop}
        className={`w-14 h-14 rounded-full bg-gradient-to-br from-[#990100] to-[#660000] text-white shadow-2xl hover:shadow-red-500/50 transition-all duration-300 flex items-center justify-center group ${
          isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-16 pointer-events-none"
        }`}
        aria-label="Scroll to top"
        title="Back to top"
        style={{
          transform: isVisible ? "translateY(0)" : "translateY(4rem)",
        }}>
        {/* Progress ring */}
        <svg
          className="absolute inset-0 w-full h-full -rotate-90"
          viewBox="0 0 56 56">
          <circle
            cx="28"
            cy="28"
            r="26"
            fill="none"
            stroke="rgba(255, 255, 255, 0.2)"
            strokeWidth="2"
          />
          <circle
            cx="28"
            cy="28"
            r="26"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeDasharray={`${2 * Math.PI * 26}`}
            strokeDashoffset={`${
              2 * Math.PI * 26 * (1 - scrollProgress / 100)
            }`}
            strokeLinecap="round"
            className="transition-all duration-150"
          />
        </svg>

        {/* Arrow icon */}
        <ArrowUp className="w-6 h-6 relative z-10 group-hover:scale-110 group-hover:-translate-y-0.5 transition-transform duration-300" />

        {/* Ripple effect on hover */}
        <span className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 group-hover:scale-150 transition-all duration-500"></span>
      </button>
    </div>
  );
}
