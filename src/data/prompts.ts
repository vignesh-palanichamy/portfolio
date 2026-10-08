import { PromptItem } from '../types';

export const PROMPTS_DATA: PromptItem[] = [
  {
    id: 'ember-dsgn',
    title: 'EMBER.dsgn',
    category: 'Hero Section',
    type: 'Sections',
    isPopular: true,
    isNew: true,
    isLocked: false,
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
    aspectRatio: '4/3',
    description: 'High-octane industrial dark mode hero section with fiery metallic chrome reflections and dynamic 3D typography.',
    tags: ['Hero', 'Dark Mode', 'Industrial', 'WebGL', 'Chrome'],
    supportedTools: ['Cursor', 'Claude', 'Lovable', 'Bolt', 'v0'],
    promptText: `# Role: Elite Motion & Creative Frontend Engineer
Create a breathtaking hero section for "EMBER.dsgn" with an obsidian and magma aesthetic:
- **Palette**: Pitch black (#0a0a0c), ember crimson (#ff3b30), radiant amber (#ff9500), metallic gunmetal.
- **Hero Title**: Massive brutalist sans-serif headline "CRAFTING RAW DIGITAL HEAT", with dynamic chromatic aberration on mouse hover.
- **3D Background**: Floating liquid obsidian spheres with warm inner glow interacting with cursor position.
- **Interactive Badges**: Glassmorphism badge "FRESH DROPS 2026" with rotating border-gradient.
- **CTA Actions**: Primary button "Explore Catalog" with pulsing ember glow; secondary outline "Watch Reel" with video modal trigger.
- **Tech Stack**: React, Tailwind CSS, Framer Motion, Lucide icons. Fully responsive with fluid typography.`,
  },
  {
    id: 'digital-epoch',
    title: 'Digital Epoch',
    category: 'Hero Section',
    type: 'Sections',
    isPopular: true,
    isLocked: false,
    image: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=800&q=80',
    aspectRatio: '4/3',
    description: 'Cyber-minimalist hero section featuring holographic wireframes, kinetic typography, and live timecode overlays.',
    tags: ['Hero', 'Cyberpunk', 'Holographic', 'Kinetic Typography'],
    supportedTools: ['Cursor', 'Claude', 'Lovable', 'Bolt'],
    promptText: `# Role: Senior Creative Technologist
Build an ultra-modern hero section for "Digital Epoch":
- **Theme**: Cyber-editorial with neon cyan (#00f5d4) and violet (#7b2cbf) on deep void background (#08080c).
- **Header Elements**: Left-aligned UTC time clock, live system status pill "SYSTEM OPERATIONAL // V4.8", and animated audio equalizer icon.
- **Central Composition**: Giant typography "THE REVOLUTION HAS A PULSE" split into staggering motion lines that react to scroll velocity.
- **Interactive Wireframe**: Canvas-based rotating wireframe globe/mesh underneath the hero copy with smooth lerp physics.
- **Floating Pill**: Floating interactive token badge that tracks mouse coordinates with subtle tilt 3D effect.
- **Clean Code**: Zero extraneous libraries; pure Tailwind CSS + React.`,
  },
  {
    id: 'rivr-defi',
    title: 'RIVR DeFi',
    category: 'Landing Page',
    type: 'Apps',
    isPopular: true,
    isLocked: false,
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&q=80',
    aspectRatio: 'tall',
    description: 'Next-gen decentralized finance landing page with streaming liquidity waterfalls and real-time yield calculators.',
    tags: ['Landing Page', 'Web3', 'DeFi', 'Data Viz', 'Glassmorphism'],
    supportedTools: ['Cursor', 'Claude', 'Lovable', 'Bolt', 'v0'],
    promptText: `# Role: Web3 Design Systems Architect
Develop a complete high-converting landing page for "RIVR DeFi":
- **Design Philosophy**: Deep aqueous dark mode (#050b14, #0b192c) accented by bioluminescent cyan (#00ffcc) and electric sapphire (#0070f3).
- **Hero Section**:
  - Live TVL counter ticking up smoothly ($4,829,102,400+).
  - Headline: "Liquidity That Flows Unopposed".
  - Interactive Swap preview card with slippage tolerance and route visualizer.
- **Feature Bento Grid**:
  - 1. Zero-slippage cross-chain bridges.
  - 2. AI automated yield compounding agent.
  - 3. Non-custodial hardware key authentication.
- **Micro-interactions**: Ambient glow following cursor movement, shimmer buttons, and glass cards with 1px border gradients.`,
  },
  {
    id: 'nova-space',
    title: 'NOVA Space Systems',
    category: 'Landing Page',
    type: 'Apps',
    isPopular: true,
    isLocked: false,
    image: 'https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?auto=format&fit=crop&w=800&q=80',
    aspectRatio: 'tall',
    description: 'Commercial aerospace landing page with orbital telemetry widgets and interactive spacecraft model viewer.',
    tags: ['Landing Page', 'Aerospace', 'Dark Luxury', 'Futuristic'],
    supportedTools: ['Cursor', 'Claude', 'Lovable', 'Bolt'],
    promptText: `# Role: Lead UX Designer for DeepTech
Create a cinematic landing page for "NOVA Space Systems":
- **Aesthetic**: Deep aerospace matte carbon (#0d0e12), satellite gold accents (#f4b400), telemetry monospaced typography.
- **Orbit Radar Widget**: Animated radar sweep overlay in the corner displaying simulated orbital coordinates and altitude.
- **Mission Counter**: Live countdown to the next orbital launch window (T-Minus 04:18:22).
- **Payload Calculator**: Interactive slider allowing users to calculate payload mass (kg) to Low Earth Orbit vs Mars Transfer.
- **Specification Table**: Clean technical spec sheet with hover highlight states, collapsible rows, and telemetry graphs.`,
  },
  {
    id: 'orbit-engineers',
    title: 'Orbit Engineers',
    category: 'Agency',
    type: 'Apps',
    isPopular: false,
    isLocked: false,
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80',
    aspectRatio: 'tall',
    description: 'Technical digital product studio showcase with interactive blueprint grids and client metrics.',
    tags: ['Agency', 'Engineering', 'Portfolio', 'Interactive'],
    supportedTools: ['Cursor', 'Claude', 'Lovable', 'Bolt'],
    promptText: `# Role: Elite Creative Agency Developer
Build a cutting-edge creative engineering studio homepage for "Orbit Engineers":
- **Grid Layout**: Dynamic blueprint grid backdrop with 60px cell markers and coordinate numbers.
- **Case Study Slider**: 3D parallax cards showcasing client transformations with before/after metric comparisons (+340% throughput, 99.999% uptime).
- **Interactive Cursor**: Custom physics-based magnetic cursor that locks onto interactive CTA elements.
- **Client Marquee**: Infinite marquee carousel with high-contrast monochrome enterprise logos.
- **Contact Drawer**: Slide-over inquiry builder with budget selectors and instant booking calendar.`,
  },
  {
    id: 'aetheris-voyage',
    title: 'Aetheris Voyage',
    category: 'Hero Section',
    type: 'Sections',
    isPopular: true,
    isLocked: false,
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
    aspectRatio: '4/3',
    description: 'Atmospheric hero section with dreamy multi-layered spatial depth and iridescent typography.',
    tags: ['Hero', 'Spatial', 'Atmospheric', 'Gradient'],
    supportedTools: ['Cursor', 'Claude', 'Lovable', 'Bolt', 'v0'],
    promptText: `# Role: Spatial UI & Atmosphere Designer
Design an ethereal hero section for luxury autonomous flight brand "Aetheris Voyage":
- **Mood**: Twilight stratosphere, deep indigo (#0a0c1b), iridescent pearl reflections, and cloud mist overlay.
- **Typography**: Refined serif header paired with ultra-clean modern geometric sans.
- **Sound/Video Preview**: Embedded subtle ambient sound toggle and 60fps high-altitude cloud horizon loop.
- **Flight Concierge Card**: Glass card with destination selector (Tokyo → Zurich, Sub-orbital: 58 mins) and seat availability indicator.`,
  },
  {
    id: 'digital-reality',
    title: 'Digital Reality',
    category: 'Social Media',
    type: 'Apps',
    isPopular: false,
    isLocked: false,
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80',
    aspectRatio: '4/3',
    description: 'Social gaming and metaverse portal featuring stacked card swipe animations and live friend activity feeds.',
    tags: ['Social Media', 'Metaverse', 'Cards', 'Community'],
    supportedTools: ['Cursor', 'Claude', 'Lovable', 'Bolt'],
    promptText: `# Role: Interactive Web Application Engineer
Build a high-energy social gaming dashboard & landing page:
- **Card Stack**: Stacked draggable card carousel representing virtual worlds and avatar hangouts.
- **Live Activity Feed**: Streaming avatar status updates with online indicator dots and voice room indicators.
- **Gamified Badges**: Earnable 3D trophy cards with tilt reflection on cursor movement.`,
  },
  {
    id: 'zenith-realty',
    title: 'Zenith Realty',
    category: 'Landing Page',
    type: 'Apps',
    isPopular: true,
    isLocked: false,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    aspectRatio: 'tall',
    description: 'Architectural luxury real estate landing page with interactive 3D floorplans and cinematic drone showcases.',
    tags: ['Landing Page', 'Real Estate', 'Luxury', 'Architecture'],
    supportedTools: ['Cursor', 'Claude', 'Lovable', 'Bolt', 'v0'],
    promptText: `# Role: Luxury Brand Digital Experience Developer
Create a premier architectural real estate landing page for "Zenith Realty":
- **Visuals**: Full bleed architectural photography with smooth aspect ratio zoom on hover.
- **Property Highlights**: Interactive floor-by-floor breakdown with square footage, solar orientation, and materials specification.
- **Tour Booking**: Floating bottom bar with instant VIP private tour request and WhatsApp concierge button.`,
  },
  {
    id: 'glow-features',
    title: 'Glow Features',
    category: 'Features Section',
    type: 'Sections',
    isPopular: true,
    isLocked: false,
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80',
    aspectRatio: '4/3',
    description: 'Modern bento grid features section with reactive radial spotlight borders and micro-metric counters.',
    tags: ['Features Section', 'Bento Grid', 'Spotlight Effect', 'SaaS'],
    supportedTools: ['Cursor', 'Claude', 'Lovable', 'Bolt', 'v0'],
    promptText: `# Role: Design Engineer & Bento Grid Master
Construct an incredible Bento Grid features section for modern AI software:
- **Spotlight Border**: Use CSS radial-gradient mouse-tracking trick where each card's border illuminates when the cursor approaches.
- **Card 1 (2 cols)**: Code-generation preview with syntax-highlighted editor and simulated typing animation.
- **Card 2 (1 col)**: Latency meter showing sub-50ms worldwide response with live ping indicators.
- **Card 3 (1 col)**: Security compliance badges (SOC2 Type II, HIPAA, ISO 27001) in clean glass pills.
- **Card 4 (2 cols)**: Multi-model selector switch between Claude 3.5, Gemini 1.5 Pro, and GPT-4o with benchmark graph.`,
  },
  {
    id: 'akor-security',
    title: 'AKOR Security',
    category: 'Landing Page',
    type: 'Apps',
    isPopular: false,
    isLocked: false,
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80',
    aspectRatio: 'tall',
    description: 'Enterprise cybersecurity platform landing page with live global threat map and automated compliance badges.',
    tags: ['Landing Page', 'Cybersecurity', 'Enterprise', 'Dark UI'],
    supportedTools: ['Cursor', 'Claude', 'Lovable', 'Bolt'],
    promptText: `# Role: Enterprise FinTech & SecOps Frontend Specialist
Develop a high-trust enterprise cybersecurity homepage for "AKOR Security":
- **Threat Vector Visualizer**: Canvas/SVG interactive particle simulation depicting incoming blocked DDOS vectors.
- **Enterprise ROI Calculator**: Sliders for team size and cloud assets yielding estimated breach prevention savings.
- **Compliance Matrix**: Searchable compliance checklist with downloadable audit reports.`,
  },
  {
    id: 'finlytic-ai',
    title: 'Finlytic AI Agent',
    category: 'SaaS',
    type: 'Apps',
    isPopular: true,
    isLocked: false,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    aspectRatio: '4/3',
    description: 'Autonomous financial intelligence SaaS interface with real-time portfolio rebalancing and AI sentiment feeds.',
    tags: ['SaaS', 'AI Agents', 'Finance', 'Dashboard'],
    supportedTools: ['Cursor', 'Claude', 'Lovable', 'Bolt', 'v0'],
    promptText: `# Role: Autonomous Agent Interface Architect
Build a financial AI agent hero and dashboard showcase for "Finlytic":
- **Agent Terminal**: Simulated conversation terminal showing autonomous reasoning traces ("Analyzing SEC 10-K filing... Detecting margin expansion... Executing hedge").
- **Live Performance Sparklines**: Real-time canvas line graphs showing cumulative alpha vs S&P 500 benchmark.
- **Action Feed**: Real-time audit log of automated portfolio adjustments with undo button and confidence scores.`,
  },
  {
    id: 'lumina-footer',
    title: 'Lumina',
    category: 'Footer Section',
    type: 'Sections',
    isPopular: false,
    isLocked: false,
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
    aspectRatio: '4/3',
    description: 'Minimalist elegant multi-column footer with newsletter subscribe pill and dynamic localized timezone clocks.',
    tags: ['Footer Section', 'Minimalist', 'Typography', 'Newsletter'],
    supportedTools: ['Cursor', 'Claude', 'Lovable', 'Bolt'],
    promptText: `# Role: Master Typographer & Layout Designer
Design an exquisite minimalist dark-mode footer section for "Lumina":
- **Layout**: 5 columns (Product, Solutions, Resources, Company, Legal) with subtle vertical hairline dividers.
- **Newsletter**: Sleek inline input with magnetic submit button and live email validation regex.
- **Status Indicator**: "All systems operational in SF, London, Tokyo" with blinking emerald status light.
- **Bottom Bar**: Copyright statement, social icon links with hover tooltip animations, and theme switcher.`,
  },
  {
    id: 'zenith-footer',
    title: 'Zenith Footer',
    category: 'Footer Section',
    type: 'Sections',
    isPopular: true,
    isLocked: false,
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80',
    aspectRatio: '4/3',
    description: 'Brutalist modern footer featuring colossal responsive typography and interactive contact trigger.',
    tags: ['Footer Section', 'Brutalist', 'Large Typography', 'Agency'],
    supportedTools: ['Cursor', 'Claude', 'Lovable', 'Bolt', 'v0'],
    promptText: `# Role: Brutalist Creative Frontend Developer
Build a massive statement footer section for a design agency:
- **Massive Brand Wordmark**: Responsive SVG "ZENITH" taking up 100% of the viewport width with hover distortion effect.
- **Interactive Callout**: "LET'S BUILD SOMETHING EXTRAORDINARY TOGETHER" linking directly to booking schedule.
- **Social Grid**: Horizontal ticker ribbon with animated hover underline that expands on mouseover.`,
  },
  {
    id: 'what-package-fits',
    title: 'What Package Fits You',
    category: 'Pricing',
    type: 'Sections',
    isPopular: true,
    isLocked: false,
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80',
    aspectRatio: '4/3',
    description: 'High-converting interactive pricing matrix with monthly/annual toggle, feature comparison tooltips, and highlighted pro tier.',
    tags: ['Pricing', 'Conversion', 'SaaS', 'Interactive'],
    supportedTools: ['Cursor', 'Claude', 'Lovable', 'Bolt', 'v0'],
    promptText: `# Role: Conversion Rate Optimization & UI Specialist
Build an interactive pricing section "What Package Fits You":
- **Billing Switcher**: Monthly / Annual toggle pill with "Save 25%" badge in glowing gradient border.
- **Tier Structure**: Starter ($0), Pro ($29/mo - Popular), Enterprise ($99/mo).
- **Pro Tier Highlight**: Elevated card with glowing animated superpower gradient border, "Most Popular" ribbon, and feature checkmarks.
- **Interactive Currency Converter**: Automatic IP / dropdown currency selector (USD, EUR, GBP, JPY).
- **FAQ Accordion**: 4 collapsible frequently asked questions beneath the pricing tiers with smooth height animation.`,
  },
];
