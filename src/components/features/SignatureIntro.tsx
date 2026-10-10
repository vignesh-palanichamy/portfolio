import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import signature from '@/assets/signature.png';

export default function SignatureIntro({ motion }: { motion: boolean }) {
  const overlay=useRef<HTMLDivElement>(null);
  const audio=useRef<HTMLAudioElement>(null);
  useEffect(()=>{
    const element=overlay.current;
    const sound=audio.current;
    if(!motion||!element||!sound)return;
    let alive=true;
    let introActive=true;
    let played=false;
    let pending=false;
    sound.volume=1;
    sound.currentTime=0;
    element.dataset.sound='loading';
    const play=()=>{
      if(!alive||!introActive||played||pending||document.hidden)return;
      pending=true;
      void sound.play().then(()=>{
        pending=false;
        if(!alive||!introActive||document.hidden){sound.pause();return;}
        played=true;
        element.dataset.sound='playing';
        removeRetry();
      }).catch((error: DOMException)=>{
        pending=false;
        if(!alive||!introActive)return;
        element.dataset.sound=error.name==='NotAllowedError'?'blocked':error.name==='AbortError'?'loading':'error';
      });
    };
    const stop=()=>{
      sound.pause();
    };
    const retry=(event: Event)=>{
      if(event.type==='pointerdown'&&(event as PointerEvent).pointerType==='touch')return;
      if(event.isTrusted&&element.dataset.sound!=='error')play();
    };
    const removeRetry=()=>{
      document.removeEventListener('pointerdown',retry);
      document.removeEventListener('pointerup',retry);
      document.removeEventListener('touchend',retry);
      document.removeEventListener('keydown',retry);
    };
    const complete=()=>{
      introActive=false;
      removeRetry();
      sound.removeEventListener('canplay',play);
      stop();
    };
    const hidden=()=>{
      if(document.hidden)stop();
      else if(!played && element.dataset.sound!=='blocked')play();
    };
    document.addEventListener('visibilitychange',hidden);
    document.addEventListener('pointerdown',retry);
    document.addEventListener('pointerup',retry);
    document.addEventListener('touchend',retry,{passive:true});
    document.addEventListener('keydown',retry);
    const ctx=gsap.context(()=>{
      gsap.timeline()
        .set(element,{autoAlpha:1})
        .fromTo('.cd-signature',{clipPath:'inset(0 100% 0 0)'},{clipPath:'inset(0 0% 0 0)',duration:1.8,ease:'power2.inOut'})
        .to(element,{autoAlpha:0,duration:.7,onComplete:complete},2);
    },overlay);
    if(sound.readyState>=3)play();
    else {sound.addEventListener('canplay',play,{once:true});sound.load();}
    return()=>{
      alive=false;complete();
      document.removeEventListener('visibilitychange',hidden);
      ctx.revert();
    };
  },[motion]);
  if(!motion)return null;
  return <div ref={overlay} className="cd-opening" aria-hidden="true"><audio ref={audio} src="/audio/loader-digital-sweep-pop.wav" preload="auto"/><img className="cd-signature" src={signature} alt=""/><span>A LITTLE OF ME. IN EVERYTHING I BUILD.</span></div>;
}
