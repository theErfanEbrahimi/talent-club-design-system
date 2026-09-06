// figma node: 1:132 Badge (765 variants) — color/size/type map hand-completed from Figma values
// sm: h=20, pad=2px 8px, fs=10 | md: h=24, pad=2px 10px, fs=12 | lg: h=28, pad=2px 12px, fs=14
// pill = radius 999 | badge = radius 6 | color = filled | outline = transparent + border

const SIZES = {
  sm: { padding: "2px 8px",  dotPad: "2px 8px 2px 6px", iconPad: "2px 6px 2px 8px", fontSize: 10, lineHeight: "16px", dot: 6, icon: 12 },
  md: { padding: "2px 10px", dotPad: "2px 10px 2px 8px", iconPad: "2px 8px 2px 10px", fontSize: 12, lineHeight: "20px", dot: 6, icon: 14 },
  lg: { padding: "2px 12px", dotPad: "2px 12px 2px 10px", iconPad: "2px 10px 2px 12px", fontSize: 14, lineHeight: "24px", dot: 8, icon: 16 },
};

// bg=filled bg, fg=text color, bd=border color for outline
const COLORS = {
  primary:    { bg: "rgb(245,243,255)", fg: "rgb(105,39,218)",  bd: "rgb(105,39,218)" },
  error:      { bg: "var(--color-error-50)",   fg: "var(--color-error-700)",   bd: "var(--color-error-300)" },
  warning:    { bg: "var(--color-warning-50)", fg: "var(--color-warning-700)", bd: "var(--color-warning-300)" },
  success:    { bg: "var(--color-success-50)", fg: "var(--color-success-700)", bd: "var(--color-success-300)" },
  blue:       { bg: "var(--color-blue-50)",    fg: "var(--color-blue-700)",    bd: "var(--color-blue-300)" },
  "blue light": { bg: "oklch(0.97 0.02 220)", fg: "oklch(0.45 0.09 220)",    bd: "oklch(0.75 0.07 220)" },
  indigo:     { bg: "oklch(0.96 0.03 264)", fg: "oklch(0.42 0.18 264)",       bd: "oklch(0.72 0.12 264)" },
  purple:     { bg: "oklch(0.96 0.03 295)", fg: "oklch(0.42 0.18 295)",       bd: "oklch(0.72 0.12 295)" },
  pink:       { bg: "oklch(0.97 0.02 345)", fg: "oklch(0.45 0.16 345)",       bd: "oklch(0.75 0.10 345)" },
  "rosé":     { bg: "oklch(0.97 0.02 10)",  fg: "oklch(0.45 0.16 10)",        bd: "oklch(0.75 0.10 10)" },
  orange:     { bg: "oklch(0.97 0.04 55)",  fg: "oklch(0.50 0.16 55)",        bd: "oklch(0.75 0.10 55)" },
  "blue gray":{ bg: "oklch(0.96 0.01 230)", fg: "oklch(0.40 0.04 230)",       bd: "oklch(0.72 0.04 230)" },
  gray:       { bg: "var(--color-gray-50)", fg: "var(--color-gray-700)",       bd: "var(--color-gray-300)" },
};

const FONT = "IRANYekan, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif";

// Simple inline SVG icons
function DotIcon({ size, color }) {
  return (
    <span style={{ display:"inline-flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
      <svg width={size} height={size} viewBox="0 0 8 8"><circle cx="4" cy="4" r="3" fill={color}/></svg>
    </span>
  );
}
function XIcon({ size, color }) {
  return (
    <span style={{ display:"inline-flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
      <svg width={size} height={size} viewBox="0 0 12 12" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round">
        <path d="M3 3l6 6M9 3l-6 6"/>
      </svg>
    </span>
  );
}
function ArrowIcon({ size, color, dir="right" }) {
  const d = dir === "right" ? "M4 2l4 4-4 4" : "M8 2L4 6l4 4";
  return (
    <span style={{ display:"inline-flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
      <svg width={size} height={size} viewBox="0 0 12 12" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d={d}/>
      </svg>
    </span>
  );
}
function AvatarIcon({ size }) {
  return (
    <span style={{ display:"inline-flex", alignItems:"center", justifyContent:"center", flexShrink:0, width:size, height:size, borderRadius:"50%", background:"var(--color-gray-200)", overflow:"hidden" }}>
      <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
        <circle cx="8" cy="6" r="3" fill="var(--color-gray-400)"/>
        <path d="M2 14c0-3.314 2.686-5 6-5s6 1.686 6 5" fill="var(--color-gray-400)"/>
      </svg>
    </span>
  );
}

export function Badge(_p = {}) {
  const size  = _p.size  ?? "sm";
  const icon  = _p.icon  ?? "false";
  const type  = _p.type  ?? "pill color";
  const color = _p.color ?? "primary";
  const text  = _p.text  ?? "برچسب";

  const s = SIZES[size]  ?? SIZES.sm;
  const c = COLORS[color] ?? COLORS.primary;

  const isBadge   = type === "badge color" || type === "badge modern";
  const isOutline = type === "pill outline" || type === "badge outline";
  const hasShadow = type === "badge modern";

  const radius = isBadge ? 6 : 999;

  let bg = isOutline ? "transparent" : c.bg;
  let fg = c.fg;
  let border = isOutline ? `1px solid ${c.bd}` : "none";
  let boxShadow = hasShadow ? "0px 1px 2px 0px rgba(16,24,40,0.05)" : undefined;

  // padding varies by icon slot
  let pad = s.padding;
  if (icon === "dot")        pad = s.dotPad;
  if (icon === "x close" || icon === "icon right" || icon === "icon left") pad = s.iconPad;

  const wrapStyle = {
    display: "inline-flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    borderRadius: radius,
    backgroundColor: bg,
    border,
    boxShadow,
    padding: pad,
    boxSizing: "border-box",
    fontFamily: FONT,
    fontWeight: 500,
    fontSize: s.fontSize,
    lineHeight: s.lineHeight,
    color: fg,
    whiteSpace: "nowrap",
    width: "fit-content",
    ..._p.style,
  };

  const renderIcon = () => {
    if (icon === "dot")        return <DotIcon size={s.dot} color={fg} />;
    if (icon === "x close")    return <XIcon size={s.icon} color={fg} />;
    if (icon === "icon right")  return <ArrowIcon size={s.icon} color={fg} dir="right" />;
    if (icon === "icon left")   return <ArrowIcon size={s.icon} color={fg} dir="left" />;
    if (icon === "avatar")      return <AvatarIcon size={s.icon + 2} />;
    return null;
  };

  const iconEl = renderIcon();
  const isRight = icon === "x close" || icon === "icon right";
  const isLeft  = icon === "dot" || icon === "icon left" || icon === "avatar";

  return (
    <div className={_p.className} style={wrapStyle}>
      {isLeft  && iconEl}
      <span>{text}</span>
      {isRight && iconEl}
    </div>
  );
}
export default Badge;
