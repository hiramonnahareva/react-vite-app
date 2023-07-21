import img from './assets/unique-profile-pictures-for-whatsapp-01.jpg';
import AOS from 'aos'
import 'aos/dist/aos.css'
const About = () => {


    AOS.init({
        easing: 'ease-out-quart',
        delay: 0,
        duration: 750
    })
    return (
        <div id="About" className="lg:px-56 px-10 lg:py-0 py-20 text-center gap-5 lg:text-start flex lg:flex-row flex-col justify-between lg:gap-28 items-center">
            <img data-aos="fade-down" width={290} height={290} className='rounded-2xl border-2 p-1 animation-spin border-fuchsia-500 img_glow' src={img} alt="" />
            <div className="h-full lg:py-40 flex flex-col justify-center lg:items-start items-center text-white">
                <h1 data-aos="fade-right" className="text-[52px] font-semibold mb-8 leading-normal"><span className='text-fuchsia-500'> About Me</span></h1>
                <p data-aos="fade-left" className='text-[18px] text-slate-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga ipsa harum illum tempore laboriosam voluptas ut quis rem. Ipsum id corporis ad architecto mollitia ipsam, nemo obcaecati molestias consectetur dolorem.</p>
                <div className='flex mt-8 gap-2'>
                    {/* <div className="flex items-center justify-center"> */}
                        <div className="container my-5 p-4 ">
                        
                            <a href="#" className="neno-button shadow-xl hover:shadow-fuchsia-800/50 text-white border-2 hover:bg-fuchsia-800 border-fuchsia-800 rounded-lg py-4 px-8 uppercase relative overflow-hidden hover">Hover Me</a>
                        </div>
                    {/* </div> */}

                </div>

            </div>

        </div>
    );
};

export default About;