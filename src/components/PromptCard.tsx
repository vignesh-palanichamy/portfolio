import React, { useState } from 'react';
import { Copy, Check, Eye } from 'lucide-react';
import { PromptItem } from '../types';

interface PromptCardProps {
  prompt: PromptItem;
  onSelect: (prompt: PromptItem) => void;
  onCopyPrompt: (prompt: PromptItem, e: React.MouseEvent) => void;
  isCopied: boolean;
}

export const PromptCard: React.FC<PromptCardProps> = ({
  prompt,
  onSelect,
  onCopyPrompt,
  isCopied,
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div
      onClick={() => onSelect(prompt)}
      className="group relative rounded-2xl sm:rounded-3xl overflow-hidden bg-[#181818] border border-white/[0.08] hover:border-white/20 prompt-card-hover flex flex-col cursor-pointer transition-all duration-300"
    >
      {/* Visual Image Container */}
      <div
        className={`relative w-full overflow-hidden bg-[#222222] ${
          prompt.aspectRatio === 'tall' ? 'aspect-[4/5] sm:aspect-[3/4]' : 'aspect-[4/3]'
        }`}
      >
        {/* Shimmer skeleton before image loads */}
        {!imageLoaded && (
          <div className="absolute inset-0 bg-[#222222] overflow-hidden">
            <div className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          </div>
        )}

        {/* Thumbnail Image */}
        <img
          src={prompt.image}
          alt={prompt.title}
          loading="lazy"
          onLoad={() => setImageLoaded(true)}
          className={`w-full h-full object-cover object-top transition-all duration-500 group-hover:scale-105 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 flex items-center gap-1.5 z-10">
          <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold bg-black/60 text-white/90 backdrop-blur-md border border-white/10 uppercase tracking-wider">
            {prompt.category}
          </span>
          {prompt.isNew && (
            <span className="px-2 py-0.5 rounded-full text-[9px] font-bold bg-purple-500/80 text-white uppercase tracking-wider">
              NEW
            </span>
          )}
        </div>

        {/* Hover Overlay with Quick View button */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 pointer-events-none">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white text-black text-xs font-semibold shadow-lg">
            <Eye className="w-3.5 h-3.5" />
            View Prompt
          </span>
        </div>
      </div>

      {/* Card Footer Info */}
      <div className="p-4 sm:p-5 flex items-center justify-between gap-3">
        <div className="min-w-0">
          <h3 className="text-white font-bold text-base sm:text-lg truncate group-hover:text-purple-300 transition-colors">
            {prompt.title}
          </h3>
          <p className="text-white/40 text-xs mt-0.5 truncate">{prompt.description}</p>
        </div>

        {/* 1-Click Copy Action */}
        <button
          onClick={(e) => onCopyPrompt(prompt, e)}
          title="Copy ready prompt"
          className={`shrink-0 w-9 h-9 rounded-xl flex items-center justify-center transition-all ${
            isCopied
              ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40'
              : 'bg-white/5 hover:bg-white/15 text-white/70 hover:text-white border border-white/10'
          }`}
          aria-label={`Copy prompt for ${prompt.title}`}
        >
          {isCopied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
        </button>
      </div>
    </div>
  );
};
