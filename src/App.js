import { useState, useEffect } from "react";
import "./App.css";
import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";
import PlusBackground from "./components/design/PlusBackground.js";
import { ConsultButton } from "./components/ConsultButton/ConsultButton";

function App() {
  const [windowWidth, setWindowWidth] = useState(0);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    handleResize();
  }, []);

  window.addEventListener("resize", handleResize);

  return (
    <main className="App">
      <header>
        <Header windowWidth={windowWidth} />
      </header>
      <Hero windowWidth={windowWidth} />
      {/* <PlusBackground /> */}
      <ConsultButton />
    </main>
  );
}

export default App;
