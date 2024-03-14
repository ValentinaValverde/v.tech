import PropTypes from "prop-types";

export function CoolThing({ info }) {
  return (
    <>
      <div className="cool-thing">
        <div className="info">
          <i className="funny">a cool thing</i>
          <p className="upper">{info.title}</p>
          <p>{info.desc}</p>
        </div>
        <img src={info.img} />
      </div>
    </>
  );
}

CoolThing.propTypes = {
  info: PropTypes.shape({
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
  }).isRequired,
};
