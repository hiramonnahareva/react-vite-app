
const Contact = () => {
    return (
        <div id="Contact" className="p-4 lg:p-20 flex flex-col items-center justify-center">
        <h1 data-aos="fade-left" className="text-[52px] font-semibold mb-20 leading-normal uppercase text-fuchsia-500">Contact</h1>
        {/* <div className="flex justify-around gap-10"> */}
            <form action="" className="flex flex-col gap-2 lg:w-1/2">
               <div className="lg:flex gap-6">
               <input className="w-full h-15 my-3 rounded-lg bg-slate-800 p-4 border-2 border-fuchsia-800 b_glow text-xl text-slate-500" placeholder="Your Name" type="text" />
                <input className="w-full h-15 my-3 rounded-lg bg-slate-800 p-4 border-2 border-fuchsia-800 b_glow text-xl text-slate-500" placeholder="Your Email" type="email" />
               </div>
               <textarea className="w-full h-15 my-3 rounded-lg bg-slate-800 p-4 border-2 border-fuchsia-800 b_glow text-xl text-slate-500" placeholder="Write Your Massage..." name="" id="" cols="20" rows="10"></textarea>
               <button className="neno-button shadow-xl hover:shadow-fuchsia-800/50  text-white border-2 bg-fuchsia-800 border-fuchsia-800 hover:bg-slate-900 rounded-lg py-4 px-8 uppercase relative overflow-hidden b_glow my-6 text-xl text-bold" type="submit">Submit</button>
            </form>
           
        {/* </div> */}
    </div>
    );
};

export default Contact;