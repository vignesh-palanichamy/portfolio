import React from "react";
import { motion } from "framer-motion";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  yOffset?: number;
  scale?: number;
  blur?: boolean;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  className = "",
  delay = 0,
  duration = 0.65,
  yOffset = 50,
  scale = 0.96,
  blur = true,
}) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: yOffset,
        scale,
        filter: blur ? "blur(6px)" : "none",
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
      }}
      viewport={{
        once: true,
        amount: 0.15,
        margin: "0px 0px -50px 0px",
      }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1], // Smooth cubic-bezier ease out
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
