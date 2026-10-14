import { FormEvent, useState } from "react";
import { ArrowUpRight, Copy, Check } from "@phosphor-icons/react";
import { EMAIL, socials } from "../utils/profile";

const d = (ms: number) => ({ "--d": `${ms}ms` } as React.CSSProperties);

const field =
  "w-full bg-transparent border-b border-line py-4 text-lg placeholder:text-muted/60 outline-none focus:border-accent transition-colors";

const details = [
  { label: "Phone", lines: [["+234 913 917 5151", "tel:+2349139175151"], ["+234 905 285 9381", "tel:+2349052859381"]] },
  { label: "Alt. mail", lines: [["ajalolerusegun@gmail.com", "mailto:ajalolerusegun@gmail.com"]] },
  { label: "Location", lines: [["Lagos, Nigeria (GMT+1)", ""]] },
];

export default function Contact(): JSX.Element {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  };

  // No backend: hand the validated message to the visitor's mail client.
  const send = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const body = `${f.get("message")}\n\n${f.get("name")}\n${f.get("email")}`;
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(String(f.get("subject")))}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="pt-14 md:pt-20">
      <span className="rise font-mono text-[11px] uppercase tracking-[0.2em] text-muted" style={d(0)}>Contact / say hello</span>
      <h1 className="rise mt-6 font-display text-[16vw] md:text-[10vw] xl:text-[9rem] leading-[0.85] tracking-tight" style={d(80)}>
        Let's build <br /><em className="text-accent">something.</em>
      </h1>

      <div className="rise mt-12 flex flex-wrap items-center gap-4" style={d(180)}>
        <a href={`mailto:${EMAIL}`} className="text-xl md:text-3xl underline underline-offset-8 decoration-line hover:decoration-accent transition-colors break-all">
          {EMAIL}
        </a>
        <button onClick={copy} className="flex items-center gap-2 rounded-full border border-line px-4 py-2 text-sm hover:border-accent transition-colors active:scale-95">
          {copied ? <><Check size={14} className="text-accent" /> Copied</> : <><Copy size={14} /> Copy</>}
        </button>
      </div>

      <div className="mt-24 grid lg:grid-cols-12 gap-16">
        <dl className="lg:col-span-4 flex flex-col">
          {details.map((item) => (
            <div key={item.label} className="grid grid-cols-[7rem_1fr] gap-4 border-t border-line py-5">
              <dt className="font-mono text-xs text-muted pt-1">{item.label}</dt>
              <dd className="flex flex-col gap-1">
                {item.lines.map(([text, href]) =>
                  href ? <a key={text} href={href} className="hover:text-accent transition-colors">{text}</a> : <span key={text}>{text}</span>
                )}
              </dd>
            </div>
          ))}
          <div className="grid grid-cols-[7rem_1fr] gap-4 border-y border-line py-5">
            <dt className="font-mono text-xs text-muted pt-1">Elsewhere</dt>
            <dd className="flex flex-col gap-1">
              {socials.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className="hover:text-accent transition-colors">{s.label} ↗</a>
              ))}
            </dd>
          </div>
        </dl>

        <form onSubmit={send} className="lg:col-span-7 lg:col-start-6 flex flex-col gap-2">
          <h2 className="font-display text-3xl md:text-4xl mb-4">Or leave a note</h2>
          <div className="grid sm:grid-cols-2 gap-x-8">
            <label className="sr-only" htmlFor="name">Full name</label>
            <input id="name" name="name" required autoComplete="name" placeholder="Your name" className={field} />
            <label className="sr-only" htmlFor="email">Email</label>
            <input id="email" name="email" type="email" required autoComplete="email" placeholder="Email address" className={field} />
          </div>
          <label className="sr-only" htmlFor="subject">Subject</label>
          <input id="subject" name="subject" required placeholder="What's it about?" className={field} />
          <label className="sr-only" htmlFor="message">Message</label>
          <textarea id="message" name="message" required rows={5} placeholder="Tell me about the project, timeline and budget" className={`${field} resize-none`} />
          <button type="submit" className="group mt-8 self-start inline-flex items-center gap-3 rounded-full bg-accent text-bg pl-6 pr-2 py-2 font-medium transition-transform active:scale-[0.97]">
            Send message
            <span className="grid place-items-center h-9 w-9 rounded-full bg-bg text-fg transition-transform duration-300 group-hover:rotate-45">
              <ArrowUpRight size={16} />
            </span>
          </button>
          <p className="font-mono text-[11px] text-muted mt-2">Opens your email app with the message filled in.</p>
        </form>
      </div>
    </div>
  );
}
