import PropTypes from "prop-types";

function CharacterCard({ character }) {
  return (
    <div className="characterCard" key={character.id}>
      <img className="personPic" src={character.image} alt={character.name} />
      <h3 className="personName">{character.name}</h3>
      <p className="personRace">{character.species}</p>
    </div>
  );
}

CharacterCard.propTypes = {
  character: PropTypes.object,
};

export default CharacterCard;
