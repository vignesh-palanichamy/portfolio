import { Github, Linkedin, Mail } from 'lucide-react';
import signature from '@/assets/signature.png';
export default function CinemaConnect(){
 return <section className="cd-social"><div className="cd-marquee" aria-hidden="true"><div>LINK WITH VIGNESH ✳ LINK WITH VIGNESH ✳&nbsp;</div><div>LINK WITH VIGNESH ✳ LINK WITH VIGNESH ✳&nbsp;</div></div>
  <div className="cd-sign"><span className="cd-chain cd-chain-left"/><span className="cd-chain cd-chain-right"/><h2>LET’S<br/>CONNECT.</h2><div className="cd-social-links"><a href="https://github.com/vignesh-palanichamy" target="_blank" rel="noreferrer"><Github/><span>GITHUB ↗</span></a><a href="https://linkedin.com/in/vigneshpalanichamy" target="_blank" rel="noreferrer"><Linkedin/><span>LINKEDIN ↗</span></a><a href="mailto:Vigneshpalanichamy.in@gmail.com"><Mail/><span>EMAIL ↗</span></a></div></div>
  <p className="cd-end">GOOD THINGS START WITH A HELLO.</p><img src={signature} alt="Vignesh signature"/><a href="#top">Back to top ↑</a>
 </section>;
}
