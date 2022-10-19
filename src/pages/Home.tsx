import React from 'react'
import heroImg from '../assets/image 3.png'
const Home = () => {
  return (
    <div className='bg-[#F5F5F5] h-screen w-screen pt-24 px-24'>
      <div className="flex flex-wrap">
        <div className="">
          <h1 className='text-5xl text-slate-900 font-bold'>Get your awesome <h1>sneakers.</h1></h1>
        </div>
        <div className="border">
          <img src={heroImg} className="border border-black w1/2 h1/2" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Home