import { Mail } from "lucide-react";
import { profile } from "@/content/shared";
import type { CV } from "@/content/types";
import { Button } from "./ui/Button";
import { LinkedInIcon } from "./ui/LinkedInIcon";

export function Contact({ cv }: { cv: CV }) {
  return (
    <section id="contact" className="scroll-mt-28 px-4 py-16 sm:px-6 md:py-20 lg:px-8">
      <div className="relative mx-auto max-w-7xl rounded-[3rem] bg-primary bg-[radial-gradient(ellipse_at_12%_15%,rgba(200,189,232,0.35),transparent_45%),radial-gradient(ellipse_at_88%_20%,rgba(200,189,232,0.3),transparent_45%),radial-gradient(ellipse_at_15%_95%,rgba(193,140,93,0.28),transparent_45%)] px-8 py-16 text-primary-foreground shadow-float md:px-16 md:py-20">

        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-balance font-serif text-4xl font-semibold tracking-tight md:text-5xl">
            {cv.ui.contactTitle}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-balance text-lg leading-relaxed text-primary-foreground/85">
            {cv.ui.contactText}
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button href={`mailto:${profile.email}`} variant="light">
              <Mail size={20} aria-hidden="true" />
              {profile.email}
            </Button>
            <Button href={profile.linkedin} variant="outline-light" target="_blank" rel="noopener noreferrer">
              <LinkedInIcon size={20} />
              LinkedIn
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="px-4 pb-10 text-center text-sm text-muted-foreground">
      © {new Date().getFullYear()} {profile.name}.
    </footer>
  );
}
