import "./App.css";
import Header from "./components/Header";
import Info from "./components/Info";

function App() {
  return (
    <>
      <Header />
      <div className="container flex justify-between items-center !mt-10">
        <Info />
        <main></main>
      </div>
    </>
  );
}

export default App;
