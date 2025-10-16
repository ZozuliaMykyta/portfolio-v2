import "./App.css";
import AboutMe from "./components/About/AboutMe";
import Header from "./components/Header";
import Info from "./components/Info";

function App() {
  return (
    <>
      <Header />
      <div className="container flex justify-between items-center !mt-15 gap-12">
        <Info />
        <main>
          <AboutMe />
        </main>
      </div>
    </>
  );
}

export default App;
