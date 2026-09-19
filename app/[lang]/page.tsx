import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Site } from "@/components/Site";
import { pt } from "@/content/pt";
import { profile } from "@/content/shared";

// Só existe /pt. O inglês vive em /, e /en redireciona para / (ver next.config.ts).
export const dynamicParams = false;

export function generateStaticParams() {
  return [{ lang: "pt" }];
}

export const metadata: Metadata = {
  title: `${profile.name} · ${pt.role}`,
  description: pt.tagline,
  openGraph: { title: `${profile.name} · ${pt.role}`, description: pt.tagline, type: "profile", locale: pt.ogLocale },
};

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (lang !== "pt") notFound();
  return <Site cv={pt} />;
}
