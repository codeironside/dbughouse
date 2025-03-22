import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

const galleryImages = [
  {
    url: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800',
    title: 'Innovation Hub'
  },
  {
    url: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800',
    title: 'Tech Workshop'
  },
  {
    url: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800',
    title: 'Digital Solutions'
  },
  {
    url: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800',
    title: 'Cybersecurity'
  },
  {
    url: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800',
    title: 'AI Development'
  },
];

export default function GalleryCarousel() {
  return (
    <div className="bg-white/80 backdrop-blur-md rounded-lg p-8 shadow-lg">
      <h2 className="text-3xl font-bold text-center mb-8">Our Gallery</h2>
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView="auto"
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={true}
        modules={[EffectCoverflow, Autoplay, Pagination]}
        className="w-full"
      >
        {galleryImages.map((image, index) => (
          <SwiperSlide key={index} className="max-w-2xl">
            <div className="relative">
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-[400px] object-cover rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-4 rounded-b-lg">
                <h3 className="text-xl font-semibold">{image.title}</h3>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}