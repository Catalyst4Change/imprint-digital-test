import { useState, useEffect } from "react";
import "./App.css";
import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";
import { HornsModule } from "./HornsModule/HornsModule";
import { BigRedButton } from "./components/BigRedButton/BigRedButton";
import { Carousel } from "./components/Carousel/Carousel";

function App() {
  const [windowWidth, setWindowWidth] = useState(0);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    handleResize();
  }, []);

  window.addEventListener("resize", handleResize);

  const carouselItems = [
    {
      title: "startups",
      imgURL: "https://picsum.photos/200",
    },
    {
      title: "ecommerce",
      imgURL: "https://picsum.photos/200",
    },
    {
      title: "growth stage",
      imgURL: "https://picsum.photos/200",
    },
  ];

  return (
    <main className="App">
      <header>
        <Header windowWidth={windowWidth} />
      </header>
      <Hero windowWidth={windowWidth} />
      {/* <PlusBackground /> */}
      <BigRedButton text={"Get your free consultation"} location={""} />
      <HornsModule windowWidth={windowWidth} />
      <Carousel items={carouselItems} />
    </main>
  );
}

export default App;
