import { useState } from "react";
import {FaTimes} from "react-icons/fa";
import {CiMenuFries} from "react-icons/ci";
import { Link } from "react-scroll";


const Nav = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const content = <>
        <div className="lg:hidden md:hidden block absolute top-16 w-full left-0 right-0 bg-slate-900 transition">
            <ul className="text-center text-xl p-20">
               <Link spy={true} smooth={true} to=''><li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">Home</li> </Link> 
               <Link spy={true} smooth={true} to='About'> <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">About</li> </Link>
               <Link spy={true} smooth={true} to=''> <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">Service</li> </Link>
               <Link spy={true} smooth={true} to=''> <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">Contact</li> </Link>
            </ul>
        </div>
    </>
    return (
        <>
    <div className="h-10vh flex justify-between z-50 text-white lg:px-40 lg:py-5 px-20 py-4 flex-1 shrink-1">
        <div className="flex items-center flex-1">
            <span className="text-3xl font-bold">Logo</span>
        </div>
        <div className="nav-right lg:flex md:flex lg:flex-1 items-center justify-end font-normal hidden">
            <div className="nav-list flex-10">
                <ul className="flex gap-8 mr-16 text-[18px]">
                     <Link spy={true} smooth={true} to=''> <li  className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">Home</li>  </Link> 
                     <Link spy={true} smooth={true} to='About'> <li  className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">About</li>  </Link> 
                     <Link spy={true} smooth={true} to=''> <li  className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">Services</li>  </Link> 
                     <Link spy={true} smooth={true} to='service'> <li  className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">Contact</li>  </Link> 
                </ul>
            </div>
            <div className="nav-button flex-2">
            </div>
        </div>
        <div>
        {click && content}
        </div>
        <button className="menu-icon block sm:hidden transition duration-700 ease-in-out" onClick={handleClick}>
           {click ? <FaTimes/> : <CiMenuFries/>}

        </button>
    </div>
    <div className="border-b border-slate-800"></div>
        </>
    );
};

export default Nav;