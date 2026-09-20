import type { Metadata } from "next";
import { MotionProvider } from "@/components/MotionProvider";
import { en } from "@/content/en";
import { fraunces, nunito } from "@/lib/fonts";
import { pageMetadata } from "@/lib/seo";
import "./globals.css";

export const metadata: Metadata = pageMetadata(en);

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
