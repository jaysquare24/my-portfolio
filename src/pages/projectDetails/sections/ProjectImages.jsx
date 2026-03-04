export const ProjectImages = ({imagesUrl = [], title }) => {   

    const images = imagesUrl.length > 0 ? imagesUrl.filter(url => url !== imagesUrl[1] && url !== imagesUrl[2]) : []; 
    return (
        <section className="project-images-section">
            {images.length > 0 && (
            <div className="project-screenshots container">
                <div className="project-screenshots-container">
                {images.map((url, index) => (
                    <div key={index} className="screenshot-wrapper">
                    <img key={index} className="project-screenshot" src={url} alt={`${title} Screenshot ${index + 1}`} loading="lazy" />
                    </div>
                ))}
                </div>
            </div>
            )}
        </section>
    );
}