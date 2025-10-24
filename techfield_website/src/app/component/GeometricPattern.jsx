// Animated geometric background component
import { motion } from "framer-motion";

export default function GeometricPattern() {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-20">
      {/* Top right corner pattern */}
      <div className="absolute -top-20 -right-20 w-96 h-96">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`tr-${i}`}
            className="absolute border-2 border-white/80  "
            style={{
              width: `${(i + 1) * 60}px`,
              height: `${(i + 1) * 60}px`,
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%) rotate(45deg)",
            }}
            animate={{
              rotate: [45, 90, 45],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3,
            }}
          />
        ))}
      </div>

      {/* Bottom left corner pattern */}
      <div className="absolute -bottom-20 -left-20 w-96 h-96">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={`bl-${i}`}
            className="absolute border-2 border-white/20"
            style={{
              width: `${(i + 1) * 70}px`,
              height: `${(i + 1) * 70}px`,
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
            animate={{
              rotate: [0, 360],
              borderRadius: ["0%", "30%", "0%"],
            }}
            transition={{
              duration: 15 + i * 3,
              repeat: Infinity,
              ease: "linear",
              delay: i * 0.4,
            }}
          />
        ))}
      </div>

      {/* Center floating boxes */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`float-${i}`}
          className="absolute w-16 h-16 border border-white/10"
          style={{
            left: `${20 + Math.random() * 60}%`,
            top: `${20 + Math.random() * 60}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 20 - 10, 0],
            rotate: [0, 180, 360],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 10 + Math.random() * 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5,
          }}
        />
      ))}
    </div>
  );
}
