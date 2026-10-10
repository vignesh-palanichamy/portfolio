import { useState } from 'react';
import { 
  Code2, Globe, Layers, Database, Sparkles, Terminal, 
  ShoppingBag, Palette, Move 
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ToolItem {
  name: string;
  category: 'Core' | '3D & Motion' | 'E-Commerce & Web' | 'Backend & Data';
  icon: typeof Code2;
  highlight: string;
  color: string;
}

const allTools: ToolItem[] = [
  { 
    name: 'React & Next.js', 
    category: 'Core', 
    icon: Code2, 
    highlight: 'SSR, App Router & Vercel', 
    color: '#00ecef' 
  },
  { 
    name: 'Three.js & WebGL', 
    category: '3D & Motion', 
    icon: Globe, 
    highlight: 'Interactive 3D & Shaders', 
    color: '#e6ff2b' 
  },
  { 
    name: 'GSAP & ScrollTrigger', 
    category: '3D & Motion', 
    icon: Move, 
    highlight: 'Smooth Timeline Choreography', 
    color: '#00e500' 
  },
  { 
    name: 'Barba.js Transitions', 
    category: '3D & Motion', 
    icon: Sparkles, 
    highlight: 'Fluid PJAX & Smooth Morph', 
    color: '#feb6fa' 
  },
  { 
    name: 'Shopify & E-Commerce', 
    category: 'E-Commerce & Web', 
    icon: ShoppingBag, 
    highlight: 'Liquid & Headless Stores', 
    color: '#ff9d00' 
  },
  { 
    name: 'Webflow & Figma', 
    category: 'E-Commerce & Web', 
    icon: Palette, 
    highlight: 'Responsive Design & Tokens', 
    color: '#3d3195' 
  },
  { 
    name: 'Node.js & Express', 
    category: 'Backend & Data', 
    icon: Terminal, 
    highlight: 'RESTful & Microservice APIs', 
    color: '#8dec7e' 
  },
  { 
    name: 'MongoDB & Firebase', 
    category: 'Backend & Data', 
    icon: Database, 
    highlight: 'Real-time & Document Stores', 
    color: '#ff6b35' 
  },
  { 
    name: 'Tailwind & Motion', 
    category: 'Core', 
    icon: Layers, 
    highlight: 'Design System Architecture', 
    color: '#c0d43e' 
  },
];

const categories = ['All', 'Core', '3D & Motion', 'E-Commerce & Web', 'Backend & Data'] as const;

export const ExpertArea = () => {
  const [activeCategory, setActiveCategory] = useState<typeof categories[number]>('All');

  const filteredTools = activeCategory === 'All'
    ? allTools
    : allTools.filter(t => t.category === activeCategory);

  return (
    <div className="liquid-glass rounded-[26px] p-5 relative overflow-hidden">
      {/* Header */}
      <div className="flex items-start justify-between gap-4 mb-4">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-xl font-semibold text-gray-900 tracking-tight">Technologies & Tools</h2>
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          </div>
          <p className="text-xs text-gray-500 mt-0.5">
            Full-stack engineering, 3D interaction & creative motion stack
          </p>
        </div>
      </div>

      {/* Aardvark-style Filter Pills with gesture click */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-3 pt-1 scrollbar-none mb-3 -mx-1 px-1">
        {categories.map((cat) => {
          const isSelected = activeCategory === cat;
          return (
            <motion.button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-[11px] font-semibold whitespace-nowrap px-3 py-1.5 rounded-full transition-all duration-200 border ${
                isSelected
                  ? 'bg-gray-900 text-white border-gray-900 shadow-sm'
                  : 'bg-white/60 text-gray-600 border-black/[0.06] hover:bg-white hover:text-gray-900'
              }`}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.95 }}
            >
              {cat}
            </motion.button>
          );
        })}
      </div>

      {/* Tools Grid with AnimatePresence */}
      <motion.div layout className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
        <AnimatePresence>
          {filteredTools.map((tool) => {
            const IconComponent = tool.icon;
            return (
              <motion.div
                key={tool.name}
                layout
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -3, scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className="liquid-glass-inner relative group rounded-2xl p-3.5 flex flex-col justify-between min-h-[110px] cursor-pointer overflow-hidden border border-black/[0.04] hover:border-black/[0.12] transition-colors"
              >
                {/* Subtle top color beacon */}
                <div 
                  className="absolute top-0 left-0 right-0 h-[2px] opacity-70 group-hover:opacity-100 transition-opacity" 
                  style={{ backgroundColor: tool.color }} 
                />

                <div className="flex items-center justify-between mb-2">
                  <div 
                    className="w-8 h-8 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110"
                    style={{ backgroundColor: `${tool.color}25` }}
                  >
                    <IconComponent className="w-4 h-4 text-gray-900" />
                  </div>
                  <span 
                    className="text-[9px] font-mono px-2 py-0.5 rounded-full font-bold uppercase tracking-wider"
                    style={{ backgroundColor: `${tool.color}35`, color: '#111' }}
                  >
                    {tool.category.split(' ')[0]}
                  </span>
                </div>

                <div>
                  <h3 className="text-xs font-bold text-gray-900 leading-tight group-hover:text-black">
                    {tool.name}
                  </h3>
                  <p className="text-[10px] text-gray-500 mt-0.5 line-clamp-1">
                    {tool.highlight}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};
