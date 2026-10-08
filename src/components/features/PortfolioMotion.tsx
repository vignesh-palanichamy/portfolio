import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function PortfolioMotion({ enabled }: { enabled: boolean }) {
  useEffect(() => {
    if(!enabled) return;
    const root=document.getElementById('portfolio-content');
    if(!root) return;
    const cleanups: (()=>void)[]=[];
    const context=gsap.context(()=>{
      const entrance = gsap.timeline({paused:true,defaults:{ease:'power3.out'}})
        .from('.fk-hero-copy h1',{y:70,autoAlpha:0,rotation:3,duration:1.2})
        .from('.fk-hero-art',{scale:.72,autoAlpha:0,rotation:-8,duration:1.6},0)
        .from('.fk-hero-copy h2, .fk-role, .fk-intro, .fk-actions',{y:22,autoAlpha:0,stagger:.12,duration:.8},.45);
      const begin=()=>{if(!root.hasAttribute('inert')) entrance.play();};
      const introObserver=new MutationObserver(begin);
      introObserver.observe(root,{attributes:true,attributeFilter:['inert']});
      const entranceFrame=requestAnimationFrame(begin);
      cleanups.push(()=>{introObserver.disconnect();cancelAnimationFrame(entranceFrame);});
      gsap.to('.fk-hero-copy',{y:-70,ease:'none',scrollTrigger:{trigger:'.fk-hero',start:'top top',end:'bottom top',scrub:1}});
      gsap.fromTo('.fk-hero-art',{y:0},{y:100,ease:'none',scrollTrigger:{trigger:'.fk-hero',start:'top top',end:'bottom top',scrub:1.4}});
      gsap.utils.toArray<HTMLElement>('.fk-project-art').forEach(el=>{
        gsap.fromTo(el,{y:35,scale:1.1},{y:-15,scale:1,ease:'none',scrollTrigger:{trigger:el.closest('.fk-project'),start:'top bottom',end:'bottom top',scrub:1}});
      });
      gsap.from('.fk-notes .fk-note',{y:60,rotation:-7,stagger:.15,duration:1,ease:'back.out(1.2)',scrollTrigger:{trigger:'.fk-notes',start:'top 85%',once:true}});
      gsap.from('.fk-contact h2',{y:40,duration:1,ease:'power3.out',scrollTrigger:{trigger:'.fk-contact',start:'top 90%',once:true}});
      gsap.utils.toArray<HTMLElement>('.fk-section-heading h2, .fk-about h2').forEach(el=>{
        gsap.from(el,{y:35,rotation:2,duration:.85,ease:'power3.out',scrollTrigger:{trigger:el,start:'top 92%',once:true}});
      });
      gsap.utils.toArray<HTMLElement>('.fk-project').forEach(el=>{
        const move=(e:PointerEvent)=>{if(e.pointerType!=='mouse')return;const r=el.getBoundingClientRect();gsap.to(el,{rotationY:((e.clientX-r.left)/r.width-.5)*8,rotationX:-((e.clientY-r.top)/r.height-.5)*6,transformPerspective:900,duration:.4,ease:'power2.out',overwrite:'auto'});};
        const reset=()=>gsap.to(el,{rotationX:0,rotationY:0,duration:.6,overwrite:'auto'});
        el.addEventListener('pointermove',move);el.addEventListener('pointerleave',reset);el.addEventListener('blur',reset,true);
        cleanups.push(()=>{el.removeEventListener('pointermove',move);el.removeEventListener('pointerleave',reset);el.removeEventListener('blur',reset,true);gsap.killTweensOf(el);gsap.set(el,{clearProps:'transform'});});
      });
    },root);
    return ()=>{cleanups.forEach(fn=>fn());context.revert();};
  },[enabled]);
  return null;
}
