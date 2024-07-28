import style from "./App.module.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import { Hero } from "./components/Hero/Hero";
import { About } from "./components/About/About";
import { Experience } from "./components/Experience/Experience";
import { Projects } from "./components/Projects/Projects";
import { Contact } from "./components/Contact/Contact";
import Slider from "./components/Slider/Slider";

function App() {
  return (
    <Router>
      <div className={style.App}>
        <Navbar />
        <Hero />
        <Routes>
          <Route path="/slider" element={<Slider />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
        <Contact />
      </div>
    </Router>
  );
}

export default App;
