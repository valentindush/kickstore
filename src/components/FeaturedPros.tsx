import React from "react";
import FeaturedPro from "./FeaturedPro";

const FeaturedPros = () => {
  const featuredProducts: FeaturedPro[] = [
    {
      rating: 5,
      description: 'Adidas Falcon Shoes for men - 2021 Edition',
      price: 110,
      imgSource: '/server-assets/image 1.png',
      id: '1',
      indexId: 0
    },
    {
      rating: 4,
      description: 'Adidas Falcon Shoes for men - 2021 Edition',
      price: 100,
      imgSource: '/server-assets/image 4.png',
      id: '2',
      indexId: 1
    },
    {
      rating: 3,
      description: 'Adidas Falcon Shoes for men - 2021 Edition',
      price: 130,
      imgSource: '/server-assets/image 6.png',
      id: '3',
      indexId: 2
    },
    {
      rating: 4.5,
      description: 'Adidas Falcon Shoes for men - 2021 Edition',
      price: 120,
      imgSource: '/server-assets/lastImage.png',
      id: '4',
      indexId: 3
    },
  ];

  return (<div className="w-full h-fit bg-white flex flex-col items-center justify-center mt-6 py-6 gap-10  ">
    <div className=" w-auto flex items-between justify-center">
        <h1 className="text-2xl font-bold text-[#0A083A]">Featured Products</h1>
    </div>
    <div className="flex flex-col items-center justify-center gap-6">
        {featuredProducts.map((product: FeaturedPro) => {
        const { rating, description, price, imgSource, id, indexId }  = product
        return <FeaturedPro rating={rating} description={description} price={price} imgSource={imgSource} id={id} indexId={indexId} />})}
    </div>
  </div>);
};

export default FeaturedPros;