import { skillList } from "../../utils/skills";

const Skills = () => (
  <section className="flex flex-col gap-8">
    <h2 className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">Stack / {skillList.length} tools</h2>
    <ul className="grid grid-cols-2 sm:grid-cols-3 border-l border-t border-line">
      {skillList.map((skill, i) => (
        <li
          key={skill.name}
          className="group relative border-r border-b border-line p-5 aspect-[5/3] flex flex-col justify-between overflow-hidden"
        >
          <span className="font-mono text-[11px] text-muted">{String(i + 1).padStart(2, "0")}</span>
          <span className="text-xl md:text-2xl tracking-tight transition-transform duration-500 group-hover:-translate-y-1">{skill.name}</span>
          <span className="absolute inset-x-0 bottom-0 h-0.5 bg-accent origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100" />
        </li>
      ))}
    </ul>
  </section>
);

export default Skills;
