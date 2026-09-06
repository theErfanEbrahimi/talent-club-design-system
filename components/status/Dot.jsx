import React from "react";

const SIZES = { sm: 6, md: 8, lg: 10 };
const COLORS = {
  gray: "var(--color-gray-400)",
  brand: "var(--color-brand-500)",
  error: "var(--color-error-500)",
  warning: "var(--color-warning-500)",
  success: "var(--color-success-500)",
  blue: "var(--color-blue-500)",
  violet: "var(--color-violet-500)",
};

export function Dot({ size = "md", color = "success", outline = false, style = {}, ...rest }) {
  const d = SIZES[size] || SIZES.md;
  const c = COLORS[color] || COLORS.success;
  if (outline) {
    return (
      <span style={{ display: "inline-flex", width: d + 6, height: d + 6, alignItems: "center", justifyContent: "center", ...style }} {...rest}>
        <span style={{ width: d + 6, height: d + 6, borderRadius: "50%", background: "currentColor", opacity: 0.2, position: "absolute", color: c }} />
        <span style={{ width: d, height: d, borderRadius: "50%", background: c }} />
      </span>
    );
  }
  return <span style={{ display: "inline-block", width: d, height: d, borderRadius: "50%", background: c, ...style }} {...rest} />;
}
