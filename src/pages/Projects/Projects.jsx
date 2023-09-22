import React from "react";
import "./Projects.css"
import ProjectsGrid from "../../components/ProjectsGrid/ProjectsGrid";
import Card from "../../components/Card/Card";
import Plx from "react-plx";


function Projects({projects}){
    return (
        <section className="projectsContainer">
            <div className="gridContainer">
                <ProjectsGrid projects={projects} />
            </div>
            <div className="projectsCardBox">
            <Plx 
                parallaxData={[
                    {
                    start: 0,
                    end: 700,
                    easing: "ease-in",
                    properties: [
                        {
                        startValue: -800,
                        endValue: 1,
                        property: "translateX"
                        },
                        {
                            startValue: 0.2,
                            endValue: 1,
                            property: "scale"
                        }
                    ]
                    }
                ]}
                style={{
                    position: "relative",
                    left: 0,
                    top: 0,
                    width: "100%",
                }} 
                 >
                <h3>TODOS LOS PROYECTOS</h3>
                </Plx>
                {projects.map((project) => (
                    <Card key={project.id} project={project} />
                ))}
            </div>
            
        </section>
        
    )
}
export default Projects;