import { useState, useEffect, ElementType } from "react";
import { motion } from "framer-motion";

type Props = {
  loopTexts: string[];
  as?: ElementType; // default to h1 if not provided
  className?: string;
  style?: React.CSSProperties;
};

export const LoopText = ({
  loopTexts,
  as: Tag = "h1", // default tag
  className,
  style,
}: Props) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % loopTexts.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [loopTexts.length]);

  return (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Tag
        className={className}
        style={{
          textAlign: "center",
          fontWeight: "bold",
          // marginTop: "2rem",
          ...style,
        }}
      >
        {loopTexts[index]}
      </Tag>
    </motion.div>
  );
};
