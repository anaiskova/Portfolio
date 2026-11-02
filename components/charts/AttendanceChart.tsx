import type { CaseStudy } from "@/content/types";

/**
 * Barras horizontais agrupadas: quantos festivais por ano, antes e depois da pandemia.
 * Os valores aparecem como texto a seguir a cada barra, por isso não há informação
 * escondida atrás do rato e o gráfico lê-se igualmente bem num leitor de ecrã.
 */
export function AttendanceChart({ chart, locale }: { chart: CaseStudy["attendanceChart"]; locale: string }) {
  const series = [
    { key: "before" as const, label: chart.before, bar: "bg-chart-b", dot: "bg-chart-b" },
    { key: "after" as const, label: chart.after, bar: "bg-chart-a", dot: "bg-chart-a" },
  ];

  return (
    <figure className="rounded-[2rem] rounded-tl-[4rem] border border-border/50 bg-card p-6 shadow-soft sm:p-8 md:p-10">
      <figcaption>
        <h3 className="font-serif text-xl font-semibold leading-snug md:text-2xl">{chart.title}</h3>
        <p className="mt-2 text-sm text-muted-foreground">{chart.subtitle}</p>
      </figcaption>

      <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2" aria-hidden="true">
        {series.map((s) => (
          <li key={s.key} className="flex items-center gap-2 text-sm font-bold text-accent-foreground">
            <span className={`h-3 w-3 rounded-sm ${s.dot}`} />
            {s.label}
          </li>
        ))}
      </ul>

      <ul className="mt-8 space-y-7">
        {chart.rows.map((row) => (
          <li key={row.category}>
            <p className="text-sm font-bold text-foreground">{row.category}</p>
            <ul className="mt-2 space-y-[2px]">
              {series.map((s) => (
                <li key={s.key} className="flex items-center gap-3">
                  <span className="sr-only">{s.label}: </span>
                  <span className="h-5 flex-1 rounded-sm bg-muted/70">
                    <span
                      className={`block h-full rounded-r-[4px] ${s.bar}`}
                      style={{ width: `${Math.max(row[s.key], 0.6)}%` }}
                    />
                  </span>
                  <span className="w-14 shrink-0 text-right text-sm font-bold tabular-nums text-accent-foreground">
                    {row[s.key].toLocaleString(locale, { minimumFractionDigits: 1 })}%
                  </span>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>

      <p className="mt-8 border-t border-border/50 pt-4 text-sm leading-relaxed text-muted-foreground">{chart.note}</p>
    </figure>
  );
}
