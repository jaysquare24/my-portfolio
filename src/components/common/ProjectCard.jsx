export const ProjectCard = ({ title, imgUrl, bgImageUrl }) => {
  return (
    <div className="project-card">
        <div className="overlay"></div>
        <img className="project-card-bg" src={bgImageUrl} alt="Project Background" />
        <img className="project-image" src={imgUrl} alt={title} />
        <h4 className="project-title">{title}</h4>
    </div>
    );
}