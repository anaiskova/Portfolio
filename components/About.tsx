import { about, stats } from "@/content/cv";
import { Section, SectionHeading } from "./ui/Section";
import { cardRadii } from "./ui/shapes";

export function About() {
  return (
    <Section id="sobre" className="bg-muted/40">
      <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
        <div>
          <SectionHeading title="Sobre mim" />
          <div className="mt-8 space-y-5 text-justify text-lg leading-relaxed text-accent-foreground hyphens-auto">
            {about.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>

        <dl className="grid grid-cols-2 gap-6 md:gap-8">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`group border border-border/50 bg-card p-6 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-lift md:p-8 ${cardRadii[i]} ${i % 2 === 1 ? "sm:translate-y-8 sm:hover:translate-y-7" : ""}`}
            >
              <dt className="sr-only">{s.label}</dt>
              <dd>
                <span className="block font-serif text-5xl font-bold text-primary transition-transform duration-500 group-hover:scale-110 md:text-6xl origin-left">
                  {s.value}
                </span>
                <span className="mt-3 block text-sm leading-snug text-muted-foreground md:text-base">{s.label}</span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  );
}
