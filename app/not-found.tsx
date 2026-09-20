import type { Metadata } from "next";
import { Blob } from "@/components/ui/Blob";
import { blobShapes } from "@/components/ui/shapes";

export const metadata: Metadata = {
  title: "404 · Anaïs Kovaleski",
  robots: { index: false },
};

// Quem chega aqui pode falar qualquer uma das três línguas, por isso a mensagem aparece nas três.
const messages = [
  { lang: "en-GB", title: "This page doesn't exist.", cta: "Back to home", href: "/" },
  { lang: "pt-PT", title: "Esta página não existe.", cta: "Voltar ao início", href: "/pt" },
  { lang: "fr-FR", title: "Cette page n'existe pas.", cta: "Retour à l'accueil", href: "/fr" },
];

export default function NotFound() {
  return (
    <main className="relative grid min-h-svh place-items-center overflow-hidden px-4 py-16">
      <Blob shape={0} className="-right-32 -top-32 h-[28rem] w-[28rem] bg-lilac/60" />
      <Blob shape={1} className="-bottom-32 -left-32 h-80 w-80 bg-accent/70" />

      <div className="relative w-full max-w-xl text-center">
        <div
          className="mx-auto grid h-40 w-40 rotate-[-2deg] place-items-center border-4 border-white bg-[radial-gradient(circle_at_72%_78%,#9D8FCB_0%,#6F5DA3_52%,#5F4F93_100%)] font-serif text-6xl font-bold text-lilac-soft shadow-float"
          style={{ borderRadius: blobShapes[0] }}
          aria-hidden="true"
        >
          404
        </div>

        <ul className="mt-10 space-y-6">
          {messages.map((m) => (
            <li key={m.lang} lang={m.lang}>
              <p className="font-serif text-2xl font-semibold md:text-3xl">{m.title}</p>
              <a
                href={m.href}
                className="mt-3 inline-flex h-11 items-center rounded-full bg-primary px-6 font-bold text-primary-foreground shadow-soft transition-all duration-300 hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2"
              >
                {m.cta}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
