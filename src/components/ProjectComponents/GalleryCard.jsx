import PropTypes from 'prop-types';

export default function GalleryCard({ info }) {
  return (
    <>
      <div className="gallery-card">
        <img src={info.img} alt={info.alt} />
        <i className="cpt">{info.cpt}</i>
      </div>
    </>
  );
}

GalleryCard.propTypes = {
  info: PropTypes.shape({
    img: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    cpt: PropTypes.string.isRequired,
  }).isRequired,
};
