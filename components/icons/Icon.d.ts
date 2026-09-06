import * as React from 'react';

/**
 * Single-glyph icon renderer for the Talent Club outline set.
 */
export interface IconProps {
  /** Glyph name, e.g. "clipboard-check". See `iconNames` for the full list. */
  name: string;
  /** Box size in px. Sidebar 20, toolbar 17, inline 14–16. */
  size?: number;
  /** Overrides the default (1.8, or 2 for chevrons/arrows). */
  strokeWidth?: number;
  /** Defaults to currentColor so icons inherit text color. */
  color?: string;
  style?: React.CSSProperties;
}
export declare const Icon: React.FC<IconProps>;
/** Every available glyph name, sorted. */
export declare const iconNames: string[];
export default Icon;
