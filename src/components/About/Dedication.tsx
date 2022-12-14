import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Pagination } from "swiper";
import leftIcon from "../../assets/arrow-left-circle.png";
import rightIcon from "../../assets/arrow-left-circle-1.png";
import SlideNextButton from "../Landing/SlideNextButton";
import SlidePrevButton from "../Landing/SlidePrev";
import Brand, { BrandProps } from "../Landing/Brand";
import DedCard, { DedCardProps } from "./DedCard";

const Dedication = () => {
  const [mobile, setMobile] = useState<boolean>(
    window.innerWidth <= 767 ? true : false
  );

  const [miniLaptop, setMiniLaptop] = useState(
    window.innerWidth <= 1200 ? true : false
  );

  const [smallMobile, setSmallMobile] = useState(
    window.innerWidth <= 500 ? true : false
  );

  useEffect(() => {
    window.addEventListener("resize", () => {
      setMobile(window.innerWidth <= 767 ? true : false);
      setMiniLaptop(window.innerWidth <= 1226 ? true : false);
      setSmallMobile(window.innerWidth <= 500 ? true : false);
    });
  }, [mobile, miniLaptop, smallMobile]);

  const swipingButtonRef = useRef<HTMLButtonElement | null>(null);
  const swipingButtonRefPrev = useRef<HTMLButtonElement | null>(null);

  const brands: DedCardProps[] = [
    {
      id: 0,
      heading: "Products",
      description: "Things on a very small scale behave like nothing",
    },
    {
      id: 1,
      heading: "Experience",
      description: "Things on a very small scale behave like nothing",
    },
    {
      id: 2,
      heading: "Personal Touch",
      description: "Things on a very small scale behave like nothing",
    },
    {
      id: 0,
      heading: "Products",
      description: "Things on a very small scale behave like nothing",
    },
    {
      id: 1,
      heading: "Experience",
      description: "Things on a very small scale behave like nothing",
    },
  ];

  return (
    <div className="w-full h-fit flex flex-col items-center justify-center relative bg-[#f5f5f5] px-[5rem] sm:px-[1rem] lg:pt-[3rem] lg:flex-row ">
      <div
        className="w-[3.5rem] h-[7rem] rounded-l-full absolute right-0 top-0 md:rotate-[270deg] md:right-7 md:top-[-1.7rem]"
        style={{
          background:
            "linear-gradient(270deg, rgba(254, 120, 49, 0.7) 0%, rgba(255, 222, 190, 0.7) 100%)",
        }}
      ></div>
      <div className="w-full h-fit flex flex-col items-center justify-center gap-6 lg:self-start">
        <span className="text-3xl font-black text-[#0A083A] text-center md:text-4xl mt-[4rem] lg:mt-0 lg:text-start">
          Dedicated to our customers
        </span>
        <p className="text-center px-2 lg:p-0 lg:text-start">
          So it really behaves like neither. Now we have given up. We say "it is
          like neither"
        </p>
        <div className="w-full hidden items-start justify-start gap-4 mt-[1rem] lg:flex">
          <img
            src={leftIcon}
            alt="leftIcon"
            className="w-8 cursor-pointer"
            onClick={() => swipingButtonRef.current?.click()}
          />
          <img
            src={rightIcon}
            alt="leftIcon"
            className="w-8 cursor-pointer"
            onClick={() => swipingButtonRefPrev.current?.click()}
          />
        </div>
      </div>
      <div className="w-full h-[28rem] flex flex-col items-center justify-center gap-4 p-2 md:flex-row md:h-[28rem] lg:w-[70%] lg:h-[20rem] lg:gap-2 md:w-[90%]">
        <img
          src={leftIcon}
          alt="leftIcon"
          className="w-8 cursor-pointer hidden md:block lg:hidden"
          onClick={() => swipingButtonRef.current?.click()}
        />
        <Swiper
          modules={[Pagination]}
          slidesPerView={smallMobile ? 1 : mobile ? 2 : miniLaptop ? 3 : 4}
          className="w-full h-[70%]"
          spaceBetween={10}
        >
          {brands.map((brand) => {
            const { id, heading, description } = brand;

            return (
              <SwiperSlide className="w-full h-full" key={id}>
                <DedCard id={id} heading={heading} description={description} />
              </SwiperSlide>
            );
          })}
          <SlideNextButton swipingButtonRef={swipingButtonRef} />
          <SlidePrevButton swipingButtonRef={swipingButtonRefPrev} />
        </Swiper>
        <img
          src={rightIcon}
          alt="leftIcon"
          className="w-8 cursor-pointer hidden md:block lg:hidden"
          onClick={() => swipingButtonRefPrev.current?.click()}
        />
        <div className="w-full h-8 flex self-center gap-4 items-center justify-center md:hidden">
          <img
            src={leftIcon}
            alt="leftIcon"
            className="w-8 cursor-pointer"
            onClick={() => swipingButtonRef.current?.click()}
          />
          <img
            src={rightIcon}
            alt="leftIcon"
            className="w-8 cursor-pointer"
            onClick={() => swipingButtonRefPrev.current?.click()}
          />
        </div>
      </div>
    </div>
  );
};

export default Dedication;
