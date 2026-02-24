import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-yellow-300 border-2 border-slate-600 rounded-none shadow-[4px_4px_0px_#64748b] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none",
  {
    variants: {
      variant: {
        default: "bg-indigo-400 text-slate-950 hover:bg-rose-400 hover:border-rose-400",
        destructive:
          "bg-red-500 text-white hover:bg-neutral-900 border-red-500 shadow-[4px_4px_0px_#ef4444]",
        outline:
          "bg-slate-950 text-white hover:bg-indigo-400 hover:text-slate-950",
        secondary:
          "bg-indigo-900 text-white border-indigo-400 shadow-[4px_4px_0px_#818cf8] hover:bg-indigo-800",
        ghost:
          "border-transparent shadow-none active:translate-x-0 active:translate-y-0 hover:border-slate-600 hover:shadow-[4px_4px_0px_#64748b] hover:-translate-x-[2px] hover:-translate-y-[2px]",
        link: "border-transparent shadow-none text-indigo-200 underline-offset-4 hover:underline active:translate-x-0 active:translate-y-0",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        xs: "h-6 gap-1 px-2 text-xs has-[>svg]:px-1.5 [&_svg:not([class*='size-'])]:size-3",
        sm: "h-8 gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 px-6 has-[>svg]:px-4",
        icon: "size-9",
        "icon-xs": "size-6 [&_svg:not([class*='size-'])]:size-3",
        "icon-sm": "size-8",
        "icon-lg": "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot.Root : "button"

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
