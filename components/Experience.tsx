"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import type { CV } from "@/content/types";
import { Section, SectionHeading } from "./ui/Section";
import { blobShapes, cardRadii } from "./ui/shapes";

// Caminho suave, desenhado "à mão", que liga as experiências
const path = "M20 0 C 30 90, 10 180, 20 270 S 30 450, 20 540 S 10 720, 20 810 S 30 930, 20 1000";

export function Experience({ cv }: { cv: CV }) {
  const { earlierExperience, experience, projects } = cv;
  const ref = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 75%", "end 55%"] });
  const pathLength = useSpring(scrollYProgress, { stiffness: 80, damping: 25, restDelta: 0.001 });

  return (
    <Section id="experience" className="bg-accent/30">
      <SectionHeading
        title={cv.ui.experienceTitle}
        intro={cv.ui.experienceIntro}
      />

      <div className="relative mt-10">
        <svg
          aria-hidden="true"
          className="absolute left-0 top-0 h-full w-10 md:w-16"
          viewBox="0 0 40 1000"
          preserveAspectRatio="none"
          fill="none"
        >
          <path d={path} stroke="#DED8CF" strokeWidth={2} strokeDasharray="6 8" vectorEffect="non-scaling-stroke" />
          <motion.path
            d={path}
            stroke="#6F5DA3"
            strokeWidth={2.5}
            strokeLinecap="round"
            vectorEffect="non-scaling-stroke"
            style={{ pathLength }}
          />
        </svg>

        <ol ref={ref} className="space-y-10 pl-12 md:pl-20">
          {experience.map((job, i) => (
            <li key={job.role} className="relative">
              <span
                aria-hidden="true"
                className="absolute -left-[35px] top-9 h-4 w-4 bg-primary ring-4 ring-background md:-left-[56px]"
                style={{ borderRadius: blobShapes[i % blobShapes.length] }}
              />
              <article
                className={`border border-border/50 bg-card p-6 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-lift md:p-10 ${cardRadii[i * 2 % cardRadii.length]}`}
              >
                <header className="flex flex-wrap items-start justify-between gap-x-6 gap-y-3">
                  <div>
                    <h3 className="font-serif text-2xl font-semibold leading-tight md:text-3xl">{job.role}</h3>
                    <p className="mt-2 text-muted-foreground">
                      {job.note && <span className="font-bold text-primary">{job.note}. </span>}
                      {[job.org, job.place].filter(Boolean).join(", ")}
                    </p>
                  </div>
                  <span className="rounded-full bg-secondary/10 px-4 py-1.5 text-sm font-bold whitespace-nowrap text-clay-ink">
                    {job.period}
                  </span>
                </header>

                <ul className="mt-6 space-y-3">
                  {job.bullets.map((b) => (
                    <li key={b} className="relative pl-6 leading-relaxed text-accent-foreground">
                      <span
                        aria-hidden="true"
                        className="absolute left-0 top-[0.6em] h-2.5 w-2.5 bg-lilac"
                        style={{ borderRadius: blobShapes[1] }}
                      />
                      {b}
                    </li>
                  ))}
                </ul>

                {job.tags.length > 0 && (
                  <ul className="mt-6 flex flex-wrap gap-2" aria-label={cv.ui.tagsAria}>
                    {job.tags.map((t) => (
                      <li key={t} className="rounded-full bg-lilac-soft px-3 py-1 text-sm font-semibold text-primary">
                        {t}
                      </li>
                    ))}
                  </ul>
                )}

                {job.projects.length > 0 && (
                  <div className="mt-6 flex flex-wrap items-center gap-2">
                    <span className="text-sm font-bold text-muted-foreground">{cv.ui.projectsLabel}</span>
                    {job.projects.map((id) => {
                      const proj = projects.find((p) => p.id === id);
                      if (!proj) return null;
                      return (
                        <a
                          key={id}
                          href={`#project-${id}`}
                          className="rounded-full border-2 border-lilac bg-card px-3 py-1 text-sm font-bold text-primary transition-all duration-300 hover:scale-105 hover:border-primary hover:bg-lilac-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
                        >
                          {proj.name}
                        </a>
                      );
                    })}
                  </div>
                )}
              </article>
            </li>
          ))}

          <li className="relative">
            <span
              aria-hidden="true"
              className="absolute -left-[35px] top-8 h-4 w-4 bg-accent ring-4 ring-background md:-left-[56px]"
              style={{ borderRadius: blobShapes[2] }}
            />
            <div className="rounded-[2rem] rounded-br-[4rem] bg-muted/80 p-6 md:p-8">
              <h3 className="font-serif text-xl font-semibold">{earlierExperience.title}</h3>
              <ul className="mt-4 space-y-3">
                {earlierExperience.items.map((e) => (
                  <li key={e.org} className="flex flex-col gap-1 sm:flex-row sm:justify-between sm:gap-6">
                    <span className="text-accent-foreground">
                      <strong className="font-bold text-foreground">{e.org}.</strong> {e.text}
                    </span>
                    {e.period && <span className="shrink-0 text-sm font-bold text-clay-ink">{e.period}</span>}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ol>
      </div>
    </Section>
  );
}
