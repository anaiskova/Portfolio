import { languageOptions } from "@/content/languages";
import { profile, siteUrl } from "@/content/shared";
import type { CV } from "@/content/types";

/**
 * Dados estruturados (schema.org/Person): dizem ao Google quem é a pessoa por trás do site.
 * Não aparecem na página; são lidos pelos motores de pesquisa.
 */
export function StructuredData({ cv }: { cv: CV }) {
  const path = languageOptions.find((o) => o.lang === cv.lang)!.path;
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    honorificSuffix: profile.suffix,
    jobTitle: cv.role,
    description: cv.tagline,
    url: new URL(path, siteUrl).toString(),
    image: new URL(`/og/${cv.lang}.png`, siteUrl).toString(),
    email: `mailto:${profile.email}`,
    sameAs: [profile.linkedin],
    alumniOf: [
      { "@type": "CollegeOrUniversity", name: "Universidade de Aveiro" },
      { "@type": "CollegeOrUniversity", name: "Universidade Estadual de Ponta Grossa" },
      { "@type": "CollegeOrUniversity", name: "Universidad de Málaga" },
    ],
    knowsLanguage: ["pt", "fr", "en", "es"],
    knowsAbout: [
      "Data analysis",
      "Statistical analysis",
      "Customer segmentation",
      "Consumer behaviour",
      "Dashboards",
      "KPIs",
      "R",
      "SPSS",
      "NVivo",
      "Excel",
      "Power BI",
      "SQL",
      "Python",
    ],
  };
  return (
    <script
      type="application/ld+json"
      // JSON gerado a partir de dados do próprio site; o "<" é escapado por segurança
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
