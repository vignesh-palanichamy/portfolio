# MotionSites AI — Website & MCP Integration

A high-performance modern web application clone and MCP integration for **[MotionSites.ai](https://motionsites.ai/)** — Official Premium AI Website Prompts for Cursor, Claude, Lovable, and Bolt.

---

## 🚀 Features

- **Obsidian Dark Aesthetic**: Built with React, TypeScript, Tailwind CSS, Lucide Icons, and custom CSS shaders matching MotionSites.ai design system (`#121212`, glowing animated gradient "Superpowers" typography, shimmer loaders).
- **Curated Prompt Gallery**: 14+ authentic website prompt specifications covering:
  - Hero Sections (EMBER.dsgn, Digital Epoch, Aetheris Voyage, Shamoni)
  - Landing Pages (RIVR DeFi, NOVA Space Systems, Zenith Realty, AKOR Security)
  - Bento Grids & Feature Sections (Glow Features)
  - Footers (Lumina, Zenith Footer)
  - SaaS Platforms (Finlytic AI Agent, What Package Fits You)
- **1-Click Copy**: Instant prompt copy formatted for Cursor, Claude, Lovable, and Bolt.new.
- **Interactive Inspect Modal**: Inspect prompt specifications, tags, and AI engine compatibility.
- **Filters & Search**: Dynamic category filtering (`All`, `Popular`, `Apps`, `Sections`), sort options, pricing tier filtering, and real-time keyword search.
- **MCP Integration Hub**: Comprehensive setup guide for Claude Code, Cursor, Codex, and Antigravity, plus an interactive MCP query simulator.
- **Animated Backgrounds Showcase**: Direct CSS snippets and live previews for modern motion gradients, wireframe grids, and radial spotlights.

---

## 📦 Getting Started

### 1. Run Development Server
```bash
npm install
npm run dev
```
Open your browser at `http://localhost:3000`.

### 2. Build for Production
```bash
npm run build
npm run preview
```

---

## ⚡ MotionSites MCP Server

The workspace includes `.agents/mcp_config.json` configured for the MotionSites MCP endpoint:

- **Endpoint URL**: `https://xgdzyqfalbibzelpdpvr.supabase.co/functions/v1/mcp`
- **Register with Claude Code**:
  ```bash
  claude mcp add motionsites --scope user --transport http https://xgdzyqfalbibzelpdpvr.supabase.co/functions/v1/mcp
  ```
- **Register with Cursor**:
  Navigate to **Settings > MCP Servers** and add:
  - Name: `motionsites`
  - Type: `SSE / HTTP`
  - URL: `https://xgdzyqfalbibzelpdpvr.supabase.co/functions/v1/mcp`
