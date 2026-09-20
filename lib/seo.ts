import type { Metadata } from "next";
import { languageOptions } from "@/content/languages";
import { profile, siteUrl } from "@/content/shared";
import type { CV } from "@/content/types";

/** Endereços de cada língua, para o Google saber que são a mesma página traduzida. */
export const languageAlternates = {
  ...Object.fromEntries(languageOptions.map((o) => [o.htmlLang, o.path])),
  "x-default": "/",
};

/** Título, descrição, canónica e imagem de partilha de uma língua. */
export function pageMetadata(cv: CV): Metadata {
  const path = languageOptions.find((o) => o.lang === cv.lang)!.path;
  const title = `${profile.name}, ${profile.suffix} · ${cv.role}`;
  const image = { url: `/og/${cv.lang}.png`, width: 1200, height: 630, alt: `${profile.name}, ${cv.role}` };
  return {
    metadataBase: new URL(siteUrl),
    title,
    description: cv.tagline,
    alternates: { canonical: path, languages: languageAlternates },
    openGraph: {
      title,
      description: cv.tagline,
      url: path,
      siteName: profile.name,
      type: "profile",
      locale: cv.ogLocale,
      images: [image],
    },
    twitter: { card: "summary_large_image", title, description: cv.tagline, images: [image.url] },
  };
}
