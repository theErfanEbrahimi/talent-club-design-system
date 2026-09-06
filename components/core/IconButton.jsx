import React from "react";

/* Square icon-only control — editor toolbar, panel close, header actions.
   32×32 with a 6px radius and a gray-50 hover wash (measured from the app). */

const SIZES = { sm: { box: 28, icon: 15, radius: 6 }, md: { box: 32, icon: 17, radius: 6 }, lg: { box: 36, icon: 20, radius: 8 } };

export function IconButton({ children, size = "md", tone = "default", active = false, disabled = false, label, style = {}, onClick, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const s = SIZES[size] || SIZES.md;
  const fg = tone === "accent" ? "var(--color-violet-700)" : tone === "muted" ? "var(--color-gray-400)" : "var(--color-gray-500)";
  return (
    <button
      type="button"
      aria-label={label}
      disabled={disabled}
      onClick={disabled ? undefined : onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        width: s.box, height: s.box,
        display: "inline-flex", alignItems: "center", justifyContent: "center",
        border: 0, borderRadius: s.radius,
        background: active ? "var(--color-violet-50)" : hover && !disabled ? "var(--color-gray-50)" : "none",
        color: active ? "var(--color-violet-700)" : fg,
        cursor: disabled ? "default" : "pointer",
        opacity: disabled ? 0.5 : 1,
        padding: 0, flex: "none",
        transition: "var(--transition-color)",
        ...style,
      }}
      {...rest}
    >
      {children}
    </button>
  );
}

export default IconButton;
