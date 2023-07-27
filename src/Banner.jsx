import {AiFillGithub} from 'react-icons/ai';
import {FaLinkedinIn, FaInstagram} from 'react-icons/fa';
import {FiTwitter} from 'react-icons/fi';
import img from './assets/unique-profile-pictures-for-whatsapp-01.jpg';
import Aos from 'aos';
import { useEffect } from 'react';


const Banner = () => {
    useEffect(()=> {
        Aos.init({duration: 1000});
    }, [])
    
    return (
        <div className="lg:px-56 px-10 lg:py-0 py-20 text-center gap-5 lg:text-start flex lg:flex-row flex-col-reverse  justify-between lg:gap-28 items-center">
            <div data-aos="fade-up" className="h-full lg:py-40 flex flex-col justify-center lg:items-start items-center text-white">
                <h1 className="text-[52px] font-semibold mb-8 leading-normal">Welcome To <span className='text-fuchsia-500'> My Website</span></h1>
                <p className='text-[18px] text-slate-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga ipsa harum illum tempore laboriosam voluptas ut quis rem. Ipsum id corporis ad architecto mollitia ipsam, nemo obcaecati molestias consectetur dolorem.</p>
                <div className='flex mt-8 gap-2'>
     <div className="flex items-center justify-center">
        <div className="flex space-x-2">
            <a href="#" className="text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2">
            <AiFillGithub className='text-[28px]'/>
            </a>
            <a href="#" className="text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2">
            <FaLinkedinIn className='text-[28px]'/>
            </a>
            <a href="#" className="text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2">
            <FiTwitter className='text-[28px]'/>
            </a>
            <a href="#" className="text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2">
            <FaInstagram className='text-[28px]'/>
            </a>
          
        </div>
    </div>

                </div>
            </div>
            <img width={290} height={290} className='rounded-full border-2 p-1 animation-spin border-fuchsia-500 img_glow' src={img} alt="" />
        </div>
    );
};

export default Banner;