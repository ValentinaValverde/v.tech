import PropTypes from 'prop-types';

export default function ProjectCard({ info }) {
  return (
    <>
      <a href={`projects/${info.projectname}`} className="ft-work-card">
        <img src={info.img} alt="" className="image" />
        <div className="card-info">
          <div>
            <p>{info.title}</p>
            <i>{info.desc}</i>
            <p></p>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            className="bi bi-arrow-right arrow-icon"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
            />
          </svg>
        </div>
      </a>
    </>
  );
}

ProjectCard.propTypes = {
  info: PropTypes.shape({
    projectname: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
  }).isRequired,
};
