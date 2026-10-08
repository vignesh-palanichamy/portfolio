import { useEffect, useRef } from 'react';

export default function HeroCursor({ enabled }: { enabled: boolean }) {
  const cursor = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = cursor.current;
    const hero = el?.closest('.cd-flight');
    if (!enabled || !el || !hero) return;
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)');
    let frame = 0;
    let active = false;
    let x = 0, y = 0, targetX = 0, targetY = 0;
    const draw = () => {
      x += (targetX - x) * .18;
      y += (targetY - y) * .18;
      el.style.transform = `translate3d(${x + 18}px,${y + 20}px,0)`;
      if (active && Math.abs(targetX - x) + Math.abs(targetY - y) > .1) {
        frame = requestAnimationFrame(draw);
      } else frame = 0;
    };
    const hide = () => {
      active = false;
      el.dataset.visible = 'false';
      cancelAnimationFrame(frame);
      frame = 0;
    };
    const move = (event: PointerEvent) => {
      if (!fine.matches || event.pointerType === 'touch') return hide();
      targetX = Math.min(event.clientX, window.innerWidth - 190);
      targetY = Math.min(event.clientY, window.innerHeight - 70);
      if (!active) { x = targetX; y = targetY; }
      active = true;
      const link = (event.target as Element).closest('a,button');
      el.textContent = link ? 'LET’S GO ↗' : 'SCROLL TO EXPLORE ↓';
      el.dataset.link = String(Boolean(link));
      el.dataset.visible = 'true';
      if (!frame) frame = requestAnimationFrame(draw);
    };
    hero.addEventListener('pointermove', move as EventListener);
    hero.addEventListener('pointerleave', hide);
    window.addEventListener('scroll', hide, { passive: true });
    window.addEventListener('blur', hide);
    fine.addEventListener('change', hide);
    return () => {
      hide();
      hero.removeEventListener('pointermove', move as EventListener);
      hero.removeEventListener('pointerleave', hide);
      window.removeEventListener('scroll', hide);
      window.removeEventListener('blur', hide);
      fine.removeEventListener('change', hide);
    };
  }, [enabled]);
  return <div ref={cursor} className="cd-cursor" aria-hidden="true" />;
}
