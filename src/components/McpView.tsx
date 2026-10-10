import React, { useState } from 'react';
import { Terminal, Copy, Check, Sparkles, CheckCircle2, Search, ArrowRight } from 'lucide-react';

export const McpView: React.FC = () => {
  const [selectedTool, setSelectedTool] = useState<'claude' | 'cursor' | 'antigravity' | 'codex'>('claude');
  const [copiedCommand, setCopiedCommand] = useState(false);
  const [simQuery, setSimQuery] = useState('');
  const [simResult, setSimResult] = useState<string | null>(null);
  const [isSimulating, setIsSimulating] = useState(false);

  const getCommand = () => {
    switch (selectedTool) {
      case 'claude':
        return 'claude mcp add motionsites --scope user --transport http https://xgdzyqfalbibzelpdpvr.supabase.co/functions/v1/mcp';
      case 'cursor':
        return `// Add to Cursor Settings > MCP Servers:
Name: motionsites
Type: SSE / HTTP
URL: https://xgdzyqfalbibzelpdpvr.supabase.co/functions/v1/mcp`;
      case 'antigravity':
        return `// In .agents/mcp_config.json:
{
  "mcpServers": {
    "motionsites": {
      "serverUrl": "https://xgdzyqfalbibzelpdpvr.supabase.co/functions/v1/mcp"
    }
  }
}`;
      case 'codex':
        return 'codex mcp install https://xgdzyqfalbibzelpdpvr.supabase.co/functions/v1/mcp';
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(getCommand());
    setCopiedCommand(true);
    setTimeout(() => setCopiedCommand(false), 2000);
  };

  const handleSimulate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!simQuery.trim()) return;
    setIsSimulating(true);
    setSimResult(null);

    setTimeout(() => {
      setIsSimulating(false);
      setSimResult(
        `[MotionSites MCP] Found 3 matching prompt templates for "${simQuery}":\n\n` +
          `1. 🔥 EMBER.dsgn — High-octane obsidian & magma hero with dynamic 3D WebGL typography\n` +
          `2. 🌊 RIVR DeFi — Web3 dark-mode decentralized finance landing with liquidity waterfall\n` +
          `3. ⚡ Glow Features — Responsive modern bento grid with reactive radial mouse-spotlights\n\n` +
          `Your agent can now directly generate these complete React + Tailwind component files!`
      );
    }, 600);
  };

  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16 space-y-16 animate-fadeIn">
      {/* Header */}
      <header className="flex flex-col items-center text-center">
        <div className="relative inline-flex items-center mb-3">
          <span className="absolute inset-0 pointer-events-none badge-border rounded-full" />
          <span className="px-3.5 py-1 font-bold uppercase text-[11px] superpowers-text flex items-center gap-1.5">
            <Terminal className="w-3.5 h-3.5 text-purple-300" />
            MotionSites AI MCP
          </span>
        </div>

        <h1
          className="text-3xl sm:text-5xl md:text-6xl font-black uppercase text-center mb-4 leading-tight tracking-tight text-white"
          style={{ letterSpacing: '-0.03em' }}
        >
          <div>
            The design{' '}
            <span className="relative inline-block">
              <span className="animate-gradient-shift superpowers-text select-none">Superpowers</span>
              <span
                className="animate-gradient-shift superpowers-glow absolute inset-0 pointer-events-none select-none"
                aria-hidden="true"
              >
                Superpowers
              </span>
            </span>
          </div>
          <div>your AI agents are missing.</div>
        </h1>

        <p className="text-white/60 font-medium text-base sm:text-lg max-w-xl mx-auto mb-8">
          Keep the web free of AI slop. Connect your AI agents to 500+ premium curated website design prompts.
        </p>

        <div className="flex items-center gap-3">
          <button
            onClick={() => {
              const el = document.getElementById('mcp-setup-steps');
              el?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-8 py-3.5 rounded-full font-bold text-sm bg-gradient-to-t from-[#cfdef6] to-[#fafafa] text-neutral-950 shadow-xl hover:opacity-90 transition-opacity"
          >
            Setup MCP Now
          </button>
        </div>
      </header>

      {/* Setup Wizard */}
      <section id="mcp-setup-steps" className="rounded-3xl border border-white/10 bg-[#161616] p-6 sm:p-10 shadow-2xl space-y-8">
        <div className="text-center max-w-lg mx-auto">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-white/5 border border-white/10 text-white/70 mb-2">
            One command • No API key needed
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Set up in under a minute</h2>
        </div>

        {/* Step 1: Tool Picker */}
        <div className="space-y-3">
          <div className="flex items-center gap-2.5">
            <span className="w-7 h-7 rounded-full bg-white/10 text-white font-bold text-xs flex items-center justify-center border border-white/10">
              1
            </span>
            <h3 className="text-base font-semibold text-white">Select your AI Code Assistant</h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-1">
            {[
              { id: 'claude', name: 'Claude Code', icon: '✳' },
              { id: 'cursor', name: 'Cursor IDE', icon: '▲' },
              { id: 'antigravity', name: 'Antigravity', icon: '✦' },
              { id: 'codex', name: 'Codex / Other', icon: '◍' },
            ].map((tool) => (
              <button
                key={tool.id}
                onClick={() => setSelectedTool(tool.id as typeof selectedTool)}
                className={`flex flex-col items-center justify-center gap-2 p-4 rounded-2xl border transition-all ${
                  selectedTool === tool.id
                    ? 'border-white/50 bg-white/10 shadow-lg text-white'
                    : 'border-white/10 bg-white/[0.02] hover:bg-white/[0.05] text-white/70'
                }`}
              >
                <span className="text-xl">{tool.icon}</span>
                <span className="text-xs font-semibold">{tool.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Step 2: Register MCP Command */}
        <div className="space-y-3">
          <div className="flex items-center gap-2.5">
            <span className="w-7 h-7 rounded-full bg-white/10 text-white font-bold text-xs flex items-center justify-center border border-white/10">
              2
            </span>
            <h3 className="text-base font-semibold text-white">Register the MotionSites MCP Server</h3>
          </div>

          <div className="relative rounded-2xl border border-white/10 bg-[#0d0d0f] p-4 text-xs font-mono text-white/90">
            <pre className="overflow-x-auto whitespace-pre-wrap break-all pr-24 leading-relaxed">
              {getCommand()}
            </pre>
            <button
              onClick={handleCopy}
              className="absolute right-3 bottom-3 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/10 bg-white/10 hover:bg-white/20 text-white font-sans text-xs transition-colors"
            >
              {copiedCommand ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" /> Copied!
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" /> Copy
                </>
              )}
            </button>
          </div>
        </div>

        {/* Step 3: Auth & Verification */}
        <div className="space-y-3">
          <div className="flex items-center gap-2.5">
            <span className="w-7 h-7 rounded-full bg-white/10 text-white font-bold text-xs flex items-center justify-center border border-white/10">
              3
            </span>
            <h3 className="text-base font-semibold text-white">Sign in and Authorize</h3>
          </div>
          <p className="text-xs sm:text-sm text-white/60 pl-9">
            When you run the command, your browser opens automatically to approve access with your MotionSites account. Free tiers include 3 full design prompts, and pro passes unlock all 500+.
          </p>
        </div>

        {/* Step 4: Ready */}
        <div className="space-y-3">
          <div className="flex items-center gap-2.5">
            <span className="w-7 h-7 rounded-full bg-emerald-500/20 text-emerald-400 font-bold text-xs flex items-center justify-center border border-emerald-500/30">
              <CheckCircle2 className="w-4 h-4" />
            </span>
            <h3 className="text-base font-semibold text-white">You're Set!</h3>
          </div>
          <p className="text-xs sm:text-sm text-white/60 pl-9">
            Ask your AI agent for any website design (e.g. <em className="text-white/80">"Give me a futuristic aerospace landing page"</em>) and it queries real MotionSites design systems.
          </p>
        </div>
      </section>

      {/* Live Interactive MCP Simulator */}
      <section className="rounded-3xl border border-white/10 bg-[#161616] p-6 sm:p-8 space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <h3 className="text-base font-bold text-white">Interactive MCP Tool Tester</h3>
          </div>
          <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20">
            Simulated Agent Environment
          </span>
        </div>

        <p className="text-xs text-white/60">
          Test what your agent receives when querying the MotionSites MCP server tool:
        </p>

        <form onSubmit={handleSimulate} className="flex gap-2">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-white/40 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={simQuery}
              onChange={(e) => setSimQuery(e.target.value)}
              placeholder="Try: 'dark mode hero section', 'fintech landing page', 'bento grid'..."
              className="w-full bg-[#0d0d0f] border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white placeholder-white/40 focus:outline-none focus:border-white/30"
            />
          </div>
          <button
            type="submit"
            disabled={isSimulating}
            className="px-5 py-2.5 rounded-xl bg-white text-black font-semibold text-xs hover:bg-white/90 transition-all flex items-center gap-1.5 shrink-0"
          >
            {isSimulating ? 'Querying...' : 'Query MCP'}
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </form>

        {simResult && (
          <div className="rounded-2xl border border-white/10 bg-[#0d0d0f] p-4 text-xs font-mono text-emerald-400 whitespace-pre-wrap leading-relaxed animate-fadeIn">
            {simResult}
          </div>
        )}
      </section>
    </div>
  );
};
