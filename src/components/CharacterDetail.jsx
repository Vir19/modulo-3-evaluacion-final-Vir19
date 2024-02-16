import PropTypes from "prop-types";
import { useParams } from "react-router-dom";

function CharacterDetail({ findCharacter }) {
  const params = useParams();
  const character = findCharacter(params.id);

  return (
    <section className="characterDetail">
      <div className="characterCardDetail">
        <img
          className="personPicDetail"
          src="https://media.revistavanityfair.es/photos/60e84a97a5768ac18af685dd/master/w_1600,c_limit/39710.jpg"
          alt="harry potter"
        />
        <h2 className="personNameDetail">{character.name}</h2>
        <div className="flexy">
          <h3 className="title3">Estatus:</h3>
          <span className="wordies">{character.alive}</span>
        </div>
        <div className="flexy">
          <h3 className="title3">Especie:</h3>
          <span className="wordies">{character.species}</span>
        </div>
        <div className="flexy">
          <h3 className="title3">Género:</h3>
          <span className="wordies">{character.gender}</span>
        </div>
        <div className="flexy">
          <h3 className="title3">Casa:</h3>
          <span className="wordies last">{character.house}</span>
        </div>
      </div>
      <button>Volver</button>
    </section>
  );
}

CharacterDetail.propTypes = {
  findCharacter: PropTypes.func,
};

export default CharacterDetail;
