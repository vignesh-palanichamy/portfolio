import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Github, Linkedin, Mail, ArrowDown, Pause, Play } from 'lucide-react';
import signature from '@/assets/signature.png';
import HeroCursor from '@/components/features/HeroCursor';
import VLogo from '@/components/features/VLogo';
import './cinema-demo.css';

gsap.registerPlugin(ScrollTrigger);
export default function CinemaDemo(){
  const root=useRef<HTMLElement>(null);
  const [motion,setMotion]=useState(()=>!window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  useEffect(()=>{
    const query=window.matchMedia('(prefers-reduced-motion: reduce)');
    const change=()=>setMotion(!query.matches);query.addEventListener('change',change);
    return()=>query.removeEventListener('change',change);
  },[]);
  useEffect(()=>{
    if(!motion)return;
    const ctx=gsap.context(()=>{
      gsap.timeline().fromTo('.cd-signature',{clipPath:'inset(0 100% 0 0)'},{clipPath:'inset(0 0% 0 0)',duration:1.8,ease:'power2.inOut'})
        .to('.cd-opening',{autoAlpha:0,duration:.7},2)
        .from('.cd-nav',{y:-30,opacity:0,duration:.7},2.3);
      const flight=gsap.timeline({scrollTrigger:{trigger:'.cd-flight',start:'top top',end:'bottom bottom',scrub:1}});
      flight.to('.cd-tunnel',{scale:5,rotation:12,opacity:0,ease:'power2.in'},0)
        .fromTo('.cd-reveal',{scale:.65,opacity:0,y:80},{scale:1,opacity:1,y:0,duration:.45},.45)
        .to('.cd-scroll',{opacity:0,duration:.1},0);
      gsap.from('.cd-project',{y:100,rotation:5,opacity:0,stagger:.15,duration:1,scrollTrigger:{trigger:'.cd-projects',start:'top 75%',once:true}});
      gsap.fromTo('.cd-sign',{rotation:-8,y:60},{rotation:3,y:0,ease:'none',scrollTrigger:{trigger:'.cd-social',start:'top bottom',end:'bottom top',scrub:1.5}});
    },root);
    return()=>ctx.revert();
  },[motion]);
  return <main ref={root} className={`cd-demo ${motion?'':'cd-still'}`}>
    {motion&&<div className="cd-opening" aria-hidden="true"><img className="cd-signature" src={signature} alt=""/><span>A LITTLE OF ME. IN EVERYTHING I BUILD.</span></div>}
    <header className="cd-nav" id="top"><Link to="/projects">PROJECTS ↗</Link><span>VIGNESH / PORTFOLIO</span><button onClick={()=>setMotion(v=>!v)} aria-pressed={motion}>{motion?<Pause size={16}/>:<Play size={16}/>} Motion {motion?'on':'off'}</button></header>
    <section className="cd-flight" aria-label="Cinematic introduction"><div className="cd-stage">
      <div className="cd-tunnel" aria-hidden="true"><VLogo motion={motion}/></div>
      <div className="cd-reveal"><span className="cd-kicker">CODE / CURIOSITY / CHARACTER</span><h1>VIGNESH<br/><em>PALANICHAMY.</em></h1><p>Full Stack Developer. Turning ideas into experiences.</p><a href="#demo-work">Meet the work ↗</a></div>
      <a className="cd-scroll" href="#demo-work">SCROLL INTO MY WORLD <ArrowDown size={20}/></a>
      <span className="cd-frame-label">01 / THE OPENING</span>
    </div><HeroCursor enabled={motion}/></section>
    <section id="demo-work" className="cd-projects"><p className="cd-kicker">02 / IDEAS BECOME REAL</p><h2>A FEW THINGS<br/>I’VE BUILT<span>↘</span></h2><div className="cd-project-grid">
      <a className="cd-project" href="https://coder-blush.vercel.app" target="_blank" rel="noreferrer"><span className="cd-code" aria-hidden="true">{'</>'}</span><small>01 / LEARN & BUILD</small><h3>Zenith Mentor ↗</h3></a>
      <a className="cd-project" href="https://www.cognoidsystems.com" target="_blank" rel="noreferrer"><span className="cd-blocks" aria-hidden="true">▥</span><small>02 / CONNECT THE DOTS</small><h3>Cognoid Systems ↗</h3></a>
    </div><Link className="cd-all" to="/projects">EXPLORE ALL REPOSITORIES ↗</Link></section>
    <section className="cd-social"><p className="cd-kicker">03 / FIND ME AROUND THE INTERNET</p><div className="cd-marquee" aria-hidden="true"><div>LINK WITH VIGNESH ✳ LINK WITH VIGNESH ✳&nbsp;</div><div>LINK WITH VIGNESH ✳ LINK WITH VIGNESH ✳&nbsp;</div></div>
      <div className="cd-sign"><span className="cd-chain cd-chain-left"/><span className="cd-chain cd-chain-right"/><h2>LET’S<br/>CONNECT.</h2><div className="cd-social-links"><a href="https://github.com/vignesh-palanichamy" target="_blank" rel="noreferrer"><Github/><span>GITHUB ↗</span></a><a href="https://linkedin.com/in/vigneshpalanichamy" target="_blank" rel="noreferrer"><Linkedin/><span>LINKEDIN ↗</span></a><a href="mailto:Vigneshpalanichamy.in@gmail.com"><Mail/><span>EMAIL ↗</span></a></div></div>
      <p className="cd-end">GOOD THINGS START WITH A HELLO.</p><img src={signature} alt="Vignesh signature"/><a href="#top">Back to top ↑</a>
    </section>
  </main>;
}
