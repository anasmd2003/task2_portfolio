import Intro from "./Components/Intro/Intro";
import NavBar from "./Components/NavBar/NavBar";
import Skills from "./Components/Skills/Skills";
import Works from "./Components/Works/Works";
import Contact from "./Components/Contact/Contact";
import Footer from  "./Components/Footer/Footer";

// import { Check } from "./Components/Check/Check";

function App() {
  return (
    <div className="App">
    <NavBar/>
    <Intro/>
    <Skills/>
    <Works/>
    <Contact/>
    <Footer/>
    {/* <Check/> */}
    </div>
  );
}

export default App;
