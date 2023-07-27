import { FaGithub, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="bg-slate-800 text-white lg:px-48 px-4 py-20">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="mb-4 md:mb-0">

                    <span className="text-3xl font-bold pb-4 uppercase">Logo</span>
                    <p className="text-[16px] my-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. A temporibus beatae quibusdam.</p>
                </div>
                <div className="mb-4 md:mb-0">
                    <h2 className="text-[22px] font-semibold text-fuchsia-800 py-2 uppercase">Services</h2>
                    <ul className="text-[16px] my-4">
                        <li className="my-2">Web Design</li>
                        <li className="my-2">Web Development</li>
                        <li className="my-2">SEO</li>
                        <li className="my-2">E-commerce</li>
                    </ul>
                </div>
                <div className="mb-4 md:mb-0">
                    <h2 className="text-[22px] font-semibold text-fuchsia-800 py-2 uppercase">Contact</h2>
                    <p className="text-[16px] my-4">Email: contact@example.com</p>
                    <p className="text-[16px] my-4">Phone: +1 123-456-7890</p>
                </div>
                <div className="mb-4 md:mb-0">
                    <h2 className="text-[22px] font-semibold text-fuchsia-800 py-2 uppercase">Follow Us</h2>
                    <div className="flex space-x-4">
                        <a href="#" className="text-white hover:text-fuchsia-800 transition-all duration-150 ease-in-out">
                            <FaGithub/>
                        </a>
                        <a href="#" className="text-white hover:text-fuchsia-800 transition-all duration-150 ease-in-out">
                            <FaLinkedinIn/>
                        </a>
                        <a href="#" className="text-white hover:text-fuchsia-800 transition-all duration-150 ease-in-out">
                            <FaTwitter />
                        </a>
                        <a href="#" className="text-white hover:text-fuchsia-800 transition-all duration-150 ease-in-out">
                            <FaInstagram />
                        </a>
                    </div>
                </div>
            </div>
            <div className="border-b border-fuchsia-800 py-4"></div>
            <div className="lg:text-center pt-4"> &copy; {currentYear} Your Company. All rights reserved. </div>
        </footer>

    );
};

export default Footer;