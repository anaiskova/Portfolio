import type { CV } from "@/content/types";
import { Blob } from "./ui/Blob";
import { Section, SectionHeading } from "./ui/Section";
import { cardRadii } from "./ui/shapes";

export function Projects({ cv }: { cv: CV }) {
  return (
    <Section id="projects" className="overflow-hidden bg-muted/40">
      <Blob shape={2} className="-left-40 top-24 h-96 w-96 bg-lilac/35" />

      <SectionHeading
        title={cv.ui.projectsTitle}
        intro={cv.ui.projectsIntro}
      />

      <ul className="mt-10 grid gap-8 md:grid-cols-2">
        {cv.projects.map((p, i) => (
          <li
            key={p.id}
            id={`project-${p.id}`}
            className={`group scroll-mt-28 border border-border/50 bg-card p-8 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-lift md:p-10 ${cardRadii[(i + 2) % cardRadii.length]}`}
          >
            <span
              className={`inline-block rounded-full px-3 py-1 text-sm font-bold ${
                p.context === "masters" ? "bg-primary/10 text-primary" : "bg-secondary/10 text-clay-ink"
              }`}
            >
              {p.context === "masters" ? cv.ui.masters : cv.ui.bachelor}
            </span>
            <h3 className="mt-5 font-serif text-2xl font-semibold leading-tight">{p.name}</h3>
            <p className="mt-1 text-muted-foreground">{p.subtitle}</p>
            <p className="mt-5 leading-relaxed text-accent-foreground">{p.text}</p>
            <ul className="mt-6 flex flex-wrap gap-2" aria-label={cv.ui.topicsAria}>
              {p.tags.map((t) => (
                <li key={t} className="rounded-full bg-lilac-soft px-3 py-1 text-sm font-semibold text-primary">
                  {t}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </Section>
  );
}
