import PropTypes from "prop-types";

export default function WireframeCard({ info }) {
  return (
    <>
      <div className="wireframe-card">
        <img src={info.img} />
        <p className="upper">{info.title}</p>
      </div>
    </>
  );
}

WireframeCard.propTypes = {
  info: PropTypes.shape({
    title: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
  }).isRequired,
};
