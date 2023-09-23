import React from "react";
import Hero from "../../components/Hero/Hero";
import Presentation from "../../components/Presentation/Presentation";
import ProjectsSection from "../../components/ProjectsSection/ProjectsSection";
import Services from "../../components/Services/Services";

function Home({projects}){
    return (
        <>
            <Hero />
            <Presentation />
            <ProjectsSection projects={projects}/>
            <Services />
        </>
    )
}

export default Home;