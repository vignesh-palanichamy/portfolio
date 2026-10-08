import React from 'react';
import { Sparkles, Terminal, Copy } from 'lucide-react';

interface HeroProps {
  onInstallMcp: () => void;
  onBrowse: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onInstallMcp, onBrowse }) => {
  return (
    <div className="relative overflow-hidden w-full pt-12 sm:pt-16 pb-10 px-4 sm:px-6">
      {/* Subtle radial ambient background glow */}
      <div
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[450px] opacity-25 blur-[120px]"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(168, 85, 247, 0.4) 0%, rgba(234, 88, 12, 0.2) 40%, transparent 70%)',
        }}
      />

      <header className="flex flex-col items-center max-w-4xl mx-auto text-center relative z-10">
        {/* Top Fresh Drops Badge */}
        <div className="relative inline-flex items-center mb-3">
          <span className="absolute inset-0 pointer-events-none badge-border rounded-full" />
          <span className="px-3 py-1 font-bold uppercase text-[11px] tracking-wider superpowers-text flex items-center gap-1.5">
            <Sparkles className="w-3 h-3 text-purple-300" />
            Fresh Drops Everyday
          </span>
        </div>

        {/* Main Title */}
        <h1
          className="text-4xl sm:text-6xl md:text-7xl font-black uppercase text-center mb-4 leading-[1.05] tracking-tight text-white"
          style={{ letterSpacing: '-0.035em' }}
        >
          <div>
            Unlock <em className="italic font-serif font-light text-white/90">your</em> AI
          </div>
          <div>
            Design{' '}
            <span className="relative inline-block">
              {/* Primary sharp gradient text */}
              <span className="animate-gradient-shift superpowers-text select-none">
                Superpowers
              </span>
              {/* Glowing soft blur underneath */}
              <span
                className="animate-gradient-shift superpowers-glow absolute inset-0 pointer-events-none select-none"
                aria-hidden="true"
              >
                Superpowers
              </span>
            </span>
          </div>
        </h1>

        {/* Subtitle */}
        <p className="text-white/60 font-medium text-base sm:text-lg max-w-xl mx-auto mb-8 leading-relaxed">
          Build beautiful landing pages in minutes with our ready-to-use prompts. Just copy, paste,
          and launch on Lovable, Bolt, Cursor, and Claude.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={onBrowse}
            className="flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-white text-black font-semibold text-sm hover:bg-white/90 transition-all shadow-lg shadow-white/5 active:scale-95"
          >
            <Copy className="w-4 h-4" />
            Explore 500+ Prompts
          </button>

          <button
            onClick={onInstallMcp}
            className="flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-white/20 bg-white/5 text-white font-semibold text-sm hover:bg-white/10 hover:border-white/30 transition-all active:scale-95 backdrop-blur-md"
          >
            <Terminal className="w-4 h-4 text-purple-300" />
            Connect Agent MCP
          </button>
        </div>

        {/* Supported AI Engines Indicator */}
        <div className="mt-8 flex items-center gap-2 text-xs text-white/40">
          <span>Engine ready for</span>
          <span className="inline-flex items-center gap-1.5 font-mono text-white/70">
            <span className="px-2 py-0.5 rounded bg-white/[0.06] border border-white/[0.08]">Cursor</span>
            <span className="px-2 py-0.5 rounded bg-white/[0.06] border border-white/[0.08]">Claude</span>
            <span className="px-2 py-0.5 rounded bg-white/[0.06] border border-white/[0.08]">Lovable</span>
            <span className="px-2 py-0.5 rounded bg-white/[0.06] border border-white/[0.08]">Bolt.new</span>
          </span>
        </div>
      </header>
    </div>
  );
};
