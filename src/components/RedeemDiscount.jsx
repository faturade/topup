import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt } from '@fortawesome/free-solid-svg-icons';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import { Autoplay } from 'swiper/modules';

const RedeemDiscount = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const now = new Date().getTime();
    const endTime = localStorage.getItem('endTime') || setInitialEndTime();
    const distance = endTime - now;
    return distance;
  }

  function setInitialEndTime() {
    const endTime = new Date().getTime() + 24 * 60 * 60 * 1000; // 24 jam dari sekarang
    localStorage.setItem('endTime', endTime);
    return endTime;
  }

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = calculateTimeLeft();

      if (distance <= 0) {
        clearInterval(interval);
        setTimeLeft(0);
      } else {
        setTimeLeft(distance);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  function formatTime(ms) {
    const hours = Math.floor(ms / (1000 * 60 * 60));
    const minutes = Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((ms % (1000 * 60)) / 1000);
    return [hours, minutes, seconds];
  }

  const [hours, minutes, seconds] = formatTime(timeLeft);

  const products = [
    {
      img: 'https://via.placeholder.com/150',
      name: 'Mobile Legends',
      normalPrice: 'Rp 150.000',
      discountPrice: 'Rp 100.000',
    },
    {
      img: 'https://via.placeholder.com/150',
      name: 'Free Fire',
      normalPrice: 'Rp 200.000',
      discountPrice: 'Rp 150.000',
    },
    {
      img: 'https://via.placeholder.com/150',
      name: 'Free Fire Max',
      normalPrice: 'Rp 250.000',
      discountPrice: 'Rp 200.000',
    },
    {
      img: 'https://via.placeholder.com/150',
      name: 'Honor Of Kings',
      normalPrice: 'Rp 300.000',
      discountPrice: 'Rp 250.000',
    },
    {
      img: 'https://via.placeholder.com/150',
      name: 'PUBG Mobile',
      normalPrice: 'Rp 350.000',
      discountPrice: 'Rp 300.000',
    },
  ];

  return (
    <div className="relative bg-gray-800 p-4 rounded-lg shadow-lg w-full max-w-[1300px] max-h-[250px] ">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <FontAwesomeIcon icon={faBolt} size="lg" color="yellow" />
          <h2 className="text-xl font-semibold text-white ml-2">TEBUS MURAH</h2>
        </div>
        <div className="flex space-x-2">
          <div className="flex flex-col items-center">
            <div className="bg-gray-900 p-2 text-white rounded-md w-8 h-8 flex items-center justify-center">
              {hours.toString().padStart(2, '0')}
            </div>
          </div>
          <span className="text-xl text-white">:</span>
          <div className="flex flex-col items-center">
            <div className="bg-gray-900 p-2 text-white rounded-md w-8 h-8 flex items-center justify-center">
              {minutes.toString().padStart(2, '0')}
            </div>
          </div>
          <span className="text-xl text-white">:</span>
          <div className="flex flex-col items-center">
            <div className="bg-gray-900 p-2 text-white rounded-md w-8 h-8 flex items-center justify-center">
              {seconds.toString().padStart(2, '0')}
            </div>
          </div>
        </div>
      </div>

      <Swiper
        spaceBetween={10}
        slidesPerView={5}
        loop={true}
        speed={800}
        autoplay={{
          delay: 150,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
        onSwiper={(swiper) => {
          swiper.el.addEventListener('mouseenter', () => {
            swiper.autoplay.stop();
          });

          swiper.el.addEventListener('mouseleave', () => {
            swiper.autoplay.start();
          });
        }}
      >
        {products.map((product, index) => (
          <SwiperSlide key={index} className='cursor-pointer'>
            <div className="bg-gray-900 p-2 rounded-lg flex items-center">
              <img
                src={product.img}
                alt={product.name}
                className="w-24 h-24 object-cover mr-4 rounded-lg"
              />
              <div className="flex flex-col">
                <h3 className="text-lg font-semibold text-white">{product.name}</h3>
                <p className="text-sm line-through text-red-500">{product.normalPrice}</p>
                <p className="text-base font-bold text-orange-500">{product.discountPrice}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default RedeemDiscount;
