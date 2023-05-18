import { useState, useEffect } from "react";
import "./App.css";
import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";
import { HornsModule } from "./HornsModule/HornsModule";
import { BigRedButton } from "./components/BigRedButton/BigRedButton";
import { CarouselContainer } from "./components/CarouselContainer/CarouselContainer";
import startupsImage from "./Assets/images/Startups Thumb.jpg";
import eCommerceImage from "./Assets/images/Ecommerce Thumb.jpg";
import growthStageImage from "./Assets/images/Growth Thumb.jpg";

function App() {
  const [windowWidth, setWindowWidth] = useState(0);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    handleResize();
  }, []);

  window.addEventListener("resize", handleResize);

  const [carouselItems, setCarouselItems] = useState([
    {
      title: "startups",
      imgURL: startupsImage,
    },
    {
      title: "ecommerce",
      imgURL: eCommerceImage,
    },
    {
      title: "growth stage",
      imgURL: growthStageImage,
    },
  ]);

  return (
    <main className="App">
      <header>
        <Header windowWidth={windowWidth} />
      </header>
      <Hero windowWidth={windowWidth} />
      {/* <PlusBackground /> */}
      <BigRedButton text={"Get your free consultation"} location={""} />
      <HornsModule windowWidth={windowWidth} />
      <CarouselContainer
        carouselItems={carouselItems}
        setCarouselItems={setCarouselItems}
      />
    </main>
  );
}

export default App;
