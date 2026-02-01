import { projects } from "../../data/projects";
import { ProjectCard } from "../common/ProjectCard"; 
import { Link } from "react-router-dom";

export const Projects = () => {
    return (
    <section id="projects" >
      <div className="projects-container container">
        <div className="header-section">
          <h2>Selected Projects</h2>
          <p>A selection of projects that reflect my approach to problem-solving, usability, and technical execution.</p>
        </div>
        <div className="projects-grid">
          {projects.map(project => (
            <Link to={`/projects/${project.slug}`}>
            <ProjectCard 
              key={project.id} 
              title={project.title} 
              imgUrl={project.imgUrl} 
              bgImageUrl={project.bgImageUrl}
            />
            </Link>
          ))}
        </div>
      </div>

    </section>
  );  
}