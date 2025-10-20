"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "../buttons/button";
import { icons } from "@/app/icons/icon";
import TEXTS from "./texts";
import TechBackground from "../techBackground";
import animations from "./carouselAnimation";

const features = [
  "Highly Personalized Service",
  "Top Rated Trial Attorney",
  "Proven Track Record of Success",
];

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
  const animation = animations[Math.floor(Math.random() * animations.length)];

  return (
    <div className="relative h-screen w-full overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Subtle animated background */}
      <TechBackground />

      {/* Text Section */}
      <div className="absolute   top-1/3 left-6 md:left-16 z-10 max-w-3xl">
        <AnimatePresence mode="wait">
          <motion.h1
            key={currentText.id}
            initial={animation.initial}
            animate={animation.animate}
            exit={animation.exit}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="text-3xl md:text-5xl h-[188px] font-extrabold text-white leading-tight tracking-tight">
            {currentText.content}
          </motion.h1>
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-6">
          <Button
            text="Free Consultation"
            bg="bg-white text-red-900 font-bold hover:bg-gray-200"
            path="contact"
            link={true}
          />
        </motion.div>

        {/* <div className="mt-8 text-white/90 tracking-wider space-y-2">
          {features.map((feature, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 + i * 0.15, duration: 0.6 }}
              className="flex items-center gap-1 text-sm md:text-base">
              <span className="bg-primary p-1 rounded-full flex items-center justify-center">
                {icons.check}
              </span>
              {feature}
            </motion.p>
          ))}
        </div> */}
      </div>

      {/* Dots Navigation */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3 z-10">
        {TEXTS.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === activeIndex
                ? "bg-white scale-125"
                : "bg-white/40 hover:bg-white/60"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
