import {useState} from 'react'
import logo from '../assets/Logo.svg'
import {FiSearch} from 'react-icons/fi'
import {FiUser} from 'react-icons/fi'
import {FiShoppingBag} from 'react-icons/fi'
import menu from '../assets/hamburger icon.png'
import { Link } from 'react-router-dom'
const Nav = () => {
  return(
    <nav className='w-full h-[6rem] bg-[#F5F5F5] flex items-center justify-around gap-[15rem] lg:gap-[5rem] lg:px-[5rem] md:gap-[22rem] transition-all overflow-hidden'>
        <img src={logo} alt="logo" className='w-[2rem] lg:w-[3rem] transition-all' />
        <div className="hidden lg:flex lg:h-[5rem] flex-grow items-center justify-center gap-[5rem] transition-all">
            <Link to='/' className='text-lg font-medium'>Foot wear</Link>
            <Link to='/about' className='text-lg font-medium'>About us</Link>
            <Link to='/products' className='text-lg font-medium'>Products</Link>
            <Link to='/sale' className='text-lg font-medium'>Sale</Link>
        </div>
        <div className="w-[10rem] h-[4rem] bg-[bue] flex items-center justify-center gap-8 transition-all">
            <FiSearch className='w-[1.3rem] h-[1.3rem] md:hidden lg:block font-black' />
            <FiUser className='w-[1.5rem] h-[1.5rem] hidden lg:block' />

            <div className="w-fit h-fit relative md:hidden ">
                <FiShoppingBag className='w-[1.5rem] h-[1.5rem] font-bold' />
                <div className='absolute bg-[#FF3C78] w-[1.2rem] h-[1.2rem] rounded-full grid place-content-center text-white right-[-.5rem] top-[.75rem]'>3</div>
            </div>
            <img src={menu} alt="" />
        </div>
    </nav>
  )
}

export default Nav
