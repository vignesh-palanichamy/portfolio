import { useEffect, useId, useRef } from 'react';
import { gsap } from 'gsap';

const contour = 'M -110 -125 C -80 -151 83 -147 110 -119 C 137 -90 100 -34 130 24 C 165 86 120 131 62 137 C 15 143 5 115 -47 129 C -114 146 -155 103 -139 58 C -116 4 -139 -86 -110 -125 Z';
const letter = 'M -65 -69 L -21 -69 L 1 24 L 43 -69 L 84 -69 L 21 80 Q 12 99 -10 88 L -28 78 Z';

export default function VLogo({ motion, tiltEnabled = true }: { motion: boolean; tiltEnabled?: boolean }) {
  const finish = useId();
  const root = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = root.current;
    const stage = el?.closest<HTMLElement>('.cd-stage');
    const logo = el?.querySelector<HTMLElement>('.cd-v-mark');
    if (!motion || !el || !stage || !logo) return;
    const layers = Array.from(el.querySelectorAll<SVGGElement>('.cd-v-layer'));
    const mobile = window.matchMedia('(hover: none) and (pointer: coarse)');
    let box = stage.getBoundingClientRect();
    let neutral: { beta: number; gamma: number } | null = null;
    let visible = true;
    let active = true;
    let lastTilt = 0;
    const ctx = gsap.context(() => {}, el);
    // Reuse the same tweens for every input event instead of allocating new ones.
    const createFollow = () => {
      gsap.set(layers, { svgOrigin: '0 0' });
      const layerMoves = layers.map((layer, index) => {
        const options = { duration: 1.15 - index * .07, ease: 'power3.out' };
        return { x: gsap.quickTo(layer, 'x', options), y: gsap.quickTo(layer, 'y', options), rotation: gsap.quickTo(layer, 'rotation', options) };
      });
      const options = { duration: .65, ease: 'power3.out' };
      return {
        layers: layerMoves,
        x: gsap.quickTo(logo, 'x', options), y: gsap.quickTo(logo, 'y', options),
        rx: gsap.quickTo(logo, 'rotationX', options), ry: gsap.quickTo(logo, 'rotationY', options), rz: gsap.quickTo(logo, 'rotationZ', options),
      };
    };
    let follow: ReturnType<typeof createFollow>;
    ctx.add(() => { follow = createFollow(); });
    let float: gsap.core.Tween;
    let glow: gsap.core.Tween;
    ctx.add(() => {
      float = gsap.to('.cd-v-float', { y: -7, rotation: 1.6, duration: 3.8, yoyo: true, repeat: -1, ease: 'sine.inOut' });
      glow = gsap.to('.cd-v-glow', { scale: 1.07, opacity: .72, duration: 4.6, yoyo: true, repeat: -1, ease: 'sine.inOut' });
    });
    const animate = (x: number, y: number) => {
      const travelX = box.width * .4;
      const travelY = box.height * .4;
      const px = gsap.utils.clamp(-1, 1, x);
      const py = gsap.utils.clamp(-1, 1, y);
      const reachX = Math.max(0, box.width / 2 - logo.offsetWidth / 2 - 24);
      const reachY = Math.max(0, box.height / 2 - logo.offsetHeight / 2 - 70);
      const followX = gsap.utils.clamp(-reachX, reachX, px * travelX);
      const followY = gsap.utils.clamp(-reachY, reachY, py * travelY);
      const svgScale = Math.max(box.width / 1600, box.height / 1000);
      follow.layers.forEach((move, index) => {
        const depth = .35 + index * .13;
        move.x(followX * depth / svgScale);
        move.y(followY * depth / svgScale);
        move.rotation(px * (5 - index) / 2);
      });
      follow.x(followX); follow.y(followY);
      follow.rx(-py * 12.5); follow.ry(px * 17.5); follow.rz(px * 4);
    };
    const reset = () => { neutral = null; animate(0, 0); };
    const sync = () => {
      const next = visible && !document.hidden && Number(gsap.getProperty(el.parentElement, 'opacity')) > .08;
      if (active === next) return;
      active = next;
      float.paused(!active); glow.paused(!active);
      if (!active) reset();
    };
    const resize = new ResizeObserver(() => { box = stage.getBoundingClientRect(); reset(); });
    resize.observe(stage);
    const observer = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; sync(); });
    observer.observe(stage);
    const move = (event: PointerEvent) => {
      if (!active || event.pointerType !== 'mouse') return;
      // The sticky stage stays at viewport top while its portal is visible.
      animate((event.clientX - box.left) / box.width * 2 - 1, (event.clientY - box.top) / box.height * 2 - 1);
    };
    const tilt = (event: DeviceOrientationEvent) => {
      if (!active || !tiltEnabled || !mobile.matches || event.beta == null || event.gamma == null) return;
      const now = performance.now();
      if (now - lastTilt < 32) return;
      lastTilt = now;
      if (!neutral) neutral = { beta: event.beta, gamma: event.gamma };
      const angle = (screen.orientation?.angle ?? 0) * Math.PI / 180;
      const dx = ((event.gamma - neutral.gamma + 540) % 360) - 180;
      const dy = ((event.beta - neutral.beta + 540) % 360) - 180;
      animate((dx * Math.cos(angle) + dy * Math.sin(angle)) / 35, (dy * Math.cos(angle) - dx * Math.sin(angle)) / 45);
    };
    window.addEventListener('deviceorientation', tilt, { passive: true });
    window.addEventListener('scroll', sync, { passive: true });
    window.addEventListener('blur', reset);
    screen.orientation?.addEventListener('change', reset);
    document.addEventListener('visibilitychange', sync);
    stage.addEventListener('pointermove', move);
    stage.addEventListener('pointerleave', reset);
    sync();
    return () => {
      resize.disconnect(); observer.disconnect();
      window.removeEventListener('deviceorientation', tilt);
      window.removeEventListener('scroll', sync);
      window.removeEventListener('blur', reset);
      screen.orientation?.removeEventListener('change', reset);
      document.removeEventListener('visibilitychange', sync);
      stage.removeEventListener('pointermove', move);
      stage.removeEventListener('pointerleave', reset);
      ctx.revert();
    };
  }, [motion, tiltEnabled]);
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

