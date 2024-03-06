import Navbar from "./components/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Education from "./pages/Education";
import Footer from "./pages/Footer";
import Hero from "./pages/Hero";
import Project from "./pages/Project";
import Skills from "./pages/Skills";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Project />
      <Contact />
      <Footer /> 
    </>
  );
}

export default App;
