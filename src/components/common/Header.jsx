export const Header = () => {
    return(
        <header style={{display:"flex", justifyContent:"space-evenly"}}>
            <h1><span></span>Open to work</h1>
            <nav style={{display:"flex", justifyContent:"space-around", alignItems:"center", gap:"2rem"}}>
                <p><a href="#">J.O Olajide</a></p>

                <ul style={{display:"flex", listStyle:"none", gap:"1rem"}}>
                    <li><a href="#home">Home</a></li>
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