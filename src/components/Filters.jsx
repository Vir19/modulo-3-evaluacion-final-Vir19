import PropTypes from "prop-types";

function Filters({
  filterHouse,
  handleFilterHouse,
  handleFilterCharacter,
  filterCharacter,
}) {
  // FILTRO CASAS

  const handleChange = (event) => {
    handleFilterHouse(event.currentTarget.value);
  };

  // FILTRO NOMBRE PERSONAJE

  const handleChangeCharacter = (event) => {
    const newValue = event.currentTarget.value;
    handleFilterCharacter(newValue);
  };

  return (
    <form className="form" onSubmit={(e) => e.preventDefault()}>
      <fieldset className="fieldset1">
        <legend className="legend1">Busca por personaje:</legend>
        <input
          className="input"
          type="text"
          name="filterCharacter"
          id="filterCharacter"
          onChange={handleChangeCharacter}
          value={filterCharacter}
        />
      </fieldset>
      <fieldset className="fieldset2">
        <legend className="legend2">Selecciona la casa:</legend>
        <select
          className="select"
          name="filterHouse"
          id="filterHouse"
          onChange={handleChange}
          value={filterHouse}
        >
          <option value="all">Todas</option>
          <option value="gryffindor">Gryffindor</option>
          <option value="slytherin">Slytherin</option>
          <option value="hufflepuff">Hufflepuff</option>
          <option value="ravenclaw">Ravenclaw</option>
        </select>
      </fieldset>
    </form>
  );
}

Filters.propTypes = {
  filterHouse: PropTypes.string,
  filterCharacter: PropTypes.string,
  handleFilterHouse: PropTypes.func,
  handleFilterCharacter: PropTypes.func,
};

export default Filters;
