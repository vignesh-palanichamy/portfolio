import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const origin = 'https://www.vigneshp.dev';
const home = {
  title: 'Vignesh Palanichamy — Full Stack Developer & 3D Web Enthusiast',
  description: 'Portfolio of Vignesh Palanichamy — Full Stack Developer specializing in React.js, Next.js, Node.js, MongoDB, Three.js & WebGL.',
  canonical: '/',
};
const pages: Record<string, typeof home> = {
  '/': home,
  '/cinema-demo': home,
  '/about': {
    title: 'About Vignesh Palanichamy — Full Stack Developer',
    description: 'Learn about Vignesh Palanichamy’s education, full stack development experience, services and interest in Three.js and WebGL.',
    canonical: '/about',
  },
  '/projects': {
    title: 'Projects — Vignesh Palanichamy',
    description: 'Explore Vignesh Palanichamy’s selected GitHub projects and experiments, with search and language filters.',
    canonical: '/projects',
  },
  '/contact': {
    title: 'Contact Vignesh Palanichamy — Full Stack Developer',
    description: 'Connect with Vignesh Palanichamy by email, phone, GitHub or LinkedIn for full stack development opportunities.',
    canonical: '/contact',
  },
};

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
