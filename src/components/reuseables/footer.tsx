import { Link } from 'react-router-dom';
import { ArrowUp } from '@phosphor-icons/react';
import { EMAIL, socials } from '../../utils/profile';

const Footer = () => (
  <footer className="mt-32 border-t border-line overflow-hidden">
    <div className="max-w-[1400px] mx-auto px-5 md:px-10 pt-14 pb-8 flex flex-col gap-12">
      <div className="flex flex-col md:flex-row justify-between gap-10">
        <div className="flex flex-col gap-3">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted">Have a project in mind?</span>
          <Link to="/contact" className="group font-display text-4xl md:text-6xl leading-none">
            Start a <em className="text-accent group-hover:underline underline-offset-8 decoration-1">conversation</em>
          </Link>
        </div>
        <div className="flex flex-col gap-2 text-sm md:items-end">
          <a href={`mailto:${EMAIL}`} className="hover:text-accent transition-colors">{EMAIL}</a>
          {socials.map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className="text-muted hover:text-fg transition-colors">
              {s.label} ↗
            </a>
          ))}
        </div>
      </div>

      <div className="font-display italic text-outline leading-[0.8] text-[22vw] md:text-[17vw] tracking-tight select-none -mb-[4vw]" aria-hidden>
        Ajaloleru
      </div>

      <div className="flex justify-between items-center font-mono text-xs text-muted">
        <span>© {new Date().getFullYear()} Samson Ajaloleru. Lagos, NG.</span>
        <a href="#main" className="flex items-center gap-2 hover:text-fg transition-colors">
          Back to top <ArrowUp size={14} />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
