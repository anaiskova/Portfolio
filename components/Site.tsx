import type { CV } from "@/content/types";
import { About } from "./About";
import { Contact, Footer } from "./Contact";
import { Education } from "./Education";
import { Experience } from "./Experience";
import { Hero } from "./Hero";
import { Nav } from "./Nav";
import { Projects } from "./Projects";
import { Skills } from "./Skills";

/** A página completa, numa língua. */
export function Site({ cv }: { cv: CV }) {
  return (
    <>
      <a
        href="#about"
        className="sr-only z-50 rounded-full bg-primary px-6 py-3 font-bold text-primary-foreground focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        {cv.ui.skipToContent}
      </a>
      <Nav cv={cv} />
      <main>
        <Hero cv={cv} />
        <About cv={cv} />
        <Skills cv={cv} />
        <Experience cv={cv} />
        <Education cv={cv} />
        <Projects cv={cv} />
        <Contact cv={cv} />
      </main>
      <Footer />
    </>
  );
}
