export const ExperienceCard = ({position, duration, workMode, companyName, contributions, achievements}) => {
    return(
        <div className=" experience-card">
            <div className="experience-header">
                <div className="experience-icon-container">
                    <img className="portfolio-icon" src="/resources/icons8-briefcase-48.png" alt="Company Illustration" />
                    <div>
                        <h3>{position}</h3>
                        <h4 className="company">{companyName}</h4>
                        <p className="duration"><span></span> {duration}</p>
                    </div>
                </div> 
                <p className="work-mode"><img src="/resources/icons8-location-24.png" alt="Location Illustration"/> {workMode}</p>
            </div>
            {contributions && contributions.length > 0 && (
                <div>
                    <h4 className="experience-card-header"><span>Key Contributions</span></h4>
                    <ul>
                        {contributions.map((contribution, index) => (
                            <li key={index}><span></span><p>{contribution}</p></li>
                        ))}
                    </ul>
                </div>
            )}

            {achievements && achievements.length > 0 && (
                <div className="achievements-section">
                    <h4 className="experience-card-header" ><span>Achievements</span></h4>
                    <ul className="achievements-container">
                        {achievements.map((achievement, index) => (
                            <li key={index} className="achievement">
                                <div className="achievement-icon-container">
                                    <img src={achievement.img} alt="Achievement Illustration Icon" className="achievement-icon"/>
                                </div>
                                <p className="grade">{achievement.rating}</p>
                                <p>{achievement.description}</p>
                            </li>  
                        ))}
                    </ul>
                </div>
            )}         

        </div> 
    )
}