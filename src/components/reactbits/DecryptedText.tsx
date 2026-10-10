import React, { useEffect, useState, useRef } from "react";

interface DecryptedTextProps {
  text: string;
  speed?: number;
  maxIterations?: number;
  sequential?: boolean;
  revealDirection?: "start" | "end" | "center";
  useOriginalCharsOnly?: boolean;
  characters?: string;
  className?: string;
  parentClassName?: string;
  encryptedClassName?: string;
  animateOn?: "hover" | "view";
}

export const DecryptedText: React.FC<DecryptedTextProps> = ({
  text,
  speed = 50,
  maxIterations = 10,
  characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+",
  className = "",
  encryptedClassName = "opacity-60 font-mono text-gray-400",
  animateOn = "hover",
}) => {
  const [displayText, setDisplayText] = useState(text);
  const [, setIsHovering] = useState(false);
  const [isScrambling, setIsScrambling] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startScramble = () => {
    let iteration = 0;
    setIsScrambling(true);

    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setDisplayText(
        text
          .split("")
          .map((char, index) => {
            if (char === " ") return " ";
            if (index < iteration) {
              return text[index];
            }
            return characters[Math.floor(Math.random() * characters.length)];
          })
          .join("")
      );

      if (iteration >= text.length) {
        setIsScrambling(false);
        if (intervalRef.current) clearInterval(intervalRef.current);
      }

      iteration += 1 / (maxIterations / text.length);
    }, speed);
  };

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <span
      className={`inline-block cursor-default select-none ${className}`}
      onMouseEnter={() => {
        setIsHovering(true);
        if (animateOn === "hover") startScramble();
      }}
      onMouseLeave={() => setIsHovering(false)}
    >
      <span className={isScrambling ? encryptedClassName : ""}>
        {displayText}
      </span>
    </span>
  );
};
