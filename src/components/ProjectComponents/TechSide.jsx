import PropTypes from "prop-types";

export function TechSide({ info }) {
  return (
    <>
      <div className="project-tech-container">
        <div className="project-tech-card">
          <p className="upper">{info.title}</p>
          <p>{info.tech1}</p>
          <p>{info.tech2}</p>
          <p>{info.tech3}</p>
          <p>{info.tech4}</p>
          <p>{info.tech5}</p>
        </div>
      </div>
    </>
  );
}

TechSide.propTypes = {
  info: PropTypes.shape({
    title: PropTypes.string.isRequired,
    tech1: PropTypes.string.isRequired,
    tech2: PropTypes.string.isRequired,
    tech3: PropTypes.string.isRequired,
    tech4: PropTypes.string.isRequired,
    tech5: PropTypes.string.isRequired,
  }).isRequired,
};
