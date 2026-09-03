# CLAUDE.md — Align Solutions Website

---

## Always Do First
- **Invoke the `frontend-design` skill** before writing any frontend code, every session, no exceptions.
- **Check the `brand_assets/` folder** before designing. Use whatever is in there. Never invent brand colours, logos, or typography. If a real asset exists, use it — no placeholders.

---

## Project Overview
Full multi-page marketing website for Align Solutions, an engineering firm
specialising in design, maintenance and reliability engineering.

Brand tagline: "Bridging design, maintenance and reliability engineering to
power smarter, future-ready solutions."

The site should feel authoritative, cinematic, and distinctly non-generic.
It should look like it was designed by someone who understands engineering —
not someone who googled "engineering website".

---

## Stack & Output Defaults
- **No Tailwind, no CDNs.** The built site is hand-rolled CSS with custom properties and is fully self-contained — zero external scripts, stylesheets, or fonts. Keep it that way.
- All styles/JS inline per page. Each page duplicates the shared nav/footer/JS — when editing shared parts, apply the same change to every page.
- Vanilla JS only — no React, no frameworks, no jQuery, no build tools
- Fonts: self-hosted WOFF2 in `assets/fonts/` with `font-display: swap`. Never ship the raw TTFs in `Brand_Assets/Neue Haas Font/`.
- Images: optimized WebP in `assets/images/` (1600w desktop + 800w mobile variants). `Brand_Assets/Images/` holds multi-MB raw originals which must never be referenced from pages.
- Responsive always. Note: existing pages use desktop-first `max-width` queries at 1024/768/480 — match that convention; don't mix directions within a page.

### File Structure (actual)
```
align-solutions/
├── index.html, about.html, services.html, sectors.html,
│   case-studies.html, how-we-work.html, packages.html, lubricants.html, contact.html
├── privacy.html, terms.html
├── favicon.svg, favicon-32.png, apple-touch-icon.png
├── robots.txt, sitemap.xml
├── vercel.json, .vercelignore   (host is Vercel: security headers + deploy exclusions)
├── assets/
│   ├── fonts/    (woff2)
│   └── images/   (webp, optimized)
└── Brand_Assets/ (source assets: SVG logos, raw photos, fonts, og-image.jpg, logo-512.png)
```

---

## Local Server
- **Always serve on localhost** — never screenshot a `file:///` URL.
- Start the dev server: `node serve.mjs` (serves project root at `http://localhost:3000`)
- `serve.mjs` lives in the project root. Start it in the background before any screenshots.
- If the server is already running, do not start a second instance.

---

## Screenshot Workflow
- Puppeteer is installed in the project's `node_modules/` (devDependency)
- **Always screenshot from localhost:** `node screenshot.mjs http://localhost:3000`
- If port 3000 is taken by another app, run `PORT=3210 node serve.mjs` and point screenshot.mjs at that port
- This project lives in iCloud Drive. If `node screenshot.mjs` or `git` hangs, the files are iCloud-evicted ("dataless"): run `brctl download <path>` on the html/assets folders, or run puppeteer-core from a folder outside iCloud with the system Chrome (`/Applications/Google Chrome.app/Contents/MacOS/Google Chrome`)
- Screenshots save to `./temporary screenshots/screenshot-N.png` (auto-incremented, never overwritten)
- Optional label: `node screenshot.mjs http://localhost:3000 label` → `screenshot-N-label.png`
- After screenshotting, read the PNG from `temporary screenshots/` with the Read tool and analyse it directly

### Reference Image Workflow
- If a reference image is provided: match layout, spacing, typography, and colour exactly. Use placeholder content. Do not improve or add to the design.
- If no reference image: design from scratch with high craft (see brand and guardrail rules below)
- Screenshot → compare → fix → re-screenshot. Minimum 2 rounds. Stop only when no visible differences remain or user says so.
- Be specific when comparing: "heading is 32px but reference shows ~24px", "card gap is 16px but should be 24px"
- Check: spacing/padding, font size/weight/line-height, colours (exact hex), alignment, border-radius, shadows, image sizing

---

## Brand Rules — Always Follow Without Being Asked

### Colours
- Cobalt (primary): `#3e51a3`
- White: `#ffffff`
- Grey 60: `#9c9c9c`
- Grey 20 (dark): `#434344`
- The site is FLAT COBALT with white type, matching the social templates. Every section background is cobalt. No gradients.
- Navy `#1b2456` is the secondary colour, used only for depth: the frosted nav, glass card fills, the mobile nav overlay, the footer panel and the footer mark. Never as a plain section background.
- White is the ink. Layering is frosted glass (see Frosted glass below) or white at an opacity (`--w07` to `--w90`).
- One solid white card (cobalt text) is allowed per section as that section's hero element; everything else is a glass card.
- Grey 20 is used only for the location "pin pill"; `--plate` (`#e2e3e7`) only for the flat logo plate over photography.
- **Never use default Tailwind palette** (indigo-500, blue-600, etc.) — always use the exact brand hex values above

### CSS Design Tokens
Every page defines the brand tokens as CSS custom properties in `:root` — use these variables, never raw hex, in page CSS:
```css
:root {
  --cobalt:     #3e51a3;  /* base surface, every section */
  --cobalt-dk:  #2f3d7e;  /* pressed states only */
  --navy:       #1b2456;  /* secondary: depth, panels, the footer mark */
  --white:      #ffffff;
  --plate:      #e2e3e7;  /* flat logo plate over imagery only */
  --grey20:     #434344;  /* pin pill body only */
  --grey60:     #9c9c9c;
  --w90 ... --w07: rgba(255,255,255, 0.9 ... 0.07);  /* text, rules, surfaces */
  --ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1);
  --ease-out:    cubic-bezier(0.16, 1, 0.3, 1);
  --glass-bg: rgba(27,36,86,0.34);  --glass-bg-strong: rgba(27,36,86,0.5);
  --glass-border: rgba(255,255,255,0.14);  --glass-blur: blur(18px);
}
```
Text colours: headings `--white`, body `--w75`, labels `--w60`, very muted `--w40`. Rules `--w12`, card outlines `--w22`, hover `--w40` / `--white`.

### Page stylesheet structure
Each page's `<style>` is: shared block A (fonts, tokens, body, `.glass`, nav, buttons, `.eyebrow`, `.em-text`, page-hero, `.mark-band` + `.blend-mark`, `.pin-pill`, `.brand-chip`) + page-specific CSS + shared block B (CTA, footer, fade-up, mobile nav, shared responsive, reduced motion). The shared blocks are identical on every subpage; `index.html` carries its own home-specific version of the same rules. When a shared rule changes, change it on every page.

### Typography
- Primary typeface: Neue Haas Grotesk Display Pro
- Fallback: `'Helvetica Neue', Helvetica, Arial, sans-serif`
- Headings: Bold, sentence case, tight tracking (`-0.04em` display, `-0.035em` h2, `-0.02em` card titles), line-height 0.92 to 1.0. On the home hero the trailing comma and full stop hang (`.hang`, absolutely positioned) so the word mass centres optically
- Only two weights are used: Bold (700) for headings and display, Medium (500) for everything else. The Thin cut has been deleted from `assets/fonts/` and Regular (400) is never used, so body copy and subtitles sit close to the headings. Never reintroduce weights 100, 300 or 400. Weight-contrast pairings are Medium against Bold (e.g. "We Engineer" 500 / "Reliability." 700). Emphasis inside copy = `.em-text` (bold white)
- Body copy: Medium weight (set on `body`), sentence case, 140% line height, `-0.01em` tracking
- Small labels: 0.66rem, Medium, uppercase, `0.12em` tracking (nav links and pill buttons `0.1em`), `--w60` (the shared `.eyebrow` class)
- Never introduce any other typeface

### Logo
- White/reversed logo on dark or cobalt backgrounds
- Positive logo on white or very light backgrounds
- Never rotate, distort, recolour, or alter the logo
- Minimum digital size: 130px wide
- Clear space on all sides equal to the cap height of the 'A'

### Imagery
- Photography must feel cinematic, documentary, and real
- Gritty, high-grain, honest industrial — never clean stock photography
- Photography is shown natural (no tints, no gradient overlays) inside a `.mark-band`: a real `<img class="mark-band-photo">` (`object-fit: cover`, `srcset` 800w/1600w) with the white logomark laid over it as `<img class="blend-mark">` in `mix-blend-mode: difference`, so the photo inverts inside the mark exactly like the social posts. The band has `isolation: isolate` so the blend never touches the cobalt sheet. Each page positions the mark with `--mark-w` / `--mark-x` / `--mark-y` on `.page-band`. A `.pin-pill` (grey20 pill, cobalt pin) labels the location
- Any logo on photography uses the same treatment: `.blend-mark` for the white mark, `.blend-logo` (white silhouette + difference) for coloured logos. Never a flat black or tinted logo over a photo
- The home hero above the band is the kinetic fabric: a canvas cloth simulation in `.hero-scroll-zone` drawn as navy (`--navy`) constraint lines on the cobalt sheet. Under the pointer and the click ripple the lines lift toward a mid blue (white at `--w40` strength over cobalt), never to white, so the mesh stays behind the copy. It has a pointer dent, a click ripple, and a pause / play `.btn-pill` in the corner. It runs only while in view, steps at 60Hz, and starts still under reduced motion
- The home band carries `data-reveal`: the photo is hidden on load and rises in behind the mark as the page scrolls, driven by scroll position through the `--reveal` custom property, never by a timer
- The services page lists the six disciplines as a bento (`.bento` in services.html): centred pill, heading and subline, then six blocks on a 12-column grid, Reliability as the one white card. Each block carries a photo panel, a JPEG in `assets/images/services/<slug>.jpg` (reliability, maintenance, design, asset-management, project-delivery, hseq), placed by the block's modifier class. The renders are shown whole, studio-white ground and all, as 1400px JPEGs on white photo panels (`.bento-media`), never cut out
- Shell and Castrol always sit in `.brand-chip`, a bare sizing wrapper with no background, border or blur: the logo sits straight on the sheet at a fixed height (Shell 84px, Castrol 40px; 64px and 30px on mobile), colours untouched. Add `.brand-chip--blend` only when a logo sits on a photograph
- Never use illustrations or generic clipart-style icons

---

## Design Principles — Always Apply

1. Flat cobalt everywhere, white ink. Navy appears only as depth: the frosted nav, glass fills and the footer
2. When in doubt, go more minimal not more busy
3. White space is deliberate, not wasted
4. Every section has one clear hero element — everything else supports it
5. Industrial = precise, not decorative. Restraint is the aesthetic.
6. Surfaces should have a layering system (base → elevated → floating) — not everything at the same z-plane

### Shadows
- No shadows on cards or buttons
- One soft black drop-shadow only on the 3D logomark (`drop-shadow(0 30px 36px rgba(0,0,0,0.28))`)

### Gradients
- None. No background gradients, no gradient text, no gradient borders, no radial glows, no noise textures. Depth comes from frosted glass, never from gradients

### Frosted glass
- One recipe everywhere: `background: var(--glass-bg); backdrop-filter: var(--glass-blur); border: 1px solid var(--glass-border); border-radius: 20px` (the `.glass` class in shared block A)
- Applied to: every non-featured card, the nav (`rgba(27,36,86,0.55)` + blur 20px), the mobile nav overlay, section panels such as "Not sure which package fits?", and the footer content panel (`--glass-bg-strong`, blur 22px)
- Featured cards stay solid white with cobalt ink; inputs stay outlined and transparent
- Footer layout: the navy mark (740px) is absolutely positioned at the top of `.footer-visual` (min-height 780px); the frosted panel rises over its lower half; the ALIGN SOLUTIONS wordmark closes the page

---

## Interactions & Animations — Always Suggest

Proactively suggest animations and interactions that could elevate the UI.
When suggesting, provide the code ready to drop in — don't just describe it.

- Scroll-triggered fade/slide-ins on section entry (`IntersectionObserver`)
- Smooth anchor scrolling
- Hover states on every interactive element — never leave a hover unstyled
- Every clickable element needs hover, `focus-visible`, and active states. No exceptions.
- Page transition feels (opacity fades between pages)
- Number counters animating up on scroll for stats sections
- Parallax on hero images where appropriate
- CSS-only animations before reaching for JS
- **Only animate `transform` and `opacity`** — never `transition-all`
- Use spring-style easing: `cubic-bezier(0.34, 1.56, 0.64, 1)`

---

## Code Standards

- Clean, well-commented code always
- Comment every major CSS section and every JS function
- Use CSS custom properties for all brand colours and fonts — never hardcode hex values outside `:root`
- Mobile first — small screens first, layer up with `min-width` media queries
- Breakpoints: 480px / 768px / 1024px / 1440px
- All images must have descriptive alt text
- Semantic HTML: `nav`, `main`, `section`, `article`, `footer` — used correctly
- No inline styles
- No `!important` unless absolutely unavoidable, and commented explaining why
- No `transition-all` ever

---

## Tone of Voice — For Any Copy You Write or Suggest

- Direct and confident — never waffle
- Technical credibility without jargon overload
- No buzzword fluff: never write "synergy", "solutions-driven", "best-in-class", "leverage"
- Short sentences. Active voice.
- Speaks like a senior engineer who also happens to communicate clearly

---

## What I Never Want Without Being Asked

- No Bootstrap, no React, no jQuery
- No Google Fonts (brand uses licensed Neue Haas Grotesk)
- No lorem ipsum left in delivered code
- No emoji in the UI
- No drop shadows unless they serve a clear purpose
- No gradients of any kind, no dark navy surfaces
- No carousels or sliders as a solution to anything
- No cookie banners, GDPR popups, or analytics scripts
- No default Tailwind blue/indigo as a primary colour

---

## When You're Unsure

Build the more minimal version first. Then flag:
1. What you built
2. What decisions you made and why
3. What I should consider changing

Keep it brief.
