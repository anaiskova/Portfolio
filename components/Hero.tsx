"use client";

import Image from "next/image";
import { motion, useReducedMotion, type Variants } from "motion/react";
import { Download, Mail } from "lucide-react";
import { profile, strengths } from "@/content/cv";
import { Blob } from "./ui/Blob";
import { Button } from "./ui/Button";
import { LinkedInIcon } from "./ui/LinkedInIcon";
import { blobShapes } from "./ui/shapes";

const ease = [0.22, 1, 0.36, 1] as const;

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease } },
};

// Qualidades em destaque a "flutuar" à volta do retrato
const floating = strengths.slice(0, 4);
// Esquerda alinhada à esquerda, direita alinhada à direita, em diagonal: nunca tapam as letras
const pillPositions = [
  "top-[3%] -left-6",
  "top-[20%] -right-6",
  "bottom-[20%] -left-6",
  "bottom-[3%] -right-6",
];
const dotColors = ["bg-primary", "bg-secondary", "bg-secondary", "bg-primary"];

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section id="topo" className="relative flex min-h-svh items-center overflow-hidden px-4 pb-24 pt-28 sm:px-6 md:pb-32 md:pt-40 lg:px-8">
      <Blob shape={0} className="-right-32 -top-32 h-[30rem] w-[30rem] bg-lilac/60" />
      <Blob shape={1} className="-left-40 top-1/2 h-80 w-80 bg-accent/70" />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:gap-16">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.h1
            variants={item}
            className="font-serif text-[2.6rem] font-bold leading-[1.05] tracking-tight sm:text-5xl lg:whitespace-nowrap lg:text-[3.1rem] xl:text-6xl"
          >
            {profile.name},{"\u00A0"}{profile.suffix}
          </motion.h1>

          <motion.p variants={item} className="mt-4 font-serif text-2xl font-semibold text-primary md:text-3xl">
            {profile.role}
          </motion.p>

          <motion.p variants={item} className="mt-6 max-w-2xl text-balance text-lg leading-relaxed text-accent-foreground md:text-xl">
            {profile.tagline}
          </motion.p>

          <motion.div variants={item} className="mt-10 flex flex-wrap gap-4">
            <Button href={`mailto:${profile.email}`}>
              <Mail size={20} aria-hidden="true" />
              Enviar email
            </Button>
            <Button href={profile.linkedin} variant="outline" target="_blank" rel="noopener noreferrer">
              <LinkedInIcon size={20} />
              Ver LinkedIn
            </Button>
            {profile.cvPdf && (
              <Button href={profile.cvPdf} variant="ghost" download>
                <Download size={20} aria-hidden="true" />
                Descarregar CV
              </Button>
            )}
          </motion.div>
        </motion.div>

        {/* Retrato orgânico: a forma respira devagar, como uma pedra moldada pela água */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: -2 }}
          transition={{ duration: 1.1, ease, delay: 0.25 }}
          className="relative order-first mx-auto aspect-square w-full max-w-[15rem] sm:max-w-[22rem] lg:order-none lg:max-w-[23rem] xl:max-w-[25rem]"
        >
          <motion.div
            className="absolute inset-0 overflow-hidden border-4 border-white bg-[radial-gradient(circle_at_72%_78%,#9D8FCB_0%,#6F5DA3_52%,#5F4F93_100%)] shadow-float"
            style={{ borderRadius: blobShapes[0] }}
            animate={reduce ? undefined : { borderRadius: [...blobShapes, blobShapes[0]] }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          >
            {profile.photo ? (
              <Image
                src={profile.photo}
                alt={`Fotografia de ${profile.name}`}
                fill
                priority
                sizes="(min-width: 640px) 26rem, 20rem"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            ) : (
              <div className="relative grid h-full w-full place-items-center">
                <span
                  aria-hidden="true"
                  className="relative select-none font-serif text-[6.5rem] font-bold leading-none text-lilac-soft sm:text-[8.5rem] lg:text-[7rem] xl:text-[9.5rem]"
                >
                  {profile.initials}
                </span>
              </div>
            )}
          </motion.div>

          {floating.map((tool, i) => (
            <motion.span
              key={tool}
              className={`absolute ${pillPositions[i]} hidden items-center gap-2 whitespace-nowrap rounded-full border border-border/60 bg-white/90 px-4 py-2 text-sm font-extrabold xl:px-5 xl:py-2.5 xl:text-base text-foreground shadow-float backdrop-blur-sm sm:inline-flex`}
              initial={{ opacity: 0, y: 10 }}
              animate={reduce ? { opacity: 1, y: 0 } : { opacity: 1, y: [0, -8, 0] }}
              transition={{
                opacity: { delay: 0.8 + i * 0.12, duration: 0.6 },
                y: { delay: 0.8 + i * 0.12, duration: 5 + i, repeat: Infinity, ease: "easeInOut" },
              }}
            >
              <span
                aria-hidden="true"
                className={`h-3 w-3 ${dotColors[i]}`}
                style={{ borderRadius: blobShapes[i % blobShapes.length] }}
              />
              {tool}
            </motion.span>
          ))}
        </motion.div>

        <ul className="order-first -mt-4 flex flex-wrap justify-center gap-2 sm:hidden" aria-label="Qualidades">
          {floating.map((tool, i) => (
            <li
              key={tool}
              className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-white/90 px-4 py-2 text-sm font-extrabold shadow-soft"
            >
              <span
                aria-hidden="true"
                className={`h-3 w-3 ${dotColors[i]}`}
                style={{ borderRadius: blobShapes[i % blobShapes.length] }}
              />
              {tool}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
