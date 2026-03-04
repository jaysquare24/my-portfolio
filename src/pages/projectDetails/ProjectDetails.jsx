import { projects } from "../../data/projects";
import { useParams } from "react-router-dom";
import { ProjectCard } from "../../components/common/ProjectCard";
import { useNavigate } from "react-router-dom";
import { Features } from "./sections/ProjectFeatures";
import { ProjectImages } from "./sections/ProjectImages";
import { OtherProjects } from "./sections/OtherProjects";

export const ProjectDetails = () => {
    const navigate = useNavigate();
    const { slug } = useParams();
    const project = projects.find(p => p.slug.toLowerCase().trim() === slug.toLowerCase().trim());
    

    const goBack = () => {
        navigate(-1);
    }

    return (
        <div id="project-details" className="project-details">
            <div className="project-details-container container">
                {project? <ProjectCard {...project} />:<div>Project not found</div>}
            </div>

            {project && <Features features={project.features} futureEnhancement={project.futureEnhancement} imagesUrl={project.imagesUrl} title={project.title} />}
            
            {project && <ProjectImages imagesUrl={project.imagesUrl} title={project.title} />}

            <OtherProjects projects={projects.filter(p => p.slug !== slug)} />  
             
            <button className="btn goBack-btn" onClick={goBack} ><span>Go Back</span></button>


           

        </div>
    );
}