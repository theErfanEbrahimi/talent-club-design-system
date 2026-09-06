import * as React from 'react';
export interface BadgeProps {
  className?: string;
  style?: React.CSSProperties;
  size?: "sm" | "md" | "lg";
  icon?: "false" | "dot" | "x close" | "avatar" | "icon right" | "icon left";
  type?: "pill outline" | "pill color" | "badge color" | "badge modern";
  color?: "primary" | "error" | "warning" | "success" | "blue light" | "blue" | "indigo" | "purple" | "pink" | "rosé" | "orange" | "blue gray" | "gray";
}
export declare const Badge: React.FC<BadgeProps>;
export default Badge;
