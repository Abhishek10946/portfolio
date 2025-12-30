import "./styles/global.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import ExtraCurricular from "./components/ExtraCurricular";
import TestScores from "./components/TestScores";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Education />
      <Skills />
      <ExtraCurricular />
      <TestScores />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
