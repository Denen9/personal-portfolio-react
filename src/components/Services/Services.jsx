import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import "./Services.css"
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Parallax, Pagination, Navigation } from 'swiper/modules';

const Services = () => {
  const services = [
    {
      title: "Diseño UX/UI",
      subtitle: "Servicio de Diseño de Experiencia de Usuario / Interfaz de Usuario",
      description: "Mi servicio de Diseño UX/UI se enfoca en crear experiencias de usuario atractivas y funcionales. Ademas de trabajar en colaboración con los clientes para diseñar interfaces de usuario intuitivas y atractivas que maximicen la satisfacción del usuario y el rendimiento de su sitio web o aplicación.",
    },
    {
      title: "Front End Developer",
      subtitle: "Desarrollo Front End de Alta Calidad",
      description: "Como desarrollador Front End, me especializo en crear sitios web y aplicaciones que no solo son elegantes, sino que también funcionan sin problemas. Utilizo las últimas tecnologías y prácticas de desarrollo para garantizar que su proyecto esté a la vanguardia de la tecnología web.",
    },
    {
      title: "Servicio 3",
      subtitle: "Descripción del Servicio 3",
      description: "Aquí puedes proporcionar una descripción detallada de tu tercer servicio. Explica cómo tu servicio beneficia a tus clientes y por qué deberían elegirte. Puedes resaltar tus fortalezas y lo que te hace único en esta área.",
    },
  ];

  return (
    <section className="servicesContainer">
      <Swiper
        style={{
          '--swiper-navigation-color': '#d316c8',
          '--swiper-pagination-color': '#fff',
        }}
        speed={800}
        parallax={true}
        pagination={false}
        navigation={true}
        modules={[Parallax, Pagination, Navigation]}
        className="mySwiper"
      >
        {services.map((service, index) => (
          <SwiperSlide key={index}>
            <div className="title" data-swiper-parallax="-500">
              {service.title}
            </div>
            <div className="subtitle" data-swiper-parallax="-300">
              {service.subtitle}
            </div>
            <div className="text" data-swiper-parallax="-100">
              <p>
                {service.description}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
};

export default Services;
