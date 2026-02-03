import { useEffect } from "react";
import style from "./App.module.css";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import { Hero } from "./components/Hero/Hero";
import { About } from "./components/About/About";
import { Experience } from "./components/Experience/Experience";
import { Skills } from "./components/Skills/Skills";
import { Profile } from "./components/Profile/Profile";
import { Projects } from "./components/Projects/Projects";
import { Contact } from "./components/Contact/Contact";
import Slider from "./components/Slider/Slider";

function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Profile />
      <Projects />
      <Contact />
    </>
  );
}

function ScrollToHash() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (pathname === "/" && hash) {
      const id = hash.slice(1);
      const el = document.getElementById(id);
      if (el) {
        requestAnimationFrame(() => el.scrollIntoView({ behavior: "smooth" }));
      }
    }
  }, [pathname, hash]);
  return null;
}

function App() {
  return (
    <Router>
      <ScrollToHash />
      <div className={style.App}>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/slider" element={<Slider />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
