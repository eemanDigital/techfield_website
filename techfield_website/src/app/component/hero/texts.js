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

export { TEXTS, animations };
