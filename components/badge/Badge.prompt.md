RTL badge / pill for statuses, counts and inline tags — the Figma badge kit's public component.

```jsx
<Badge text="آزمایشی" size="sm" type="pill color" color="primary" />
<Badge text="عالی" color="success" size="md" icon="dot" />
<Badge text="قابل حذف" icon="x close" color="gray" />
<Badge text="۱۲" type="badge modern" size="sm" />
```

`size` `sm|md|lg` (heights 20/22/24). `color` is one of 13: primary, error, warning, success, blue, blue light, indigo, purple, pink, rosé, orange, blue gray, gray. `type` picks the shell — `pill color` (default), `pill outline`, `badge color`, `badge modern`. `icon` adds a slot: `dot`, `x close`, `icon left`, `icon right`, `avatar`, `only`.

For a bare status indicator with no label, use `Dot` instead.
