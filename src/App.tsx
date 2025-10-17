import "./App.css";
import AboutMe from "./components/About/AboutMe";
import Header from "./components/Header";
import Info from "./components/Info";
import SectionNav from "./components/Navigation/SectionNav";

function App() {
  return (
    <>
      <Header />
      <div className="container flex justify-between items-center !mt-15 gap-7">
        <Info />
        <main>
          <AboutMe />
        </main>
        <SectionNav />
      </div>
    </>
  );
}

export default App;
