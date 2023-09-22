import React from "react";
import Plx from "react-plx";
import "./Presentation.css";

function Presentation() {
  return (
    <section className="presentationBox">
      <div className="imgBox">
        <Plx
           parallaxData={[
            {
              start: 0,
              end: 550,
              easing: "ease-in",
              properties: [
                {
                  startValue: -100,
                  endValue: 1,
                  property: "translateX"
                },
                {
                    startValue: 0,
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
            zIndex: -1
          }}
        >
          <img className="imgBox__img" src="/Images/Me.webp" alt="Me" />
        </Plx>
      </div>
      <div className="informationBox">
        <Plx
         parallaxData={[
            {
              start: 0,
              end: 450,
              easing: "ease-in",
              properties: [
                {
                  startValue: 0,
                  endValue: 1,
                  property: "scale"
                }
              ]
            }
          ]}
          style={{
            position: "relative",
            width: "100%",
            zIndex: 100
          }}
        
        >
        <h3 className="informationTitle">SOBRE MI</h3>
          <p className="informationText">
            Soy Enzo Diaz, mas conocido como "Denen", un apasionado desarrollador
            front-end argentino de 26 años. Desde temprana edad, supe que mi camino
            estaba en el mundo de la tecnología y la programación
          </p>
        </Plx>
      </div>
    </section>
  );
}

export default Presentation;
