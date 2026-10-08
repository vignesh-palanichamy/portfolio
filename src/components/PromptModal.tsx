import React, { useEffect, useState } from 'react';
import { X, Copy, Check, Sparkles, Monitor, Layers } from 'lucide-react';
import { PromptItem } from '../types';

interface PromptModalProps {
  prompt: PromptItem | null;
  onClose: () => void;
  onCopy: (text: string, label: string) => void;
}

export const PromptModal: React.FC<PromptModalProps> = ({ prompt, onClose, onCopy }) => {
  const [copiedType, setCopiedType] = useState<string | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!prompt) return null;

  const handleCopyAction = (type: string, text: string) => {
    setCopiedType(type);
    onCopy(text, type);
    setTimeout(() => setCopiedType(null), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn">
      {/* Background click to dismiss */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Card */}
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-[#161616] border border-white/15 rounded-3xl shadow-2xl flex flex-col overflow-hidden z-10 animate-scaleUp">
        {/* Modal Header */}
        <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between bg-[#1c1c1c]/50">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-white uppercase tracking-wider">
              {prompt.category}
            </span>
            <h2 className="text-xl font-bold text-white tracking-tight">{prompt.title}</h2>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/15 flex items-center justify-center text-white/60 hover:text-white transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* Top Preview Banner */}
          <div className="relative w-full h-64 sm:h-80 rounded-2xl overflow-hidden border border-white/10 bg-black">
            <img
              src={prompt.image}
              alt={prompt.title}
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
              <p className="text-white/90 text-sm sm:text-base font-medium max-w-xl">
                {prompt.description}
              </p>
            </div>
          </div>

          {/* Engine Compatibility & Tags */}
          <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
            <div>
              <span className="text-xs text-white/40 block mb-1">Optimized for AI Engines:</span>
              <div className="flex flex-wrap gap-1.5">
                {prompt.supportedTools.map((tool) => (
                  <span
                    key={tool}
                    className="px-2.5 py-1 rounded-lg text-xs font-mono font-medium bg-white/10 text-white flex items-center gap-1"
                  >
                    <Monitor className="w-3 h-3 text-purple-300" />
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <span className="text-xs text-white/40 block mb-1">Design Tags:</span>
              <div className="flex flex-wrap gap-1.5">
                {prompt.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-0.5 rounded-full text-[11px] bg-white/5 text-white/70 border border-white/10"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Prompt Specification Viewer */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wider text-white/60 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-purple-400" />
                Ready-to-Use Website Prompt
              </span>
              <span className="text-xs text-white/40 font-mono">Markdown Format</span>
            </div>

            <div className="relative rounded-2xl border border-white/10 bg-[#0d0d0f] p-4 text-xs font-mono text-white/90 overflow-x-auto whitespace-pre-wrap max-h-72 leading-relaxed">
              {prompt.promptText}
            </div>
          </div>
        </div>

        {/* Modal Action Bar */}
        <div className="p-4 sm:p-6 border-t border-white/10 bg-[#161616] flex flex-wrap items-center justify-end gap-3">
          <button
            onClick={() => handleCopyAction('cursor', prompt.promptText)}
            className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-white text-black font-semibold text-xs sm:text-sm hover:bg-white/90 transition-all shadow-md active:scale-95"
          >
            {copiedType === 'cursor' ? (
              <>
                <Check className="w-4 h-4 text-emerald-600" />
                Copied Prompt!
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                Copy for Cursor / Claude
              </>
            )}
          </button>

          <button
            onClick={() =>
              handleCopyAction(
                'lovable',
                `Build this UI component in Lovable/Bolt:\n\n${prompt.promptText}`
              )
            }
            className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-5 py-2.5 rounded-full border border-white/20 bg-white/5 text-white font-semibold text-xs sm:text-sm hover:bg-white/10 transition-all active:scale-95"
          >
            {copiedType === 'lovable' ? (
              <>
                <Check className="w-4 h-4 text-emerald-400" />
                Copied for Lovable/Bolt!
              </>
            ) : (
              <>
                <Layers className="w-4 h-4 text-purple-300" />
                Copy for Lovable / Bolt
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
