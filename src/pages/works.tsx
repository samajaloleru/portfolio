import { useState } from "react";
import { ArrowUpRight } from "@phosphor-icons/react";
import { projects, domain, pad } from "../utils/profile";

const d = (ms: number) => ({ "--d": `${ms}ms` } as React.CSSProperties);

export default function Works(): JSX.Element {
  const [active, setActive] = useState(0);
  const current = projects[active];

  return (
    <div className="pt-14 md:pt-20">
      <header className="grid md:grid-cols-12 gap-6 items-end mb-14 md:mb-20">
        <h1 className="rise md:col-span-8 font-display text-6xl md:text-8xl leading-[0.9] tracking-tight" style={d(0)}>
          Work <em className="text-accent">index</em>
        </h1>
        <p className="rise md:col-span-4 text-muted max-w-[34ch]" style={d(120)}>
          {projects.length} live sites, still running. Hover or pick one to load a live preview in the viewer.
        </p>
      </header>

      <div className="grid lg:grid-cols-12 gap-10">
        {/* Viewer: renders the site at 250% size and scales it down to look like a desktop screenshot */}
        <div className="rise lg:col-span-7 lg:order-2 lg:sticky lg:top-24 self-start" style={d(200)}>
          <div className="rounded-2xl border border-line bg-surface overflow-hidden shadow-[0_40px_80px_-30px_rgba(20,20,20,0.35)]">
            <div className="flex items-center gap-3 px-4 h-10 border-b border-line">
              <span className="flex gap-1.5" aria-hidden>
                <span className="h-2.5 w-2.5 rounded-full bg-line" />
                <span className="h-2.5 w-2.5 rounded-full bg-line" />
                <span className="h-2.5 w-2.5 rounded-full bg-line" />
              </span>
              <span className="flex-1 truncate rounded-md bg-bg px-3 py-1 font-mono text-[11px] text-muted">{domain(current.url)}</span>
              <a href={current.url} target="_blank" rel="noreferrer" aria-label={`Open ${current.title}`} className="text-muted hover:text-accent transition-colors">
                <ArrowUpRight size={16} />
              </a>
            </div>
            <div className="relative aspect-[16/10] overflow-hidden bg-bg">
              <div className="absolute inset-0 grid place-items-center font-mono text-xs text-muted">Loading {domain(current.url)}…</div>
              <iframe
                key={current.url}
                src={current.url}
                title={current.title}
                loading="lazy"
                tabIndex={-1}
                className="absolute top-0 left-0 w-[250%] h-[250%] origin-top-left scale-[0.4] border-0 pointer-events-none"
              />
            </div>
          </div>
          <div className="mt-4 flex justify-between font-mono text-[11px] text-muted">
            <span>No. {pad(active + 1)}: {current.title}</span>
            <span className="text-accent">● live</span>
          </div>
        </div>

        <ol className="lg:col-span-5 lg:order-1 border-t border-line">
          {projects.map((p, i) => (
            <li key={p.url} className="rise" style={d(250 + i * 60)}>
              <div
                onMouseEnter={() => setActive(i)}
                className={`group grid grid-cols-[3.5rem_1fr_auto] items-center gap-3 border-b border-line py-5 transition-colors ${active === i ? "text-fg" : "text-muted"}`}
              >
                <span className={`font-mono text-xs ${active === i ? "text-accent" : ""}`}>{pad(i + 1)}</span>
                <button onClick={() => setActive(i)} aria-pressed={active === i} className="text-left flex flex-col">
                  <span className={`text-xl md:text-2xl tracking-tight transition-transform duration-500 ${active === i ? "translate-x-2" : "group-hover:translate-x-2"}`}>
                    {p.title}
                  </span>
                  <span className="font-mono text-[11px] text-muted mt-1">{domain(p.url)}</span>
                </button>
                <a href={p.url} target="_blank" rel="noreferrer" aria-label={`Visit ${p.title}`}
                  className="grid place-items-center h-10 w-10 rounded-full border border-line hover:border-accent hover:text-accent transition-colors">
                  <ArrowUpRight size={16} />
                </a>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
