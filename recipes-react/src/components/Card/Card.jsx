// import Image from "../Image/Image";
// import ButtonView from "../Button/ButtonView";
import style from "./Card.module.css";
import PropTypes from "prop-types";

const Card = ({ children }) => {
  return <div className={style.card}>{children}</div>;
};

Card.propTypes = {
  name: PropTypes.string,
  link: PropTypes.string,
  description: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string,
  size: PropTypes.string,
  children: PropTypes.any,
};

export default Card;
