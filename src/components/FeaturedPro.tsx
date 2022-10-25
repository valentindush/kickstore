import React from "react";
import shoe1 from '../assets/image 1.png';
import addToCartIcon from '../assets/Group.svg'
import filledStar from '../assets/Star 4.svg';
import unFilledStar from '../assets/Star 5.svg';

interface FeaturedPro {
  rating: string;
  description: string;
  price: string;
}

const FeaturedPro = () => {
  return <div className="w-screen h-[20rem] flex flex-col items-center justify-center gap-[1rem]">
    <div className="w-full h-auto relative flex items-center justify-center">
        <div className="w-[7rem] h-[7rem] rounded-full absolute top-[-1.5rem] right-[9rem]" style={{ background: 'linear-gradient(270deg, #FE7831 0%, #FFDEBE 100%)'}}></div>
        <img src={shoe1} alt="" className="h-[10rem] z-0" />
        <div className="w-[2rem] h-[2rem] rounded-full grid place-items-center absolute bottom-10 cursor-pointer z-10 " style={{ background: 'linear-gradient(97.49deg, rgba(138, 168, 248, 0.6) -0.43%, rgba(49, 91, 255, 0.6) 144.53%)'}}>
            <img src={addToCartIcon} alt="" />
        </div>
    </div>
    <div className="flex gap-2">
        <img src={filledStar} alt="" />
        <img src={filledStar} alt="" />
        <img src={filledStar} alt="" />
        <img src={filledStar} alt="" />
        <img src={unFilledStar} alt="" />
    </div>
    <span className="w-[14rem] text-center">Adidas Falcon Shoes for men - 2021 Edition</span>
    <span className="font-bold">$120.50</span>
  </div>;
};

export default FeaturedPro;
