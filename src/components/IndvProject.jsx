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

export function SectionOne() {
  return (
    <>
      <div className="section-one">
        <p>Who Was This For?</p>
      </div>
    </>
  );
}
