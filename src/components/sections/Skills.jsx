import { skillIcons } from "../../data/skillIcons";

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
        <h2 className="section-title">Skills</h2>
        <div className="skills-cards">
          <img className="decorative-shape shape2" src="/resources/style-icon1.svg" alt="Decorative Shape 2" />
          <div className="skills-card">
            <h3 className="skill-card-header"><span>Core Technologies</span></h3>
            <ul>
              <li><span></span>HTML, CSS,JavaScript (ES6+)</li>
              <li><span></span>React.js, Redux, Vite</li>
              <li><span></span>Resful APIs and Data Integration</li>
              <li><span></span>Responsive and Adaptive Design</li>
              <li><span></span>Version Control with Git and GitHub</li>
            </ul>
          </div>

          <div className="skills-card">
            <h3 className="skill-card-header"><span>Soft / Domain Skills</span></h3>
            <ul>
              <li><span></span>UI/UX collaboration and design systems</li>
              <li><span></span>Agile development practices</li>
              <li><span></span>Testing and debugging</li>
              <li><span></span>Communication and teamwork</li>
              <li><span></span>Time management and organization</li>
              <li><span></span>Web performance optimization</li>
              <li><span></span>Accessibility (WCAG compliance)</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}