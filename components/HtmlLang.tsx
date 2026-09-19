"use client";

import { useEffect } from "react";

/** Atualiza o idioma declarado da página (para leitores de ecrã e tradutores automáticos). */
export function HtmlLang({ lang }: { lang: string }) {
  useEffect(() => {
    const previous = document.documentElement.lang;
    document.documentElement.lang = lang;
    return () => {
      document.documentElement.lang = previous;
    };
  }, [lang]);
  return null;
}
