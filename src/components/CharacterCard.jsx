import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function CharacterCard({ character }) {
  const placeHolderPicture =
    "https://mir-s3-cdn-cf.behance.net/projects/404/dfaf93111214253.Y3JvcCwyMjgwLDE3ODMsMCw1MA.jpg";

  return (
    <Link className="link" to={`/character/${character.id}`}>
      <div className="characterCard" key={character.id}>
        <img
          className="personPic"
          src={character.image || placeHolderPicture}
          alt={character.name}
        />
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
