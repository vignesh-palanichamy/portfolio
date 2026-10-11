import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import './brush-cursor.css';

type Point = { x: number; y: number; time: number };
type Burst = Point & { angle: number };

export default function BrushCursor({ enabled }: { enabled: boolean }) {
  const canvas = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const surface = canvas.current;
    if (!surface || !enabled) return;
    const context = surface.getContext('2d');
    if (!context) return;
    const fine = matchMedia('(hover: hover) and (pointer: fine)');
    const reduced = matchMedia('(prefers-reduced-motion: reduce)');
    let points: Point[] = [];
    let bursts: Burst[] = [];
    let frame = 0;
    let width = 0, height = 0;
    let hover: Element | null = null;
    let underline: { x: number; y: number; width: number } | null = null;
    const allowed = () => fine.matches && !reduced.matches && !document.hidden;
    const clear = () => {
      cancelAnimationFrame(frame); frame = 0;
      points = []; bursts = []; hover = null; underline = null;
      context.clearRect(0, 0, width, height);
    };
    const resize = () => {
      clear(); width = innerWidth; height = innerHeight;
      const ratio = Math.min(devicePixelRatio || 1, 1.5);
      surface.width = Math.round(width * ratio);
      surface.height = Math.round(height * ratio);
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
    };
    const draw = (now: number) => {
      frame = 0;
      if (!allowed()) return clear();
      points = points.filter(p => now - p.time < 190);
      bursts = bursts.filter(p => now - p.time < 320);
      context.clearRect(0, 0, width, height);
      context.lineCap = 'round'; context.lineJoin = 'round';
      for (let i = 1; i < points.length; i++) {
        const a = points[i - 1], b = points[i];
        const life = Math.max(0, 1 - (now - a.time) / 190);
        context.globalAlpha = life * .7;
        context.beginPath(); context.moveTo(a.x, a.y); context.lineTo(b.x, b.y);
        context.strokeStyle = '#101010'; context.lineWidth = 1 + life * 7; context.stroke();
        context.strokeStyle = '#E6D5BD'; context.lineWidth = .5 + life * 5; context.stroke();
        // A fine broken edge gives the short stroke a dry-brush texture.
        if (i % 2 === 0) {
          context.globalAlpha = life * .35;
          context.beginPath(); context.moveTo(a.x + 3, a.y + 3); context.lineTo(b.x + 2, b.y + 2);
          context.lineWidth = 1; context.stroke();
        }
      }
      context.globalAlpha = 1;
      if (underline) {
        const { x, y, width: w } = underline;
        context.beginPath(); context.moveTo(x, y);
        context.quadraticCurveTo(x + w * .5, y + 5, x + w, y - 1);
        context.strokeStyle = '#101010'; context.lineWidth = 5; context.stroke();
        context.strokeStyle = '#E6D5BD'; context.lineWidth = 3; context.stroke();
      }
      for (const burst of bursts) {
        const progress = (now - burst.time) / 320;
        context.globalAlpha = (1 - progress) * .9;
        for (let i = 0; i < 6; i++) {
          const angle = burst.angle + i * Math.PI / 3;
          const radius = 6 + progress * 19;
          const x = burst.x + Math.cos(angle) * radius, y = burst.y + Math.sin(angle) * radius;
          context.beginPath(); context.moveTo(x, y);
          context.lineTo(x + Math.cos(angle) * 4, y + Math.sin(angle) * 4);
          context.strokeStyle = '#101010'; context.lineWidth = 4; context.stroke();
          context.strokeStyle = '#D5360C'; context.lineWidth = 2.5; context.stroke();
        }
      }
      context.globalAlpha = 1;
      if (points.length || bursts.length) frame = requestAnimationFrame(draw);
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(draw); };
    const updateHover = (target: Element) => {
      const next = target.closest('a,button,[role="button"]');
      if (next === hover) return;
      hover = next; underline = null;
      if (next && !next.matches(':disabled,[aria-disabled="true"]')) {
        const box = next.getBoundingClientRect();
        const w = Math.min(44, box.width * .6);
        underline = { x: box.left + (box.width - w) / 2, y: Math.min(height - 8, box.bottom + 7), width: w };
      }
      schedule();
    };
    const move = (event: PointerEvent) => {
      if (!allowed() || event.pointerType !== 'mouse' || !(event.target instanceof Element)) return clear();
      if (event.target.closest('input,textarea,select,[contenteditable="true"],.cd-opening')) return clear();
      const now = performance.now();
      const last = points[points.length - 1];
      if (!last || Math.hypot(event.clientX - last.x, event.clientY - last.y) > 2) {
        points.push({ x: event.clientX, y: event.clientY, time: now });
        if (points.length > 14) points.shift();
      }
      updateHover(event.target); schedule();
    };
    const click = (event: PointerEvent) => {
      if (!allowed() || event.pointerType !== 'mouse' || event.button !== 0 || !(event.target instanceof Element)) return;
      if (event.target.closest('input,textarea,select,[contenteditable="true"]')) return;
      bursts.push({ x: event.clientX, y: event.clientY, time: performance.now(), angle: -.5 });
      bursts = bursts.slice(-3); schedule();
    };
    resize();
    window.addEventListener('pointermove', move, { passive: true });
    window.addEventListener('pointerdown', click, { passive: true });
    window.addEventListener('resize', resize);
    window.addEventListener('scroll', clear, { passive: true });
    window.addEventListener('blur', clear);
    document.documentElement.addEventListener('pointerleave', clear);
    document.addEventListener('visibilitychange', clear);
    fine.addEventListener('change', clear); reduced.addEventListener('change', clear);
    return () => {
      clear(); window.removeEventListener('pointermove', move); window.removeEventListener('pointerdown', click);
      window.removeEventListener('resize', resize); window.removeEventListener('scroll', clear); window.removeEventListener('blur', clear);
      document.documentElement.removeEventListener('pointerleave', clear); document.removeEventListener('visibilitychange', clear);
      fine.removeEventListener('change', clear); reduced.removeEventListener('change', clear);
    };
  }, [enabled]);
  return enabled ? createPortal(<canvas className="brush-cursor" ref={canvas} aria-hidden="true" />, document.body) : null;
}
