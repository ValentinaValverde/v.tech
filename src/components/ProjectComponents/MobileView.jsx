import PropTypes from "prop-types";

export function MobileView({ info }) {
  return (
    <>
      <div className="mobile">
        <p>Mobile View</p>
        <div className="mobile-views">
          <img src={info.img1} className="img" />
          <img src={info.img2} className="img" />
          <img src={info.img3} className="img" />
        </div>
      </div>
    </>
  );
}

MobileView.propTypes = {
  info: PropTypes.shape({
    img1: PropTypes.string.isRequired,
    img2: PropTypes.string.isRequired,
    img3: PropTypes.string.isRequired,
  }).isRequired,
};
