import React from "react";
import FeaturedPro from "./FeaturedPro";

const FeaturedPros = () => {
  return (<div className="w-full h-fit bg-white flex flex-col items-center justify-center mt-6 py-6 gap-10  ">
    <div className=" w-auto flex items-between justify-center">
        <h1 className="text-2xl font-bold text-[#0A083A]">Featured Products</h1>
    </div>
    <div className="flex flex-col items-center justify-center gap-6">
        <FeaturedPro />
        <FeaturedPro />
        <FeaturedPro />
        <FeaturedPro />
    </div>
  </div>);
};

export default FeaturedPros;