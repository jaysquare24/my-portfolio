import { Hero } from "./sections/Hero";
import { About } from "./sections/About";
import { Skills } from "./sections/Skills";
import { Projects } from "./sections/Projects";
import { Services } from "./sections/Services";
import { Contacts } from "./sections/Contacts";


export const Home = () => {
    return(
        <div className="home-page">
            <Hero />
            <About />
            <Skills />
            <Projects />
             <Services />
            <Contacts />
        </div>
    )
}