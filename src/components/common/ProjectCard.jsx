export const ProjectCard = ({
  title,
  imgUrl,
  bgImageUrl,
  description,
  stack = [],
  links = [],
}) => {
  return (
    <div className="project-card">
      
      <div className="project-image-container">
        <div className="overlay"></div>

        {bgImageUrl && (
          <img
            className="project-image-bg"
            src={bgImageUrl}
            alt="Project Background"
          />
        )}

        {imgUrl && (
          <img className="project-image" src={imgUrl} alt={title} />
        )}

        <h4 className="project-title">{title}</h4>
      </div>

      {description && (
        <div className="project-details-content">
          <p className="project-description">{description}</p>

          {stack.length > 0 && (
            <>
            <h5>Stack</h5>
            <div className="project-stack">
              {stack.map((tech, index) => (
                <p key={index} className="project-stack-item"><span>{tech}</span></p>
              ))}
            </div>
            </>
          )}

          {links.length > 0 && (
            <div className="project-links">
              {links.map((link, index) => (
                
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                 <span>{link.name}</span>
                </a>
              
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
