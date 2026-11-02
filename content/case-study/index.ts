import type { CaseStudy, Lang } from "../types";
import { caseEn } from "./en";
import { caseFr } from "./fr";
import { casePt } from "./pt";

export const caseStudies: Record<Lang, CaseStudy> = { en: caseEn, pt: casePt, fr: caseFr };

/** Endereço da página do estudo de caso, por língua. */
export const caseStudyPaths: Record<Lang, string> = {
  en: "/case-study",
  pt: "/pt/case-study",
  fr: "/fr/case-study",
};
