import PropTypes from "prop-types";

const Button = (props) => {
  return <button onClick={(e) => console.log(e.target)}>{props.text}</button>;
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Button;
