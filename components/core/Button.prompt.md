Brand action button — violet-600 contained fill is the primary action; every other action in the product is one of the lighter hierarchies.

```jsx
<Button hierarchy="contained">ثبت نهایی ارزیابی</Button>
<Button hierarchy="outline">ذخیره</Button>
<Button hierarchy="ai" iconLeft={<Icon name="sparkle" size={16} />}>بررسی با هوش مصنوعی</Button>
<Button hierarchy="pale" size="lg" iconRight={<Icon name="arrow-left" size={16} />}>بعدی</Button>
<Button hierarchy="contained" destructive size="sm">حذف</Button>
<Button hierarchy="text1" loading loadingText="در حال ذخیره...">ذخیره</Button>
```

Sizes `sm md lg xl` (md is the default toolbar size, lg for page-level primary/next actions). Hover darkens the button; disabled drops to 50% opacity. In RTL layouts the "next" arrow points left — pass the glyph you want, the component does not flip it.
