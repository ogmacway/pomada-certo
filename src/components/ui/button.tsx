import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow-[0_0_50px_hsl(var(--primary)_/_0.9),_0_0_90px_hsl(var(--primary)_/_0.6),_0_0_140px_hsl(var(--primary)_/_0.45)] hover:bg-primary/90 hover:shadow-[0_0_60px_hsl(var(--primary)_/_1),_0_0_120px_hsl(var(--primary)_/_0.7),_0_0_180px_hsl(var(--primary)_/_0.55)] active:scale-95",
        destructive: "bg-destructive text-destructive-foreground shadow-[0_0_50px_hsl(var(--destructive)_/_0.9),_0_0_90px_hsl(var(--destructive)_/_0.6),_0_0_140px_hsl(var(--destructive)_/_0.45)] hover:bg-destructive/90 hover:shadow-[0_0_60px_hsl(var(--destructive)_/_1),_0_0_120px_hsl(var(--destructive)_/_0.7),_0_0_180px_hsl(var(--destructive)_/_0.55)] active:scale-95",
        outline: "border border-input bg-background shadow-[0_0_40px_hsl(var(--primary)_/_0.7),_0_0_80px_hsl(var(--primary)_/_0.5)] hover:bg-accent hover:text-accent-foreground hover:shadow-[0_0_100px_hsl(var(--primary)_/_0.75)] active:scale-95",
        secondary: "bg-secondary text-secondary-foreground shadow-[0_0_50px_hsl(var(--secondary)_/_0.9),_0_0_90px_hsl(var(--secondary)_/_0.6),_0_0_140px_hsl(var(--secondary)_/_0.45)] hover:bg-secondary/80 hover:shadow-[0_0_120px_hsl(var(--secondary)_/_0.75)] active:scale-95",
        ghost: "shadow-[0_0_40px_hsl(var(--accent)_/_0.7),_0_0_80px_hsl(var(--accent)_/_0.5)] hover:bg-accent hover:text-accent-foreground hover:shadow-[0_0_100px_hsl(var(--accent)_/_0.8)] active:scale-95",
        link: "text-primary underline-offset-4 hover:underline active:scale-95",
        hero: "bg-brand-green-light text-brand-white shadow-[0_0_55px_hsl(var(--brand-green-light)_/_0.95),_0_0_110px_hsl(var(--brand-green-light)_/_0.7),_0_0_160px_hsl(var(--brand-green-light)_/_0.55)] hover:bg-brand-green/80 hover:shadow-[0_0_70px_hsl(var(--brand-green-light)_/_1),_0_0_140px_hsl(var(--brand-green-light)_/_0.8),_0_0_200px_hsl(var(--brand-green-light)_/_0.6)] font-bold text-sm sm:text-lg md:text-xl px-4 sm:px-6 md:px-8 py-3 sm:py-4 md:py-5 rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95 w-full max-w-full",
        cta: "bg-brand-yellow text-brand-green shadow-[0_0_55px_hsl(var(--brand-yellow)_/_0.95),_0_0_110px_hsl(var(--brand-yellow)_/_0.7),_0_0_160px_hsl(var(--brand-yellow)_/_0.55)] hover:bg-brand-yellow/90 hover:shadow-[0_0_70px_hsl(var(--brand-yellow)_/_1),_0_0_140px_hsl(var(--brand-yellow)_/_0.8),_0_0_200px_hsl(var(--brand-yellow)_/_0.6)] font-bold text-sm sm:text-lg md:text-xl px-4 sm:px-6 md:px-8 py-3 sm:py-4 md:py-5 rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95 w-full max-w-full",
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
