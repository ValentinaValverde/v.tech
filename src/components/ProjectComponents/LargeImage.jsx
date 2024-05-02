import PropTypes from 'prop-types';

export function LargeImageView({ info }) {
  console.log(info);

  return (
    <>
      <div className="large-img-view">
        <img src={info.img} />
        <div className="desc">
          <p>{info.desc}</p>
          <a href={info.githublink} target="_blank">
            Github
          </a>
        </div>
      </div>
    </>
  );
}

LargeImageView.propTypes = {
  info: PropTypes.shape({
    img: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    githublink: PropTypes.string.isRequired,
  }).isRequired,
};
