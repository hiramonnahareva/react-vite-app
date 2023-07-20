
function App() {

  return (
    <>
    <div className="px-40 flex py-5 justify-between bg-slate-900">
    <h1 className="text-xl text-white font-bold">LOGO</h1>
    <ul className="text-white flex gap-10">
      <li className="hover:text-blue-400 hover:cursor-pointer transition-all delay-75 hover:border-b-2 border-blue-400">Home</li>
      <li className="hover:text-blue-400 hover:cursor-pointer transition-all delay-75 hover:border-b-2 border-blue-400">About</li>
      <li className="hover:text-blue-400 hover:cursor-pointer transition-all delay-75 hover:border-b-2 border-blue-400">Blogs</li>
      <li className="hover:text-blue-400 hover:cursor-pointer transition-all delay-75 hover:border-b-2 border-blue-400">Service</li>
    </ul>
    </div>
    <div className="border-b border-gray-300"></div>

   <div className="flex">
    
   <div className="bg-slate-900 text-white gap-4 py-60 px-40 h-full flex flex-col justify-center mt-0">
      <h2 className="text-4xl  ">Welcome To My Website</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident quasi, saepe, consequuntur temporibus officia dolores sunt vitae quam a tempora quas eos amet. Odio ipsa, harum reprehenderit dignissimos eaque minima?</p>
    </div>
   </div>
    
 
    </>
  )
}

export default App
