import type { Project } from '../data/portfolio';
import './ProjectCard.css';

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="project-card academic-card">
      {project.flagship && <span className="project-card-ribbon label-mono">Flagship</span>}

      <header className="project-card-header">
        <div className="project-card-header-top">
          <span className="project-card-category label-mono">{project.category}</span>
          <div className="project-card-actions-top">
            {project.liveDemoUrl && (
              <a
                href={project.liveDemoUrl}
                className="project-card-repo"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo ↗
              </a>
            )}
            <a
              href={project.repoUrl}
              className="project-card-repo"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Repository ↗
            </a>
          </div>
        </div>
        <h3 className="font-serif project-card-title">{project.title}</h3>
        <p className="project-card-meta label-mono">
          {project.period} · {project.department}
        </p>
      </header>

      <div className="project-card-divider" />

      <div className="project-card-body">
        <div className="project-card-col">
          <div className="project-card-section">
            <h4 className="project-card-label label-mono">Context / Problem</h4>
            <p>{project.context}</p>
          </div>
          <div className="project-card-section">
            <h4 className="project-card-label label-mono">Objective</h4>
            <p>{project.objective}</p>
          </div>
        </div>

        <div className="project-card-col">
          <div className="project-card-section">
            <h4 className="project-card-label label-mono">My Role &amp; Key Actions</h4>
            <p>{project.role}</p>
          </div>
          <div className="project-card-section">
            <h4 className="project-card-label label-mono">Tools &amp; Methodology</h4>
            <div className="project-card-tags">
              {project.tools.map((tool) => (
                <span key={tool} className="project-card-tag">
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="project-card-divider" />

      <footer className="project-card-footer">
        <div className="project-card-col">
          <h4 className="project-card-outcome-label">Outcome</h4>
          <p className="project-card-outcome">{project.outcome}</p>
        </div>
        <div className="project-card-col">
          <h4 className="project-card-outcome-label">Skills Demonstrated</h4>
          <div className="project-card-skills">
            {project.skills.map((skill) => (
              <span key={skill} className="project-card-skill">
                {skill}
              </span>
            ))}
          </div>
          {project.quote && (
            <blockquote className="project-card-quote">&ldquo;{project.quote}&rdquo;</blockquote>
          )}
        </div>
      </footer>
    </article>
  );
}
