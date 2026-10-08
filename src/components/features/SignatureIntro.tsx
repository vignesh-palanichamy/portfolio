import { useCallback, useEffect, useId, useRef, useState, type CSSProperties } from "react";
import { RotateCcw } from "lucide-react";
import signature from "@/assets/signature.png";
import strokes from "@/assets/signature-strokes.json";
import "./SignatureIntro.css";

export function SignatureIntro() {
  const [active, setActive] = useState(true);
  const [leaving, setLeaving] = useState(false);
  const [run, setRun] = useState(0);
  const [reduced, setReduced] = useState(false);
  const replay = useRef<HTMLButtonElement>(null);
  const skip = useRef<HTMLButtonElement>(null);
  const maskId = useId().replace(/:/g, "");
  const finish = useCallback(() => setLeaving(true), []);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (!active) return;
    const bodyOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const main = document.getElementById("portfolio-content");
    main?.setAttribute("inert", "");
    skip.current?.focus({ preventScroll: true });
    const timer = window.setTimeout(finish, reduced ? 650 : 5100);
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") finish();
      if (event.key === "Tab") { event.preventDefault(); skip.current?.focus(); }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = bodyOverflow;
      main?.removeAttribute("inert");
      window.clearTimeout(timer);
      window.removeEventListener("keydown", onKey);
    };
  }, [active, run, reduced, finish]);

  useEffect(() => {
    if (!leaving) return;
    const timer = window.setTimeout(() => {
      setActive(false);
      window.requestAnimationFrame(() => replay.current?.focus({ preventScroll: true }));
    }, reduced ? 0 : 650);
    return () => window.clearTimeout(timer);
  }, [leaving, reduced]);

  return <>
    {active && <div key={run} className={`signature-intro ${leaving ? "signature-intro--leaving" : ""} ${reduced ? "signature-intro--still" : ""}`} role="dialog" aria-modal="true" aria-label="Welcome to Vignesh’s portfolio">
      <div className="signature-intro-art">
        <svg viewBox="0 0 994 321" role="img" aria-label="Vignesh Palanichamy’s signature" className="signature-intro-svg">
          <defs><mask id={maskId} maskUnits="userSpaceOnUse" x="0" y="0" width="994" height="321">
            {strokes.map((stroke, index) => <path key={index} className="signature-ink-reveal" d={stroke.d} fill="none" stroke="white" strokeWidth="18" strokeLinecap="round" strokeLinejoin="round" pathLength="1" style={{ "--stroke-delay": `${stroke.delay}s`, "--stroke-duration": `${stroke.duration}s` } as CSSProperties} />)}
            <rect className="signature-ink-finish" width="994" height="321" fill="white" />
          </mask></defs>
          <image href={signature} width="994" height="321" mask={`url(#${maskId})`} style={{ filter: "brightness(0)" }} />
        </svg>
        <p className="signature-intro-caption">A little of me. In everything I build.</p>
      </div>
      <button ref={skip} type="button" className="signature-intro-skip" onClick={finish}>Skip intro <span aria-hidden="true">↗</span></button>
    </div>}
    {!active && <button ref={replay} type="button" className="signature-intro-replay" onClick={() => { setLeaving(false); setRun(value => value + 1); setActive(true); }}><RotateCcw size={12} aria-hidden="true" /> Replay intro</button>}
  </>;
}
