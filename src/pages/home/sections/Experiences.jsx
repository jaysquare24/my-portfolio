import { motion } from "framer-motion"; 
import { ExperienceCard } from "../../../components/common/ExperienceCard"; 
import { experiences } from "../../../data/experiences";


export const Experiences = () => {
    return(
        <section   className="skills-container container">
            <div className="header-section">
                <motion.h2 className="section-title projects-title"
                    initial={{opacity:0, x:-40}}
                    whileInView={{x:0, opacity:1}}
                    transition={{ duration: 1.5,  ease: "easeOut" }}
                >
                 My Experience
                </motion.h2>
                <motion.p className="projects-description"
                    initial={{opacity:0, x:40}}
                    whileInView={{x:0, opacity:0.7}}
                    viewport={{once:true}}
                    transition={{ duration: 1.5, delay:0.7, ease: "easeOut" }}
                >
                    A summary of my experience and contributions in professional settings.
                </motion.p>
            </div>

            <motion.div 
                className="experience-card-container"
                initial={{opacity:0, x:-100}}
                whileInView={{x:0, opacity:1}}
                viewport={{once:true}}
                transition={{ duration: 1.5, delay:0.7, ease: "easeOut" }}
            >
                <img className="decorative-shape shape2" src="/resources/style-icon1.svg" alt="Decorative Shape 2" />
            
                
                {experiences.map((experience) => (
                    <ExperienceCard 
                        key={experience.id}
                        position={experience.position}
                        duration={experience.duration}
                        workMode={experience.workMode}
                        companyName={experience.companyName}
                        contributions={experience.contributions}
                        achievements={experience.achievements}
                    />
                ))}
                
            </motion.div>
        </section>
    )
}