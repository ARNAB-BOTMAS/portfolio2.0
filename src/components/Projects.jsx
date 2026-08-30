import { projectsData } from '../data/projects';

export default function Projects() {
  return (
    <section className="block tinted" id="projects">
      <div className="wrap reveal">
        <div className="section-head">
          <span className="eyebrow">Projects</span>
          <h2>Selected work</h2>
        </div>
        <div className="project-grid">
          {projectsData.map((project, index) => (
            <div className="project-card" key={index}>
              <div className="project-top"><span className="project-tag">{project.tag}</span></div>
              <div className="project-name">{project.title}</div>
              <p className="project-desc">{project.desc}</p>
              <div className="project-links">
                {project.demoLink ? (
                  <a href={project.demoLink} target="_blank" rel="noopener noreferrer">Live site ↗</a>
                ) : (
                  <a href={project.codeLink} target="_blank" rel="noopener noreferrer">View code</a>
                )}
                <a href={project.repoLink} target="_blank" rel="noopener noreferrer">GitHub ↗</a>
              </div>
            </div>
          ))}
        </div>
        <div className="view-all-row">
          <a href="https://github.com/ARNAB-BOTMAS?tab=repositories" target="_blank" rel="noopener noreferrer" className="btn btn-outline">See all repositories ↗</a>
        </div>
      </div>
    </section>
  );
}