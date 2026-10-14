import { Link } from "react-router-dom";
import { ArrowUpRight } from "@phosphor-icons/react";

import portrait from "../assets/images/background.jpeg";
import Experience from "../components/reuseables/experience";
import Skills from "../components/reuseables/skills";
import { socials } from "../utils/profile";

const d = (ms: number) => ({ "--d": `${ms}ms` } as React.CSSProperties);

export default function About(): JSX.Element {
  return (
    <div className="pt-14 md:pt-20 grid md:grid-cols-12 gap-12 md:gap-8">
      {/* Profile card */}
      <aside className="md:col-span-4 md:sticky md:top-28 self-start flex flex-col gap-6">
        <div className="rise group relative overflow-hidden rounded-[2rem] bg-surface aspect-[4/5]" style={d(0)}>
          <img src={portrait} alt="Samson Ajaloleru" className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-fg/85 via-fg/10 to-transparent" />
          <div className="absolute bottom-0 inset-x-0 p-6 flex flex-col gap-1 text-bg">
            <span className="font-display text-4xl">Samson Ajaloleru</span>
            <span className="text-sm text-bg/75">Senior Software Engineer</span>
          </div>
        </div>
        <dl className="rise grid grid-cols-2 gap-y-4 font-mono text-xs border-t border-line pt-6" style={d(120)}>
          <dt className="text-muted">Based in</dt><dd>Lagos, Nigeria</dd>
          <dt className="text-muted">Active since</dt><dd>2016</dd>
          <dt className="text-muted">Status</dt><dd className="text-accent">Open to work</dd>
        </dl>
        <div className="rise flex flex-wrap gap-2" style={d(200)}>
          {socials.map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noreferrer"
              className="group flex items-center gap-1 rounded-full border border-line px-4 py-2 text-sm hover:border-accent hover:text-accent transition-colors">
              {s.label} <ArrowUpRight size={12} className="transition-transform group-hover:rotate-45" />
            </a>
          ))}
        </div>
      </aside>

      <div className="md:col-span-7 md:col-start-6 flex flex-col gap-24">
        <section className="flex flex-col gap-8">
          <h1 className="rise font-display text-5xl md:text-7xl leading-[0.95] tracking-tight" style={d(60)}>
            I build software that <em className="text-accent">keeps working</em> after launch.
          </h1>
          <div className="rise flex flex-col gap-6 text-fg/75 leading-relaxed max-w-[62ch]" style={d(180)}>
            <p className="first-letter:font-display first-letter:text-7xl first-letter:float-left first-letter:mr-3 first-letter:leading-[0.8] first-letter:text-accent">
              I'm a senior software engineer with 7+ years of hands-on experience designing and delivering full-stack web
              applications. On the front end I work in React.js, Next.js, Vue.js, Nuxt.js and TypeScript, building interfaces
              that are fast, responsive and accessible. On the back end I use Node.js, Laravel and REST/GraphQL APIs to design
              scalable services, deployed with AWS, Docker and CI/CD pipelines.
            </p>
            <p>
              My work spans fintech, e-commerce and SaaS, where I've led cross-functional teams shipping products used by
              millions. I care about clean code, solid documentation and mentoring junior developers. I've migrated legacy
              systems to modern architectures, improved application performance by more than 40%, and integrated features
              like chatbots and predictive analytics.
            </p>
          </div>
          <Link to="/contact" className="w-fit text-sm underline underline-offset-8 decoration-line hover:decoration-accent transition-colors">
            Get in touch
          </Link>
        </section>

        <Experience />
        <Skills />
      </div>
    </div>
  );
}
