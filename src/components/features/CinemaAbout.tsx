import profileImage from '@/assets/vignesh-about-selected.png';
import signature from '@/assets/signature.png';
import { ArrowUpRight, Code2, Box, Sparkles } from 'lucide-react';

export default function CinemaAbout() {
  return <section id="about-me" className="cd-about" aria-labelledby="cd-about-title">
    <div className="cd-about-top"><span aria-hidden="true">✳</span></div>
    <h2 id="cd-about-title"><span className="cd-about-line"><span>A LITTLE CODE.</span></span><span className="cd-about-line"><em>A LOT OF CURIOSITY.</em></span></h2>
    <div className="cd-about-grid">
      <figure className="cd-about-photo">
        <span className="cd-about-tape" aria-hidden="true"/>
        <div className="cd-about-photo-wrap"><img src={profileImage} alt="Vignesh Palanichamy" loading="lazy" width="1120" height="1400"/></div>
        <figcaption><span>HI, I’M VIGNESH.</span><img src={signature} alt="" loading="lazy"/></figcaption>
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
        <a className="cd-about-hello" href="mailto:Vigneshpalanichamy.in@gmail.com">LET’S MAKE SOMETHING <ArrowUpRight size={22} aria-hidden="true"/></a>
      </div>
    </div>
  </section>;
}
