import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MotionProvider } from "@/components/MotionProvider";
import { dictionaries, isLang, langs } from "@/content";
import { profile } from "@/content/shared";
import { fraunces, nunito } from "@/lib/fonts";
import "../globals.css";

// Só existem estas duas versões; qualquer outra língua dá 404
export const dynamicParams = false;

export function generateStaticParams() {
  return langs.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  if (!isLang(lang)) return {};
  const cv = dictionaries[lang];
  const title = `${profile.name} · ${cv.role}`;
  return {
    title,
    description: cv.tagline,
    alternates: { languages: { "en-GB": "/", "pt-PT": "/pt" } },
    openGraph: { title, description: cv.tagline, type: "profile", locale: cv.ogLocale },
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  return (
    <html lang={dictionaries[lang].htmlLang} className={`${fraunces.variable} ${nunito.variable}`}>
      <body>
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
