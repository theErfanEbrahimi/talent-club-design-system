import * as React from 'react';
export interface BadgeDotProps {
  className?: string;
  style?: React.CSSProperties;
  size?: "sm" | "lg" | "md";
  outline?: boolean;
}
export declare const BadgeDot: React.FC<BadgeDotProps>;
export default BadgeDot;
