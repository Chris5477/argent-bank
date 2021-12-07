import Proptypes from "prop-types";

const Button = ({ nameClass, type, text, attribut }) => {
  return (
    <button className={nameClass} type={type} disabled={attribut}>
      {text}
    </button>
  );
};

Button.prototype = {
  nameClass: Proptypes.string.isRequired,
  type: Proptypes.string,
  text: Proptypes.string.isRequired,
  attribut: Proptypes.string,
};
export default Button;
