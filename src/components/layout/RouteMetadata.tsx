import pageMetadata from '@/seo/pages.json';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const origin = 'https://www.vigneshp.dev';
const pages: Record<string, { title: string; description: string; canonical: string }> = pageMetadata;

function setMeta(attribute: 'name' | 'property', key: string, content: string) {
  let element = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }
  element.content = content;
}

export default function RouteMetadata() {
  const { pathname } = useLocation();
  useEffect(() => {
    const page = pages[pathname.replace(/\/+$/, '') || '/'];
    const title = page?.title ?? 'Page not found — Vignesh Palanichamy';
    const description = page?.description ?? 'The requested portfolio page could not be found.';
    document.title = title;
    setMeta('name', 'description', description);
    setMeta('name', 'robots', page ? 'index, follow' : 'noindex, follow');
    setMeta('property', 'og:title', title);
    setMeta('property', 'og:description', description);
    setMeta('name', 'twitter:title', title);
    setMeta('name', 'twitter:description', description);
    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (page) {
      if (!canonical) {
        canonical = document.createElement('link');
        canonical.rel = 'canonical';
        document.head.appendChild(canonical);
      }
      canonical.href = origin + page.canonical;
      setMeta('property', 'og:url', canonical.href);
    } else {
      canonical?.remove();
      document.head.querySelector('meta[property="og:url"]')?.remove();
    }
  }, [pathname]);
  return null;
}
