import React from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import amazonImg from "../../../assets/brands/amazon.png";
import amazonVImg from "../../../assets/brands/amazon_vector.png";
import casioImg from "../../../assets/brands/casio.png";
import moonStarImg from "../../../assets/brands/moonstar.png";
import randstadImg from "../../../assets/brands/randstad.png";
import starImg from "../../../assets/brands/star.png";
import pplImg from "../../../assets/brands/start_people.png";
import { Autoplay } from "swiper/modules";

const Brands = () => {
  return (
    <Swiper
      loop={true}
      slidesPerView={4}
      centeredSlides={true}
      spaceBetween={30}
      modules={[Autoplay]}
      grabCursor={true}
      autoplay={{
        delay: 1000,
        disableOnInteraction: false,
      }}
    >
      <SwiperSlide>
        <img src={amazonImg} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={amazonVImg} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={starImg} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={randstadImg} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={moonStarImg} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={pplImg} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={casioImg} />
      </SwiperSlide>
    </Swiper>
  );
};

export default Brands;
