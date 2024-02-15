import { useEffect, useState } from "react";
import "../scss/App.scss";
import CharacterSection from "./CharacterSection";
import Filters from "./Filters";
import Footer from "./Footer";
import Header from "./Header";
import { fetchCharacters } from "../services/fetch";
//import { fetchCharacters } from "../services/fetch";

function App() {
  // Variables de estado
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetchCharacters().then((data) => {
      const limitedCharacters = data.slice(0, 20);
      setCharacters(limitedCharacters);
    });
  }, []);

  // Funciones Handler

  // Variables HTML

  return (
    <div>
      <Header />
      <main className="main">
        <Filters />
        <CharacterSection characters={characters} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
