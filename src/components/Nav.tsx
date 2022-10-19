import {useState} from 'react'
import logo from '../assets/Logo.svg'
import {FiSearch} from 'react-icons/fi'
import {FiUser} from 'react-icons/fi'
import {FiShoppingBag} from 'react-icons/fi'
const Nav = () => {

    const [active, setActive] = useState("footwear")
    const changeActive = (el:string)=>{
        setActive(el)
    }

  return(
    <nav className='flex items-center justify-between absolute top-0 w-full px-24'>
        <div className=" flex items-start justify-center pt-4">
            <img src={logo} className="w-[42px] h-[42px]" alt="" />
        </div>
        <div className="">
            <div className="flex gap-7">
                <a onClick={()=>changeActive("footwear")} href="#" className={`${active=="footwear"?"text-[#FF3C78]":"text-slate-900"} p-2 font-regular text-lg hover:text-[#FF3C78] relative`}>Footwear
                    {active === "footwear" && <div className="absolute -bottom-1 left-[40%] w-2 h-2 rounded-full bg-[#FF3C78]"></div>}
                </a>
                <a onClick={()=>changeActive("about")} href="#" className={`${active=="about"?"text-[#FF3C78]":"text-slate-800"} p-2 font-regular text-lg hover:text-[#FF3C78] relative`}>About us
                    {active === "about" && <div className="absolute -bottom-1 left-[40%] w-2 h-2 rounded-full bg-[#FF3C78]"></div>}
                </a>
                <a onClick={()=>changeActive("products")} href="#" className={`${active=="products"?"text-[#FF3C78]":"text-slate-800"} p-2 font-regular text-lg hover:text-[#FF3C78] relative`}>Products
                    {active === "products" && <div className="absolute -bottom-1 left-[40%] w-2 h-2 rounded-full bg-[#FF3C78]"></div>}
                </a>
                <a onClick={()=>changeActive("sale")} href="#" className={`${active=="sale"?"text-[#FF3C78]":"text-slate-800"} p-2 font-regular text-lg hover:text-[#FF3C78] relative`}>Sale
                    {active === "sale" && <div className="absolute -bottom-1 left-[40%] w-2 h-2 rounded-full bg-[#FF3C78]"></div>}
                </a>
               
            </div>
        </div>
        <div className="">
            <div className="flex gap-8">
                <a href="#">
                    <FiSearch className='w-6 h-6' />
                </a>
                <a href="#">
                    <FiUser className='w-6 h-6' />
                </a>
                <a href="#" className='relative'>
                    <FiShoppingBag className='w-6 h-6' />
                    <div className="absolute w-4 h-4 bg-[#FF3C78] flex items-center justify-center rounded-full -bottom-1 -right-1">
                        <p className='text-white text-[9px]'>3</p>
                    </div>
                </a>
            </div>
        </div>
    </nav>
  )
}

export default Nav