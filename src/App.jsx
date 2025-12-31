import "./styles/global.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import TestScores from "./components/TestScores";
import ExtraCurricular from "./components/ExtraCurricular";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />

      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <TestScores />
      <ExtraCurricular />
      <Contact />

      <Footer />
    </>
  );
}
