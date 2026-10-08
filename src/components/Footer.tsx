import React from 'react';
import { Youtube, Sparkles, Terminal } from 'lucide-react';

interface FooterProps {
  onOpenMcp: () => void;
  onOpenPrompts: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenMcp, onOpenPrompts }) => {
  return (
    <footer className="w-full border-t border-white/[0.08] mt-24 bg-[#0e0e10]/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12 flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Left Brand */}
        <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-lg bg-white flex items-center justify-center text-black font-bold">
              <Sparkles className="w-3 h-3 fill-black text-black" />
            </div>
            <span className="font-extrabold text-sm tracking-tight text-white">
              MOTIONSITES<span className="text-white/40 text-[10px] ml-1 font-mono">AI</span>
            </span>
          </div>

          <span className="text-xs text-white/40">
            © Motionsites AI 2026. All rights reserved.
          </span>
        </div>

        {/* Center Links */}
        <div className="flex items-center gap-6 text-xs text-white/60">
          <button onClick={onOpenPrompts} className="hover:text-white transition-colors">
            All Prompts
          </button>
          <button onClick={onOpenMcp} className="hover:text-white transition-colors flex items-center gap-1">
            <Terminal className="w-3 h-3 text-purple-400" />
            MCP Protocol
          </button>
          <a
            href="https://designrocket.io"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition-colors"
          >
            Design Rocket
          </a>
        </div>

        {/* Right Socials */}
        <div className="flex items-center gap-3">
          <a
            href="https://www.youtube.com/@ViktorOddy"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube Channel"
            className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/15 flex items-center justify-center text-white/70 hover:text-white transition-colors"
          >
            <Youtube className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
};
