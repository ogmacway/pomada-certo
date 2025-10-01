import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 active:scale-95",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 active:scale-95",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground active:scale-95",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 active:scale-95",
        ghost: "hover:bg-accent hover:text-accent-foreground active:scale-95",
        link: "text-primary underline-offset-4 hover:underline active:scale-95",
        hero: "bg-brand-green-light text-brand-white hover:bg-brand-green/80 shadow-[var(--shadow-button)] font-bold text-sm sm:text-lg md:text-xl px-4 sm:px-6 md:px-8 py-3 sm:py-4 md:py-5 rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95 w-full max-w-full",
        cta: "bg-brand-yellow text-brand-green hover:bg-brand-yellow/90 shadow-[var(--shadow-button)] font-bold text-sm sm:text-lg md:text-xl px-4 sm:px-6 md:px-8 py-3 sm:py-4 md:py-5 rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95 w-full max-w-full",
      },
      size: {
        default: "h-12 px-6 py-3 text-base min-h-[48px]",
        sm: "h-10 px-4 py-2 text-sm min-h-[40px]",
        lg: "h-14 px-8 py-4 text-lg min-h-[56px]",
        xl: "h-16 px-10 py-5 text-xl min-h-[64px]",
        icon: "h-12 w-12 min-h-[48px] min-w-[48px]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
