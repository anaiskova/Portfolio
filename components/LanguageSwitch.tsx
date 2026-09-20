import { Globe } from "lucide-react";
import { languageOptions } from "@/content/languages";
import type { CV } from "@/content/types";

/** Grupo de botões EN / PT / FR. A língua atual fica destacada. */
export function LanguageSwitch({ cv }: { cv: CV }) {
  return (
    <div
      role="group"
      aria-label={cv.ui.languageAria}
      className="inline-flex h-10 items-center gap-0.5 rounded-full border-2 border-lilac bg-white/60 p-0.5"
    >
      <Globe size={16} className="ml-1.5 mr-0.5 hidden text-primary sm:block" aria-hidden="true" />
      {languageOptions.map((o) => {
        const active = o.lang === cv.lang;
        return (
          <a
            key={o.lang}
            href={o.path}
            hrefLang={o.htmlLang}
            lang={o.htmlLang}
            aria-label={o.ariaLabel}
            aria-current={active ? "page" : undefined}
            data-lang-switch={o.lang}
            className={`grid h-8 min-w-9 place-items-center rounded-full px-2 text-xs font-extrabold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 ${
              active ? "bg-primary text-primary-foreground shadow-soft" : "text-primary hover:bg-lilac-soft active:scale-95"
            }`}
          >
            {o.label}
          </a>
        );
      })}
    </div>
  );
}
