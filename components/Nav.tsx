"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { profile } from "@/content/shared";
import type { CV } from "@/content/types";
import { LanguageSwitch } from "./LanguageSwitch";
import { Button } from "./ui/Button";
import { blobShapes } from "./ui/shapes";


export function Nav({ cv }: { cv: CV }) {
  const [open, setOpen] = useState(false);
  const links = [
    { href: "#about", label: cv.ui.nav.about },
    { href: "#skills", label: cv.ui.nav.skills },
    { href: "#experience", label: cv.ui.nav.experience },
    { href: "#education", label: cv.ui.nav.education },
    { href: "#projects", label: cv.ui.nav.projects },
  ];

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-4 z-40 px-4">
      <nav
        aria-label={cv.ui.navAria}
        className="relative mx-auto flex max-w-5xl items-center justify-between rounded-full border border-border/50 bg-white/70 py-2 pl-2 pr-2 shadow-soft backdrop-blur-md lg:pr-3"
      >
        <a
          href="#top"
          className="flex items-center gap-3 rounded-full pr-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
        >
          <span
            className="grid h-10 w-10 place-items-center bg-primary font-serif text-sm font-bold text-primary-foreground"
            style={{ borderRadius: blobShapes[0] }}
            aria-hidden="true"
          >
            {profile.initials}
          </span>
          <span className="hidden whitespace-nowrap font-serif text-lg font-semibold min-[440px]:inline">{profile.name}</span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="rounded-full px-4 py-2 text-sm font-semibold text-accent-foreground transition-colors duration-300 hover:bg-primary/10 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <LanguageSwitch cv={cv} />
          <div className="hidden lg:block">
            <Button href="#contact" size="sm">
              {cv.ui.nav.contact}
            </Button>
          </div>

          <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="menu-movel"
          aria-label={open ? cv.ui.closeMenu : cv.ui.openMenu}
          className="grid h-11 w-11 place-items-center rounded-full text-primary transition-colors hover:bg-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 lg:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              id="menu-movel"
              initial={{ opacity: 0, y: -8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-x-0 top-full mt-3 rounded-[2rem] border border-border/50 bg-white/90 p-4 shadow-float backdrop-blur-md lg:hidden"
            >
              <ul className="flex flex-col">
                {links.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="block rounded-2xl px-4 py-3 font-semibold hover:bg-primary/10 hover:text-primary"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
              <Button href="#contact" onClick={() => setOpen(false)} className="mt-3 w-full">
                {cv.ui.nav.contact}
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
