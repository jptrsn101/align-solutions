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
- Tailwind CSS via CDN: `<script src="https://cdn.tailwindcss.com"></script>`
- Single `index.html` unless user specifies multi-file
- All styles inline in the HTML file unless told otherwise
- Vanilla JS only — no React, no frameworks, no jQuery, no build tools
- Placeholder images: `https://placehold.co/WIDTHxHEIGHT`
- Mobile-first responsive always

### File Structure (when multi-page is requested)
```
align-solutions/
├── index.html
├── about.html
├── services.html
├── contact.html
├── assets/
│   ├── css/
│   │   ├── global.css
│   │   └── [page-specific].css
│   ├── js/
│   │   ├── global.js
│   │   └── [page-specific].js
│   ├── images/
│   └── brand/
```

---

## Local Server
- **Always serve on localhost** — never screenshot a `file:///` URL.
- Start the dev server: `node serve.mjs` (serves project root at `http://localhost:3000`)
- `serve.mjs` lives in the project root. Start it in the background before any screenshots.
- If the server is already running, do not start a second instance.

---

## Screenshot Workflow
- Puppeteer is installed at `C:/Users/nateh/AppData/Local/Temp/puppeteer-test/`
- Chrome cache: `C:/Users/nateh/.cache/puppeteer/`
- **Always screenshot from localhost:** `node screenshot.mjs http://localhost:3000`
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
- Balance: 35% cobalt / 25% white / 25% grey 60 / 15% grey 20
- The brand leans dark. Reversed (white on cobalt/dark) is preferred over positive (dark on white)
- **Never use default Tailwind palette** (indigo-500, blue-600, etc.) — always use the exact brand hex values above

### Tailwind Custom Config
Always extend Tailwind config in the HTML with brand tokens:
```html
<script>
  tailwind.config = {
    theme: {
      extend: {
        colors: {
          cobalt: '#3e51a3',
          'grey-60': '#9c9c9c',
          'grey-20': '#434344',
        },
        fontFamily: {
          primary: ['"Neue Haas Grotesk Display Pro"', '"Helvetica Neue"', 'Helvetica', 'Arial', 'sans-serif'],
        },
      }
    }
  }
</script>
```

### Typography
- Primary typeface: Neue Haas Grotesk Display Pro
- Fallback: `'Helvetica Neue', Helvetica, Arial, sans-serif`
- Headings: Bold, all caps, tight tracking (`-0.03em` to `0.05em`)
- Body copy: Regular weight, sentence case, 140% line height
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
- Colour palette of images should complement cobalt blue
- Add a gradient overlay (`bg-gradient-to-t from-black/60`) and colour treatment layer with `mix-blend-multiply`
- Never use illustrations or generic clipart-style icons

---

## Design Principles — Always Apply

1. Dark backgrounds are preferred — this brand lives in the dark
2. When in doubt, go more minimal not more busy
3. White space is deliberate, not wasted
4. Every section has one clear hero element — everything else supports it
5. Industrial = precise, not decorative. Restraint is the aesthetic.
6. Surfaces should have a layering system (base → elevated → floating) — not everything at the same z-plane

### Shadows
- Never use flat `shadow-md`
- Use layered, colour-tinted shadows with low opacity
- Example: `box-shadow: 0 2px 8px rgba(62,81,163,0.15), 0 8px 32px rgba(0,0,0,0.3)`

### Gradients
- Layer multiple radial gradients for depth
- Add grain/texture via SVG noise filter where appropriate
- Gradients should reference the cobalt-to-dark brand treatment specifically
- Never use random decorative gradients

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
- No gradients that aren't the cobalt-to-dark brand treatment
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
