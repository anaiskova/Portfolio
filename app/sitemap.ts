import type { MetadataRoute } from "next";
import { caseStudyPaths } from "@/content/case-study";
import { languageOptions } from "@/content/languages";
import { siteUrl } from "@/content/shared";

/** /sitemap.xml: as três versões do site, cada uma a apontar para as outras duas. */
export default function sitemap(): MetadataRoute.Sitemap {
  const languages = Object.fromEntries(languageOptions.map((o) => [o.htmlLang, new URL(o.path, siteUrl).toString()]));
  const caseLanguages = Object.fromEntries(
    languageOptions.map((o) => [o.htmlLang, new URL(caseStudyPaths[o.lang], siteUrl).toString()]),
  );
  const now = new Date();
  return [
    ...languageOptions.map((o) => ({
      url: new URL(o.path, siteUrl).toString(),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: o.lang === "en" ? 1 : 0.8,
      alternates: { languages },
    })),
    ...languageOptions.map((o) => ({
      url: new URL(caseStudyPaths[o.lang], siteUrl).toString(),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: o.lang === "en" ? 0.9 : 0.7,
      alternates: { languages: caseLanguages },
    })),
  ];
}
