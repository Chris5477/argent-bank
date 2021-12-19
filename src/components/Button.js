const Button = ({ nameClass, text, method }) => {
	return (
		<button onClick={() => method && method()} className={nameClass}>
			{text}
		</button>
	);
};
export default Button;
