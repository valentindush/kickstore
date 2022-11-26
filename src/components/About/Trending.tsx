import React from "react";
import type { FC } from "react";
import { FiShoppingBag } from "react-icons/fi";

interface TrendingProps {
  imgSrc: string;
  name: string;
  size: number;
  price: number;
  category: string;
}

const Trending: FC<TrendingProps> = (props) => {
  const { imgSrc, name, category, size, price } = props;

  return (
    <div className="w-[90%] h-[45%] bg-white rounded-md flex p-4 mb-4 shadow-xl shadow-slate-400">
      <img src={imgSrc} alt="" className="rounded-md h-full w-[30%]" />
      <div className="w-[70%] flex flex-col items-start justify-center pl-4 ">
        <div className="flex flex-col items-start">
          <span className="text-base font-semibold text-[rgb(10,8,58)]">
            {name}
          </span>
          <span className="text-base font-semibold text-[rgb(10,8,58)]">
            for {category}
          </span>
        </div>
        <div className="flex items-center justify-center gap-3">
          <p className="flex items-center justify-center gap-1">
            <span className="text-[rgb(10,8,58)] text-sm font-medium">size:</span>
            <span className="text[rgb(10, 8, 58)] text-xs font-normal text-center">{size}</span>
          </p>
          <p className="flex items-center justify-center gap-1">
            <span className="text-[rgb(10,8,58)] text-sm font-medium">size:</span>
            <span className="text[rgb(10, 8, 58)] text-xs font-normal">${price}</span>
          </p>
          <FiShoppingBag
            className={`w-[1.5rem] xs:w-[1rem] sm:w-[1rem] miniTablet:w-[1.75rem] lg:w-[2rem] h-[1.5rem] font-bold text-[rgb(10,8,58)]`}
          />
        </div>
      </div>
    </div>
  );
};

export default Trending;
