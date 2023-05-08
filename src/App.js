import "./App.css";
import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";
import PlusBackground from "./components/design/PlusBackground.js";

function App() {
  return (
    <main className="App">
      <header>
        <Header />
      </header>
      <Hero />
      <PlusBackground />
    </main>
  );
}

export default App;
