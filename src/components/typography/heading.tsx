import * as React from "react"
import type { JSX } from "react"
import { cn } from "@/lib/utils"

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level?: 1 | 2 | 3 | 4 | 5 | 6
  gradient?: boolean
}

export function Heading({ level = 1, gradient = false, className, ...props }: HeadingProps) {
  const Tag = (`h${level}` as unknown) as keyof JSX.IntrinsicElements
  const base =
    level === 1
      ? "text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight"
      : level === 2
      ? "text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight"
      : level === 3
      ? "text-2xl sm:text-3xl font-bold tracking-tight"
      : level === 4
      ? "text-xl sm:text-2xl font-semibold"
      : level === 5
      ? "text-lg font-semibold"
      : "text-base font-semibold"
  const classes = cn(base, gradient && "gradient-text", className)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Element: any = Tag
  return <Element className={classes} {...props} />
}
