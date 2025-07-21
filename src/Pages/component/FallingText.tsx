import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const fallingTexts = [
  "Design",
  "Develop",
  "Deploy",
  "Optimize",
  "Maintain",
  "Scale",
  "Secure",
  "Test",
];

export const FallingText = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });

  return (
    <div
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden bg-black text-white"
    >
      {fallingTexts.map((text, i) => {
        // Generate random x offset for scatter effect
        const randomX = Math.floor(Math.random() * window.innerWidth - 100);

        return (
          <motion.div
            key={i}
            initial={{ y: -100, opacity: 0 }}
            animate={
              isInView
                ? {
                    y: "80vh",
                    x: randomX,
                    opacity: 1,
                    rotate: Math.random() * 20 - 10,
                  }
                : {}
            }
            transition={{
              delay: i * 0.2,
              duration: 1,
              type: "spring",
              damping: 8,
            }}
            className="absolute top-0 text-2xl font-bold"
          >
            {text}
          </motion.div>
        );
      })}
    </div>
  );
};
