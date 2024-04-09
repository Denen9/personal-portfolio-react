import React, { useState } from "react";
import "./Projects.css";
import Card from "../../components/Card/Card";
import ContactBanner from "../../components/ContactBanner/ContactBanner";
import { motion } from "framer-motion";

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
        <motion.h1 
          className="projectsHeroTitle"
          initial={{ opacity: 0, y: -80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          >Showroom
        </motion.h1>
      </div>
      <div className="projectsCardBox">

        <div className="projectsCardTitleContainer">
          <p className="projectsCardTitle">Explora mis Sitios Web.</p>
        </div>

        <div>
          <div className="projectsFilterContainer">
            <div
              className="projectsFilter"
              onClick={() => handleFilterClick(null)}
            >
              Todos ({projects.length})
            </div>
            <div
              className="projectsFilter"
              onClick={() => handleFilterClick("e-commerce")}
            >
              eCommerce ({countProjectsByCategory("e-commerce")})
            </div>
            <div
              className="projectsFilter"
              onClick={() => handleFilterClick("landing page")}
            >
              Landing Page ({countProjectsByCategory("landing page")})
            </div>
            <div
              className="projectsFilter"
              onClick={() => handleFilterClick("portfolio")}
            >
              Portfolio ({countProjectsByCategory("portfolio")})
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
      <ContactBanner></ContactBanner>
    </section>
  );
}

export default Projects;
