import { ArrowUpRight, LucideIcon } from 'lucide-react';
import { CardEffects } from '@/components/reactbits/CardEffects';
import { motion } from 'framer-motion';

interface SocialCardProps {
  name: string;
  icon: LucideIcon;
  href?: string;
  badge?: string;
  accentColor?: string;
  disabled?: boolean;
}

export const SocialCard = ({
  name,
  icon: Icon,
  href = '#',
  badge,
  accentColor = '#00ecef',
  disabled = false,
}: SocialCardProps) => {
  const inner = (
    <>
      {/* Aardvark-style sweep fill reveal on hover */}
      <span
        className="absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] pointer-events-none opacity-[0.06]"
        style={{ backgroundColor: accentColor }}
      />

      {/* Icon tile */}
      <span className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-black/[0.06] bg-white/70 backdrop-blur-md shadow-sm group-hover:scale-105 group-hover:border-black/[0.12] transition-all duration-200">
        <Icon size={18} className="text-gray-600 group-hover:text-gray-900 transition-colors" aria-hidden="true" />
      </span>

      {/* Label & Optional Badge */}
      <div className="flex-1 min-w-0">
        <span className="text-sm text-gray-800 font-semibold group-hover:text-gray-950 transition-colors block truncate">
          {name}
        </span>
        {badge && (
          <span className="text-[10px] font-mono text-gray-400 group-hover:text-gray-600 transition-colors">
            {badge}
          </span>
        )}
      </div>

      {/* Arrow icon microinteraction */}
      <div className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-black/[0.02] group-hover:bg-black/[0.05] transition-colors">
        <ArrowUpRight
          size={16}
          className="text-gray-400 transition-all duration-300 group-hover:text-gray-900 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          aria-hidden="true"
        />
      </div>
    </>
  );

  return (
    <CardEffects>
      {disabled ? (
        <motion.div
          aria-disabled="true"
          className="social-row liquid-glass group relative flex items-center gap-3.5 rounded-2xl px-4 py-3.5 overflow-hidden transition-all duration-300"
          whileHover={{ y: -2 }}
        >
          {inner}
        </motion.div>
      ) : (
        <motion.a
          href={href}
          target={href.startsWith('http') ? '_blank' : undefined}
          rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
          className="social-row liquid-glass group relative flex items-center gap-3.5 rounded-2xl px-4 py-3.5 overflow-hidden transition-all duration-300"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.98 }}
        >
          {inner}
        </motion.a>
      )}
    </CardEffects>
  );
};
