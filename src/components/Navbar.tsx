import React, { useState } from 'react';
import { Search, Menu, X, Sparkles, Terminal, Layers, BookOpen, Mail } from 'lucide-react';

interface NavbarProps {
  currentTab: 'gallery' | 'mcp' | 'backgrounds';
  setCurrentTab: (tab: 'gallery' | 'mcp' | 'backgrounds') => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  isSearchOpen: boolean;
  setIsSearchOpen: (open: boolean) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentTab,
  setCurrentTab,
  searchQuery,
  setSearchQuery,
  isSearchOpen,
  setIsSearchOpen,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="sticky top-0 z-40 w-full px-4 sm:px-8 py-3.5 flex items-center justify-between border-b border-white/[0.08] bg-background/80 backdrop-blur-xl">
        {/* Brand Logo */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => setCurrentTab('gallery')}
            className="flex items-center gap-2.5 text-foreground hover:opacity-90 transition-opacity group text-left"
          >
            <div className="w-8 h-8 rounded-xl bg-white flex items-center justify-center text-black font-black text-lg shadow-lg shadow-white/10 group-hover:scale-105 transition-transform">
              <Sparkles className="w-4 h-4 fill-black text-black" />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold tracking-tight text-lg text-white leading-tight">
                MOTIONSITES<span className="text-white/40 text-xs ml-1 font-mono uppercase">AI</span>
              </span>
            </div>
          </button>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-1 sm:gap-2 mr-auto ml-6 min-w-0">
          <button
            onClick={() => setCurrentTab('gallery')}
            className={`px-3.5 py-1.5 text-sm font-medium rounded-lg transition-colors flex items-center gap-1.5 ${
              currentTab === 'gallery'
                ? 'text-white bg-white/[0.08]'
                : 'text-white/60 hover:text-white hover:bg-white/[0.04]'
            }`}
          >
            Prompts
          </button>

          <button
            onClick={() => setCurrentTab('mcp')}
            className={`px-3.5 py-1.5 text-sm font-medium rounded-lg transition-colors flex items-center gap-1.5 ${
              currentTab === 'mcp'
                ? 'text-white bg-white/[0.08]'
                : 'text-white/60 hover:text-white hover:bg-white/[0.04]'
            }`}
          >
            <Terminal className="w-3.5 h-3.5" />
            <span>MCP</span>
            <span className="relative inline-flex items-center ml-0.5">
              <span className="absolute inset-0 pointer-events-none badge-border rounded-full" />
              <span className="px-1.5 py-0.5 font-bold uppercase text-[9px] superpowers-text">
                New
              </span>
            </span>
          </button>

          <button
            onClick={() => setCurrentTab('backgrounds')}
            className={`px-3.5 py-1.5 text-sm font-medium rounded-lg transition-colors flex items-center gap-1.5 ${
              currentTab === 'backgrounds'
                ? 'text-white bg-white/[0.08]'
                : 'text-white/60 hover:text-white hover:bg-white/[0.04]'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Animated Backgrounds</span>
          </button>

          <a
            href="https://designrocket.io"
            target="_blank"
            rel="noreferrer"
            className="px-3.5 py-1.5 text-white/60 text-sm font-medium rounded-lg hover:text-white hover:bg-white/[0.04] transition-colors flex items-center gap-1.5"
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Academy</span>
          </a>

          <a
            href="mailto:contact@motionsites.ai"
            className="px-3.5 py-1.5 text-white/60 text-sm font-medium rounded-lg hover:text-white hover:bg-white/[0.04] transition-colors flex items-center gap-1.5"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Contact</span>
          </a>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-2">
          {/* Search Trigger */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.03] text-white/70 hover:text-white hover:bg-white/[0.08] transition-colors inline-flex items-center gap-2 text-xs"
              aria-label="Search prompts"
            >
              <Search className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Search prompts...</span>
              <kbd className="hidden sm:inline px-1.5 py-0.5 text-[10px] bg-white/10 rounded font-mono text-white/50">
                /
              </kbd>
            </button>
          </div>

          {/* Quick MCP Badge Button */}
          <button
            onClick={() => setCurrentTab('mcp')}
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-black bg-white rounded-full hover:bg-white/90 transition-all shadow-sm"
          >
            <Terminal className="w-3 h-3" />
            Install MCP
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-white/70 hover:text-white rounded-lg hover:bg-white/5"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Expanded Search Drawer when opened */}
      {isSearchOpen && (
        <div className="w-full bg-[#181818] border-b border-white/10 px-4 sm:px-8 py-3 animate-fadeIn">
          <div className="max-w-2xl mx-auto flex items-center gap-3">
            <Search className="w-4 h-4 text-white/40" />
            <input
              type="text"
              autoFocus
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by name, category, or style (e.g. Hero, SaaS, WebGL, Brutalist)..."
              className="w-full bg-transparent text-sm text-white placeholder-white/40 focus:outline-none"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="text-xs text-white/40 hover:text-white"
              >
                Clear
              </button>
            )}
            <button
              onClick={() => setIsSearchOpen(false)}
              className="text-xs text-white/60 hover:text-white px-2 py-1 rounded bg-white/5"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[60px] z-30 bg-[#121212] border-b border-white/10 p-6 space-y-4 shadow-2xl">
          <div className="flex flex-col gap-2">
            <button
              onClick={() => {
                setCurrentTab('gallery');
                setMobileMenuOpen(false);
              }}
              className={`p-3 rounded-xl text-left text-sm font-semibold ${
                currentTab === 'gallery' ? 'bg-white/10 text-white' : 'text-white/70 hover:bg-white/5'
              }`}
            >
              Website Prompts
            </button>
            <button
              onClick={() => {
                setCurrentTab('mcp');
                setMobileMenuOpen(false);
              }}
              className={`p-3 rounded-xl text-left text-sm font-semibold flex items-center justify-between ${
                currentTab === 'mcp' ? 'bg-white/10 text-white' : 'text-white/70 hover:bg-white/5'
              }`}
            >
              <span className="flex items-center gap-2">
                <Terminal className="w-4 h-4" /> MotionSites MCP
              </span>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-300 font-bold">
                NEW
              </span>
            </button>
            <button
              onClick={() => {
                setCurrentTab('backgrounds');
                setMobileMenuOpen(false);
              }}
              className={`p-3 rounded-xl text-left text-sm font-semibold ${
                currentTab === 'backgrounds' ? 'bg-white/10 text-white' : 'text-white/70 hover:bg-white/5'
              }`}
            >
              Animated Backgrounds
            </button>
            <a
              href="https://designrocket.io"
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-xl text-left text-sm font-semibold text-white/70 hover:bg-white/5"
            >
              Design Rocket Academy
            </a>
          </div>
        </div>
      )}
    </>
  );
};
