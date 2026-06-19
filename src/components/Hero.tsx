import { hero } from '../data/portfolio';
import './Hero.css';

export function Hero() {
  return (
    <section id="hero" className="hero section" aria-labelledby="hero-title">
      <div className="container hero-grid">
        <div className="hero-copy">
          <span className="hero-badge label-mono">{hero.badge}</span>
          <h1 id="hero-title" className="hero-headline font-serif">
            {hero.headline}
          </h1>
          <p className="hero-subheadline">{hero.subheadline}</p>
          <div className="hero-ctas">
            <a href={hero.demosHref} className="btn-primary">
              View Projects
            </a>
            <a href={hero.resumeHref} className="btn-outline">
              Get in Touch
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-portrait-wrap">
            <div className="hero-portrait">
              <span className="hero-portrait-initials font-serif">NS</span>
            </div>
            <div className="hero-stat-badge">
              <span className="hero-stat-value font-serif">{hero.statValue}</span>
              <span className="hero-stat-label label-mono">{hero.statLabel}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
