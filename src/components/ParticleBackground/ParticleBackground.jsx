import React, {useCallback} from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import particlesConfig from "../particles-config"

const ParticleBackground = ({fondoColor})=> {
    const particlesInit = useCallback((engine)=> (
        loadFull(engine)
    ),[])

    const config = particlesConfig(fondoColor); // Llama a particlesConfig con fondoColor

    return (
        <div>
            <Particles 
                options={config}
                init={particlesInit}
            >    
            </Particles>
        </div>
        
        )  
}

export default ParticleBackground;
