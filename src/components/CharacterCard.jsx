//import PropTypes from "prop-types";

function CharacterCard() {
  return (
    <div className="characterCard">
      <img
        className="personPic"
        src="https://media.revistavanityfair.es/photos/60e84a97a5768ac18af685dd/master/w_1600,c_limit/39710.jpg"
        alt="harry potter"
      />
      <h3 className="personName">Harry Potter</h3>
      <p className="personRace">human</p>
    </div>
  );
}

CharacterCard.propTypes = {};

export default CharacterCard;
