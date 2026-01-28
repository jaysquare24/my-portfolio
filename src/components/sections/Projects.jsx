export const Projects = () => {
    return (
    <section id="projects" style={{ minHeight: "100vh", padding: "2rem" }}>
      <div className="projects-container container">
        <div className="header-section">
          <h2>Selected Projects</h2>
          <p>A selection of projects that reflect my approach to problem-solving, usability, and technical execution.</p>
        </div>
        <div className="projects-list">
          <div className="project-item">
            <h2>Project One</h2>
            <p>A brief description of Project One.</p>
          </div>
          <div className="project-item">
            <h2>Project Two</h2>
            <p>A brief description of Project Two.</p>
          </div>
          <div className="project-item">
            <h2>Project Three</h2>
            <p>A brief description of Project Three.</p>
          </div>
        </div>
      </div>

    </section>
  );
}