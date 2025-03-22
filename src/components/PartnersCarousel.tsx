import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const partners = [
  { name: 'Microsoft', logo: 'https://images.unsplash.com/photo-1633419461186-7d40a38105ec?w=300' },
  { name: 'Google', logo: 'https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=300' },
  { name: 'Amazon', logo: 'https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=300' },
  { name: 'IBM', logo: 'https://images.unsplash.com/photo-1618477388954-7852f32655ec?w=300' },
  { name: 'Oracle', logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=300' },
];

export default function PartnersCarousel() {
  return (
    <div className="bg-white/80 backdrop-blur-md rounded-lg p-8 shadow-lg">
      <h2 className="text-3xl font-bold text-center mb-8">Our Partners</h2>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={3}
        autoplay={{ delay: 3000 }}
        loop={true}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
      >
        {partners.map((partner, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center">
              <img
                src={partner.logo}
                alt={partner.name}
                className="w-32 h-32 object-contain rounded-lg"
              />
              <p className="mt-4 text-lg font-semibold">{partner.name}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}