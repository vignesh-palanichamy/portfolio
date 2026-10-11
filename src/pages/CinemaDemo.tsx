import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowDown, Pause, Play } from 'lucide-react';
import SignatureIntro from '@/components/features/SignatureIntro';
import VLogo from '@/components/features/VLogo';
import BrushCursor from '@/components/features/BrushCursor';
import NameReveal from '@/components/features/NameReveal';

import CinemaAbout from '@/components/features/CinemaAbout';
import CinemaSkills from '@/components/features/CinemaSkills';
import CinemaProjects from '@/components/features/CinemaProjects';
import CinemaConnect from '@/components/features/CinemaConnect';
import './cinema-demo.css';

gsap.registerPlugin(ScrollTrigger);
export default function CinemaDemo(){
  const root=useRef<HTMLElement>(null);
  const tiltEnabled=window.isSecureContext && typeof window.DeviceOrientationEvent !== 'undefined';
  const [motion,setMotion]=useState(()=>!window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  useEffect(()=>{
    const query=window.matchMedia('(prefers-reduced-motion: reduce)');
    const change=()=>setMotion(!query.matches);query.addEventListener('change',change);
    return()=>query.removeEventListener('change',change);
  },[]);
  useEffect(()=>{
    if(!motion)return;
    const ctx=gsap.context(()=>{
      gsap.from('.cd-nav',{y:-30,opacity:0,duration:.7,delay:2.3});
      const flight=gsap.timeline({scrollTrigger:{trigger:'.cd-flight',start:'top top',end:'bottom bottom',scrub:.8}});
      flight.to('.cd-tunnel',{scale:3.4,rotation:4,duration:1,ease:'power2.inOut'},0)
        .to('.cd-tunnel',{autoAlpha:0,duration:.48,ease:'sine.inOut'},.32)
        .fromTo('.cd-reveal',{scale:.92,autoAlpha:0,y:28},{scale:1,autoAlpha:1,y:0,duration:.5,ease:'power2.out',onUpdate:()=>{const el=root.current?.querySelector<HTMLElement>('.nr-reveal');if(el)el.dataset.revealed=String(Number(gsap.getProperty(el,'opacity'))>.9);}},.45)
        .to('.cd-intro-actions',{autoAlpha:0,y:12,duration:.18,ease:'sine.out'},0);
      // Rebuild About motion when switching between laptop and stacked layouts.
      const aboutMedia=gsap.matchMedia();
      aboutMedia.add({desktop:'(min-width: 701px)',mobile:'(max-width: 700px)'},(context)=>{
        const desktop=Boolean(context.conditions?.desktop);
      gsap.from('.cd-about-line>*',{yPercent:110,rotation:5,stagger:.2,duration:1,ease:'power2.out',scrollTrigger:{trigger:'.cd-about h2',start:'top 92%',end:'top 48%',scrub:.6}});
      // One coordinated entrance, followed by a separate camera move inside the frame.
      gsap.timeline({scrollTrigger:{trigger:desktop?'.cd-about-grid':'.cd-about-photo',start:desktop?'top 88%':'top 95%',end:desktop?'top 20%':'top 28%',scrub:.65,invalidateOnRefresh:true}})
        .fromTo('.cd-about-photo',{x:desktop?-65:0,y:90,rotation:-12,scale:.84,opacity:.25},{x:0,y:0,rotation:-4,scale:1,opacity:1,duration:1.25,ease:'power3.out'},0)
        .fromTo('.cd-about-photo-wrap',{clipPath:'inset(48% 0% 48% 0%)'},{clipPath:'inset(0% 0% 0% 0%)',duration:1.4,ease:'power3.inOut'},.12)
        .fromTo('.cd-about-photo-wrap',{ '--about-light':0 },{ '--about-light':.16,duration:.55,yoyo:true,repeat:1,ease:'sine.inOut'},.3);
      gsap.fromTo('.cd-about-photo-wrap>img',{scale:1.14,yPercent:2},{scale:1.08,yPercent:-2,ease:'none',scrollTrigger:{trigger:'.cd-about-photo',start:'top bottom',end:'bottom top',scrub:1.2}});
      gsap.utils.toArray<HTMLElement>('.cd-about-notes>div').forEach((note)=>{
        gsap.from(note.querySelector('svg'), {rotation:-35,scale:.65,duration:.7,ease:'back.out(1.8)',scrollTrigger:{trigger:note,start:'top 90%',once:true}});
      });
      gsap.from('.cd-about-sticker',{scale:0,rotation:-35,duration:.6,ease:'back.out(1.6)',scrollTrigger:{trigger:'.cd-about-photo',start:'top 75%',once:true}});
      gsap.utils.toArray<HTMLElement>('.cd-about-lead,.cd-about-copy,.cd-about-notes>div,.cd-about-hello').forEach((item)=>{
        gsap.from(item,{x:desktop?45:0,y:desktop?24:45,opacity:0,duration:.9,ease:'power3.out',scrollTrigger:desktop?{trigger:item,start:'top 92%',end:'top 65%',scrub:.6}:{trigger:item,start:'top 85%',toggleActions:'play none none reverse'}});
      });
      gsap.to('.cd-about-top>span',{rotation:150,ease:'none',scrollTrigger:{trigger:'.cd-about',start:'top bottom',end:'bottom top',scrub:1.2}});
      });
      const compact = window.matchMedia('(max-width: 600px)').matches;
      gsap.fromTo('.cd-skills-orbit', {rotation:-18,y:45}, {rotation:35,y:-70,ease:'none',scrollTrigger:{trigger:'.cd-skills',start:'top bottom',end:'bottom top',scrub:1.2}});
      gsap.from('.cd-skills-heading h2', {y:45,rotation:-3,opacity:0,duration:.8,ease:'back.out(1.2)',scrollTrigger:{trigger:'.cd-skills-heading',start:'top 88%',once:true}});
      gsap.utils.toArray<HTMLElement>('#skills .cd-skill-card').forEach((card,i)=>{
        gsap.fromTo(card,{y:compact?35:65,rotation:(i%2?1:-1)*(compact?3:6),scale:.94},{y:0,rotation:0,scale:1,ease:'power2.out',scrollTrigger:{trigger:card,start:'top 98%',end:'top 62%',scrub:.7}});
        gsap.from(card.querySelectorAll('li'),{y:12,scale:.8,opacity:0,stagger:.06,duration:.45,ease:'back.out(1.6)',scrollTrigger:{trigger:card,start:'top 78%',once:true}});
      });
      gsap.utils.toArray<HTMLElement>('.cd-skill-poster').forEach((card)=>{
        const surface=card.querySelector('.cd-poster-surface');
        const expanded=compact?'inset(2% 2% 2% 2% round 4vw)':'inset(0% 0% 0% 0% round 0vw)';
        gsap.timeline({scrollTrigger:{trigger:card,start:'top bottom',end:()=>'+='+window.innerHeight*2,scrub:.3,invalidateOnRefresh:true}})
          .fromTo(surface,{clipPath:'inset(10% 10% 10% 10% round 10vw)'},{clipPath:expanded,duration:1,ease:'none'})
          .to(surface,{clipPath:'inset(10% 10% 10% 10% round 10vw)',duration:1,ease:'none'});
        gsap.fromTo(card.querySelector('.cd-poster-art'),{y:35},{y:-35,ease:'none',scrollTrigger:{trigger:card,start:'top bottom',end:()=>'+='+window.innerHeight*2,scrub:.5}});
        gsap.fromTo(card.querySelector('.cd-poster-v'),{yPercent:75,rotation:-25},{yPercent:-25,rotation:10,ease:'none',scrollTrigger:{trigger:card,start:'top bottom',end:()=>'+='+window.innerHeight*2,scrub:.4}});
        gsap.from(card.querySelector('.cd-poster-caption'),{opacity:0,y:20,duration:.65,scrollTrigger:{trigger:card,start:'top 45%',once:true}});
      });
      gsap.to('.cd-skills-bottom>span',{rotation:180,ease:'none',scrollTrigger:{trigger:'.cd-skills-bottom',start:'top bottom',end:'bottom 30%',scrub:1}});
      gsap.fromTo('.cd-sign',{rotation:-8,y:60},{rotation:3,y:0,ease:'none',scrollTrigger:{trigger:'.cd-social',start:'top bottom',end:'bottom top',scrub:1.5}});
    },root);
    return()=>ctx.revert();
  },[motion]);
  return <main ref={root} className={`cd-demo ${motion?'':'cd-still'}`}>
    <SignatureIntro motion={motion}/>
    <BrushCursor enabled={motion}/>
    <header className="cd-nav" id="top"><Link to="/projects">PROJECTS ↗</Link><button onClick={()=>setMotion(v=>!v)} aria-pressed={motion}>{motion?<Pause size={16}/>:<Play size={16}/>} Motion {motion?'on':'off'}</button></header>
    <section className="cd-flight" aria-label="Cinematic introduction"><div className="cd-stage">
      <div className="cd-tunnel" aria-hidden="true"><VLogo motion={motion} tiltEnabled={tiltEnabled}/></div>
      <NameReveal/>
      <div className="cd-intro-actions">
      <a className="cd-scroll" href="#demo-work">SCROLL INTO MY WORLD <ArrowDown size={20}/></a>

      </div>
    </div></section>
    <CinemaAbout/>
    <CinemaSkills/>
    <CinemaProjects/>
    <CinemaConnect/>
  </main>;
}

