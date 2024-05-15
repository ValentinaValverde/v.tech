import PropTypes from 'prop-types';

export default function InfoBlock({ info }) {
  return (
    <div>
      <p>{info.text}</p>
    </div>
  );
}

InfoBlock.propTypes = {
  info: PropTypes.shape({
    text: PropTypes.string.isRequired,
  }).isRequired,
};
