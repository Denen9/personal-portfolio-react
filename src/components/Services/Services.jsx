import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import "./Services.css"
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Parallax, Pagination, Navigation } from 'swiper/modules';

const Services = ({services}) => {
 
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
          <SwiperSlide className="cuadro" key={index}>
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
