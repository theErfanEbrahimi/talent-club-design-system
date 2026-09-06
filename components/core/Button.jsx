import React from "react";

/* Talent Club action button.
   Geometry and color measured from the shipped HR app:
     md = 10px 18px / 14px / radius 10 / weight 700
   Hover darkens the whole button (filter brightness .96) rather than swapping
   colors — the product does this for every hierarchy. Disabled = opacity .5. */

const SIZES = {
  sm: { padding: "6px 12px",  fontSize: 12, radius: 8,  weight: 600, gap: 6,  icon: 14 },
  md: { padding: "10px 18px", fontSize: 14, radius: 10, weight: 700, gap: 8,  icon: 16 },
  lg: { padding: "12px 22px", fontSize: 14, radius: 10, weight: 700, gap: 8,  icon: 16 },
  xl: { padding: "14px 26px", fontSize: 16, radius: 12, weight: 700, gap: 10, icon: 18 },
};

const HIERARCHY = {
  contained: { bg: "var(--color-violet-600)", fg: "var(--color-white)", bd: "transparent" },
  pale:      { bg: "var(--color-brand-50)",   fg: "var(--color-violet-700)", bd: "transparent" },
  ai:        { bg: "var(--color-violet-50)",  fg: "var(--color-violet-700)", bd: "var(--color-violet-200)" },
  outline:   { bg: "var(--color-white)",      fg: "var(--color-gray-700)",   bd: "var(--color-gray-300)" },
  text1:     { bg: "transparent",             fg: "var(--color-violet-700)", bd: "transparent" },
  text2:     { bg: "transparent",             fg: "var(--color-gray-600)",   bd: "transparent" },
};

const DESTRUCTIVE = {
  contained: { bg: "var(--color-error-600)", fg: "var(--color-white)", bd: "transparent" },
  pale:      { bg: "var(--color-error-50)",  fg: "var(--color-error-700)", bd: "transparent" },
  ai:        { bg: "var(--color-error-50)",  fg: "var(--color-error-700)", bd: "var(--color-error-200)" },
  outline:   { bg: "var(--color-white)",     fg: "var(--color-error-700)", bd: "var(--color-error-300)" },
  text1:     { bg: "transparent",            fg: "var(--color-error-700)", bd: "transparent" },
  text2:     { bg: "transparent",            fg: "var(--color-error-600)", bd: "transparent" },
};

const ALIAS = { primary: "contained", secondary: "outline", tertiary: "text1", link: "text2", light: "pale" };

function Spinner({ size }) {
  return (
    <span style={{ display: "inline-flex", animation: "tc-spin var(--duration-spin) linear infinite" }}>
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
        <path d="M12 3a9 9 0 1 0 9 9" />
      </svg>
    </span>
  );
}

export function Button({
  children, hierarchy = "contained", size = "md", destructive = false, disabled = false,
  loading = false, loadingText, iconLeft, iconRight, fullWidth = false, type = "button",
  style = {}, onClick, ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const h = ALIAS[hierarchy] || hierarchy;
  const s = SIZES[size] || SIZES.md;
  const c = (destructive ? DESTRUCTIVE : HIERARCHY)[h] || HIERARCHY.contained;
  const off = disabled || loading;
  const iconOnly = !children && !loading && (iconLeft || iconRight);

  return (
    <button
      type={type}
      disabled={off}
      onClick={off ? undefined : onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: fullWidth ? "flex" : "inline-flex",
        width: fullWidth ? "100%" : undefined,
        alignItems: "center", justifyContent: "center",
        gap: s.gap,
        padding: iconOnly ? Math.round(s.fontSize * 0.72) : s.padding,
        borderRadius: s.radius,
        border: `1px solid ${c.bd}`,
        background: c.bg,
        color: c.fg,
        fontFamily: "inherit",
        fontSize: s.fontSize,
        fontWeight: s.weight,
        lineHeight: 1.35,
        whiteSpace: "nowrap",
        cursor: off ? "default" : "pointer",
        opacity: off ? 0.5 : 1,
        filter: hover && !off ? "brightness(.96)" : "none",
        transition: "filter var(--duration-fast) var(--ease-default)",
        boxSizing: "border-box",
        ...style,
      }}
      {...rest}
    >
      {loading ? <Spinner size={s.icon} /> : iconLeft}
      {loading && loadingText ? <span>{loadingText}</span> : children ? <span>{children}</span> : null}
      {!loading && iconRight}
    </button>
  );
}

export default Button;
