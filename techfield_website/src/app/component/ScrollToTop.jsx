"use client";
import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when page is scrolled down 300px
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

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 z-50 w-14 h-14 rounded-full bg-gradient-to-br from-[#990100] to-[#660000] text-white shadow-2xl hover:shadow-red-500/50 transition-all duration-300 flex items-center justify-center group ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-16 pointer-events-none"
      }`}
      aria-label="Scroll to top"
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
          strokeDashoffset={`${2 * Math.PI * 26 * (1 - scrollProgress / 100)}`}
          strokeLinecap="round"
          className="transition-all duration-150"
        />
      </svg>

      {/* Arrow icon */}
      <ArrowUp className="w-6 h-6 relative z-10 group-hover:scale-110 group-hover:-translate-y-0.5 transition-transform duration-300" />

      {/* Ripple effect on hover */}
      <span className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 group-hover:scale-150 transition-all duration-500"></span>
    </button>
  );
}
