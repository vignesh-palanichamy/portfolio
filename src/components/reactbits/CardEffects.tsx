import { useRef, type ReactNode, type CSSProperties } from "react";
import { motion, useReducedMotion } from "framer-motion";

// React Bits Spotlight Card pointer-tracking pattern, adapted to existing cards.
export function CardEffects({ children, tilt = false }: { children: ReactNode; tilt?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  return (
    <motion.div ref={ref} className="bits-card-effects" style={{ "--bits-rx": "0deg", "--bits-ry": "0deg" } as CSSProperties}
      initial={reduced ? false : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.08 }}
      transition={{ duration: reduced ? 0 : .45, ease: [.16, 1, .3, 1] }}
      onPointerMove={event => {
        if (reduced || event.pointerType !== "mouse" || !ref.current) return;
        const box = ref.current.getBoundingClientRect();
        const x = event.clientX - box.left, y = event.clientY - box.top;
        ref.current.style.setProperty("--bits-x", `${x}px`);
        ref.current.style.setProperty("--bits-y", `${y}px`);
        if (tilt) {
          ref.current.style.setProperty("--bits-rx", `${(0.5 - y / box.height) * 3}deg`);
          ref.current.style.setProperty("--bits-ry", `${(x / box.width - .5) * 3}deg`);
        }
      }}
      onPointerLeave={() => {
        ref.current?.style.setProperty("--bits-rx", "0deg");
        ref.current?.style.setProperty("--bits-ry", "0deg");
      }}>
      <div className="bits-card-surface">{children}<span className="bits-card-glare" aria-hidden="true" /></div>
    </motion.div>
  );
}
