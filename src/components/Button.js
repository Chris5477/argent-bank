import PropTypes from "prop-types";

const Button = ({ nameClass, text, method }) => {
	return (
		<button onClick={() => method && method()} className={nameClass}>
			{text}
		</button>
	);
};
Button.propTypes = {
	nameClass: PropTypes.string.isRequired,
	text: PropTypes.any,
	method: PropTypes.func,
};
export default Button;
