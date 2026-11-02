import { ArrowRight } from "lucide-react";
import { caseStudies, caseStudyPaths } from "@/content/case-study";
import type { CV } from "@/content/types";
import { AttendanceChart } from "./charts/AttendanceChart";
import { Blob } from "./ui/Blob";
import { Button } from "./ui/Button";
import { Section } from "./ui/Section";

/**
 * Bloco de destaque na página principal: dá uma amostra do estudo de caso,
 * com o gráfico principal, e leva à página completa.
 */
export function CaseStudyTeaser({ cv }: { cv: CV }) {
  const cs = caseStudies[cv.lang];
  const href = caseStudyPaths[cv.lang];

  return (
    <Section id="case-study" className="overflow-hidden bg-muted/40">
      <Blob shape={2} className="-right-40 top-10 h-96 w-96 bg-lilac/40" />

      <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-14">
        <div>
          <p className="text-sm font-extrabold uppercase tracking-[0.12em] text-primary">{cs.teaser.eyebrow}</p>
          <h2 className="mt-4 text-balance font-serif text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
            {cs.title}
          </h2>
          <p className="mt-5 text-pretty text-lg leading-relaxed text-muted-foreground">{cs.teaser.text}</p>

          <dl className="mt-8 flex flex-wrap gap-x-10 gap-y-5">
            {cs.stats.slice(0, 3).map((s) => (
              <div key={s.label}>
                <dt className="sr-only">{s.label}</dt>
                <dd>
                  <span className="block font-serif text-3xl font-bold text-primary">{s.value}</span>
                  <span className="mt-1 block max-w-[14rem] text-sm leading-snug text-muted-foreground">{s.label}</span>
                </dd>
              </div>
            ))}
          </dl>

          <Button href={href} className="mt-9">
            {cs.teaser.cta}
            <ArrowRight size={20} aria-hidden="true" />
          </Button>
        </div>

        <AttendanceChart chart={cs.attendanceChart} locale={cs.locale} />
      </div>
    </Section>
  );
}
