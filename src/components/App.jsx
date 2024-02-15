import "../scss/App.scss";
import CharacterSection from "./CharacterSection";
import Filters from "./Filters";
import Footer from "./Footer";
import Header from "./Header";

function App() {
  return (
    <div>
      <Header />
      <main className="main">
        <Filters />
        <CharacterSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
