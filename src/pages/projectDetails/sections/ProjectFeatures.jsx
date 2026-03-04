export const Features = ({ features = [], futureEnhancement = [], imagesUrl = [], title }) => {
  return (
    <section className="project-features-section">
      {features.length > 0 && (
      <div className="features-enhancement-wrapper container">
        <div className="features-container">
          <div className="features">
            <h3 className="project-features-title feature-enhancement-header"><span>Features</span></h3>
            <ul className="project-features">
              {features.map((feature, index) => (
                <li key={index} className="project-feature-item "> <span></span><p>{feature}</p></li>
              ))}
            </ul>
          </div>
          <div className="aside-image-container">
            {imagesUrl.length > 0 && (
              <img className="aside-image" src={imagesUrl[1]} alt={title} />
            )}

          </div>
        </div>

        <div className="enhancement-container">
          <div className="enhancement">
            <h3 className="project-enhancement-title feature-enhancement-header"><span>Future Enhancement</span></h3>
            <ul className="project-enhancement">
              {futureEnhancement.map((enhancement, index) => (
                <li key={index} className="project-enhancement-item"><span></span><p>{enhancement}</p></li>
              ))}
            </ul>
          </div>
          <div className="aside-image-container">
            {imagesUrl.length > 1 && (
              <img className="aside-image" src={imagesUrl[2]} alt={title} />
            )}
          </div>
        </div>
      </div>
    )}
    </section>
 );
};