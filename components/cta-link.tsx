import type { ReactNode } from "react";
import { site } from "@/lib/site";

type CtaVariant = "primary" | "inverse" | "secondary" | "text";

const variants: Record<CtaVariant, string> = {
  primary:
    "inline-flex items-center justify-center rounded-full bg-accent font-semibold text-white shadow-sm transition-colors hover:bg-accent-hover",
  inverse:
    "inline-flex items-center justify-center rounded-full bg-white font-semibold text-ink shadow-sm transition-colors hover:bg-accent-soft",
  secondary:
    "inline-flex items-center justify-center rounded-full border border-line bg-panel font-semibold text-ink transition-colors hover:border-accent hover:text-accent",
  text: "font-semibold text-accent underline-offset-4 hover:underline",
};

const sizes = {
  md: "px-5 py-3 text-base",
  sm: "px-4 py-2.5 text-sm",
} as const;

export function CtaLink({
  variant = "primary",
  size = "md",
  className = "",
  children = site.ctaLabel,
}: {
  variant?: CtaVariant;
  size?: keyof typeof sizes;
  className?: string;
  children?: ReactNode;
}) {
  const base =
    variant === "text"
      ? variants[variant]
      : `${variants[variant]} ${sizes[size]}`;

  return (
    <a href={site.mailto} className={`${base} ${className}`.trim()}>
      {children}
    </a>
  );
}
