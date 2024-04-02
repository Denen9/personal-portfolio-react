import React from "react";
import Hero from "../../components/Hero/Hero";
import Presentation from "../../components/Presentation/Presentation";
import ProjectsSection from "../../components/ProjectsSection/ProjectsSection";
import Services from "../../components/Services/Services";

function Home({projects, services}){
    return (
        <>
            <Hero />
            <Presentation />
            <ProjectsSection projects={projects}/>
            <Services services={services}/>
        </>
    )
}

export default Home;