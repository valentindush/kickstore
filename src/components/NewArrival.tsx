import React from "react";
import type { FC } from "react";
import arrivalShoe from '../assets/image 7.png';
import { FiUploadCloud } from "react-icons/fi";

const NewArrival = () => {
  return <div className="h-[90%] w-[90%] bg-[blue] flex flex-col items-center justify-center gap-[2rem]">
    <div className="w-[80%] h-[18rem] rounded-xl cursor-pointer" style={{background: "linear-gradient(270deg, #FE7831 0%, #FFDEBE 100%)"}}>
      <span className="text-3xl text-white font-black self-start">01</span>
      <img src={arrivalShoe} alt="" className="absolute w-[50em]" />
      <button className="px-7 py-1 rounded-full text-xl bg-white grid place-items-center self-end" >+</button>
    </div>
    <div className="w-[80%] h-[30%] bg-white flex flex-col items-center justify-center">

    </div>
  </div>;
};

export default NewArrival;
