export const About = () => {
    return (
    <section id="about" className="about-me">
      <div className="about-container container">
        <div className="about-content">
          <h2>About Me</h2>
          <p>I’m a front-end developer with a strong focus on creating clean, efficient, and user-centered web solutions. I combine technical precision with thoughtful design to build interfaces that are both functional and visually engaging.</p>
          <div className="button-container">
          <button className="btn"><span>My Story</span></button>
          <button className="btn"><span>Resume</span></button>
          </div>
        </div>
        <div className="about-image-container">
          <img className="about-image" src="/resources/about-image.png" alt="About Me" />
        </div>
        <img className="decorative-shape shape1" src="/resources/style-icon1.svg" alt="Decorative Shape 1" />
      </div>
      
    </section>
  );
}