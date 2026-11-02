import type { Metadata } from "next";
import { CaseStudyPage } from "@/components/CaseStudyPage";
import { CaseStudyData } from "@/components/StructuredData";
import { caseStudies } from "@/content/case-study";
import { en } from "@/content/en";
import { caseStudyMetadata } from "@/lib/seo";

export const metadata: Metadata = caseStudyMetadata(caseStudies.en);

/** Estudo de caso em inglês, no endereço principal (/case-study). */
export default function Page() {
  return (
    <>
      <CaseStudyData cs={caseStudies.en} />
      <CaseStudyPage cv={en} cs={caseStudies.en} />
    </>
  );
}
