import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./styles.css";
import Pizza from '../../assets/Pizza-2.svg'
import Drink from '../../assets/Drink.svg'
import Snacks from '../../assets/Snacks.svg'

function Menu() {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
    <div className="wrapper">
    <SwiperSlide>
        <div className="item">
            <img src={Pizza} alt="pizza" />
            <span>Пицца</span>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="item">
            <img src={Drink} alt="drink" />
            <span>Напитки</span>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="item">
            <img src={Snacks} alt="snacks" />
            <span>Закуски</span>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="item">
            <img src={Pizza} alt="pizza" />
            <span>Пицца</span>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="item">
            <img src={Drink} alt="drink" />
            <span>Напитки</span>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="item">
            <img src={Snacks} alt="snacks" />
            <span>Закуски</span>
        </div>
      </SwiperSlide>
    </div>

    </Swiper>
  );
}

export default Menu;