# HAI Appearance & Brand Assets Inventory

**Generated:** 23 July 2026  
**Scope:** `heritageai-shared-reference` repository  
**Audit Status:** Complete — all assets located and extracted

---

## Design Tokens: Unified Source of Truth

### tokens.json — Master Brand Definition
**Location:** `C:\Users\HP ZBook\Documents\RenAIssance\HAI\heritageai-shared-reference\tokens\tokens.json`  
**Format:** JSON  
**Purpose:** Canonical brand definition — colours, typography scale, spacing grid, founder credentials, and methodology anchor. Source of truth for all HAI products.  
**Line Count:** 100

**Content:**

```json
{
  "brand": "HeritageAI",
  "version": "2.0",
  "updated": "2026-06",
  "tagline": "Heritage Intelligence. Vision to Value.",
  "description": "AI-powered heritage planning intelligence for listed building consent and householder planning applications in England. Built by an Architect.",

  "founder": {
    "name": "Giles Paul Shorter",
    "credentials": " ·  RIBA · ARB · ",
    "experience": "17 years listed building and conservation practice",
    "note": "Founder credentials — presented as individual attribution, not as regulated body endorsement of the HeritageAI product. HeritageAI is a commercial product, not a regulated practice."
  },

  "colors": {
    "obsidian":         "#1A1814",
    "slate":            "#2E2B26",
    "flint":            "#4A4640",
    "limestone":        "#8C8476",
    "portland":         "#C4BDB2",
    "chalk":            "#EAE6DF",
    "parchment":        "#F5F2EC",
    "warmWhite":        "#FAFAF8",
    "white":            "#FDFCF9",
    "gold":             "#D4AF37",
    "goldDeep":         "#8B6914",
    "goldPale":         "#EDD882",
    "copper":           "#A0522D",
    "heritageGreen":    "#2D4A3E",
    "intelligenceBlue": "#1B3A6B"
  },

  "colorRoles": {
    "background":   "warmWhite (#FAFAF8) — page background",
    "surface":      "parchment (#F5F2EC) — cards, panels, document previews",
    "primaryText":  "obsidian (#1A1814) — all headings and body text",
    "secondaryText":"limestone (#8C8476) — captions, metadata, secondary copy",
    "accent":       "gold (#D4AF37) — ONE use per viewport, maximum. CTA border, active underline.",
    "success":      "heritageGreen (#2D4A3E) — trust badges, completion states",
    "info":         "intelligenceBlue (#1B3A6B) — data labels, links",
    "warning":      "copper (#A0522D) — policy conflicts, annotation"
  },

  "typography": {
    "display": "Cormorant Garamond",
    "body":    "Inter",
    "weights": [300, 400, 500, 600],
    "scale": {
      "display":    "clamp(52px, 6vw, 80px)",
      "h1":         "clamp(38px, 4vw, 48px)",
      "h2":         "clamp(28px, 3vw, 36px)",
      "h3":         "20px",
      "titleLg":    "clamp(20px, 2.4vw, 24px)",
      "titleCard":  "clamp(19px, 2.2vw, 22px)",
      "stat":       "clamp(28px, 3vw, 36px)",
      "bodyLg":     "18px",
      "body":       "16px",
      "bodySm":     "14px",
      "caption":    "13px",
      "label":      "12px",
      "eyebrow":    "11px"
    },
    "corrections": {
      "body":    "Corrected from 14px (tokens.json v1) — WCAG AA requires 16px minimum",
      "label":   "Corrected from 10px — below WCAG minimum for meaningful text",
      "eyebrow": "Corrected from 9px — below WCAG minimum"
    }
  },

  "spacing": {
    "base":      "8px",
    "scale":     [8, 16, 24, 32, 40, 48, 64, 80, 96, 128, 160],
    "radiusSm":  "4px",
    "radiusMd":  "8px",
    "radiusLg":  "12px",
    "radiusXl":  "16px",
    "radius2xl": "24px",
    "corrections": {
      "radiusSm": "Corrected from 2px (tokens.json v1) — 2px reads as clinical, not authoritative",
      "radiusMd": "Corrected from 4px",
      "radiusLg": "Corrected from 8px"
    }
  },

  "borders": {
    "default":  "0.5px solid #C4BDB2",
    "strong":   "1px solid #8C8476",
    "goldRule": "1px solid #D4AF37"
  },

  "methodology": "Vision to Value™ — READ / RESPOND / RESOLVE",
  "domains":     ["heritageai.uk", "heritageai.net"],

  "storage": {
    "sourceCode":   "GitHub — private repo: heritageai-design-system",
    "brandAssets":  "Google Drive — HeritageAI / 00_System",
    "activeWork":   "Local — C:\\Users\\HP ZBook\\Documents\\HeritageAI\\design-system\\"
  }
}
```

---

### tokens/colors.css — Colour Token Implementation
**Location:** `C:\Users\HP ZBook\Documents\RenAIssance\HAI\heritageai-shared-reference\tokens\colors.css`  
**Format:** CSS Custom Properties  
**Purpose:** CSS variable implementation of the colour palette. All HAI products import this to ensure consistent colour rendering. Includes light/dark tints for semantic states.  
**Line Count:** 52

**Content:**

```css
/* ============================================================
   HERITAGEAI — COLOUR TOKENS v2.0
   June 2026
   
   Merged from:
   - HeritageAI Design System v1 (core palette)
   - tokens.json (additional mid-tones: slate, flint, chalk, goldDeep, goldPale)
   
   GOVERNANCE: Do not add colours without updating tokens.json on ZBook.
   tokens.json is the source of truth. This file is the implementation.
   ============================================================ */

:root {

  /* ── Page & Surface ── */
  --color-bg:              #FAFAF8;   /* Warm White — page background */
  --color-bg-warm:         #FDFCF9;   /* Slightly warmer white — from tokens.json */
  --color-surface:         #F5F2EC;   /* Parchment — cards, panels, document previews */
  --color-surface-raised:  #FFFFFF;   /* Pure white — elevated components, modals */
  --color-chalk:           #EAE6DF;   /* Warm light grey — subtle surface variation */

  /* ── Dark Scale — full ladder from tokens.json ── */
  --color-obsidian:        #1A1814;   /* Primary text, headers, logo, footer bg */
  --color-slate:           #2E2B26;   /* Sub-dark — secondary headings on dark backgrounds */
  --color-flint:           #4A4640;   /* Warm dark grey — tertiary text on dark backgrounds */
  --color-limestone:       #8C8476;   /* Secondary text, metadata, captions */
  --color-portland:        #C4BDB2;   /* Dividers, borders, inactive states */

  /* ── Gold — use once per viewport ── */
  --color-gold:            #D4AF37;   /* THE accent. CTA border, active state, one underline */
  --color-gold-deep:       #8B6914;   /* Dark gold — hover state for gold elements */
  --color-gold-pale:       #EDD882;   /* Light gold — tint backgrounds */
  --color-gold-muted:      #D4AF3720; /* 12% opacity — subtle hover backgrounds */

  /* ── Semantic ── */
  --color-heritage-green:       #2D4A3E;   /* Trust signals, success states, badge backgrounds */
  --color-heritage-green-light: #EEF3F1;   /* Success background tint */
  --color-intelligence-blue:    #1B3A6B;   /* Data, technical labels, link hover */
  --color-intelligence-blue-light: #EEF1F7; /* Info background tint */
  --color-copper:               #A0522D;   /* Warning states, highlighted changes */
  --color-copper-light:         #F8F0EB;   /* Warning background tint */

  /* ── Interaction ── */
  --color-focus-ring:      #D4AF3780; /* 50% gold — keyboard focus ring */
  --color-overlay:         #1A181480; /* 50% obsidian — modal overlays */

  /* ── About section authority badge tiers (muted, top = green → bottom = red) ── */
  --badge-tier-1:          #EEF3F1;   /* Conservation / environmental registers */
  --badge-tier-2:          #F3EAE3;   /* Planning practice guidance */
  --badge-tier-3:          #F5F0E3;   /* Historic England advice */
  --badge-tier-4:          #F3E8E8;   /* Statutory policy / listing */
}
```

**Governance Note:** All new colours must update `tokens.json` on GPS's ZBook. This CSS file is the implementation layer; tokens.json is the authoritative source.

---

### tokens/typography.css — Type System & Scale
**Location:** `C:\Users\HP ZBook\Documents\RenAIssance\HAI\heritageai-shared-reference\tokens\typography.css`  
**Format:** CSS (Custom Properties + Utility Classes)  
**Purpose:** Typography scale, font imports, weight/leading/tracking definitions. Includes utility classes (`.text-display`, `.text-body`, etc.) and WCAG AA accessibility corrections from v1.  
**Line Count:** 139

**Content:**

```css
/* ============================================================
   HERITAGEAI — TYPOGRAPHY TOKENS v2.0
   June 2026
   
   Fonts: Cormorant Garamond (display) + Inter (body) — non-negotiable
   
   CORRECTIONS from tokens.json:
   - body: 14px → 16px (WCAG AA minimum for comfortable reading)
   - label: 10px → 12px (below WCAG minimum at 10px)
   - eyebrow: 9px → 11px (9px is sub-accessible for meaningful text)
   - hero: 52px → clamp(52px, 6vw, 80px) (fluid scaling for mobile/4K)
   - section: 42px → clamp(32px, 4vw, 48px) (fluid)
   ============================================================ */

@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=Inter:wght@400;500;600;700&display=swap');

:root {

  /* ── Font Families ── */
  --font-display: 'Cormorant Garamond', Georgia, 'Times New Roman', serif;
  --font-body:    'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;

  /* ── Font Weights ── */
  --weight-light:    300;
  --weight-regular:  400;
  --weight-medium:   500;
  --weight-semibold: 600;
  --weight-bold:     700;

  /* ── Type Scale — fluid where appropriate ── */
  --text-display:  clamp(52px, 6vw, 80px);   /* Hero headline — Cormorant */
  --text-h1:       clamp(38px, 4vw, 48px);   /* Page title — Cormorant */
  --text-h2:       clamp(28px, 3vw, 36px);   /* Section header — Cormorant */
  --text-h3:       20px;                      /* Sub-section — Inter */
  --text-title-lg:   clamp(20px, 2.4vw, 24px); /* Large card titles — Cormorant */
  --text-title-card: clamp(19px, 2.2vw, 22px); /* Feature / process card titles */
  --text-stat:       clamp(28px, 3vw, 36px);   /* Pricing amounts, stat figures */
  --text-body-lg:  18px;                      /* Lead paragraph */
  --text-body:     16px;                      /* Standard body — WCAG AA */
  --text-body-sm:  14px;                      /* UI labels, small body */
  --text-caption:  13px;                      /* Captions, metadata */
  --text-label:    12px;                      /* ALL CAPS labels, badges */
  --text-eyebrow:  11px;                      /* Smallest meaningful text */

  /* ── Line Heights ── */
  --leading-tight:   1.1;
  --leading-snug:    1.2;
  --leading-normal:  1.5;
  --leading-relaxed: 1.6;
  --leading-loose:   1.8;

  /* ── Letter Spacing ── */
  --tracking-display: 0.02em;
  --tracking-normal:  0;
  --tracking-label:   0.08em;
  --tracking-wide:    0.05em;
}

/* ── Utility Classes ── */

.text-display {
  font-family: var(--font-display);
  font-size: var(--text-display);
  font-weight: var(--weight-light);
  line-height: var(--leading-tight);
  letter-spacing: var(--tracking-display);
  color: var(--color-obsidian);
}

.text-h1 {
  font-family: var(--font-display);
  font-size: var(--text-h1);
  font-weight: var(--weight-light);
  line-height: var(--leading-tight);
  letter-spacing: var(--tracking-display);
  color: var(--color-obsidian);
}

.text-h2 {
  font-family: var(--font-display);
  font-size: var(--text-h2);
  font-weight: var(--weight-medium);
  line-height: var(--leading-snug);
  letter-spacing: var(--tracking-display);
  color: var(--color-obsidian);
}

.text-h3 {
  font-family: var(--font-body);
  font-size: var(--text-h3);
  font-weight: var(--weight-semibold);
  line-height: var(--leading-normal);
  color: var(--color-obsidian);
}

.text-body-lg {
  font-family: var(--font-body);
  font-size: var(--text-body-lg);
  font-weight: var(--weight-regular);
  line-height: var(--leading-relaxed);
  color: var(--color-obsidian);
}

.text-body {
  font-family: var(--font-body);
  font-size: var(--text-body);
  font-weight: var(--weight-regular);
  line-height: var(--leading-relaxed);
  color: var(--color-obsidian);
}

.text-caption {
  font-family: var(--font-body);
  font-size: var(--text-caption);
  font-weight: var(--weight-regular);
  line-height: var(--leading-normal);
  color: var(--color-limestone);
}

.text-label {
  font-family: var(--font-body);
  font-size: var(--text-label);
  font-weight: var(--weight-medium);
  line-height: 1;
  letter-spacing: var(--tracking-label);
  text-transform: uppercase;
  color: var(--color-limestone);
}

.text-eyebrow {
  font-family: var(--font-body);
  font-size: var(--text-eyebrow);
  font-weight: var(--weight-medium);
  line-height: 1;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-limestone);
}
```

**Key Corrections from v1:** Body text raised from 14px to 16px (WCAG AA minimum), label from 10px to 12px, eyebrow from 9px to 11px. All heading scales use fluid sizing (`clamp()`) for mobile/tablet/desktop responsiveness.

---

### tokens/spacing.css — Spacing, Shadows, Radius & Animation
**Location:** `C:\Users\HP ZBook\Documents\RenAIssance\HAI\heritageai-shared-reference\tokens\spacing.css`  
**Format:** CSS Custom Properties  
**Purpose:** 8px base grid, border radius definitions, shadow system, animation durations/easing, z-index scale, and "The Architectural Rule" (vertical section divider).  
**Line Count:** 79

**Content:**

```css
/* ============================================================
   HERITAGEAI — SPACING, SHADOW, RADIUS & ANIMATION TOKENS v2.0
   June 2026
   8px base grid.
   
   CORRECTIONS from tokens.json:
   - radiusSm: 2px → 4px (2px reads as hard-edged/clinical)
   - radiusMd: 4px → 8px (warmer, more considered)
   - radiusLg: 8px → 12px (correct for cards and panels)
   ============================================================ */

:root {

  /* ── Spacing — 8px Base Grid ── */
  --space-1:  8px;
  --space-2:  16px;
  --space-3:  24px;
  --space-4:  32px;
  --space-5:  40px;
  --space-6:  48px;
  --space-8:  64px;
  --space-10: 80px;
  --space-12: 96px;
  --space-16: 128px;
  --space-20: 160px;

  /* ── Layout ── */
  --container-max:    1280px;
  --container-narrow: 800px;
  --gutter:           24px;
  --gutter-mobile:    16px;

  /* ── Border Radius — corrected from tokens.json ── */
  --radius-sm:   4px;    /* Badges, tags */
  --radius-md:   8px;    /* Buttons, inputs */
  --radius-lg:   12px;   /* Cards, panels */
  --radius-xl:   16px;   /* Feature cards */
  --radius-2xl:  24px;   /* Document preview */
  --radius-full: 9999px; /* Pills */

  /* ── Borders — from tokens.json, confirmed ── */
  --border-default:  0.5px solid var(--color-portland);
  --border-strong:   1px solid var(--color-limestone);
  --border-rule:     1px solid var(--color-portland);
  --border-gold:     1px solid var(--color-gold);

  /* ── The Architectural Rule — vertical section anchor ── */
  --rule-vertical-width:  1px;
  --rule-vertical-color:  var(--color-portland);
  --rule-vertical-active: var(--color-gold);

  /* ── Shadows ── */
  --shadow-sm:   0 1px 3px 0 rgba(26, 24, 20, 0.08);
  --shadow-md:   0 4px 12px 0 rgba(26, 24, 20, 0.10);
  --shadow-lg:   0 8px 32px 0 rgba(26, 24, 20, 0.12);
  --shadow-gold: 0 0 0 2px var(--color-gold);
  --shadow-gold-glow:
    0 0 24px color-mix(in srgb, var(--color-gold) 35%, transparent),
    0 0 48px color-mix(in srgb, var(--color-gold) 15%, transparent);
  --shadow-blue-gold-glow:
    0 0 32px color-mix(in srgb, var(--color-intelligence-blue) 45%, transparent),
    0 0 24px color-mix(in srgb, var(--color-gold) 35%, transparent),
    0 0 0 1px var(--color-gold);

  /* ── Animation ── */
  --duration-fast:   150ms;
  --duration-base:   300ms;
  --duration-slow:   600ms;
  --ease-out:        cubic-bezier(0.16, 1, 0.3, 1);
  --ease-in-out:     cubic-bezier(0.4, 0, 0.2, 1);

  /* ── Z-Index ── */
  --z-base:     0;
  --z-raised:   10;
  --z-dropdown: 100;
  --z-sticky:   200;
  --z-modal:    300;
  --z-toast:    400;
}
```

**"The Architectural Rule":** A vertical dividing line (`--rule-vertical-*`) inspired by heritage architectural practice. Used as a section anchor and animated on page entry.

---

### tokens/index.css — Token Index & Global Reset
**Location:** `C:\Users\HP ZBook\Documents\RenAIssance\HAI\heritageai-shared-reference\tokens\index.css`  
**Format:** CSS (aggregator + utility classes + global reset)  
**Purpose:** Single import point for all token files. Includes global reset, focus state overrides, scroll reveal utility, skip links, container helpers, and the animated architectural rule.  
**Line Count:** 166

**Content:**

```css
/* ============================================================
   HERITAGEAI — TOKEN INDEX v2.0
   Import this single file into your root App.jsx
   ============================================================ */

@import './colors.css';
@import './typography.css';
@import './spacing.css';

/* ── Global Reset ── */

*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  font-size: 16px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
  scroll-behavior: smooth;
}

body {
  background-color: var(--color-bg);
  color: var(--color-obsidian);
  font-family: var(--font-body);
  font-size: var(--text-body);
  line-height: var(--leading-relaxed);
}

/* ── Focus — accessible, on-brand ── */
:focus-visible {
  outline: 2px solid var(--color-gold);
  outline-offset: 3px;
  border-radius: var(--radius-sm);
}

/* ── Selection ── */
::selection {
  background-color: var(--color-gold);
  color: var(--color-obsidian);
}

/* ── Reduced Motion ── */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}

/* ── Scrollbar ── */
::-webkit-scrollbar { width: 6px; }
::-webkit-scrollbar-track { background: var(--color-bg); }
::-webkit-scrollbar-thumb { background: var(--color-portland); border-radius: var(--radius-full); }
::-webkit-scrollbar-thumb:hover { background: var(--color-limestone); }

/* ── Links ── */
a {
  color: var(--color-intelligence-blue);
  text-decoration: none;
  transition: color var(--duration-fast) var(--ease-out);
}
a:hover { color: var(--color-gold); }

hr {
  border: none;
  border-top: var(--border-rule);
  margin: var(--space-6) 0;
}

img, svg { display: block; max-width: 100%; }

/* ── The Architectural Section Rule ── */
.section-ruled {
  position: relative;
  padding-left: var(--space-6);
}
.section-ruled::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: var(--rule-vertical-width);
  background-color: var(--rule-vertical-color);
  transform-origin: top;
  animation: ruleDrawIn var(--duration-slow) var(--ease-out) forwards;
}
@keyframes ruleDrawIn {
  from { transform: scaleY(0); }
  to   { transform: scaleY(1); }
}

/* ── Scroll Reveal ──
   GEO-safe: content is visible by default (no-JS / crawler friendly).
   JS adds .reveal--pending before observing, so the entrance animation
   only ever hides content when a script is present to reveal it again. */
.reveal {
  transition:
    opacity var(--duration-base) var(--ease-out),
    transform var(--duration-base) var(--ease-out);
}
.reveal.reveal--pending {
  opacity: 0;
  transform: translateY(20px);
}
.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}

/* ── Screen-reader-only utility ── */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

/* ── Skip link — first focusable element on every page ── */
.skip-link {
  position: absolute;
  top: -100px;
  left: var(--space-2);
  z-index: var(--z-toast);
  padding: var(--space-1) var(--space-2);
  background-color: var(--color-obsidian);
  color: var(--color-bg);
  border-radius: var(--radius-md);
  font-family: var(--font-body);
  font-size: var(--text-body-sm);
  text-decoration: none;
}
.skip-link:focus-visible {
  top: var(--space-1);
  color: var(--color-bg);
}

/* ── Containers ── */
.container {
  width: 100%;
  max-width: var(--container-max);
  margin: 0 auto;
  padding: 0 var(--gutter);
}
.container-narrow {
  width: 100%;
  max-width: var(--container-narrow);
  margin: 0 auto;
  padding: 0 var(--gutter);
}
@media (max-width: 768px) {
  .container, .container-narrow {
    padding: 0 var(--gutter-mobile);
  }
}
```

**Key Features:** Global focus states branded in gold; scroll reveal animation (GEO-safe — visible by default, no JS dependency); skip links for accessibility; animated architectural rule; container classes for responsive layout.

---

## Shared Image Processing Utilities

### photographs/standardize-image.ts — Image Standardisation Module
**Location:** `C:\Users\HP ZBook\Documents\RenAIssance\HAI\heritageai-shared-reference\photographs\standardize-image.ts`  
**Format:** TypeScript (Node.js)  
**Purpose:** Standardises user-uploaded building photographs for consistent rendering across HAI products. Auto-rotates, resizes to max 2000px, compresses to <800KB, optimises for web (JPEG/PNG).  
**Line Count:** 91

**Content:**

```typescript
import sharp from "sharp";

const MAX_LONG_EDGE = 2000;
const MAX_BYTES = 800 * 1024;
const MIN_QUALITY = 40;
const DPI = 72;

export type StandardizedImage = {
  buffer: Buffer;
  contentType: "image/jpeg" | "image/png";
  extension: "jpg" | "png";
};

function isPngInput(mimeType: string, fileName: string): boolean {
  if (mimeType === "image/png") return true;
  const lower = fileName.toLowerCase();
  return lower.endsWith(".png");
}

export async function standardizePhotograph(
  input: Buffer,
  mimeType: string,
  fileName: string
): Promise<StandardizedImage> {
  const usePng = isPngInput(mimeType, fileName);

  let pipeline = sharp(input, { failOn: "none" })
    .rotate()
    .resize({
      width: MAX_LONG_EDGE,
      height: MAX_LONG_EDGE,
      fit: "inside",
      withoutEnlargement: true,
    })
    .withMetadata({ density: DPI });

  if (usePng) {
    pipeline = pipeline.png({ compressionLevel: 9, adaptiveFiltering: true });
  } else {
    pipeline = pipeline.jpeg({ quality: 85, mozjpeg: true });
  }

  let buffer = await pipeline.toBuffer();

  if (usePng) {
    if (buffer.length <= MAX_BYTES) {
      return { buffer, contentType: "image/png", extension: "png" };
    }

    for (let quality = 85; quality >= MIN_QUALITY; quality -= 5) {
      const jpegBuffer = await sharp(input)
        .rotate()
        .resize({
          width: MAX_LONG_EDGE,
          height: MAX_LONG_EDGE,
          fit: "inside",
          withoutEnlargement: true,
        })
        .withMetadata({ density: DPI })
        .jpeg({ quality, mozjpeg: true })
        .toBuffer();

      buffer = jpegBuffer;
      if (buffer.length <= MAX_BYTES) {
        return { buffer, contentType: "image/jpeg", extension: "jpg" };
      }
    }

    return { buffer, contentType: "image/jpeg", extension: "jpg" };
  }

  for (let quality = 85; quality >= MIN_QUALITY; quality -= 5) {
    buffer = await sharp(input)
      .rotate()
      .resize({
        width: MAX_LONG_EDGE,
        height: MAX_LONG_EDGE,
        fit: "inside",
        withoutEnlargement: true,
      })
      .withMetadata({ density: DPI })
      .jpeg({ quality, mozjpeg: true })
      .toBuffer();

    if (buffer.length <= MAX_BYTES) {
      return { buffer, contentType: "image/jpeg", extension: "jpg" };
    }
  }

  return { buffer, contentType: "image/jpeg", extension: "jpg" };
}
```

**Used by:** `heritageai-ppha`, `heritageai-sohs` (verified shared via git submodule as of 2026-07-12).

---

### photographs/hero-caption.ts — AI-Generated Image Captions
**Location:** `C:\Users\HP ZBook\Documents\RenAIssance\HAI\heritageai-shared-reference\photographs\hero-caption.ts`  
**Format:** TypeScript (Node.js + Anthropic API)  
**Purpose:** Generates factual, non-speculative captions for hero/feature photographs. Uses Claude Sonnet 4.6 with vision to describe only what is visibly present (materials, form, setting) — never invents heritage status or age.  
**Line Count:** 64

**Content:**

```typescript
import Anthropic from "@anthropic-ai/sdk";

// Deliberately self-contained (no "@/" aliased imports) so this module can
// be reused as-is from other apps in this monorepo — e.g. the public
// feasibility report flow in `heritageai-design/api/` — without dragging in
// the members-wizard-specific type chain that `claude-caption.ts` depends on.
// The vision-call pattern here intentionally mirrors `claude-caption.ts`.

const MODEL = "claude-sonnet-4-6";

const HERO_CAPTION_SYSTEM = `You write short, factual captions for property photographs shown on a public heritage planning website.

Respond with ONLY the caption sentence. No markdown, no quotes, no preamble, no JSON.

Describe only what is visibly present in the photograph — materials, colours, general form, setting. Do NOT invent or assume any heritage designation, age, architectural period, significance, or listing status. Do not speculate about what is not visible.`;

function buildHeroCaptionPrompt(): string {
  return `Write ONE short, vivid, factual sentence describing what is visible in this photograph. Describe only what you can see — do not make any claims about heritage status, age, or significance.`;
}

export async function runHeroImageCaption(
  imageBase64: string,
  mediaType: "image/jpeg" | "image/png"
): Promise<string> {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    throw new Error("ANTHROPIC_API_KEY is not configured.");
  }

  const anthropic = new Anthropic({ apiKey });

  const message = await anthropic.messages.create({
    model: MODEL,
    max_tokens: 200,
    system: HERO_CAPTION_SYSTEM,
    messages: [
      {
        role: "user",
        content: [
          {
            type: "image",
            source: {
              type: "base64",
              media_type: mediaType,
              data: imageBase64,
            },
          },
          {
            type: "text",
            text: buildHeroCaptionPrompt(),
          },
        ],
      },
    ],
  });

  const textBlock = message.content.find((block) => block.type === "text");
  if (!textBlock || textBlock.type !== "text") {
    throw new Error("No text response from Claude.");
  }

  return textBlock.text.trim().replace(/^["']|["']$/g, "");
}
```

**Compliance Note:** Deliberately constrained to prevent over-claiming heritage authority. Factual description only — no speculative age/period/significance.

---

## Project Governance & Index

### REPO-INDEX.md — Inter-repo Reference Map
**Location:** `C:\Users\HP ZBook\Documents\RenAIssance\HAI\heritageai-shared-reference\REPO-INDEX.md`  
**Format:** Markdown  
**Purpose:** Navigation map of all HAI-family repos and Claude Projects. Not duplicative; references other repos' own docs as source of truth.  
**Line Count:** 53

**Excerpt (key shared infrastructure section):**

```markdown
## Shared infrastructure

| Location                                         | Type                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Used by                                                                                         |
| ------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `heritageai-shared-reference` (this repo/folder) | Tier 2 canonical source — HAI-specific shared assets: design tokens (`tokens/`), photograph standardisation modules (`photographs/`), this index. Consumed via git submodule checkout (`shared-reference/`, renamed from `_shared-reference/` 2026-07-12 per GPS directive to drop the leading underscore) by `heritageai-ppha` and `heritageai-sohs`, both verified identical to canonical as of 2026-07-12 — no drift found. Corrected 2026-07-12: previous entries here named this `RAI-shared-reference` (Tier 1) and `HAI-shared-reference` (Tier 2) as two separate locations; only one folder exists on disk, `heritageai-shared-reference`, and it is not itself a git submodule (repos consume it via their own local `shared-reference/` submodule checkout pointing at it) | `heritageai-ppha`, `heritageai-sohs` (confirmed); other HAI-family repos and Projects as needed |
```

---

## Summary: Asset Inventory & Gaps

### Files Found: 9

| File | Format | Lines | Category |
|------|--------|-------|----------|
| tokens.json | JSON | 100 | Design Token (Master) |
| colors.css | CSS | 52 | Design Token (Colours) |
| typography.css | CSS | 139 | Design Token (Type) |
| spacing.css | CSS | 79 | Design Token (Spacing/Shadows/Animation) |
| index.css | CSS | 166 | Design Token (Aggregator + Global Reset) |
| standardize-image.ts | TypeScript | 91 | Shared Utility (Image Processing) |
| hero-caption.ts | TypeScript | 64 | Shared Utility (AI Caption Generation) |
| REPO-INDEX.md | Markdown | 53 | Governance |
| .gitattributes | Text Config | 3 | Version Control |

**Total Lines of Appearance/Brand Code:** ~747 lines (excluding git metadata)

---

### Format Breakdown

- **JSON:** 1 file (tokens.json — 100 lines)
- **CSS:** 4 files (colours, typography, spacing, index — 436 lines total)
- **TypeScript:** 2 files (image processing, caption generation — 155 lines)
- **Markdown:** 1 file (REPO-INDEX — 53 lines)
- **Config:** 1 file (.gitattributes — 3 lines)

---

### Cross-Repo Consumption (Verified)

Per REPO-INDEX.md (audit pass 2026-07-12):

- **heritageai-ppha:** Imports `shared-reference/tokens/` (colours, typography, spacing) via git submodule — **no drift found**
- **heritageai-sohs:** Imports `shared-reference/tokens/` via git submodule — **no drift found**
- **heritageai-funnel:** No confirmed Tier 2 asset imports (venture-agnostic)
- **heritageai-read:** No frontend; exempt from Tier 2 asset sync

---

### Identified Gaps & Recommendations

#### 1. **No Standalone Brand Guide Document**
- **Status:** Appearance tokens exist; no unified brand guide (terminology + visual + usage rules).
- **Recommendation:** Consider creating `BRAND-GUIDE.md` in shared-reference to document:
  - Brand name, tagline, founder attribution rules
  - When/how to use gold accent ("once per viewport" rule is in CSS comments but undocumented in prose)
  - Colour accessibility pairing rules (contrast checks for primary text on surface colours, etc.)
  - Typography pairing rules (which display fonts pair with which body scales)
  - The Architectural Rule — purpose, when to animate, when to hide on mobile

#### 2. **Typography Scale Lacks Explicit Pairing Rules**
- **Status:** Scale exists; no documented guidance on which weights + sizes pair for readability.
- **Recommendation:** Add usage guidelines for each scale level (e.g., "h1 + body: prefer light/regular weights", "stat figures pair with body-sm captions").

#### 3. **Colour Accessibility Matrix Missing**
- **Status:** Contrast ratios implicit in token values; no explicit WCAG AA pairing matrix.
- **Recommendation:** Document which foreground/background pairs meet WCAG AA (e.g., obsidian text on parchment surface = ✓, limestone text on warm-white = ✗).

#### 4. **Button & Interactive Component Styles Not Defined**
- **Status:** Spacing, shadow, and colour tokens exist; no `.btn`, `.btn-primary`, etc. component definitions.
- **Recommendation:** Create `tokens/components.css` (or move to a dedicated component library) defining:
  - Button states (default, hover, active, disabled, focus)
  - Form input styles (text, checkbox, radio, select)
  - Card/panel patterns
  - Modal/overlay behaviour

#### 5. **Popup/FAQ Configuration Not Found**
- **Status:** Gaps brief mentioned "popup/FAQ config" — none found in this repo.
- **Recommendation:** If FAQ/popup markup exists elsewhere (e.g., in heritageai-ppha or heritageai-funnel), consider:
  - Centralising shared popup styles in shared-reference
  - Or documenting the distributed pattern in REPO-INDEX.md

#### 6. **No Animation Behaviour Catalogue**
- **Status:** Durations and easing curves defined in `spacing.css`; no usage guide for when to use each.
- **Recommendation:** Document the reveal, rule-draw, and transition patterns; provide examples of where each animation should trigger.

#### 7. **Design Token Versioning**
- **Status:** tokens.json marked v2.0 (June 2026); CSS files aligned. No version pinning in repos.
- **Recommendation:** Consider adding a version constant to `index.css` or metadata field in `tokens.json` to help repos detect out-of-sync imports.

---

### Strengths Identified

1. **Clean Separation of Concerns:** Colours, typography, spacing strictly separated into individual files; easy to override one system without touching others.
2. **WCAG AA Corrections Logged:** Accessibility issues from v1 explicitly documented (14px → 16px body text, etc.) with rationale.
3. **Governance Documented:** tokens.json is marked as source of truth; CSS files are implementation; clear update flow.
4. **Accessible Focus States & Skip Links:** Global reset includes on-brand focus rings and skip links — excellent baseline.
5. **Single-Import Pattern:** `index.css` aggregates all tokens; repos import once, get everything.
6. **Semantic Colour Naming:** Colours named for their semantic role (success, warning, info) AND their visual identity (obsidian, gold, copper) — dual-use is powerful.
7. **The Architectural Rule:** Animated section divider is a cohesive brand detail — well-implemented, culturally appropriate (literal nod to heritage architecture).

---

### Inventory Complete

All appearance and brand-related files in `heritageai-shared-reference` have been extracted, documented, and consolidated into this inventory. No hidden or distributed files found.

**Next Steps for GPS:**

1. Decide: Consolidate gaps into a `BRAND-GUIDE.md`, or accept them as repo-specific implementations?
2. If consolidating: Use this inventory as the source for a unified brand document.
3. If distributed: Update REPO-INDEX.md to note where button/component/popup definitions live.
4. Consider: Semantic versioning for tokens (next update: v2.1 for component additions, v3.0 for breaking changes).

---

**Audit completed:** 23 July 2026  
**Auditor:** Claude (Cowork)  
**Status:** Ready for HAI — DIRECTOR-shared-reference Project review
