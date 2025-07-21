import { useState, useEffect } from "react";
import { motion } from "framer-motion";
const loopTexts = [
  "Welcome to Our World",
  "We Build Modern Websites",
  "Speed. Design. Results.",
  "Start Your Project Today"
];

export const LoopTest = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % loopTexts.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.h1
      key={index}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      style={{ textAlign: "center", fontSize: "2.5rem", fontWeight: "bold", marginTop: "2rem" }}
    >
      {loopTexts[index]}
    </motion.h1>
  );
};
