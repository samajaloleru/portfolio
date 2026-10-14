import { Link } from "react-router-dom";
import { ArrowUpRight, ArrowRight } from "@phosphor-icons/react";

import portrait from "../assets/images/background.jpeg";
import ScrollingText from "../components/reuseables/scrollingText";
import { skillList } from "../utils/skills";
import { experienceList } from "../utils/experience";
import { projects, domain, pad } from "../utils/profile";

const d = (ms: number) => ({ "--d": `${ms}ms` } as React.CSSProperties);

const ledger = [
  { value: "7+", label: "Years shipping production web apps" },
  { value: String(experienceList.length), label: "Companies, from CRM to ride-hailing" },
  { value: String(projects.length), label: "Live sites in the work index" },
  { value: "GMT+1", label: "Lagos based, working worldwide" },
];

export default function Home(): JSX.Element {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative pt-10 md:pt-16 pb-20 md:pb-28">
        <div className="rise flex flex-wrap justify-between gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-muted" style={d(0)}>
          <span>Portfolio / {new Date().getFullYear()}</span>
          <span className="hidden sm:inline">Software engineer</span>
          <span>6.5244° N, 3.3792° E</span>
        </div>

        <div className="relative mt-10 md:mt-14 grid md:grid-cols-12 gap-8 items-end">
          <h1 className="md:col-span-8 relative z-10 leading-[0.82]">
            <span className="rise block font-display font-extrabold tracking-[-0.06em] text-[21vw] md:text-[12vw] xl:text-[11rem]" style={d(80)}>
              Samson
            </span>
            <span className="rise block text-accent text-[21vw] md:text-[13vw] xl:text-[12rem] md:pl-[14%]" style={d(180)}>
              <em>Ajaloleru</em>
            </span>
          </h1>

          <figure className="rise md:col-span-4 relative md:-ml-20 w-3/4 md:w-full ml-auto" style={d(300)}>
            <div className="aspect-[3/4] max-h-[64vh] overflow-hidden rounded-[2.5rem] bg-surface">
              <img src={portrait} alt="Samson Ajaloleru" className="h-full w-full object-cover object-top grayscale hover:grayscale-0 transition-[filter] duration-700" />
            </div>
            {/* Rotating badge */}
            <Link to="/contact" aria-label="Open to work, get in touch"
              className="group absolute -left-10 -bottom-10 md:-left-14 md:-bottom-12 h-28 w-28 md:h-36 md:w-36 rounded-full bg-accent text-bg grid place-items-center">
              <svg viewBox="0 0 100 100" className="spin-slow absolute inset-0 h-full w-full" aria-hidden>
                <defs><path id="ring" d="M50,50 m-37,0 a37,37 0 1,1 74,0 a37,37 0 1,1 -74,0" /></defs>
                <text className="font-mono uppercase" fontSize="9.5" letterSpacing="2.6" fill="currentColor">
                  <textPath href="#ring">Open to work · Lagos·Remote· </textPath>
                </text>
              </svg>
              <ArrowUpRight size={28} className="transition-transform duration-300 group-hover:rotate-45" />
            </Link>
          </figure>
        </div>

        <div className="mt-12 md:mt-16 grid md:grid-cols-12 gap-8">
          <p className="rise md:col-span-6 md:col-start-2 text-lg md:text-xl leading-relaxed text-fg/80 max-w-[34rem]" style={d(380)}>
            Senior software engineer with seven years of building web products that hold up under real traffic.
            React and Next.js up front, Node.js and Laravel behind it, deployed on AWS.
          </p>
          <div className="rise md:col-span-4 md:col-start-9 flex flex-col gap-4 md:items-end md:justify-end" style={d(460)}>
            <Link to="/contact" className="group inline-flex items-center gap-3 rounded-full bg-fg text-bg pl-6 pr-2 py-2 font-medium transition-transform active:scale-[0.97]">
              Start a project
              <span className="grid place-items-center h-9 w-9 rounded-full bg-bg text-fg transition-transform duration-300 group-hover:rotate-45">
                <ArrowUpRight size={16} />
              </span>
            </Link>
            <span className="flex items-center gap-2 font-mono text-xs text-muted">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" /> Open to new work
            </span>
          </div>
        </div>
      </section>

      <ScrollingText items={skillList.map((s) => s.name)} />

      {/* Ledger */}
      <section className="py-24 md:py-32 grid grid-cols-2 lg:grid-cols-4 border-b border-line">
        {ledger.map((item, i) => (
          <div key={item.label} className={`py-6 pr-6 ${i ? "lg:border-l lg:pl-8" : ""} ${i % 2 ? "border-l pl-6" : ""} border-line`}>
            <div className="font-display text-6xl md:text-7xl tabular-nums">{item.value}</div>
            <div className="mt-3 text-sm text-muted max-w-[14rem]">{item.label}</div>
          </div>
        ))}
      </section>

      {/* Selected work */}
      <section className="pt-24 md:pt-32">
        <div className="flex items-end justify-between gap-6 mb-10">
          <h2 className="font-display text-5xl md:text-7xl leading-none">
            Selected <em className="text-accent">work</em>
          </h2>
          <Link to="/works" className="group hidden sm:flex items-center gap-2 text-sm text-muted hover:text-fg transition-colors">
            Full index <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <ol className="border-t border-line">
          {projects.slice(0, 4).map((p, i) => (
            <li key={p.url}>
              <a
                href={p.url}
                target="_blank"
                rel="noreferrer"
                className="group grid grid-cols-[3rem_1fr_auto] md:grid-cols-[6rem_1fr_1fr_auto] items-center gap-4 border-b border-line py-6 md:py-8 transition-colors hover:bg-surface"
              >
                <span className="font-mono text-xs text-muted">{pad(i + 1)}</span>
                <span className="text-2xl md:text-4xl tracking-tight transition-transform duration-500 group-hover:translate-x-3">{p.title}</span>
                <span className="hidden md:block font-mono text-xs text-muted">{domain(p.url)}</span>
                <ArrowUpRight size={22} className="text-muted transition-all duration-300 group-hover:text-accent group-hover:rotate-45" />
              </a>
            </li>
          ))}
        </ol>
        <Link to="/works" className="sm:hidden mt-6 inline-flex items-center gap-2 text-sm text-muted">
          Full index <ArrowRight size={14} />
        </Link>
      </section>

      {/* About teaser */}
      <section className="pt-32 grid md:grid-cols-12 gap-8 items-start">
        <span className="md:col-span-3 font-mono text-[11px] uppercase tracking-[0.2em] text-muted">Approach</span>
        <div className="md:col-span-8 flex flex-col gap-8">
          <p className="font-display text-3xl md:text-5xl leading-[1.1]">
            I sit between product, design and engineering, and make sure the thing we
            agreed on is <em className="text-accent">the thing that ships</em>.
          </p>
          <Link to="/about" className="group inline-flex items-center gap-2 text-sm text-muted hover:text-fg transition-colors w-fit">
            Read the full story <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </div>
  );
}
