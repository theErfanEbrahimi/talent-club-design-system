import React from "react";

/* Header / row avatar. Violet-100 disc with the first letter of the name,
   36px in the app header. Pass `src` for a real photo. */

const SIZES = { xs: { box: 24, fs: 10 }, sm: { box: 28, fs: 11 }, md: { box: 36, fs: 14 }, lg: { box: 44, fs: 16 } };
const TONES = {
  accent: { bg: "var(--color-violet-100)", fg: "var(--color-violet-700)" },
  brand: { bg: "var(--color-brand-100)", fg: "var(--color-brand-700)" },
  neutral: { bg: "var(--color-gray-100)", fg: "var(--color-gray-600)" },
};

export function Avatar({ name = "", src, size = "md", tone = "accent", style = {}, ...rest }) {
  const s = SIZES[size] || SIZES.md;
  const t = TONES[tone] || TONES.accent;
  return (
    <span
      title={name || undefined}
      style={{
        width: s.box, height: s.box, flex: "none",
        borderRadius: "50%", overflow: "hidden",
        display: "inline-flex", alignItems: "center", justifyContent: "center",
        background: t.bg, color: t.fg,
        fontSize: s.fs, fontWeight: 700, lineHeight: 1,
        ...style,
      }}
      {...rest}
    >
      {src ? <img src={src} alt={name} style={{ width: "100%", height: "100%", objectFit: "cover" }} /> : name.trim().charAt(0)}
    </span>
  );
}

export default Avatar;
