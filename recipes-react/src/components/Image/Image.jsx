import PropTypes from "prop-types";

const Image = ({ src, alt, size }) => {
  return <img src={src} alt={alt} width={size} />;
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
};

export default Image;
