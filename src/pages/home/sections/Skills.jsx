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
          <div className="skills-card"

          >
            <h3 className="skill-card-header"><span>Core Technologies</span></h3>
            <ul>
              <li><span></span><p>HTML, CSS,JavaScript (ES6+)</p></li>
              <li><span></span><p>React.js, Redux, Vite</p></li>
              <li><span></span><p>Resful APIs and Data Integration</p></li>
              <li><span></span><p>Responsive and Adaptive Design</p></li>
              <li><span></span><p>Version Control with Git and GitHub</p></li>
            </ul>
          </div>

          <div className="skills-card">
            <h3 className="skill-card-header"><span>Soft / Domain Skills</span></h3>
            <ul>
              <li><span></span><p>UI/UX collaboration and design systems</p></li>
              <li><span></span><p>Agile development practices</p></li>
              <li><span></span><p>Testing and debugging</p></li>
              <li><span></span><p>Communication and teamwork</p></li>
              <li><span></span><p>Time management and organization</p></li>
              <li><span></span><p>Web performance optimization</p></li>
              <li><span></span><p>Accessibility (WCAG compliance)</p></li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}