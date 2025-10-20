import { Activity, useEffect, useState } from "react";
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
  const [isWide, setIsWide] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsWide(window.innerWidth > 1450);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <Header />
      <div className="container flex 2xl:flex-row flex-col justify-between items-center !mt-15 gap-8">
        <Info />
        <Activity mode={!isWide ? "visible" : "hidden"}>
          <SectionNav />
        </Activity>
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
        <Activity mode={isWide ? "visible" : "hidden"}>
          <SectionNav />
        </Activity>
      </div>
    </>
  );
}

export default App;
