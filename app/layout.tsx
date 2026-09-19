import type { Metadata } from "next";
import { Fraunces, Nunito } from "next/font/google";
import { MotionProvider } from "@/components/MotionProvider";
import { profile } from "@/content/cv";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  axes: ["SOFT", "WONK", "opsz"],
  display: "swap",
});

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${profile.name} · ${profile.role}`,
  description: profile.tagline,
  openGraph: {
    title: `${profile.name} · ${profile.role}`,
    description: profile.tagline,
    type: "profile",
    locale: "pt_PT",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-PT" className={`${fraunces.variable} ${nunito.variable}`}>
      <body>
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
