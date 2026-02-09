import { useState } from "react";   

export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return(
        <header>
            <p className="openToWork-tag"><span></span>Open to work</p>
            <p className="name"><a href="/">J.O Olajide</a></p>
            <nav className={`nav-links ${isMenuOpen ? "open-menu" : ""}`}>
                <ul className="header-links-container" >
                    <li><a href="/">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#services">Services</a></li> 
                    <li><a href="#projects">Projects</a></li>
                </ul>
            </nav>
            <img onClick={toggleMenu} className="menu-icon" src="/resources/icons8-fries-menu-48.png" alt="Menu Icon" />
        </header>
    )
}