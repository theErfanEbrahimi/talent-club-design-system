Renders one glyph from the Talent Club outline icon set — use it anywhere the product shows an icon, so stroke weight and sizing stay consistent.

```jsx
<Icon name="clipboard-check" size={20} />
<Icon name="sparkle" size={16} color="var(--fg-accent)" />
<Icon name="chevron-down" size={14} />
```

Sizes in use: 20 (sidebar), 17 (editor toolbar), 14–16 (inline with text). Colors come from `currentColor` by default — set the parent's `color` rather than passing `color` where you can. `sparkle` is filled and reserved for AI-generated surfaces. Import `iconNames` for the full list.
