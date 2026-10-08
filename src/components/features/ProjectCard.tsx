import { ArrowUpRight } from 'lucide-react';
import { SpotlightCard } from '@/components/reactbits/SpotlightCard';
import { ColorTag, getColorTag } from '@/components/reactbits/ColorTags';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  title: string;
  category: string;
  description?: string;
  image: string;
  link?: string;
  index?: number;
  size?: 'large' | 'small';
  technologies?: string[];
}

export const ProjectCard = ({
  title,
  category,
  description,
  image,
  link,
  index,
  technologies = [],
}: ProjectCardProps) => (
  <SpotlightCard
    spotlightColor="rgba(120,140,200,0.12)"
    className="project-detail-card rounded-[22px] p-5 border border-black/[0.06] bg-white/[0.72] backdrop-blur-xl relative overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.06)]"
  >
    {/* Top highlight line */}
    <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/70 to-transparent pointer-events-none" />

    <div className="flex items-start gap-3 mb-3">
      {index !== undefined && (
        <span className="shrink-0 rounded-lg border border-black/[0.06] bg-black/[0.03] px-2 py-1 text-[10px] font-mono text-gray-400">
          {String(index).padStart(2, '0')}
        </span>
      )}
      <span className="text-[10px] uppercase tracking-wider text-gray-400 leading-5">{category}</span>
    </div>

    <h3 className="text-xl font-semibold tracking-tight text-gray-900">{title}</h3>
    {description && (
      <p className="text-[13px] text-gray-500 leading-6 mt-2 mb-4">{description}</p>
    )}

    {/* Project image */}
    <div className="relative rounded-xl overflow-hidden aspect-[16/10] bg-gray-100 border border-black/[0.05]">
      <img
        src={image}
        alt=""
        loading="lazy"
        decoding="async"
        className="w-full h-full object-cover"
      />
      <span className="absolute bottom-2 left-2 rounded-md bg-white/80 backdrop-blur-md px-2 py-1 text-[9px] text-gray-500 border border-black/[0.04]">
        Illustrative image
      </span>
    </div>

    {/* Vivid color tech tags — Aardvark-inspired neon pills */}
    {technologies.length > 0 && (
      <ul aria-label="Technologies used" className="flex flex-wrap gap-1.5 mt-4">
        {technologies.map(tech => (
          <li key={tech}>
            <motion.div whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.96 }}>
              <ColorTag tag={getColorTag(tech)} size="xs" />
            </motion.div>
          </li>
        ))}
      </ul>
    )}

    {/* Visit link with hover microinteraction */}
    {link && (
      <motion.a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="project-visit group mt-4 flex min-h-11 items-center justify-between rounded-xl border border-black/[0.08] bg-white/60 backdrop-blur-md px-4 text-xs font-medium text-gray-700 overflow-hidden relative"
        aria-label={`View ${title} project (opens in a new tab)`}
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.98 }}
      >
        {/* Aardvark button fill reveal */}
        <span className="absolute inset-0 bg-gray-900 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]" />
        <span className="relative z-10 group-hover:text-white transition-colors duration-300">
          View project
        </span>
        <ArrowUpRight
          size={16}
          aria-hidden="true"
          className="relative z-10 group-hover:text-white group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all duration-300"
        />
      </motion.a>
    )}
  </SpotlightCard>
);

export default ProjectCard;
