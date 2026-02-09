import {motion} from "framer-motion";

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
          <motion.p className="project-description"
            initial={{opacity:0, y:40}} 
            animate={{y:0, opacity:0.7}}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            {description}
          </motion.p>

          {stack.length > 0 && (
            <>
            <motion.h3 className="project-stack-title"
              initial={{opacity:0, y:40}} 
              animate={{y:0, opacity:1}}
              transition={{ duration: 1.5, delay:0.5, ease: "easeOut" }}
            >
              Stack
            </motion.h3>
            <motion.div 
              className="project-stack"
              initial={{opacity:0, y:40}} 
              animate={{y:0, opacity:1}}
              transition={{ duration: 1.5, delay:1, ease: "easeOut" }}
            >
              {stack.map((tech, index) => (
                <p key={index} className="project-stack-item"><span>{tech}</span></p>
              ))}
            </motion.div>
            </>
          )}

          {links.length > 0 && (
            <motion.div className="project-links"
              initial={{opacity:0, y:40}} 
              animate={{y:0, opacity:1}}
              transition={{ duration: 1.5, delay:1.5, ease: "easeOut" }}
            >
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
            </motion.div>
          )}
        </div>
      )}
    </div>
  );
};
