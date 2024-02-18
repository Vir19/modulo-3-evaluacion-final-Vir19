import "../scss/App.scss";
import { useEffect, useState } from "react";
import { fetchCharacters } from "../services/fetch";
import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import Filters from "./Filters";
import CharacterSection from "./CharacterSection";
import CharacterDetail from "./CharacterDetail";
import Footer from "./Footer";

function App() {
  // Variables de estado

  const [characters, setCharacters] = useState([]);
  const [filterHouse, setFilterHouse] = useState("all");
  const [filterCharacter, setFilterCharacter] = useState("");

  useEffect(() => {
    fetchCharacters().then((data) => {
      setCharacters(data);
    });
  }, []);

  // Funciones Handler

  const handleFilterHouse = (house) => {
    setFilterHouse(house);
  };

  const handleFilterCharacter = (filterValue) => {
    console.log("filterValue", filterValue);
    setFilterCharacter(filterValue);
  };
  // Variables HTML

  const findCharacter = (id) => {
    return characters.find((character) => character.id === id);
  };

  const filteredHouse =
    filterHouse === "all"
      ? characters
      : characters.filter(
          (character) =>
            character.house.toLowerCase() === filterHouse.toLowerCase()
        );

  const filteredCharacter = characters.filter((character) =>
    character.name.toLowerCase().includes(filterCharacter.toLowerCase())
  );

  const filteredSection =
    filterHouse === "all" ? filteredCharacter : filteredHouse;

  console.log("filteredCharacter:", filteredCharacter);

  return (
    <div>
      <Header />
      <main className="main">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Filters
                  filterHouse={filterHouse}
                  handleFilterHouse={handleFilterHouse}
                  filterCharacter={filterCharacter}
                  handleFilterCharacter={handleFilterCharacter}
                />
                <CharacterSection
                  characters={filteredSection}
                  // filteredCharacter={filteredCharacter}
                />
              </>
            }
          />
          <Route
            path="/character/:id"
            element={<CharacterDetail findCharacter={findCharacter} />}
          />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
