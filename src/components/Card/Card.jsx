import React from "react";
import "./Card.css";
import { BiLogoReact, BiLogoJavascript, BiLogoHtml5, BiLogoCss3 } from 'react-icons/bi';
import { FiGithub } from 'react-icons/fi'
import { GoLinkExternal } from 'react-icons/go'
import Plx from "react-plx";
import { Link } from "react-router-dom";

function Card({ project }) {
    return (
      
        <div className="cardBox">
            <div className="cardImgBox">
                <img className="cardImg" src={project.image} alt={project.name} />
            </div>
            <div className="cardInfoBox">
                <h4 className="cardInfoTitle">{project.name}</h4>
                <p className="cardInfoText">{project.text}</p>
                <div className="projectsCardIcons">
                    {project.icons.map((icon, iconIndex) => (
                        <span className="projectInfoIcons" key={iconIndex}>
                            {icon.toLowerCase() === "react" && <BiLogoReact />}
                            {icon.toLowerCase() === "javascript" && <BiLogoJavascript />}
                            {icon.toLowerCase() === "html" && <BiLogoHtml5 />}
                            {icon.toLowerCase() === "css" && <BiLogoCss3 />}
                        </span>
                    ))}
                    <div className="cardGetContainer">
                        <Link to={project.github} className="link"><FiGithub className="projectsGet"/></Link>
                        <Link to={project.url} className="link"><GoLinkExternal className="projectsGet"/></Link>
                    </div>
                </div>
                
            </div>
        </div>
    );
}

export default Card;
