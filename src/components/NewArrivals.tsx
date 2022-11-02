import React, { FC, useEffect, useState } from "react";
import chevronLeft from "../assets/chevron-right.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import NewArrival from "./NewArrival";
import { FeaturedProInterface } from "./FeaturedPro";

const NewArrivals: FC<FeaturedProInterface> = () => {
  const [mobile, setMobile] = useState<boolean>(
    window.innerWidth <= 768 ? true : false
  );

  useEffect(() => {
    window.addEventListener("resize", () => {
      setMobile(window.innerWidth <= 768 ? true : false);
    });
  }, [mobile]);

  const newArrivalsData: FeaturedProInterface[] = [
    {
      rating: 5,
      description: "Adidas Falcon Shoes for men - 2021 Edition",
      price: 110,
      imgSource: "/server-assets/arrival3.png",
      id: "1",
      indexId: 0,
    },
    {
      rating: 4,
      description: "Adidas Falcon Shoes for men - 2021 Edition",
      price: 100,
      imgSource: "/server-assets/arrival2.png",
      id: "2",
      indexId: 1,
    },
    {
      rating: 3,
      description: "Adidas Falcon Shoes for men - 2021 Edition",
      price: 130,
      imgSource: "/server-assets/arrival3.png",
      id: "3",
      indexId: 2,
    },
    {
      rating: 4.5,
      description: "Adidas Falcon Shoes for men - 2021 Edition",
      price: 120,
      imgSource: "/server-assets/arrival2.png",
      id: "4",
      indexId: 3,
    },
  ];

  const newArrivals = newArrivalsData.map((data: FeaturedProInterface) => {
    const { rating, description, price, imgSource, id, indexId } = data;

    return (
      <SwiperSlide className="grid place-items-center">
        <NewArrival
          rating={rating}
          description={description}
          price={price}
          imgSource={imgSource}
          id={id}
          indexId={indexId}
        />
      </SwiperSlide>
    );
  });

  return (
    <div className="w-full h-[50vh] flex flex-col items-center justify-start gap-11 pt-5 relative bg-">
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
      <div className="w-full h-[80vh] absolute top-[15rem]">
        <Swiper
          pagination={{ clickable: true }}
          modules={[Pagination]}
          slidesPerView={mobile ? 1 : 4}
          className="w-full h-full"
        >
          {newArrivals}
        </Swiper>
      </div>
    </div>
  );
};

export default NewArrivals;
