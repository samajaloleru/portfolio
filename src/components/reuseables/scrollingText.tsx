import React from "react";

interface ScrollTextProps {
  items: string[];
}

// Content is doubled and translated -50% so the loop is seamless.
const ScrollingText: React.FC<ScrollTextProps> = ({ items }) => (
  <div className="w-full overflow-hidden border-y border-line py-6 [mask-image:linear-gradient(90deg,transparent,#000_10%,#000_90%,transparent)]">
    <div className="marquee flex w-max">
      {[...items, ...items].map((item, i) => (
        <span key={i} className="flex items-center font-display text-4xl md:text-6xl whitespace-nowrap">
          <span className={i % 2 ? "italic text-muted" : ""}>{item}</span>
          <span className="mx-8 text-accent text-2xl" aria-hidden>✳</span>
        </span>
      ))}
    </div>
  </div>
);

export default ScrollingText;
