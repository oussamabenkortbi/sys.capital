import * as React from "react"
import type { JSX } from "react"
import { cn } from "@/lib/utils"

interface GradientTextProps extends React.HTMLAttributes<HTMLSpanElement> {
  as?: keyof JSX.IntrinsicElements
}

export function GradientText({ className, as: Comp = "span", ...props }: GradientTextProps) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Element: any = Comp
  return <Element className={cn("gradient-text", className)} {...props} />
}
