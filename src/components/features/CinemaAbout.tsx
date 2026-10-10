import profileImage from '@/assets/vignesh-about-selected.png';
import { ArrowUpRight, Code2, Box, Sparkles, Paperclip } from 'lucide-react';

export default function CinemaAbout() {
  return <section id="about-me" className="cd-about" aria-labelledby="cd-about-title">
    <div className="cd-about-top"><span aria-hidden="true">✳</span></div>
    <h2 id="cd-about-title"><span className="cd-about-line"><span>A LITTLE CODE.</span></span><span className="cd-about-line"><em>A LOT OF CURIOSITY.</em></span></h2>
    <div className="cd-about-grid">
      <figure className="cd-about-photo">
        <span className="cd-about-tape" aria-hidden="true"/>
        <div className="cd-about-photo-wrap"><img src={profileImage} alt="Vignesh Palanichamy" loading="lazy" width="1120" height="1400"/></div>
        <figcaption><span>HI, I’M VIGNESH.</span><svg className="cd-about-doodle" viewBox="0 0 104 76" aria-hidden="true">
          <path d="M47 8 59 23 81 17 76 37 92 51 69 55 58 72 44 57 23 62 27 42 12 29 34 25Z" fill="#D5360C"/>
          <path d="M42 3 54 18 76 12 71 32 87 46 64 50 53 67 39 52 18 57 22 37 7 24 29 20Z" fill="#E6D5BD" stroke="#101010" strokeWidth="3" strokeLinejoin="round"/>
          <ellipse cx="36" cy="30" rx="3" ry="5" fill="#101010" transform="rotate(-12 36 30)"/>
          <path d="m49 28 7 2-6 3M34 40q10 13 23-1" fill="none" stroke="#101010" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="m87 9 5-5m-2 17 8-1M8 52l-5 4" fill="none" stroke="#D5360C" strokeWidth="3" strokeLinecap="round"/>
        </svg></figcaption>
        <span className="cd-about-sticker">ALWAYS<br/>EXPLORING ↗</span>
      </figure>
      <div className="cd-about-story">
        <p className="cd-about-lead">I turn “what if?”<br/>into something you can use.</p>
        <p className="cd-about-copy">I’m Vignesh Palanichamy, a full stack developer who enjoys building fast, useful web applications—with a little personality. From the interface to the API, I like making every part work together.</p>
        <div className="cd-about-notes">
          <div><Code2 aria-hidden="true"/><p><strong>BUILD WITH PURPOSE</strong><span>React, Next.js, Node.js & MongoDB.</span></p></div>
          <div><Box aria-hidden="true"/><p><strong>MAKE ROOM FOR PLAY</strong><span>Exploring 3D, Three.js and WebGL.</span></p></div>
          <div><Sparkles aria-hidden="true"/><p><strong>STAY CURIOUS</strong><span>Studying Industrial Biotechnology at GCT, Coimbatore.</span></p></div>
        </div>
        <div className="cd-about-actions">
        <a className="cd-about-hello" href="mailto:Vigneshpalanichamy.in@gmail.com">LET’S MAKE SOMETHING <ArrowUpRight size={22} aria-hidden="true"/></a>
          <a className="cd-about-resume" href="/resume.pdf" target="_blank" rel="noopener noreferrer" aria-label="View my resume (PDF, opens in a new tab)"><Paperclip size={20} aria-hidden="true"/>MY RESUME <ArrowUpRight size={20} aria-hidden="true"/></a>
        </div>
      </div>
    </div>
  </section>;
}
