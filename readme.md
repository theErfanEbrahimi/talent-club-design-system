# Talent Club Design System

## What this is

**Talent Club** (`تلنت‌کلاب`) is **Digikala Group's** internal HR platform — the
"Digikala Digital HR" product, version 2.0 per the app's own sidebar footer. It
gives employees and managers one place for OKR forms, performance evaluations,
learning, performance reviews, an activity center, and a people directory.

The product is **Persian-first and RTL**, desktop-oriented (the app shell has a
1380px minimum width), and its distinguishing feature is an **AI feedback
assistant** (`دستیار بازخورد`) that reads a manager's written feedback and scores
it against the STAR model while flagging tone, bias and clarity problems inline.

There is no marketing site, mobile app, or docs surface in the provided material —
**one product, one surface**.

### Sources given

- **Attached codebase** `Design system/` (read-only mount) — a previous partial pass
  at this design system: `styles.css`, `tokens/{colors,typography,semantic,spacing}.css`,
  `components/{badge,icons,status}/`, `guidelines/*.card.html`, brand logo SVGs in
  `uploads/`, and reference screenshots.
- **`uploads/AI Assistant Feedback Design/`** — `AI Feedback Assistant.dc.html`, the
  full design-component source for the performance-review + AI-assistant screen.
  This file is the ground truth for the UI kit; every value was read from it, not
  from screenshots. Its `uploads/` folder holds the matching design screenshots
  (`Sidebar navigation.png`, `Top Header.png`, `Questions with Category…png`).
- **Type spec screenshot** (`assets/screens/product-1.png`) — the Figma
  `استایل‌های متنی` frame defining both type tracks. Authoritative for the scale.
- **Font binaries** — IRANYekanX (`uploads/fonts/`, 11 weights + variable),
  IRANYekan legacy, Yekan Bakh FaNum (woff/woff2). See "Fonts" below.
- **WordPress / Elementor exports** (`uploads/*.xml`, `*.json`, `factor*.php`,
  `base.css`, `fontiran.css`) — a Persian WordPress theme bundle. Unrelated to
  Talent Club; used only to confirm the IRANYekan font licensing/`@font-face`
  conventions. Not represented in this design system.

Referenced but **not accessible** to us: the Figma files behind the earlier pass
(node ids like `1:132 Badge`, `24:2048 Button` appear in comments; the badge kit
reports 765 variants and the icon library ~800 glyphs). If you have those links,
attach them — see CAVEATS at the end.

---

## CONTENT FUNDAMENTALS

All product copy is **Persian**, written in an informal-but-respectful register —
the tone of a considerate colleague, not an HR department.

**Address & person.** Second-person singular informal (`تو` implied) throughout:
`بنویس`, `شرح بده`, `نظر بده`. Never the formal plural imperative
(`بنویسید`) for task instructions — the one exception is placeholder text inside
inputs, which stays polite-formal: `لطفا توضیحات خود را بنویسید...`. The user is
greeted by first name in the header: `خوش آمدید، مسعود 👋`.

**The system speaks about itself in the first person plural, sparingly.** AI
suggestions are phrased as advice, not commands: `پیشنهاد می‌کنم برای هر تحویل
چک‌لیست کوتاه مستندسازی تعریف کند` — and always with an explicit out:
`تصمیم نهایی همیشه با شماست.`

**Colloquial contractions are allowed in user-authored examples** (`بی‌دقته`,
`تاخیر داره`) because the product quotes real employee writing. System copy itself
stays standard: `تاخیر تحویل شد`, `کم‌توجهی دیده می‌شود`.

**Labels are noun phrases, buttons are verbs.**
- Labels: `فهرست سوالات`, `ساختار بازخورد (مدل STAR)`, `پیشنهادهای بهبود`, `شواهد مرتبط`
- Buttons: `ذخیره`, `ثبت نهایی ارزیابی`, `اعمال پیشنهاد`, `رد پیشنهاد`, `درج در متن`, `+ افزودن نمونه`

**Every AI critique follows the same three-part shape**: name the problem, explain
why it matters, say what to do instead.

> «بی‌دقت» برچسب شخصیتی است، نه توصیف رفتار. رفتار قابل مشاهده و مصداق آن را
> بنویس (پرهیز از اثر شاخ/هاله).

**Numerals are Persian** (`۰۱۲۳۴۵۶۷۸۹`) everywhere user-facing: `سوال ۲ / ۸`,
`نیم سال اول ۱۴۰۳`, `۴۲ کلمه`, `۲۰ خرداد`. Latin digits appear only inside
technical strings (`Version 2.0`, `Q2`, `PR`, `1:1`, `OKR`, `STAR`). Latin
technical terms are left untranslated and unitalicised: `people manager`, `STAR`,
`OKR`, `QA`.

**Casing.** Persian has no case; Latin fragments use the source's own casing
(`Digikala Digital HR.`, `Version 2.0`). Never SHOUTING CAPS.

**Emoji: essentially never — one exception.** A single `👋` after the header
greeting. Nowhere else in the product. Do not add emoji to labels, empty states,
badges, or AI copy; status is carried by icons and color, never by emoji.

**Disclaimers are quiet, not scary.** The AI disclaimer is 10.5px gray-400,
centred, at the bottom of the panel — present, unmissable if you look, never
alarming. The feature itself is marked with a small `آزمایشی` (experimental) badge
next to the panel title rather than a banner.

**Vibe:** careful, evidence-seeking, non-judgemental. The product's whole argument
is that vague feedback hurts people, so its copy models the behaviour it asks
for — specific, time-bounded, actionable.

---

## VISUAL FOUNDATIONS

### Color

- **Violet is the identity.** `--color-violet-600` `#7839EE` is the primary action
  fill and the active-nav fill; `--color-violet-950` `#2E125E` is the sidebar; the
  `25/50/100/200` steps tint every AI surface. `violet-700` is the accent text color.
- **Brand purple** (`#7F56D9` at 600) is the inherited Untitled-UI-derived ramp. It
  survives in `brand-50` (the `pale` button fill) and in link/focus neighbours;
  violet is what you reach for.
- **Gray carries the interface.** `gray-900` headings, `gray-600/700` body,
  `gray-500` metadata, `gray-400` hints and disclaimers, `gray-100/200` borders,
  `gray-25/50` panel fills.
- **Semantic pairs are always 50-bg + 700-text**: success `عالی`, blue `خوب`,
  warning `قابل قبول`, error `نیاز به بهبود`. Warning = tone flags, error = bias
  flags, violet = clarity flags. That triple mapping is fixed — don't reassign it.
- Every ramp is 12 steps (`25 50 100 200 300 400 500 600 700 800 900 950`); the
  badge kit adds 7 more hues as 50/300/700 triples only.
- **Always use the semantic aliases** (`--text-*`, `--surface-*`, `--border-*`,
  `--fg-*`) in product code, not raw ramp steps.

### Type

- **Three families, three jobs** — the `type-*` utility classes assign them, so
  using a class gets the right face automatically:
  - **YekanBakh** (`--font-title`) — **titles and display**. Variable, 100–900.
    The `FaNum` cut is the default (Persian numerals); the plain `YekanBakh` cut
    (`--font-title-latin-num`, class `.type-title-latin-num`) is for titles that
    carry Latin figures — versions, KPIs, dates in Latin digits.
  - **IRANYekanX** (`--font-sans`) — **subtitles, labels, body copy** and all
    component text. Weights 300–900.
  - **Gilroy** (`--font-latin`) — **every Latin/English run**, at any size or role.
    Weights 100–950 plus italics. Apply with `class="latin"` on the inline span,
    or `lang="en"` on the block.
- No serif, no mono anywhere in the system.
- **Two tracks** (from the Figma `استایل‌های متنی` frame):
  - **Static** — fixed px, **125%** line-height: `heading-xl/lg`, `label-md/sm/xs/2xs`,
    `body-xl/lg/md/sm/xs/2xs/3xs`. For component internals and single-line UI.
  - **Responsive** — numeric, shifts mobile→desktop at **1024px**. **150%** for
    `display-1/2/3` and `title-1/2/3`; **180%** for `subtitle-*`, `label-*`, `body-*`.
    **Designers default to this track.**
- Weights by role: Black 900 display · Bold 700 titles and buttons · Medium 500
  labels and question text · Regular 400 body.
- **Long-form Persian needs air**: the answer editor runs at line-height **2.1**,
  question prompts at 2.0, panel notes at 1.9–2.0. Never set Persian body copy
  tighter than 1.9.
- Numerals are tabular where they change in place (score, word count).

### Spacing & layout

- **4px base**; `16` and `24` are the workhorses. `24px` is the app gutter and the
  workspace column gap.
- **Fixed frame, scrolling middle**: `236px` sidebar (fixed) · `64px` header (fixed)
  · `300px` question rail, collapsing to a `52px` number rail · fluid editor column
  with `min-width: 420px` · `380px` assistant panel, `position: sticky; top: 24px`,
  `max-height: calc(100vh - 48px)` with its own internal scroll. App `min-width: 1380px`.
- Page background `gray-50`; the working area is white. Content panels sit on
  `gray-25`/`gray-50` fills inside white — a **quiet inversion** rather than shadow
  stacking.

### Shape, borders, shadows

- **Radii:** cards and panels 12 (assistant panel 14) · buttons and inputs 10 ·
  small buttons, toolbar buttons, tips 6–8 · chips, avatars, dots, score ring `full`.
  Nothing in the product is a square corner.
- **Borders are 1px and pale**: `gray-100` for dividers and internal card edges,
  `gray-200/300` for inputs and outline buttons, `violet-200` for the AI panel,
  `blue-100` for the evidence block. One deliberate **dashed** border — `1px dashed
  violet-300` on the rewrite-suggestion block, marking text that isn't yours yet.
- **Shadows are soft, layered, and always neutral** `rgba(16,24,40,…)` — never
  colored, never large. `--shadow-lg` (`0 12px 16px -4px / 0 4px 6px -2px`) is the
  panel/card shadow. `--shadow-xs` on suggestion cards. Segmented-control thumbs
  and rail buttons get `--shadow-sm`. No inner shadows anywhere.
- **Cards** = white fill + `1px gray-100` border + `12px` radius + `xs`/`lg` shadow,
  depending on whether they're inside a panel or floating.

### Backgrounds & imagery

- **Flat color only.** No gradients as decoration, no textures, no patterns, no
  illustrations, no photography anywhere in the product. The single gradient in the
  codebase is the functional skeleton shimmer.
- The only imagery is **user avatars** — and even those fall back to a letter on a
  `violet-100` disc.
- No glass, no blur, no transparency effects. The one translucency is functional:
  a transparent `<textarea>` over a highlight backdrop, so marks appear *behind*
  live text.

### Motion

- **Short and plain.** `120/150/250/400ms`, `ease` — no springs, no bounce, no
  overshoot, no parallax, no scroll animation.
- Four motions exist, all functional: the assistant panel slides
  **14px from the leading edge** while fading in (250ms); a skeleton shimmer
  (1.1s loop) while analysing; a sparkle **rotating** (1.4s) as the thinking
  indicator; an **opacity pulse** (1.4s) on `در حال به‌روزرسانی...`.
- The score ring animates its `stroke-dashoffset` and its color when the score
  changes — the number counts up one step at a time (~20ms/step) rather than
  snapping.
- Debounce, don't flicker: re-analysis waits **1.2s** after typing stops.

### Interaction states

- **Hover = darken the whole element** (`filter: brightness(.96)`) for buttons of
  every hierarchy — not a color swap. Bare icon buttons instead take a
  `gray-50` wash; sidebar and list items shift text color.
- **Press:** no transform, no shrink. Nothing scales on click.
- **Disabled:** `opacity: .5` plus `cursor: default`. No gray-out repaint.
- **Selected/active:** filled — `violet-600` for sidebar nav and rail numbers,
  white-with-shadow for segmented-control thumbs, `violet-50` for toggled toolbar
  buttons. Active list items go `violet-700` + weight 600.
- **Focus:** `--focus-ring` = `0 0 0 4px violet-100`. Text inputs use
  `outline-color: violet-500`.
- Text is never underlined for links; color alone carries them (`blue-600` →
  `blue-700` on hover).

---

## ICONOGRAPHY

- **One system: a hand-consistent outline set, drawn in the product's own source.**
  24×24 box, `stroke-width: 1.8` for object glyphs, `2` for chevrons and arrows,
  `2.2` for the page-title chevron, round caps and joins, `fill: none`. Rendered at
  **20px** in the sidebar, **17px** in the editor toolbar, **14–16px** inline with
  text, **10px** inside check circles.
- It is **not** a licensed icon font, sprite, or npm set. The full 24×24 path data
  was copied verbatim out of the product source into `components/icons/Icon.jsx` —
  nothing was redrawn, and nothing was substituted from a CDN library. The earlier
  pass mentions a ~800-glyph Figma icon library we do not have access to; what's
  here is exactly the subset the shipped screen uses. **If you need a glyph that
  isn't in `iconNames`, attach the Figma icon library rather than drawing one.**
- **One filled glyph exists**: the four-point `sparkle`. It means "AI" and nothing
  else — panel header, the analysis trigger button, the thinking spinner.
- **Colors come from `currentColor`.** Icons inherit the text color of their
  context; only `sparkle` is ever explicitly colored (`violet-600`).
- **No emoji as iconography** (the single `👋` in the greeting is copy, not an icon).
  **No Unicode glyphs as icons** — with one intentional exception: the editor's
  bold control is a typographic **`B`** at 800 weight, and `+` appears literally in
  the label `+ افزودن نمونه`. Check marks, arrows, chevrons and close buttons are
  always SVG.
- **Two brands, two marks.** Talent Club's own logo is the product mark; the
  **Digikala group** lockups are the parent brand and appear only where group
  attribution is needed (login, footers, printed material). They are never
  combined into a single lockup.
- **Digikala red is not available in Talent Club.** The parent mark appears in
  neutral ink (`gray-950`), reversed white, or `violet-600` only —
  `assets/digikala/{logo-fa-h,logo-en-h,logo-fa-v,logo-en-v,sign}-{black,white,violet}.svg`.
  The group's red lockups' geometry is kept in `assets/digikala/red-lockups/`
  for group-level work and is out of scope for this product.
- **Logos** are real brand SVGs, copied in: `assets/logo-horizontal-brand.svg`
  (sidebar; inverted to white over violet-950), `logo-icon-brand.svg` (mark alone),
  `logo-vertical-brand.svg`, `logo-vertical-white.svg`, `logo-vertical-black.svg`.
  Never redraw, recolor, or reconstruct the mark — use these files.

---

## Fonts

All three families are self-hosted from `fonts/`:

| Family | Role | Files | Weights |
| --- | --- | --- | --- |
| **YekanBakh** | titles, display | `YekanBakhFaNum-VF.woff2`, `YekanBakh-VF.woff2` | variable 100–900 |
| **IRANYekanX** | subtitles, labels, body | 7 × `.ttf` | 300, 400, 500, 600, 700, 800, 900 |
| **Gilroy** | Latin / English | 10 upright + 3 italic `.otf` | 100–950 |

**No substitution was needed — no Google Fonts stand-ins are present.**

**Licensing.** YekanBakh v3.1 (fontiran.com, license `CJE506RH`) and Gilroy
(Radomir Tinkov) are **proprietary commercial fonts**. The binaries here are for
licensed Digikala Group work only — do not redistribute them with public builds or
hand them to third-party vendors. See `uploads/FontLicense.txt`.

**Two format asks, if you have them:** woff2 builds of **IRANYekanX** (TTF costs
roughly 2–3× the transfer size) and of **Gilroy** (OTF the same). YekanBakh is
already variable woff2 and needs nothing.

---

## Components

Built from the sources' own inventory — the Figma badge kit, the status dot, the
Button node referenced in the earlier pass, and the icon/avatar primitives the
shipped screen uses.

| Component | Group | Notes |
| --- | --- | --- |
| `Button` | `components/core/` | 6 hierarchies (contained · pale · ai · outline · text1 · text2), 4 sizes, destructive, loading, icon slots |
| `IconButton` | `components/core/` | 32px square toolbar/chrome control |
| `Avatar` | `components/core/` | Letter-on-violet fallback, 4 sizes |
| `Badge` | `components/badge/` | 3 sizes × 13 colors × 4 types × 6 icon slots (Figma `1:132`, 765 variants) |
| `BadgeBase`, `BadgeDot` | `components/badge/` | Badge shell and internal dot (Figma `1:2`) |
| `ArrowLeft`, `ArrowUp`, `Plus`, `XClose` | `components/badge/` | The badge kit's own icon parts |
| `Dot` | `components/status/` | Semantic status dot, 3 sizes, halo ring |
| `Icon` | `components/icons/` | The product's outline set; `iconNames` lists every glyph |

**Intentional additions** (not in the attached badge kit, justified):
`Icon` — a wrapper so the glyph set has one contract; `IconButton` and `Avatar` —
both appear in the shipped screen as raw markup and are used by the UI kit;
`Button` — sourced from the main Digikala Figma file (node `24:2048`) per the
earlier pass, not from the badge kit.

---

## Index / manifest

**Root**
- `styles.css` — the entry point consumers link. `@import` lines only.
- `readme.md` — this file.
- `SKILL.md` — Agent Skill manifest for downloaded use.
- `thumbnail.html` — homepage tile.
- `fonts/` — YekanBakh variable woff2 (×2), IRANYekanX TTFs (300–900), Gilroy OTFs.
- `assets/` — Talent Club logo SVGs; `assets/digikala/` parent-brand lockups
  (FA/EN × horizontal/vertical × black/white/violet, plus the sign);
  `assets/screens/` reference screenshots.

**Tokens** (`tokens/`) — `colors.css` (ramps) · `semantic.css` (aliases) ·
`fonts.css` (`@font-face` for all three families) · `typography.css` (both type tracks,
family roles + utility classes) ·
`spacing.css` (spacing, radius, shadow) · `motion.css` (durations, eases, keyframes) ·
`product.css` (app-shell, card, editor and AI-surface measurements).

**Components** (`components/`) — `core/` (Button, IconButton, Avatar) ·
`badge/` (Badge family) · `status/` (Dot) · `icons/` (Icon). Each directory has a
`*.card.html` specimen; each component has `.d.ts` and most have `.prompt.md`.

**Guidelines** (`guidelines/`) — 22 specimen cards feeding the Design System tab:
7 color ramps + badge hues + semantic aliases, 7 type cards (family roles,
YekanBakh, IRANYekanX, Gilroy, both scales, Latin & numerals),
spacing/radius/elevation/motion, and 4 brand cards (Talent Club lockups, Digikala group lockups, app chrome, AI surfaces).

**UI kit** (`ui_kits/talent-club-app/`) — the performance-review screen with the AI
feedback assistant, click-through. See its `README.md`.

**Template** (`templates/talent-club-app/`) — `TalentClubApp.dc.html`, the app shell
(sidebar, header, page toolbar, 380px side-panel slot) with an empty content area,
for consuming projects to start a new Talent Club screen from.
