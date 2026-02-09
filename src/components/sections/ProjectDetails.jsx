import { projects } from "../../data/projects";
import { useParams } from "react-router-dom";
import { ProjectCard } from "../common/ProjectCard";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";

export const ProjectDetails = () => {
    const navigate = useNavigate();
    const { slug } = useParams();
    const project = projects.find(p => p.slug.toLowerCase().trim() === slug.toLowerCase().trim());
    

    const goBack = () => {
        navigate(-1);
    }

    return (
        <section id="project-details" className="project-details">
            <div className="project-details-container container">
                {project? <ProjectCard {...project} />:<div>Project not found</div>}
            </div>

            <div className="other-projects-wrapper container">
                <motion.h2
                initial={{opacity:0, x:40}}
                whileInView={{x:0, opacity:1}}
                viewport={{once:true}}
                transition={{ duration: 1.5, ease: "easeOut" }}
                >Other Projects</motion.h2>
                <div className="other-project-container">
                   {[...projects, ...projects].map(project => (
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
             
            <button className="btn goBack-btn" onClick={goBack} ><span>Go Back</span></button>


           

        </section>
    );
}