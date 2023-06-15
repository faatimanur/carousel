import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './Products.css'

function Products () {
    return (
        <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        >
        <div className="cards">
        <SwiperSlide>
            <div className="card">
                <h3>1 средние пиццы от 999 рублей</h3>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="card">
                <h3>2 средние пиццы от 999 рублей</h3>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="card">
                <h3>3 средние пиццы от 999 рублей</h3>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="card">
                <h3>4 средние пиццы от 999 рублей</h3>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="card">
                <h3>5 средние пиццы от 999 рублей</h3>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="card">
                <h3>6 средние пиццы от 999 рублей</h3>
            </div>
        </SwiperSlide>
        </div>
        </Swiper>
    );
  };

export default Products;