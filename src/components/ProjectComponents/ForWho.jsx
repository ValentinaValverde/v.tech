import PropTypes from "prop-types";

export function ForWho({ info }) {
  return (
    <>
      <div>
        <div className="info-container">
          <img src={info.img} className="img" />
          <div className="info">
            <p className="upper">{info.objective}</p>
            <p>{info.script}</p>
          </div>
        </div>

        <div></div>
      </div>
    </>
  );
}

ForWho.propTypes = {
  info: PropTypes.shape({
    img: PropTypes.string.isRequired,
    script: PropTypes.string.isRequired,
    objective: PropTypes.string.isRequired,
  }).isRequired,
};
