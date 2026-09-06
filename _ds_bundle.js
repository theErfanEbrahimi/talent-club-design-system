/* @ds-bundle: {"format":4,"namespace":"TalentClubDesignSystem_ae32ee","components":[{"name":"ArrowLeft","sourcePath":"components/badge/ArrowLeft.jsx"},{"name":"ArrowUp","sourcePath":"components/badge/ArrowUp.jsx"},{"name":"Badge","sourcePath":"components/badge/Badge.jsx"},{"name":"BadgeBase","sourcePath":"components/badge/BadgeBase.jsx"},{"name":"BadgeDot","sourcePath":"components/badge/BadgeDot.jsx"},{"name":"Plus","sourcePath":"components/badge/Plus.jsx"},{"name":"XClose","sourcePath":"components/badge/XClose.jsx"},{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Icon","sourcePath":"components/icons/Icon.jsx"},{"name":"Dot","sourcePath":"components/status/Dot.jsx"}],"sourceHashes":{"components/badge/ArrowLeft.jsx":"a6d69847b77d","components/badge/ArrowUp.jsx":"c2c860613332","components/badge/Badge.jsx":"9a434a78870e","components/badge/BadgeBase.jsx":"f679bcdc18b8","components/badge/BadgeDot.jsx":"6d5556ab50a9","components/badge/Plus.jsx":"4dd88beb8460","components/badge/XClose.jsx":"5a343c058acf","components/core/Avatar.jsx":"57f036c9358a","components/core/Button.jsx":"c81281804b90","components/core/IconButton.jsx":"8f28b908fbe5","components/icons/Icon.jsx":"ded294d9a4aa","components/status/Dot.jsx":"5104770f33c8","ui_kits/talent-club-app/AnswerEditor.jsx":"0e91eb215204","ui_kits/talent-club-app/AppShell.jsx":"d7eab264b962","ui_kits/talent-club-app/FeedbackAssistant.jsx":"dc2d114e5ec1","ui_kits/talent-club-app/PerformanceReviewScreen.jsx":"495a586f2529","ui_kits/talent-club-app/QuestionList.jsx":"b6e19d7a707c"},"inlinedExternals":[],"unexposedExports":[{"name":"iconNames","sourcePath":"components/icons/Icon.jsx"}]} */

(() => {

const __ds_ns = (window.TalentClubDesignSystem_ae32ee = window.TalentClubDesignSystem_ae32ee || {});

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

// components/core/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Header / row avatar. Violet-100 disc with the first letter of the name,
   36px in the app header. Pass `src` for a real photo. */

const SIZES = {
  xs: {
    box: 24,
    fs: 10
  },
  sm: {
    box: 28,
    fs: 11
  },
  md: {
    box: 36,
    fs: 14
  },
  lg: {
    box: 44,
    fs: 16
  }
};
const TONES = {
  accent: {
    bg: "var(--color-violet-100)",
    fg: "var(--color-violet-700)"
  },
  brand: {
    bg: "var(--color-brand-100)",
    fg: "var(--color-brand-700)"
  },
  neutral: {
    bg: "var(--color-gray-100)",
    fg: "var(--color-gray-600)"
  }
};
function Avatar({
  name = "",
  src,
  size = "md",
  tone = "accent",
  style = {},
  ...rest
}) {
  const s = SIZES[size] || SIZES.md;
  const t = TONES[tone] || TONES.accent;
  return /*#__PURE__*/React.createElement("span", _extends({
    title: name || undefined,
    style: {
      width: s.box,
      height: s.box,
      flex: "none",
      borderRadius: "50%",
      overflow: "hidden",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      background: t.bg,
      color: t.fg,
      fontSize: s.fs,
      fontWeight: 700,
      lineHeight: 1,
      ...style
    }
  }, rest), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name,
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }) : name.trim().charAt(0));
}
Object.assign(__ds_scope, { Avatar, __ds_default_components_core_Avatar_4ed3sh: Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Talent Club action button.
   Geometry and color measured from the shipped HR app:
     md = 10px 18px / 14px / radius 10 / weight 700
   Hover darkens the whole button (filter brightness .96) rather than swapping
   colors — the product does this for every hierarchy. Disabled = opacity .5. */

const SIZES = {
  sm: {
    padding: "6px 12px",
    fontSize: 12,
    radius: 8,
    weight: 600,
    gap: 6,
    icon: 14
  },
  md: {
    padding: "10px 18px",
    fontSize: 14,
    radius: 10,
    weight: 700,
    gap: 8,
    icon: 16
  },
  lg: {
    padding: "12px 22px",
    fontSize: 14,
    radius: 10,
    weight: 700,
    gap: 8,
    icon: 16
  },
  xl: {
    padding: "14px 26px",
    fontSize: 16,
    radius: 12,
    weight: 700,
    gap: 10,
    icon: 18
  }
};
const HIERARCHY = {
  contained: {
    bg: "var(--color-violet-600)",
    fg: "var(--color-white)",
    bd: "transparent"
  },
  pale: {
    bg: "var(--color-brand-50)",
    fg: "var(--color-violet-700)",
    bd: "transparent"
  },
  ai: {
    bg: "var(--color-violet-50)",
    fg: "var(--color-violet-700)",
    bd: "var(--color-violet-200)"
  },
  outline: {
    bg: "var(--color-white)",
    fg: "var(--color-gray-700)",
    bd: "var(--color-gray-300)"
  },
  text1: {
    bg: "transparent",
    fg: "var(--color-violet-700)",
    bd: "transparent"
  },
  text2: {
    bg: "transparent",
    fg: "var(--color-gray-600)",
    bd: "transparent"
  }
};
const DESTRUCTIVE = {
  contained: {
    bg: "var(--color-error-600)",
    fg: "var(--color-white)",
    bd: "transparent"
  },
  pale: {
    bg: "var(--color-error-50)",
    fg: "var(--color-error-700)",
    bd: "transparent"
  },
  ai: {
    bg: "var(--color-error-50)",
    fg: "var(--color-error-700)",
    bd: "var(--color-error-200)"
  },
  outline: {
    bg: "var(--color-white)",
    fg: "var(--color-error-700)",
    bd: "var(--color-error-300)"
  },
  text1: {
    bg: "transparent",
    fg: "var(--color-error-700)",
    bd: "transparent"
  },
  text2: {
    bg: "transparent",
    fg: "var(--color-error-600)",
    bd: "transparent"
  }
};
const ALIAS = {
  primary: "contained",
  secondary: "outline",
  tertiary: "text1",
  link: "text2",
  light: "pale"
};
function Spinner({
  size
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      animation: "tc-spin var(--duration-spin) linear infinite"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.4",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 3a9 9 0 1 0 9 9"
  })));
}
function Button({
  children,
  hierarchy = "contained",
  size = "md",
  destructive = false,
  disabled = false,
  loading = false,
  loadingText,
  iconLeft,
  iconRight,
  fullWidth = false,
  type = "button",
  style = {},
  onClick,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const h = ALIAS[hierarchy] || hierarchy;
  const s = SIZES[size] || SIZES.md;
  const c = (destructive ? DESTRUCTIVE : HIERARCHY)[h] || HIERARCHY.contained;
  const off = disabled || loading;
  const iconOnly = !children && !loading && (iconLeft || iconRight);
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: off,
    onClick: off ? undefined : onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: fullWidth ? "flex" : "inline-flex",
      width: fullWidth ? "100%" : undefined,
      alignItems: "center",
      justifyContent: "center",
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
      ...style
    }
  }, rest), loading ? /*#__PURE__*/React.createElement(Spinner, {
    size: s.icon
  }) : iconLeft, loading && loadingText ? /*#__PURE__*/React.createElement("span", null, loadingText) : children ? /*#__PURE__*/React.createElement("span", null, children) : null, !loading && iconRight);
}
Object.assign(__ds_scope, { Button, __ds_default_components_core_Button_51d4zy: Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Square icon-only control — editor toolbar, panel close, header actions.
   32×32 with a 6px radius and a gray-50 hover wash (measured from the app). */

const SIZES = {
  sm: {
    box: 28,
    icon: 15,
    radius: 6
  },
  md: {
    box: 32,
    icon: 17,
    radius: 6
  },
  lg: {
    box: 36,
    icon: 20,
    radius: 8
  }
};
function IconButton({
  children,
  size = "md",
  tone = "default",
  active = false,
  disabled = false,
  label,
  style = {},
  onClick,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const s = SIZES[size] || SIZES.md;
  const fg = tone === "accent" ? "var(--color-violet-700)" : tone === "muted" ? "var(--color-gray-400)" : "var(--color-gray-500)";
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label,
    disabled: disabled,
    onClick: disabled ? undefined : onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      width: s.box,
      height: s.box,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      border: 0,
      borderRadius: s.radius,
      background: active ? "var(--color-violet-50)" : hover && !disabled ? "var(--color-gray-50)" : "none",
      color: active ? "var(--color-violet-700)" : fg,
      cursor: disabled ? "default" : "pointer",
      opacity: disabled ? 0.5 : 1,
      padding: 0,
      flex: "none",
      transition: "var(--transition-color)",
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton, __ds_default_components_core_IconButton_p7lntj: IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/icons/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Talent Club icon set.
   Outline glyphs on a 24×24 box, stroke 1.8 (2 for chevrons/arrows), round joins.
   Every path here is lifted verbatim from the shipped product source — nothing
   is redrawn. `sparkle` and `sparkle-solid` are the only filled glyphs; they
   mark AI-generated surfaces. */

const STROKE = {
  "file-text": /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14 3v6h6"
  })),
  "clipboard-check": /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "9",
    y: "3",
    width: "6",
    height: "4",
    rx: "1"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m9 13 2 2 4-4"
  })),
  "graduation-cap": /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "m2 9 10-5 10 5-10 5z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6 11v5c0 1.5 2.7 3 6 3s6-1.5 6-3v-5"
  })),
  "review-doc": /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
    x: "4",
    y: "3",
    width: "16",
    height: "18",
    rx: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8 8h8M8 12h8"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m9 16.5 1.5 1.5 3-3"
  })),
  flag: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M5 21V4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5 4h13l-2.5 4L18 12H5"
  })),
  users: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "9",
    cy: "8",
    r: "3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 20c0-3 2.7-5 6-5s6 2 6 5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "17",
    cy: "9",
    r: "2.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16.5 15c2.8.3 4.5 2 4.5 4.5"
  })),
  bell: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13.7 21a2 2 0 0 1-3.4 0"
  })),
  "help-circle": /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "9"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9.5 9a2.5 2.5 0 0 1 5 .5c0 1.5-2.5 2-2.5 3.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 17h.01"
  })),
  "info-circle": /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "9"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 11v5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 8h.01"
  })),
  "check-circle": /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "9"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m8.5 12 2.5 2.5 5-5"
  })),
  lightbulb: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M9 18h6M10 21h4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 3a6 6 0 0 0-4 10.5c.8.7 1 1.5 1 2.5h6c0-1 .2-1.8 1-2.5A6 6 0 0 0 12 3z"
  })),
  image: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "4",
    width: "18",
    height: "16",
    rx: "2"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "9",
    cy: "10",
    r: "1.6"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m21 16-4.5-4.5L7 21"
  })),
  list: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M9 6h12M9 12h12M9 18h12"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4 6h.01M4 12h.01M4 18h.01"
  })),
  "align-right": /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M3 6h18M9 12h12M6 18h15"
  })),
  "align-center": /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M3 6h18M6 12h12M4 18h16"
  })),
  "align-left": /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M3 6h18M3 12h12M3 18h15"
  })),
  link: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 0 0-7-7l-1.7 1.7"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 0 0 7 7l1.7-1.7"
  })),
  "chevron-down": /*#__PURE__*/React.createElement("path", {
    d: "m6 9 6 6 6-6"
  }),
  "chevron-up": /*#__PURE__*/React.createElement("path", {
    d: "m18 15-6-6-6 6"
  }),
  "chevron-left": /*#__PURE__*/React.createElement("path", {
    d: "m15 18-6-6 6-6"
  }),
  "chevron-right": /*#__PURE__*/React.createElement("path", {
    d: "m9 18 6-6-6-6"
  }),
  "arrow-left": /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M19 12H5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m12 19-7-7 7-7"
  })),
  "arrow-right": /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M5 12h14"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m12 5 7 7-7 7"
  })),
  "arrow-up": /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M12 19V5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m5 12 7-7 7 7"
  })),
  x: /*#__PURE__*/React.createElement("path", {
    d: "M6 6l12 12M18 6 6 18"
  }),
  plus: /*#__PURE__*/React.createElement("path", {
    d: "M12 5v14M5 12h14"
  }),
  check: /*#__PURE__*/React.createElement("path", {
    d: "m5 12.5 4.5 4.5L19 7"
  }),
  "alert-circle": /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "9"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 7v6"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 16.5h.01"
  })),
  search: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "11",
    r: "7"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m20 20-3.5-3.5"
  })),
  calendar: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "5",
    width: "18",
    height: "16",
    rx: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8 3v4M16 3v4M3 11h18"
  })),
  settings: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-2.9 1.2 2 2 0 1 1-4 0 1.7 1.7 0 0 0-2.9-1.2l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1A1.7 1.7 0 0 0 4.6 15a2 2 0 1 1 0-4 1.7 1.7 0 0 0 1.2-2.9l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1A1.7 1.7 0 0 0 11.5 4a2 2 0 1 1 4 0 1.7 1.7 0 0 0 2.9 1.2l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1A1.7 1.7 0 0 0 19.4 11a2 2 0 1 1 0 4z"
  })),
  "log-out": /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M9 21H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16 17l5-5-5-5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M21 12H9"
  })),
  bold: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M7 5h6a3.5 3.5 0 0 1 0 7H7z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7 12h7a3.5 3.5 0 0 1 0 7H7z"
  }))
};
const FILL = {
  sparkle: "M12 2c.8 5.5 4.5 9.2 10 10-5.5.8-9.2 4.5-10 10-.8-5.5-4.5-9.2-10-10 5.5-.8 9.2-4.5 10-10z"
};
const iconNames = [...Object.keys(STROKE), ...Object.keys(FILL)].sort();
function Icon({
  name,
  size = 20,
  strokeWidth,
  color = "currentColor",
  style = {},
  ...rest
}) {
  const filled = FILL[name];
  const glyph = STROKE[name];
  if (!filled && !glyph) return null;
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    "aria-hidden": true,
    style: {
      flex: "none",
      display: "block",
      ...style
    },
    ...rest
  };
  if (filled) return /*#__PURE__*/React.createElement("svg", _extends({}, common, {
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: filled
  }));
  const sw = strokeWidth ?? (/^(chevron|arrow)|^(x|plus|check)$/.test(name) ? 2 : 1.8);
  return /*#__PURE__*/React.createElement("svg", _extends({}, common, {
    fill: "none",
    stroke: color,
    strokeWidth: sw,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), glyph);
}
Object.assign(__ds_scope, { iconNames, Icon, __ds_default_components_icons_Icon_fio49a: Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/icons/Icon.jsx", error: String((e && e.message) || e) }); }

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

// ui_kits/talent-club-app/AnswerEditor.jsx
try { (() => {
/* Answer editor: toolbar, highlight backdrop under a transparent textarea,
   word count, AI trigger, legend, prev/next. */

const TOOLBAR = [["image"], "|", ["list"], "|", ["align-right", true], ["align-center"], ["align-left"], "|", ["bold"], ["link"]];
const MARK = {
  tone: {
    background: "var(--mark-tone-bg)",
    boxShadow: "0 2px 0 var(--mark-tone-rule)"
  },
  bias: {
    background: "var(--mark-bias-bg)",
    boxShadow: "0 2px 0 var(--mark-bias-rule)"
  },
  clarity: {
    background: "var(--mark-clarity-bg)",
    boxShadow: "0 2px 0 var(--mark-clarity-rule)"
  }
};
const faDigits = n => String(n).replace(/[0-9]/g, d => "۰۱۲۳۴۵۶۷۸۹"[+d]);
function Highlights({
  text,
  flags,
  scrollRef
}) {
  const marks = flags.map(f => {
    const i = text.indexOf(f.excerpt);
    return i < 0 ? null : {
      i,
      j: i + f.excerpt.length,
      k: f.kind
    };
  }).filter(Boolean).sort((a, b) => a.i - b.i);
  const kids = [];
  let p = 0;
  for (const m of marks) {
    if (m.i < p) continue;
    if (m.i > p) kids.push(text.slice(p, m.i));
    kids.push(/*#__PURE__*/React.createElement("mark", {
      key: m.i + m.k,
      style: {
        borderRadius: 3,
        padding: "2px 0",
        color: "inherit",
        ...MARK[m.k]
      }
    }, text.slice(m.i, m.j)));
    p = m.j;
  }
  kids.push(text.slice(p));
  return /*#__PURE__*/React.createElement("div", {
    ref: scrollRef,
    "aria-hidden": true,
    style: {
      position: "absolute",
      inset: 0,
      color: "var(--color-gray-900)",
      overflow: "hidden",
      pointerEvents: "none",
      fontFamily: "var(--font-sans)",
      fontSize: 15,
      lineHeight: "var(--editor-line-height)",
      padding: "16px 20px",
      boxSizing: "border-box",
      whiteSpace: "pre-wrap",
      overflowWrap: "break-word"
    }
  }, kids);
}
function AnswerEditor({
  text,
  onText,
  flags,
  analyzed,
  analyzing,
  onAi
}) {
  const back = useRef(null);
  const words = text.trim() ? text.trim().split(/\s+/).length : 0;
  return /*#__PURE__*/React.createElement("main", {
    style: {
      flex: 1,
      minWidth: 420
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      fontWeight: 700
    }
  }, "\u0633\u0648\u0627\u0644 \u06F2 / \u06F8"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 6,
      fontSize: 13,
      fontWeight: 600,
      color: "var(--text-link)",
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "help-circle",
    size: 15
  }), /*#__PURE__*/React.createElement("span", null, "\u0631\u0627\u0647\u0646\u0645\u0627\u06CC \u067E\u0627\u0633\u062E \u0628\u0647 \u0633\u0648\u0627\u0644"))), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15,
      lineHeight: 2,
      fontWeight: 500,
      color: "var(--color-gray-900)",
      margin: "0 0 16px"
    }
  }, "\u06CC\u06A9 \u06CC\u0627 \u062F\u0648 \u0646\u0645\u0648\u0646\u0647 \u0645\u0634\u062E\u0635 \u0627\u0632 \u0639\u0645\u0644\u06A9\u0631\u062F \u0639\u0644\u06CC \u062F\u0631 \u0627\u06CC\u0646 \u0646\u06CC\u0645\u200C\u0633\u0627\u0644 \u0631\u0627 \u0634\u0631\u062D \u0628\u062F\u0647\u061B \u0645\u0648\u0642\u0639\u06CC\u062A\u060C \u0631\u0641\u062A\u0627\u0631 \u0645\u0634\u0627\u0647\u062F\u0647\u200C\u0634\u062F\u0647\u060C \u062A\u0627\u062B\u06CC\u0631 \u0622\u0646 \u0648 \u067E\u06CC\u0634\u0646\u0647\u0627\u062F\u062A \u0628\u0631\u0627\u06CC \u0642\u062F\u0645 \u0628\u0639\u062F\u06CC \u0631\u0627 \u0628\u0646\u0648\u06CC\u0633."), /*#__PURE__*/React.createElement("div", {
    style: {
      border: "1px solid var(--editor-border)",
      borderRadius: 12,
      background: "#fff",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 2,
      padding: "8px 10px",
      borderBottom: "1px solid var(--color-gray-100)"
    }
  }, TOOLBAR.map((t, i) => t === "|" ? /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      width: 1,
      height: 20,
      background: "var(--color-gray-100)",
      margin: "0 8px"
    }
  }) : /*#__PURE__*/React.createElement(IconButton, {
    key: i,
    label: t[0],
    active: !!t[1]
  }, /*#__PURE__*/React.createElement(Icon, {
    name: t[0],
    size: 17
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement(Highlights, {
    text: text,
    flags: analyzed ? flags : [],
    scrollRef: back
  }), /*#__PURE__*/React.createElement("textarea", {
    value: text,
    onChange: e => onText(e.target.value),
    spellCheck: false,
    dir: "rtl",
    onScroll: e => {
      if (back.current) back.current.scrollTop = e.target.scrollTop;
    },
    placeholder: "\u0644\u0637\u0641\u0627 \u062A\u0648\u0636\u06CC\u062D\u0627\u062A \u062E\u0648\u062F \u0631\u0627 \u0628\u0646\u0648\u06CC\u0633\u06CC\u062F...",
    style: {
      position: "relative",
      display: "block",
      width: "100%",
      height: 330,
      border: 0,
      outline: "none",
      resize: "vertical",
      background: "transparent",
      color: "transparent",
      caretColor: "var(--color-gray-900)",
      zIndex: 1,
      margin: 0,
      fontFamily: "var(--font-sans)",
      fontSize: 15,
      lineHeight: "var(--editor-line-height)",
      padding: "16px 20px",
      boxSizing: "border-box"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "10px 14px",
      borderTop: "1px solid var(--color-gray-100)",
      background: "var(--color-gray-25)"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    hierarchy: "ai",
    size: "sm",
    style: {
      padding: "10px 18px",
      fontSize: 14,
      borderRadius: 10,
      fontWeight: 700
    },
    disabled: analyzing || !text.trim(),
    onClick: onAi,
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "sparkle",
      size: 16
    })
  }, analyzed ? "باز کردن دستیار بازخورد" : "بررسی با هوش مصنوعی"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11.5,
      color: "var(--color-gray-400)"
    }
  }, faDigits(words), " \u06A9\u0644\u0645\u0647"))), analyzed && flags.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 16,
      marginTop: 12,
      fontSize: 11,
      color: "var(--color-gray-500)",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700
    }
  }, "\u0646\u0634\u0627\u0646\u0647\u200C\u06AF\u0630\u0627\u0631\u06CC \u0645\u062A\u0646:"), [["لحن", "warning"], ["سوگیری", "error"], ["شفافیت", "violet"]].map(([l, c]) => /*#__PURE__*/React.createElement("span", {
    key: l,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 5
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 10,
      borderRadius: 3,
      background: `var(--color-${c}-200)`
    }
  }), /*#__PURE__*/React.createElement("span", null, l)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      justifyContent: "flex-end",
      marginTop: 24,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    hierarchy: "text1",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 16
    })
  }, "\u0642\u0628\u0644\u06CC"), /*#__PURE__*/React.createElement(Button, {
    hierarchy: "pale",
    size: "lg",
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-left",
      size: 16
    })
  }, "\u0628\u0639\u062F\u06CC")));
}
Object.assign(window, {
  AnswerEditor,
  faDigits
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/talent-club-app/AnswerEditor.jsx", error: String((e && e.message) || e) }); }

// ui_kits/talent-club-app/AppShell.jsx
try { (() => {
const {
  useState,
  useRef,
  useEffect
} = React;
const {
  Button,
  IconButton,
  Avatar,
  Icon,
  Badge
} = window.TalentClubDesignSystem_ae32ee;
const NAV = [{
  id: "okr",
  label: "فرم‌های OKR",
  icon: "file-text",
  chevron: true
}, {
  id: "perf",
  label: "ارزیابی عملکرد",
  icon: "clipboard-check"
}, {
  id: "learn",
  label: "آموزش",
  icon: "graduation-cap"
}, {
  id: "review",
  label: "مرور عملکرد",
  icon: "review-doc"
}, {
  id: "activity",
  label: "مرکز فعالیت",
  icon: "flag"
}, {
  id: "people",
  label: "همکاران",
  icon: "users"
}];
function Sidebar({
  active,
  onNav
}) {
  return /*#__PURE__*/React.createElement("aside", {
    style: {
      width: "var(--app-sidebar-width)",
      flex: "none",
      background: "var(--app-sidebar-bg)",
      color: "#fff",
      display: "flex",
      flexDirection: "column",
      padding: "20px 12px",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "4px 8px 26px"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-horizontal-brand.svg",
    alt: "\u062A\u0644\u0646\u062A\u200C\u06A9\u0644\u0627\u0628",
    style: {
      height: 26,
      filter: "brightness(0) invert(1)"
    }
  })), NAV.map(n => {
    const on = n.id === active;
    return /*#__PURE__*/React.createElement("div", {
      key: n.id,
      onClick: () => onNav(n.id),
      style: {
        display: "flex",
        alignItems: "center",
        gap: 12,
        padding: "12px 14px",
        borderRadius: "var(--app-sidebar-item-radius)",
        color: on ? "#fff" : "var(--app-sidebar-fg)",
        fontSize: 14,
        fontWeight: on ? 700 : 500,
        cursor: "pointer",
        marginBottom: 4,
        background: on ? "var(--app-sidebar-item-active-bg)" : "none"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: n.icon,
      size: 20
    }), /*#__PURE__*/React.createElement("span", null, n.label), n.chevron && /*#__PURE__*/React.createElement("span", {
      style: {
        marginInlineStart: "auto",
        opacity: 0.7,
        display: "flex"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "chevron-down",
      size: 14
    })));
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "auto",
      textAlign: "center",
      color: "var(--app-sidebar-footer-fg)",
      fontSize: 11,
      lineHeight: 1.9,
      paddingBottom: 8
    }
  }, "Digikala Digital HR.", /*#__PURE__*/React.createElement("br", null), "Version 2.0"));
}
function Header({
  user = "مسعود"
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      height: "var(--app-header-height)",
      flex: "none",
      background: "var(--app-header-bg)",
      borderBottom: "1px solid var(--app-header-border)",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "0 24px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      fontWeight: 700,
      fontSize: 14
    }
  }, /*#__PURE__*/React.createElement("span", null, "\u062E\u0648\u0634 \u0622\u0645\u062F\u06CC\u062F\u060C ", user), /*#__PURE__*/React.createElement("span", null, "\uD83D\uDC4B")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 16,
      color: "var(--text-secondary)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      fontSize: 13,
      fontWeight: 500,
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement("span", null, "\u0641\u0627\u0631\u0633\u06CC"), /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-down",
    size: 14
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "bell",
    size: 20
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 1,
      height: 24,
      background: "var(--color-gray-200)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: user
  }), /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-down",
    size: 14
  }))));
}
function AppShell({
  active,
  onNav,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    dir: "rtl",
    style: {
      display: "flex",
      minHeight: "100vh",
      minWidth: 1380,
      background: "var(--surface-page)",
      fontFamily: "var(--font-sans)",
      color: "var(--text-primary)"
    }
  }, /*#__PURE__*/React.createElement(Sidebar, {
    active: active,
    onNav: onNav
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement(Header, null), children));
}
Object.assign(window, {
  AppShell,
  Sidebar,
  Header,
  NAV,
  useState,
  useRef,
  useEffect,
  Button,
  IconButton,
  Avatar,
  Icon,
  Badge
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/talent-club-app/AppShell.jsx", error: String((e && e.message) || e) }); }

// ui_kits/talent-club-app/FeedbackAssistant.jsx
try { (() => {
/* دستیار بازخورد — the AI feedback assistant panel.
   Rules, checklist and score model are the product's own (STAR model). */

const RULES = [{
  id: "abs",
  kind: "tone",
  label: "لحن — ادعای مطلق",
  note: "کلمه‌های مطلق مثل «همیشه» بازخورد را غیرمنصفانه جلوه می‌دهند. به دفعات و بازه زمانی مشخص اشاره کن.",
  find: /علی همیشه در تحویل تسک‌ها تاخیر داره/,
  fix: () => "در سه اسپرینت گذشته، دو تسک اصلی علی با ۲ تا ۳ روز تاخیر تحویل شد"
}, {
  id: "judg",
  kind: "bias",
  label: "سوگیری — قضاوت شخصیتی",
  note: "«بی‌دقت» برچسب شخصیتی است، نه توصیف رفتار. رفتار قابل مشاهده و مصداق آن را بنویس (پرهیز از اثر شاخ/هاله).",
  find: /و به نظرم خیلی بی‌دقته/,
  fix: () => "و در دو PR اخیر چند خطای قابل پیشگیری در جزئیات کار دیده شد"
}, {
  id: "vague",
  kind: "clarity",
  label: "شفافیت — غیرعملیاتی",
  note: "«باید بهتر بشه» مشخص نمی‌کند چه چیزی، چقدر و چطور. یک اقدام مشخص و قابل پیگیری پیشنهاد بده.",
  find: /باید بهتر بشه\.?/,
  fix: () => "پیشنهاد می‌کنم برای هر تحویل، چک‌لیست کوتاه مستندسازی تعریف کند و در جلسه ۱:۱ بعدی پیشرفت آن را مرور کنیم."
}];
const CHECKS = [{
  id: "context",
  label: "موقعیت و زمینه",
  hint: "کجا و چه زمانی اتفاق افتاد؟",
  re: /(پروژه|اسپرینت|جلسه|نیم‌سال|خرداد|تیر|هفته)/,
  ins: " برای نمونه، این موضوع را در اسپرینت پایانی خرداد و در پروژه مهاجرت دیتابیس دیدم.",
  pts: 14
}, {
  id: "behavior",
  label: "رفتار مشاهده‌شده",
  hint: "چه کاری انجام شد یا نشد؟",
  re: /(تحویل|ننوشت|مستندات|تاخیر|کد|ارائه)/,
  ins: " رفتاری که مشاهده کردم: مستندات فاز اول ناقص تحویل شد.",
  pts: 14
}, {
  id: "impact",
  label: "تاثیر و نتیجه",
  hint: "چه اثری روی تیم یا کار داشت؟",
  re: /(باعث شد|منجر|بلاک|عقب افتاد|عقب بیفتد|نتیجه|تاثیر)/,
  ins: " این موضوع باعث شد تست نهایی اسپرینت دو روز عقب بیفتد و تیم QA بلاک بماند.",
  pts: 18
}, {
  id: "action",
  label: "اقدام بعدی",
  hint: "قدم بعدی مشخص چیست؟",
  re: /(پیشنهاد می‌کنم|چک‌لیست|مرور کنیم|قدم بعدی|پیگیری)/,
  ins: " پیشنهاد می‌کنم برای هر تحویل چک‌لیست مستندسازی تعریف کند و در جلسه ۱:۱ بعدی آن را مرور کنیم.",
  pts: 14
}];
const ROLES = {
  peer: {
    l: "همکار",
    tip: "بازخورد همتا: فقط روی همکاری‌هایی که خودت مستقیم تجربه کردی نظر بده، نه شنیده‌ها.",
    src: ["بازخورد قبلی شما (اسفند ۱۴۰۲)", "چک‌این مشترک پروژه"]
  },
  report: {
    l: "عضو تیمم",
    tip: "به‌عنوان مدیر او: انتظار شفاف و مسیر رشد مشخص کن و از مقایسه با دیگران پرهیز کن.",
    src: ["هدف Q2: بهبود کیفیت تحویل", "یادداشت ۱:۱ (۲۰ خرداد)"]
  },
  manager: {
    l: "مدیرم",
    tip: "بازخورد رو به بالا: روی تاثیر تصمیم‌ها بر تیم تمرکز کن؛ مشخص و محترمانه بنویس.",
    src: ["اهداف تیم در نیم‌سال اول", "جلسات هم‌راستایی تیم"]
  },
  stakeholder: {
    l: "ذی‌نفع",
    tip: "به‌عنوان ذی‌نفع: روی خروجی‌ها و تحویل‌ها نظر بده، نه رفتارهای روزمره‌ای که نمی‌بینی.",
    src: ["چک‌این‌های پروژه مهاجرت دیتابیس", "گزارش تحویل‌های Q2"]
  }
};
const KCHIP = {
  tone: {
    background: "var(--color-warning-50)",
    color: "var(--color-warning-700)"
  },
  bias: {
    background: "var(--color-error-50)",
    color: "var(--color-error-700)"
  },
  clarity: {
    background: "var(--color-violet-50)",
    color: "var(--color-violet-700)"
  }
};
function analyze(text, dismissed) {
  const flags = [];
  for (const r of RULES) {
    if (dismissed.includes(r.id)) continue;
    const m = text.match(r.find);
    if (m && m[0].trim()) flags.push({
      id: r.id,
      kind: r.kind,
      label: r.label,
      note: r.note,
      excerpt: m[0].trim(),
      rewrite: r.fix()
    });
  }
  const checklist = CHECKS.map(c => ({
    ...c,
    done: c.re.test(text)
  }));
  let score = 25;
  checklist.forEach(c => {
    if (c.done) score += c.pts;
  });
  if (/[0-9۰-۹٪%]/.test(text)) score += 8;
  flags.forEach(f => {
    score -= f.kind === "bias" ? 12 : f.kind === "tone" ? 8 : 6;
  });
  return {
    flags,
    checklist,
    score: Math.max(5, Math.min(98, score))
  };
}
const SectionHead = ({
  children,
  count,
  color
}) => /*#__PURE__*/React.createElement("span", {
  style: {
    fontSize: 12,
    fontWeight: 800,
    color: color || "var(--color-gray-500)",
    margin: "4px 0 0",
    display: "flex",
    alignItems: "center",
    gap: 8
  }
}, /*#__PURE__*/React.createElement("span", null, children), count != null && /*#__PURE__*/React.createElement("span", {
  style: {
    background: "var(--color-violet-100)",
    color: "var(--color-violet-700)",
    borderRadius: 999,
    padding: "1px 8px",
    fontSize: 10.5,
    fontWeight: 700
  }
}, count));
function ScoreRing({
  score
}) {
  const lvl = score < 40 ? ["error", "نیاز به بهبود"] : score < 70 ? ["warning", "قابل قبول"] : score < 85 ? ["blue", "خوب"] : ["success", "عالی"];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 14,
      padding: 14,
      border: "1px solid var(--color-gray-100)",
      borderRadius: 12,
      background: "var(--color-gray-25)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 76,
      height: 76,
      flex: "none"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "76",
    height: "76",
    viewBox: "0 0 76 76"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "38",
    cy: "38",
    r: "32",
    fill: "none",
    strokeWidth: "7",
    stroke: "var(--color-gray-100)"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "38",
    cy: "38",
    r: "32",
    fill: "none",
    strokeWidth: "7",
    strokeLinecap: "round",
    stroke: `var(--color-${lvl[0]}-500)`,
    style: {
      strokeDasharray: 201,
      strokeDashoffset: 201 * (1 - score / 100),
      transform: "rotate(-90deg)",
      transformOrigin: "center",
      transition: "stroke-dashoffset .3s, stroke .3s"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: 21,
      fontWeight: 800
    }
  }, faDigits(score))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 12,
      color: "var(--color-gray-500)",
      margin: "0 0 6px"
    }
  }, "\u0627\u0645\u062A\u06CC\u0627\u0632 \u06A9\u06CC\u0641\u06CC\u062A \u0628\u0627\u0632\u062E\u0648\u0631\u062F (\u0627\u0632 \u06F1\u06F0\u06F0)"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      padding: "2px 10px",
      borderRadius: 999,
      fontSize: 11.5,
      fontWeight: 700,
      background: `var(--color-${lvl[0]}-50)`,
      color: `var(--color-${lvl[0]}-700)`
    }
  }, lvl[1])));
}
function Suggestion({
  f,
  onAccept,
  onReject
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      border: "1px solid var(--color-gray-100)",
      borderRadius: 12,
      padding: 12,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      boxShadow: "var(--shadow-xs)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10.5,
      fontWeight: 800,
      padding: "2px 9px",
      borderRadius: 999,
      alignSelf: "flex-start",
      ...KCHIP[f.kind]
    }
  }, f.label), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 11.5,
      lineHeight: 1.9,
      color: "var(--color-gray-600)",
      margin: 0
    }
  }, f.note), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11.5,
      lineHeight: 1.9,
      background: "var(--color-gray-50)",
      borderRight: "3px solid var(--color-gray-300)",
      padding: "6px 10px",
      borderRadius: 6,
      color: "var(--color-gray-500)"
    }
  }, "\xAB", f.excerpt, "\xBB"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      lineHeight: 2,
      background: "var(--color-violet-25)",
      border: "1px dashed var(--color-violet-300)",
      padding: "8px 12px",
      borderRadius: 8,
      color: "var(--color-violet-900)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10,
      fontWeight: 800,
      color: "var(--color-violet-500)",
      display: "block",
      marginBottom: 2
    }
  }, "\u067E\u06CC\u0634\u0646\u0647\u0627\u062F \u062C\u0627\u06CC\u06AF\u0632\u06CC\u0646"), /*#__PURE__*/React.createElement("span", null, f.rewrite)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    onClick: onAccept
  }, "\u0627\u0639\u0645\u0627\u0644 \u067E\u06CC\u0634\u0646\u0647\u0627\u062F"), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    hierarchy: "outline"
  }, "\u0648\u06CC\u0631\u0627\u06CC\u0634"), /*#__PURE__*/React.createElement("button", {
    onClick: onReject,
    style: {
      border: 0,
      background: "none",
      color: "var(--color-gray-400)",
      fontSize: 12,
      fontWeight: 600,
      cursor: "pointer",
      fontFamily: "inherit",
      padding: "6px 8px"
    }
  }, "\u0631\u062F \u067E\u06CC\u0634\u0646\u0647\u0627\u062F")));
}
function FeedbackAssistant({
  text,
  dismissed,
  analyzing,
  role,
  setRole,
  onClose,
  onApply,
  onReject,
  onInsert
}) {
  const {
    flags,
    checklist,
    score
  } = analyze(text, dismissed);
  const done = checklist.filter(c => c.done).length;
  return /*#__PURE__*/React.createElement("aside", {
    style: {
      width: 380,
      flex: "none",
      border: "1px solid var(--ai-border)",
      borderRadius: "var(--panel-radius)",
      background: "#fff",
      position: "sticky",
      top: 24,
      maxHeight: "calc(100vh - 48px)",
      display: "flex",
      flexDirection: "column",
      overflow: "hidden",
      boxShadow: "var(--shadow-lg)",
      animation: "tc-panel-in var(--duration-base) var(--ease-default)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      padding: "14px 16px",
      borderBottom: "1px solid var(--color-violet-100)",
      background: "var(--ai-surface)",
      flex: "none"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "sparkle",
    size: 18,
    color: "var(--color-violet-600)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14.5,
      fontWeight: 800,
      color: "var(--ai-fg-strong)"
    }
  }, "\u062F\u0633\u062A\u06CC\u0627\u0631 \u0628\u0627\u0632\u062E\u0648\u0631\u062F"), /*#__PURE__*/React.createElement(Badge, {
    text: "\u0622\u0632\u0645\u0627\u06CC\u0634\u06CC",
    size: "sm",
    type: "pill color",
    color: "primary"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      marginInlineStart: "auto"
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    label: "\u0628\u0633\u062A\u0646",
    tone: "muted",
    size: "sm",
    onClick: onClose
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "x",
    size: 16
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: "auto",
      padding: 16,
      display: "flex",
      flexDirection: "column",
      gap: 14
    }
  }, analyzing ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      color: "var(--color-violet-700)",
      fontSize: 12.5,
      fontWeight: 700,
      padding: "6px 0"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      animation: "tc-spin var(--duration-spin) linear infinite"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "sparkle",
    size: 16,
    color: "currentColor"
  })), /*#__PURE__*/React.createElement("span", null, "\u062F\u0631 \u062D\u0627\u0644 \u0628\u0631\u0631\u0633\u06CC \u0628\u0627\u0632\u062E\u0648\u0631\u062F \u0628\u0631 \u0627\u0633\u0627\u0633 \u0645\u062F\u0644 STAR...")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 12,
      padding: "8px 0"
    }
  }, ["55%", "100%", "82%", "38%", "70%"].map((w, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      height: 12,
      width: w,
      borderRadius: 6,
      background: "linear-gradient(90deg,var(--color-gray-100),var(--color-gray-50),var(--color-gray-100))",
      backgroundSize: "200% 100%",
      animation: "tc-shimmer var(--duration-shimmer) infinite"
    }
  })))) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(SectionHead, null, "\u0646\u0642\u0634 \u0634\u0645\u0627 \u0646\u0633\u0628\u062A \u0628\u0647 \u0639\u0644\u06CC"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      background: "var(--color-gray-50)",
      border: "1px solid var(--color-gray-100)",
      borderRadius: 10,
      padding: 3,
      gap: 2
    }
  }, Object.entries(ROLES).map(([k, v]) => /*#__PURE__*/React.createElement("button", {
    key: k,
    onClick: () => setRole(k),
    style: {
      flex: 1,
      textAlign: "center",
      padding: "7px 2px",
      borderRadius: 8,
      fontSize: 11.5,
      fontWeight: 700,
      cursor: "pointer",
      border: 0,
      fontFamily: "inherit",
      background: k === role ? "#fff" : "none",
      color: k === role ? "var(--color-violet-700)" : "var(--color-gray-500)",
      boxShadow: k === role ? "var(--shadow-sm)" : "none"
    }
  }, v.l))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11.5,
      lineHeight: 2,
      color: "var(--color-violet-800)",
      background: "var(--color-violet-50)",
      borderRadius: 8,
      padding: "8px 12px",
      display: "flex",
      gap: 8,
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: "none",
      marginTop: 4
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "lightbulb",
    size: 14
  })), /*#__PURE__*/React.createElement("span", null, ROLES[role].tip))), /*#__PURE__*/React.createElement(ScoreRing, {
    score: score
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHead, {
    count: `${faDigits(done)} / ۴`
  }, "\u0633\u0627\u062E\u062A\u0627\u0631 \u0628\u0627\u0632\u062E\u0648\u0631\u062F (\u0645\u062F\u0644 STAR)"), checklist.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.id,
    style: {
      display: "flex",
      alignItems: "flex-start",
      gap: 10,
      padding: "7px 0"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 20,
      height: 20,
      borderRadius: "50%",
      border: "1.5px solid " + (c.done ? "var(--color-success-500)" : "var(--color-gray-300)"),
      background: c.done ? "var(--color-success-500)" : "transparent",
      flex: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#fff",
      boxSizing: "border-box",
      marginTop: 2
    }
  }, c.done && /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 10
  })), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12.5,
      fontWeight: 700,
      color: "var(--color-gray-800)",
      display: "block"
    }
  }, c.label), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: "var(--color-gray-400)",
      display: "block",
      marginTop: 1
    }
  }, c.hint)), !c.done && /*#__PURE__*/React.createElement("span", {
    style: {
      marginInlineStart: "auto",
      flex: "none"
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => onInsert(c.ins),
    style: {
      border: 0,
      color: "var(--color-violet-700)",
      fontSize: 11.5,
      fontWeight: 700,
      cursor: "pointer",
      fontFamily: "inherit",
      display: "flex",
      alignItems: "center",
      gap: 4,
      padding: "4px 8px",
      borderRadius: 6,
      background: "var(--color-violet-50)"
    }
  }, "+ \u0627\u0641\u0632\u0648\u062F\u0646 \u0646\u0645\u0648\u0646\u0647"))))), /*#__PURE__*/React.createElement(SectionHead, {
    count: faDigits(flags.length)
  }, "\u067E\u06CC\u0634\u0646\u0647\u0627\u062F\u0647\u0627\u06CC \u0628\u0647\u0628\u0648\u062F"), flags.length === 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      background: "var(--color-success-50)",
      color: "var(--color-success-700)",
      fontSize: 12,
      fontWeight: 600,
      borderRadius: 10,
      padding: "10px 12px"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check-circle",
    size: 18
  }), /*#__PURE__*/React.createElement("span", null, "\u0645\u0648\u0631\u062F\u06CC \u0628\u0631\u0627\u06CC \u0628\u0647\u0628\u0648\u062F \u067E\u06CC\u062F\u0627 \u0646\u0634\u062F. \u0628\u0627\u0632\u062E\u0648\u0631\u062F \u0622\u0645\u0627\u062F\u0647 \u062B\u0628\u062A \u0627\u0633\u062A.")) : flags.map(f => /*#__PURE__*/React.createElement(Suggestion, {
    key: f.id,
    f: f,
    onAccept: () => onApply(f),
    onReject: () => onReject(f.id)
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      border: "1px solid var(--color-blue-100)",
      background: "var(--color-blue-25)",
      borderRadius: 12,
      padding: 12,
      display: "flex",
      flexDirection: "column",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(SectionHead, {
    color: "var(--color-blue-700)"
  }, "\u0634\u0648\u0627\u0647\u062F \u0645\u0631\u062A\u0628\u0637"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6,
      flexWrap: "wrap"
    }
  }, ROLES[role].src.map(s => /*#__PURE__*/React.createElement("span", {
    key: s,
    style: {
      fontSize: 10.5,
      fontWeight: 700,
      background: "#fff",
      border: "1px solid var(--color-blue-200)",
      color: "var(--color-blue-700)",
      padding: "2px 9px",
      borderRadius: 999
    }
  }, s))), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 11.5,
      lineHeight: 2,
      color: "var(--color-gray-700)",
      margin: 0
    }
  }, "\u0628\u0631 \u0627\u0633\u0627\u0633 \u06CC\u0627\u062F\u062F\u0627\u0634\u062A \u062C\u0644\u0633\u0647 \u06F1:\u06F1 (\u06F2\u06F0 \u062E\u0631\u062F\u0627\u062F)\u060C \u062F\u0631\u0628\u0627\u0631\u0647 \u062A\u06A9\u0645\u06CC\u0644 \u0645\u0633\u062A\u0646\u062F\u0627\u062A \u0641\u0627\u0632 \u0627\u0648\u0644 \u062A\u0648\u0627\u0641\u0642 \u0634\u062F\u0647 \u0628\u0648\u062F. \u0627\u0634\u0627\u0631\u0647 \u0628\u0647 \u0627\u06CC\u0646 \u062A\u0648\u0627\u0641\u0642\u060C \u0628\u0627\u0632\u062E\u0648\u0631\u062F \u0631\u0627 \u0645\u0633\u062A\u0646\u062F \u0648 \u0645\u0646\u0635\u0641\u0627\u0646\u0647\u200C\u062A\u0631 \u0645\u06CC\u200C\u06A9\u0646\u062F."), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    hierarchy: "outline",
    onClick: () => onInsert(" طبق توافق جلسه ۱:۱ بیستم خرداد، قرار بود مستندات فاز اول تا پایان اسپرینت تکمیل شود.")
  }, "\u062F\u0631\u062C \u062F\u0631 \u0645\u062A\u0646"))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10.5,
      color: "var(--color-gray-400)",
      textAlign: "center",
      lineHeight: 1.9,
      padding: "4px 0 2px"
    }
  }, "\u067E\u06CC\u0634\u0646\u0647\u0627\u062F\u0647\u0627\u06CC \u0647\u0648\u0634 \u0645\u0635\u0646\u0648\u0639\u06CC \u0645\u0645\u06A9\u0646 \u0627\u0633\u062A \u062F\u0642\u06CC\u0642 \u0646\u0628\u0627\u0634\u0646\u062F\u061B \u062A\u0635\u0645\u06CC\u0645 \u0646\u0647\u0627\u06CC\u06CC \u0647\u0645\u06CC\u0634\u0647 \u0628\u0627 \u0634\u0645\u0627\u0633\u062A."))));
}
Object.assign(window, {
  FeedbackAssistant,
  analyze,
  ROLES
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/talent-club-app/FeedbackAssistant.jsx", error: String((e && e.message) || e) }); }

// ui_kits/talent-club-app/PerformanceReviewScreen.jsx
try { (() => {
/* Performance-review form screen: page toolbar + workspace, and the
   click-through wiring between the editor and the AI assistant. */

const START_TEXT = "علی همیشه در تحویل تسک‌ها تاخیر داره و به نظرم خیلی بی‌دقته. توی پروژه مهاجرت دیتابیس، مستندات فاز اول رو کامل ننوشت. باید بهتر بشه.";
function PerformanceReviewScreen() {
  const [text, setText] = useState(START_TEXT);
  const [aiOpen, setAiOpen] = useState(false);
  const [analyzing, setAnalyzing] = useState(false);
  const [analyzed, setAnalyzed] = useState(false);
  const [dismissed, setDismissed] = useState([]);
  const [role, setRole] = useState("peer");
  const flags = analyze(text, dismissed).flags;
  const openAi = () => {
    if (analyzed) {
      setAiOpen(true);
      return;
    }
    setAiOpen(true);
    setAnalyzing(true);
    setTimeout(() => {
      setAnalyzing(false);
      setAnalyzed(true);
    }, 1200);
  };
  const clean = s => s.replace(/ {2,}/g, " ").replace(/ ([.،])/g, (m, p) => p);
  const apply = f => {
    setText(t => clean(t.split(f.excerpt).join(f.rewrite)));
    setDismissed(d => [...d, f.id]);
  };
  const insert = s => setText(t => {
    let x = t.replace(/\s+$/, "");
    if (x && !/[.!؟]$/.test(x)) x += ".";
    return clean(x + s);
  });
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "16px 24px",
      background: "#fff",
      borderBottom: "1px solid var(--color-gray-100)"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      fontWeight: 800,
      fontSize: 17
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-right",
    size: 18,
    strokeWidth: 2.2
  }), /*#__PURE__*/React.createElement("span", null, "\u0627\u0631\u0632\u06CC\u0627\u0628\u06CC \u0639\u0645\u0644\u06A9\u0631\u062F \u0647\u0645\u06A9\u0627\u0631 - \u0646\u06CC\u0645 \u0633\u0627\u0644 \u0627\u0648\u0644 \u06F1\u06F4\u06F0\u06F3")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      fontSize: 12,
      color: "var(--color-gray-500)",
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "info-circle",
    size: 14
  }), /*#__PURE__*/React.createElement("span", null, "\u062B\u0628\u062A \u0628\u0627\u0632\u062E\u0648\u0631\u062F \u0628\u0631\u0627\u06CC \u0639\u0644\u06CC \u0631\u0636\u0627\u06CC\u06CC \xB7 \u0645\u0647\u0646\u062F\u0633 \u0627\u0631\u0634\u062F \u0646\u0631\u0645\u200C\u0627\u0641\u0632\u0627\u0631"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Button, {
    hierarchy: "outline"
  }, "\u0630\u062E\u06CC\u0631\u0647"), /*#__PURE__*/React.createElement(Button, {
    hierarchy: "contained"
  }, "\u062B\u0628\u062A \u0646\u0647\u0627\u06CC\u06CC \u0627\u0631\u0632\u06CC\u0627\u0628\u06CC"))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "flex",
      alignItems: "flex-start",
      gap: 24,
      padding: 24,
      background: "#fff"
    }
  }, aiOpen ? /*#__PURE__*/React.createElement(QuestionRail, {
    current: 2,
    onExpand: () => setAiOpen(false)
  }) : /*#__PURE__*/React.createElement(QuestionList, {
    current: 2
  }), /*#__PURE__*/React.createElement(AnswerEditor, {
    text: text,
    onText: setText,
    flags: flags,
    analyzed: analyzed,
    analyzing: analyzing,
    onAi: openAi
  }), aiOpen && /*#__PURE__*/React.createElement(FeedbackAssistant, {
    text: text,
    dismissed: dismissed,
    analyzing: analyzing,
    role: role,
    setRole: setRole,
    onClose: () => setAiOpen(false),
    onApply: apply,
    onInsert: insert,
    onReject: id => setDismissed(d => [...d, id])
  })));
}
Object.assign(window, {
  PerformanceReviewScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/talent-club-app/PerformanceReviewScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/talent-club-app/QuestionList.jsx
try { (() => {
/* Question list (right rail) + collapsed number rail. Content from the live
   performance-review form, نیم سال اول ۱۴۰۳. */

const SECTIONS = [{
  title: "مهارت‌های رهبری و مدیریت",
  open: true,
  items: [{
    n: "۱.",
    state: "v",
    text: "در این نیم‌سال، کجاها و در چه سطحی در جهت انتظارات مشترک نردبانی (مشارکت شهروندی)..."
  }, {
    n: "۲.",
    state: "g",
    text: "یک یا دو نمونه مشخص از عملکرد همکارت در این نیم‌سال را با ذکر موقعیت و نتیجه شرح بده..."
  }, {
    n: "۳.",
    state: "n",
    text: "در نیم‌سال گذشته، کجاها تونستی -نسبت به قبل- رشد کنی و پیشرفت داشته باشی؟ کجاها خ..."
  }, {
    n: "۴.",
    state: "n",
    text: "آیا درخواست بررسی ارتقا شغلی به سطح بالاتر در نردبان فنی توسط کمیته‌ی ارتقا شغلی دارید؟"
  }]
}, {
  title: "مهارت‌های ارتباطی",
  items: []
}, {
  title: "کار تیمی و همکاری",
  items: []
}];
const CHECK_BG = {
  v: ["var(--color-violet-100)", "var(--color-violet-600)"],
  g: ["var(--color-success-100)", "var(--color-success-600)"],
  n: ["var(--color-gray-100)", "var(--color-gray-400)"]
};
function QuestionList({
  current = 2,
  onPick
}) {
  return /*#__PURE__*/React.createElement("aside", {
    style: {
      width: 300,
      flex: "none"
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 15,
      fontWeight: 800,
      margin: "0 0 16px"
    }
  }, "\u0641\u0647\u0631\u0633\u062A \u0633\u0648\u0627\u0644\u0627\u062A"), SECTIONS.map((s, si) => /*#__PURE__*/React.createElement("div", {
    key: s.title,
    style: {
      background: "var(--color-gray-50)",
      borderRadius: 12,
      padding: "14px 16px",
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      fontSize: 13.5,
      fontWeight: 700,
      color: "var(--color-gray-800)",
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement("span", null, s.title), /*#__PURE__*/React.createElement(Icon, {
    name: s.open ? "chevron-up" : "chevron-down",
    size: 16
  })), s.items.map((it, i) => {
    const on = si === 0 && i + 1 === current;
    const [bg, fg] = CHECK_BG[it.state];
    return /*#__PURE__*/React.createElement("div", {
      key: it.n,
      onClick: () => onPick && onPick(i + 1),
      style: {
        display: "flex",
        gap: 8,
        padding: "12px 0 0",
        fontSize: 12,
        lineHeight: 1.9,
        color: on ? "var(--color-violet-700)" : "var(--color-gray-600)",
        fontWeight: on ? 600 : 400,
        cursor: "pointer",
        alignItems: "flex-start"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 18,
        height: 18,
        borderRadius: "50%",
        flex: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 3,
        background: bg,
        color: fg
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "check",
      size: 10,
      strokeWidth: 2
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 700,
        flex: "none"
      }
    }, it.n), /*#__PURE__*/React.createElement("span", null, it.text));
  }))));
}
function QuestionRail({
  current = 2,
  onExpand
}) {
  return /*#__PURE__*/React.createElement("div", {
    title: "\u0646\u0645\u0627\u06CC\u0634 \u0641\u0647\u0631\u0633\u062A \u0633\u0648\u0627\u0644\u0627\u062A",
    style: {
      width: 52,
      flex: "none",
      background: "var(--color-gray-50)",
      borderRadius: 12,
      padding: "10px 0",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 8
    }
  }, ["۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸"].map((n, i) => /*#__PURE__*/React.createElement("button", {
    key: n,
    onClick: onExpand,
    style: {
      width: 30,
      height: 30,
      borderRadius: "50%",
      border: 0,
      fontFamily: "inherit",
      fontSize: 12,
      fontWeight: 700,
      cursor: "pointer",
      boxShadow: "var(--shadow-sm)",
      background: i + 1 === current ? "var(--color-violet-600)" : "#fff",
      color: i + 1 === current ? "#fff" : "var(--color-gray-500)"
    }
  }, n)));
}
Object.assign(window, {
  QuestionList,
  QuestionRail
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/talent-club-app/QuestionList.jsx", error: String((e && e.message) || e) }); }

__ds_ns.ArrowLeft = __ds_scope.ArrowLeft;

__ds_ns.ArrowUp = __ds_scope.ArrowUp;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.BadgeBase = __ds_scope.BadgeBase;

__ds_ns.BadgeDot = __ds_scope.BadgeDot;

__ds_ns.Plus = __ds_scope.Plus;

__ds_ns.XClose = __ds_scope.XClose;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.Dot = __ds_scope.Dot;

})();
