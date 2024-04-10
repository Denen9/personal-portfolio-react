import React from "react";
import "./ProjectsSection.css";
import { Link } from "react-router-dom";
import ProjectsGrid from "../ProjectsGrid/ProjectsGrid";


function ProjectsSection({projects}) {

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <section className="projectsSection">
        <div className="projectsHeader">
            <h3 className="projectsTitle">Proyectos destacados.</h3>
            <Link to="/projects" className="projectsLink" onClick={scrollToTop}>Ver todos</Link>
        </div>
        <ProjectsGrid projects={projects}/>
    </section>
  );
}

export default ProjectsSection;
