import React from "react";
import "./Button.css"

function Button({children}){
    return(
        <button className="button">{children}
            <span className="buttonSpan b1"></span>
            <span className="buttonSpan b2"></span>
            <span className="buttonSpan b3"></span>
            <span className="buttonSpan b4"></span>
        </button>
    )
} 
export default Button;