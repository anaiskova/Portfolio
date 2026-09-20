import type { Lang } from "./types";

/** As línguas do site, pela ordem em que aparecem no botão. */
export const languageOptions: { lang: Lang; label: string; path: string; htmlLang: string; ariaLabel: string }[] = [
  { lang: "en", label: "EN", path: "/", htmlLang: "en-GB", ariaLabel: "View the site in English" },
  { lang: "pt", label: "PT", path: "/pt", htmlLang: "pt-PT", ariaLabel: "Ver o site em português" },
  { lang: "fr", label: "FR", path: "/fr", htmlLang: "fr-FR", ariaLabel: "Voir le site en français" },
];
