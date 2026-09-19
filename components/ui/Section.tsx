type SectionProps = {
  id?: string;
  className?: string;
  /** Classe de largura completa (ex.: "max-w-7xl"), para o Tailwind a detetar. */
  width?: string;
  children: React.ReactNode;
};

export function Section({ id, className = "", width = "max-w-7xl", children }: SectionProps) {
  return (
    <section id={id} className={`relative scroll-mt-28 px-4 py-16 sm:px-6 md:py-20 lg:px-8 ${className}`}>
      <div className={`relative mx-auto ${width}`}>{children}</div>
    </section>
  );
}

type HeadingProps = {
  title: string;
  intro?: string;
  id?: string;
};

export function SectionHeading({ title, intro, id }: HeadingProps) {
  return (
    <div className="max-w-4xl">
      <h2 id={id} className="font-serif text-4xl font-semibold tracking-tight md:text-5xl">
        {title}
      </h2>
      {intro && <p className="mt-5 text-pretty text-lg leading-relaxed text-muted-foreground">{intro}</p>}
    </div>
  );
}
