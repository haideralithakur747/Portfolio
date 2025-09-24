import Header from "./header";
import About from "./About";
import Home from "./Home";
import SkillsCarousel from "./skills";
import EducationExperience from "./Edu&exp";
import Projects from "./Projects";          

import "./App.css"
export default function App() {
    return(
        <>
        <Header />
        <Home />
        <About />
        <SkillsCarousel />
        <EducationExperience />
        <Projects />
        </>
    )
}