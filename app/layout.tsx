import type { Metadata } from "next";
import { MotionProvider } from "@/components/MotionProvider";
import { en } from "@/content/en";
import { profile } from "@/content/shared";
import { fraunces, nunito } from "@/lib/fonts";
import "./globals.css";

const title = `${profile.name} · ${en.role}`;

export const metadata: Metadata = {
  title,
  description: en.tagline,
  alternates: { languages: { "en-GB": "/", "pt-PT": "/pt", "fr-FR": "/fr" } },
  openGraph: { title, description: en.tagline, type: "profile", locale: en.ogLocale },
};

// Layout principal. O inglês é a língua por defeito; a página /pt muda o idioma declarado.
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang={en.htmlLang} className={`${fraunces.variable} ${nunito.variable}`}>
      <body>
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
