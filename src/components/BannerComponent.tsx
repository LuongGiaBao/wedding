import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Import required modules
import { Navigation, Pagination, Autoplay } from "swiper/modules";

export const BannerComponent = () => {
  const banners = ["/assests/8.png", "/assests/8.png"]; // Đường dẫn ảnh banner

  return (
    <div className="relative w-full h-full">
      <Swiper
        spaceBetween={10}
        navigation={false}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Navigation, Pagination, Autoplay]}
        className="w-full h-full"
      >
        {banners.map((image, index) => (
          <SwiperSlide key={index}>
            {/* Hình nền */}
            <div
              className="w-full h-[100vh] bg-cover bg-center"
              style={{ backgroundImage: `url(${image})` }}
            ></div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Text overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-black/30 z-10">
        <h1 className="text-4xl md:text-6xl font-cursive font-bold text-white drop-shadow-lg">
          Gia Bảo ♡ Kim Ngân
        </h1>
        <p className="text-sm md:text-lg text-gray-200 mt-2">
          ---- 01 tháng 1 2026 ----
        </p>
      </div>
    </div>
  );
};
