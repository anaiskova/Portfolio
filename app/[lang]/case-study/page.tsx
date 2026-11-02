import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseStudyPage } from "@/components/CaseStudyPage";
import { CaseStudyData } from "@/components/StructuredData";
import { dictionaries } from "@/content";
import { caseStudies } from "@/content/case-study";
import { caseStudyMetadata } from "@/lib/seo";

// O estudo de caso em inglês vive em /case-study; aqui ficam /pt/case-study e /fr/case-study.
const extraLangs = ["pt", "fr"] as const;
type ExtraLang = (typeof extraLangs)[number];
const isExtraLang = (l: string): l is ExtraLang => (extraLangs as readonly string[]).includes(l);

export const dynamicParams = false;

export function generateStaticParams() {
  return extraLangs.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  if (!isExtraLang(lang)) return {};
  return caseStudyMetadata(caseStudies[lang]);
}

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isExtraLang(lang)) notFound();
  return (
    <>
      <CaseStudyData cs={caseStudies[lang]} />
      <CaseStudyPage cv={dictionaries[lang]} cs={caseStudies[lang]} />
    </>
  );
}
