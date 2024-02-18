import PropTypes from "prop-types";
import CharacterCard from "./CharacterCard";
import { Link } from "react-router-dom";

function CharacterSection({ characters, cnf }) {
  return (
    <section className="characterSection">
      {cnf ? (
        <div className="divsy">
          <p className="error">No se ha encontrado al personaje</p>
          <Link className="error_btn" to="/">
            Página principal
          </Link>
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
  cnf: PropTypes.boolean,
};

export default CharacterSection;
