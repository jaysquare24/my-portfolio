export const Footer = () => {
    return(
        <footer> 
            <div className="footer-container">
                <div className="item1">
                   <p>Designed by: Odebiyi Ridwan</p>
                   <div className="socials">
                        <a href="https://twitter.com/odebiyiridwan" target="_blank" rel="noopener noreferrer">
                          <img src="/resources/x.svg" alt="Twitter" />
                        </a>
                        <a href="https://github.com/odebiyiridwan" target="_blank" rel="noopener noreferrer">
                          <img src="/resources/instagram.svg" alt="GitHub" />
                        </a>
                        <a href="https://linkedin.com/in/odebiyiridwan" target="_blank" rel="noopener noreferrer">
                          <img src="/resources/linkedin.svg" alt="LinkedIn" />
                        </a>
                  </div>
                  <p>Developed by: J.O Olajide</p>
                </div>
                <div className="item2">
                   <p>&copy; 2026 - All rights reserved.</p>
                   <p>J.O Olajide.</p>
                </div>
            </div>   
        </footer>
    )
}