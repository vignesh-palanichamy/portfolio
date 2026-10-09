import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowDown, Pause, Play } from 'lucide-react';
import signature from '@/assets/signature.png';
import VLogo from '@/components/features/VLogo';
import NameReveal from '@/components/features/NameReveal';

import CinemaAbout from '@/components/features/CinemaAbout';
import CinemaSkills from '@/components/features/CinemaSkills';
import CinemaProjects from '@/components/features/CinemaProjects';
import CinemaConnect from '@/components/features/CinemaConnect';
import './cinema-demo.css';

type MotionPermission = typeof DeviceOrientationEvent & { requestPermission?: () => Promise<string> };
const sensorPermission = () => (window.DeviceOrientationEvent as MotionPermission | undefined)?.requestPermission;
gsap.registerPlugin(ScrollTrigger);
export default function CinemaDemo(){
  const root=useRef<HTMLElement>(null);
  const [tiltEnabled,setTiltEnabled]=useState(()=>!sensorPermission());
  const [tiltMessage,setTiltMessage]=useState('Enable phone tilt');
  const enableTilt=async()=>{
    try {
      const sensor=window.DeviceOrientationEvent as MotionPermission | undefined;
      const permission=await sensor?.requestPermission?.call(sensor);
      if(permission==='granted') setTiltEnabled(true);
      else setTiltMessage('Phone tilt unavailable');
    } catch { setTiltMessage('Phone tilt unavailable'); }
  };
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
      const flight=gsap.timeline({scrollTrigger:{trigger:'.cd-flight',start:'top top',end:'bottom bottom',scrub:.8}});
      flight.to('.cd-tunnel',{scale:3.4,rotation:4,duration:1,ease:'power2.inOut'},0)
        .to('.cd-tunnel',{autoAlpha:0,duration:.48,ease:'sine.inOut'},.32)
        .fromTo('.cd-reveal',{scale:.92,autoAlpha:0,y:28},{scale:1,autoAlpha:1,y:0,duration:.5,ease:'power2.out',onUpdate:()=>{const el=root.current?.querySelector<HTMLElement>('.nr-reveal');if(el)el.dataset.revealed=String(Number(gsap.getProperty(el,'opacity'))>.9);}},.45)
        .to('.cd-scroll',{autoAlpha:0,y:12,duration:.18,ease:'sine.out'},0);
      gsap.from('.cd-about-line>*',{yPercent:110,rotation:3,stagger:.14,duration:.85,ease:'power3.out',scrollTrigger:{trigger:'.cd-about h2',start:'top 88%',once:true}});
      gsap.fromTo('.cd-about-photo',{y:55,rotation:-10,scale:.94,opacity:0},{y:0,rotation:-4,scale:1,opacity:1,duration:.9,ease:'back.out(1.15)',scrollTrigger:{trigger:'.cd-about-photo',start:'top 90%',once:true}});
      gsap.from('.cd-about-sticker',{scale:0,rotation:-35,duration:.6,ease:'back.out(1.6)',scrollTrigger:{trigger:'.cd-about-photo',start:'top 75%',once:true}});
      gsap.utils.toArray<HTMLElement>('.cd-about-lead,.cd-about-copy,.cd-about-notes>div,.cd-about-hello').forEach((item)=>{
        gsap.from(item,{y:22,opacity:0,duration:.65,ease:'power2.out',scrollTrigger:{trigger:item,start:'top 92%',once:true}});
      });
      gsap.to('.cd-about-top>span',{rotation:150,ease:'none',scrollTrigger:{trigger:'.cd-about',start:'top bottom',end:'bottom top',scrub:1.2}});
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
    {motion&&<div className="cd-opening" aria-hidden="true"><img className="cd-signature" src={signature} alt=""/><span>A LITTLE OF ME. IN EVERYTHING I BUILD.</span></div>}
    <header className="cd-nav" id="top"><Link to="/projects">PROJECTS ↗</Link><button onClick={()=>setMotion(v=>!v)} aria-pressed={motion}>{motion?<Pause size={16}/>:<Play size={16}/>} Motion {motion?'on':'off'}</button></header>
    <section className="cd-flight" aria-label="Cinematic introduction"><div className="cd-stage">
      <div className="cd-tunnel" aria-hidden="true"><VLogo motion={motion} tiltEnabled={tiltEnabled}/></div>
      <NameReveal/>
      <a className="cd-scroll" href="#demo-work">SCROLL INTO MY WORLD <ArrowDown size={20}/></a>
      {motion&&!tiltEnabled&&<button className="cd-tilt-enable" onClick={enableTilt}>{tiltMessage}</button>}

    </div></section>
    <CinemaAbout/>
    <CinemaSkills/>
    <CinemaProjects/>
    <CinemaConnect/>
  </main>;
}

