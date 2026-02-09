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
            <p>I’m a front-end developer with a strong focus on creating clean, efficient, and user-centered web solutions. I combine technical precision with thoughtful design to build interfaces that are both functional and visually engaging. With a proven track record in developing top-notch solutions, I have successfully completed several projects. Check out some of my works in the projects section. Each project reflects my commitment to quality, functionality, and innovation.</p>
            <p>Beyond coding, I enjoy exploring technical innovations, engaging with the developer community, and continuously improving through study and reading. I’m also passionate about chess, which strengthens my strategic thinking and problem-solving skills.</p>
            <p>I’m always eager to collaborate on meaningful projects and help create digital solutions that align with clear goals and strong brand identity.</p>
          </motion.div>
   
          <motion.div
           className="about-image-container"
           initial={{ opacity:0, scale:0.2, skewX:-10 }}
           whileInView={{ opacity:1, scale:1, skewX:-10  }}
           viewport={{once:true}}
           transition={{ duration: 1.5, delay:0.5, ease: "easeOut" }}
          >
            <img className="about-image" src="/resources/about-image.png" alt="About Me" />
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