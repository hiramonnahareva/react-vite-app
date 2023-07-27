import img1 from '../assets/Untitled design (5).png';
import img2 from '../assets/Untitled design (6).png';
import img3 from '../assets/Untitled design (7).png';
import img4 from '../assets/Untitled design (8).png';

const Projects = () => {
    return (
        <div id="Projects" className="p-20 flex flex-col items-center justify-center">
        <h1 data-aos="fade-left" className="text-[52px] font-semibold mb-20 leading-normal uppercase text-fuchsia-500">Projects</h1>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-around gap-10">
            <img width={250} height={300} data-aos="fade-down" className="flex items-center justify-center p-1 rounded-lg border-2 border-fuchsia-800 b_glow" src={img1} alt="" />
            <img width={250} height={300} data-aos="fade-up" className="flex items-center justify-center p-1 rounded-lg border-2 border-fuchsia-800 b_glow" src={img2} alt="" />
            <img width={250} height={300} data-aos="fade-down" className="flex items-center justify-center p-1 rounded-lg border-2 border-fuchsia-800 b_glow" src={img3} alt="" />
            <img width={250} height={300} data-aos="fade-up" className="flex items-center justify-center p-1 rounded-lg border-2 border-fuchsia-800 b_glow" src={img4} alt="" />
           
        </div>
    </div>
    );
};

export default Projects;