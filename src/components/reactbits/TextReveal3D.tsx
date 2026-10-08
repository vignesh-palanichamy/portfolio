import React from "react";
import { motion } from "framer-motion";

interface TextReveal3DProps {
  text: string;
  className?: string;
  wordClassName?: string;
  perspective?: number;
  startRotationX?: number;
  staggerDelay?: number;
  duration?: number;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span" | "div";
}

export const TextReveal3D: React.FC<TextReveal3DProps> = ({
  text,
  className = "",
  wordClassName = "",
  perspective = 1000,
  startRotationX = 85,
  staggerDelay = 0.08,
  duration = 0.75,
  as: Component = "h2",
}) => {
  const words = text.split(" ");

  return (
    <Component
      className={`inline-block ${className}`}
      style={{
        perspective: `${perspective}px`,
        transformStyle: "preserve-3d",
      }}
    >
      {words.map((word, wordIndex) => (
        <span
          key={wordIndex}
          className="inline-block whitespace-nowrap mr-[0.28em] overflow-visible"
          style={{ transformStyle: "preserve-3d" }}
        >
          <motion.span
            className={`inline-block origin-bottom ${wordClassName}`}
            initial={{
              opacity: 0,
              rotateX: startRotationX,
              y: 35,
              z: -50,
              filter: "blur(6px)",
            }}
            whileInView={{
              opacity: 1,
              rotateX: 0,
              y: 0,
              z: 0,
              filter: "blur(0px)",
            }}
            viewport={{
              once: true,
              amount: 0.2,
              margin: "0px 0px -40px 0px",
            }}
            transition={{
              duration,
              delay: wordIndex * staggerDelay,
              ease: [0.16, 1, 0.3, 1],
            }}
            style={{
              transformStyle: "preserve-3d",
              backfaceVisibility: "hidden",
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </Component>
  );
};
