import{ motion } from "framer-motion";

export const About = () => {
    return (
    <section id="about" className="about-me">
      <div className="about-container container">
        <motion.h2 
        className="section-title"
        initial={{ opacity:0, x:-40 }}
        whileInView={{x:0, opacity:1}}
        transition={{ duration: 1.5, ease: "easeOut" }}
        >About Me</motion.h2>
        <div className="about-content-container">
          <motion.div 
          
           className="about-content"
           initial={{ opacity:0, x:-40 }}
           whileInView={{x:0, opacity:1}}
           viewport={{once:true}}
           transition={{ duration: 1.5, delay:0.5, ease: "easeOut" }}
          >
           <p>I’m a front-end developer focused on building clean, efficient, and user-centered web interfaces that balance strong functionality with thoughtful design. I have completed several high-quality projects that reflect my commitment to innovation, precision, and visual appeal. Beyond coding, I actively explore new technologies, engage with the developer community, and continuously improve through learning and reading. I’m also passionate about chess, which sharpens my strategic thinking and problem-solving skills, and I’m always eager to collaborate on meaningful projects that align with clear goals and strong brand identity.</p>
          </motion.div>
   
          <motion.div
           className="about-image-container"
           initial={{ opacity:0, scale:0.2, skewX:-10 }}
           whileInView={{ opacity:1, scale:1, skewX:-10  }}
           viewport={{once:true}}
           transition={{ duration: 1.5, delay:0.5, ease: "easeOut" }}
          >
            <img className="about-image" src="/resources/about-image.png" alt="About Me"  loading="lazy"/>
          </motion.div>
          <img className="decorative-shape shape1" src="/resources/style-icon1.svg" alt="Decorative Shape 1" />
        </div>
        <motion.div className="button-container"
        initial={{ opacity:0, x:-40 }}
        whileInView={{x:0, opacity:1}}
        viewport={{once:true}}
        transition={{ duration: 1.5, delay:1, ease: "easeOut" }}
        >
          <a className="btn "  href="./resources/Maastricht Blue Minimalist Professional Resume Web Developer.pdf" target="_blank" rel="noopener noreferrer"><span>My Resume</span></a>
        </motion.div>
      </div>
    </section>
  );
}