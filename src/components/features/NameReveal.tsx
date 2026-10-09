import { useEffect, useId, useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import './NameReveal.css';

function Character({ kind }: { kind: 'coder' | 'star' | 'rocket' | 'cool' | 'hand' }) {
  const id = useId();
  return <svg viewBox="0 0 120 120" aria-hidden="true" focusable="false">
    <defs><radialGradient id={id} cx="30%" cy="20%" r="85%"><stop stopColor="#fffaf0"/><stop offset=".6" stopColor="#ecdbc0"/><stop offset="1" stopColor="#bda588"/></radialGradient></defs>
    <g stroke="#171510" strokeWidth="3" strokeLinejoin="round" strokeLinecap="round" fill={`url(#${id})`}>
      {kind === 'coder' && <><circle cx="62" cy="64" r="45" fill="#171510"/><circle cx="57" cy="57" r="45"/><path d="M29 26Q44 13 63 17" stroke="#fffaf0" strokeWidth="5" fill="none"/><g className="nr-eyes" fill="none" strokeWidth="6"><path d="M40 40l-9 10 10 5M73 38l10 9-10 6"/></g><path d="M41 69q18 25 33-5-17 9-33 5" fill="#171510"/><path d="M51 79q8-13 17-5" stroke="#ec5725" strokeWidth="8"/><ellipse cx="93" cy="80" rx="12" ry="14"/></>}
      {kind === 'star' && <><path d="M60 6Q68 45 109 58Q72 68 60 111Q46 74 10 60Q48 49 60 6Z" fill="#171510" transform="translate(3 4)"/><path d="M60 6Q68 45 109 58Q72 68 60 111Q46 74 10 60Q48 49 60 6Z"/><path d="M60 16l-8 35-28 9" fill="none" stroke="#fff"/><circle cx="47" cy="59" r="3" fill="#171510"/><circle cx="70" cy="59" r="3" fill="#171510"/><path d="M54 70q6 7 12-1" fill="none"/></>}
      {kind === 'cool' && <><circle cx="61" cy="65" r="43" fill="#171510"/><circle cx="57" cy="59" r="43"/><path d="M21 45h72M27 45l4 18q12 9 21-4l3-14M62 45l3 16q12 8 20-3l4-13" fill="#171510" strokeWidth="5"/><path d="M34 48l7 9m28-9 7 8" stroke="#fff6df" opacity=".6"/><path d="M41 78q18 16 34-5" fill="none" strokeWidth="5"/></>}
      {kind === 'rocket' && <g transform="rotate(32 60 60)"><path className="nr-flame" d="M48 82Q32 111 60 115Q87 99 71 81Z" fill="#ffc74f" stroke="#ed6c20"/><path d="M52 87l8 21 8-22" fill="#fff5ca" stroke="none"/><path d="M43 52Q22 61 27 87l21-10M76 52Q98 62 91 88L72 77" fill="#e4491b"/><path d="M58 7Q26 40 43 84h32Q92 37 58 7Z"/><path d="M58 7Q47 18 42 29h33Q70 16 58 7Z" fill="#e4491b"/><circle cx="59" cy="48" r="13" fill="#171510"/><path d="M53 41q5-5 11-1" stroke="#fff6dc" fill="none"/><path d="M44 79h31M60 73v22" fill="none" strokeWidth="5"/></g>}
      {kind === 'hand' && <><path d="M41 70L27 48q-8-17 4-20 8-2 16 21L40 17q-2-14 9-14 10 0 13 42L70 9Q74-2 82 4q8 5-6 44l11-17q9-11 15-3 5 7-13 37 20-14 24-3 2 8-19 27-13 26-40 15Q33 96 29 79q-3-12 12-9Z"/><path d="M47 66q22-14 33 3M49 83q11 11 22 2" fill="none"/><path d="M52 106l-3 10h31l1-12"/></>}
    </g>
  </svg>;
}

export default function NameReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      el.dataset.onscreen = String(entry.isIntersecting);
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return <div ref={ref} className="cd-reveal nr-reveal" data-revealed="false">
    <span className="cd-kicker nr-kicker">CODE / CURIOSITY / CHARACTER</span>
    <div className="nr-badge"><span className="nr-coder nr-character"><Character kind="coder"/></span>FULL STACK DEVELOPER</div>
    <div className="nr-name"><h1>VIGNESH<em>PALANICHAMY.</em></h1><span className="nr-star nr-character"><Character kind="star"/></span><span className="nr-cool nr-character"><Character kind="cool"/></span></div>
    <svg className="nr-underline" viewBox="0 0 400 24" aria-hidden="true"><path d="M8 19Q211-8 390 13" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round"/></svg>
    <div className="nr-message"><h2>A little code.<br/>A lot of character.</h2><span className="nr-rocket nr-character"><Character kind="rocket"/></span></div>
    <p className="nr-description">I build fast, useful web apps<br/>with thoughtful details<br className="nr-mobile-break"/> and a playful edge.</p>
    <a className="nr-cta" href="#demo-work">Explore my work <span className="nr-arrow"><ArrowUpRight aria-hidden="true"/></span><span className="nr-hand nr-character"><Character kind="hand"/></span></a>
  </div>;
}
