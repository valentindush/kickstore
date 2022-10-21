import {useState} from 'react'
import logo from '../assets/Logo.svg'
import {FiSearch} from 'react-icons/fi'
import {FiUser} from 'react-icons/fi'
import {FiShoppingBag} from 'react-icons/fi'
import menu from '../assets/hamburger icon.png'
import { Link } from 'react-router-dom'
const Nav = () => {
  return(
    <nav className='w-full h-[6rem] bg-[#F5F5F5] flex items-center justify-around px-[7rem] miniTablet:gap-[18rem] gap-[12rem] lg:gap-[5rem] lg:px-[5rem] md:gap-[22rem] transition-all overflow-hidden'>
        <img src={logo} alt="logo" className='w-[2rem] lg:w-[3rem] transition-all' />
        <div className="hidden lg:flex lg:h-[5rem] flex-grow items-center justify-center gap-[5rem] transition-all">
            <Link to='/' className='text-lg font-medium'>Foot wear</Link>
            <Link to='/about' className='text-lg font-medium'>About us</Link>
            <Link to='/products' className='text-lg font-medium'>Products</Link>
            <Link to='/sale' className='text-lg font-medium'>Sale</Link>
        </div>
        <div className="min-w-[10rem] lg:w-[20rem] h-[4rem] sm:min-w-[8rem] bg-[bue] bg-blue] flex items-center justify-center gap-8 lg:gap-[3rem] sm:gap-8 transition-all">
            <FiSearch className='w-[1.3rem] lg:w-[2rem] miniTablet:w-[3rem] miniTablet:h-[1.5rem] lg:h-[1.5rem] h-[1.3rem] sm:w-[1rem] block md:hidden lg:block font-black' />
            <FiUser className='w-[1.5rem] h-[1.5rem] hidden lg:block' />

            <div className="w-fit h-fit relative md:hidden lg:block">
                <FiShoppingBag className='w-[1.5rem] sm:w-[1rem] miniTablet:w-[1.75rem] lg:w-[2rem] h-[1.5rem] font-bold' />
                <div className='absolute bg-[#FF3C78] w-[1.2rem] sm:w-[.9rem] sm:h-[.9rem] lg:w-[1rem] lg:h-[1rem] h-[1.2rem] sm:text-xs rounded-full grid place-content-center text-white right-[-.5rem] miniTablet:right-[-.3rem]  lg:right-[-.3rem] top-[.75rem]'>3</div>
            </div>
            <img src={menu} alt="" className='sm:w-[1rem] lg:hidden miniTablet:w-[2rem]' />
        </div>
    </nav>
  )
}

export default Nav
