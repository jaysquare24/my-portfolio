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
          <button 
          className=" btn"><span>Book a call</span></button>
          <button className=" btn"
          onClick={() => window.location = 'mailto:devjamiuolajide@gmail.com'}
          ><span>Send a mail</span></button>
       </motion.div>
             
       
      </div>
    </section>
  );
}