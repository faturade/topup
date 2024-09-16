import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';

function Slide() {
  return (
    <div className="w-full max-w-[1300px] mb-10">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay]}
        className="w-full h-[500px] rounded-lg overflow-hidden shadow-lg relative"
      >
        <SwiperSlide>
          <div className="relative w-full h-full">
            <img
              src="https://via.placeholder.com/1300x500"
              alt="Store Image 1"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold text-center">
                Welcome to Our Store
              </h2>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full h-full">
            <img
              src="https://via.placeholder.com/1300x500"
              alt="Store Image 2"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold text-center">
                Discover Amazing Products
              </h2>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full h-full">
            <img
              src="https://via.placeholder.com/1300x500"
              alt="Store Image 3"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold text-center">
                Special Discounts Available
              </h2>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Slide;
