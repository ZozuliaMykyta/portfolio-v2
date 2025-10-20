import { Activity } from "react";
import "./App.css";
import AboutMe from "./components/About/AboutMe";
import { useSectionContext } from "./components/contexts/SectionContext";
import Experience from "./components/Experience/experience";
import Header from "./components/Header";
import Info from "./components/Info";
import SectionNav from "./components/Navigation/SectionNav";
import ProjectsList from "./components/Projects/ProjectsList";
import Skills from "./components/Skills/Skills";
import ContactMe from "./components/contact/ContactMe";

function App() {
  const { currentSection } = useSectionContext();
  return (
    <>
      <Header />
      <div className="container flex justify-between items-center !mt-15 gap-8">
        <Info />
        <main>
          <Activity mode={currentSection === "about" ? "visible" : "hidden"}>
            <AboutMe />
          </Activity>
          <Activity
            mode={currentSection === "experience" ? "visible" : "hidden"}
          >
            <Experience />
          </Activity>
          <Activity mode={currentSection === "projects" ? "visible" : "hidden"}>
            <ProjectsList />
          </Activity>
          <Activity mode={currentSection === "skills" ? "visible" : "hidden"}>
            <Skills />
          </Activity>
          <Activity mode={currentSection === "contact" ? "visible" : "hidden"}>
            <ContactMe />
          </Activity>
        </main>
        <SectionNav />
      </div>
    </>
  );
}

export default App;
