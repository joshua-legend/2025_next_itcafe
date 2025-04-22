"use client";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import { Navigation, Scrollbar } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
const Test = () => {
  return (
    <Swiper modules={[Navigation, Scrollbar]} loop={true} scrollbar={{ draggable: true }} navigation spaceBetween={50} slidesPerView={3}>
      <SwiperSlide>
        <div className="bg-red-100 text-center h-[500px] text-red-400">slide 1</div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="bg-red-100 text-center h-[500px] text-red-400">slide 1</div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="bg-red-100 text-center h-[500px] text-red-400">slide 1</div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="bg-red-100 text-center h-[500px] text-red-400">slide 1</div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="bg-red-100 text-center h-[500px] text-red-400">slide 1</div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="bg-red-100 text-center h-[500px] text-red-400">slide 1</div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="bg-red-100 text-center h-[500px] text-red-400">slide 1</div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="bg-red-100 text-center h-[500px] text-red-400">slide 1</div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="bg-red-100 text-center h-[500px] text-red-400">slide 1</div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="bg-red-100 text-center h-[500px] text-red-400">slide 1</div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="bg-red-100 text-center h-[500px] text-red-400">slide 1</div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="bg-red-100 text-center h-[500px] text-red-400">slide 1</div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Test;
