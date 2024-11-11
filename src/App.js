import Navbar from "./Components/Navbar";
import "./"
import Hero from "./Components/Hero";
import About from "./Components/About";
import Project from "./Components/Project";
import Resume from "./Components/Resume";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Skill from "./Components/Skill";



function App() {
  return (
    <div className="App bg-black ">
     <Navbar/>
     <Hero/>
     <About/>
     <Skill/>
     <Project/>
     <Resume/>
     <Contact/>
     <Footer/>
    </div>
  );
}

export default App;
