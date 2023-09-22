import React from "react";
import "./Card.css";
import { BiLogoReact, BiLogoJavascript, BiLogoHtml5, BiLogoCss3 } from 'react-icons/bi';
import { FaGithubSquare } from 'react-icons/fa'
import { GoLinkExternal } from 'react-icons/go'
import Plx from "react-plx";

function Card({ project }) {
    return (
        <Plx 
            parallaxData={[
                {
                start: 0,
                end: 700,
                easing: "ease-in",
                properties: [
                    {
                    startValue: 200,
                    endValue: 0,
                    property: "translateY"
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
                        <FaGithubSquare className="projectsGet"/><GoLinkExternal className="projectsGet"/>
                    </div>
                </div>
                
            </div>
        </div>
        </Plx>
    );
}

export default Card;
