import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <motion.img className="hero-image" src="/resources/port-hero-image.png" alt="Hero Image"
        initial={{ opacity:0, scale:0.2, y:40}}
        animate={{ opacity:1, scale:1, y:0}}
        transition={{duration: 1.5, ease: "easeOut"}}
        loading="lazy"
      />
      <motion.h2 
        initial={{ opacity:0, y:40 }} 
        animate={{ opacity:1, y:0 }} 
        transition={{duration: 1.5, ease: "easeOut"}}
      >
        Building modern, responsive, and impactful web experiences.
      </motion.h2>
      <motion.p
        initial={{opacity:0, y:40}}
        animate={{opacity:0.7, y:0}}
        transition={{duration: 1.5, delay: 0.5, ease: "easeOut"}}
      >
        I’m J.O Olajide, a front-end developer focused on crafting fast, accessible, and scalable digital products that deliver real results.
      </motion.p>
        
      <motion.p className="openToWork-tag mobile" 
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{duration: 1.5, delay: 1, ease: "easeOut"}}
      >
        <span></span>Open to work
      </motion.p>
       
      <motion.div className="button-container"
        initial={{opacity:0, y:40}}
        animate={{opacity:1, y:0}}
        transition={{duration: 1.5, delay: 1, ease: "easeOut"}}
        
      >
        <a href="#projects" className="btn-primary btn"><span>View My Work</span></a>
        <a href="#contacts"  className="btn-primary btn"><span>Get in touch</span></a>
      </motion.div>
    </section>
  );
}