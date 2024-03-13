// import style from "./Button.module.css";
import PropTypes from "prop-types";

const ButtonView = ({ link }) => {
  return <a href={link}>View Recipe</a>;
};

ButtonView.propTypes = {
  link: PropTypes.string.isRequired,
};

export default ButtonView;
