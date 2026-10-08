import React, { useState } from 'react';
import { Layers, Copy, Check, Play } from 'lucide-react';

interface BackgroundItem {
  id: string;
  name: string;
  category: string;
  description: string;
  cssPreviewClass: string;
  cssCode: string;
}

export const BackgroundsView: React.FC = () => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const backgrounds: BackgroundItem[] = [
    {
      id: 'aurora-superpowers',
      name: 'Superpowers Cosmic Aurora',
      category: 'Gradient Motion',
      description: 'Slow-drifting radiant purple, amber, and deep magma flare with ambient blur.',
      cssPreviewClass: 'bg-gradient-to-tr from-purple-900/60 via-amber-600/30 to-rose-900/50 animate-pulse-subtle',
      cssCode: `background: radial-gradient(80.17% 109.2% at 44.37% 35.15%, #d0b2ff 0%, #ffeeef 42.8%, #e8400d 88.38%);
filter: blur(80px);
mix-blend-mode: screen;`,
    },
    {
      id: 'cyber-mesh-grid',
      name: 'Cybernetic Wireframe Grid',
      category: '3D Geometry',
      description: '60px perspective grid with subtle neon edge glow and horizon falloff.',
      cssPreviewClass: 'bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem]',
      cssCode: `background-image: 
  linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
  linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
background-size: 64px 64px;
mask-image: radial-gradient(ellipse 60% 50% at 50% 0%, #000 70%, transparent 100%);`,
    },
    {
      id: 'deep-obsidian-stream',
      name: 'Obsidian Liquid Shimmer',
      category: 'Dark Fluid',
      description: 'Ultra-dark glossy obsidian ripples tailored for luxury SaaS & crypto products.',
      cssPreviewClass: 'bg-gradient-to-br from-[#0c0d12] via-[#161822] to-[#07080a]',
      cssCode: `background: linear-gradient(135deg, #0c0d12 0%, #161822 50%, #07080a 100%);
box-shadow: inset 0 0 100px rgba(0, 0, 0, 0.9);`,
    },
    {
      id: 'bento-radial-spotlight',
      name: 'Interactive Bento Spotlight',
      category: 'Interactive',
      description: 'Cursor-following radial spotlight illuminating 1px border cards.',
      cssPreviewClass: 'bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.15)_0,transparent_70%)]',
      cssCode: `background: radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255, 255, 255, 0.08), transparent 40%);`,
    },
  ];

  const handleCopyCode = (id: string, code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-12 space-y-12 animate-fadeIn">
      <header className="flex flex-col items-center text-center max-w-3xl mx-auto">
        <div className="relative inline-flex items-center mb-3">
          <span className="absolute inset-0 pointer-events-none badge-border rounded-full" />
          <span className="px-3.5 py-1 font-bold uppercase text-[11px] superpowers-text flex items-center gap-1.5">
            <Layers className="w-3.5 h-3.5 text-purple-300" />
            MotionSites Visuals
          </span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-black uppercase text-white tracking-tight mb-4">
          Animated Backgrounds
        </h1>
        <p className="text-white/60 text-base max-w-xl">
          High-performance CSS & Canvas animated backgrounds designed to convert, impress, and amaze.
        </p>
      </header>

      {/* Background Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {backgrounds.map((bg) => (
          <div
            key={bg.id}
            className="rounded-3xl border border-white/10 bg-[#161616] overflow-hidden flex flex-col group hover:border-white/20 transition-all duration-300 shadow-xl"
          >
            {/* Live Interactive Preview Screen */}
            <div className={`relative h-56 w-full ${bg.cssPreviewClass} flex items-center justify-center p-6 overflow-hidden`}>
              <div className="absolute inset-0 bg-black/20 pointer-events-none" />
              <div className="relative z-10 px-4 py-2 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-white/90 text-xs font-semibold flex items-center gap-2">
                <Play className="w-3 h-3 fill-white text-white" /> Live Motion Preview
              </div>
            </div>

            {/* Info and Actions */}
            <div className="p-6 flex flex-col justify-between flex-1 space-y-4">
              <div>
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <h3 className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors">
                    {bg.name}
                  </h3>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/10 text-white/70">
                    {bg.category}
                  </span>
                </div>
                <p className="text-xs text-white/50">{bg.description}</p>
              </div>

              {/* Code Snippet Box */}
              <div className="relative rounded-xl border border-white/10 bg-[#0d0d0f] p-3 text-xs font-mono text-white/80">
                <pre className="overflow-x-auto whitespace-pre-wrap leading-relaxed text-[11px] pr-20">
                  {bg.cssCode}
                </pre>
                <button
                  onClick={() => handleCopyCode(bg.id, bg.cssCode)}
                  className="absolute right-2.5 bottom-2.5 inline-flex items-center gap-1.5 px-3 py-1 rounded-lg border border-white/10 bg-white/10 hover:bg-white/20 text-white font-sans text-xs transition-colors"
                >
                  {copiedId === bg.id ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" /> Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" /> Copy CSS
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
