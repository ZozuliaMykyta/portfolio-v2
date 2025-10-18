import "./App.css";
import AboutMe from "./components/About/AboutMe";
import { useSectionContext } from "./components/contexts/SectionContext";
import Experience from "./components/Experience/experience";
import Header from "./components/Header";
import Info from "./components/Info";
import SectionNav from "./components/Navigation/SectionNav";

function App() {
  const { currentSection } = useSectionContext();
  return (
    <>
      <Header />
      <div className="container flex justify-between items-center !mt-15 gap-8">
        <Info />
        <main>
          {currentSection === "about" && <AboutMe />}
          {currentSection === "experience" && <Experience />}
        </main>
        <SectionNav />
      </div>
    </>
  );
}

export default App;
