import React, { useState } from "react";
import "./ProjectsGrid.css"
import { motion } from "framer-motion";
import { BiLogoReact, BiLogoJavascript, BiLogoHtml5, BiLogoCss3 } from 'react-icons/bi'
import { FiGithub } from 'react-icons/fi'
import { GoLinkExternal } from 'react-icons/go'
import { Link } from "react-router-dom";


function ProjectsGrid({projects}){
    
    const [activeProject, setActiveProject] = useState(null);
  
    const handleToggleInfo = (id) => {
      setActiveProject(activeProject === id ? null : id);
    };

    const limitedProjects = projects.slice(0, 4);
    
    
    
    return (
        <div className="projectsBox">
        {limitedProjects.map((project) => (
            <div className={`box box${project.number}`} key={project.id}>
                <img
                    src={project.image}
                    alt={project.name}
                    className="projectImg"
                    onMouseOver={() => handleToggleInfo(project.name)}
                    />
                {activeProject === project.name && (
                <motion.div
                    className="projectInfo"
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: activeProject === project.name ? 1 : 0,
                        transition: { duration: 0.5 },
                    }}
                >
                    <h4>{project.name}</h4>
                    <p className="projectInfo__text">{project.info}</p>
                    <div className="projectIcons">
                        {project.icons.map((icon, iconIndex) => (
                            <span key={iconIndex} className="projectInfoIcons">
                            {icon.toLowerCase() === "react" && <BiLogoReact />}
                            {icon.toLowerCase() === "javascript" && <BiLogoJavascript />}
                            {icon.toLowerCase() === "html" && <BiLogoHtml5 />}
                            {icon.toLowerCase() === "css" && <BiLogoCss3 />}
                            </span>
                        ))}
                    </div>
                    <div className="projectGetContainer">
                        <Link to={project.github} className="link"><FiGithub className="projectsGet"/></Link>
                        <Link to={project.url} className="link"><GoLinkExternal className="projectsGet"/></Link>
                    </div>
                </motion.div>
            )}
        </div>
    ))}

    </div>
    )
}

export default ProjectsGrid;