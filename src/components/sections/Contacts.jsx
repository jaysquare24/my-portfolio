import { motion } from "framer-motion";

export const Contacts = () => {

  return (
    <section id="contacts">
      <div className="contacts-container container">
        <motion.p 
          className="contact-text"
          initial={{opacity:0, y:40}}
          whileInView={{y:0, opacity:0.9}}
          viewport={{once:true}}
          transition={{ duration: 1.5, delay:0.5, ease: "easeOut" }}
        >
          Have an idea or project in mind? Let’s make it real.
        </motion.p>

        <motion.div 
        className="button-container"
        initial={{opacity:0, y:40}}
        whileInView={{y:0, opacity:1}}
        viewport={{once:true}}
        transition={{ duration: 1.5, delay:1, ease: "easeOut" }}
        >
          <a 
          className=" btn" href="https://cal.com/jamiu-olajide-wxlayz" target="_blank" rel="noopener noreferrer"><span>Book a call</span></a>
          <a className=" btn"
          href = "mailto:devjamiuolajide@gmail.com"
          ><span>Send a mail</span></a>
       </motion.div>
             
       
      </div>
    </section>
  );
}