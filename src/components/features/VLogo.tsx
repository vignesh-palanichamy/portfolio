import { useEffect, useId, useRef } from 'react';
import { gsap } from 'gsap';

const contour = 'M -110 -125 C -80 -151 83 -147 110 -119 C 137 -90 100 -34 130 24 C 165 86 120 131 62 137 C 15 143 5 115 -47 129 C -114 146 -155 103 -139 58 C -116 4 -139 -86 -110 -125 Z';
const letter = 'M -65 -69 L -21 -69 L 1 24 L 43 -69 L 84 -69 L 21 80 Q 12 99 -10 88 L -28 78 Z';

export default function VLogo({ motion }: { motion: boolean }) {
  const finish = useId();
  const root = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = root.current;
    const stage = el?.closest('.cd-stage');
    if (!motion || !el || !stage) return;
    const layers = el.querySelectorAll('.cd-v-layer');
    const logo = el.querySelector('.cd-v-mark');
    const ctx = gsap.context(() => {
      gsap.to('.cd-v-float', { y: -9, rotation: 3, duration: 3, yoyo: true, repeat: -1, ease: 'sine.inOut' });
    }, el);
    const move = (event: PointerEvent) => {
      if (event.pointerType === 'touch') return;
      const box = stage.getBoundingClientRect();
      const x = (event.clientX - box.left) / box.width - .5;
      const y = (event.clientY - box.top) / box.height - .5;
      const mark = logo as HTMLElement;
      const reachX = Math.max(0, box.width / 2 - mark.offsetWidth / 2 - 24);
      const reachY = Math.max(0, box.height / 2 - mark.offsetHeight / 2 - 70);
      const followX = gsap.utils.clamp(-reachX, reachX, x * box.width * .8);
      const followY = gsap.utils.clamp(-reachY, reachY, y * box.height * .8);
      // SVG contours and the HTML logo share the same screen-space destination.
      const svgScale = Math.max(box.width / 1600, box.height / 1000);
      layers.forEach((layer, i) => {
        const depth = .35 + i * .13;
        gsap.to(layer, {
          x: followX * depth / svgScale, y: followY * depth / svgScale,
          rotation: x * (5 - i), svgOrigin: '0 0',
          duration: 1.15 - i * .1, ease: 'power3.out', overwrite: 'auto',
        });
      });
      gsap.to(logo, {
        rotationY: x * 35, rotationX: -y * 25, rotationZ: x * 8,
        x: followX,
        y: followY,
        duration: .65, ease: 'power3.out', overwrite: 'auto',
      });
    };
    const reset = () => {
      gsap.to(layers, { x: 0, y: 0, rotation: 0, duration: 1, overwrite: 'auto' });
      gsap.to(logo, { x: 0, y: 0, rotationX: 0, rotationY: 0, rotationZ: 0, duration: 1, overwrite: 'auto' });
    };
    stage.addEventListener('pointermove', move as EventListener);
    stage.addEventListener('pointerleave', reset);
    return () => {
      stage.removeEventListener('pointermove', move as EventListener);
      stage.removeEventListener('pointerleave', reset);
      gsap.killTweensOf([...layers, logo]);
      ctx.revert();
      gsap.set([...layers, logo], { clearProps: 'transform' });
    };
  }, [motion]);
  return <div className="cd-v-scene" ref={root} aria-hidden="true">
    <svg className="cd-v-contours" viewBox="-800 -500 1600 1000" preserveAspectRatio="xMidYMid slice">
      {[6.2, 4.7, 3.5, 2.55, 1.8, 1.2].map((scale, i) => <g className="cd-v-layer" key={scale}><path d={contour} transform={`scale(${scale})`} fill={['#D5360C','#DF623D','#D5360C','#DF623D','#D5360C','#E6D5BD'][i]} stroke={i === 5 ? '#E6D5BD' : '#B32D0A'} strokeWidth="3" /></g>)}
    </svg>
    <div className="cd-v-mark"><div className="cd-v-float"><div className="cd-v-glow"/><svg viewBox="-100 -110 220 240">
      <defs>
        <linearGradient id={`${finish}-polish`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#F5EBDD"/><stop offset=".32" stopColor="#E6D5BD"/>
          <stop offset=".48" stopColor="#ffffff"/><stop offset=".57" stopColor="#C7AE8C"/>
          <stop offset=".8" stopColor="#E6D5BD"/><stop offset="1" stopColor="#BA9B77"/>
        </linearGradient>
        <linearGradient id={`${finish}-edge`} x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#44403B"/><stop offset=".5" stopColor="#101010"/><stop offset="1" stopColor="#242220"/>
        </linearGradient>
      </defs>
      <path d={letter} transform="translate(7 8)" fill="#101010" stroke="#101010" strokeWidth="14" strokeLinejoin="round"/>
      <path d={letter} fill={`url(#${finish}-polish)`} stroke={`url(#${finish}-edge)`} strokeWidth="12" strokeLinejoin="round"/>
      <path d="M -53 -57 L -24 62 M 49 -55 L 11 48" fill="none" stroke="#ffffff" strokeOpacity=".85" strokeWidth="3" strokeLinecap="round"/>
    </svg></div></div>
  </div>;
}

