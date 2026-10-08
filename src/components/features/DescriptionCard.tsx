import { MarqueeText } from '@/components/common/MarqueeText';
import { Sparkles, BookOpen, ShoppingBag, Box } from 'lucide-react';
import { motion } from 'framer-motion';

const skills = [
  'Interactive Storytelling & Web Motion',
  'Three.js 3D Viewports & Shaders',
  'GSAP ScrollTrigger Timelines',
  'Next.js 15 & React Architecture',
  'E-Commerce & Headless Storefronts',
  'Culture & EdTech Learning Platforms',
  'Barba.js Seamless Page Transitions',
  'Figma Design Systems & Tokens'
];

export const DescriptionCard = () => {
  return (
    <div className="liquid-glass rounded-[26px] p-5 flex flex-col h-full relative overflow-hidden">
      {/* Storytelling Pill Header */}
      <div className="flex items-center gap-2 mb-3">
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/[0.03] border border-black/[0.06] text-[10px] font-mono text-gray-600">
          <Sparkles className="w-3 h-3 text-amber-500" />
          Philosophy & Mission
        </span>
      </div>

      {/* Main Narrative */}
      <div className="flex-1 mb-5">
        <p className="text-gray-600 leading-relaxed text-sm sm:text-[15px]">
          I engineer digital experiences that bridge <strong className="text-gray-900 font-semibold">creative motion design</strong> and <strong className="text-gray-900 font-semibold">robust full-stack engineering</strong>. From high-conversion e-commerce storefronts to immersive educational platforms and 3D web spaces, I focus on microinteractions, kinetic typography, and butter-smooth performance.
        </p>

        {/* Aardvark-style handwritten accent annotation */}
        <div className="mt-4 flex items-center gap-3 pt-3 border-t border-black/[0.05]">
          <div className="flex -space-x-1.5">
            <span className="w-6 h-6 rounded-full bg-[#00ecef]/30 border border-white flex items-center justify-center text-[10px]">
              <Box className="w-3 h-3 text-cyan-800" />
            </span>
            <span className="w-6 h-6 rounded-full bg-[#ff9d00]/30 border border-white flex items-center justify-center text-[10px]">
              <ShoppingBag className="w-3 h-3 text-amber-800" />
            </span>
            <span className="w-6 h-6 rounded-full bg-[#8dec7e]/30 border border-white flex items-center justify-center text-[10px]">
              <BookOpen className="w-3 h-3 text-emerald-800" />
            </span>
          </div>
          <span 
            className="text-xs text-gray-500 italic font-serif tracking-tight"
            style={{ fontFamily: 'Georgia, serif' }}
          >
            “Unbox experiences worth talking about — crafted line by line.”
          </span>
        </div>
      </div>

      {/* Continuous Dynamic Marquee */}
      <div className="relative pt-1 border-t border-black/[0.04]">
        <MarqueeText items={skills} className="py-2" speed="normal" />
      </div>
    </div>
  );
};
