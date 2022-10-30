import React, { FC } from "react";
import Switch from "./Switch";
import bestSellerPic from "../assets/image6.png";
import { Badge } from "@material-ui/core";
import filledStar from "../assets/Star 4.svg";

interface BestSeller {
  rating: number;
  improvement: string;
  description: string;
  price: number;
}

const BestSeller: FC<BestSeller> = (props) => {
  const { rating, improvement, description, price } = props;

  const ratings = [...Array(Math.floor(rating))].map(
    (rate: undefined, index: number) => {
      return <img src={filledStar} className='w-4' alt="" key={index} />;
    }
  );

  return (
    <div className="w-full h-[120vh] bg-white py-[4rem] flex flex-wrap gap-4">
      <div className="flex flex-wrap items-center justify-center">
        <h1 className="tracking-wide text-2xl text-[#0A083A] font-bold text-center">
          Best seller this week
        </h1>
        <div className="flex gap-4 items-center justify-center">
          <span className="text-lg font-medium text-[#0A083A]">Men</span>
          <Switch />
          <span className="text-lg font-medium text-[#0A083A]">women</span>
        </div>
      </div>
      <div className="h-[80%] w-full flex flex-wrap justify-between gap-2">
        <div className="h-1/2 w-full flex items-center justify-start relative">
          <div
            className="h-[58%] w-1/2 rounded-tr-xl rounded-br-xl"
            style={{
              background: "linear-gradient(270deg, #FF3C78 2.8%, #FFB2B2 100%)",
            }}
          ></div>

          <img
            src={bestSellerPic}
            alt=""
            className="z-10 absolute left-[-10%]"
          />
          <div
            className="w-6 h-6 rounded-full grid place-items-center z-10 absolute top-[9.8rem] left-[11rem]"
            style={{
              background: "linear-gradient(270deg, #02BE83 0%, #B3F6DC 100%)",
            }}
          >
            <div className="w-2 h-2 rounded-full bg-white"></div>
          </div>
          <div
            className="w-6 h-6 rounded-full grid place-items-center z-10 absolute top-[5.5rem] left-[6rem]"
            style={{
              background: "linear-gradient(270deg, #02BE83 0%, #B3F6DC 100%)",
            }}
          >
            <div className="w-2 h-2 rounded-full bg-white"></div>
          </div>
          <div
            className="w-6 h-6 rounded-full grid place-items-center z-10 absolute top-[9rem] left-[4rem]"
            style={{
              background: "linear-gradient(270deg, #02BE83 0%, #B3F6DC 100%)",
            }}
          >
            <div className="w-2 h-2 rounded-full bg-white"></div>
          </div>
          <Badge />
        </div>
        <div className="h-1/2 w-full flex flex-col items-center justify-center ">
          <div className="flex gap-4">{ratings}</div>
          <span className="text-center text-xl font-semibold">{description}</span>
          <span className="text-center text-lg font-semibold">$ {price}</span>
          <button className="px-6 py-2 bg-[#0A083A] text-white rounded-md">Order now</button>
        </div>
      </div>
    </div>
  );
};

export default BestSeller;
