import "../scss/App.scss";

function App() {
  return (
    <div>
      <header className="header">
        <h1 className="header-title">Harry Popotes</h1>
      </header>
      <main className="main">
        <form className="form">
          <fieldset className="fieldset1">
            <legend className="legend1" htmlFor="filterCharacter">
              Busca por personaje:
            </legend>
            <input
              className="input"
              type="text"
              name="filterCharacter"
              id="filterCharacter"
            />
          </fieldset>
          <fieldset className="fieldset2">
            <legend className="legend2" htmlFor="filterHouse">
              Selecciona la casa:
            </legend>
            <select className="select" name="filterHouse" id="filterHouse">
              <option value="gryffindor">Gryffindor</option>
              <option value="slytherin">Slytherin</option>
              <option value="hufflepuff">Hufflepuff</option>
              <option value="ravenclaw">Ravenclaw</option>
            </select>
          </fieldset>
        </form>
        <section className="characterSection">
          <div className="characterCard">
            <img
              className="personPic"
              src="https://media.revistavanityfair.es/photos/60e84a97a5768ac18af685dd/master/w_1600,c_limit/39710.jpg"
              alt="harry potter"
            />
            <h3 className="personName">Harry Potter</h3>
            <p className="personRace">human</p>
          </div>
        </section>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
