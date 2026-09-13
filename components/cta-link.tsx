import type { ReactNode } from "react";
import { site } from "@/lib/site";

type CtaVariant = "primary" | "secondary" | "text";

const variants: Record<CtaVariant, string> = {
  primary:
    "inline-flex items-center justify-center rounded-full bg-accent px-5 py-3 text-base font-semibold text-white shadow-sm transition-colors hover:bg-accent-hover",
  secondary:
    "inline-flex items-center justify-center rounded-full border border-line bg-panel px-5 py-3 text-base font-semibold text-ink transition-colors hover:border-accent hover:text-accent",
  text: "font-semibold text-accent underline-offset-4 hover:underline",
};

export function CtaLink({
  variant = "primary",
  className = "",
  children = site.ctaLabel,
}: {
  variant?: CtaVariant;
  className?: string;
  children?: ReactNode;
}) {
  return (
    <a href={site.mailto} className={`${variants[variant]} ${className}`}>
      {children}
    </a>
  );
}
