import { BookOpen, ChevronDown, CircleCheck, FileText, GraduationCap } from "lucide-react";
import { certifications, education, languages, publications, type CertFile } from "@/content/cv";
import { Section, SectionHeading } from "./ui/Section";
import { blobShapes } from "./ui/shapes";

export function Education() {
  return (
    <Section id="formacao">
      <SectionHeading title="Formação e certificações" />

      <div className="mt-10 grid gap-8 lg:grid-cols-[1.25fr_0.75fr]">
        <ol className="space-y-4">
          {education.map((e) => (
            <li
              key={e.degree}
              className="group flex gap-5 rounded-3xl border border-border/50 bg-card p-6 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-lift"
            >
              <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                <GraduationCap size={26} aria-hidden="true" />
              </span>
              <div className="flex-1">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="font-serif text-xl font-semibold">{e.degree}</h3>
                  <span className="text-sm font-bold text-clay-ink">{e.period}</span>
                </div>
                <p className="mt-1 text-accent-foreground">{e.detail}</p>
                {e.org && <p className="mt-1 text-sm text-muted-foreground">{e.org}</p>}
              </div>
            </li>
          ))}
        </ol>

        <div className="rounded-[2rem] rounded-tr-[5rem] bg-lilac-soft/70 p-8 md:p-10">
          <h3 className="font-serif text-2xl font-semibold">Certificações</h3>
          <ul className="mt-6 space-y-3">
            {certifications.map((c) => (
              <li key={c.name}>
                <Certification name={c.name} files={c.files} />
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-muted-foreground">Clica num certificado para o abrir.</p>
        </div>
      </div>

      <div className="mt-8 grid gap-8 md:grid-cols-2">
        <div className="rounded-[2rem] rounded-bl-[4rem] border border-border/50 bg-card p-8 shadow-soft md:p-10">
          <h3 className="font-serif text-2xl font-semibold">Idiomas</h3>
          <ul className="mt-6 space-y-5">
            {languages.map((l) => (
              <li key={l.name} className="flex items-center justify-between gap-4">
                <span className="font-bold">{l.name}</span>
                <span className="flex items-center gap-3">
                  <span className="flex gap-1.5" role="img" aria-label={`Nível ${l.level}`}>
                    {Array.from({ length: 6 }, (_, i) => (
                      <span
                        key={i}
                        className={`h-3 w-3 ${i < l.score ? "bg-primary" : "bg-lilac-soft"}`}
                        style={{ borderRadius: blobShapes[i % blobShapes.length] }}
                      />
                    ))}
                  </span>
                  <span className="w-14 text-right text-sm font-bold text-primary" aria-hidden="true">
                    {l.level}
                  </span>
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-muted-foreground">Escala europeia CEFR, de A1 a C2.</p>
        </div>

        <div className="rounded-[2rem] rounded-tr-[4rem] border border-border/50 bg-card p-8 shadow-soft md:p-10">
          <div className="flex items-center gap-3">
            <BookOpen size={24} className="text-primary" aria-hidden="true" />
            <h3 className="font-serif text-2xl font-semibold">Publicações e atividade académica</h3>
          </div>
          <ul className="mt-6 space-y-3">
            {publications.map((p) => (
              <li key={p.text} className="relative pl-6 leading-relaxed text-accent-foreground">
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-[0.6em] h-2.5 w-2.5 bg-secondary"
                  style={{ borderRadius: blobShapes[3] }}
                />
                {p.href ? (
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline decoration-secondary/50 decoration-2 underline-offset-4 transition-colors hover:text-clay-ink hover:decoration-secondary"
                  >
                    {p.text}
                    <span className="sr-only"> (certificado em PDF, abre num novo separador)</span>
                  </a>
                ) : (
                  p.text
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}

const linkClass =
  "group/link inline-flex items-start gap-3 rounded-xl py-1 leading-snug transition-colors hover:text-primary " +
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40";

/**
 * Um certificado: link direto para o PDF. Com vários certificados da mesma ferramenta,
 * mostra a quantidade no nome e abre a lista ao clicar.
 */
function Certification({ name, files }: { name: string; files: CertFile[] }) {
  if (files.length === 0) {
    return (
      <span className="inline-flex items-start gap-3 py-1 leading-snug">
        <CircleCheck size={22} className="mt-0.5 shrink-0 text-primary" aria-hidden="true" />
        {name}
      </span>
    );
  }

  if (files.length === 1) {
    return (
      <a href={files[0].href} target="_blank" rel="noopener noreferrer" className={linkClass}>
        <CircleCheck size={22} className="mt-0.5 shrink-0 text-primary" aria-hidden="true" />
        <span className="underline decoration-lilac decoration-2 underline-offset-4 group-hover/link:decoration-primary">
          {name}
        </span>
        <span className="sr-only"> (certificado em PDF, abre num novo separador)</span>
      </a>
    );
  }

  return (
    <details className="group/cert">
      <summary
        className={`${linkClass} cursor-pointer list-none [&::-webkit-details-marker]:hidden`}
      >
        <CircleCheck size={22} className="mt-0.5 shrink-0 text-primary" aria-hidden="true" />
        <span className="underline decoration-lilac decoration-2 underline-offset-4 group-hover/link:decoration-primary">
          {name} ({files.length})
        </span>
        <ChevronDown
          size={18}
          className="mt-0.5 shrink-0 text-primary transition-transform duration-300 group-open/cert:rotate-180"
          aria-hidden="true"
        />
      </summary>
      <ul className="mb-1 ml-[2.1rem] mt-2 space-y-2 border-l-2 border-dashed border-lilac pl-4">
        {files.map((f) => (
          <li key={f.href}>
            <a
              href={f.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-start gap-2 text-sm leading-snug text-accent-foreground transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
            >
              <FileText size={16} className="mt-0.5 shrink-0" aria-hidden="true" />
              <span className="underline decoration-lilac underline-offset-4">{f.label}</span>
              <span className="sr-only"> (PDF, abre num novo separador)</span>
            </a>
          </li>
        ))}
      </ul>
    </details>
  );
}
