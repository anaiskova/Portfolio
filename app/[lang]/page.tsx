import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Site } from "@/components/Site";
import { dictionaries } from "@/content";
import { pageMetadata } from "@/lib/seo";

// Páginas /pt e /fr. O inglês vive em /, e /en redireciona para / (ver next.config.ts).
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
  return pageMetadata(dictionaries[lang]);
}

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isExtraLang(lang)) notFound();
  return <Site cv={dictionaries[lang]} />;
}
