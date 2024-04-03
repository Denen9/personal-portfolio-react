import React, { useState } from "react";
import "./Projects.css";
import ProjectsGrid from "../../components/ProjectsGrid/ProjectsGrid";
import Card from "../../components/Card/Card";
import Plx from "react-plx";

function Projects({ projects }) {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleFilterClick = (category) => {
    setSelectedCategory(category);
  };

  const countProjectsByCategory = (category) =>
    projects.filter((project) => project.categoria === category).length;

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
                  property: "translateX",
                },
                {
                  startValue: 0.2,
                  endValue: 1,
                  property: "scale",
                },
              ],
            },
          ]}
          style={{
            position: "relative",
            left: 0,
            top: 0,
            width: "100%",
          }}
        >
          <h3>MIS PROYECTOS</h3>
        </Plx>
        <div>
          <div className="projectsFilterContainer">
            <div
              className="projectsFilter"
              onClick={() => handleFilterClick(null)}
            >
              TODOS ({projects.length})
            </div>
            <div
              className="projectsFilter"
              onClick={() => handleFilterClick("e-commerce")}
            >
              ECOMMERCE ({countProjectsByCategory("e-commerce")})
            </div>
            <div
              className="projectsFilter"
              onClick={() => handleFilterClick("landing page")}
            >
              LANDING PAGE ({countProjectsByCategory("landing page")})
            </div>
            <div
              className="projectsFilter"
              onClick={() => handleFilterClick("react")}
            >
              REACT ({countProjectsByCategory("react")})
            </div>
            <div
              className="projectsFilter"
              onClick={() => handleFilterClick("javaScript")}
            >
              JAVA SCRIPT ({countProjectsByCategory("javaScript")})
            </div>
          </div>
        </div>
        <div className="cardsContainer">
          {projects
            .filter(
              (project) =>
                !selectedCategory || project.categoria === selectedCategory
            )
            .map((project) => (
              <Card key={project.id} project={project} />
            ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
