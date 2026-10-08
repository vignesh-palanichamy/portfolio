import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface ScrollRevealFadeProps {
  children: React.ReactNode;
  delay?: number;
  yOffset?: number;
  className?: string;
  once?: boolean;
}

export const ScrollRevealFade: React.FC<ScrollRevealFadeProps> = ({
  children,
  delay = 0,
  yOffset = 40,
  className = '',
  once = true,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once, margin: '-60px 0px' });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: yOffset }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: yOffset }}
      transition={{
        duration: 0.65,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
};
