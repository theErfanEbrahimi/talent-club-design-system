/* @ds-bundle: {"format":4,"namespace":"DigikalaDesignSystem_edec98","components":[{"name":"ArrowLeft","sourcePath":"components/badge/ArrowLeft.jsx"},{"name":"ArrowUp","sourcePath":"components/badge/ArrowUp.jsx"},{"name":"Badge","sourcePath":"components/badge/Badge.jsx"},{"name":"BadgeBase","sourcePath":"components/badge/BadgeBase.jsx"},{"name":"BadgeDot","sourcePath":"components/badge/BadgeDot.jsx"},{"name":"Plus","sourcePath":"components/badge/Plus.jsx"},{"name":"XClose","sourcePath":"components/badge/XClose.jsx"},{"name":"Dot","sourcePath":"components/status/Dot.jsx"}],"sourceHashes":{"components/badge/ArrowLeft.jsx":"a6d69847b77d","components/badge/ArrowUp.jsx":"c2c860613332","components/badge/Badge.jsx":"9a434a78870e","components/badge/BadgeBase.jsx":"f679bcdc18b8","components/badge/BadgeDot.jsx":"6d5556ab50a9","components/badge/Plus.jsx":"4dd88beb8460","components/badge/XClose.jsx":"5a343c058acf","components/status/Dot.jsx":"5104770f33c8"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.DigikalaDesignSystem_edec98 = window.DigikalaDesignSystem_edec98 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/badge/ArrowLeft.jsx
try { (() => {
// figma node: 1:32 arrow-left
function ArrowLeft(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 14,
    height: 14,
    viewBox: "0 0 14 14",
    fill: "none",
    style: {
      position: "absolute",
      left: 5,
      top: 5,
      width: 14,
      height: 14
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 7 14 L 0 7 L 7 0 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })));
}
Object.assign(__ds_scope, { ArrowLeft, __ds_default_components_badge_ArrowLeft_anx91u: ArrowLeft });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/badge/ArrowLeft.jsx", error: String((e && e.message) || e) }); }

// components/badge/ArrowUp.jsx
try { (() => {
// figma node: 1:34 arrow-up
function ArrowUp(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 14,
    height: 14,
    viewBox: "0 0 14 14",
    fill: "none",
    style: {
      position: "absolute",
      left: 5,
      top: 5,
      width: 14,
      height: 14
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 7 L 7 0 L 14 7 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })));
}
Object.assign(__ds_scope, { ArrowUp, __ds_default_components_badge_ArrowUp_qczvzg: ArrowUp });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/badge/ArrowUp.jsx", error: String((e && e.message) || e) }); }

// components/badge/Badge.jsx
try { (() => {
// figma node: 1:132 Badge (765 variants) — color/size/type map hand-completed from Figma values
// sm: h=20, pad=2px 8px, fs=10 | md: h=24, pad=2px 10px, fs=12 | lg: h=28, pad=2px 12px, fs=14
// pill = radius 999 | badge = radius 6 | color = filled | outline = transparent + border

const SIZES = {
  sm: {
    padding: "2px 8px",
    dotPad: "2px 8px 2px 6px",
    iconPad: "2px 6px 2px 8px",
    fontSize: 10,
    lineHeight: "16px",
    dot: 6,
    icon: 12
  },
  md: {
    padding: "2px 10px",
    dotPad: "2px 10px 2px 8px",
    iconPad: "2px 8px 2px 10px",
    fontSize: 12,
    lineHeight: "20px",
    dot: 6,
    icon: 14
  },
  lg: {
    padding: "2px 12px",
    dotPad: "2px 12px 2px 10px",
    iconPad: "2px 10px 2px 12px",
    fontSize: 14,
    lineHeight: "24px",
    dot: 8,
    icon: 16
  }
};

// bg=filled bg, fg=text color, bd=border color for outline
const COLORS = {
  primary: {
    bg: "rgb(245,243,255)",
    fg: "rgb(105,39,218)",
    bd: "rgb(105,39,218)"
  },
  error: {
    bg: "var(--color-error-50)",
    fg: "var(--color-error-700)",
    bd: "var(--color-error-300)"
  },
  warning: {
    bg: "var(--color-warning-50)",
    fg: "var(--color-warning-700)",
    bd: "var(--color-warning-300)"
  },
  success: {
    bg: "var(--color-success-50)",
    fg: "var(--color-success-700)",
    bd: "var(--color-success-300)"
  },
  blue: {
    bg: "var(--color-blue-50)",
    fg: "var(--color-blue-700)",
    bd: "var(--color-blue-300)"
  },
  "blue light": {
    bg: "oklch(0.97 0.02 220)",
    fg: "oklch(0.45 0.09 220)",
    bd: "oklch(0.75 0.07 220)"
  },
  indigo: {
    bg: "oklch(0.96 0.03 264)",
    fg: "oklch(0.42 0.18 264)",
    bd: "oklch(0.72 0.12 264)"
  },
  purple: {
    bg: "oklch(0.96 0.03 295)",
    fg: "oklch(0.42 0.18 295)",
    bd: "oklch(0.72 0.12 295)"
  },
  pink: {
    bg: "oklch(0.97 0.02 345)",
    fg: "oklch(0.45 0.16 345)",
    bd: "oklch(0.75 0.10 345)"
  },
  "rosé": {
    bg: "oklch(0.97 0.02 10)",
    fg: "oklch(0.45 0.16 10)",
    bd: "oklch(0.75 0.10 10)"
  },
  orange: {
    bg: "oklch(0.97 0.04 55)",
    fg: "oklch(0.50 0.16 55)",
    bd: "oklch(0.75 0.10 55)"
  },
  "blue gray": {
    bg: "oklch(0.96 0.01 230)",
    fg: "oklch(0.40 0.04 230)",
    bd: "oklch(0.72 0.04 230)"
  },
  gray: {
    bg: "var(--color-gray-50)",
    fg: "var(--color-gray-700)",
    bd: "var(--color-gray-300)"
  }
};
const FONT = "IRANYekan, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif";

// Simple inline SVG icons
function DotIcon({
  size,
  color
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 8 8"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "4",
    cy: "4",
    r: "3",
    fill: color
  })));
}
function XIcon({
  size,
  color
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 12 12",
    fill: "none",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M3 3l6 6M9 3l-6 6"
  })));
}
function ArrowIcon({
  size,
  color,
  dir = "right"
}) {
  const d = dir === "right" ? "M4 2l4 4-4 4" : "M8 2L4 6l4 4";
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 12 12",
    fill: "none",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: d
  })));
}
function AvatarIcon({
  size
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0,
      width: size,
      height: size,
      borderRadius: "50%",
      background: "var(--color-gray-200)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 16 16",
    fill: "none"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "8",
    cy: "6",
    r: "3",
    fill: "var(--color-gray-400)"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M2 14c0-3.314 2.686-5 6-5s6 1.686 6 5",
    fill: "var(--color-gray-400)"
  })));
}
function Badge(_p = {}) {
  const size = _p.size ?? "sm";
  const icon = _p.icon ?? "false";
  const type = _p.type ?? "pill color";
  const color = _p.color ?? "primary";
  const text = _p.text ?? "برچسب";
  const s = SIZES[size] ?? SIZES.sm;
  const c = COLORS[color] ?? COLORS.primary;
  const isBadge = type === "badge color" || type === "badge modern";
  const isOutline = type === "pill outline" || type === "badge outline";
  const hasShadow = type === "badge modern";
  const radius = isBadge ? 6 : 999;
  let bg = isOutline ? "transparent" : c.bg;
  let fg = c.fg;
  let border = isOutline ? `1px solid ${c.bd}` : "none";
  let boxShadow = hasShadow ? "0px 1px 2px 0px rgba(16,24,40,0.05)" : undefined;

  // padding varies by icon slot
  let pad = s.padding;
  if (icon === "dot") pad = s.dotPad;
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
    ..._p.style
  };
  const renderIcon = () => {
    if (icon === "dot") return /*#__PURE__*/React.createElement(DotIcon, {
      size: s.dot,
      color: fg
    });
    if (icon === "x close") return /*#__PURE__*/React.createElement(XIcon, {
      size: s.icon,
      color: fg
    });
    if (icon === "icon right") return /*#__PURE__*/React.createElement(ArrowIcon, {
      size: s.icon,
      color: fg,
      dir: "right"
    });
    if (icon === "icon left") return /*#__PURE__*/React.createElement(ArrowIcon, {
      size: s.icon,
      color: fg,
      dir: "left"
    });
    if (icon === "avatar") return /*#__PURE__*/React.createElement(AvatarIcon, {
      size: s.icon + 2
    });
    return null;
  };
  const iconEl = renderIcon();
  const isRight = icon === "x close" || icon === "icon right";
  const isLeft = icon === "dot" || icon === "icon left" || icon === "avatar";
  return /*#__PURE__*/React.createElement("div", {
    className: _p.className,
    style: wrapStyle
  }, isLeft && iconEl, /*#__PURE__*/React.createElement("span", null, text), isRight && iconEl);
}
Object.assign(__ds_scope, { Badge, __ds_default_components_badge_Badge_1ooyq5r: Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/badge/Badge.jsx", error: String((e && e.message) || e) }); }

// components/badge/BadgeDot.jsx
try { (() => {
// figma node: 1:2 Dot (6 variants)
const __venc = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = p => "size=" + __venc(p.size) + '|' + "outline=" + __venc(p.outline);
function BadgeDot(_p = {}) {
  const props = {
    ..._p,
    size: _p.size ?? "sm",
    outline: _p.outline ?? false
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 8,
      height: 8,
      overflow: "hidden",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 1,
      top: 1,
      width: 6,
      height: 6,
      borderRadius: "50%",
      backgroundColor: "rgb(18,183,106)"
    }
  }));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 10,
      height: 10,
      overflow: "hidden",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 1,
      top: 1,
      width: 8,
      height: 8,
      borderRadius: "50%",
      backgroundColor: "rgb(18,183,106)"
    }
  }));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 10,
      height: 10,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 1,
      top: 1,
      width: 8,
      height: 8,
      borderRadius: "50%",
      backgroundColor: "rgb(18,183,106)",
      boxShadow: "0 0 0 4px rgb(209,250,223)"
    }
  }));
  const __body3 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 12,
      height: 12,
      overflow: "hidden",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 1,
      top: 1,
      width: 10,
      height: 10,
      borderRadius: "50%",
      backgroundColor: "rgb(18,183,106)"
    }
  }));
  const __body4 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 12,
      height: 12,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 1,
      top: 1,
      width: 10,
      height: 10,
      borderRadius: "50%",
      backgroundColor: "rgb(18,183,106)",
      boxShadow: "0 0 0 5px rgb(209,250,223)"
    }
  }));
  const __body5 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 8,
      height: 8,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 1,
      top: 1,
      width: 6,
      height: 6,
      borderRadius: "50%",
      backgroundColor: "rgb(18,183,106)",
      boxShadow: "0 0 0 3px rgb(209,250,223)"
    }
  }));
  const __impls = {
    // figma: Size=sm, Outline=False
    "size=sm|outline=false": __body0,
    // figma: Size=md, Outline=False
    "size=md|outline=false": __body1,
    // figma: Size=md, Outline=True
    "size=md|outline=true": __body2,
    // figma: Size=lg, Outline=False
    "size=lg|outline=false": __body3,
    // figma: Size=lg, Outline=True
    "size=lg|outline=true": __body4,
    // figma: Size=sm, Outline=True
    "size=sm|outline=true": __body5
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
Object.assign(__ds_scope, { BadgeDot, __ds_default_components_badge_BadgeDot_1txcs5y: BadgeDot });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/badge/BadgeDot.jsx", error: String((e && e.message) || e) }); }

// components/badge/Plus.jsx
try { (() => {
// figma node: 1:36 plus
function Plus(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 5,
      top: 5,
      width: 14,
      height: 14,
      border: "1px dashed currentColor",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",
      fontSize: 10,
      opacity: 0.45
    }
  }, "Icon"));
}
Object.assign(__ds_scope, { Plus, __ds_default_components_badge_Plus_1lt7nvk: Plus });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/badge/Plus.jsx", error: String((e && e.message) || e) }); }

// components/badge/XClose.jsx
try { (() => {
// figma node: 1:30 x-close
function XClose(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 6,
      top: 6,
      width: 12,
      height: 12,
      border: "1px dashed currentColor",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",
      fontSize: 10,
      opacity: 0.45
    }
  }, "Icon"));
}
Object.assign(__ds_scope, { XClose, __ds_default_components_badge_XClose_roa0ga: XClose });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/badge/XClose.jsx", error: String((e && e.message) || e) }); }

// components/badge/BadgeBase.jsx
try { (() => {
// figma node: 1:38 _Badge base (7 variants)
const __venc = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = p => "icon=" + __venc(p.icon);
function BadgeBase(_p = {}) {
  const props = {
    ..._p,
    icon: _p.icon ?? "false"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 16,
      backgroundColor: "rgb(245,243,255)",
      display: "flex",
      flexDirection: "row",
      padding: "2px 8px 2px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "IRANYekan, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 10,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "16px",
      color: "rgb(105,39,218)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "برچسب"));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 16,
      backgroundColor: "rgb(245,243,255)",
      display: "flex",
      flexDirection: "row",
      gap: 6,
      padding: "2px 8px 2px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "IRANYekan, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 10,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "16px",
      color: "rgb(105,39,218)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "برچسب"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 8,
      height: 8,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 1,
      top: 1,
      width: 6,
      height: 6,
      borderRadius: "50%",
      backgroundColor: "rgb(185,178,11)"
    }
  })));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 16,
      backgroundColor: "rgb(245,243,255)",
      display: "flex",
      flexDirection: "row",
      gap: 6,
      padding: "2px 8px 2px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "IRANYekan, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 10,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "16px",
      color: "rgb(105,39,218)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "برچسب"), /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-e9be38c71c4e3ee1",
    style: {
      position: "relative",
      width: 16,
      overflow: "hidden",
      borderRadius: 133.33334350585938,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }));
  const __body3 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 16,
      backgroundColor: "rgb(245,243,255)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "2px 8px 2px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "IRANYekan, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 10,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "16px",
      color: "rgb(105,39,218)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "برچسب"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 12,
      height: 12,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(__ds_scope.XClose, {
    style: {
      transform: "scale(0.500, 0.500)",
      transformOrigin: "0 0"
    }
  })));
  const __body4 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 16,
      backgroundColor: "rgb(245,243,255)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "2px 8px 2px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 12,
      height: 12,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(__ds_scope.ArrowLeft, {
    style: {
      transform: "scale(0.500, 0.500)",
      transformOrigin: "0 0"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "IRANYekan, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 10,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "16px",
      color: "rgb(105,39,218)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "برچسب"));
  const __body5 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 16,
      backgroundColor: "rgb(245,243,255)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "2px 8px 2px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "IRANYekan, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 10,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "16px",
      color: "rgb(105,39,218)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "برچسب"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 12,
      height: 12,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(__ds_scope.ArrowUp, {
    style: {
      transform: "scale(0.500, 0.500)",
      transformOrigin: "0 0"
    }
  })));
  const __body6 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 16,
      backgroundColor: "rgb(245,243,255)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "4px 4px 4px 4px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 12,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(__ds_scope.Plus, null)));
  const __impls = {
    // figma: Icon=False
    "icon=false": __body0,
    // figma: Icon=Dot
    "icon=dot": __body1,
    // figma: Icon=Avatar
    "icon=avatar": __body2,
    // figma: Icon=X close
    "icon=x close": __body3,
    // figma: Icon=Icon right
    "icon=icon right": __body4,
    // figma: Icon=Icon left
    "icon=icon left": __body5,
    // figma: Icon=Only
    "icon=only": __body6
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
Object.assign(__ds_scope, { BadgeBase, __ds_default_components_badge_BadgeBase_18nab0q: BadgeBase });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/badge/BadgeBase.jsx", error: String((e && e.message) || e) }); }

// components/status/Dot.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: 6,
  md: 8,
  lg: 10
};
const COLORS = {
  gray: "var(--color-gray-400)",
  brand: "var(--color-brand-500)",
  error: "var(--color-error-500)",
  warning: "var(--color-warning-500)",
  success: "var(--color-success-500)",
  blue: "var(--color-blue-500)",
  violet: "var(--color-violet-500)"
};
function Dot({
  size = "md",
  color = "success",
  outline = false,
  style = {},
  ...rest
}) {
  const d = SIZES[size] || SIZES.md;
  const c = COLORS[color] || COLORS.success;
  if (outline) {
    return /*#__PURE__*/React.createElement("span", _extends({
      style: {
        display: "inline-flex",
        width: d + 6,
        height: d + 6,
        alignItems: "center",
        justifyContent: "center",
        ...style
      }
    }, rest), /*#__PURE__*/React.createElement("span", {
      style: {
        width: d + 6,
        height: d + 6,
        borderRadius: "50%",
        background: "currentColor",
        opacity: 0.2,
        position: "absolute",
        color: c
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        width: d,
        height: d,
        borderRadius: "50%",
        background: c
      }
    }));
  }
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-block",
      width: d,
      height: d,
      borderRadius: "50%",
      background: c,
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Dot });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/status/Dot.jsx", error: String((e && e.message) || e) }); }

__ds_ns.ArrowLeft = __ds_scope.ArrowLeft;

__ds_ns.ArrowUp = __ds_scope.ArrowUp;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.BadgeBase = __ds_scope.BadgeBase;

__ds_ns.BadgeDot = __ds_scope.BadgeDot;

__ds_ns.Plus = __ds_scope.Plus;

__ds_ns.XClose = __ds_scope.XClose;

__ds_ns.Dot = __ds_scope.Dot;

})();
