import image1 from "../src/assets/Images/Me.webp"
import image2 from "../src/assets/Images/projects/AluraGeek.png"
import image3 from "../src/assets/Images/projects/Encriptador-de-texto.png"
import image4 from "../src/assets/Images/projects/Portfolio-css-html-js.png"




const projects = [
    {
      id: 1,
      name: "Portfolio - React",
      url: "https://encriptador-de-texto-five.vercel.app/",
      image: image1,
      text: "Portfolio React es una Single Page Application (SPA) desarrollada en React. Ademas de ser mi portfolio personal se centra en la eficiencia y atractivo visual. Implementa las prácticas de desarrollo recomendadas para React y utiliza la librería 'motion frame' para agregar animaciones y efectos visuales.",
      info: "Un portfolio hecho en React adoptando las practicas de esta libreria en conjunto con otros frameworks",
      icons: ["react","html", "css", "javascript"], // Agrega los nombres de los iconos aquí
    },
    {
      id: 2,
      name: "AluraGeek",
      url: "https://encriptador-de-texto-five.vercel.app/",
      image: image2,
      text: "AluraGeek es un sitio web de comercio electrónico que ofrece productos relacionados con juegos, Star Wars y otros temas. Permite a los clientes crear productos personalizados y emplea prácticas de desarrollo web, incluyendo operaciones CRUD (Create, Read, Update, Delete) para ver, agregar, actualizar y eliminar productos, ofreciendo una experiencia de compra interactiva.",
      info: "AluraGeek es un e-commerce hecho en react",
      icons: ["react","html", "css", "javascript"], // Agrega los nombres de los iconos aquí
    },
    {
      id: 3,
      name: "Alura text-encrypter",
      url: "https://encriptador-de-texto-five.vercel.app/",
      image: image3,
      text: "Alura Text-Encrypter es una aplicación que cifra y descifra texto ingresado por el usuario. Proporciona una capa adicional de seguridad para mensajes o información confidencial. Incluye una función de 'desencriptado' para revertir el proceso y recuperar el texto original, siendo útil en situaciones que requieren comunicación segura.",
      info: "Alura text-encrypter es una aplicacion que recibe un texto y devuelve uno cifrado.",
      icons: ["html", "css", "javascript"], // Agrega los nombres de los iconos aquí
    },
    {
      id: 4,
      name: "Portfolio - HTML,CSS,JS",
      url: "https://encriptador-de-texto-five.vercel.app/",
      image: image4,
      text: "El portfolio personal del autor es una versión más simple que utiliza tecnologías web básicas como HTML, CSS y JavaScript Vanilla. Aunque menos complejo que la versión en React, muestra proyectos y trabajos anteriores de manera efectiva. Incorpora la librería 'scrollReveal' para agregar efectos de revelación al desplazar la página.",
      info: "Un portfolio hecho con HTML, CSS Y JavaScript vanilla",
      icons: ["html", "css", "javascript"], // Agrega los nombres de los iconos aquí
    },
    {
      id: 5,
      name: "AluraFlix",
      url: "https://aluraflix-ten-omega.vercel.app/",
      image: image4,
      text: "El portfolio personal del autor es una versión más simple que utiliza tecnologías web básicas como HTML, CSS y JavaScript Vanilla. Aunque menos complejo que la versión en React, muestra proyectos y trabajos anteriores de manera efectiva. Incorpora la librería 'scrollReveal' para agregar efectos de revelación al desplazar la página.",
      info: "Un portfolio hecho con HTML, CSS Y JavaScript vanilla",
      icons: ["html", "css", "javascript"], // Agrega los nombres de los iconos aquí
    },
    {
      id: 6,
      name: "Portfolio - HTML,CSS,JS",
      url: "https://encriptador-de-texto-five.vercel.app/",
      image: image4,
      text: "El portfolio personal del autor es una versión más simple que utiliza tecnologías web básicas como HTML, CSS y JavaScript Vanilla. Aunque menos complejo que la versión en React, muestra proyectos y trabajos anteriores de manera efectiva. Incorpora la librería 'scrollReveal' para agregar efectos de revelación al desplazar la página.",
      info: "Un portfolio hecho con HTML, CSS Y JavaScript vanilla",
      icons: ["html", "css", "javascript"], // Agrega los nombres de los iconos aquí
    },
    
  ];
  
  export default projects;
  