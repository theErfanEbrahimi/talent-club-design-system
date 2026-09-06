Brand action button (Figma 24:2048) — violet-600 primary fill, Medium weight, IRANYekanX. Use for any action; combine a hierarchy with `destructive` for negative actions.

```jsx
<Button hierarchy="contained">عنوان</Button>
<Button hierarchy="pale" iconLeft={<Plus/>}>Filters</Button>
<Button hierarchy="outline">Cancel</Button>
<Button hierarchy="contained" destructive>Delete</Button>
<Button hierarchy="text1" loading loadingText="در حال بارگزاری...">Save</Button>
```

Sizes: `sm` `md` `lg` `xl`. Hierarchies: `contained` `pale` `outline` `text1` `text2` (aliases: primary/secondary/tertiary/link). Modifiers: `destructive`, `disabled`, `loading`+`loadingText`. Icon-only: pass `iconLeft`/`iconRight` with no children.
