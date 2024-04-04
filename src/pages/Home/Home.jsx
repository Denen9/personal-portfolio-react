import React from "react";
import Hero from "../../components/Hero/Hero";
import Presentation from "../../components/Presentation/Presentation";
import ProjectsSection from "../../components/ProjectsSection/ProjectsSection";
import Services from "../../components/Services/Services";
import ContactBanner from "../../components/ContactBanner/ContactBanner";

function Home({projects, services}){
    return (
        <>
            <Hero />
            <Presentation />
            <ProjectsSection projects={projects}/>
            <Services services={services}/>
            <ContactBanner></ContactBanner>
        </>
    )
}

export default Home;