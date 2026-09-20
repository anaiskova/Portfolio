import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Site } from "@/components/Site";
import { dictionaries } from "@/content";
import { profile } from "@/content/shared";

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
  const cv = dictionaries[lang];
  const title = `${profile.name} · ${cv.role}`;
  return {
    title,
    description: cv.tagline,
    openGraph: { title, description: cv.tagline, type: "profile", locale: cv.ogLocale },
  };
}

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isExtraLang(lang)) notFound();
  return <Site cv={dictionaries[lang]} />;
}
