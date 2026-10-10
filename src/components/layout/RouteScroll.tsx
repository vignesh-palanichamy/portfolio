import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/** Restore the destination after React mounts a new route and its layout effects. */
export default function RouteScroll() {
  const { pathname, hash, key } = useLocation();
  useEffect(() => {
    let secondFrame = 0;
    const firstFrame = requestAnimationFrame(() => {
      secondFrame = requestAnimationFrame(() => {
        if (hash) {
          let id = hash.slice(1);
          try { id = decodeURIComponent(id); } catch { /* Preserve literal malformed hashes. */ }
          document.getElementById(id)?.scrollIntoView({ behavior: 'instant' });
        } else {
          window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
        }
      });
    });
    return () => { cancelAnimationFrame(firstFrame); cancelAnimationFrame(secondFrame); };
  }, [pathname, hash, key]);
  return null;
}
