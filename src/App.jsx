import About from "./Components/About";
import Banner from "./Components/Banner";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Nav from "./Components/Nav";
import Projects from "./Components/Projects";
import Serivces from "./Components/Serivces";

const App = () => {
  return (
    <div className="bg-slate-900">
      <Nav/>
      <Banner/>
      <About/>
      <Serivces/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
};

export default App;
