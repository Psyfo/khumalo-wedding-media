import "swiper/swiper-bundle.css";
import Image from "next/image";
import React from "react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

/* eslint-disable @typescript-eslint/no-explicit-any */

// Import Swiper styles

const DressGallery: React.FC = () => {
  // Array of different image sizes
  const images: any[] = [
    { id: 1, src: '/images/dress/Trad photo 1.png' },
    { id: 2, src: '/images/dress/Trad photo 2.png' },
    { id: 3, src: '/images/dress/Trad photo 3.png' },
    { id: 5, src: '/images/dress/Trad photo 4.png' },
    { id: 6, src: '/images/dress/Trad photo 5.png' },
    { id: 7, src: '/images/dress/Trad photo 6.png' },
    { id: 9, src: '/images/dress/Trad photo 7.png' },
    { id: 10, src: '/images/dress/Trad photo 8.png' },
    { id: 11, src: '/images/dress/Trad photo 9.png' },
    { id: 12, src: '/images/dress/Trad photo 10.png' },
    { id: 14, src: '/images/dress/Trad photo 11.png' },
    { id: 15, src: '/images/dress/Trad photo 12.png' },
    { id: 16, src: '/images/dress/Trad photo 13.png' },
    { id: 17, src: '/images/dress/Trad photo 14.png' },
    { id: 18, src: '/images/dress/Trad photo 15.png' },
  ];

  return (
    <div className='w-full p-4'>
      {/* Swiper Slider */}
      <Swiper
        navigation={true} // Enable navigation
        pagination={{ clickable: true }} // Enable pagination
        modules={[Navigation, Pagination]} // Add modules
        className='mySwiper'
        spaceBetween={10}
        loop
        slidesPerView={1}
        breakpoints={{
          640: {
            // For small devices
            slidesPerView: 1,
          },
          768: {
            // For medium devices
            slidesPerView: 2,
          },
          1024: {
            // For large devices
            slidesPerView: 3,
          },
        }} // Change this to adjust the number of slides shown at once
      >
        {images.map((image, idx) => (
          <SwiperSlide key={idx}>
            <div className='h-[75vh] mg:h-[80vh] object-cover'>
              <Image
                src={image.src}
                alt={`Gallery item ${idx + 1}`}
                width={400} // Set a standard width
                height={500}
                quality={100}
                unoptimized // Set a standard height
                className='w-full h-auto min-h-full object-cover object-center rounded-lg shadow-lg'
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default DressGallery;
