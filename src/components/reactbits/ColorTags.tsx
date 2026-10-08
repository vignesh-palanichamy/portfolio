import React from 'react';

interface ColorTag {
  label: string;
  bg: string;
  color: string;
}

interface ColorTagsProps {
  tags: ColorTag[];
  className?: string;
}

// Aardvark-inspired vivid neon tag system
const presetColors: ColorTag[] = [
  { label: 'React.js',    bg: '#00ecef', color: '#000' },
  { label: 'Next.js',     bg: '#1d1d1f', color: '#fff' },
  { label: 'Three.js',    bg: '#e6ff2b', color: '#000' },
  { label: 'Node.js',     bg: '#8dec7e', color: '#000' },
  { label: 'MongoDB',     bg: '#ff9d00', color: '#000' },
  { label: 'TypeScript',  bg: '#3d3195', color: '#fff' },
  { label: 'Tailwind',    bg: '#f6f4b6', color: '#000' },
  { label: 'WebGL',       bg: '#ff6b35', color: '#fff' },
  { label: 'GSAP',        bg: '#00e500', color: '#000' },
  { label: 'Firebase',    bg: '#ffca28', color: '#000' },
  { label: 'Python',      bg: '#c0d43e', color: '#000' },
  { label: 'AI/ML',       bg: '#e040fb', color: '#fff' },
];

export const colorTagPresets = presetColors;

export const ColorTag: React.FC<{ tag: ColorTag; size?: 'sm' | 'xs' }> = ({ tag, size = 'sm' }) => {
  const sizeClasses = size === 'xs'
    ? 'px-2 py-0.5 text-[9px] rounded-md'
    : 'px-2.5 py-1 text-[10px] rounded-lg';

  return (
    <span
      className={`inline-flex items-center font-semibold tracking-wide transition-transform hover:scale-105 ${sizeClasses}`}
      style={{ backgroundColor: tag.bg, color: tag.color }}
    >
      {tag.label}
    </span>
  );
};

export const ColorTags: React.FC<ColorTagsProps> = ({ tags, className = '' }) => (
  <div className={`flex flex-wrap gap-1.5 ${className}`}>
    {tags.map(tag => (
      <ColorTag key={tag.label} tag={tag} />
    ))}
  </div>
);

// Auto-assigns a color from presets by label, fallback to gray
export function getColorTag(label: string): ColorTag {
  const found = presetColors.find(p => p.label.toLowerCase() === label.toLowerCase());
  return found ?? { label, bg: 'rgba(0,0,0,0.06)', color: '#3a3a3c' };
}
