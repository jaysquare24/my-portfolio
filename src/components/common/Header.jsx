export const Header = () => {
    return(
        <header>
            <p className="openToWork-tag"><span></span>Open to work</p>
            <p className="name"><a href="/">J.O Olajide</a></p>
            <nav>
              
                <ul style={{display:"flex", listStyle:"none", gap:"1rem"}}>
                    <li><a href="/">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#services">Services</a></li> 
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contacts">Contacts</a></li>
                </ul>
            </nav>
        </header>
    )
}