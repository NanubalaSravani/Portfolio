import { projects } from '../data/portfolio';
import { ProjectCard } from './ProjectCard';
import { ScaleFocusCarousel } from './ScaleFocusCarousel';
import './Projects.css';

export function Projects() {
  return (
    <section id="projects" className="section projects-section" aria-labelledby="projects-title">
      <div className="container">
        <header className="projects-header">
          <p className="projects-eyebrow label-mono">Selected Projects</p>
          <h2 id="projects-title" className="font-serif projects-title">
            Professional Roles &amp; Projects
          </h2>
          <p className="projects-intro">
            Ten-plus shipped projects across ML, computer vision, NLP, and product — hover or swipe
            to focus each artifact. Active cards scale up; siblings recede for spatial clarity.
          </p>
        </header>

        <ScaleFocusCarousel ariaLabel="Selected projects carousel">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </ScaleFocusCarousel>
      </div>
    </section>
  );
}
