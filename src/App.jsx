import About from "./components/About";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import { portfolioConfig } from "./config/portfolioConfig";

export default function App() {
  const {
    personal,
    resume,
    social,
    contact,
    aboutHighlights,
    skills,
    projects,
    education,
    experienceAndTraining,
    achievements,
  } = portfolioConfig;

  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <Navbar personal={personal} resume={resume} />

      <main id="main-content">
        <Hero personal={personal} resume={resume} social={social} />
        <About personal={personal} highlights={aboutHighlights} />
        <Skills skills={skills} />
        <Projects projects={projects} />
        <Education education={education} />
        <Experience items={experienceAndTraining} />
        <Achievements achievements={achievements} />
        <Contact personal={personal} social={social} contact={contact} />
      </main>

      <Footer personal={personal} social={social} />
    </>
  );
}
