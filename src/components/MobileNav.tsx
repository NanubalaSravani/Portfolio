import { useEffect, useState } from 'react';
import { navLinks } from '../data/portfolio';
import './MobileNav.css';

export function MobileNav() {
  const [active, setActive] = useState('#hero');

  useEffect(() => {
    const sections = navLinks.map((l) => document.querySelector(l.href)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { threshold: 0.35 },
    );
    sections.forEach((s) => observer.observe(s!));
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="mobile-nav" aria-label="Mobile navigation">
      {navLinks.map((link) => {
        const isActive = active === link.href;
        return (
          <a
            key={link.href}
            href={link.href}
            className={`mobile-nav-link ${isActive ? 'is-active' : ''}`}
          >
            <span className={`material-symbols-outlined ${isActive ? 'filled' : ''}`}>
              {link.icon}
            </span>
            <span>{link.label}</span>
          </a>
        );
      })}
    </nav>
  );
}
