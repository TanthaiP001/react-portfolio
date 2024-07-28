import style from "./App.module.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Hero } from "./components/Hero/Hero";
import { About } from "./components/About/About";
import { Experience } from "./components/Experience/Experience";
import { Projects } from "./components/Projects/Projects";
import { Contact } from "./components/Contact/Contact";
import Slider from "./components/Slider/Slider";

function App() {
  return (
    <div className={style.App}>
      <Navbar />
      <Hero />
      <About />
      <Slider/>
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
