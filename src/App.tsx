import "./App.css";
import AboutMe from "./components/About/AboutMe";
import { useSectionContext } from "./components/contexts/SectionContext";
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
          {currentSection === "experience" && <div>Experience Section</div>}
        </main>
        <SectionNav />
      </div>
    </>
  );
}

export default App;
