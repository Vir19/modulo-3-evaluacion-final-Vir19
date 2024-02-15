//import PropTypes from 'prop-types';

function CharacterDetail() {
  return (
    <div className="characterCardDetail">
      <img
        className="personPicDetail"
        src="https://media.revistavanityfair.es/photos/60e84a97a5768ac18af685dd/master/w_1600,c_limit/39710.jpg"
        alt="harry potter"
      />
      <h2 className="personNameDetail">Harry Potter</h2>
      <div className="flexy">
        <h3 className="title3">Estatus:</h3>
        <span className="wordies">Vivo</span>
      </div>
      <div className="flexy">
        <h3 className="title3">Especie:</h3>
        <span className="wordies">Humano</span>
      </div>
      <div className="flexy">
        <h3 className="title3">Género:</h3>
        <span className="wordies">Hombre</span>
      </div>
      <div className="flexy">
        <h3 className="title3">Casa:</h3>
        <span className="wordies last">Gryffindor</span>
      </div>
    </div>
  );
}

CharacterDetail.propTypes = {};

export default CharacterDetail;
