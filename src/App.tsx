import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SectionErrorBoundary from "./components/SectionErrorBoundary";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Internships from "./sections/Internships";
import Education from "./sections/Education";
import Certifications from "./sections/Certifications";
import Resume from "./sections/Resume";
import CTA from "./sections/CTA";
import Contact from "./sections/Contact";

function App() {
  return (
    <>
      <SectionErrorBoundary name="navigation">
        <Navbar />
      </SectionErrorBoundary>

      <main>
        <SectionErrorBoundary name="hero">
          <Hero />
        </SectionErrorBoundary>
        <SectionErrorBoundary name="about">
          <About />
        </SectionErrorBoundary>
        <SectionErrorBoundary name="skills">
          <Skills />
        </SectionErrorBoundary>
        <SectionErrorBoundary name="projects">
          <Projects />
        </SectionErrorBoundary>
        <SectionErrorBoundary name="internships">
          <Internships />
        </SectionErrorBoundary>
        <SectionErrorBoundary name="education">
          <Education />
        </SectionErrorBoundary>
        <SectionErrorBoundary name="certifications">
          <Certifications />
        </SectionErrorBoundary>
        <SectionErrorBoundary name="resume">
          <Resume />
        </SectionErrorBoundary>
        <SectionErrorBoundary name="call to action">
          <CTA />
        </SectionErrorBoundary>
        <SectionErrorBoundary name="contact">
          <Contact />
        </SectionErrorBoundary>
      </main>

      <SectionErrorBoundary name="footer">
        <Footer />
      </SectionErrorBoundary>
    </>
  );
}

export default App;
