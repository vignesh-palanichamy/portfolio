import { LiveKnot } from './LiveKnot';
import { PortfolioMotion } from './PortfolioMotion';
import { Link } from 'react-router-dom';
import repos from '../../repos.json';
import '@/pages/project-shelf.css';
import { createContext, useContext, useRef, useState, type PointerEvent, type ReactNode } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowDown, ArrowUpRight, Github, Linkedin, Mail, Laptop, Box, Lightbulb, Asterisk, Code2, Sparkles } from 'lucide-react';
import signature from '@/assets/signature.png';

const MotionEnabled = createContext(true);
const email = 'mailto:Vigneshpalanichamy.in@gmail.com';
const socials = [
  { name: 'GitHub', href: 'https://github.com/vignesh-palanichamy', icon: Github },
  { name: 'LinkedIn', href: 'https://linkedin.com/in/vigneshpalanichamy', icon: Linkedin },
  { name: 'Email', href: email, icon: Mail },
];

function Reveal({ children, className = '' }: { children: ReactNode; className?: string }) {
  const reduced = useReducedMotion();
  const enabled = useContext(MotionEnabled) && !reduced;
  return <motion.div className={className} initial={enabled ? { opacity: 0, y: 24 } : false} animate={enabled ? undefined : { opacity: 1, y: 0 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .08 }} transition={{ duration: enabled ? .55 : 0, ease: [.22, 1, .36, 1] }}>{children}</motion.div>;
}

function Chapter({ number, children }: { number: string; children: ReactNode }) {
  return <p className="fk-chapter"><span>{number}.</span> {children}</p>;
}

function BrowserArt({ kind }: { kind: 'code' | 'business' | 'dashboard' }) {
  return <div className={`fk-browser fk-browser-${kind}`} aria-hidden="true">
    <div className="fk-browser-bar"><i /><i /><i /><span>{kind === 'code' ? 'Zenith Mentor' : kind === 'business' ? 'The Reciprocal Solutions' : 'Cognoid Systems'}</span><Code2 size={12} /></div>
    {kind === 'code' ? <div className="fk-editor"><aside><b>⌘ Zenith</b><span>⌂ Home</span><span className="selected">› Playground</span><span>◇ Challenges</span><span>▤ Learn</span></aside><div className="fk-code"><div>playground.js <span>▶ Run</span></div><pre><em>01</em> <span>function</span> greet() {'{'}{'\n'}<em>02</em>   <span>const</span> message ={'\n'}<em>03</em>     <mark>"Keep learning!"</mark>;{'\n'}<em>04</em>   console.log(message);{'\n'}<em>05</em> {'}'}{'\n'}<em>06</em> greet();</pre><footer>OUTPUT <p>Keep learning!</p></footer></div></div>
      : kind === 'business' ? <div className="fk-business"><span>Solutions. Ideas. Possibilities.</span><strong>Solving today<br />for a better<br />tomorrow.</strong><div className="fk-building"><i /><i /><i /></div><small>Explore solutions →</small></div>
      : <div className="fk-dashboard"><aside>◈<span>Overview</span><span>Projects</span><span>Activity</span></aside><div><b>Good to see you!</b><p>A clearer view of your work.</p><div className="fk-chart"><i /><i /><i /><i /><i /><i /></div><div className="fk-dashboard-blocks"><span /><span /><span /></div></div></div>}
  </div>;
}

export function FunkyPortfolio() {
  const reduced = useReducedMotion();
  const art = useRef<HTMLDivElement>(null);
  const [motionOn, setMotionOn] = useState(true);
  const animate = motionOn && !reduced;
  function moveArt(event: PointerEvent<HTMLDivElement>) {
    if (!animate || event.pointerType !== 'mouse' || !art.current) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    art.current.style.setProperty('--art-x', `${(event.clientX - bounds.left - bounds.width / 2) / 45}deg`);
    art.current.style.setProperty('--art-y', `${-(event.clientY - bounds.top - bounds.height / 2) / 45}deg`);
  }
  return <MotionEnabled.Provider value={animate}><main id="portfolio-content" className={`funky-page ${animate ? '' : 'fk-still'}`}>
    <PortfolioMotion enabled={animate} /><a href="#work" className="fk-skip">Skip to projects</a>
    <div className="fk-wrap">
      <header className="fk-nav" id="top"><a href="#top" className="fk-brand" aria-label="Vignesh home"><img src={signature} alt="Vignesh’s signature" /><Asterisk size={24} /></a><span className="fk-portfolio-label">Personal portfolio</span><nav aria-label="Main navigation"><a href="#work">Work</a><a href="#about">About</a><a href="#contact">Contact <ArrowUpRight size={14} /></a></nav></header>
      <section className="fk-hero" aria-labelledby="fk-title">
        <div className="fk-hero-copy"><Chapter number="01">Hello there</Chapter><h1 id="fk-title">A little code.<br />A lot of<br /><span>character.</span></h1><h2>Vignesh Palanichamy</h2><p className="fk-role">Full Stack Developer</p><p className="fk-intro">I build useful web apps and explore<br className="fk-desktop-break" /> playful digital experiences.</p><div className="fk-actions"><a className="fk-button" href="#work">View my projects <ArrowUpRight size={20} /></a><a className="fk-button fk-button-outline" href={email}>Say hello</a></div></div>
        <div className="fk-hero-art" onPointerMove={moveArt} onPointerLeave={() => { art.current?.style.setProperty('--art-x', '0deg'); art.current?.style.setProperty('--art-y', '0deg'); }}>
          <div className="fk-art-inner" ref={art}><LiveKnot animated={animate} /><span className="fk-paper fk-hello">hello<br />world! ☺</span><span className="fk-paper fk-exploring">Always<br /><u>exploring.</u></span><span className="fk-star" aria-hidden="true">✳</span></div>
          <span className="fk-scribble fk-hero-note">Ideas<br />into<br />real things.</span><span className="fk-hero-bottom-note fk-scribble">code · ideas · people<br />endless possibilities</span>
        </div>
      </section>
      <section id="work" className="fk-work" aria-labelledby="fk-work-title">
        <Reveal><div className="fk-section-heading"><div><Chapter number="02">Projects</Chapter><h2 id="fk-work-title">The things I’ve built<span className="fk-blue">.</span></h2></div><p className="fk-scribble">Different ideas.<br />Same curious mind. <ArrowDown size={27} /></p></div></Reveal>
        <div className="fk-featured-grid"><Reveal><article className="fk-project fk-featured"><div className="fk-project-copy"><p className="fk-project-label">01 / Learning platform</p><h3>Zenith Mentor</h3><h4>Code execution & learning</h4><p>A space to write code, try ideas,<br />and keep learning.</p><div className="fk-tags">{['React', 'Next.js', 'Node.js', 'MongoDB', 'Judge0'].map(t => <span key={t}>{t}</span>)}</div><a href="https://coder-blush.vercel.app" target="_blank" rel="noopener noreferrer" className="fk-button fk-button-yellow">View live project <ArrowUpRight size={19} /><span className="sr-only">(opens in new tab)</span></a></div><div className="fk-project-art"><BrowserArt kind="code" /><span className="fk-note-yellow fk-scribble">A learning<br />space for<br />curious minds.</span></div><span className="fk-concept-label">Illustrative interface</span></article></Reveal>
        
          <Reveal><article className="fk-project fk-reciprocal"><div className="fk-project-copy"><p className="fk-project-label">02 / Business website</p><h3>The Reciprocal<br />Solutions</h3><p>Responsive interfaces<br />for a connected business.</p><a href="https://thereciprocalsolutions.com" target="_blank" rel="noopener noreferrer" className="fk-button">View project <ArrowUpRight size={18} /><span className="sr-only">(opens in new tab)</span></a></div><div className="fk-project-art"><BrowserArt kind="business" /></div><span className="fk-concept-label">Illustrative interface</span></article></Reveal>
          <Reveal><article className="fk-project fk-cognoid"><div className="fk-project-copy"><p className="fk-project-label">03 / Full-stack development</p><h3>Cognoid<br />Systems</h3><p>Connecting the interface<br />with the systems behind it.</p><a href="https://www.cognoidsystems.com" target="_blank" rel="noopener noreferrer" className="fk-button">View project <ArrowUpRight size={18} /><span className="sr-only">(opens in new tab)</span></a></div><div className="fk-project-art"><BrowserArt kind="dashboard" /></div><span className="fk-concept-label">Illustrative interface</span></article></Reveal>
        </div>
        <Reveal><article className="fk-project fk-relations"><div><p className="fk-project-label">04 / Content & storytelling</p><h3>Relationswork</h3><p>A space for ideas, people<br />and conversations.</p></div><div className="fk-collage" aria-hidden="true"><span className="fk-fabric" /><span className="fk-paper fk-scribble">Ideas<br />People<br />Conversations</span><span className="fk-flower">✳</span><span className="fk-scribble">Good stories<br />bring people<br />together.</span></div><a href="https://www.relationswork.in" target="_blank" rel="noopener noreferrer" className="fk-circle" aria-label="View Relationswork (opens in new tab)"><ArrowUpRight size={28} /></a></article></Reveal>
      </section>
      <section id="about" className="fk-about" aria-labelledby="fk-about-title"><Reveal className="fk-about-copy"><Chapter number="03">About</Chapter><h2 id="fk-about-title">Behind the code,<br />there’s me<span className="fk-blue">.</span></h2><p>I’m Vignesh. I enjoy connecting clear interfaces with the systems behind them — and finding room for a little fun along the way.</p><img src={signature} alt="" className="fk-about-signature" /></Reveal><Reveal className="fk-about-play"><div className="fk-notes">{[{title:'Build',text:'Full-stack apps.',Icon:Laptop},{title:'Explore',text:'3D & motion.',Icon:Box},{title:'Learn',text:'Something new.',Icon:Lightbulb}].map(({title,text,Icon})=><div className="fk-note" key={title} tabIndex={0}><Icon size={39} strokeWidth={1.6} /><h3>{title}</h3><p>{text}</p></div>)}</div><p className="fk-toolbox-label">My toolbox</p><ul className="fk-toolbox">{['React','Next.js','Node.js','MongoDB','Three.js'].map(tool=><li key={tool}>{tool}</li>)}</ul></Reveal></section>
    </div>
    <div className="fk-banner"><Sparkles size={21} /><span>Think it. Build it. Make it feel good.</span><Sparkles size={21} /></div>
    <footer id="contact" className="fk-contact"><div className="fk-wrap fk-contact-grid"><div><Chapter number="04">Let’s connect</Chapter><h2>Got an idea?<br />Let’s build it<span>.</span></h2></div><div className="fk-contact-links"><a href={email} className="fk-button">Say hello <ArrowUpRight size={22} /></a><div className="fk-socials">{socials.map(({name,href,icon:Icon})=><a key={name} href={href} target={name === 'Email' ? undefined : '_blank'} rel={name === 'Email' ? undefined : 'noopener noreferrer'}><Icon size={22} />{name}<span className="sr-only">{name === 'Email' ? '' : '(opens in new tab)'}</span></a>)}</div></div><div className="fk-contact-stamp"><img src={signature} alt="Vignesh’s signature" /><p>Developer<br />Maker<br />Curious human ☺</p></div></div><div className="fk-wrap fk-bottom"><span>© {new Date().getFullYear()} Vignesh Palanichamy</span><button type="button" aria-pressed={motionOn} onClick={()=>setMotionOn(!motionOn)}>Motion {motionOn ? 'on' : 'off'}</button><a href="#top">Back to top ↑</a></div></footer>
  </main></MotionEnabled.Provider>;
}



