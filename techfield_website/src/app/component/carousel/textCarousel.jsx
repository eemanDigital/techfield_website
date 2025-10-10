"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "../buttons/button";
import { icons } from "@/app/icons/icon";

const TEXTS = [
  { id: 1, content: "Protecting Your Rights with Integrity and Precision" },
  { id: 2, content: "Your Legal Partner in Business and Beyond." },
  { id: 3, content: "Results-Driven Representation. Every Time" },
  { id: 4, content: "Excellence in Advocacy. Commitment to Justice." },
  { id: 5, content: "Navigating Legal Complexities with Confidence." },
  { id: 6, content: "Strategic Legal Counsel for Modern Challenges." },
];

// Define a set of unique animations
const animations = [
  {
    initial: { opacity: 0, x: -100 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 100 },
  },
  {
    initial: { opacity: 0, scale: 0.5 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.5 },
  },
  {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -50 },
  },
  {
    initial: { opacity: 0, rotate: -10 },
    animate: { opacity: 1, rotate: 0 },
    exit: { opacity: 0, rotate: 10 },
  },
];

const features = [
  "Highly Personalized Service",
  "Top Rated Trial Attorney",
  "Proven Track Record of Success",
];

const TextCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef(null);

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % TEXTS.length);
  }, []);

  useEffect(() => {
    intervalRef.current = setInterval(nextSlide, 7000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [nextSlide]);

  const currentText = TEXTS[activeIndex];
  const currentAnimation = animations[activeIndex % animations.length];

  return (
    <div className=" absolute top-35 md:top-34 right-5 md:right-0 flex flex-col   sm:px-3 px-5  max-w-2xl">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentText.id}
          initial={currentAnimation.initial}
          animate={currentAnimation.animate}
          exit={currentAnimation.exit}
          transition={{ duration: 1, ease: "easeInOut" }}
          className=" md:h-[228px] h-[150px]">
          <h1 className="  text-4xl md:text-6xl font-semibold bg-gradient-to-tl  from-blue-400 to-white bg-clip-text text-transparent  ">
            {currentText.content}
          </h1>
        </motion.div>
      </AnimatePresence>

      <Button
        text="Free Consultation"
        bg="bg-info"
        icon=""
        path="contact"
        link={true}
      />

      <div className=" text-white tracking-widest mt-5">
        {features.map((feature, index) => (
          <p key={index} className="flex items-center gap-2">
            <span className="bg-primary p-1 rounded-full flex items-center justify-center">
              {icons.check}
            </span>
            <span>{feature}</span>
          </p>
        ))}
      </div>
    </div>
  );
};

export default TextCarousel;
