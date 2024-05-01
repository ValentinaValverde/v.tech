import PropTypes from 'prop-types';

export default function GalleryCard({ info }) {
  return (
    <>
      <div className="gallery-card">
        <img src={info.img1} alt="" />
        <p>{info.cpt1}</p>
      </div>
    </>
  );
}

GalleryCard.propTypes = {
  info: PropTypes.shape({
    img1: PropTypes.string.isRequired,
    img2: PropTypes.string.isRequired,
    img3: PropTypes.string.isRequired,
    img4: PropTypes.string.isRequired,
    cpt1: PropTypes.string.isRequired,
    cpt2: PropTypes.string.isRequired,
    cpt3: PropTypes.string.isRequired,
    cpt4: PropTypes.string.isRequired,
  }).isRequired,
};
