import * as React from 'react';

/** Square icon-only button — editor toolbars, panel dismiss, header actions. */
export interface IconButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'style'> {
  children?: React.ReactNode;
  size?: "sm" | "md" | "lg";
  /** Resting glyph color: gray-500, gray-400 (`muted`) or violet-700 (`accent`). */
  tone?: "default" | "muted" | "accent";
  /** Sticky selected state — violet-50 wash. */
  active?: boolean;
  disabled?: boolean;
  /** Accessible name; required since there is no visible label. */
  label?: string;
  style?: React.CSSProperties;
}
export declare const IconButton: React.FC<IconButtonProps>;
export default IconButton;
