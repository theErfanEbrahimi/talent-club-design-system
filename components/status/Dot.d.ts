import * as React from "react";

/** Small status dot — used inside badges, list items and status indicators. */
export interface DotProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** @default "md" */
  size?: "sm" | "md" | "lg";
  /** @default "success" */
  color?: "gray" | "brand" | "error" | "warning" | "success" | "blue" | "violet";
  /** Render with a translucent ring around the dot. @default false */
  outline?: boolean;
}

export function Dot(props: DotProps): JSX.Element;
