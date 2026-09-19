import type { AnchorHTMLAttributes } from "react";

type Variant = "primary" | "outline" | "ghost" | "light" | "outline-light";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-bold transition-all duration-300 " +
  "hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2";

const variants: Record<Variant, string> = {
  primary:
    "bg-primary text-primary-foreground shadow-soft hover:shadow-[0_6px_24px_-4px_rgba(111,93,163,0.35)] " +
    "focus-visible:ring-primary/40 focus-visible:ring-offset-background",
  outline:
    "border-2 border-secondary text-clay-ink hover:bg-secondary/10 " +
    "focus-visible:ring-secondary/40 focus-visible:ring-offset-background",
  ghost: "text-primary hover:bg-primary/10 focus-visible:ring-primary/40 focus-visible:ring-offset-background",
  light:
    "bg-primary-foreground text-primary shadow-soft hover:bg-white " +
    "focus-visible:ring-primary-foreground/60 focus-visible:ring-offset-primary",
  "outline-light":
    "border-2 border-primary-foreground/70 text-primary-foreground hover:bg-primary-foreground/10 " +
    "focus-visible:ring-primary-foreground/60 focus-visible:ring-offset-primary",
};

const sizes: Record<Size, string> = {
  sm: "h-10 px-6 text-sm",
  md: "h-12 px-8 text-base",
  lg: "h-14 px-10 text-lg",
};

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: Variant;
  size?: Size;
};

/** Botão em forma de pílula. É sempre um link: neste site todas as ações levam a algum lado. */
export function Button({ variant = "primary", size = "md", className = "", children, ...props }: ButtonProps) {
  return (
    <a className={`${base} ${variants[variant]} ${sizes[size]} ${className}`} {...props}>
      {children}
    </a>
  );
}
