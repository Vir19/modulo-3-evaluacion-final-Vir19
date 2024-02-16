import PropTypes from "prop-types";

function Filters({ filterHouse, handleFilterHouse }) {
  const handleChange = (event) => {
    const selectedHouse = event.currentTarget.value;
    handleFilterHouse(event.currentTarget.value);
    console.log(selectedHouse);
  };

  return (
    <form className="form">
      <fieldset className="fieldset1">
        <legend className="legend1">Busca por personaje:</legend>
        <input
          className="input"
          type="text"
          name="filterCharacter"
          id="filterCharacter"
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
          <option value="all">Todos</option>
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
  handleFilterHouse: PropTypes.func,
};

export default Filters;
