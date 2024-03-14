import PropTypes from "prop-types";

export function Top({ project }) {
  console.log("PROJECT: ", project);

  return (
    <>
      <div className="project-header">
        <p>{project.title}</p>
        <i className="desc">{project.description}</i>
      </div>
    </>
  );
}

Top.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export function TopWithButton({ project }) {
  console.log("PROJECT: ", project);

  return (
    <>
      <div className="project-header">
        <p>{project.title}</p>
        <i className="desc">{project.description}</i>
        <button className="project-button">
          <a href={project.buttonlink} target="_blank">
            {project.buttontext}
          </a>
        </button>
      </div>
    </>
  );
}

TopWithButton.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    buttontext: PropTypes.string.isRequired,
    buttonlink: PropTypes.string.isRequired,
  }).isRequired,
};
