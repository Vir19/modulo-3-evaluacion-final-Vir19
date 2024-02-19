import PropTypes from "prop-types";
import CharacterCard from "./CharacterCard";

function CharacterSection({ characters, cnf }) {
  return (
    <section className="characterSection">
      {cnf ? (
        <div className="divsy">
          <p className="error">No se ha encontrado al personaje</p>
        </div>
      ) : (
        characters.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))
      )}
    </section>
  );
}

CharacterSection.propTypes = {
  characters: PropTypes.array,
  cnf: PropTypes.bool,
};

export default CharacterSection;
