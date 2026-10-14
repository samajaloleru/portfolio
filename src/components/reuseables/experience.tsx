import { useState } from "react";
import { Plus } from "@phosphor-icons/react";
import { experienceList } from "../../utils/experience";

const Experience = () => {
  const [open, setOpen] = useState(0);

  return (
    <section className="flex flex-col gap-8">
      <h2 className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">Experience</h2>
      <ol className="border-t border-line">
        {experienceList.map((exp, i) => {
          const isOpen = open === i;
          return (
            <li key={exp.company} className="border-b border-line">
              <button
                onClick={() => setOpen(isOpen ? -1 : i)}
                aria-expanded={isOpen}
                className="group w-full grid grid-cols-[1fr_auto] md:grid-cols-[9rem_1fr_auto] items-center gap-x-6 gap-y-1 py-6 text-left"
              >
                <span className="font-mono text-xs text-muted tabular-nums">{exp.year}</span>
                <span className="col-start-1 md:col-start-2 text-2xl md:text-3xl tracking-tight group-hover:text-accent transition-colors">
                  {exp.company}
                </span>
                <Plus
                  size={20}
                  className={`row-span-2 md:row-span-1 col-start-2 md:col-start-3 row-start-1 transition-transform duration-500 ${isOpen ? "rotate-45 text-accent" : "text-muted"}`}
                />
              </button>
              {/* grid-rows trick animates height without measuring */}
              <div className={`grid transition-[grid-template-rows] duration-500 ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                <div className="overflow-hidden">
                  <div className="md:pl-[10.5rem] pb-8 flex flex-col gap-3">
                    <span className="font-display italic text-xl text-accent">{exp.role}</span>
                    <p className="text-fg/70 leading-relaxed max-w-[62ch]">{exp.description}</p>
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ol>
    </section>
  );
};

export default Experience;
