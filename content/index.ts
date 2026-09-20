import { en } from "./en";
import { fr } from "./fr";
import { pt } from "./pt";
import type { CV, Lang } from "./types";

export const dictionaries: Record<Lang, CV> = { en, pt, fr };
export const langs = Object.keys(dictionaries) as Lang[];

export function isLang(value: string): value is Lang {
  return value in dictionaries;
}
