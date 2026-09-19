"use client";

import { MotionConfig } from "motion/react";

/** Respeita "reduzir movimento" do sistema operativo em todas as animações. */
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
