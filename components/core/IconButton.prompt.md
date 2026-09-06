Icon-only 32px control for toolbars and panel chrome — no label, no fill until hover.

```jsx
<IconButton label="افزودن تصویر"><Icon name="image" size={17} /></IconButton>
<IconButton label="راست‌چین" active><Icon name="align-right" size={17} /></IconButton>
<IconButton label="بستن" tone="muted" size="sm"><Icon name="x" size={16} /></IconButton>
```

Always pass `label`. Use `active` for toggled toolbar state, `tone="muted"` for dismiss affordances.
