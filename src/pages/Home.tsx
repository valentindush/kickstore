import React from 'react'
import heroImg from '../assets/image 3.png';
import heartIcon from '../assets/Vector.png';
import checkIcon from '../assets/Group 4.png';
import mainHeroImg from '../assets/Group 267.svg';
import leftArrow from '../assets/arrow-left-circle-1.png';
import rightArrow from '../assets/arrow-left-circle.png';
import personImage from '../assets/Ellipse 6.png';
import FeaturedPros from '../components/FeaturedPros';
import lock from '../assets/lock.png'
import Accessories from '../components/Accessories';

const Home = () => {
  return (
    <div className='w-screen h-fit flex flex-wrap'>
      <div className="w-full h-fit flex flex-col gap-5">
        <h1 className='text-3xl font-bold text-center text-[#0A083A]'>Get your awesome sneakers.</h1>
        <p className='text-sm text-center text-gray-800 leading-5 tracking-wide px-9'>We offer the best deals in our shop.check them out now. We have awesome on sale for you</p>
        <div className="flex items-center justify-center gap-[2rem] w-full">
          <button className="w-[8rem] h-[2.7rem] px-4 rounded-[.3rem] bg-[#FF3C78] text-white text-sm text-center" style={{boxShadow: 'hwb(0deg 0% 0% / 41%) 0px 25px 50px -10px'}}>Shop now</button>
          <img src={heartIcon} alt="" className='w-4 h-4 cursor-pointer' />
        </div>
        <div className="flex flex-col items-start justify-center gap-[1rem] pl-24 mt-[1rem]">
          <div className="flex items-center justify-center gap-4">
            <img src={checkIcon} alt="" className='w-[1.3rem]' />
            <span className='text-xs text-gray-800'>Free shipping</span>
          </div>
          <div className="flex items-center justify-center gap-4">
            <img src={checkIcon} alt="" className='w-[1.3rem]' />
            <span className='text-xs text-gray-800'>Free returns.</span>
          </div>
        </div>
      </div>
      <div className="w-full h-fit flex flex-col items-center justify-center ">
        <div className='relative w-full flex items-center justify-center'>
          <img src={mainHeroImg} alt="" className='' />
          <img src={heroImg} alt="" className='absolute w-[18rem]' />
          <div className="w-[80%] h-fit p-3 flex items-center justify-center rounded-[2rem] absolute bottom-[7rem] bg-white gap-2 ">
            <div className="w-[2rem] h-[2rem] bg-white grid place-items-center rounded-full shadow-slate-400 shadow-xl absolute right-5 top-[-1rem]"><img src={lock} alt="" width={12} /></div>
            <img src={personImage} alt="" />
            <span><b>Joan</b> has purchased these sneakers right now.</span>
          </div>
        </div>
        <div className="flex gap-4">
          <img src={rightArrow} alt="" className='cursor-pointer' />
          <img src={leftArrow} alt="" className='cursor-pointer' />
        </div>
      </div>
      <FeaturedPros />
      <Accessories />
    </div>
  )
}

export default Home;