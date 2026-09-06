import * as React from 'react';
export interface BadgeBaseProps {
  className?: string;
  style?: React.CSSProperties;
  flagSwap?: React.ReactNode;
  icon?: "false" | "dot" | "x close" | "avatar" | "icon right" | "icon left" | "only";
  /** Text content; defaults to "برچسب". */
  text1?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const BadgeBase: React.FC<BadgeBaseProps>;
export default BadgeBase;
