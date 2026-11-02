import { ArrowLeft, Download, Quote } from "lucide-react";
import { caseStudyPaths } from "@/content/case-study";
import type { CaseStudy, CV } from "@/content/types";
import { AttendanceChart } from "./charts/AttendanceChart";
import { BehaviourChart } from "./charts/BehaviourChart";
import { Contact, Footer } from "./Contact";
import { Nav } from "./Nav";
import { Blob } from "./ui/Blob";
import { Button } from "./ui/Button";
import { Section } from "./ui/Section";
import { blobShapes, cardRadii } from "./ui/shapes";

/** Página completa do estudo de caso, numa língua. */
export function CaseStudyPage({ cv, cs }: { cv: CV; cs: CaseStudy }) {
  const homePath = caseStudyPaths[cs.lang].replace(/\/case-study$/, "") || "/";

  return (
    <>
      <a
        href="#case-intro"
        className="sr-only z-50 rounded-full bg-primary px-6 py-3 font-bold text-primary-foreground focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        {cv.ui.skipToContent}
      </a>
      <Nav cv={cv} homePath={homePath} />

      <main>
        {/* Apresentação */}
        <section className="relative overflow-hidden px-4 pb-10 pt-28 sm:px-6 md:pb-14 md:pt-36 lg:px-8">
          <Blob shape={0} className="-right-32 -top-32 h-[28rem] w-[28rem] bg-lilac/60" />
          <Blob shape={1} className="-left-40 top-1/2 h-72 w-72 bg-accent/70" />

          <div className="relative mx-auto max-w-7xl">
            <a
              href={homePath}
              className="inline-flex items-center gap-2 rounded-full text-sm font-bold text-primary transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
            >
              <ArrowLeft size={16} aria-hidden="true" />
              {cs.backToSite}
            </a>

            <p className="mt-8 text-sm font-extrabold uppercase tracking-[0.12em] text-primary">{cs.eyebrow}</p>
            <h1
              id="case-intro"
              className="mt-4 max-w-4xl text-balance font-serif text-4xl font-bold leading-[1.1] tracking-tight md:text-6xl"
            >
              {cs.title}
            </h1>
            <p className="mt-4 font-serif text-xl font-semibold text-primary md:text-2xl">{cs.subtitle}</p>
            <p className="mt-6 max-w-3xl text-pretty text-lg leading-relaxed text-accent-foreground">{cs.intro}</p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button href="/case-study-anais-kovaleski.pdf" target="_blank" rel="noopener noreferrer" variant="outline">
                <Download size={20} aria-hidden="true" />
                {cs.downloadPdf}
                {cs.pdfNote && <span className="font-semibold">({cs.pdfNote})</span>}
              </Button>
              <p className="text-sm text-muted-foreground">{cs.source}</p>
            </div>
          </div>
        </section>

        {/* Números do estudo */}
        <Section className="!pt-6">
          <dl className="grid grid-cols-1 gap-6 min-[360px]:grid-cols-2 md:grid-cols-4 md:gap-8">
            {cs.stats.map((s, i) => (
              <div
                key={s.label}
                className={`border border-border/50 bg-card p-6 shadow-soft ${cardRadii[i % cardRadii.length]}`}
              >
                <dt className="sr-only">{s.label}</dt>
                <dd>
                  <span className="block font-serif text-4xl font-bold text-primary md:text-5xl">{s.value}</span>
                  <span className="mt-3 block text-sm leading-snug text-muted-foreground">{s.label}</span>
                </dd>
              </div>
            ))}
          </dl>
        </Section>

        {/* Pergunta de negócio e dados */}
        <Section className="bg-muted/40">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            {[cs.question, cs.data].map((block) => (
              <div key={block.title}>
                <h2 className="font-serif text-3xl font-semibold tracking-tight md:text-4xl">{block.title}</h2>
                <p className="mt-5 text-pretty text-lg leading-relaxed text-accent-foreground">{block.text}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Como trabalhei */}
        <Section>
          <h2 className="font-serif text-3xl font-semibold tracking-tight md:text-4xl">{cs.method.title}</h2>

          <ul className="mt-6 flex flex-wrap gap-2" aria-label={cs.method.toolsAria}>
            {cs.method.tools.map((t) => (
              <li key={t} className="rounded-full bg-lilac-soft px-4 py-1.5 text-sm font-bold text-primary">
                {t}
              </li>
            ))}
          </ul>

          <ol className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {cs.method.steps.map((step, i) => (
              <li
                key={step.title}
                className={`border border-border/50 bg-card p-6 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-lift ${cardRadii[i % cardRadii.length]}`}
              >
                <span
                  className="grid h-10 w-10 place-items-center bg-primary/10 font-serif text-lg font-bold text-primary"
                  style={{ borderRadius: blobShapes[i % blobShapes.length] }}
                  aria-hidden="true"
                >
                  {i + 1}
                </span>
                <h3 className="mt-4 font-serif text-xl font-semibold">{step.title}</h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">{step.text}</p>
              </li>
            ))}
          </ol>
        </Section>

        {/* Primeiro gráfico */}
        <Section className="!pt-0">
          <AttendanceChart chart={cs.attendanceChart} locale={cs.locale} />
        </Section>

        {/* Resultados */}
        <Section className="bg-accent/30">
          <h2 className="font-serif text-3xl font-semibold tracking-tight md:text-4xl">{cs.results.title}</h2>
          <ul className="mt-8 grid gap-8 md:grid-cols-3">
            {cs.results.items.map((item, i) => (
              <li
                key={item.title}
                className={`border border-border/50 bg-card p-8 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-lift ${cardRadii[(i + 2) % cardRadii.length]}`}
              >
                {item.value && (
                  <span className="block font-serif text-4xl font-bold text-primary md:text-5xl">{item.value}</span>
                )}
                <h3 className={`font-serif text-xl font-semibold ${item.value ? "mt-3" : ""}`}>{item.title}</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">{item.text}</p>
              </li>
            ))}
          </ul>
        </Section>

        {/* Segundo gráfico */}
        <Section className="!pt-0 !pb-10">
          <BehaviourChart chart={cs.behaviourChart} locale={cs.locale} />
        </Section>

        {/* O que explica as mudanças */}
        <Section>
          <div className="relative overflow-hidden rounded-[2rem] rounded-tr-[5rem] bg-lilac-soft/70 p-8 md:p-12">
            <Quote size={40} className="text-primary/40" aria-hidden="true" />
            <h2 className="mt-4 font-serif text-2xl font-semibold tracking-tight md:text-3xl">{cs.explains.title}</h2>
            <p className="mt-4 max-w-4xl text-pretty text-lg leading-relaxed text-accent-foreground">
              {cs.explains.text}
            </p>
          </div>
        </Section>

        {/* Recomendações */}
        <Section className="!pt-0">
          <h2 className="font-serif text-3xl font-semibold tracking-tight md:text-4xl">{cs.recommendations.title}</h2>
          <ol className="mt-8 grid gap-6 md:grid-cols-2">
            {cs.recommendations.items.map((item, i) => (
              <li
                key={item.title}
                className={`flex gap-4 border border-border/50 bg-card p-6 shadow-soft md:p-8 ${cardRadii[(i + 1) % cardRadii.length]}`}
              >
                <span
                  className="mt-1 h-3 w-3 shrink-0 bg-secondary"
                  style={{ borderRadius: blobShapes[i % blobShapes.length] }}
                  aria-hidden="true"
                />
                <p className="leading-relaxed text-accent-foreground">
                  <strong className="font-extrabold text-foreground">{item.title}</strong> {item.text}
                </p>
              </li>
            ))}
          </ol>

          <p className="mt-10 text-sm text-muted-foreground">{cs.methodsFooter}</p>
        </Section>

        <Contact cv={cv} />
      </main>
      <Footer />
    </>
  );
}
