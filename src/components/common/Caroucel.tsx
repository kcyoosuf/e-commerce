import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import ImageBanner from "./ImageBanner";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


const Carousel = () => {
  const slides = [
    { id: 1, image: "https://placehold.co/1280x720?text=Title+One", title: "Title 1" },
    { id: 2, image: "https://placehold.co/1280x720?text=Title+Two", title: "Title 2" },
    { id: 3, image: "https://placehold.co/1280x720?text=Title+Three", title: "Title 3" },
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
