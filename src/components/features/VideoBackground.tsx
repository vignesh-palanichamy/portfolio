import { motion } from 'framer-motion';

interface VideoBackgroundProps {
  src: string;
  className?: string;
}

export const VideoBackground = ({ src, className = '' }: VideoBackgroundProps) => {
  return (
    <div
      className={`fixed top-0 left-0 w-screen h-screen overflow-hidden ${className}`}
      style={{ zIndex: 0 }}
    >
      {/* iOS 26 ambient gradient mesh */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse at 20% 20%, rgba(180, 200, 255, 0.45) 0%, transparent 50%),
            radial-gradient(ellipse at 80% 80%, rgba(255, 200, 230, 0.35) 0%, transparent 50%),
            radial-gradient(ellipse at 50% 50%, rgba(200, 230, 255, 0.3) 0%, transparent 60%),
            radial-gradient(ellipse at 70% 30%, rgba(220, 200, 255, 0.25) 0%, transparent 45%),
            linear-gradient(135deg, #f0f2f8 0%, #e8eaf0 40%, #f5f0f2 70%, #eef0f8 100%)
          `,
        }}
      />

      {/* Aardvark-style animated organic blob — slow float */}
      <motion.div
        className="absolute pointer-events-none select-none"
        style={{
          top: '-10%',
          left: '-15%',
          width: '70%',
          height: '70%',
          background: 'radial-gradient(ellipse, rgba(180,200,255,0.22) 0%, transparent 70%)',
          borderRadius: '60% 40% 55% 45% / 50% 60% 40% 50%',
          filter: 'blur(40px)',
        }}
        animate={{
          borderRadius: [
            '60% 40% 55% 45% / 50% 60% 40% 50%',
            '45% 55% 40% 60% / 60% 45% 55% 40%',
            '55% 45% 65% 35% / 40% 55% 45% 60%',
            '60% 40% 55% 45% / 50% 60% 40% 50%',
          ],
          x: [0, 20, -10, 0],
          y: [0, -15, 10, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Second blob — pink/rose bottom-right */}
      <motion.div
        className="absolute pointer-events-none select-none"
        style={{
          bottom: '-10%',
          right: '-10%',
          width: '55%',
          height: '55%',
          background: 'radial-gradient(ellipse, rgba(255,200,230,0.25) 0%, transparent 70%)',
          borderRadius: '45% 55% 40% 60% / 55% 40% 60% 45%',
          filter: 'blur(50px)',
        }}
        animate={{
          borderRadius: [
            '45% 55% 40% 60% / 55% 40% 60% 45%',
            '60% 40% 55% 45% / 40% 60% 45% 55%',
            '50% 50% 45% 55% / 60% 45% 55% 40%',
            '45% 55% 40% 60% / 55% 40% 60% 45%',
          ],
          x: [0, -25, 15, 0],
          y: [0, 20, -10, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 4,
        }}
      />

      {/* Third blob — cyan accent mid-left */}
      <motion.div
        className="absolute pointer-events-none select-none"
        style={{
          top: '40%',
          left: '-5%',
          width: '40%',
          height: '40%',
          background: 'radial-gradient(ellipse, rgba(0,236,239,0.12) 0%, transparent 70%)',
          borderRadius: '55% 45% 60% 40% / 45% 60% 40% 55%',
          filter: 'blur(45px)',
        }}
        animate={{
          borderRadius: [
            '55% 45% 60% 40% / 45% 60% 40% 55%',
            '40% 60% 45% 55% / 60% 40% 55% 45%',
            '50% 50% 55% 45% / 50% 55% 45% 50%',
            '55% 45% 60% 40% / 45% 60% 40% 55%',
          ],
          y: [0, -30, 15, 0],
        }}
        transition={{
          duration: 26,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 8,
        }}
      />

      {/* Faint video texture layer */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover opacity-[0.04] mix-blend-overlay"
      >
        <source src={src} type="video/mp4" />
      </video>
    </div>
  );
};