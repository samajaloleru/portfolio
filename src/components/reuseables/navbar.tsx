import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { List, X } from '@phosphor-icons/react';

import logo from '../../assets/images/logo.png';

const links = [
  { to: '/', label: 'Index' },
  { to: '/about', label: 'About' },
  { to: '/works', label: 'Works' },
  { to: '/contact', label: 'Contact' },
];

const lagosTime = () =>
  new Date().toLocaleTimeString('en-GB', { timeZone: 'Africa/Lagos', hour: '2-digit', minute: '2-digit' });

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [time, setTime] = useState(lagosTime);
  const { pathname } = useLocation();

  useEffect(() => {
    const t = setInterval(() => setTime(lagosTime()), 15000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-bg/70 border-b border-line">
      <nav className="max-w-[1400px] mx-auto px-5 md:px-10 h-16 flex items-center justify-between gap-6">
        <NavLink to="/" aria-label="Home">
          <img src={logo} alt="Authentic Sam" className="h-9 md:h-10 invert" />
        </NavLink>

        <div className="hidden md:flex items-center gap-1 rounded-full border border-line p-1">
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end
              className={({ isActive }) =>
                `px-4 py-1.5 rounded-full text-sm transition-colors duration-300 ${
                  isActive ? 'bg-fg text-bg' : 'text-muted hover:text-fg'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3 font-mono text-xs text-muted tabular-nums">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-accent opacity-60 animate-ping" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          Lagos {time}
        </div>

        <button
          className="md:hidden text-fg p-2 -mr-2"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <List size={24} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden fixed inset-x-0 top-16 h-[calc(100dvh-4rem)] bg-bg px-5 py-10 flex flex-col">
          {links.map(({ to, label }, i) => (
            <NavLink
              key={to}
              to={to}
              end
              style={{ '--d': `${i * 70}ms` } as React.CSSProperties}
              className={({ isActive }) =>
                `rise flex items-baseline gap-4 border-b border-line py-5 font-display text-5xl ${
                  isActive ? 'italic text-accent' : 'text-fg'
                }`
              }
            >
              <span className="font-mono text-xs text-muted not-italic">{String(i + 1).padStart(2, '0')}</span>
              {label}
            </NavLink>
          ))}
          <div className="mt-auto font-mono text-xs text-muted">Lagos {time} · Open to new work</div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
