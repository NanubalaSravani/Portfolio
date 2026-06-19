import { useEffect, useRef } from 'react';
import { metrics } from '../data/portfolio';
import './Achievements.css';

export function Achievements() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const cards = section.querySelectorAll('.achievement-card');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('is-visible');
        });
      },
      { threshold: 0.15 },
    );
    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="section achievements" aria-labelledby="achievements-title">
      <div className="container">
        <header className="achievements-header">
          <h2 id="achievements-title" className="font-serif achievements-title">
            Key Achievements
          </h2>
          <div className="section-divider" />
        </header>

        <div className="achievements-grid">
          {metrics.map((metric) => (
            <article
              key={metric.label}
              className={`achievement-card academic-card ${metric.wide ? 'achievement-card--wide' : ''}`}
            >
              <span className="material-symbols-outlined achievement-icon">{metric.icon}</span>
              <h3 className="font-serif achievement-value">{metric.value}</h3>
              <h4 className="achievement-label">{metric.label}</h4>
              <p className="achievement-caption">{metric.caption}</p>
              {metric.tags && (
                <div className="achievement-tags">
                  {metric.tags.map((tag) => (
                    <span key={tag} className="achievement-tag label-mono">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
