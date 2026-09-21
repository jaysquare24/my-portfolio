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
          
            <p>
              I’m a software developer focused on building modern, reliable, and
              user-centered web applications. My experience spans both frontend and
              backend development, working with technologies such as React, Next.js,
              Java, and Spring Boot to build responsive interfaces, RESTful APIs, and
              scalable backend systems.

              I’ve worked on projects ranging from web applications and learning
              platforms to financial and banking systems, where I’ve gained practical
              experience with API integration, databases, payment services, and
              transaction workflows.

              Beyond coding, I’m constantly learning, exploring new technologies, and
              improving through hands-on projects and collaboration. I enjoy solving
              problems, understanding how systems work beneath the surface, and turning
              ideas into practical products. I’m also passionate about chess, which
              continues to sharpen my strategic thinking and problem-solving approach.
            </p>


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
          <a className="btn "  href="./resources/Jamiu_Olajide_Resume.pdf" target="_blank" rel="noopener noreferrer"><span>My Resume</span></a>
        </motion.div>
      </div>
    </section>
  );
}