import { readFile, writeFile, mkdir } from 'node:fs/promises';
const pages = JSON.parse(await readFile(new URL('../src/seo/pages.json', import.meta.url), 'utf8'));
const dist = new URL('../dist/', import.meta.url);
const template = await readFile(new URL('index.html', dist), 'utf8');
const escape = value => value.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
for (const [route, page] of Object.entries(pages)) {
  const canonical = 'https://www.vigneshp.dev' + page.canonical;
  let html = template.replace(/<title>.*?<\/title>/, `<title>${escape(page.title)}</title>`);
  for (const [attribute, key, value] of [
    ['name', 'description', page.description], ['property', 'og:title', page.title],
    ['property', 'og:description', page.description], ['property', 'og:url', canonical],
    ['name', 'twitter:title', page.title], ['name', 'twitter:description', page.description],
  ]) {
    html = html.replace(new RegExp(`<meta ${attribute}="${key}" content="[^"]*"\\s*/?>`), `<meta ${attribute}="${key}" content="${escape(value)}" />`);
  }
  html = html.replace(/<link rel="canonical" href="[^"]*"\s*\/?>/, `<link rel="canonical" href="${canonical}" />`);
  html = html.replace(/<noscript>[\s\S]*?<\/noscript>/, `<noscript><main><h1>${escape(page.title)}</h1><p>${escape(page.description)}</p><nav><a href="/">Home</a> · <a href="/about">About</a> · <a href="/projects">Projects</a> · <a href="/contact">Contact</a></nav><p>Enable JavaScript to explore the interactive portfolio.</p></main></noscript>`);
  const folder = new URL(route === '/' ? './' : `.${route}/`, dist);
  await mkdir(folder, { recursive: true });
  await writeFile(new URL('index.html', folder), html);
}
console.log(`Generated static metadata for ${Object.keys(pages).length} routes.`);
