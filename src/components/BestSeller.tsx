import React from 'react'
import Switch from './Switch';
import bestSellerPic from '../assets/image6.png';

const BestSeller = () => {
  return (
    <div className='w-full h-[120vh] bg-white py-[4rem]'>
        <div className="flex flex-wrap items-center justify-center gap-5">
            <h1 className="tracking-wide text-2xl text-[#0A083A] font-bold text-center">Best seller this week</h1>
            <div className="flex gap-4 items-center justify-center">
              <span className='text-lg font-medium text-[#0A083A]'>Men</span>
              <Switch />
              <span className='text-lg font-medium text-[#0A083A]'>women</span>
            </div>
        </div>
        <div className="h-[80%] w-full flex flex-wrap justify-between gap-2">
          <div className="h-1/2 w-full bg-[blue] flex items-center justify-start relative">
            <div className="h-[58%] w-1/2 rounded-tr-xl rounded-br-xl" style={{background: "linear-gradient(270deg, #FF3C78 2.8%, #FFB2B2 100%)"}}></div>
            <img src={bestSellerPic} alt="" className='z-10 absolute left-[-10%]' />
            <div className="w-6 h-6 rounded-full grid place-items-center z-10 absolute top-[5rem] left-[0rem]" style={{background: "linear-gradient(270deg, #02BE83 0%, #B3F6DC 100%)"}}>
              <div className="w-2 h-2 rounded-full bg-white"></div>
            </div>
            <div className="w-6 h-6 rounded-full grid place-items-center z-10 absolute top-[2rem] left-[0rem]" style={{background: "linear-gradient(270deg, #02BE83 0%, #B3F6DC 100%)"}}>
              <div className="w-2 h-2 rounded-full bg-white"></div>
            </div>
            <div className="w-6 h-6 rounded-full grid place-items-center z-10 absolute top-[8rem] left-[0rem]" style={{background: "linear-gradient(270deg, #02BE83 0%, #B3F6DC 100%)"}}>
              <div className="w-2 h-2 rounded-full bg-white"></div>
            </div>
          </div>
          <div className="h-1/2 w-full bg-[blue]"></div>
        </div>
    </div>
  )
}

export default BestSeller;




// https://github.com/CryceTruly/trulyexpensesyoutube.git