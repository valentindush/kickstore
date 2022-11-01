import React, { useEffect, useState } from "react";
import chevronLeft from "../assets/chevron-right.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import NewArrival from "./NewArrival";

const NewArrivals = () => {
  const [mobile, setMobile] = useState<boolean>(
    window.innerWidth <= 768 ? true : false
  );

  useEffect(() => {
    window.addEventListener("resize", () => {
      setMobile(window.innerWidth <=768 ? true : false);
    });
  }, [mobile]);
  
  return (
    <div className="w-full h-[60vh] flex flex-col items-center justify-start gap-11 pt-5 relative">
      <div className="w-full h-fit flex flex-col items-center justify-center gap-5">
        <div className="flex flex-col gap-5">
          <span className="text-2xl font-bold text-center">New arrivals</span>
          <p className="text-center px-16 text-sm text-gray-800">
            Enjoy the new products from our store. Select what you like, enjoy &
            return.
          </p>
        </div>
        <span className="text-sm text-[#FF3C78] text-center cursor-pointer flex gap-2">
          View all <img src={chevronLeft} alt="" className="h-5" />{" "}
        </span>
      </div>
      <div className="w-full h-[80vh] absolute top-[15rem] bg-[#0000ff54]">
        <Swiper
          pagination={{}}
          modules={[Pagination]}
          slidesPerView={mobile ? 1 : 4}
          className="w-full h-full"
        >
          <SwiperSlide className="grid place-items-center">
            <NewArrival />
          </SwiperSlide>
          <SwiperSlide className="grid place-items-center">
            <NewArrival />
          </SwiperSlide>
          <SwiperSlide className="grid place-items-center">
            <NewArrival />
          </SwiperSlide>
          <SwiperSlide className="grid place-items-center">
            <NewArrival />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default NewArrivals;
