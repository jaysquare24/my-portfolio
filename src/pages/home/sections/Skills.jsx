import { skillIcons } from "../../../data/skillIcons";
import { motion } from "framer-motion"; 

const duplicateIcons = [...skillIcons, ...skillIcons, ...skillIcons];

export const Skills = () => {
    return (
    <section id="skills" className="skills-section">
     <div className="skills-bg">
        <div className="skills-track">
          {duplicateIcons.map((icon, index) => (
            <img
              key={index}
              src={icon}
              alt=""
              className="skill-icon"
            />
          ))}
        </div>
     </div>


      <div className="skills-container container">
        <motion.h2 className="section-title"
          initial={{opacity:0, x:-40}}
          whileInView={{x:0, opacity:1}}
          transition={{ duration: 1.5,  ease: "easeOut" }}

        >
          Skills
        </motion.h2>
        <motion.div className="skills-cards"
          initial={{opacity:0, x:-100}}
          whileInView={{x:0, opacity:1}}
          viewport={{once:true}}
          transition={{ duration: 1.5, delay:0.7, ease: "easeOut" }}
        >
          <img className="decorative-shape shape2" src="/resources/style-icon1.svg" alt="Decorative Shape 2" />
          <div className="skills-card">
            <h3 className="skill-card-header"><span>Core Technologies</span></h3>

            <ul> 
              <li><span></span><p>HTML, CSS, JavaScript (ES6+), Tailwind CSS</p></li> 
              <li><span></span><p>React.js, Next.js, Redux Toolkit, Vite</p></li> 
              <li><span></span><p>Java, Spring Boot, Spring Data JPA</p></li> 
              <li><span></span><p>RESTful APIs and Backend Development</p></li> 
              <li><span></span><p>MySQL and Database Management</p></li> 
              <li><span></span><p>Git and GitHub</p></li> 
              <li><span></span><p>Postman, PuTTY, and FileZilla</p></li>
            </ul>

          </div>

          <div className="skills-card">
            <h3 className="skill-card-header"><span>Soft / Domain Skills</span></h3>
            <ul> 
              <li><span></span><p>API Integration and Testing with Postman</p></li>
              <li><span></span><p>Payment and Financial System Integrations</p></li>
              <li><span></span><p>ISO 20022 and NIBSS/NPS Messaging</p></li> 
              <li><span></span><p>Database Design, Queries, and Transaction Management</p></li> 
              <li><span></span><p>Debugging and Problem Solving</p></li> 
              <li><span></span><p>Agile Development and Team Collaboration</p></li>
              <li><span></span><p>UI/UX Collaboration and Responsive Design</p></li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}