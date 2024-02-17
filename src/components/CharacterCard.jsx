import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function CharacterCard({ character }) {
  return (
    <Link className="link" to={`/character/${character.id}`}>
      <div className="characterCard" key={character.id}>
        <img className="personPic" src={character.image} alt={character.name} />
        <h3 className="personName">{character.name}</h3>
        <p className="personRace">{character.species}</p>
      </div>
    </Link>
  );
}

CharacterCard.propTypes = {
  character: PropTypes.object.isRequired,
};

export default CharacterCard;
