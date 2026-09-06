# Talent Club Design System

## What this is

Talent Club is Digikala Group's internal HR platform that supports employee development and talent management. It provides tools for learning, performance management, feedback, evaluations, and other people operations in a unified experience.

## Status / coverage

This pass establishes the **foundations**: a complete color token system, typography tokens, spacing/radius/shadow tokens, the root `styles.css`, and color/type/spacing specimen cards for the Design System tab.

**Not yet built** (see CAVEATS in chat): the reusable React components (Button, Badge, Avatar, Tag, Social icon, Dot, etc. — 46 component families in Figma), the \~1,180-glyph icon set, and product UI kits. These can be materialized next.

---

## VISUAL FOUNDATIONS

### Color

- **Brand (primary):** purple. `--color-brand-600` `#7F56D9` is the default; `--color-brand-500` `#9E77ED` and `--color-brand-700` `#6941C6` are the common hover/active neighbors. Used on buttons, links, inputs, focus rings.
- **Accent:** violet. `--color-violet-700` `#6927DA` is a heavily-used signature accent (more saturated than brand).
- **Neutral:** `gray` scale (`#717680` 500, `#181D27` 900, `#0A0D12` 950) carries almost all text, borders, dividers, and surfaces.
- **Semantic:** error (red `#F04438`), warning (amber `#F79009`), success (green `#12B76A`), blue/info (`#2E90FA`). Each is a full 25→950 ramp; use \~50/600/700 pairs for subtle backgrounds + readable text.
- Every ramp has 12 steps: `25, 50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950`.
- Always pair colors via the **semantic aliases** (`--text-*`, `--surface-*`, `--border-*`, `--fg-*`) rather than raw scale values in product code.

### Type

- **IRANYekanX** is the primary brand family (Persian-first; it also carries Latin glyphs). Inter is the Latin fallback (`--font-latin`). Persian/RTL self-hosted, weights 300–900.
- Two-track type system:
  - **Static** — fixed sizes, **135%** line-height, T-shirt naming (`title-xl/lg`, `label-md/sm/xs/2xs`, `body-lg/md/sm/xs/2xs/3xs`). For component and single-line UI text.
  - **Responsive** — numeric scale that shifts **mobile→desktop** at the 1024px breakpoint, **150%** line-height for `display-1/2/3` & `title-1/2/3`, **180%** for `subtitle-1/2/3`, `label-1/2/3`, `body-1/2/3`.
- Weights: Black (900) for display, Bold (700) for titles/subtitles, Medium (500) for labels, Regular (400) for body.
- Apply via utility classes (`.type-title-3`, `.type-body-md`, …) or the `--fs-*` size tokens. See `tokens/typography.css`.

### Spacing & shape

- **4px base** spacing scale: 4, 8, 12, 16, 24, 32, 48, 64, 96, 128, 192, 224.
- **Radius:** 4 (xs) → 24 (4xl), plus `full` for pills/avatars. Cards typically use `md` (8) to `xl` (12).
- **Elevation:** soft, low-opacity gray shadows (`rgba(16,24,40,…)`), layered (a tight + a wide blur). `--shadow-lg` (`0 12px 16px -4px / 0 4px 6px -2px`) is the standard card shadow seen on swatches.

### Backgrounds, borders, states

- Surfaces are **flat white / light gray** — no gradients or textures in the foundation.
- Borders are thin (1px) `gray-200`/`gray-300`.
- Cards: white fill, 8–12px radius, 1px subtle border and/or soft shadow.

---

## Components

Built components (available via `window.DigikalaDesignSystem_edec98`):

- **Button** — 4 sizes, 5 hierarchies, destructive + states *(intentional extra — sourced from main Digikala Figma file, node 24:2048, not from the attached Badge kit)*
- **Dot** (status) — semantic status dot, 3 sizes, outline ring
- **Badge** — RTL badge, 3 sizes, 13 colors, 4 types, 6 icon slots
- **BadgeDot** — badge internal dot indicator (Figma: Dot component family)
- **BadgeBase** — badge shell primitive
- **ArrowLeft** — directional icon
- **ArrowUp** — directional icon
- **Plus** — plus icon
- **XClose** — close/dismiss icon
- **Icon** — renders any of 801 icons from the icon library via `<Icon name="…" size={…} />`

---

## Index / manifest

- `styles.css` — root entry point (consumers link this). `@import`s everything below.
- `tokens/colors.css` — base color ramps (12 steps each).
- `tokens/semantic.css` — text / surface / border / fg aliases.
- `tokens/typography.css` — fonts, weights, type scale, tracking.
- `tokens/spacing.css` — spacing, radius, shadow tokens.
- `guidelines/*.card.html` — specimen cards shown in the Design System tab.
- `figdump/` — raw materialized reference from Figma (color frame + components). Working scratch, not part of the shipped tokens.
- `SKILL.md` — Agent Skill manifest for downloadable use.
