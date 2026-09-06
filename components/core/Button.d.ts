import * as React from 'react';

/**
 * The brand action button. Every clickable action in the product uses it.
 */
export interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'style'> {
  children?: React.ReactNode;
  /** `contained` violet fill · `pale` tinted · `ai` violet-outlined (AI actions) · `outline` bordered white · `text1`/`text2` bare. Aliases: primary, secondary, tertiary, link, light. */
  hierarchy?: "contained" | "pale" | "ai" | "outline" | "text1" | "text2" | "primary" | "secondary" | "tertiary" | "link" | "light";
  size?: "sm" | "md" | "lg" | "xl";
  /** Swaps the palette to error for negative actions. */
  destructive?: boolean;
  disabled?: boolean;
  /** Shows a spinner; pair with loadingText to replace the label. */
  loading?: boolean;
  loadingText?: string;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  /** Pass an icon with no children for a square icon-only button. */
  fullWidth?: boolean;
  style?: React.CSSProperties;
}
export declare const Button: React.FC<ButtonProps>;
export default Button;
