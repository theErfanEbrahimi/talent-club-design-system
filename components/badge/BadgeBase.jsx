import { ArrowLeft } from './ArrowLeft.jsx';
import { ArrowUp } from './ArrowUp.jsx';
import { Plus } from './Plus.jsx';
import { XClose } from './XClose.jsx';

// figma node: 1:38 _Badge base (7 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "icon=" + __venc(p.icon);

export function BadgeBase(_p = {}) {
  const props = { ..._p, icon: _p.icon ?? "false" };
  const __body0 = () => (
    <div className={props.className} style={{
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
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "IRANYekan, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 10,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "16px",
        color: "rgb(105,39,218)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "برچسب"}</span>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
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
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "IRANYekan, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 10,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "16px",
        color: "rgb(105,39,218)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "برچسب"}</span>
      <div style={{
        position: "relative",
        width: 8,
        height: 8,
        overflow: "hidden",
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 1,
          top: 1,
          width: 6,
          height: 6,
          borderRadius: "50%",
          backgroundColor: "rgb(185,178,11)",
        }} />
      </div>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
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
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "IRANYekan, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 10,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "16px",
        color: "rgb(105,39,218)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "برچسب"}</span>
      <div className="fig-asset-e9be38c71c4e3ee1" style={{
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
        alignSelf: "stretch",
      }} />
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
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
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "IRANYekan, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 10,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "16px",
        color: "rgb(105,39,218)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "برچسب"}</span>
      <div style={{
          position: "relative",
          width: 12,
          height: 12,
          flexShrink: 0,
        }}>{props.icon1 ?? <XClose style={{ transform: "scale(0.500, 0.500)", transformOrigin: "0 0" }} />}</div>
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
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
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 12,
          height: 12,
          flexShrink: 0,
        }}>{props.icon1 ?? <ArrowLeft style={{ transform: "scale(0.500, 0.500)", transformOrigin: "0 0" }} />}</div>
      <span style={{
        position: "relative",
        fontFamily: "IRANYekan, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 10,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "16px",
        color: "rgb(105,39,218)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "برچسب"}</span>
    </div>
  );
  const __body5 = () => (
    <div className={props.className} style={{
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
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "IRANYekan, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 10,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "16px",
        color: "rgb(105,39,218)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "برچسب"}</span>
      <div style={{
          position: "relative",
          width: 12,
          height: 12,
          flexShrink: 0,
        }}>{props.icon1 ?? <ArrowUp style={{ transform: "scale(0.500, 0.500)", transformOrigin: "0 0" }} />}</div>
    </div>
  );
  const __body6 = () => (
    <div className={props.className} style={{
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
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 12,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <Plus />}</div>
    </div>
  );
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
    "icon=only": __body6,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default BadgeBase;
