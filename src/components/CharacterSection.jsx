import PropTypes from "prop-types";

import CharacterCard from "./CharacterCard";
//import CharacterDetail from "./CharacterDetail";

function CharacterSection({ characters }) {
  return (
    <section className="characterSection">
      {characters.map((character) => (
        <CharacterCard key={character.id} character={character} />
      ))}
      {/* <CharacterDetail /> */}
    </section>
  );
}

CharacterSection.propTypes = {
  characters: PropTypes.array,
};

export default CharacterSection;
