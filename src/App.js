import "./App.css";
import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";

function App() {
  return (
    <main className="App">
      <header>
        <Header />
      </header>
      <Hero />
    </main>
  );
}

export default App;
