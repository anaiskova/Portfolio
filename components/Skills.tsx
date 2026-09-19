import { BarChart3, Filter, LayoutDashboard, MessagesSquare, Target, Users, type LucideIcon } from "lucide-react";
import { competencies, toolGroups, type CompetencyIcon, type Level } from "@/content/cv";
import { Blob } from "./ui/Blob";
import { Section, SectionHeading } from "./ui/Section";
import { cardRadii } from "./ui/shapes";

const icons: Record<CompetencyIcon, LucideIcon> = {
  stats: BarChart3,
  users: Users,
  target: Target,
  dashboard: LayoutDashboard,
  filter: Filter,
  message: MessagesSquare,
};

// O nível lê-se pela "densidade" da pílula: cheia, areia, contorno, tracejado.
const levelStyle: Record<Level, string> = {
  3: "bg-primary text-primary-foreground shadow-soft",
  2: "bg-lilac text-foreground",
  1: "bg-accent text-accent-foreground",
  0: "border-2 border-dashed border-secondary text-clay-ink",
};

export function Skills() {
  return (
    <Section id="competencias" className="overflow-hidden">
      <Blob shape={3} className="-right-40 top-20 h-96 w-96 bg-lilac/40" />

      <SectionHeading
        title="Ferramentas e competências"
        intro="O que uso no dia a dia para passar de dados em bruto a decisões fundamentadas."
      />

      <div className="mt-10 rounded-[2rem] rounded-tl-[4rem] border border-border/50 bg-card p-8 shadow-soft md:p-10">
        <h3 className="font-serif text-2xl font-semibold">Ferramentas</h3>
        <dl className="mt-6 grid gap-6 sm:grid-cols-2">
          {toolGroups.map((g) => (
            <div key={g.label}>
              <dt className="text-sm font-bold text-muted-foreground">{g.label}</dt>
              <dd className="mt-3 flex flex-wrap gap-2">
                {g.items.map((t) => (
                  <span key={t} className={`rounded-full px-4 py-1.5 text-sm font-bold ${levelStyle[g.level]}`}>
                    {t}
                  </span>
                ))}
              </dd>
            </div>
          ))}
        </dl>
      </div>

      <ul className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {competencies.map((c, i) => {
          const Icon = icons[c.icon];
          return (
            <li
              key={c.title}
              className={`group border border-border/50 bg-card p-8 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-lift ${cardRadii[(i + 1) % cardRadii.length]}`}
            >
              <span className="grid h-14 w-14 place-items-center rounded-2xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                <Icon size={28} aria-hidden="true" />
              </span>
              <h3 className="mt-6 font-serif text-xl font-semibold">{c.title}</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">{c.text}</p>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
