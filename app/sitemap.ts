import type { MetadataRoute } from "next";
import { languageOptions } from "@/content/languages";
import { siteUrl } from "@/content/shared";

/** /sitemap.xml: as três versões do site, cada uma a apontar para as outras duas. */
export default function sitemap(): MetadataRoute.Sitemap {
  const languages = Object.fromEntries(languageOptions.map((o) => [o.htmlLang, new URL(o.path, siteUrl).toString()]));
  return languageOptions.map((o) => ({
    url: new URL(o.path, siteUrl).toString(),
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: o.lang === "en" ? 1 : 0.8,
    alternates: { languages },
  }));
}
