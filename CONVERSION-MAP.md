# Conversion map: React → 11ty

A row-by-row mapping of the original Claude Design export to the new 11ty project,
so you can trace where each piece of the React code now lives.

## Source files (original — untouched)
Located in: `../Website Codebase/`

- `index.html` — React mount + Babel standalone loader
- `components-a.jsx` — Logo, Nav, Hero (+ HeroSearch, HeroChips, HeroTrust, HeroVisual), Filters, CertCard, CertGrid
- `components-b.jsx` — WhyCertify, HowItWorks, FAQ, Footer, TweaksPanel
- `certs-data.js` — window.CERT_CATEGORIES and window.CERTS
- `tokens.css`, `styles.css` — design tokens + component styles
- `fonts/`, `icons/` — static assets

## New structure

```
Website Codebase 11ty/
├── .eleventy.js                  Build config (paths, passthrough copy)
├── package.json                  npm scripts + @11ty/eleventy dep
├── .gitignore
├── CONVERSION-MAP.md             This file
└── src/
    ├── index.njk                 Homepage (layout + partials assembly)
    ├── sitemap.njk               /sitemap.xml
    ├── robots.njk                /robots.txt
    ├── tokens.css                (copied — unchanged)
    ├── styles.css                (copied — unchanged)
    ├── fonts/                    (copied — unchanged)
    ├── icons/                    (copied — unchanged)
    ├── assets/js/app.js          Vanilla JS for interactivity
    ├── _data/
    │   ├── site.js               Site metadata, stats, featuredChips
    │   ├── categories.js         from window.CERT_CATEGORIES
    │   └── certs.js              from window.CERTS
    └── _includes/
        ├── layouts/base.njk      HTML shell (head, meta, script)
        └── partials/
            ├── nav.njk           Nav + Logo
            ├── hero.njk          Hero + HeroSearch + HeroChips + HeroTrust + HeroVisual
            ├── certifications.njk   Filters + CertGrid + CertCard (grouped view)
            ├── why.njk           WhyCertify
            ├── how.njk           HowItWorks
            ├── faq.njk           FAQ (+ FAQPage JSON-LD for SEO)
            └── footer.njk        Footer
```

## Component → template mapping

| React component (source)          | 11ty location (destination)                     | Notes |
|-----------------------------------|--------------------------------------------------|-------|
| `Logo`                            | Inline in `partials/nav.njk`                    | No state, inlined |
| `Nav`                             | `partials/nav.njk`                              | Scroll progress handled in `app.js` |
| `Hero` (split variant only)       | `partials/hero.njk`                             | Chose "split" layout as default; "centered" variant dropped |
| `HeroSearch`                      | `partials/hero.njk`                             | `<input id="js-hero-search">` — wired in `app.js` |
| `HeroChips`                       | `partials/hero.njk`                             | Loops `site.featuredChips` |
| `HeroTrust`                       | `partials/hero.njk`                             | Stats come from `site.stats` |
| `HeroVisual`                      | `partials/hero.njk`                             | Static illustration |
| `Filters`                         | `partials/certifications.njk` (top half)        | Category chip row; counts computed at build time |
| `CertCard`                        | `partials/certifications.njk` (inside grid loop)| Data attributes (`data-code`, `data-name`, etc.) used by search JS |
| `CertGrid`                        | `partials/certifications.njk` (bottom half)     | Always renders grouped view; JS hides non-matches |
| `WhyCertify`                      | `partials/why.njk`                              | Static content |
| `HowItWorks`                      | `partials/how.njk`                              | Step count references `certs.length` dynamically |
| `FAQ`                             | `partials/faq.njk`                              | + FAQPage JSON-LD injected for Google rich results |
| `Footer`                          | `partials/footer.njk`                           | Category columns sorted by group size desc |
| `TweaksPanel`                     | **Removed**                                     | Design-mode only, not for production |

## Data → template mapping

| Original data source           | New 11ty path              | Access in templates |
|--------------------------------|----------------------------|---------------------|
| `window.CERT_CATEGORIES`       | `src/_data/categories.js`  | `{{ categories }}`  |
| `window.CERTS`                 | `src/_data/certs.js`       | `{{ certs }}`       |
| n/a (hardcoded in components)  | `src/_data/site.js`        | `{{ site.xxx }}`    |

## React state → vanilla JS mapping

| React hook in original         | Replacement in `src/assets/js/app.js`                |
|--------------------------------|-------------------------------------------------------|
| `useState(progress)`           | `updateProgress()` on scroll event                    |
| `useState(query)` + useMemo    | `currentQuery` + `applyFilters()` with DOM filtering  |
| `useState(filters)`            | `activeFilter` + chip click handler                   |
| `useState(open)` (FAQ)         | Single-expand accordion on `.faq-q` click             |
| Edit-mode postMessage handlers | **Removed** (design-mode only)                        |

## Data quality note (flagged before conversion)

Your `certs-data.js` has **30** certifications, but the copy said *"29"* in three places
(Hero subhead, HeroTrust stat, FAQ answer). Fixed in 11ty by making the number dynamic —
`{{ certs.length }}` renders in all three places, so you only have to update the data
file to change the count everywhere.

## SEO wins gained in the conversion

1. **All content in page source at first byte** — Google sees every cert card, FAQ answer, and section heading immediately (React was rendering client-side into an empty div).
2. **FAQPage structured data** — `faq.njk` emits JSON-LD so Google can show FAQ rich results.
3. **Sitemap + robots.txt** — served from `/sitemap.xml` and `/robots.txt`.
4. **Canonical URL** — set in base layout, driven by `site.url`.
5. **Open Graph meta** — title/description/url/type present for social sharing.
6. **Semantic HTML** — no more `<div id="root">` wrapper; proper `<main>`, `<section>`, `<article>`-style structure.
7. **No JS bundle** — `react@18.3.1` (140 KB), `react-dom` (1.3 MB unminified), and `@babel/standalone` (2.4 MB) are all gone. Only ~5 KB of vanilla JS remains.

## Local dev

```bash
cd "Website Codebase 11ty"
npm install
npm start          # dev server with live reload
npm run build      # production build → _site/
```

## Deploy (Cloudflare Pages)

- Build command: `npx @11ty/eleventy`
- Build output: `_site`
- Node version: `20`
