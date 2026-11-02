import type { CaseStudy } from "@/content/types";

const MIN = 1;
const MAX = 7;
const CENTRE = 4;
/** Cada ponto da escala vale esta percentagem da largura do gráfico. */
const UNIT = 100 / (MAX - MIN);

/**
 * Barras divergentes a partir do centro da escala (4 = sem mudança).
 * À direita, em lavanda, está quem concordou mais; à esquerda, em terracota, quem concordou menos.
 * Duas cores com um ponto neutro ao centro é a forma correta de mostrar polaridade.
 */
export function BehaviourChart({ chart, locale }: { chart: CaseStudy["behaviourChart"]; locale: string }) {
  return (
    <figure className="rounded-[2rem] rounded-br-[4rem] border border-border/50 bg-card p-6 shadow-soft sm:p-8 md:p-10">
      <figcaption>
        <h3 className="font-serif text-xl font-semibold leading-snug md:text-2xl">{chart.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{chart.subtitle}</p>
      </figcaption>

      {/* O espaçador de 36px repete a coluna dos valores, para a legenda ficar sobre a barra */}
      <div className="mt-6 flex gap-3 sm:ml-[42%] sm:pl-4" aria-hidden="true">
        <div className="flex flex-1 items-center justify-between gap-4 text-xs font-bold text-muted-foreground">
          <span className="inline-flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-sm bg-chart-b" />
            {chart.lessLabel}
          </span>
          <span className="inline-flex items-center gap-1.5">
            {chart.moreLabel}
            <span className="h-2.5 w-2.5 rounded-sm bg-chart-a" />
          </span>
        </div>
        <span className="w-9 shrink-0" />
      </div>

      <ul className="mt-4 space-y-3">
        {chart.items.map((item) => {
          const above = item.value >= CENTRE;
          const width = Math.abs(item.value - CENTRE) * UNIT;
          const left = above ? 50 : 50 - width;
          return (
            <li key={item.label} className="sm:flex sm:items-center sm:gap-4">
              <p className="text-sm leading-snug text-accent-foreground sm:w-[42%] sm:shrink-0 sm:text-right">
                {item.label}
              </p>
              <div className="mt-1 flex flex-1 items-center gap-3 sm:mt-0">
                <span className="relative h-6 flex-1 rounded-sm bg-muted/60">
                  {/* linha do centro: o ponto em que não houve mudança */}
                  <span className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-border" aria-hidden="true" />
                  <span
                    className={`absolute inset-y-0 ${above ? "rounded-r-[4px] bg-chart-a" : "rounded-l-[4px] bg-chart-b"}`}
                    style={{ left: `${left}%`, width: `${Math.max(width, 0.4)}%` }}
                    aria-hidden="true"
                  />
                </span>
                <span className="w-9 shrink-0 text-right text-sm font-bold tabular-nums text-accent-foreground">
                  {item.value.toLocaleString(locale, { minimumFractionDigits: 2 })}
                </span>
              </div>
            </li>
          );
        })}
      </ul>

      <div className="mt-3 flex gap-3 sm:ml-[42%] sm:pl-4" aria-hidden="true">
        <p className="flex-1 text-center text-xs font-bold text-muted-foreground">{chart.centreLabel}</p>
        <span className="w-9 shrink-0" />
      </div>

      <p className="mt-6 border-t border-border/50 pt-4 text-sm leading-relaxed text-muted-foreground">{chart.note}</p>
    </figure>
  );
}
