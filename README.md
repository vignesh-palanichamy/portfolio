# Vignesh Palanichamy — Portfolio

Personal portfolio built with React 18, TypeScript and Vite. The production website is https://www.vigneshp.dev/.

## Application

- `/`: cinematic portfolio with SVG depth effects, GSAP scroll sequences, skills, featured projects and contact links.
- `/projects`: 26 selected GitHub repositories with search, language filtering and pagination. A saved snapshot is refreshed using the public GitHub API; private links require appropriate GitHub access.
- `/about`: profile, education, experience, services and achievements.
- `/contact`: profile, phone/email links, social links and a Google Maps embed. There is no contact submission form.
- `/cinema-demo`: duplicate cinematic page, canonicalized to `/`.
- Other routes render the application’s not-found page.

Styling uses Tailwind CSS and custom CSS. Interaction libraries include GSAP and Framer Motion. Three.js is installed, but the currently routed hero uses SVG/CSS/GSAP rather than a WebGL scene.

## Development

Install a Node.js version supported by Vite 5 (Node 18+ or 20+) and npm, then run:

```sh
npm ci
npm run dev
```

The configured development URL is `http://localhost:3000`. GitHub details, Google Fonts and Maps require network access. Public GitHub requests may be rate limited; the selected repository snapshot remains available.

## Build and preview

```sh
npm run build
npm run preview
```

The build output is `dist/`. Preview normally serves `http://localhost:4173`; use the URL printed by Vite. `npm run build:dev` creates a development-mode build.

## Validation

```sh
npx tsc --noEmit -p tsconfig.app.json
npx tsc --noEmit -p tsconfig.node.json
npm run lint
npm run build
```

ESLint uses `eslint.config.js` and the installed TypeScript, React Hooks and React Refresh plugins. Existing lint findings are not automatically fixed. There is currently no automated test script in `package.json`.

For browser QA, exercise navigation, direct URLs, refresh/history, project search/filter/pagination, external links, motion controls, keyboard access, images and fonts. Capture comparable screenshots at 360×800, 390×844, 768×1024, 1440×900 and 1920×1080. Use Lighthouse lab reports and accessibility checks alongside manual inspection; keep temporary QA evidence outside the repository.

## Deployment and SEO

The production host is Vercel. Use the Vite build command `npm run build` and output directory `dist`. The existing `vercel.json` supplies the SPA rewrite. A deployment must be explicitly authorized and performed separately; running a local build or preview does not deploy.

After an approved deployment, verify known-route refreshes, HTTPS/domain redirects, static assets, `/robots.txt` and `/sitemap.xml`. The sitemap must return XML. The existing catch-all rewrite can still produce soft 404s; changing server routing is a separate task.

`index.html` provides static homepage metadata. Route-specific metadata is updated in the browser by `RouteMetadata`; crawlers that do not execute JavaScript may see homepage metadata on deep routes. The duplicate `/cinema-demo` canonical points to `/`. Verify social crawler behavior separately rather than assuming client-rendered metadata is supported.
