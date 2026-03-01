import {motion} from "framer-motion";

export const ProjectCard = ({
  title,
  imgUrl,
  bgImageUrl,
  description,
  stack = [],
  links = [],
  features = [],
  futureEnhancement = [],
  imagesUrl = []
  
}) => {

  const images = imagesUrl.length > 0 ? imagesUrl.filter(url => url !== imagesUrl[1] && url !== imagesUrl[2]) : []; 
  return (
    <>
    <div className="project-card">
      
      <div className="project-image-container">
        <div className="overlay"></div>

        {bgImageUrl && (
          <img
            className="project-image-bg"
            src={bgImageUrl}
            alt="Project Background"
            loading="lazy"
          />
        )}

        {imgUrl && (
          <div className="project-image-wrapper">
           <img className="project-image" src={imgUrl} alt={title} loading="lazy" />
          </div>
        )}

        <h4 className="project-title">{title}</h4>
      </div>

      {description && (
        <div className="project-details-content">
          <motion.h3 className="project-overview-title"
            initial={{opacity:0, y:40}} 
            animate={{y:0, opacity:1}}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            Overview
          </motion.h3>
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
                  className="btn"
                >
                 <span>{link.name}</span>
                </a>
              
              ))}
            </motion.div>
          )}
        </div>
      )}
    </div>
   
    {features.length > 0 && (
      <div className="features-enhancement-wrapper">
        <div className="features-container">
          <div className="features">
            <h3 className="project-features-title feature-enhancement-header"><span>Features</span></h3>
            <ul className="project-features">
              {features.map((feature, index) => (
                <li key={index} className="project-feature-item "> <span></span><p>{feature}</p></li>
              ))}
            </ul>
          </div>
          <div className="aside-image-container">
            {imagesUrl.length > 0 && (
              <img className="aside-image" src={imagesUrl[1]} alt={title} />
            )}

          </div>
        </div>

        <div className="enhancement-container">
          <div className="enhancement">
            <h3 className="project-enhancement-title feature-enhancement-header"><span>Future Enhancement</span></h3>
            <ul className="project-enhancement">
              {futureEnhancement.map((enhancement, index) => (
                <li key={index} className="project-enhancement-item"><span></span><p>{enhancement}</p></li>
              ))}
            </ul>
          </div>
          <div className="aside-image-container">
            {imagesUrl.length > 1 && (
              <img className="aside-image" src={imagesUrl[2]} alt={title} />
            )}
          </div>
        </div>
      </div>
    )}

    {images.length > 0 && (
      <div className="project-screenshots container">
        <div className="project-screenshots-container">
          {images.map((url, index) => (
            <div key={index} className="screenshot-wrapper">
              <img key={index} className="project-screenshot" src={url} alt={`${title} Screenshot ${index + 1}`} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    )}
    </>
  );
};
