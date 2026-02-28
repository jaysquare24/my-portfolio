import { projects } from "../../data/projects";
import { useParams } from "react-router-dom";
import { ProjectCard } from "../common/ProjectCard";
import { useNavigate } from "react-router-dom";
import { OtherProjects } from "../common/OtherProjects";

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

            <OtherProjects projects={projects.filter(p => p.slug !== slug)} />  
             
            <button className="btn goBack-btn" onClick={goBack} ><span>Go Back</span></button>


           

        </section>
    );
}