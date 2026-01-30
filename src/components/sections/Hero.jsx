export const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <img className="hero-image" src="/resources/port-hero-image.png" alt="Hero Image" />
      <h2>Building modern, responsive, and impactful web experiences.</h2>
       <p>I’m J.O Olajide, a front-end developer focused on crafting fast, accessible, and scalable digital products that deliver real results.</p>
       <div className="button-container">
          <button className="btn-primary btn"><span>View My Work</span></button>
          <button className="btn-primary btn"><span>Get in touch</span></button>
       </div>
    </section>
  );
}