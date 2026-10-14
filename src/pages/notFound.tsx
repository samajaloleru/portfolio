import { Link } from "react-router-dom";
import { ArrowLeft } from "@phosphor-icons/react";

const NotFound = () => (
  <div className="pt-24 md:pt-32 flex flex-col items-start gap-8">
    <span className="rise font-mono text-[11px] uppercase tracking-[0.2em] text-muted">Error 404 / page not found</span>
    <h1 className="rise font-display text-[30vw] md:text-[18rem] leading-[0.8] tracking-tight" style={{ "--d": "80ms" } as React.CSSProperties}>
      4<em className="text-accent">0</em>4
    </h1>
    <p className="rise text-lg text-fg/70 max-w-[40ch]" style={{ "--d": "160ms" } as React.CSSProperties}>
      This page doesn't exist. The address may have a typo, or the page has moved.
    </p>
    <Link to="/" className="group inline-flex items-center gap-2 rounded-full border border-line px-5 py-3 hover:border-accent hover:text-accent transition-colors">
      <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" /> Back to the index
    </Link>
  </div>
);

export default NotFound;
