import { Globe } from "lucide-react";
import type { CV } from "@/content/types";

/** Botãozinho que leva à mesma página na outra língua. */
export function LanguageSwitch({ cv, className = "" }: { cv: CV; className?: string }) {
  const target = cv.lang === "en" ? "pt" : "en";
  return (
    <a
      href={cv.switcher.href}
      hrefLang={target === "pt" ? "pt-PT" : "en-GB"}
      lang={target === "pt" ? "pt-PT" : "en-GB"}
      aria-label={cv.switcher.ariaLabel}
      data-lang-switch={target}
      className={`inline-flex h-10 items-center gap-1.5 rounded-full border-2 border-lilac px-3 text-sm font-extrabold text-primary transition-all duration-300 hover:scale-105 hover:border-primary hover:bg-lilac-soft active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 ${className}`}
    >
      <Globe size={16} aria-hidden="true" />
      {cv.switcher.label}
    </a>
  );
}
