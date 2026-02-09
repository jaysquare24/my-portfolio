import { projects } from "../../data/projects";
import { ProjectCard } from "../common/ProjectCard"; 
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const Projects = () => {
    return (
    <section id="projects" >
      <div className="projects-container container">
        <div className="header-section">
          <motion.h2 className="section-title projects-title"
            initial={{opacity:0, x:-40}}
            whileInView={{x:0, opacity:1}}
            transition={{ duration: 1.5,  ease: "easeOut" }}
          >
            Selected Projects
          </motion.h2>
          <motion.p className="projects-description"
            initial={{opacity:0, x:40}}
            whileInView={{x:0, opacity:0.7}}
            viewport={{once:true}}
            transition={{ duration: 1.5, delay:0.7, ease: "easeOut" }}
          >
            A selection of projects that reflect my approach to problem-solving, usability, and technical execution.
          </motion.p>
        </div>
        <div className="projects-grid">
          {projects.map(project => (
            <Link to={`/projects/${project.slug}`} key={project.id}>
            <ProjectCard  
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