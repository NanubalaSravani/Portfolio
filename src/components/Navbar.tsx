import { useState } from 'react';
import { hero, navLinks } from '../data/portfolio';
import { ThemeToggle } from './ThemeToggle';
import './Navbar.css';

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar-inner container">
        <a href="#hero" className="navbar-brand" onClick={() => setMenuOpen(false)}>
          <span className="navbar-avatar" aria-hidden>NS</span>
          <span className="navbar-name font-serif">Nanubala Sravani</span>
        </a>

        <nav className={`navbar-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Main navigation">
          <ul className="navbar-links">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={() => setMenuOpen(false)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="navbar-tools">
            <a href={hero.githubUrl} className="navbar-resume btn-outline" target="_blank" rel="noopener noreferrer">
              <span className="material-symbols-outlined">description</span>
              <span className="navbar-resume-label">GitHub</span>
            </a>
            <ThemeToggle />
          </div>
        </nav>

        <button
          type="button"
          className={`navbar-toggle ${menuOpen ? 'is-open' : ''}`}
          onClick={() => setMenuOpen((o) => !o)}
          aria-expanded={menuOpen}
          aria-label="Toggle navigation menu"
        >
          <span className="material-symbols-outlined">{menuOpen ? 'close' : 'menu'}</span>
        </button>
      </div>
    </header>
  );
}
