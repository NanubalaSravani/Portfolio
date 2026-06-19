import { useEffect, useRef } from 'react';
import {
  certificates,
  milestones,
  skillProficiencies,
  softSkills,
} from '../data/portfolio';
import './Skills.css';

export function Skills() {
  const barsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = barsRef.current;
    if (!container) return;

    const bars = container.querySelectorAll<HTMLElement>('.skill-bar-fill');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const bar = entry.target as HTMLElement;
            bar.style.width = bar.dataset.width ?? '0%';
          }
        });
      },
      { threshold: 0.3 },
    );
    bars.forEach((bar) => observer.observe(bar));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="section skills-section" aria-labelledby="skills-title">
      <div className="container">
        <header className="skills-header">
          <h2 id="skills-title" className="font-serif skills-title">
            Competencies &amp; Achievements
          </h2>
          <div className="section-divider" />
          <p className="skills-intro">
            Technical proficiencies, certifications, and national presentation milestones earned
            through rigorous ML engineering and applied research.
          </p>
        </header>

        <div className="skills-grid">
          <div className="skills-main">
            <div className="academic-card skills-card">
              <div className="skills-card-head">
                <span className="material-symbols-outlined">terminal</span>
                <h3 className="font-serif">Technical Proficiencies</h3>
              </div>
              <div ref={barsRef} className="skill-bars-grid">
                {skillProficiencies.map((skill) => (
                  <div key={skill.name} className="skill-bar-item">
                    <div className="skill-bar-top">
                      <span className="label-mono skill-bar-cat">{skill.category}</span>
                      <span className="skill-bar-pct">{skill.percent}%</span>
                    </div>
                    <span className="skill-bar-name">{skill.name}</span>
                    <span className="skill-bar-detail">{skill.detail}</span>
                    <div className="skill-bar-track">
                      <div
                        className="skill-bar-fill"
                        data-width={`${skill.percent}%`}
                        style={{ width: '0%' }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="academic-card skills-card">
              <div className="skills-card-head">
                <span className="material-symbols-outlined">workspace_premium</span>
                <h3 className="font-serif">Certifications</h3>
              </div>
              <div className="cert-list">
                {certificates.map((cert) => (
                  <div key={cert.title} className="cert-list-item">
                    <span className="cert-period label-mono">{cert.period}</span>
                    <div>
                      <h4 className="cert-title">{cert.title}</h4>
                      <p className="cert-issuer">{cert.issuer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="academic-card skills-card">
              <div className="skills-card-head">
                <span className="material-symbols-outlined">timeline</span>
                <h3 className="font-serif">National Presentations</h3>
              </div>
              <ol className="milestone-list">
                {milestones.map((m) => (
                  <li key={m.title} className="milestone-item">
                    <span className="milestone-year label-mono">{m.year}</span>
                    <div>
                      <h4>{m.title}</h4>
                      <p>{m.description}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          <aside className="skills-side">
            <div className="academic-card skills-card">
              <div className="skills-card-head">
                <span className="material-symbols-outlined">groups</span>
                <h3 className="font-serif">Core Strengths</h3>
              </div>
              <div className="soft-skills">
                {softSkills.map((skill) => (
                  <span key={skill} className="soft-skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="skills-highlight">
              <span className="material-symbols-outlined filled">military_tech</span>
              <h3 className="font-serif">Flagship Recognition</h3>
              <p>
                RidgeVision AI presented to NHRC &amp; NCW — 90% ensemble accuracy across all 8
                blood groups.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
