import { useState, useEffect } from "react";
import "./App.css";
import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";
import { HornsModule } from "./HornsModule/HornsModule";
import { BigRedButton } from "./components/BigRedButton/BigRedButton";

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
      <BigRedButton text={"Get your free consultation"} location={""} />{" "}
      <HornsModule windowWidth={windowWidth} />
    </main>
  );
}

export default App;
