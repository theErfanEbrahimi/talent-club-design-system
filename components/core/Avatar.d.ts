import * as React from 'react';

/** Circular user avatar — photo when available, otherwise the name's first letter on a violet disc. */
export interface AvatarProps {
  /** Full name; supplies the initial and the tooltip. */
  name?: string;
  /** Photo URL. Falls back to the initial when absent. */
  src?: string;
  /** 24 / 28 / 36 / 44 px. Header uses `md`. */
  size?: "xs" | "sm" | "md" | "lg";
  tone?: "accent" | "brand" | "neutral";
  style?: React.CSSProperties;
}
export declare const Avatar: React.FC<AvatarProps>;
export default Avatar;
