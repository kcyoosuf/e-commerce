import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import ImageBanner from "./ImageBanner";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


const Carousel = () => {
  const slides = [
    { id: 1, image: "https://picsum.photos/1280/720", title: "Car 1" },
    { id: 2, image: "https://picsum.photos/1281/721", title: "Car 2" },
    { id: 3, image: "https://picsum.photos/1282/722", title: "Car 3" },
  ];

  return (
    <div className="w-full mx-auto">
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={20}
        slidesPerView={1}
        className="py-4"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative bg-gray-200 overflow-hidden">
              <ImageBanner src={slide.image} alt={slide.title} />
              <div className="absolute bottom-0 bg-black bg-opacity-50 text-white p-4 w-full text-center">
                {slide.title}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
