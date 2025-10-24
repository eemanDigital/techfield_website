"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import GeometricPattern from "../GeometricPattern";

const TEXTS = [
  { id: 1, content: "Expert Legal Solutions for Your Business" },
  { id: 2, content: "Technology-Driven Legal Excellence" },
  { id: 3, content: "Your Trusted Partner in Legal Innovation" },
];

const animations = [
  {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -30 },
  },
  {
    initial: { opacity: 0, x: -40 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 40 },
  },
  {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 1.1 },
  },
];

// Check icon component
function CheckIcon() {
  return (
    <svg
      className="w-4 h-4"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={3}
        d="M5 13l4 4L19 7"
      />
    </svg>
  );
}

export default function TextCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef(null);

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % TEXTS.length);
  }, []);

  useEffect(() => {
    intervalRef.current = setInterval(nextSlide, 10000);
    return () => clearInterval(intervalRef.current);
  }, [nextSlide]);

  const currentText = TEXTS[activeIndex];
  const animation = animations[activeIndex % animations.length];

  return (
    <div className="relative h-screen w-full flex items-center justify-center text-white overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#990100] via-[#b30000] to-[#660000]"></div>

      {/* Geometric Pattern Overlay */}
      <GeometricPattern />

      {/* Subtle gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-16 mt-16">
        {/* Text Section */}
        <div className="max-w-3xl">
          {/* <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4">
            <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-semibold tracking-wide border border-white/20">
              Legal Technology Solutions
            </span>
          </motion.div> */}

          <AnimatePresence mode="wait">
            <motion.h1
              key={currentText.id}
              initial={animation.initial}
              animate={animation.animate}
              exit={animation.exit}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight mt-12  min-h-[180px] md:min-h-[200px]">
              {currentText.content}
            </motion.h1>
          </AnimatePresence>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl leading-relaxed">
            Combining legal expertise with cutting-edge technology to deliver
            exceptional results for your business.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 mb-12">
            <button className="px-8 py-4 bg-white text-[#990100] font-bold rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105">
              Free Consultation
            </button>
            <button className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg border-2 border-white/30 hover:bg-white/20 transition-all duration-300">
              Learn More
            </button>
          </motion.div>

          {/* Feature Pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-wrap gap-3">
            {["24/7 Support", "Proven Results", "Expert Team"].map(
              (feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.9 + i * 0.1 }}
                  className="flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/20">
                  <span className="bg-white text-[#990100] p-1 rounded-full flex items-center justify-center">
                    <CheckIcon />
                  </span>
                  <span className="text-sm font-medium">{feature}</span>
                </motion.div>
              )
            )}
          </motion.div>
        </div>
      </div>

      {/* Dots Navigation */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3 z-20">
        {TEXTS.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`transition-all duration-300 rounded-full ${
              index === activeIndex
                ? "w-12 h-3 bg-white"
                : "w-3 h-3 bg-white/40 hover:bg-white/60"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Decorative corner elements */}
      <div className="absolute top-0 right-0 w-32 h-32 border-t-4 border-r-4 border-white/10"></div>
      <div className="absolute bottom-0 left-0 w-32 h-32 border-b-4 border-l-4 border-white/10"></div>
    </div>
  );
}
